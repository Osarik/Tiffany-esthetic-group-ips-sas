import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import WhatsAppButton from "@/components/WhatsAppButton";

const whatsappUrl =
  "https://wa.me/573XXXXXXXXX?text=Hola%2C%20quiero%20agendar%20mi%20valoraci%C3%B3n%20para%20blefaroplastia%20en%20Cali.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.tiffanyesthetic.com/blefaroplastia#webpage",
      url: "https://www.tiffanyesthetic.com/blefaroplastia",
      name: "Blefaroplastia en Cali | Rejuvenecimiento de la Mirada",
      description:
        "Rejuvenecimiento de la mirada mediante manejo del exceso de piel y bolsas palpebrales. IPS habilitada en Cali. Agenda tu valoración médica.",
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
      name: "Blefaroplastia Superior",
      procedureType: "SurgicalProcedure",
      bodyLocation: ["Eyelids"],
      description:
        "Remoción quirúrgica del exceso de piel y grasa del párpado superior para rejuvenecer la mirada.",
    },
    {
      "@type": "MedicalProcedure",
      name: "Blefaroplastia Inferior",
      procedureType: "SurgicalProcedure",
      bodyLocation: ["Eyelids"],
      description:
        "Corrección quirúrgica de bolsas palpebrales inferiores y exceso de piel mediante abordaje transconjuntival o subciliar.",
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Blefaroplastia en Cali | Rejuvenecimiento de la Mirada | Tiffany Esthetic Group IPS SAS",
  description:
    "Rejuvenecimiento de la mirada mediante blefaroplastia superior e inferior. Manejo del exceso de piel y bolsas palpebrales. IPS habilitada en Cali. Agenda tu valoración.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/blefaroplastia",
  },
  openGraph: {
    title: "Blefaroplastia en Cali",
    description:
      "Rejuvenecimiento de la mirada con blefaroplastia superior e inferior. Resultados naturales que realzan la expresión facial.",
    url: "https://www.tiffanyesthetic.com/blefaroplastia",
    siteName: "Tiffany Esthetic Group IPS SAS",
    locale: "es_CO",
    type: "article",
  },
};

const procedureSteps = [
  {
    number: "01",
    title: "Valoración clínica y análisis palpebral",
    desc: "Evaluación del estado de salud general, anatomía palpebral, exceso de piel, protrusión de grasa, función muscular y exámenes preoperatorios. Se evalúa la visión periférica si hay ptosis severa.",
  },
  {
    number: "02",
    title: "Marcación quirúrgica personalizada",
    desc: "El cirujano marca las incisiones con la paciente sentada, definiendo la cantidad de piel a resecar en el párpado superior y el abordaje del párpado inferior (transconjuntival o subciliar).",
  },
  {
    number: "03",
    title: "Blefaroplastia superior",
    desc: "Incisión en el pliegue natural del párpado superior para resecar el exceso de piel y grasa, reposicionando los tejidos para lograr una mirada más abierta y descansada.",
  },
  {
    number: "04",
    title: "Blefaroplastia inferior",
    desc: "Abordaje transconjuntival (incisión interna sin cicatriz visible) o subciliar (incisión justo debajo de las pestañas) para eliminar o reposicionar las bolsas de grasa y, cuando es necesario, resecar el exceso de piel.",
  },
  {
    number: "05",
    title: "Cierre y cuidado postoperatorio",
    desc: "Sutura meticulosa con hilos finos, aplicación de pomada antibiótica y compresas frías para controlar la inflamación inicial.",
  },
];

const techniques = [
  {
    title: "Blefaroplastia superior",
    desc: "Indicada cuando existe exceso de piel en el párpado superior que puede reducir el campo visual o generar una apariencia de cansancio. La incisión se oculta en el pliegue natural del párpado. Se reseca piel sobrante y, cuando está indicado, se elimina o reposiciona grasa protruyente.",
  },
  {
    title: "Blefaroplastia inferior",
    desc: "Indicada para corregir bolsas palpebrales y exceso de piel en el párpado inferior. Puede realizarse mediante abordaje transconjuntival (sin cicatriz externa, ideal para pacientes con buena calidad de piel) o subciliar (con incisión externa mínima, para casos que requieren resección de piel).",
  },
  {
    title: "Blefaroplastia combinada",
    desc: "Aborda simultáneamente los párpados superiores e inferiores en una misma intervención. Es la opción más frecuente cuando el paciente presenta signos de envejecimiento en ambos párpados, ofreciendo un rejuvenecimiento integral de la mirada con una sola cirugía y una sola recuperación.",
  },
];

