import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import WhatsAppButton from "@/components/WhatsAppButton";

const whatsappUrl =
  "https://wa.me/573XXXXXXXXX?text=Hola%2C%20quiero%20agendar%20mi%20valoraci%C3%B3n%20para%20liposucci%C3%B3n%20con%20aumento%20mamario%20en%20Cali.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.tiffanyesthetic.com/liposuccion-aumento#webpage",
      url: "https://www.tiffanyesthetic.com/liposuccion-aumento",
      name: "Liposucción y Aumento Mamario en Cali",
      description:
        "Plan quirúrgico integral que combina liposucción de contorno corporal con aumento mamario mediante implantes. IPS habilitada en Cali.",
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
      bodyLocation: ["Abdomen", "Flanks", "Back", "Thighs", "Arms"],
      description:
        "Remoción quirúrgica de depósitos de grasa localizada para mejorar el contorno corporal.",
    },
    {
      "@type": "MedicalProcedure",
      name: "Aumento Mamario con Implantes",
      procedureType: "SurgicalProcedure",
      bodyLocation: ["Breasts"],
      description:
        "Procedimiento quirúrgico para aumentar el volumen mamario mediante la colocación de implantes aprobados por INVIMA.",
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Liposucción y Aumento Mamario en Cali | Tiffany Esthetic Group IPS SAS",
  description:
    "Plan quirúrgico integral para definir el cuerpo con liposucción y complementar el volumen mamario con implantes aprobados. IPS habilitada en Cali. Agenda tu valoración.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/liposuccion-aumento",
  },
  openGraph: {
    title: "Liposucción y Aumento Mamario en Cali",
    description:
      "Plan quirúrgico integral: liposucción de contorno corporal y aumento mamario con implantes en una misma intervención.",
    url: "https://www.tiffanyesthetic.com/liposuccion-aumento",
    siteName: "Tiffany Esthetic Group IPS SAS",
    locale: "es_CO",
    type: "article",
  },
};

const procedureSteps = [
  {
    number: "01",
    title: "Valoración clínica y exámenes preoperatorios",
    desc: "Evaluación del estado de salud general, antecedentes médicos, exámenes de laboratorio, ecografía mamaria y valoración por anestesiología para determinar la idoneidad del paciente.",
  },
  {
    number: "02",
    title: "Marcación quirúrgica y selección del implante",
    desc: "El cirujano define las zonas de liposucción, el tipo de implante (perfil, volumen, textura), la vía de acceso (axilar, submamaria o periareolar) y el plano de colocación (submuscular o subglandular).",
  },
  {
    number: "03",
    title: "Liposucción de contorno corporal",
    desc: "Aspiración selectiva de grasa en las zonas previamente marcadas (abdomen, flancos, espalda o muslos) para definir la silueta antes de la colocación de los implantes.",
  },
  {
    number: "04",
    title: "Colocación de implantes mamarios",
    desc: "Inserción de los implantes aprobados por INVIMA en el plano quirúrgico definido. Verificación de simetría, posición y proyección antes del cierre.",
  },
  {
    number: "05",
    title: "Cierre quirúrgico y vendaje compresivo",
    desc: "Sutura por planos, colocación de vendaje compresivo y sostén quirúrgico para estabilizar los tejidos durante la recuperación inicial.",
  },
];

const benefits = [
  "Armonización completa de la silueta al combinar definición corporal con aumento del volumen mamario en un solo procedimiento.",
  "Mejora de la proporción corporal al reducir grasa localizada y complementar el contorno con proyección mamaria.",
  "Una sola cirugía, una sola anestesia y una sola recuperación para ambos procedimientos.",
  "Resultados más predecibles al planificar el contorno corporal y el volumen mamario de forma integral.",
];

const safetySteps = [
  "Valoración médica obligatoria para evaluar antecedentes, estado de salud, densidad mamaria y expectativas del paciente.",
  "Explicación detallada del procedimiento combinado, tipo de implante, incisiones, alternativas y complicaciones potenciales.",
  "Firma de consentimiento informado antes de cualquier intervención quirúrgica.",
  "Uso de implantes debidamente registrados ante INVIMA, la autoridad sanitaria colombiana.",
  "Atención en instalaciones habilitadas con protocolos de bioseguridad, equipos de emergencia y personal calificado.",
  "Controles posteriores programados y recomendaciones para el seguimiento a largo plazo de los implantes.",
];

const candidates = [
  {
    title: "Grasa localizada",
    desc: "Pacientes con depósitos adiposos en abdomen, flancos u otras zonas que desean reducir para definir el contorno corporal.",
  },
  {
    title: "Deseo de aumento mamario",
    desc: "Mamas con volumen que la paciente desea aumentar para mejorar la proporción y armonía de su silueta.",
  },
  {
    title: "Expectativas realistas",
    desc: "Comprensión de que los implantes tienen una vida útil y pueden requerir reintervenciones futuras.",
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
    desc: "El tabaquismo afecta la cicatrización y aumenta significativamente el riesgo de complicaciones quirúrgicas.",
  },
];

