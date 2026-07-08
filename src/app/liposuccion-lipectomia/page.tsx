import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import WhatsAppButton from "@/components/WhatsAppButton";

const whatsappUrl =
  "https://wa.me/573XXXXXXXXX?text=Hola%2C%20quiero%20agendar%20mi%20valoraci%C3%B3n%20para%20liposucci%C3%B3n%20o%20lipectom%C3%ADa%20en%20Cali.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.tiffanyesthetic.com/liposuccion-lipectomia#webpage",
      url: "https://www.tiffanyesthetic.com/liposuccion-lipectomia",
      name: "Liposucción y Lipectomía en Cali",
      description:
        "Información médica sobre liposucción, lipectomía y transferencia de grasa autóloga en Tiffany Esthetic Group IPS SAS.",
      inLanguage: "es",
      medicalAudience: "Patient",
      aspect: "Treatment",
    },
    {
      "@type": "MedicalClinic",
      name: "Tiffany Esthetic Group IPS",
      image: "https://www.tiffanyesthetic.com/icon.svg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Cra. 35 #5A-57, Barrio Granada",
        addressLocality: "Cali",
        addressRegion: "Valle del Cauca",
        addressCountry: "CO",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 3.3811893,
        longitude: -76.5357955,
      },
      telephone: "+57-602-XXX-XXXX",
      medicalSpecialty: "PlasticSurgery",
    },
    {
      "@type": "MedicalProcedure",
      name: "Liposucción",
      procedureType: "SurgicalProcedure",
      bodyLocation: ["Abdomen", "Flanks", "Back", "Tighs", "Arms"],
      description:
        "Remoción quirúrgica de depósitos de grasa localizada en zonas específicas del cuerpo.",
    },
    {
      "@type": "MedicalProcedure",
      name: "Lipectomía o Abdominoplastia",
      procedureType: "SurgicalProcedure",
      bodyLocation: ["Abdomen"],
      description:
        "Procedimiento quirúrgico para retirar exceso de piel y tejido graso abdominal, y mejorar la firmeza de la pared abdominal.",
    },
    {
      "@type": "MedicalProcedure",
      name: "Transferencia de grasa autóloga",
      procedureType: "SurgicalProcedure",
      bodyLocation: ["Gluteal Region"],
      description:
        "Recolección, procesamiento y aplicación de grasa del propio paciente en áreas como la región glútea.",
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Liposucción y Lipectomía en Cali | Tiffany Esthetic Group IPS SAS",
  description:
    "Valoración médica para liposucción, lipectomía y transferencia de grasa autóloga en Cali. IPS habilitada, salas de cirugía, recuperación y personal calificado. Agenda tu cita.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/liposuccion-lipectomia",
  },
  openGraph: {
    title: "Liposucción y Lipectomía en Cali",
    description:
      "Moldeamiento corporal con valoración médica, instalaciones habilitadas y acompañamiento quirúrgico.",
    url: "https://www.tiffanyesthetic.com/liposuccion-lipectomia",
    siteName: "Tiffany Esthetic Group IPS SAS",
    locale: "es_CO",
    type: "article",
  },
};

const procedures = [
  {
    title: "Liposucción",
    desc: "Remueve depósitos de grasa localizada en zonas como abdomen, flancos, espalda, muslos o brazos mediante aspiración selectiva.",
  },
  {
    title: "Transferencia de grasa",
    desc: "Recolecta grasa del propio paciente, la procesa y la aplica en áreas como la región glútea para mejorar el contorno corporal.",
  },
  {
    title: "Lipectomía o abdominoplastia",
    desc: "Retira exceso de piel y tejido graso abdominal. En algunos casos mejora la firmeza de la pared abdominal y redefine la silueta.",
  },
];

const benefits = [
  "Mejora del contorno corporal en zonas con grasa localizada o exceso de piel.",
  "Redistribución de grasa autóloga en áreas como la región glútea cuando está indicado.",
  "Resultados duraderos si se mantienen hábitos saludables y controles médicos.",
  "Acompañamiento clínico durante valoración, procedimiento y recuperación.",
];

const safetySteps = [
  "Valoración médica obligatoria para revisar antecedentes, objetivos y determinar la idoneidad del paciente.",
  "Explicación detallada del procedimiento, alternativas disponibles y posibles complicaciones.",
  "Firma de consentimiento informado antes de cualquier intervención quirúrgica.",
  "Atención en instalaciones habilitadas con protocolos de bioseguridad vigentes.",
  "Controles posteriores programados y recomendaciones personalizadas para la recuperación.",
];

