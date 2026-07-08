import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.tiffanyesthetic.com/lipoescultura-lipoinyeccion-glutea-cali",
      url: "https://www.tiffanyesthetic.com/lipoescultura-lipoinyeccion-glutea-cali",
      name: "Lipoescultura con Lipoinyección Glútea en Cali",
      description:
        "Procedimiento quirúrgico de moldeamiento corporal mediante transferencia de grasa autóloga en Cali por Tiffany Esthetic Group IPS.",
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
      name: "Lipoescultura con Lipoinyección Glútea",
      procedureType: "SurgicalProcedure",
      bodyLocation: ["Abdomen", "Flanks", "Back", "Gluteal Region"],
      description:
        "Remodelación corporal mediante liposucción e inyección de tejido adiposo autólogo purificado en la región glútea.",
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Lipoescultura y Lipoinyección Glútea en Cali | Tiffany Esthetic Group IPS",
  description:
    "Remodela tu contorno corporal mediante lipoescultura y transferencia de grasa autóloga en Cali. Procedimiento seguro en una IPS habilitada. Agenda tu valoración médica especializada.",
  robots: { index: true, follow: true },
  openGraph: {
    title:
      "Lipoescultura con Lipoinyección Glútea en Cali | Tiffany Esthetic Group IPS",
    description:
      "Procedimiento quirúrgico de moldeamiento corporal mediante transferencia de grasa autóloga.",
    url: "https://www.tiffanyesthetic.com/lipoescultura-lipoinyeccion-glutea-cali",
    locale: "es_CO",
    type: "website",
  },
};

const steps = [
  {
    number: "01",
    title: "Valoración clínica y exámenes preoperatorios",
    desc: "Evaluación del estado de salud general, índice de masa corporal (IMC) y antecedentes médicos del paciente.",
  },
  {
    number: "02",
    title: "Extracción de tejido adiposo",
    desc: "Aspiración selectiva de grasa mediante técnicas avanzadas en áreas con exceso localizado (abdomen, flancos o espalda).",
  },
  {
    number: "03",
    title: "Purificación y procesamiento biológico",
    desc: "Centrifugación y filtrado de la grasa extraída bajo estrictos protocolos de bioseguridad para separar adipocitos viables.",
  },
  {
    number: "04",
    title: "Lipoinyección glútea",
    desc: "Infiltración intramuscular de la grasa purificada mediante cánulas romas, respetando los planos anatómicos seguros.",
  },
  {
    number: "05",
    title: "Moldeamiento postquirúrgico",
    desc: "Colocación de prendas de compresión médica para estabilizar los tejidos y favorecer la recuperación.",
  },
];

