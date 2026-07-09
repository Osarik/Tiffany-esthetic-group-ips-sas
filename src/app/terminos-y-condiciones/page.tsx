import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Tiffany Esthetic Group",
  description:
    "Términos y condiciones de uso del sitio web de Tiffany Esthetic Group Ips SAS. Descargo de responsabilidad médica y condiciones legales.",
  robots: "index, follow",
  openGraph: {
    title: "Términos y Condiciones | Tiffany Esthetic Group",
    description:
      "Conoce los términos legales de uso de nuestro sitio web y descargo de responsabilidad médica.",
    url: "https://www.tiffanyesthetic.com/terminos-y-condiciones",
    siteName: "Tiffany Esthetic Group",
    locale: "es_CO",
    type: "website",
  },
};

const sections = [
  {
    title: "1. Aceptación de los términos",
    content: [
      "Al acceder y utilizar el sitio web de Tiffany Esthetic Group Ips SAS (en adelante \"la IPS\"), usted acepta los presentes términos y condiciones en su totalidad. Si no está de acuerdo con alguno de estos términos, le solicitamos abstenerse de utilizar este sitio.",
      "La IPS se reserva el derecho de modificar estos términos en cualquier momento, por lo que recomendamos revisarlos periódicamente.",
    ],
  },
  {
    title: "2. Descargo de responsabilidad médica",
    content: [
      "La información, imágenes, descripciones y contenidos publicados en este sitio web tienen un carácter exclusivamente informativo y orientativo. En ningún caso constituyen diagnóstico médico, recomendación personalizada, prescripción de tratamiento, ni sustituyen una valoración presencial realizada por un cirujano plástico o profesional de la salud debidamente calificado.",
      "Cada paciente es único y los resultados de los procedimientos pueden variar según las condiciones anatómicas, fisiológicas y de salud de cada persona. Las imágenes de antes y después publicadas corresponden a pacientes reales de la IPS y se publican con su autorización expresa, pero no garantizan resultados idénticos en otros pacientes.",
      "La información disponible en este sitio no crea una relación médico-paciente entre usted y Tiffany Esthetic Group Ips SAS. Para establecer dicha relación, es necesario agendar una cita de valoración presencial.",
      "Si está experimentando una emergencia médica, comuníquese inmediatamente con las líneas de emergencia locales o acuda al servicio de urgencias más cercano.",
    ],
  },
  {
    title: "3. Uso del sitio web",
    content: [
      "El usuario se compromete a utilizar este sitio web de conformidad con la ley, la moral, el orden público y los presentes términos. Queda prohibido:",
      "a) Utilizar el sitio para fines fraudulentos o ilícitos.",
      "b) Reproducir, distribuir o modificar los contenidos sin autorización expresa de la IPS.",
      "c) Introducir virus, malware o cualquier código dañino en el sitio.",
      "d) Suplantar la identidad de otras personas o entidades.",
      "e) Recopilar datos personales de otros usuarios sin su consentimiento.",
    ],
  },
  {
    title: "4. Propiedad intelectual",
    content: [
      "Todos los contenidos del sitio web, incluyendo textos, imágenes, logotipos, videos, diseños y elementos gráficos, son propiedad de Tiffany Esthetic Group Ips SAS o se utilizan con licencia de sus titulares. Queda prohibida su reproducción total o parcial sin autorización escrita.",
      "El logotipo de Tiffany Esthetic Group (cuadrícula 3×3 con círculo central) es marca registrada y no puede ser utilizado sin autorización expresa.",
    ],
  },
  {
    title: "5. Enlaces a terceros",
    content: [
      "Este sitio web puede contener enlaces a plataformas externas como Instagram y WhatsApp. La IPS no se hace responsable por las prácticas de privacidad, términos de uso o contenidos de dichas plataformas. Se recomienda al usuario revisar las políticas de cada sitio externo que visite.",
    ],
  },
  {
    title: "6. Jurisdicción aplicable",
    content: [
      "Los presentes términos y condiciones se rigen por las leyes de la República de Colombia. Cualquier controversia derivada del uso de este sitio web será sometida a los jueces y tribunales de la ciudad de Cali, Valle del Cauca, renunciando a cualquier otro fuero que pudiera corresponder.",
    ],
  },
];

export default function TerminosYCondiciones() {
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

        <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs font-body text-amber-800 leading-relaxed">
          Este documento fue redactado originalmente en español. Las traducciones generadas automáticamente son solo para referencia y pueden contener imprecisiones. En caso de discrepancia, prevalece la versión en español.
        </div>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-12">
          Términos y Condiciones
        </h1>

        {sections.map((section) => (
          <section key={section.title} className="mb-10">
            <h2 className="font-heading text-xl font-bold text-text-dark mb-4">
              {section.title}
            </h2>
            {section.content.map((text, i) => (
              <p
                key={i}
                className={`font-body text-sm text-text-main leading-relaxed mb-3 ${
                  text.match(/^(a\)|b\)|c\)|d\)|e\))/) ? "pl-6" : ""
                }`}
              >
                {text}
              </p>
            ))}
          </section>
        ))}

        <p className="text-xs font-body text-silver mt-12 border-t border-silver/20 pt-6">
          Fecha de última actualización: Julio de 2026.
        </p>
      </div>
    </main>
  );
}

import Link from "next/link";
