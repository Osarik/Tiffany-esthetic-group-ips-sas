import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import WhatsAppButton from "@/components/WhatsAppButton";

const whatsappUrl =
  "https://wa.me/573XXXXXXXXX?text=Hola%2C%20quiero%20agendar%20mi%20valoraci%C3%B3n%20para%20lifting%20facial%20en%20Cali.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.tiffanyesthetic.com/lifting-facial#webpage",
      url: "https://www.tiffanyesthetic.com/lifting-facial",
      name: "Lifting Facial en Cali | Rejuvenecimiento Facial",
      description:
        "Cirugía de rejuvenecimiento facial para mejorar flacidez y contornos del rostro. IPS habilitada en Cali. Agenda tu valoración médica.",
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
      name: "Lifting Facial o Ritidectomía",
      procedureType: "SurgicalProcedure",
      bodyLocation: ["Face", "Neck"],
      description:
        "Procedimiento quirúrgico que reposiciona los tejidos faciales profundos, reseca el exceso de piel y redefine los contornos del rostro y el cuello.",
    },
    {
      "@type": "MedicalProcedure",
      name: "Lifting de Tercio Medio Facial",
      procedureType: "SurgicalProcedure",
      bodyLocation: ["Face"],
      description:
        "Técnica quirúrgica que eleva y reposiciona los tejidos del tercio medio de la cara, mejorando el surco nasogeniano, el pómulo y la región malar.",
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Lifting Facial en Cali | Rejuvenecimiento Facial | Tiffany Esthetic Group IPS SAS",
  description:
    "Cirugía de rejuvenecimiento facial para mejorar flacidez y contornos del rostro. Técnicas SMAS, lifting de tercio medio y mini-lifting. IPS habilitada en Cali. Agenda tu valoración.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/lifting-facial",
  },
  openGraph: {
    title: "Lifting Facial en Cali",
    description:
      "Rejuvenecimiento facial quirúrgico con técnicas personalizadas. Resultados naturales que armonizan los contornos del rostro y el cuello.",
    url: "https://www.tiffanyesthetic.com/lifting-facial",
    siteName: "Tiffany Esthetic Group IPS SAS",
    locale: "es_CO",
    type: "article",
  },
};

const procedureSteps = [
  {
    number: "01",
    title: "Valoración clínica y análisis facial",
    desc: "Evaluación del estado de salud general, calidad de la piel, grado de flacidez facial y cervical, profundidad de los surcos nasogenianos, posición del pómulo y el contorno mandibular. Se toman registros fotográficos estandarizados y se discuten las expectativas del paciente.",
  },
  {
    number: "02",
    title: "Marcación quirúrgica personalizada",
    desc: "El cirujano marca las incisiones con el paciente sentado, definiendo la extensión del lifting según la técnica seleccionada: incisión preauricular que se extiende hacia el cuero cabelludo y el surco retroauricular, adaptada a la línea del cabello.",
  },
  {
    number: "03",
    title: "Disección y reposicionamiento del SMAS",
    desc: "Elevación de colgajos cutáneos y disección del SMAS (sistema musculoaponeurótico superficial). El SMAS se tensa y reposiciona para restaurar la posición anatómica juvenil de los tejidos profundos del rostro, corrigiendo la ptosis facial.",
  },
  {
    number: "04",
    title: "Resección de piel y reposicionamiento",
    desc: "La piel sobrante se reseca después de reposicionar los tejidos profundos. El excedente cutáneo se distribuye hacia la región preauricular y retroauricular para lograr un resultado natural sin tensión excesiva en la piel.",
  },
  {
    number: "05",
    title: "Cierre por planos y vendaje",
    desc: "Sutura meticulosa por planos con hilos finos, colocación de drenaje (si está indicado) y vendaje compresivo suave para controlar el edema inicial y proteger las incisiones.",
  },
];

const techniques = [
  {
    title: "Lifting facial clásico (SMAS)",
    desc: "Aborda el tercio inferior del rostro y el cuello mediante la disección y plicatura del SMAS. Indicado para pacientes con flacidez moderada a avanzada en la región mandibular, la papada y el cuello. Ofrece resultados duraderos y una mejoría significativa del óvalo facial.",
  },
  {
    title: "Lifting de tercio medio (midface)",
    desc: "Técnica complementaria que eleva y reposiciona los tejidos del tercio medio de la cara, mejorando el volumen del pómulo, el surco nasogeniano y la región cigomática. Se realiza con frecuencia en combinación con el lifting cervical-facial para un rejuvenecimiento integral.",
  },
  {
    title: "Mini-lifting o lifting corto",
    desc: "Versión menos invasiva del lifting facial clásico, con incisiones más cortas restringidas a la región preauricular. Indicada para pacientes con flacidez leve a moderada, especialmente en la región mandibular, que no requieren una disección extensa del cuello.",
  },
];

