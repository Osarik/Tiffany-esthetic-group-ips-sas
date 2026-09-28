import nodemailer, { type Transporter } from "nodemailer";

const PLACEHOLDER_PATTERN = /^(your|tu|cambiar|cambia|change|changeme|placeholder|todo|example|xxx)[_-]/i;
const REPEATED_PATTERN = /^(.)\1{7,}$/;

export class SmtpConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SmtpConfigError";
  }
}

function isPlaceholder(value: string): boolean {
  return PLACEHOLDER_PATTERN.test(value) || REPEATED_PATTERN.test(value);
}

function readConfig() {
  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT) || 587;
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.replace(/\s+/g, "");
  const to = process.env.CONTACT_EMAIL?.trim() || user;

  if (!host || !user || !pass || !to) {
    throw new SmtpConfigError("SMTP environment variables are missing");
  }

  if (isPlaceholder(user) || isPlaceholder(pass)) {
    throw new SmtpConfigError("SMTP credentials are still placeholders");
  }

  return { host, port, user, pass, to };
}

let cached: Transporter | null = null;
let cachedKey = "";

export function isSmtpConfigured(): boolean {
  try {
    readConfig();
    return true;
  } catch {
    return false;
  }
}

export function getTransporter(): Transporter {
  const { host, port, user, pass } = readConfig();
  const key = `${host}:${port}:${user}`;

  if (cached && cachedKey === key) return cached;

  cached = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    requireTLS: port !== 465,
    auth: { user, pass },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  });
  cachedKey = key;

  return cached;
}

export function getContactEmail(): string {
  return readConfig().to;
}

export function getSmtpUser(): string {
  return readConfig().user;
}
