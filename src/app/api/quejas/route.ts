import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT) || 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP not configured");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60_000;
const RATE_LIMIT_MAX = 5;

function getClientIp(request: Request): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || "127.0.0.1";
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

function esc(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { ok: false, error: "Demasiadas solicitudes. Intenta de nuevo en un minuto." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, docType, docNumber, email, phone, type, relation, description, consent, _hp } = body;

    if (_hp) {
      return NextResponse.json({ ok: true });
    }

    const errors: string[] = [];
    if (!name?.trim()) errors.push("Nombre es requerido");
    if (!email?.trim()) errors.push("Correo es requerido");
    if (!description?.trim()) errors.push("Descripción es requerida");
    if (!consent) errors.push("Debe autorizar el tratamiento de datos");
    if (errors.length > 0) {
      return NextResponse.json({ ok: false, error: errors.join(". ") }, { status: 400 });
    }

    const typeMap: Record<string, string> = {
      complaint: "Queja",
      claim: "Reclamo",
      suggestion: "Sugerencia",
      compliment: "Felicitación",
    };

    const html = `
      <h2>Nuevo ${esc(typeMap[type] || "Formulario")} — Tiffany Esthetic Group IPS</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;">
        <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold;">Nombre</td><td style="padding:8px 12px;">${esc(name)}</td></tr>
        <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold;">Documento</td><td style="padding:8px 12px;">${esc(docType)} ${esc(docNumber)}</td></tr>
        <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold;">Correo</td><td style="padding:8px 12px;">${esc(email)}</td></tr>
        <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold;">Teléfono</td><td style="padding:8px 12px;">${esc(phone) || "—"}</td></tr>
        <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold;">Tipo</td><td style="padding:8px 12px;">${esc(typeMap[type] || "—")}</td></tr>
        <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold;">Relación</td><td style="padding:8px 12px;">${esc(relation)}</td></tr>
        <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold;vertical-align:top;">Descripción</td><td style="padding:8px 12px;white-space:pre-wrap;">${esc(description)}</td></tr>
      </table>
      <hr style="margin-top:24px;" />
      <p style="color:#666;font-size:12px;">Enviado desde el formulario de quejas y reclamos de tiffanyesthetic.com</p>
    `;

    const transporter = createTransporter();
    await transporter.sendMail({
      from: `"Quejas y Reclamos" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `[${typeMap[type] || "Formulario"}] ${name} — ${new Date().toLocaleDateString("es-CO")}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("Error sending complaint email:", err);
    return NextResponse.json(
      { ok: false, error: err.message || "Error al enviar el formulario" },
      { status: 500 }
    );
  }
}