const faqs = [
  {
    q: "¿La lipoescultura con lipoinyección glútea duele?",
    a: "El procedimiento se realiza bajo anestesia general o regional, por lo que no hay dolor intraoperatorio. Durante el postoperatorio se presenta inflamación y sensibilidad similar a una molestia muscular intensa, controlable con la analgesia formulada.",
  },
  {
    q: "¿Qué pasa si me siento directamente sobre los glúteos después de la cirugía?",
    a: "Presionar la zona de manera prolongada durante las primeras semanas puede comprometer la vascularización de los nuevos adipocitos, aumentando la tasa de reabsorción de la grasa. Se recomienda usar cojines de transferencia anatómica.",
  },
  {
    q: "¿Cuándo puedo volver a trabajar?",
    a: "Dependiendo del tipo de actividad laboral, la mayoría de los pacientes se reincorporan entre los 7 y 10 días posteriores a la cirugía, manteniendo los cuidados de postura al sentarse.",
  },
  {
    q: "¿Es más seguro que los implantes de glúteos?",
    a: "Ambos procedimientos tienen perfiles de seguridad óptimos si se realizan por especialistas habilitados. La lipoinyección no presenta riesgos de rechazo de cuerpo extraño ni encapsulamiento, y ofrece una remodelación simultánea de las áreas donantes.",
  },
  {
    q: "¿Qué exámenes médicos necesito antes de la cirugía?",
    a: "Es obligatorio presentar cuadro hemático completo, pruebas de coagulación (PT y PTT), función renal (creatinina), prueba de embarazo (si aplica) y valoración electrocardiográfica con aprobación del anestesiólogo.",
  },
  {
    q: "¿Qué es una IPS habilitada y por qué es importante?",
    a: "Una Institución Prestadora de Servicios de Salud (IPS) habilitada cumple con los estándares del Ministerio de Salud de Colombia en infraestructura, talento humano calificado, equipos de emergencia y bioseguridad, minimizando los riesgos quirúrgicos.",
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

export default function LipoesculturaPage() {
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
                Lipoescultura con Lipoinyección Glútea en Cali
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/80 font-body leading-relaxed max-w-2xl">
                Moldeamiento corporal seguro y personalizado mediante
                transferencia de grasa autóloga. Procedimiento quirúrgico
                realizado en IPS habilitada por médicos especialistas.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/573XXXXXXXXX?text=Hola%2C%20quiero%20agendar%20mi%20valoraci%C3%B3n%20para%20lipoescultura%20con%20lipoinyecci%C3%B3n%20gl%C3%BAtea."
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
                  href="#proceso"
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
                title="Lipoescultura con lipoinyección glútea"
              />
              <div className="space-y-5 text-text-main/80 font-body leading-relaxed">
                <p>
                  La lipoescultura con lipoinyección glútea es un procedimiento
                  quirúrgico estético que extrae grasa acumulada de zonas
                  corporales como el abdomen o la espalda para procesarla e
                  inyectarla en los glúteos. Su objetivo es mejorar la silueta
                  global de manera natural utilizando los propios tejidos del
                  paciente.
                </p>
                <h3 className="font-heading font-bold text-text-dark text-lg">
                  Diferencia entre liposucción y lipoescultura
                </h3>
                <p>
                  La liposucción se limita a la extracción de volumen adiposo.
                  La lipoescultura utiliza esa misma grasa como un elemento de
                  diseño anatómico para moldear, sombrear y transferir volumen a
                  áreas que requieren mayor proyección.
                </p>
                <h3 className="font-heading font-bold text-text-dark text-lg">
                  Diferencia con implantes glúteos
                </h3>
                <p>
                  A diferencia de las prótesis de silicona, la lipoinyección
                  glútea utiliza tejido vivo del propio paciente (grasa
                  autóloga), eliminando la posibilidad de rechazo inmunológico y
                  ofreciendo una consistencia natural.
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
                  Seguridad y legalidad
                </h3>
              </div>
              <p className="text-sm text-text-main/80 font-body leading-relaxed">
                Es vital diferenciar la lipoinyección de grasa del uso de
                sustancias modelantes inyectables no autorizadas. En Colombia,
                la infiltración de biopolímeros y sustancias no absorbibles está
                penalizada por la Ley 2316 de 2023 debido a los graves riesgos
                para la salud.
              </p>
              <div className="mt-6 bg-primary/5 rounded-xl p-5 border border-primary/10">
                <p className="text-sm font-body font-semibold text-primary-dark">
                  En nuestra IPS solo se transfiere tejido graso propio
                  purificado, garantizando la seguridad biológica del paciente.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="proceso" className="bg-[#FBFBF9]">
          <SectionHeader
            label="Procedimiento"
            title="¿Cómo funciona la transferencia de grasa?"
            desc="El proceso quirúrgico se desarrolla en etapas secuenciales, desde la valoración inicial hasta el postoperatorio."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
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

        <Section id="candidatos" className="bg-white">
          <SectionHeader
            label="Candidatos"
            title="¿Quién es candidato ideal?"
            desc="La idoneidad del paciente se determina mediante evaluación clínica presencial."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Depósitos de grasa transferibles",
                desc: "Personas con reservas de tejido adiposo en zonas como abdomen o espalda que puedan ser utilizadas para el injerto.",
              },
              {
                title: "IMC dentro de rangos seguros",
                desc: "Índice de Masa Corporal generalmente inferior a 30, verificado durante la valoración prequirúrgica.",
              },
              {
                title: "Estado de salud estable",
                desc: "Confirmado mediante exámenes de laboratorio y valoración preanestésica por el equipo médico.",
              },
              {
                title: "Expectativas realistas",
                desc: "Basadas en la anatomía individual del paciente y explicadas detalladamente durante la consulta.",
              },
              {
                title: "Compromiso con el postoperatorio",
                desc: "Disposición para cumplir con el reposo, uso de fajas y controles médicos programados.",
              },
              {
                title: "No fumador activo",
                desc: "El tabaquismo afecta la oxigenación de los tejidos y puede comprometer la integración de la grasa transferida.",
              },
            ].map((item) => (
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

        <Section id="areas" className="bg-[#FBFBF9]">
          <SectionHeader
            label="Áreas"
            title="Zonas corporales candidatas a moldeamiento"
            desc="La lipoescultura puede abordar múltiples áreas en una misma intervención."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                area: "Abdomen y flancos",
                desc: "Definición de la pared abdominal anterior y reducción de depósitos laterales para estrechar visualmente la cintura.",
                icon: (
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                ),
              },
              {
                area: "Espalda",
                desc: "Eliminación de depósitos adiposos que se marcan con la ropa interior, mejorando la transición hacia la región glútea.",
                icon: (
                  <path d="M4 4h16v16H4z" />
                ),
              },
              {
                area: "Brazos y muslos",
                desc: "Reducción del volumen interno o externo para estilizar las extremidades y armonizar la silueta.",
                icon: (
                  <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
                ),
              },
              {
                area: "Zona glútea (receptora)",
                desc: "Optimización del cuadrante superior, proyección del perfil y corrección de depresiones trocantéricas laterales.",
                icon: (
                  <path d="M8 4h8v16H8z" />
                ),
              },
            ].map((item) => (
              <div
                key={item.area}
                className="bg-white rounded-2xl p-6 border border-silver/20 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
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
                    {item.icon}
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-text-dark text-lg mb-2">
                  {item.area}
                </h3>
                <p className="text-sm text-text-main/80 font-body leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="recuperacion" className="bg-white">
          <SectionHeader
            label="Recuperación"
            title="Postoperatorio y evolución"
            desc="El proceso de recuperación es progresivo. Cada etapa requiere cuidados específicos."
          />
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                period: "Primeras 24 a 48 horas",
                desc: "Reposo moderado. Es normal experimentar drenaje de fluidos tumescentes por las incisiones y molestias controlables con analgésicos prescritos.",
              },
              {
                period: "Primera semana (días 1 a 7)",
                desc: "Inicio de terapias postoperatorias como drenaje linfático suave y ultrasonido. Uso obligatorio de faja de compresión las 24 horas.",
              },
              {
                period: "Primer mes",
                desc: "Restricción estricta de presión directa sobre los glúteos. El paciente debe usar cojines especiales para sentarse, evitando la compresión del tejido graso transferido.",
              },
              {
                period: "Retorno a actividades físicas",
                desc: "Caminatas suaves desde la primera semana. Ejercicio cardiovascular y de resistencia a partir de la cuarta a sexta semana, previa autorización médica.",
              },
            ].map((item) => (
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

        <Section id="resultados" className="bg-[#FBFBF9]">
          <SectionHeader
            label="Resultados"
            title="¿Cuánto dura la grasa transferida?"
            desc="La grasa que sobrevive al proceso de integración celular se mantiene de forma permanente."
          />
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-silver/20 shadow-sm">
              <h3 className="font-heading font-bold text-text-dark text-lg mb-4">
                Integración celular
              </h3>
              <p className="text-sm text-text-main/80 font-body leading-relaxed">
                Los adipocitos transferidos requieren neovascularización
                (creación de nuevos vasos sanguíneos) para nutrirse en su nueva
                ubicación. Una vez superado este proceso de prendimiento durante
                los primeros tres a cuatro meses, el tejido se comporta como
                grasa corporal natural.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-silver/20 shadow-sm">
              <h3 className="font-heading font-bold text-text-dark text-lg mb-4">
                Reabsorción natural
              </h3>
              <p className="text-sm text-text-main/80 font-body leading-relaxed">
                Generalmente existe un porcentaje de reabsorción natural que
                oscila entre el 20% y el 40% del volumen inicialmente inyectado.
                Este porcentaje se contempla en la planificación quirúrgica para
                determinar el volumen óptimo a transferir.
              </p>
            </div>
          </div>
          <div className="mt-6 text-center max-w-2xl mx-auto">
            <p className="text-xs text-text-main/60 font-body">
              Fotografías ilustrativas de casos reales. Los resultados
              anatómicos varían en cada persona.
            </p>
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
                ¿Listo para tu valoración médica?
              </h2>
              <p className="mt-4 text-white/80 font-body text-lg leading-relaxed">
                El primer paso es una consulta presencial con nuestros
                especialistas para evaluar tu caso de manera personalizada.
              </p>
              <a
                href="https://wa.me/573XXXXXXXXX?text=Hola%2C%20quiero%20agendar%20mi%20valoraci%C3%B3n%20para%20lipoescultura%20con%20lipoinyecci%C3%B3n%20gl%C3%BAtea."
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
          <p className="text-xs leading-relaxed text-center">
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
    </>
  );
}
