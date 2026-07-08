import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";

const whatsappUrl =
  "https://wa.me/573XXXXXXXXX?text=Hola%2C%20quiero%20agendar%20mi%20valoraci%C3%B3n%20para%20rinoplastia%20en%20Cali.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.tiffanyesthetic.com/rinoplastia#webpage",
      url: "https://www.tiffanyesthetic.com/rinoplastia",
      name: "Rinoplastia en Cali | Cirugía Nasal",
      description:
        "Cirugía nasal enfocada en la armonía facial y la función respiratoria cuando aplica. IPS habilitada en Cali. Agenda tu valoración médica.",
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
      name: "Rinoplastia",
      procedureType: "SurgicalProcedure",
      bodyLocation: ["Nose"],
      description:
        "Cirugía nasal para mejorar la armonía facial y, cuando aplica, la función respiratoria. Puede realizarse mediante técnica abierta o cerrada.",
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Rinoplastia en Cali | Cirugía Nasal | Tiffany Esthetic Group IPS SAS",
  description:
    "Cirugía nasal enfocada en la armonía facial y la función respiratoria cuando aplica. IPS habilitada en Cali. Rinoplastia abierta y cerrada. Agenda tu valoración.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/rinoplastia",
  },
  openGraph: {
    title: "Rinoplastia en Cali",
    description:
      "Cirugía nasal para armonía facial y función respiratoria. Técnicas abierta y cerrada adaptadas a cada paciente.",
    url: "https://www.tiffanyesthetic.com/rinoplastia",
    siteName: "Tiffany Esthetic Group IPS SAS",
    locale: "es_CO",
    type: "article",
  },
};

const procedureSteps = [
  {
    number: "01",
    title: "Valoración clínica y análisis facial",
    desc: "Evaluación del estado de salud general, análisis de la anatomía nasal interna y externa, estudio de la función respiratoria, exámenes preoperatorios y valoración por anestesiología.",
  },
  {
    number: "02",
    title: "Planificación quirúrgica personalizada",
    desc: "El cirujano define la técnica (abierta o cerrada), los abordajes necesarios y las modificaciones específicas de la estructura osteocartilaginosa según la anatomía y expectativas del paciente.",
  },
  {
    number: "03",
    title: "Acceso y remodelación nasal",
    desc: "Mediante incisiones estratégicas (endonasales en técnica cerrada o externa en técnica abierta), se remodelan el dorso, la punta, las fosas nasales y el tabique según el plan quirúrgico.",
  },
  {
    number: "04",
    title: "Corrección funcional (si aplica)",
    desc: "Cuando existe obstrucción respiratoria, se corrigen desviaciones del tabique nasal, hipertrofia de cornetes u otras alteraciones que afectan la función respiratoria.",
  },
  {
    number: "05",
    title: "Cierre y taponamiento nasal",
    desc: "Sutura de incisiones, colocación de férula nasal externa para proteger y estabilizar la nueva estructura, y taponamiento nasal cuando está indicado.",
  },
];

const techniques = [
  {
    title: "Rinoplastia abierta",
    desc: "Técnica que realiza una pequeña incisión externa en la columela (el puente de piel entre las fosas nasales), permitiendo una visualización directa y completa de la estructura osteocartilaginosa. Indicada para casos complejos que requieren remodelación detallada.",
  },
  {
    title: "Rinoplastia cerrada",
    desc: "Técnica que realiza todas las incisiones en el interior de las fosas nasales, sin cicatrices externas visibles. Indicada para casos seleccionados donde las modificaciones necesarias pueden realizarse mediante abordaje endonasal.",
  },
  {
    title: "Rinoplastia funcional",
    desc: "Enfocada en corregir alteraciones que afectan la respiración, como desviación del tabique nasal, hipertrofia de cornetes o colapso de la válvula nasal. Puede combinarse con la rinoplastia estética en el mismo procedimiento.",
  },
];

const benefits = [
  "Mejora de la armonía y el equilibrio facial mediante la remodelación nasal.",
  "Corrección de alteraciones respiratorias cuando existen obstrucciones nasales.",
  "Resultados permanentes en la estructura ósea y cartilaginosa una vez consolidada.",
  "Técnicas adaptadas a la anatomía única de cada paciente, respetando sus rasgos faciales.",
];