const benefits = [
  "Redefinición del contorno facial y mandibular, mejorando la apariencia del óvalo facial.",
  "Reducción de la flacidez del tercio inferior del rostro, la papada y el cuello.",
  "Atenuación de los surcos nasogenianos y mejoría del volumen malar (según la técnica).",
  "Resultados naturales y perdurables que envejecen armónicamente.",
];

const safetySteps = [
  "Valoración médica obligatoria para evaluar antecedentes, calidad de la piel, grado de flacidez facial y expectativas del paciente.",
  "Explicación detallada del procedimiento, técnica quirúrgica seleccionada, incisiones, alternativas y complicaciones potenciales.",
  "Firma de consentimiento informado antes de cualquier intervención quirúrgica.",
  "Atención en instalaciones habilitadas con protocolos de bioseguridad, equipos de emergencia y personal calificado.",
  "Controles posteriores programados y recomendaciones para el cuidado de las incisiones y la recuperación.",
];

const candidates = [
  {
    title: "Flacidez facial y cervical",
    desc: "Pérdida de definición del contorno mandibular, papada visible y piel laxa en el tercio inferior del rostro y el cuello.",
  },
  {
    title: "Surcos nasogenianos pronunciados",
    desc: "Pliegues profundos que descienden desde la nariz hasta la comisura de los labios, acentuados por la ptosis de los tejidos del tercio medio.",
  },
  {
    title: "Expectativas realistas",
    desc: "Comprensión de que el lifting facial rejuvenece los contornos pero no detiene el envejecimiento ni elimina las arrugas finas (líneas de expresión).",
  },
  {
    title: "Estado de salud estable",
    desc: "Confirmado mediante exámenes preoperatorios y valoración preanestésica. Condiciones como hipertensión no controlada o diabetes deben evaluarse previamente.",
  },
  {
    title: "No fumador activo",
    desc: "El tabaquismo afecta gravemente la cicatrización y la vascularización de los colgajos cutáneos, aumentando significativamente el riesgo de complicaciones.",
  },
  {
    title: "Peso estable",
    desc: "Se recomienda mantener un peso corporal estable durante al menos 6 meses antes del procedimiento para garantizar resultados consistentes.",
  },
];

const recoveryTimeline = [
  {
    period: "Primeras 24 a 48 horas",
    desc: "Reposo absoluto con la cabeza elevada. Es normal presentar edema facial significativo, equimosis y sensación de tirantez. Se aplican compresas frías y analgesia según fórmula médica.",
  },
  {
    period: "Primera semana (días 1 a 7)",
    desc: "Retiro de puntos entre el día 5 y 10 según la zona. El edema y los moretones alcanzan su pico máximo y comienzan a disminuir. Evitar esfuerzos físicos, agacharse y exposición solar. Se recomienda dieta blanda y evitar movimientos bruscos de la cabeza.",
  },
  {
    period: "Primer mes",
    desc: "La inflamación residual disminuye progresivamente. Las cicatrices comienzan a madurar y se tornan menos notorias. Retorno gradual a actividades cotidianas y laborales (no antes de 2 a 3 semanas según la ocupación).",
  },
  {
    period: "Resultado definitivo",
    desc: "La mayoría del edema desaparece entre las 6 y 12 semanas. Las cicatrices continúan madurando hasta los 6 a 12 meses. El resultado final se aprecia plenamente a partir del cuarto mes, cuando los tejidos se han asentado completamente.",
  },
];

