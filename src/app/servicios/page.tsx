import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import WhatsAppButton from "@/components/WhatsAppButton";
import { services } from "@/data/services";

const whatsappUrl =
  "https://wa.me/573XXXXXXXXX?text=Hola%2C%20quiero%20agendar%20mi%20valoraci%C3%B3n%20m%C3%A9dica%20en%20Tiffany%20Esthetic%20Group.";

const stats = [
  { value: "3", label: "Salas de cirugía" },
  { value: "1", label: "Área de recuperación" },
  { value: "1", label: "Farmacia habilitada" },
  { value: "8", label: "Procedimientos quirúrgicos" },
];

const processSteps = [
  {
    number: "01",
    title: "Valoración médica presencial",
    desc: "Evaluación clínica obligatoria para conocer tu estado de salud, tus objetivos estéticos y determinar el procedimiento más adecuado para ti.",
  },
  {
    number: "02",
    title: "Exámenes preoperatorios",
    desc: "Cuadro hemático, pruebas de coagulación, electrocardiograma y valoración por anestesiología para garantizar que estás en condiciones óptimas.",
  },
  {
    number: "03",
    title: "Procedimiento quirúrgico",
    desc: "Cirugía realizada en nuestras instalaciones habilitadas, con equipo médico calificado y protocolos de bioseguridad.",
  },
  {
    number: "04",
    title: "Recuperación y cuidados",
    desc: "Acompañamiento durante el postoperatorio con recomendaciones personalizadas, controles programados y drenaje linfático según el caso.",
  },
  {
    number: "05",
    title: "Resultados y seguimiento",
    desc: "Valoraciones periódicas para evaluar la evolución, la maduración de las cicatrices y la satisfacción con los resultados obtenidos.",
  },
];

const faqs = [
  {
    q: "¿Qué tipos de cirugía estética ofrecen?",
    a: "Ofrecemos procedimientos de cirugía corporal (lipoescultura, liposucción, lipectomía), cirugía mamaria (pexia, mastopexy) y cirugía facial (rinoplastia, blefaroplastia, lifting facial). Cada procedimiento tiene una página detallada con información específica sobre técnicas, recuperación y resultados esperados.",
  },
  {
    q: "¿Necesito una valoración médica antes de la cirugía?",
    a: "Sí. Todo procedimiento quirúrgico requiere una valoración médica presencial obligatoria, tal como lo establece la normativa colombiana. En esta consulta se evalúan tus condiciones de salud, se discuten tus expectativas y se define el plan quirúrgico más adecuado.",
  },
  {
    q: "¿Qué es una IPS habilitada y por qué es importante?",
    a: "Una Institución Prestadora de Servicios de Salud (IPS) habilitada cumple con los estándares del Ministerio de Salud de Colombia (Resolución 3100 de 2019) en infraestructura, talento humano calificado, equipos de emergencia y bioseguridad. Elegir una IPS habilitada minimiza los riesgos quirúrgicos.",
  },
  {
    q: "¿Qué exámenes médicos necesito antes de la cirugía?",
    a: "Los exámenes preoperatorios estándar incluyen cuadro hemático, pruebas de coagulación (PT y PTT), función renal (creatinina), glicemia, prueba de embarazo (si aplica), electrocardiograma y valoración por anestesiología. Pueden solicitarse exámenes adicionales según la edad y los antecedentes del paciente.",
  },
  {
    q: "¿Cuánto tiempo dura la recuperación?",
    a: "La recuperación varía según el procedimiento y las condiciones de cada paciente. En general, el retorno a actividades cotidianas puede tomar de 1 a 3 semanas, mientras que el ejercicio físico intenso se reanuda entre 4 y 8 semanas. Las cicatrices continúan madurando hasta los 12 meses.",
  },
  {
    q: "¿Los resultados son permanentes?",
    a: "Los resultados quirúrgicos son duraderos, pero el proceso de envejecimiento natural continúa. Mantener un peso estable, hábitos saludables y cuidados de la piel ayuda a prolongar los resultados. Cada procedimiento tiene expectativas específicas que se explican durante la valoración médica.",
  },
  {
    q: "¿Tienen financiamiento o planes de pago?",
    a: "Contamos con opciones de financiamiento que se pueden consultar durante la valoración médica. Nuestro equipo administrativo te informará sobre los planes disponibles y las formas de pago aceptadas.",
  },
  {
    q: "¿Cómo agendo mi valoración médica?",
    a: "Puedes agendar tu valoración médica escribiéndonos al WhatsApp, llamando a nuestras líneas de atención o visitando nuestras instalaciones en el Barrio Granada, Cali. Te atenderemos con la mayor brevedad posible.",
  },
];