const areas = [
  {
    area: "Abdomen y flancos",
    desc: "Liposucción para reducir grasa y definir la cintura, creando una transición visual armoniosa hacia el nuevo volumen mamario.",
    icon: (
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    ),
  },
  {
    area: "Espalda y zona lumbar",
    desc: "Eliminación de depósitos adiposos para estilizar el torso y realzar el contorno femenino.",
    icon: (
      <path d="M4 4h16v16H4z" />
    ),
  },
  {
    area: "Mamas (aumento)",
    desc: "Aumento del volumen mamario mediante implantes aprobados por INVIMA, mejorando proyección, forma y simetría.",
    icon: (
      <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
    ),
  },
  {
    area: "Muslos",
    desc: "Reducción de volumen en muslos internos o externos para estilizar las extremidades y complementar el contorno corporal.",
    icon: (
      <path d="M8 4h8v16H8z" />
    ),
  },
];

const recoveryTimeline = [
  {
    period: "Primeras 24 a 48 horas",
    desc: "Reposo absoluto relativo. Inflamación, hematomas y molestias controlables con analgesia formulada. Uso de faja liposucción y sostén quirúrgico sin aro.",
  },
  {
    period: "Primera semana (días 1 a 7)",
    desc: "Uso continuo de faja y sostén quirúrgico. Se recomienda drenaje linfático suave para reducir edema. Evitar elevación de brazos y esfuerzos.",
  },
  {
    period: "Primer mes",
    desc: "Retorno progresivo a actividades cotidianas. Restricción de ejercicio físico intenso y movimientos bruscos con los brazos. Controles médicos para evaluar la evolución.",
  },
  {
    period: "Retorno a actividades físicas",
    desc: "Ejercicio moderado a partir de la cuarta a sexta semana con autorización médica. Los implantes continúan asentándose durante 3 a 6 meses.",
  },
];