const safetySteps = [
  "Valoración médica obligatoria para evaluar antecedentes, anatomía nasal, función respiratoria y expectativas del paciente.",
  "Explicación detallada de la técnica quirúrgica seleccionada, abordaje, alternativas y complicaciones potenciales.",
  "Firma de consentimiento informado antes de cualquier intervención quirúrgica.",
  "Atención en instalaciones habilitadas con protocolos de bioseguridad, equipos de emergencia y personal calificado.",
  "Controles posteriores programados y recomendaciones para el cuidado de la nariz durante la recuperación.",
];

const candidates = [
  {
    title: "Inconformidad con la forma nasal",
    desc: "Pacientes que desean modificar el dorso, la punta, el ancho o la simetría de su nariz para mejorar la armonía facial.",
  },
  {
    title: "Dificultad respiratoria",
    desc: "Personas con obstrucción nasal causada por desviación del tabique, cornetes hipertrofiados u otras alteraciones funcionales.",
  },
  {
    title: "Expectativas realistas",
    desc: "Comprensión de que el resultado final evoluciona durante varios meses y depende de la anatomía individual y el proceso de cicatrización.",
  },
  {
    title: "Estado de salud estable",
    desc: "Confirmado mediante exámenes preoperatorios y valoración preanestésica por el equipo médico.",
  },
  {
    title: "No fumador activo",
    desc: "El tabaquismo afecta la cicatrización y la oxigenación tisular, aumentando el riesgo de complicaciones.",
  },
  {
    title: "Desarrollo nasal completo",
    desc: "Se recomienda que el crecimiento facial haya finalizado (generalmente a partir de los 16-18 años en mujeres y 18-20 en hombres).",
  },
];

const recoveryTimeline = [
  {
    period: "Primeras 24 a 48 horas",
    desc: "Reposo con la cabeza elevada para reducir inflamación. Es normal presentar edema y equimosis (moretones) alrededor de los ojos. Uso de férula nasal externa.",
  },
  {
    period: "Primera semana (días 1 a 7)",
    desc: "Retiro de taponamiento nasal (si se colocó) y férula externa. El edema facial y los moretones comienzan a disminuir. Evitar sonarse la nariz, esfuerzos físicos y exposición solar.",
  },
  {
    period: "Primer mes",
    desc: "El edema nasal disminuye significativamente. Retorno progresivo a actividades cotidianas. Restricción de ejercicio físico intenso y deportes de contacto. Evitar el uso de gafas sobre el puente nasal.",
  },
  {
    period: "Resultado definitivo",
    desc: "La mayor parte del edema desaparece en los primeros 3 meses, pero los cambios sutiles continúan durante 6 a 12 meses. El resultado final se consolida completamente al año de la cirugía.",
  },
];

