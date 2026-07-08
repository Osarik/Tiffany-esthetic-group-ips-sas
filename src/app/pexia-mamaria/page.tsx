import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import WhatsAppButton from "@/components/WhatsAppButton";

const whatsappUrl =
  "https://wa.me/573XXXXXXXXX?text=Hola%2C%20quiero%20agendar%20mi%20valoraci%C3%B3n%20para%20pexia%20mamaria%20en%20Cali.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.tiffanyesthetic.com/pexia-mamaria#webpage",
      url: "https://www.tiffanyesthetic.com/pexia-mamaria",
      name: "Pexia Mamaria y Pexia Periareolar en Cali",
      description:
        "Elevación mamaria con técnicas adaptadas a cada paciente, incluida la pexia periareolar. IPS habilitada en Cali. Agenda tu valoración médica.",
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
      name: "Pexia Mamaria o Mastopexy",
      procedureType: "SurgicalProcedure",
      bodyLocation: ["Breasts"],
      description:
        "Procedimiento quirúrgico que eleva y remodela las mamas caídas, reposicionando el complejo areola-pezón y eliminando el exceso de piel.",
    },
    {
      "@type": "MedicalProcedure",
      name: "Pexia Periareolar",
      procedureType: "SurgicalProcedure",
      bodyLocation: ["Breasts"],
      description:
        "Técnica de elevación mamaria con incisión exclusivamente alrededor de la areola, indicada para ptosis leve a moderada.",
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Pexia Mamaria y Pexia Periareolar en Cali | Tiffany Esthetic Group IPS SAS",
  description:
    "Elevación mamaria con técnicas quirúrgicas adaptadas a cada paciente, incluida la pexia periareolar para ptosis leve. IPS habilitada en Cali. Agenda tu valoración.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/pexia-mamaria",
  },
  openGraph: {
    title: "Pexia Mamaria y Pexia Periareolar en Cali",
    description:
      "Elevación mamaria con técnicas personalizadas. Pexia tradicional y periareolar para ptosis leve, moderada o avanzada.",
    url: "https://www.tiffanyesthetic.com/pexia-mamaria",
    siteName: "Tiffany Esthetic Group IPS SAS",
    locale: "es_CO",
    type: "article",
  },
};

const procedureSteps = [
  {
    number: "01",
    title: "Valoración clínica y clasificación de ptosis",
    desc: "Evaluación del estado de salud general, antecedentes médicos, grado de ptosis mamaria (I, II o III según la clasificación de Regnault), exámenes preoperatorios y valoración por anestesiología.",
  },
  {
    number: "02",
    title: "Diseño del patrón quirúrgico",
    desc: "El cirujano define la técnica según el grado de ptosis: periareolar (incisión alrededor de la areola), vertical (lollipop) o en ancla (invertida T), y marca las incisiones con la paciente de pie.",
  },
  {
    number: "03",
    title: "Resección de piel sobrante",
    desc: "Eliminación del exceso de piel siguiendo el patrón marcado, preservando los colgajos dérmicos necesarios para sostener el complejo areola-pezón.",
  },
  {
    number: "04",
    title: "Reposicionamiento del complejo areola-pezón",
    desc: "El pezón y la areola se reposicionan a una altura anatómicamente más juvenil, respetando la irrigación sanguínea y la inervación para preservar la sensibilidad.",
  },
  {
    number: "05",
    title: "Cierre por planos y vendaje",
    desc: "Sutura meticulosa por planos para minimizar la tensión en las cicatrices, colocación de vendaje compresivo y sostén quirúrgico sin aro.",
  },
];

const techniques = [
  {
    title: "Pexia periareolar",
    desc: "Incisión exclusivamente alrededor de la areola. Indicada para ptosis leve (grado I) donde el pezón se encuentra al nivel del surco submamario o ligeramente por debajo. Deja una cicatriz únicamente en el borde areolar.",
  },
  {
    title: "Pexia vertical (lollipop)",
    desc: "Incisión periareolar con extensión vertical descendente. Indicada para ptosis moderada (grado II). La cicatriz rodea la areola y desciende en línea recta hacia el surco submamario.",
  },
  {
    title: "Pexia en ancla (invertida T)",
    desc: "Incisión periareolar, vertical y horizontal en el surco submamario. Indicada para ptosis avanzada (grado III) o cuando hay exceso significativo de piel. Permite la mayor elevación y remodelación.",
  },
];

const benefits = [
  "Elevación y remodelación de las mamas para una apariencia más juvenil y firme.",
  "Reposicionamiento del complejo areola-pezón a una altura anatómicamente armónica.",
  "Mejora de la simetría mamaria cuando existe asimetría preexistente.",
  "Resultados perdurables si se mantiene un peso estable y se evitan nuevos embarazos.",
];