const candidates = [
  {
    title: "Estado de salud adecuado",
    desc: "Confirmado mediante exámenes de laboratorio y valoración preanestésica por el equipo médico.",
  },
  {
    title: "Grasa localizada o exceso de piel",
    desc: "Pacientes con depósitos adiposos resistentes a dieta y ejercicio, o piel abdominal sobrante.",
  },
  {
    title: "Expectativas realistas",
    desc: "Basadas en la anatomía individual del paciente y explicadas durante la consulta presencial.",
  },
  {
    title: "Compromiso con el postoperatorio",
    desc: "Disposición para cumplir reposo relativo, uso de prendas de compresión y controles médicos.",
  },
  {
    title: "IMC en rangos seguros",
    desc: "Índice de Masa Corporal compatible con procedimientos quirúrgicos, verificado en la valoración.",
  },
  {
    title: "Comprensión de riesgos",
    desc: "Pacientes que entienden los beneficios, riesgos y alternativas antes de decidir.",
  },
];

const recoveryTimeline = [
  {
    period: "Primeras 24 a 48 horas",
    desc: "Reposo moderado. Es normal presentar inflamación, drenaje de fluidos y molestias controlables con analgesia formulada.",
  },
  {
    period: "Primera semana (días 1 a 7)",
    desc: "Uso obligatorio de prendas de compresión. Se recomienda iniciar drenaje linfático suave según indicación médica.",
  },
  {
    period: "Primer mes",
    desc: "Restricción de esfuerzo físico. Retorno progresivo a actividades cotidianas sin carga. Controles médicos periódicos.",
  },
  {
    period: "Retorno a actividades físicas",
    desc: "Caminatas desde la primera semana. Ejercicio moderado a partir de la cuarta a sexta semana con autorización médica.",
  },
];

const faqs = [
  {
    q: "¿La liposucción sirve para bajar de peso?",
    a: "No. Es un procedimiento de contorno corporal, no un tratamiento para la obesidad ni una alternativa a una alimentación balanceada y ejercicio regular.",
  },
  {
    q: "¿La grasa transferida es permanente?",
    a: "Una parte de la grasa transferida puede ser reabsorbida por el cuerpo. La permanencia depende de factores individuales, técnica médica y cuidados posteriores. El cirujano planifica un volumen adicional para compensar este fenómeno.",
  },
  {
    q: "¿Cuánto tiempo dura la incapacidad?",
    a: "Depende del procedimiento, la extensión tratada y la evolución del paciente. El médico tratante indicará el tiempo adecuado durante la valoración y los controles posteriores.",
  },
  {
    q: "¿Qué diferencia hay entre liposucción y lipectomía?",
    a: "La liposucción remueve grasa localizada mediante cánulas de aspiración. La lipectomía o abdominoplastia retira exceso de piel y tejido graso abdominal, y puede restaurar la firmeza de la pared muscular cuando está indicado.",
  },
  {
    q: "¿Estos procedimientos son seguros?",
    a: "Todo procedimiento quirúrgico implica riesgos. Realizarlos en instituciones habilitadas y por profesionales idóneos ayuda a minimizar complicaciones, pero no las elimina por completo. La valoración médica previa es obligatoria para determinar la relación riesgo-beneficio.",
  },
  {
    q: "¿Qué exámenes médicos necesito antes de la cirugía?",
    a: "Se requieren exámenes preoperatorios básicos: cuadro hemático, pruebas de coagulación, función renal, prueba de embarazo (si aplica) y valoración cardiológica con aprobación del anestesiólogo.",
  },
];

function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

function SectionHeader({
  label,
  title,
  desc,
}: {
  label: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
        {label}
      </span>
      <Heading as="h2" className="mt-3">
        {title}
      </Heading>
      {desc && (
        <p className="mt-4 text-text-main/80 font-body max-w-3xl mx-auto leading-relaxed">
          {desc}
        </p>
      )}
    </div>
  );
}