const faqs = [
  {
    q: "¿La rinoplastia duele?",
    a: "El procedimiento se realiza bajo anestesia general o sedación, por lo que no hay dolor intraoperatorio. Durante el postoperatorio se presenta congestión nasal, inflamación y molestias controlables con analgesia formulada. La mayoría de los pacientes refieren más incomodidad que dolor.",
  },
  {
    q: "¿Cuánto tiempo dura la inflamación?",
    a: "El edema facial significativo disminuye en las primeras 2 semanas. La inflamación nasal residual puede notarse durante varios meses. El 80% del edema desaparece en los primeros 3 meses, y los cambios restantes se resuelven gradualmente hasta el año de la cirugía.",
  },
  {
    q: "¿Quedan cicatrices visibles?",
    a: "En la rinoplastia cerrada todas las incisiones son internas, sin cicatrices externas. En la rinoplastia abierta queda una pequeña cicatriz en la columela que generalmente se atentúa hasta ser casi imperceptible con el tiempo.",
  },
  {
    q: "¿La rinoplastia afecta la respiración?",
    a: "Cuando está indicado, la rinoplastia puede mejorar la función respiratoria al corregir desviaciones del tabique, hipertrofia de cornetes o colapso valvular. Una rinoplastia bien planificada no debe empeorar la respiración. El cirujano evalúa la función nasal antes y durante el procedimiento.",
  },
  {
    q: "¿Cuándo puedo usar gafas después de la cirugía?",
    a: "Se recomienda evitar el apoyo de gafas sobre el puente nasal durante al menos 4 a 6 semanas después de la cirugía, ya que la presión puede afectar la consolidación ósea y el resultado. Pueden usarse gafas sujetas con cinta adhesiva en la frente o lentes de contacto como alternativa.",
  },
  {
    q: "¿Los resultados de la rinoplastia son permanentes?",
    a: "Los cambios realizados en el hueso y el cartílago nasal son permanentes una vez consolidados. Sin embargo, el proceso natural de envejecimiento puede modificar sutilmente la apariencia nasal con el paso de los años. Mantener un peso estable y evitar traumatismos nasales ayuda a preservar el resultado.",
  },
  {
    q: "¿Qué exámenes médicos necesito antes de la cirugía?",
    a: "Se requieren exámenes preoperatorios básicos: cuadro hemático completo, pruebas de coagulación (PT y PTT), función renal (creatinina), glicemia, prueba de embarazo (si aplica), electrocardiograma, radiografía de senos paranasales o tomografía computarizada (si se evalúa función respiratoria) y valoración por anestesiología.",
  },
  {
    q: "¿Qué es una IPS habilitada y por qué es importante?",
    a: "Una Institución Prestadora de Servicios de Salud (IPS) habilitada cumple con los estándares del Ministerio de Salud de Colombia (Resolución 3100 de 2019) en infraestructura, talento humano calificado, equipos de emergencia y bioseguridad. Elegir una IPS habilitada es fundamental para minimizar los riesgos quirúrgicos.",
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

export default function RinoplastiaPage() {
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
                Cirugía Facial
              </span>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight text-balance">
                Rinoplastia en Cali
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/80 font-body leading-relaxed max-w-2xl">
                Cirugía nasal enfocada en la armonía facial y la función
                respiratoria cuando aplica. Técnicas abierta y cerrada
                adaptadas a la anatomía de cada paciente.
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
                  href="#procedimiento"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-body font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all duration-300 text-base no-underline"
                >
                  Conocer el procedimiento
                </a>
              </div>
              <p className="mt-6 text-sm text-white/60 font-body">
                De acuerdo con la normativa colombiana, todo procedimiento
                quirúrgico requiere una valoración médica presencial previa para
                determinar la idoneidad del paciente.
              </p>
            </div>
          </Container>
        </section>

        <Section id="que-es" className="bg-white">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <SectionHeader
                label="¿Qué es?"
                title="Rinoplastia o cirugía nasal"
              />
              <div className="space-y-5 text-text-main/80 font-body leading-relaxed">
                <p>
                  La rinoplastia es el procedimiento quirúrgico que modifica la
                  forma de la nariz para mejorar la armonía facial y, cuando
                  está indicado, corregir alteraciones que afectan la función
                  respiratoria. Puede realizarse mediante técnica abierta o
                  cerrada, según la complejidad del caso y la valoración del
                  cirujano.
                </p>
                <h3 className="font-heading font-bold text-text-dark text-lg">
                  Rinoplastia estética vs. funcional
                </h3>
                <p>
                  La rinoplastia estética se enfoca en modificar la apariencia
                  externa de la nariz (dorso, punta, fosas, simetría). La
                  rinoplastia funcional (septoplastia, turbinoplastia) corrige
                  alteraciones internas que obstruyen la respiración. Ambas
                  pueden combinarse en un mismo procedimiento quirúrgico cuando
                  el paciente presenta tanto inquietudes estéticas como
                  funcionales.
                </p>
                <h3 className="font-heading font-bold text-text-dark text-lg">
                  Técnica abierta vs. cerrada
                </h3>
                <p>
                  La técnica abierta utiliza una pequeña incisión externa en la
                  columela que permite una visualización completa de la
                  estructura nasal. La técnica cerrada realiza todas las
                  incisiones por dentro de las fosas nasales, sin cicatrices
                  externas. La elección depende de la anatomía del paciente y
                  las modificaciones necesarias.
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
                  Seguridad y marco legal en Colombia
                </h3>
              </div>
              <p className="text-sm text-text-main/80 font-body leading-relaxed">
                Tiffany Esthetic Group IPS es una institución prestadora de
                servicios de salud debidamente habilitada (Resolución 3100 de
                2019 del Ministerio de Salud), con salas de cirugía,
                recuperación, farmacia y personal calificado para procedimientos
                de cirugía facial.
              </p>
              <div className="mt-4 bg-primary/5 rounded-xl p-5 border border-primary/10">
                <p className="text-sm font-body font-semibold text-primary-dark">
                  Todo procedimiento requiere valoración médica presencial,
                  exámenes preoperatorios, consentimiento informado y
                  cumplimiento de los protocolos de bioseguridad establecidos
                  por la normativa colombiana.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="procedimiento" className="bg-[#FBFBF9]">
          <SectionHeader
            label="Procedimiento"
            title="¿Cómo se realiza la rinoplastia?"
            desc="El proceso quirúrgico se desarrolla en etapas secuenciales, desde la valoración inicial hasta el postoperatorio."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {procedureSteps.map((step) => (
              <article
                key={step.number}
                className="relative bg-white rounded-2xl p-8 border border-silver/20 shadow-sm"
              >
                <span
                  className="font-heading font-bold text-5xl text-primary/10 absolute top-4 right-6 select-none"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-body font-bold text-sm mb-5 relative">
                  {step.number}
                </div>
                <h3 className="font-heading font-bold text-text-dark text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-text-main/80 font-body leading-relaxed">
                  {step.desc}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="tecnicas" className="bg-white">
          <SectionHeader
            label="Técnicas"
            title="Técnicas quirúrgicas disponibles"
            desc="La elección de la técnica depende de la anatomía nasal, los objetivos del paciente y el criterio del cirujano."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {techniques.map((item) => (
              <div
                key={item.title}
                className="bg-[#FBFBF9] rounded-2xl p-8 border border-silver/20"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                    <circle cx="9" cy="10" r="1" fill="currentColor" />
                    <circle cx="15" cy="10" r="1" fill="currentColor" />
                    <path d="M8 15c1.5 1.5 4.5 1.5 6 0" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-text-dark text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-text-main/80 font-body leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="beneficios" className="bg-[#FBFBF9]">
          <SectionHeader
            label="Beneficios"
            title="¿Qué puede mejorar la rinoplastia?"
            desc="Los resultados varían según cada paciente, sus condiciones de salud y el proceso de cicatrización."
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl p-6 border border-silver/20 flex gap-4 items-start shadow-sm"
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
                  La seguridad del paciente es la prioridad en cada etapa del
                  proceso. Por eso el primer paso es siempre una valoración
                  médica presencial obligatoria.
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
            title="¿Quién puede considerar una rinoplastia?"
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

        <Section id="resultados" className="bg-[#FBFBF9]">
          <SectionHeader
            label="Resultados"
            title="¿Qué resultados se pueden esperar?"
            desc="Los resultados anatómicos varían en cada persona. La información aquí presentada es una referencia general."
          />
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-silver/20 shadow-sm">
              <h3 className="font-heading font-bold text-text-dark text-lg mb-4">
                Resultado estético
              </h3>
              <p className="text-sm text-text-main/80 font-body leading-relaxed">
                La mejoría en la forma nasal es visible desde el retiro de la
                férula, aunque el edema inicial puede ocultar el resultado
                final. La definición del dorso, la punta y la simetría se
                consolida progresivamente a medida que la inflamación
                desaparece durante los primeros meses.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-silver/20 shadow-sm">
              <h3 className="font-heading font-bold text-text-dark text-lg mb-4">
                Resultado funcional
              </h3>
              <p className="text-sm text-text-main/80 font-body leading-relaxed">
                La mejoría en la respiración suele notarse después de que la
                inflamación interna disminuye, generalmente a partir de la
                segunda o tercera semana. El resultado funcional definitivo
                se consolida junto con la cicatrización completa de los
                tejidos nasales internos.
              </p>
            </div>
          </div>
          <div className="mt-6 text-center max-w-2xl mx-auto">
            <p className="text-xs text-text-main/60 font-body">
              Los resultados varían según las condiciones anatómicas, genéticas
              y los hábitos de vida de cada paciente. La información contenida
              en esta página es educativa y no sustituye una consulta médica
              formal.
            </p>
          </div>
        </Section>

        <Section id="recuperacion" className="bg-white">
          <SectionHeader
            label="Recuperación"
            title="Postoperatorio y evolución"
            desc="El proceso de recuperación es progresivo y requiere paciencia. El resultado final puede tardar hasta un año."
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
                El primer paso es una consulta presencial con nuestros
                especialistas para evaluar tu caso, resolver tus dudas y
                determinar si la rinoplastia es el procedimiento indicado para
                ti.
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
            Colombia (Resolución 3100 de 2019 del Ministerio de Salud y
            Protección Social). Los resultados de los procedimientos quirúrgicos
            estéticos pueden variar según las condiciones anatómicas, genéticas y
            los hábitos de vida de cada paciente. La información contenida en
            este sitio web es estrictamente educativa y no sustituye una consulta
            médica formal. Todo procedimiento quirúrgico implica riesgos; la
            idoneidad del paciente debe ser evaluada previamente mediante
            valoración médica presencial.
          </p>
        </Container>
      </footer>

    </>
  );
}
