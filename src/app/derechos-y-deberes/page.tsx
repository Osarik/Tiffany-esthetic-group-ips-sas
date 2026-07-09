import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Derechos y Deberes del Paciente | Tiffany Esthetic Group",
  description:
    "Carta de derechos y deberes del paciente de Tiffany Esthetic Group Ips SAS, conforme a la Resolución 434 de 2012 y normativa de la Superintendencia Nacional de Salud.",
  robots: "index, follow",
  openGraph: {
    title: "Derechos y Deberes del Paciente | Tiffany Esthetic Group",
    description:
      "Conoce tus derechos y deberes como paciente de nuestra IPS en Cali, Colombia.",
    url: "https://www.tiffanyesthetic.com/derechos-y-deberes",
    siteName: "Tiffany Esthetic Group",
    locale: "es_CO",
    type: "website",
  },
};

const derechos = [
  "Recibir atención médica oportuna, humanizada, segura y de calidad, conforme a los estándares habilitados por la Secretaría de Salud.",
  "Ser informado de manera clara, completa y veraz sobre su estado de salud, diagnóstico, pronóstico, alternativas de tratamiento y riesgos asociados a cualquier procedimiento quirúrgico o estético.",
  "Otorgar o denegar su consentimiento informado antes de cualquier procedimiento, así como revocarlo en cualquier momento.",
  "Acceder a su historia clínica de forma gratuita y obtener copia de la misma cuando lo solicite.",
  "Elegir libremente al profesional de la salud que lo atenderá, dentro de los disponibles en la IPS.",
  "Recibir un trato digno, respetuoso y confidencial en todo momento, protegiendo su intimidad y privacidad.",
  "Ser atendido sin discriminación por razones de edad, género, raza, religión, orientación sexual, condición socioeconómica o cualquier otra.",
  "Presentar sugerencias, quejas, reclamos y felicitaciones ante la IPS y ante la Superintendencia Nacional de Salud, cuando considere que sus derechos han sido vulnerados.",
];

const deberes = [
  "Suministrar información veraz, completa y actualizada sobre su estado de salud, antecedentes médicos, alergias, medicamentos y cualquier condición relevante para su atención.",
  "Cumplir con las indicaciones, recomendaciones y tratamientos prescritos por el equipo médico.",
  "Asistir puntualmente a las citas programadas y notificar con antelación en caso de cancelación o reprogramación.",
  "Tratar con respeto y consideración al personal médico, administrativo y a los demás pacientes de la IPS.",
  "Cuidar las instalaciones, equipos y recursos de la IPS, haciendo un uso responsable de los mismos.",
  "Seguir los protocolos de bioseguridad establecidos por la IPS durante su estancia en las instalaciones.",
  "Informar a la IPS sobre cualquier cambio en sus datos de contacto para garantizar una comunicación efectiva.",
  "Cumplir con las obligaciones financieras acordadas por los servicios prestados.",
];

export default function DerechosYDeberes() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm font-body text-primary hover:text-primary-dark transition-colors no-underline mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          Volver a Inicio
        </Link>

        <h1 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-12">
          Derechos y Deberes del Paciente
        </h1>

        <p className="font-body text-sm text-text-main leading-relaxed mb-10">
          En cumplimiento de la Resolución 434 de 2012 y la Circular 00004 de 2024 de la
          Superintendencia Nacional de Salud, Tiffany Esthetic Group Ips SAS presenta la
          siguiente carta de derechos y deberes de los pacientes.
        </p>

        <section className="mb-12">
          <h2 className="font-heading text-xl font-bold text-text-dark mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </span>
            Derechos del Paciente
          </h2>
          <ol className="space-y-4">
            {derechos.map((texto, i) => (
              <li key={i} className="flex gap-3 font-body text-sm text-text-main leading-relaxed">
                <span className="text-primary font-bold flex-shrink-0">{i + 1}.</span>
                <span>{texto}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-xl font-bold text-text-dark mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </span>
            Deberes del Paciente
          </h2>
          <ol className="space-y-4">
            {deberes.map((texto, i) => (
              <li key={i} className="flex gap-3 font-body text-sm text-text-main leading-relaxed">
                <span className="text-primary font-bold flex-shrink-0">{i + 1}.</span>
                <span>{texto}</span>
              </li>
            ))}
          </ol>
        </section>

        <p className="text-xs font-body text-silver mt-12 border-t border-silver/20 pt-6">
          Fecha de última actualización: Julio de 2026. Basado en la Resolución 434 de 2012 y normativa vigente de la Superintendencia Nacional de Salud.
        </p>
      </div>
    </main>
  );
}

import Link from "next/link";
