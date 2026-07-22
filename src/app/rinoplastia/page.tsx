import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import AnimateInView, { StaggerGrid, StaggerItem } from "@/components/ui/AnimateInView";

const whatsappUrl =
  "https://wa.me/573202703522?text=Hola%2C%20quiero%20agendar%20mi%20valoraci%C3%B3n%20para%20rinoplastia%20en%20Cali.";

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
        streetAddress: "13a1-25, Cra 85c, Comuna 17",
        addressLocality: "Cali",
        addressRegion: "Valle del Cauca",
        addressCountry: "CO",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 3.3811893,
        longitude: -76.5357955,
      },
      telephone: "+57 320 270 3522",
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

const gradientFrom = "#4A8DB7";
const gradientTo = "#6DB3D9";

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
        <section className="relative bg-[#4A8DB7] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <img
              src="https://res.cloudinary.com/dkmf5vt2k/image/upload/v1783830677/ChatGPT_Image_11_jul_2026_10_34_24_p.m._nagkar.png"
              alt=""
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, #4A8DB7 0%, #4A8DB7 25%, rgba(74,141,183,0.6) 50%, rgba(109,179,217,0.25) 70%, transparent 100%)",
              }}
            />
          </div>
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <AnimateInView variant="fadeIn" delay={0.3} className="absolute inset-0">
              <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/[0.04] blur-3xl animate-[float_12s_ease-in-out_infinite]" />
            </AnimateInView>
            <AnimateInView variant="fadeIn" delay={0.5} className="absolute inset-0">
              <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-3xl animate-[float_15s_ease-in-out_infinite_reverse]" />
            </AnimateInView>
          </div>
          <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          <Container>
            <div className="relative max-w-3xl">
              <AnimateInView variant="fadeIn">
                <span className="inline-block text-white/70 font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm">
                  Cirugía Facial
                </span>
              </AnimateInView>
              <AnimateInView variant="fadeLeft" delay={0.15}>
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight text-balance drop-shadow-sm">
                  Rinoplastia en Cali
                </h1>
              </AnimateInView>
              <AnimateInView variant="fadeUp" delay={0.25}>
                <p className="mt-6 text-lg md:text-xl text-white/80 font-body leading-relaxed max-w-2xl drop-shadow-sm">
                  Cirugía nasal enfocada en la armonía facial y la función
                  respiratoria cuando aplica. Técnicas abierta y cerrada
                  adaptadas a la anatomía de cada paciente.
                </p>
              </AnimateInView>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <AnimateInView variant="scaleIn" delay={0.35}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#4A8DB7] font-body font-bold px-8 py-3.5 rounded-full hover:bg-white/90 hover:shadow-xl hover:shadow-black/25 transition-all duration-300 text-base shadow-lg shadow-black/20 no-underline"
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
                </AnimateInView>
                <AnimateInView variant="fadeUp" delay={0.4}>
                  <a
                    href="#procedimiento"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-body font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all duration-300 text-base no-underline"
                  >
                    Conocer el procedimiento
                  </a>
                </AnimateInView>
              </div>
              <AnimateInView variant="fadeUp" delay={0.45}>
                <p className="mt-6 text-sm text-white/60 font-body">
                  De acuerdo con la normativa colombiana, todo procedimiento
                  quirúrgico requiere una valoración médica presencial previa para
                  determinar la idoneidad del paciente.
                </p>
              </AnimateInView>
            </div>
          </Container>
        </section>

        <AnimateInView variant="scaleIn" duration={0.7} as="section" id="que-es" className="bg-white py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4A8DB7]/5 via-transparent to-[#6DB3D9]/5 opacity-40" aria-hidden="true" />
          <Container>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
              <AnimateInView variant="fadeLeft">
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
              </AnimateInView>
              <AnimateInView variant="fadeRight" delay={0.2}>
                <div className="bg-gradient-to-br from-[#FBFBF9] to-white rounded-2xl p-8 border border-[#4A8DB7]/20 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[#4A8DB7]/10 text-[#4A8DB7] flex items-center justify-center mb-4">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-text-dark text-lg mb-4">
                    Seguridad y marco legal en Colombia
                  </h3>
                  <p className="text-sm text-text-main/80 font-body leading-relaxed">
                    Tiffany Esthetic Group IPS es una institución prestadora de
                    servicios de salud debidamente habilitada (Resolución 3100 de
                    2019 del Ministerio de Salud), con salas de cirugía,
                    recuperación, farmacia y personal calificado para procedimientos
                    de cirugía facial.
                  </p>
                  <div className="mt-6 bg-[#4A8DB7]/5 rounded-xl p-5 border border-[#4A8DB7]/10">
                    <p className="text-sm font-body font-semibold text-text-dark">
                      Todo procedimiento requiere valoración médica presencial,
                      exámenes preoperatorios, consentimiento informado y
                      cumplimiento de los protocolos de bioseguridad establecidos
                      por la normativa colombiana.
                    </p>
                  </div>
                </div>
              </AnimateInView>
            </div>
          </Container>
        </AnimateInView>

        <AnimateInView variant="fadeUp" as="section" id="procedimiento" className="bg-[#FBFBF9] py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-bl from-[#4A8DB7]/5 via-transparent to-[#6DB3D9]/5 opacity-30" aria-hidden="true" />
          <Container>
            <AnimateInView variant="fadeIn">
              <SectionHeader
                label="Procedimiento"
                title="¿Cómo se realiza la rinoplastia?"
                desc="El proceso quirúrgico se desarrolla en etapas secuenciales, desde la valoración inicial hasta el postoperatorio."
              />
            </AnimateInView>
            <div className="max-w-5xl mx-auto">
              {procedureSteps.map((step, i) => (
                <AnimateInView key={step.number} variant={i % 2 === 0 ? "fadeLeft" : "fadeRight"} delay={i * 0.1}>
                  <div className="flex items-start gap-5 md:gap-8">
                    <div className="hidden md:flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br text-white flex items-center justify-center font-heading font-bold text-base shadow-lg shrink-0"
                        style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}>{step.number}</div>
                      {i < procedureSteps.length - 1 && <div className="w-0.5 h-16 bg-gradient-to-b" style={{ background: `linear-gradient(to bottom, ${gradientFrom}66, transparent)` }} />}
                    </div>
                    <div className="flex-1 bg-white rounded-2xl p-6 md:p-8 border border-silver/20 shadow-sm hover:shadow-lg transition-all duration-300"
                      style={{ borderLeftColor: gradientFrom, borderLeftWidth: i % 2 === 0 ? "4px" : "0", borderRightColor: gradientFrom, borderRightWidth: i % 2 !== 0 ? "4px" : "0" }}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="md:hidden w-8 h-8 rounded-full text-white flex items-center justify-center font-heading font-bold text-xs shrink-0"
                          style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}>{step.number}</span>
                        <h3 className="font-heading font-bold text-text-dark text-lg">{step.title}</h3>
                      </div>
                      <p className="text-sm text-text-main/80 font-body leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </AnimateInView>
              ))}
            </div>
          </Container>
        </AnimateInView>

        <AnimateInView variant="fadeUp" as="section" id="tecnicas" className="bg-white py-16 md:py-24">
          <Container>
            <AnimateInView variant="fadeIn">
              <SectionHeader
                label="Técnicas"
                title="Técnicas quirúrgicas disponibles"
                desc="La elección de la técnica depende de la anatomía nasal, los objetivos del paciente y el criterio del cirujano."
              />
            </AnimateInView>
            <StaggerGrid className="grid md:grid-cols-3 gap-6" staggerDelay={0.08}>
              {techniques.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="bg-[#FBFBF9] rounded-2xl p-8 border border-silver/20 shadow-sm hover:shadow-md transition-all duration-300 h-full group"
                    style={{ borderLeft: `4px solid ${gradientFrom}55` }}>
                    <div className="w-12 h-12 rounded-xl bg-[#4A8DB7]/10 text-[#4A8DB7] flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110">
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
                </StaggerItem>
              ))}
            </StaggerGrid>
          </Container>
        </AnimateInView>

        <AnimateInView variant="fadeUp" as="section" id="beneficios" className="bg-[#FBFBF9] py-16 md:py-24">
          <Container>
            <AnimateInView variant="fadeIn">
              <SectionHeader
                label="Beneficios"
                title="¿Qué puede mejorar la rinoplastia?"
                desc="Los resultados varían según cada paciente, sus condiciones de salud y el proceso de cicatrización."
              />
            </AnimateInView>
            <div className="max-w-4xl mx-auto space-y-4">
              {benefits.map((item, i) => (
                <AnimateInView key={item} variant={i % 2 === 0 ? "fadeLeft" : "fadeRight"} delay={i * 0.08}>
                  <div className="group flex items-start gap-5 p-5 md:p-6 rounded-xl border border-silver/20 transition-all duration-300 hover:shadow-md"
                    style={{ background: i % 2 === 0 ? "white" : `${gradientFrom}04` }}>
                    <div className="w-10 h-10 rounded-xl text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300"
                      style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}>
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm md:text-base text-text-main/80 font-body leading-relaxed">{item}</p>
                    </div>
                  </div>
                </AnimateInView>
              ))}
            </div>
          </Container>
        </AnimateInView>

        <section className="py-16 md:py-24 text-white relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientFrom}dd, ${gradientTo})` }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          </div>
          <Container className="relative z-10">
            <AnimateInView variant="fadeIn">
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
                <AnimateInView variant="fadeRight" delay={0.15}>
                  <div className="grid gap-4">
                    {safetySteps.map((step, index) => (
                      <AnimateInView key={step} variant="fadeUp" delay={0.2 + index * 0.06}>
                        <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors duration-300">
                          <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                            {index + 1}
                          </span>
                          <span className="text-sm leading-relaxed text-white/80 font-body">
                            {step}
                          </span>
                        </div>
                      </AnimateInView>
                    ))}
                  </div>
                </AnimateInView>
              </div>
            </AnimateInView>
          </Container>
        </section>

        <AnimateInView variant="fadeUp" as="section" id="candidatos" className="bg-white py-16 md:py-24">
          <Container>
            <AnimateInView variant="fadeIn">
              <SectionHeader
                label="Candidatos"
                title="¿Quién puede considerar una rinoplastia?"
                desc="La idoneidad del paciente se determina mediante evaluación clínica presencial obligatoria."
              />
            </AnimateInView>
            <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto" staggerDelay={0.08}>
              {candidates.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="bg-white rounded-2xl overflow-hidden border border-silver/20 shadow-sm hover:shadow-lg transition-all duration-300 h-full group relative">
                    <div className="h-2" style={{ background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})` }} />
                    <div className="p-6">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                        style={{ background: `${gradientFrom}15`, color: gradientFrom }}>
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </Container>
        </AnimateInView>

        <AnimateInView variant="fadeRight" as="section" id="resultados" className="bg-[#FBFBF9] py-16 md:py-24">
          <Container>
            <AnimateInView variant="fadeIn">
              <SectionHeader
                label="Resultados"
                title="¿Qué resultados se pueden esperar?"
                desc="Los resultados anatómicos varían en cada persona. La información aquí presentada es una referencia general."
              />
            </AnimateInView>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              <AnimateInView variant="fadeLeft" delay={0.1}>
                <div className="bg-white rounded-2xl p-8 border border-silver/20 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${gradientFrom}15`, color: gradientFrom }}>
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
                      </svg>
                    </div>
                    <h3 className="font-heading font-bold text-text-dark text-lg">Resultado estético</h3>
                  </div>
                  <p className="text-sm text-text-main/80 font-body leading-relaxed">
                    La mejoría en la forma nasal es visible desde el retiro de la
                    férula, aunque el edema inicial puede ocultar el resultado
                    final. La definición del dorso, la punta y la simetría se
                    consolida progresivamente a medida que la inflamación
                    desaparece durante los primeros meses.
                  </p>
                </div>
              </AnimateInView>
              <AnimateInView variant="fadeRight" delay={0.2}>
                <div className="bg-white rounded-2xl p-8 border border-silver/20 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${gradientFrom}15`, color: gradientFrom }}>
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <h3 className="font-heading font-bold text-text-dark text-lg">Resultado funcional</h3>
                  </div>
                  <p className="text-sm text-text-main/80 font-body leading-relaxed">
                    La mejoría en la respiración suele notarse después de que la
                    inflamación interna disminuye, generalmente a partir de la
                    segunda o tercera semana. El resultado funcional definitivo
                    se consolida junto con la cicatrización completa de los
                    tejidos nasales internos.
                  </p>
                </div>
              </AnimateInView>
            </div>
            <div className="mt-6 text-center max-w-2xl mx-auto">
              <p className="text-xs text-text-main/60 font-body">
                Los resultados varían según las condiciones anatómicas, genéticas
                y los hábitos de vida de cada paciente. La información contenida
                en esta página es educativa y no sustituye una consulta médica
                formal.
              </p>
            </div>
          </Container>
        </AnimateInView>

        <AnimateInView variant="fadeUp" as="section" id="recuperacion" className="bg-white py-16 md:py-24">
          <Container>
            <AnimateInView variant="fadeIn">
              <SectionHeader
                label="Recuperación"
                title="Postoperatorio y evolución"
                desc="El proceso de recuperación es progresivo y requiere paciencia. El resultado final puede tardar hasta un año."
              />
            </AnimateInView>
            <div className="max-w-3xl mx-auto space-y-6">
              {recoveryTimeline.map((item, i) => (
                <AnimateInView key={item.period} variant="fadeRight" delay={i * 0.12}>
                  <div className="relative pl-10 md:pl-14 group transition-colors duration-300" style={{ borderLeft: `2px solid ${gradientFrom}33` }}>
                    <div className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-white border-2 group-hover:scale-125 transition-all duration-300" style={{ borderColor: gradientFrom }} aria-hidden="true" />
                    <div className="flex items-center gap-2 mb-1">
                      <svg className="w-4 h-4 shrink-0" style={{ color: `${gradientFrom}99` }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                      </svg>
                      <h3 className="font-heading font-bold text-text-dark text-lg">
                        {item.period}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm text-text-main/80 font-body leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </AnimateInView>
              ))}
            </div>
          </Container>
        </AnimateInView>

        <AnimateInView variant="fadeUp" as="section" id="faq" className="bg-[#FBFBF9] py-16 md:py-24">
          <Container>
            <AnimateInView variant="fadeIn">
              <SectionHeader
                label="FAQ"
                title="Preguntas frecuentes"
              />
            </AnimateInView>
            <div
              className="max-w-3xl mx-auto divide-y divide-silver/20"
              itemScope
              itemType="https://schema.org/FAQPage"
            >
              {faqs.map((faq, i) => (
                <AnimateInView key={faq.q} variant="fadeUp" delay={i * 0.06}>
                  <details
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
                </AnimateInView>
              ))}
            </div>
          </Container>
        </AnimateInView>

        <section className="py-20 md:py-28 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientFrom}dd, ${gradientTo})` }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          </div>
          <Container className="relative z-10">
            <div className="text-center max-w-2xl mx-auto">
              <AnimateInView variant="fadeIn" delay={0.1}>
                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                  Agenda tu valoración médica en Cali
                </h2>
              </AnimateInView>
              <AnimateInView variant="fadeUp" delay={0.2}>
                <p className="mt-4 text-white/80 font-body text-lg leading-relaxed">
                  El primer paso es una consulta presencial con nuestros
                  especialistas para evaluar tu caso, resolver tus dudas y
                  determinar si la rinoplastia es el procedimiento indicado para
                  ti.
                </p>
              </AnimateInView>
              <AnimateInView variant="scaleIn" delay={0.3}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-2 bg-white text-[#4A8DB7] font-body font-bold px-10 py-4 rounded-full hover:bg-white/90 hover:scale-105 transition-all duration-300 text-lg shadow-xl shadow-black/20 no-underline"
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
              </AnimateInView>
              <AnimateInView variant="fadeUp" delay={0.4}>
                <p className="mt-6 text-sm text-white/60 font-body">
                  Tiffany Esthetic Group IPS — Institución Prestadora de Servicios
                  de Salud habilitada ante las autoridades sanitarias de Colombia.
                </p>
              </AnimateInView>
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