const safetySteps = [
  "Valoración médica obligatoria para evaluar antecedentes, grado de ptosis, elasticidad cutánea y expectativas del paciente.",
  "Explicación detallada de la técnica quirúrgica seleccionada, patrón de incisiones, alternativas y complicaciones potenciales.",
  "Firma de consentimiento informado antes de cualquier intervención quirúrgica.",
  "Atención en instalaciones habilitadas con protocolos de bioseguridad, equipos de emergencia y personal calificado.",
  "Controles posteriores programados y recomendaciones para el cuidado de las cicatrices y la recuperación.",
];

const candidates = [
  {
    title: "Ptosis o caída mamaria",
    desc: "Mamas con descenso del complejo areola-pezón por debajo del surco submamario, clasificable en grados I, II o III.",
  },
  {
    title: "Exceso de piel",
    desc: "Piel sobrante en la parte inferior de la mama, frecuente después de embarazos, lactancia o pérdida significativa de peso.",
  },
  {
    title: "Expectativas realistas",
    desc: "Comprensión de que la pexia eleva y remodela, pero no aumenta el volumen mamario. Las cicatrices son permanentes.",
  },
  {
    title: "Estado de salud estable",
    desc: "Confirmado mediante exámenes preoperatorios y valoración preanestésica por el equipo médico.",
  },
  {
    title: "Peso estable",
    desc: "Se recomienda mantener un peso corporal estable durante al menos 6 meses antes del procedimiento.",
  },
  {
    title: "No fumador activo",
    desc: "El tabaquismo afecta la cicatrización y la oxigenación tisular, aumentando el riesgo de complicaciones.",
  },
];

const recoveryTimeline = [
  {
    period: "Primeras 24 a 48 horas",
    desc: "Reposo absoluto relativo. Inflamación y molestias controlables con analgesia formulada. Uso de sostén quirúrgico sin aro las 24 horas.",
  },
  {
    period: "Primera semana (días 1 a 7)",
    desc: "Uso continuo del sostén quirúrgico. Evitar elevación de brazos por encima de los hombros y esfuerzos físicos. Se recomienda drenaje linfático suave.",
  },
  {
    period: "Primer mes",
    desc: "Retorno progresivo a actividades cotidianas. Restricción de ejercicio físico intenso y movimientos bruscos. Controles médicos para evaluar la evolución de las cicatrices.",
  },
  {
    period: "Retorno a actividades físicas",
    desc: "Ejercicio moderado a partir de la cuarta a sexta semana con autorización médica. Las cicatrices continúan madurando durante 6 a 12 meses.",
  },
];

