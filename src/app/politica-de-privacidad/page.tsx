import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Tiffany Esthetic Group",
  description:
    "Política de tratamiento de datos personales de Tiffany Esthetic Group Ips SAS. Cumplimiento Ley 1581 de 2012, protección de datos sensibles en salud.",
  robots: "index, follow",
  openGraph: {
    title: "Política de Privacidad | Tiffany Esthetic Group",
    description:
      "Conoce cómo protegemos tus datos personales y sensibles en nuestra IPS.",
    url: "https://www.tiffanyesthetic.com/politica-de-privacidad",
    siteName: "Tiffany Esthetic Group",
    locale: "es_CO",
    type: "website",
  },
};

const sections = [
  {
    title: "1. Responsable del tratamiento",
    content: [
      "Tiffany Esthetic Group Ips SAS, identificada con NIT 901634870, con domicilio principal en la Carrera 85C # 13A-1-25, Cali, Valle del Cauca, Colombia, es la responsable del tratamiento de los datos personales suministrados a través de este sitio web y de los canales de comunicación asociados.",
      "Para cualquier consulta relacionada con la presente política, el titular puede contactarnos a través del correo electrónico tiffanyestheticgroup@gmail.com o al teléfono +57 320 2703522.",
    ],
  },
  {
    title: "2. Datos recolectados",
    content: [
      "A través de nuestro sitio web, formularios de contacto y canales de atención (WhatsApp, correo electrónico y telefónico), podemos recolectar las siguientes categorías de datos:",
      "Datos de identificación: nombres, apellidos, número de identificación, fecha de nacimiento.",
      "Datos de contacto: número telefónico, dirección de correo electrónico, dirección de residencia.",
      "Datos de salud: historial médico, condiciones de salud, alergias, cirugías previas, fotografías de antes y después de procedimientos, información sobre procedimientos estéticos y quirúrgicos.",
      "Datos de navegación: dirección IP, tipo de navegador, páginas visitadas, tiempo de navegación.",
    ],
  },
  {
    title: "3. Tratamiento de datos sensibles",
    content: [
      "Tiffany Esthetic Group Ips SAS podrá recolectar y tratar datos sensibles (historia clínica, condiciones de salud, fotografías de procedimientos quirúrgicos) exclusivamente con autorización expresa y previa del titular.",
      "El usuario no está obligado a autorizar el tratamiento de datos sensibles para navegar en el sitio web, solicitar información general o acceder a los contenidos publicados.",
      "La negativa a autorizar el tratamiento de datos sensibles no implicará restricción en la prestación de servicios que no requieran dichos datos. El consentimiento para datos sensibles se solicitará de manera explícita e independiente en cada caso.",
      "Los datos sensibles serán tratados con estrictas medidas de seguridad y confidencialidad, de conformidad con la Ley 1581 de 2012 y el Decreto 1377 de 2013.",
    ],
  },
  {
    title: "4. Finalidad del tratamiento",
    content: [
      "Los datos personales recolectados serán utilizados para las siguientes finalidades:",
      "a) Agendar, confirmar y gestionar citas y valoraciones médicas.",
      "b) Realizar evaluaciones prequirúrgicas y dar seguimiento a procedimientos realizados.",
      "c) Mantener el historial clínico de los pacientes, conforme a la normativa vigente.",
      "d) Enviar información sobre servicios, promociones y recordatorios de citas.",
      "e) Mejorar la experiencia de navegación y la calidad de nuestros servicios.",
      "f) Cumplir con obligaciones legales y regulatorias ante entidades de salud y vigilancia.",
      "g) Realizar estudios estadísticos y de satisfacción, previa anonimización de los datos.",
    ],
  },
  {
    title: "5. Derechos del titular",
    content: [
      "De conformidad con la Ley 1581 de 2012, el titular de los datos personales tiene los siguientes derechos:",
      "a) Conocer, actualizar y rectificar sus datos personales frente a la IPS.",
      "b) Solicitar prueba de la autorización otorgada.",
      "c) Ser informado sobre el uso que se ha dado a sus datos.",
      "d) Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) por infracciones a la ley.",
      "e) Revocar la autorización y/o solicitar la supresión de sus datos cuando no exista un deber legal o contractual que lo impida.",
      "f) Acceder en forma gratuita a sus datos personales.",
    ],
  },
  {
    title: "6. Procedimiento para ejercer los derechos",
    content: [
      "El titular puede ejercer sus derechos enviando una comunicación al correo electrónico tiffanyestheticgroup@gmail.com con el asunto \"Derechos Habeas Data\", indicando:",
      "Nombre completo y número de identificación del titular.",
      "Descripción clara de la solicitud (actualizar, rectificar, suprimir, revocar).",
      "Datos de contacto para respuesta.",
      "La IPS dará respuesta a la solicitud en un plazo máximo de quince (15) días hábiles contados a partir de la fecha de recepción.",
    ],
  },
  {
    title: "7. Vigencia y actualizaciones",
    content: [
      "La presente política rige a partir de su fecha de publicación. Tiffany Esthetic Group Ips SAS se reserva el derecho de modificar esta política en cualquier momento. Las modificaciones serán publicadas en este mismo sitio web.",
      "Fecha de última actualización: Julio de 2026.",
    ],
  },
];

export default function PoliticaDePrivacidad() {
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
          Política de Privacidad y Tratamiento de Datos Personales
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
                  text.match(/^(a\)|b\)|c\)|d\)|e\)|f\)|g\))/)
                    ? "pl-6"
                    : ""
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