const benefits = [
  "Rejuvenecimiento de la mirada al eliminar el exceso de piel que genera apariencia de cansancio.",
  "Mejora del campo visual cuando el exceso de piel del párpado superior reduce la visión periférica.",
  "Eliminación o reducción de bolsas palpebrales inferiores para una expresión facial más fresca.",
  "Resultados perdurables que no impiden el proceso natural de envejecimiento futuro.",
];

const safetySteps = [
  "Valoración médica obligatoria para evaluar antecedentes, anatomía palpebral, función muscular, lubricación ocular y expectativas del paciente.",
  "Explicación detallada del procedimiento, abordaje quirúrgico, alternativas y complicaciones potenciales como ojo seco o alteraciones de la cicatrización.",
  "Firma de consentimiento informado antes de cualquier intervención quirúrgica.",
  "Atención en instalaciones habilitadas con protocolos de bioseguridad, equipos de emergencia y personal calificado.",
  "Controles posteriores programados y recomendaciones para el cuidado de los párpados y las cicatrices.",
];

const candidates = [
  {
    title: "Exceso de piel en párpados superiores",
    desc: "Piel sobrante que puede generar apariencia de cansancio, reducir el campo visual o dificultar la aplicación de maquillaje.",
  },
  {
    title: "Bolsas palpebrales inferiores",
    desc: "Protrusión de grasa orbitaria que genera bolsas visibles debajo de los ojos, independientemente del descanso.",
  },
  {
    title: "Expectativas realistas",
    desc: "Comprensión de que la blefaroplastia rejuvenece la mirada pero no detiene el proceso de envejecimiento ni elimina las arrugas finas (líneas de expresión).",
  },
  {
    title: "Estado de salud estable",
    desc: "Confirmado mediante exámenes preoperatorios y valoración preanestésica. Condiciones como ojo seco severo, glaucoma o tiroides deben evaluarse previamente.",
  },
  {
    title: "No fumador activo",
    desc: "El tabaquismo afecta la cicatrización y la oxigenación tisular, aumentando el riesgo de complicaciones en los tejidos palpebrales.",
  },
  {
    title: "Visión funcional adecuada",
    desc: "Se realiza evaluación de la función visual y lagrimal para determinar la idoneidad del procedimiento y prevenir complicaciones como ojo seco postoperatorio.",
  },
];

const recoveryTimeline = [
  {
    period: "Primeras 24 a 48 horas",
    desc: "Reposo con la cabeza elevada. Aplicación de compresas frías para reducir inflamación y equimosis. Es normal presentar edema palpebral, visión borrosa temporal y sensación de tirantez.",
  },
  {
    period: "Primera semana (días 1 a 7)",
    desc: "Retiro de puntos entre el día 5 y 7. El edema y los moretones disminuyen progresivamente. Evitar esfuerzos físicos, agacharse, levantar objetos pesados y exposición solar directa.",
  },
  {
    period: "Primer mes",
    desc: "La inflamación residual continúa disminuyendo. Las cicatrices comienzan a madurar y se vuelven menos notorias. Retorno progresivo a actividades cotidianas y uso de maquillaje con autorización médica.",
  },
  {
    period: "Resultado definitivo",
    desc: "La mayoría del edema desaparece en las primeras 4 a 6 semanas. Las cicatrices continúan madurando hasta los 6 a 12 meses, volviéndose cada vez menos perceptibles.",
  },
];

