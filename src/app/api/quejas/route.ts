import { NextResponse } from "next/server";
import { getContactEmail, getSmtpUser, getTransporter, SmtpConfigError } from "@/lib/smtp";

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60_000;
const RATE_LIMIT_MAX = 5;

const typeMap: Record<string, string> = {
  complaint: "Queja",
  claim: "Reclamo",
  suggestion: "Sugerencia",
  compliment: "Felicitación",
};

const relationMap: Record<string, string> = {
  paciente: "Paciente",
  familiar: "Familiar del paciente",
  autorizado: "Autorizado",
  otro: "Otro",
};

const docTypeMap: Record<string, string> = {
  CC: "Cédula de Ciudadanía",
  CE: "Cédula de Extranjería",
  TI: "Tarjeta de Identidad",
  PA: "Pasaporte",
};

const LIMITS = {
  name: 120,
  docNumber: 30,
  email: 254,
  phone: 30,
  description: 5000,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "127.0.0.1"
  );
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) return false;

  entry.count++;
  return true;
}

function esc(value: unknown): string {
  return String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}

function clean(value: unknown, max: number): string {
  return String(value ?? "")
    .replace(/[\r\n\t]+/g, " ")
    .trim()
    .slice(0, max);
}

export async function POST(request: Request) {
  const body = await (async () => {
    try {
      return await request.json();
    } catch {
      return null;
    }
  })();

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "Solicitud invalida." }, { status: 400 });
  }

  const { name, docType, docNumber, email, phone, type, relation, description, consent, _hp } = body as Record<string, unknown>;

  if (_hp) {
    return NextResponse.json({ ok: true });
  }

  if (!checkRateLimit(getClientIp(request))) {
    return NextResponse.json(
      { ok: false, error: "Demasiadas solicitudes. Intenta de nuevo en un minuto." },
      { status: 429 }
    );
  }

  const cleanName = clean(name, LIMITS.name);
  const cleanEmail = clean(email, LIMITS.email);
  const cleanDescription = clean(description, LIMITS.description);
  const cleanDocNumber = clean(docNumber, LIMITS.docNumber);
  const cleanPhone = clean(phone, LIMITS.phone);
  const typeLabel = typeMap[String(type)] || "Formulario";
  const relationLabel = relationMap[String(relation)] || "—";
  const docTypeLabel = docTypeMap[String(docType)] || clean(docType, LIMITS.docNumber) || "—";

  const errors: string[] = [];
  if (!cleanName) errors.push("Nombre es requerido");
  if (!cleanEmail) errors.push("Correo es requerido");
  else if (!EMAIL_PATTERN.test(cleanEmail)) errors.push("Correo no es valido");
  if (!cleanDescription) errors.push("Descripcion es requerida");
  if (!consent) errors.push("Debe autorizar el tratamiento de datos");

  if (errors.length > 0) {
    return NextResponse.json({ ok: false, error: errors.join(". ") }, { status: 400 });
  }

  const subject = `[${typeLabel}] ${cleanName} - ${new Date().toLocaleDateString("es-CO")}`;

  const rows: Array<[string, string]> = [
    ["Nombre", cleanName],
    ["Documento", `${docTypeLabel} ${cleanDocNumber}`.trim() || "—"],
    ["Correo", cleanEmail],
    ["Telefono", cleanPhone || "—"],
    ["Tipo", typeLabel],
    ["Relacion", relationLabel],
    ["Descripcion", cleanDescription],
  ];

  const html = `
      <h2>Nuevo ${esc(typeLabel)} — Tiffany Esthetic Group IPS</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;">
        ${rows
          .map(
            ([label, value], index) =>
              `<tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold;${index === rows.length - 1 ? "vertical-align:top;" : ""}">${esc(label)}</td><td style="padding:8px 12px;${index === rows.length - 1 ? "white-space:pre-wrap;" : ""}">${esc(value)}</td></tr>`
          )
          .join("")}
      </table>
      <hr style="margin-top:24px;" />
      <p style="color:#666;font-size:12px;">Enviado desde el formulario de quejas y reclamos de www.clinicatiffany.com</p>
    `;

  const text = [
    `Nuevo ${typeLabel} — Tiffany Esthetic Group IPS`,
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Enviado desde el formulario de quejas y reclamos de www.clinicatiffany.com",
  ].join("\n");

  try {
    await getTransporter().sendMail({
      from: `"Quejas y Reclamos" <${getSmtpUser()}>`,
      to: getContactEmail(),
      replyTo: cleanEmail,
      subject,
      html,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof SmtpConfigError) {
      console.error("SMTP misconfigured:", err.message);
      return NextResponse.json(
        { ok: false, error: "El servicio de correo no esta disponible en este momento." },
        { status: 503 }
      );
    }

    const rawCode = (err as { code?: string }).code || "UNKNOWN";
    const code = `SMTP_${String(rawCode).toUpperCase().replace(/[^A-Z0-9]/g, "")}`;
    console.error("Error sending complaint email:", rawCode, err);

    const body: { ok: false; error: string; code: string; detail?: string } = {
      ok: false,
      error: "No pudimos enviar tu mensaje. Intenta de nuevo en unos minutos.",
      code,
    };

    if (process.env.SMTP_DEBUG === "1") {
      body.detail = String((err as { message?: string }).message || "").slice(0, 300);
    }

    return NextResponse.json(body, { status: 502 });
  }
}