const faqs = [
  {
    q: "¿El lifting facial duele?",
    a: "El procedimiento se realiza bajo anestesia general o sedación profunda, por lo que no hay dolor intraoperatorio. Durante el postoperatorio se presenta sensación de tirantez, inflamación y molestias moderadas controlables con analgesia formulada y reposo.",
  },
  {
    q: "¿Cuánto duran los resultados del lifting facial?",
    a: "Los resultados son duraderos, generalmente entre 7 y 10 años, pero el proceso de envejecimiento continúa. La duración depende de factores como la genética, el cuidado de la piel, la exposición solar y los hábitos de vida. El lifting reposiciona los tejidos, pero no detiene el paso del tiempo.",
  },
  {
    q: "¿Quedan cicatrices visibles?",
    a: "Las incisiones se ubican estratégicamente en zonas poco visibles: dentro del pliegue natural de la oreja (preauricular), detrás de la oreja (retroauricular) y dentro del cuero cabelludo en las sienes. Las cicatrices tienden a atenuarse significativamente con el tiempo, volviéndose casi imperceptibles.",
  },
  {
    q: "¿A qué edad se recomienda un lifting facial?",
    a: "No hay una edad específica. La indicación depende del grado de flacidez facial y cervical, no de la edad cronológica. Algunos pacientes se benefician del procedimiento a partir de los 40 años, mientras que otros pueden requerirlo más tarde. La valoración médica presencial determina la idoneidad.",
  },
  {
    q: "¿El lifting facial mejora las arrugas finas?",
    a: "El lifting facial reposiciona los tejidos profundos y reseca el exceso de piel, pero no elimina las arrugas finas o líneas de expresión, que se tratan mejor con procedimientos complementarios como peelings, láser o toxina botulínica.",
  },
  {
    q: "¿Cuándo puedo retomar mis actividades normales?",
    a: "El retorno a actividades cotidianas suele ser posible entre 2 y 3 semanas. El ejercicio moderado puede reiniciarse a partir de la cuarta a sexta semana con autorización médica. Actividades que impliquen esfuerzo físico intenso o riesgo de impacto facial deben postergarse al menos 8 semanas.",
  },
  {
    q: "¿Qué exámenes médicos necesito antes de la cirugía?",
    a: "Se requieren exámenes preoperatorios básicos: cuadro hemático completo, pruebas de coagulación (PT y PTT), función renal (creatinina), glicemia, prueba de embarazo (si aplica), electrocardiograma, valoración por medicina interna (según antecedentes) y valoración por anestesiología.",
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

export default function LiftingFacialPage() {
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
                Lifting facial en Cali
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/80 font-body leading-relaxed max-w-2xl">
                Cirugía de rejuvenecimiento facial para mejorar la flacidez y
                los contornos del rostro y el cuello. Técnicas quirúrgicas
                adaptadas a las necesidades de cada paciente.
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
                title="Lifting facial o ritidectomía"
              />
              <div className="space-y-5 text-text-main/80 font-body leading-relaxed">
                <p>
                  El lifting facial (ritidectomía) es el procedimiento
                  quirúrgico diseñado para rejuvenecer el rostro reposicionando
                  los tejidos faciales profundos, resecando el exceso de piel y
                  redefiniendo los contornos del óvalo facial y el cuello. Su
                  objetivo es restaurar una apariencia más firme sin alterar la
                  expresión natural.
                </p>
                <h3 className="font-heading font-bold text-text-dark text-lg">
                  Lifting facial vs. procedimientos no quirúrgicos
                </h3>
                <p>
                  El lifting facial quirúrgico actúa sobre los tejidos profundos
                  (SMAS) y la piel, ofreciendo resultados significativos y
                  duraderos en la flacidez facial y cervical. Los
                  procedimientos no quirúrgicos como hilos tensores, láser o
                  radiofrecuencia tienen indicaciones más limitadas y resultados
                  más modestos, útiles como tratamientos de mantenimiento.
                </p>
                <h3 className="font-heading font-bold text-text-dark text-lg">
                  El papel del SMAS
                </h3>
                <p>
                  El SMAS (sistema musculoaponeurótico superficial) es la capa
                  de tejido conectivo que envuelve los músculos faciales. En el
                  lifting clásico, el SMAS se tensa y reposiciona para restaurar
                  la posición anatómica juvenil de los tejidos, logrando un
                  resultado más natural y duradero que los procedimientos que
                  solo tensan la piel.
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
            title="¿Cómo se realiza el lifting facial?"
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
            desc="La elección de la técnica depende del grado de flacidez facial, la calidad de la piel y los objetivos del paciente."
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
            title="¿Qué puede mejorar el lifting facial?"
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
            title="¿Quién puede considerar un lifting facial?"
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
                El rostro se ve más definido, con un contorno mandibular
                restaurado y una mejoría visible de la flacidez cervical. El
                resultado es natural y armónico, preservando la expresión
                facial. La definición final se consolida entre el tercer y
                cuarto mes, cuando los tejidos se han asentado por completo.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-silver/20 shadow-sm">
              <h3 className="font-heading font-bold text-text-dark text-lg mb-4">
                Duración de los resultados
              </h3>
              <p className="text-sm text-text-main/80 font-body leading-relaxed">
                Los resultados del lifting facial son duraderos, con una
                mejoría significativa que se mantiene entre 7 y 10 años en
                la mayoría de los pacientes. El proceso de envejecimiento
                continúa, por lo que el rostro envejecerá desde su nueva
                posición más juvenil, manteniendo una apariencia más
                favorable que sin la cirugía.
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
            desc="El proceso de recuperación es progresivo. El resultado final puede apreciarse completamente en pocos meses."
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
                determinar si el lifting facial es el procedimiento indicado
                para ti.
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

      <WhatsAppButton />
    </>
  );
}