const categories = [
  {
    name: "Cirugía Corporal",
    slug: "corporal",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
  {
    name: "Cirugía Mamaria",
    slug: "mamaria",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    name: "Cirugía Facial",
    slug: "facial",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="10" r="1" fill="currentColor" />
        <path d="M8 15c1.5 1.5 4.5 1.5 6 0" />
      </svg>
    ),
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.tiffanyesthetic.com/servicios#webpage",
      url: "https://www.tiffanyesthetic.com/servicios",
      name: "Procedimientos Quirúrgicos Estéticos en Cali",
      description:
        "Conoce todos los procedimientos quirúrgicos estéticos que ofrecemos en Tiffany Esthetic Group IPS: cirugía corporal, mamaria y facial en Cali. IPS habilitada.",
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
      "@type": "ItemList",
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "MedicalProcedure",
          name: s.title,
          description: s.description,
        },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Procedimientos Quirúrgicos Estéticos en Cali | Tiffany Esthetic Group IPS SAS",
  description:
    "Conoce todos los procedimientos de cirugía plástica y estética en Cali: lipoescultura, liposucción, pexia mamaria, rinoplastia, blefaroplastia y lifting facial. IPS habilitada.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/servicios",
  },
  openGraph: {
    title: "Procedimientos Quirúrgicos Estéticos en Cali",
    description:
      "Cirugía corporal, mamaria y facial en Cali. IPS habilitada con sala de cirugía, recuperación, farmacia y personal calificado.",
    url: "https://www.tiffanyesthetic.com/servicios",
    siteName: "Tiffany Esthetic Group IPS SAS",
    locale: "es_CO",
    type: "website",
  },
};

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

function ServiceCard({
  title,
  description,
  href,
  popular,
}: {
  title: string;
  description: string;
  href: string | undefined;
  popular?: boolean;
}) {
  return (
    <Link
      href={href ?? "#"}
      className="group relative block bg-white rounded-2xl p-6 border border-silver/20 hover:border-primary/30 shadow-sm hover:shadow-lg transition-all duration-300 no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
    >
      {popular && (
        <span className="absolute top-3 right-3 bg-accent text-white text-[10px] font-body font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
          Popular
        </span>
      )}
      <h3 className="font-heading font-bold text-text-dark text-lg mb-2">
        {title}
      </h3>
      <p className="text-sm text-text-main/80 font-body leading-relaxed">
        {description}
      </p>
      <span className="mt-4 inline-flex text-sm font-body font-bold text-primary group-hover:text-primary-dark transition-colors">
        Ver información médica
        <svg
          className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </span>
    </Link>
  );
}

export default function ServiciosPage() {
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
                IPS Habilitada · Resolución 3100 de 2019
              </span>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight text-balance">
                Procedimientos quirúrgicos estéticos en Cali
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/80 font-body leading-relaxed max-w-2xl">
                En Tiffany Esthetic Group IPS ofrecemos procedimientos de
                cirugía corporal, mamaria y facial realizados en instalaciones
                habilitadas, con personal calificado y acompañamiento
                profesional en cada etapa del proceso.
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
                  href="#servicios-lista"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-body font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all duration-300 text-base no-underline"
                >
                  Explorar procedimientos
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

        <section className="bg-primary-deep py-14 md:py-18">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="text-4xl md:text-5xl font-heading font-bold text-white">
                    {stat.value}
                  </span>
                  <p className="text-white/70 font-body text-sm md:text-base mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <Section id="servicios-lista" className="bg-white">
          <SectionHeader
            label="Procedimientos"
            title="Todos nuestros servicios quirúrgicos"
            desc="Cada procedimiento tiene indicaciones específicas, técnicas quirúrgicas adaptadas y un proceso de recuperación particular. Selecciona el tuyo para obtener información detallada."
          />
          <div className="space-y-16">
            {categories.map((cat) => {
              const catServices = services.filter(
                (s) => s.category === cat.name
              );
              if (catServices.length === 0) return null;
              return (
                <div key={cat.slug}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      {cat.icon}
                    </div>
                    <h2 className="font-heading font-bold text-2xl text-text-dark">
                      {cat.name}
                    </h2>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {catServices.map((service) => {
                      const href =
                        service.href ?? service.detailUrl ?? "#";
                      return (
                        <ServiceCard
                          key={service.id}
                          title={service.title}
                          description={service.description}
                          href={href}
                          popular={service.popular}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <p className="text-sm text-text-main/60 font-body max-w-2xl mx-auto">
              Si no encuentras el procedimiento que buscas o tienes dudas sobre
              cuál es el más adecuado para ti, contáctanos. Te orientaremos
              durante la valoración médica presencial.
            </p>
          </div>
        </Section>

        <Section id="beneficios" className="bg-[#FBFBF9]">
          <SectionHeader
            label="Beneficios"
            title="¿Por qué elegir Tiffany Esthetic Group?"
            desc="Más que una cirugía, ofrecemos un proceso integral con enfoque en la seguridad y el bienestar del paciente."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "IPS habilitada",
                desc: "Institución habilitada por la Secretaría de Salud (Resolución 3100 de 2019) con sala de cirugía, recuperación y farmacia habilitada.",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                ),
              },
              {
                title: "Equipo calificado",
                desc: "Cirujanos plásticos miembros de la SCCP, anestesiólogos certificados, instrumentadores y enfermería especializada en recuperación quirúrgica.",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                ),
              },
              {
                title: "Acompañamiento integral",
                desc: "Desde la valoración inicial hasta el postoperatorio, te acompañamos con controles programados y recomendaciones personalizadas para cada etapa.",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-silver/20 shadow-sm"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-text-dark text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-text-main/80 font-body leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="proceso" className="bg-white">
          <SectionHeader
            label="Proceso"
            title="¿Cómo es el proceso quirúrgico?"
            desc="Cinco etapas clave que describen el journey del paciente desde la primera consulta hasta los resultados."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="relative bg-[#FBFBF9] rounded-2xl p-8 border border-silver/20 shadow-sm"
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

        <Section id="faq" className="bg-white">
          <SectionHeader
            label="FAQ"
            title="Preguntas frecuentes sobre nuestros procedimientos"
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
                especialistas para evaluar tu caso y determinar el procedimiento
                más adecuado para ti.
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