export default function LiposuccionLipectomiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <section className="relative bg-gradient-to-br from-[#0F4A44] via-[#1B6E66] to-[#2FA79C] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            }}
            aria-hidden="true"
          />
          <Container>
            <div className="relative max-w-3xl">
              <span className="inline-block text-white/70 font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4 border border-white/20 rounded-full px-4 py-1.5">
                Cirugía Corporal
              </span>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight text-balance">
                Liposucción y lipectomía en Cali
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/80 font-body leading-relaxed max-w-2xl">
                Moldeamiento corporal con valoración médica, instalaciones
                habilitadas y acompañamiento quirúrgico. Procedimientos
                realizados por profesionales de la salud en IPS registrada.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#0F4A44] font-body font-bold px-8 py-3.5 rounded-full hover:bg-white/90 transition-all duration-300 text-base shadow-lg shadow-black/20 no-underline"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Agendar valoración médica
                </a>
                <a
                  href="#procedimientos"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-body font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all duration-300 text-base no-underline"
                >
                  Ver procedimientos
                </a>
              </div>
              <p className="mt-6 text-sm text-white/60 font-body">
                Todo procedimiento quirúrgico implica riesgos. La idoneidad del
                paciente debe ser evaluada previamente mediante valoración
                médica presencial.
              </p>
            </div>
          </Container>
        </section>

        <Section id="que-es" className="bg-white">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <SectionHeader
                label="¿Qué son?"
                title="Liposucción, lipectomía y transferencia de grasa"
              />
              <div className="space-y-5 text-text-main/80 font-body leading-relaxed">
                <p>
                  La liposucción y la lipectomía son procedimientos quirúrgicos
                  orientados al contorno corporal. Mientras la liposucción aspira
                  depósitos de grasa localizada, la lipectomía (o abdominoplastia)
                  retira exceso de piel y tejido graso abdominal, mejorando la
                  firmeza de la pared muscular cuando está indicado.
                </p>
                <h3 className="font-heading font-bold text-text-dark text-lg">
                  Diferencia entre liposucción y lipectomía
                </h3>
                <p>
                  La liposucción se enfoca en la grasa profunda y superficial,
                  remodelando el contorno mediante cánulas finas. La lipectomía
                  aborda el exceso de piel —frecuente después de pérdidas
                  significativas de peso o embarazos— y puede incluir la
                  reparación de la pared abdominal (diástasis).
                </p>
                <h3 className="font-heading font-bold text-text-dark text-lg">
                  Transferencia de grasa autóloga
                </h3>
                <p>
                  La grasa extraída puede procesarse y reinyectarse en áreas como
                  la región glútea para mejorar volumen y proyección, utilizando
                  tejido vivo del propio paciente sin materiales sintéticos.
                </p>
              </div>
            </div>
            <div className="bg-[#FBFBF9] rounded-2xl p-8 border border-silver/20">
              <div className="flex items-start gap-3 mb-4">
                <svg
                  className="w-6 h-6 text-primary shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <h3 className="font-heading font-bold text-text-dark text-lg">
                  Seguridad y habilitación
                </h3>
              </div>
              <p className="text-sm text-text-main/80 font-body leading-relaxed">
                Tiffany Esthetic Group IPS es una institución prestadora de
                servicios de salud debidamente habilitada ante las autoridades
                sanitarias de Colombia, con salas de cirugía, recuperación,
                farmacia y personal calificado para procedimientos quirúrgicos.
              </p>
              <div className="mt-6 bg-primary/5 rounded-xl p-5 border border-primary/10">
                <p className="text-sm font-body font-semibold text-primary-dark">
                  Todo procedimiento requiere valoración médica presencial,
                  exámenes preoperatorios y consentimiento informado.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="procedimientos" className="bg-[#FBFBF9]">
          <SectionHeader
            label="Procedimientos"
            title="Opciones de contorno corporal"
            desc="La elección del procedimiento depende de la historia clínica, anatomía, expectativas y criterio médico."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {procedures.map((item, i) => (
              <article
                key={item.title}
                className="relative bg-white rounded-2xl p-8 border border-silver/20 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-body font-bold text-sm mb-5">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-heading font-bold text-text-dark text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-text-main/80 font-body leading-relaxed">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="beneficios" className="bg-white">
          <SectionHeader
            label="Beneficios"
            title="¿Qué puede mejorar el moldeamiento corporal?"
            desc="Los resultados varían según cada paciente, sus condiciones de salud, hábitos y seguimiento médico."
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((item) => (
              <div
                key={item}
                className="bg-[#FBFBF9] rounded-xl p-6 border border-silver/20 flex gap-4 items-start"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-sm text-text-main/80 font-body leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Section>

        <section className="bg-primary-deep py-16 md:py-24 text-white">
          <Container>
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
              <div>
                <span className="font-body text-sm font-semibold uppercase tracking-widest text-white/65">
                  Seguridad
                </span>
                <Heading as="h2" className="mt-3 !text-white">
                  Atención médica con protocolos establecidos
                </Heading>
                <p className="mt-4 text-white/75 font-body">
                  La seguridad se construye antes, durante y después del
                  procedimiento. Por eso el primer paso es siempre una
                  valoración médica presencial.
                </p>
              </div>
              <ol className="grid gap-4">
                {safetySteps.map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-white/80 font-body">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </section>

        <Section id="candidatos" className="bg-white">
          <SectionHeader
            label="Candidatos"
            title="¿Quién puede considerar estos procedimientos?"
            desc="La idoneidad del paciente se determina mediante evaluación clínica presencial obligatoria."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {candidates.map((item) => (
              <div
                key={item.title}
                className="bg-[#FBFBF9] rounded-xl p-6 border border-silver/20"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-text-dark text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-main/80 font-body leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="riesgos-recuperacion" className="bg-[#FBFBF9]">
          <SectionHeader
            label="Riesgos y recuperación"
            title="Información importante antes de decidir"
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl p-8 border border-silver/20 shadow-sm">
              <h3 className="font-heading font-bold text-text-dark text-lg mb-4">
                Riesgos posibles
              </h3>
              <p className="text-sm text-text-main/80 font-body leading-relaxed">
                Pueden presentarse inflamación, dolor, hematomas, infección,
                irregularidades del contorno, reabsorción parcial de grasa
                transferida, complicaciones anestésicas y, en casos poco
                frecuentes, eventos tromboembólicos. El equipo médico explicará
                estos riesgos en detalle durante la valoración.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-silver/20 shadow-sm">
              <h3 className="font-heading font-bold text-text-dark text-lg mb-4">
                Recuperación general
              </h3>
              <p className="text-sm text-text-main/80 font-body leading-relaxed">
                El tiempo de recuperación depende del tipo y extensión del
                procedimiento. De forma general incluye reposo relativo inicial,
                uso de prendas de compresión y controles médicos posteriores
                obligatorios. El médico tratante indicará el plan según cada
                caso.
              </p>
            </div>
          </div>

          <SectionHeader
            label="Recuperación"
            title="Postoperatorio y evolución"
            desc="El proceso de recuperación es progresivo. Cada etapa requiere cuidados específicos."
          />
          <div className="max-w-3xl mx-auto space-y-6">
            {recoveryTimeline.map((item) => (
              <div
                key={item.period}
                className="relative pl-8 md:pl-12 border-l-2 border-primary/30"
              >
                <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
                <h3 className="font-heading font-bold text-text-dark text-lg">
                  {item.period}
                </h3>
                <p className="mt-2 text-sm text-text-main/80 font-body leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="faq" className="bg-white">
          <SectionHeader
            label="FAQ"
            title="Preguntas frecuentes"
          />
          <div
            className="max-w-3xl mx-auto divide-y divide-silver/20"
            itemScope
            itemType="https://schema.org/FAQPage"
          >
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group py-5"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-heading font-semibold text-text-dark text-base md:text-lg">
                  <span itemProp="name">{faq.q}</span>
                  <svg
                    className="w-5 h-5 text-primary shrink-0 transition-transform duration-300 group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div
                  className="mt-4 text-sm text-text-main/80 font-body leading-relaxed"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">{faq.a}</div>
                </div>
              </details>
            ))}
          </div>
        </Section>

        <section className="bg-gradient-to-br from-[#0F4A44] via-[#1B6E66] to-[#2FA79C] py-20 md:py-28">
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                Agenda tu valoración médica en Cali
              </h2>
              <p className="mt-4 text-white/80 font-body text-lg leading-relaxed">
                El primer paso es una consulta presencial para evaluar tu caso,
                resolver tus dudas y determinar el mejor tratamiento para ti.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 bg-white text-[#0F4A44] font-body font-bold px-10 py-4 rounded-full hover:bg-white/90 transition-all duration-300 text-lg shadow-xl shadow-black/20 no-underline"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar valoración médica
              </a>
              <p className="mt-6 text-sm text-white/60 font-body">
                Tiffany Esthetic Group IPS — Institución Prestadora de Servicios
                de Salud habilitada ante las autoridades sanitarias de Colombia.
              </p>
            </div>
          </Container>
        </section>
      </article>

      <footer className="bg-[#223231] text-white/60 py-8">
        <Container>
          <p className="text-xs leading-relaxed text-center font-body">
            Tiffany Esthetic Group IPS es una institución prestadora de servicios
            de salud registrada y habilitada ante las autoridades sanitarias de
            Colombia. Los resultados de los procedimientos quirúrgicos estéticos
            pueden variar según las condiciones anatómicas, genéticas y los
            hábitos de vida de cada paciente. La información contenida en este
            sitio web es estrictamente educativa y no sustituye una consulta
            médica formal.
          </p>
        </Container>
      </footer>

      <WhatsAppButton />
    </>
  );
}