const faqs = [
  {
    q: "¿Qué tipo de implantes se utilizan?",
    a: "En Tiffany Esthetic Group IPS utilizamos implantes mamarios debidamente registrados ante INVIMA (Instituto Nacional de Vigilancia de Medicamentos y Alimentos de Colombia). El cirujano recomendará el tipo, perfil, volumen y textura del implante según la anatomía y objetivos de cada paciente durante la valoración presencial.",
  },
  {
    q: "¿Los implantes mamarios son permanentes?",
    a: "No. Los implantes mamarios tienen una vida útil que varía según el tipo, la técnica quirúrgica y factores individuales. Pueden requerir reemplazo o retiro en el futuro por complicaciones como contractura capsular, rotura o cambios en la preferencia de la paciente.",
  },
  {
    q: "¿Se pierde sensibilidad en el pezón?",
    a: "Es posible que ocurran cambios temporales o permanentes en la sensibilidad del complejo areola-pezón. Algunas pacientes experimentan disminución y otras un aumento de la sensibilidad. El cirujano explicará estos riesgos durante la consulta preoperatoria.",
  },
  {
    q: "¿Puedo amamantar después del aumento mamario?",
    a: "Depende de la vía de acceso y la técnica quirúrgica utilizada. El acceso axilar o submamario generalmente preserva los conductos galactóforos. Si planea futuros embarazos, debe discutirlo con el cirujano durante la valoración para elegir la técnica más adecuada.",
  },
  {
    q: "¿Qué es la contractura capsular?",
    a: "Es la formación de tejido cicatricial alrededor del implante que puede endurecer la mama y deformar su contorno. Es la complicación más frecuente en aumento mamario y puede requerir reintervención. El riesgo varía según factores individuales y la técnica quirúrgica.",
  },
  {
    q: "¿Los implantes interfieren con la mamografía?",
    a: "Los implantes mamarios pueden dificultar la visualización del tejido mamario en una mamografía. Es necesario informar al radiólogo sobre la presencia de implantes y pueden requerirse proyecciones adicionales (técnica de Eklund). Se recomienda realizar controles mamográficos periódicos según la edad y factores de riesgo.",
  },
  {
    q: "¿Existe riesgo de linfoma asociado a implantes?",
    a: "El linfoma anaplásico de células grandes (BIA-ALCL) es una complicación poco frecuente asociada principalmente a implantes texturizados. Aunque el riesgo es bajo, debe ser informado durante la consulta preoperatoria. Tiffany Esthetic Group IPS entrega información completa sobre este riesgo como parte del consentimiento informado.",
  },
  {
    q: "¿Es seguro combinar liposucción y aumento en una misma cirugía?",
    a: "Sí, cuando se realiza en una IPS habilitada y por un cirujano calificado, la combinación de ambos procedimientos es segura y ofrece la ventaja de una sola recuperación. La decisión depende de la extensión de la liposucción, el tiempo quirúrgico total y las condiciones de salud del paciente, evaluados durante la valoración preoperatoria.",
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

export default function LiposuccionAumentoPage() {
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
                Liposucción y aumento mamario en Cali
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/80 font-body leading-relaxed max-w-2xl">
                Plan quirúrgico integral para definir el cuerpo mediante
                liposucción y complementar el volumen mamario con implantes
                aprobados por INVIMA.
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
                title="Liposucción con aumento mamario"
              />
              <div className="space-y-5 text-text-main/80 font-body leading-relaxed">
                <p>
                  La liposucción con aumento mamario es un plan quirúrgico
                  integral que combina dos procedimientos en una misma
                  intervención: el contorno corporal mediante liposucción y el
                  aumento del volumen mamario mediante implantes. Su objetivo es
                  armonizar la silueta de forma global.
                </p>
                <h3 className="font-heading font-bold text-text-dark text-lg">
                  ¿Qué es el aumento mamario?
                </h3>
                <p>
                  El aumento mamario (mamoplastia de aumento) es el
                  procedimiento quirúrgico que incrementa el volumen, mejora la
                  forma y la proyección de las mamas mediante la colocación de
                  implantes aprobados por INVIMA. Puede realizarse por diversas
                  vías de acceso (axilar, submamaria o periareolar) y los
                  implantes pueden colocarse en plano submuscular o subglandular,
                  según la anatomía de la paciente.
                </p>
                <h3 className="font-heading font-bold text-text-dark text-lg">
                  Diferencia con pexia mamaria
                </h3>
                <p>
                  Mientras la pexia eleva la mama sin aumentar su volumen, el
                  aumento mamario incrementa el volumen sin corregir la caída
                  significativa. En algunos casos, ambos procedimientos pueden
                  combinarse (aumento con pexia) cuando se desea tanto volumen
                  como elevación.
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
                2019 del Ministerio de Salud). Todos los implantes utilizados
                cuentan con registro sanitario INVIMA, la autoridad nacional
                de vigilancia de dispositivos médicos.
              </p>
              <div className="mt-4 bg-primary/5 rounded-xl p-5 border border-primary/10">
                <p className="text-sm font-body font-semibold text-primary-dark">
                  Todo procedimiento requiere valoración médica presencial,
                  exámenes preoperatorios, consentimiento informado y uso de
                  dispositivos médicos con registro INVIMA vigente.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="procedimiento" className="bg-[#FBFBF9]">
          <SectionHeader
            label="Procedimiento"
            title="¿Cómo se realiza la intervención combinada?"
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

        <Section id="areas" className="bg-white">
          <SectionHeader
            label="Áreas"
            title="Zonas tratadas en el procedimiento combinado"
            desc="La liposucción y el aumento mamario pueden abordar múltiples áreas en una misma intervención."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((item) => (
              <div
                key={item.area}
                className="bg-[#FBFBF9] rounded-2xl p-6 border border-silver/20"
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

        <Section id="beneficios" className="bg-[#FBFBF9]">
          <SectionHeader
            label="Beneficios"
            title="Ventajas del plan quirúrgico integral"
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
                  Atención médica con dispositivos aprobados
                </Heading>
                <p className="mt-4 text-white/75 font-body">
                  La seguridad del paciente es la prioridad. Utilizamos
                  exclusivamente implantes con registro sanitario INVIMA y
                  seguimos los protocolos clínicos establecidos por la
                  normativa colombiana.
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
            title="¿Quién puede considerar este plan quirúrgico?"
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
                Resultado del aumento mamario
              </h3>
              <p className="text-sm text-text-main/80 font-body leading-relaxed">
                El volumen y la proyección son visibles desde el postoperatorio
                inmediato, aunque los implantes se ven inicialmente altos y la
                piel requiere tiempo para adaptarse. El resultado final se
                consolida entre los 3 y 6 meses, cuando los implantes descienden
                a su posición natural y los tejidos se relajan.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-silver/20 shadow-sm">
              <h3 className="font-heading font-bold text-text-dark text-lg mb-4">
                Resultado de la liposucción
              </h3>
              <p className="text-sm text-text-main/80 font-body leading-relaxed">
                La reducción de contorno es visible desde las primeras semanas.
                El resultado final se define entre los 3 y 6 meses, una vez que
                la inflamación ha desaparecido. La combinación con el aumento
                mamario crea una silueta proporcionada y armónica.
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
                determinar el mejor tratamiento para ti.
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
