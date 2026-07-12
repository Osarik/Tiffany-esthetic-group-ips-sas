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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, docType, docNumber, email, phone, type, relation, description, consent } = body;

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
      <h2>Nuevo ${typeMap[type] || "Formulario"} — Tiffany Esthetic Group IPS</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;">
        <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold;">Nombre</td><td style="padding:8px 12px;">${name}</td></tr>
        <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold;">Documento</td><td style="padding:8px 12px;">${docType} ${docNumber}</td></tr>
        <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold;">Correo</td><td style="padding:8px 12px;">${email}</td></tr>
        <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold;">Teléfono</td><td style="padding:8px 12px;">${phone || "—"}</td></tr>
        <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold;">Tipo</td><td style="padding:8px 12px;">${typeMap[type] || "—"}</td></tr>
        <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold;">Relación</td><td style="padding:8px 12px;">${relation}</td></tr>
        <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold;vertical-align:top;">Descripción</td><td style="padding:8px 12px;white-space:pre-wrap;">${description}</td></tr>
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