const faqs = [
  {
    q: "¿La blefaroplastia duele?",
    a: "El procedimiento se realiza bajo anestesia local con sedación o anestesia general, por lo que no hay dolor intraoperatorio. Durante el postoperatorio se presenta sensación de tirantez, inflamación y molestias leves controlables con analgesia formulada y compresas frías.",
  },
  {
    q: "¿Cuánto duran los resultados de la blefaroplastia?",
    a: "Los resultados son duraderos, pero el proceso natural de envejecimiento continúa. La eliminación del exceso de piel y grasa es permanente, aunque con el paso de los años pueden aparecer nuevos cambios cutáneos. Mantener hábitos saludables y protección solar ayuda a prolongar los resultados.",
  },
  {
    q: "¿Quedan cicatrices visibles?",
    a: "En la blefaroplastia superior, la cicatriz se oculta en el pliegue natural del párpado. En la inferior con abordaje subciliar, la cicatriz queda justo debajo de la línea de las pestañas. Con abordaje transconjuntival no hay cicatriz externa. Todas las cicatrices tienden a atenuarse significativamente con el tiempo.",
  },
  {
    q: "¿Cuándo puedo maquillarme después de la cirugía?",
    a: "Se recomienda esperar al menos 7 a 10 días antes de aplicar maquillaje en los párpados, y solo después de que el cirujano haya verificado la adecuada cicatrización de las incisiones. El maquillaje debe retirarse suavemente para no irritar los tejidos.",
  },
  {
    q: "¿La blefaroplastia afecta la visión?",
    a: "Temporalmente puede haber visión borrosa por el edema y la pomada antibiótica. La blefaroplastia superior puede mejorar el campo visual cuando el exceso de piel limitaba la visión periférica. Las complicaciones visuales graves son extremadamente raras cuando el procedimiento es realizado por un cirujano calificado.",
  },
  {
    q: "¿Qué diferencia hay entre blefaroplastia y lifting de cejas?",
    a: "La blefaroplastia trata el exceso de piel y grasa de los párpados. El lifting de cejas (frontoplastia) eleva la posición de las cejas para corregir la caída de las mismas. Ambos procedimientos pueden complementarse cuando el paciente presenta ptosis de cejas y exceso de piel palpebral.",
  },
  {
    q: "¿Qué exámenes médicos necesito antes de la cirugía?",
    a: "Se requieren exámenes preoperatorios básicos: cuadro hemático completo, pruebas de coagulación (PT y PTT), función renal (creatinina), glicemia, prueba de embarazo (si aplica), electrocardiograma, valoración por optometría u oftalmología (según antecedentes) y valoración por anestesiología.",
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

export default function BlefaroplastiaPage() {
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
                Blefaroplastia en Cali
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/80 font-body leading-relaxed max-w-2xl">
                Rejuvenecimiento de la mirada mediante manejo del exceso de
                piel y bolsas palpebrales. Técnicas superior e inferior
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
                title="Blefaroplastia o cirugía de párpados"
              />
              <div className="space-y-5 text-text-main/80 font-body leading-relaxed">
                <p>
                  La blefaroplastia es el procedimiento quirúrgico diseñado para
                  rejuvenecer la mirada mediante la corrección del exceso de
                  piel, la protrusión de grasa (bolsas) y la relajación muscular
                  en los párpados superiores e inferiores. Su objetivo es
                  restaurar una apariencia más fresca y descansada.
                </p>
                <h3 className="font-heading font-bold text-text-dark text-lg">
                  Blefaroplastia superior vs. inferior
                </h3>
                <p>
                  La blefaroplastia superior reseca el exceso de piel del
                  párpado superior que puede generar un aspecto cansado o
                  reducir el campo visual. La blefaroplastia inferior aborda
                  las bolsas palpebrales mediante técnicas transconjuntival
                  (sin cicatriz externa) o subciliar, dependiendo de la
                  cantidad de piel a resecar y la calidad cutánea.
                </p>
                <h3 className="font-heading font-bold text-text-dark text-lg">
                  Diferencia con el lifting de cejas
                </h3>
                <p>
                  La blefaroplastia trata exclusivamente los párpados. El
                  lifting de cejas (frontoplastia) eleva la posición de las
                  cejas para corregir la ptosis de las mismas. Ambos pueden
                  combinarse cuando el paciente presenta caída de cejas y
                  exceso de piel palpebral, para un rejuvenecimiento completo
                  de la región periorbitaria.
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
            title="¿Cómo se realiza la blefaroplastia?"
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
            desc="La elección de la técnica depende de la anatomía palpebral, la calidad de la piel y los objetivos del paciente."
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
            title="¿Qué puede mejorar la blefaroplastia?"
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
            title="¿Quién puede considerar una blefaroplastia?"
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
                La mirada se ve más abierta, descansada y rejuvenecida desde
                el postoperatorio inmediato, aunque el edema inicial puede
                limitar la apreciación del resultado. La definición final se
                consolida a medida que la inflamación desaparece y las
                cicatrices maduran durante los primeros meses.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-silver/20 shadow-sm">
              <h3 className="font-heading font-bold text-text-dark text-lg mb-4">
                Resultado funcional
              </h3>
              <p className="text-sm text-text-main/80 font-body leading-relaxed">
                Cuando el exceso de piel del párpado superior limitaba el campo
                visual, la blefaroplastia puede mejorar la visión periférica
                superior. Este beneficio funcional se nota inmediatamente
                después de que el edema postoperatorio disminuye.
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
            desc="El proceso de recuperación es progresivo. El resultado final puede apreciarse completamente en pocas semanas."
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
                determinar si la blefaroplastia es el procedimiento indicado
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