const faqs = [
  {
    q: "¿Qué diferencia hay entre pexia y aumento mamario?",
    a: "La pexia mastopexy eleva y remodela la mama caída resecando piel sobrante y reposicionando el pezón, pero no aumenta el volumen. El aumento mamario incrementa el volumen mediante implantes. Ambos procedimientos pueden combinarse cuando se desea tanto elevación como volumen adicional.",
  },
  {
    q: "¿En qué consiste la pexia periareolar?",
    a: "Es una técnica de elevación mamaria en la que la incisión se realiza exclusivamente alrededor del borde de la areola. Está indicada para ptosis leve (grado I), donde el pezón se encuentra apenas por debajo del surco submamario. La cicatriz queda oculta en la transición entre la areola y la piel de la mama.",
  },
  {
    q: "¿Las cicatrices son muy visibles?",
    a: "Las cicatrices son permanentes pero tienden a atenuarse con el tiempo. Su visibilidad depende del patrón quirúrgico (periareolar, vertical o ancla), la genética del paciente y los cuidados posteriores. El cirujano explicará el patrón esperado durante la valoración y recomendará tratamientos para optimizar la cicatrización.",
  },
  {
    q: "¿Se pierde sensibilidad en el pezón?",
    a: "Es posible que ocurran cambios temporales o permanentes en la sensibilidad del complejo areola-pezón. Algunas pacientes experimentan disminución y otras un aumento de la sensibilidad. La técnica quirúrgica cuidadosa busca preservar la inervación, pero no garantiza la sensibilidad previa.",
  },
  {
    q: "¿Puedo amamantar después de una pexia?",
    a: "Depende de la técnica quirúrgica utilizada. Algunas técnicas preservan la conexión del pezón con los conductos galactóforos. Si planea futuros embarazos, debe discutirlo con el cirujano durante la valoración para elegir la técnica más adecuada.",
  },
  {
    q: "¿El embarazo después de la pexia afecta el resultado?",
    a: "Un embarazo posterior puede modificar el resultado de la pexia debido a los cambios hormonales, el aumento de volumen mamario y la lactancia. Se recomienda realizar la pexia cuando la paciente haya completado su plan de embarazos para obtener resultados más duraderos.",
  },
  {
    q: "¿La pexia corrige la asimetría mamaria?",
    a: "Sí. Durante la pexia, el cirujano puede corregir asimetrías en la posición del pezón, el volumen de las mamas y la forma general. La valoración preoperatoria incluye la medición de ambas mamas para planificar la corrección de la asimetría.",
  },
  {
    q: "¿Qué exámenes médicos necesito antes de la cirugía?",
    a: "Se requieren exámenes preoperatorios básicos: cuadro hemático completo, pruebas de coagulación (PT y PTT), función renal (creatinina), glicemia, prueba de embarazo (si aplica), electrocardiograma, ecografía mamaria o mamografía (según edad) y valoración por anestesiología.",
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

export default function PexiaMamariaPage() {
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
                Cirugía Mamaria
              </span>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight text-balance">
                Pexia mamaria y pexia periareolar en Cali
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/80 font-body leading-relaxed max-w-2xl">
                Elevación mamaria con técnicas quirúrgicas adaptadas al grado
                de ptosis de cada paciente, desde la pexia periareolar hasta
                la técnica en ancla.
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
                title="Pexia mamaria y pexia periareolar"
              />
              <div className="space-y-5 text-text-main/80 font-body leading-relaxed">
                <p>
                  La pexia mamaria (mastopexy) es el procedimiento quirúrgico
                  diseñado para elevar y remodelar las mamas que han perdido
                  firmeza y posición por efectos de la edad, embarazos,
                  lactancia o pérdida significativa de peso. Existen diversas
                  técnicas que se adaptan al grado de ptosis o caída mamaria
                  de cada paciente.
                </p>
                <h3 className="font-heading font-bold text-text-dark text-lg">
                  Grados de ptosis mamaria
                </h3>
                <p>
                  La ptosis se clasifica en tres grados según la posición del
                  complejo areola-pezón respecto al surco submamario. En el
                  grado I (leve) el pezón está al nivel del surco; en el grado
                  II (moderado) está por debajo pero el surco se mantiene; en
                  el grado III (avanzado) el pezón está muy por debajo y la
                  mama presenta exceso significativo de piel.
                </p>
                <h3 className="font-heading font-bold text-text-dark text-lg">
                  ¿Qué es la pexia periareolar?
                </h3>
                <p>
                  Es una técnica específica de elevación mamaria en la que la
                  incisión se limita al borde de la areola. Está indicada para
                  ptosis leve (grado I) o para pacientes que presentan areolas
                  dilatadas. Ofrece la ventaja de una cicatriz mínima oculta en
                  la transición entre la areola y la piel de la mama.
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
                de cirugía mamaria.
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
            title="¿Cómo se realiza la elevación mamaria?"
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
            title="Técnicas quirúrgicas según el grado de ptosis"
            desc="La elección de la técnica depende del grado de caída mamaria, la calidad de la piel y las expectativas de la paciente."
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
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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
            title="¿Qué puede mejorar la elevación mamaria?"
            desc="Los resultados varían según cada paciente, sus condiciones de salud, hábitos y seguimiento médico."
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
            title="¿Quién puede considerar una pexia mamaria?"
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
                Resultado visible
              </h3>
              <p className="text-sm text-text-main/80 font-body leading-relaxed">
                La elevación mamaria es evidente desde el postoperatorio
                inmediato. La posición definitiva de la mama, la forma y la
                maduración de las cicatrices se consolidan entre los 3 y 6
                meses. El complejo areola-pezón queda reposicionado a una
                altura anatómicamente más juvenil.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-silver/20 shadow-sm">
              <h3 className="font-heading font-bold text-text-dark text-lg mb-4">
                Duración de los resultados
              </h3>
              <p className="text-sm text-text-main/80 font-body leading-relaxed">
                Los resultados de la pexia son duraderos, pero el proceso de
                envejecimiento natural, cambios de peso y nuevos embarazos
                pueden modificar la posición y forma de las mamas con el
                tiempo. Mantener un peso estable y hábitos saludables ayuda
                a prolongar los resultados.
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
            desc="El proceso de recuperación es progresivo. Cada etapa requiere cuidados específicos indicados por el equipo médico."
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
                determinar la mejor técnica quirúrgica para ti.
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
