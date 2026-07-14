import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import AnimateInView, { StaggerGrid, StaggerItem } from "@/components/ui/AnimateInView";
import { services } from "@/data/services";

const whatsappUrl =
  "https://wa.me/573202703522?text=Hola%2C%20quiero%20agendar%20mi%20valoraci%C3%B3n%20m%C3%A9dica%20en%20Tiffany%20Esthetic%20Group.";

const stats = [
  { value: "3", label: "Salas de cirugía habilitadas" },
  { value: "1", label: "Área de recuperación" },
  { value: "1", label: "Farmacia habilitada" },
  { value: "8", label: "Procedimientos quirúrgicos" },
];

const processSteps = [
  {
    number: "01",
    title: "Valoración médica",
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
    a: "Puedes agendar tu valoración médica escribiéndonos al WhatsApp, llamando a nuestras líneas de atención o visitando nuestras instalaciones en el Comuna 17, Cali. Te atenderemos con la mayor brevedad posible.",
  },
];

const categoryMeta = [
  {
    name: "Cirugía Corporal",
    slug: "corporal",
    desc: "Moldeamiento corporal, lipoescultura, liposucción y procedimientos para definir el contorno del cuerpo.",
    img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
  },
  {
    name: "Cirugía Mamaria",
    slug: "mamaria",
    desc: "Elevación mamaria, pexia y técnicas quirúrgicas adaptadas a la anatomía de cada paciente.",
    img: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
  },
  {
    name: "Cirugía Facial",
    slug: "facial",
    desc: "Rinoplastia, blefaroplastia y lifting facial para rejuvenecer y armonizar los rasgos del rostro.",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
  },
];

const benefitsData = [
  {
    title: "IPS habilitada",
    desc: "Institución habilitada por la Secretaría de Salud (Resolución 3100 de 2019) con sala de cirugía, recuperación y farmacia habilitada.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Acompañamiento integral",
    desc: "Desde la valoración inicial hasta el postoperatorio, te acompañamos con controles programados y recomendaciones personalizadas.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
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

const categoryStyling: Record<string, { gradient: string; icon: React.ReactNode; lightBg: string }> = {
  corporal: {
    gradient: "from-[#0F4A44] to-[#2FA79C]",
    lightBg: "from-[#0F4A44]/5 to-[#2FA79C]/5",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="5" r="3" />
        <path d="M12 8v6" />
        <path d="M6 18c0-3 6-4 6-4s6 1 6 4" />
        <path d="M4 20c1-2 4-3 8-3s7 1 8 3" opacity="0.4" />
      </svg>
    ),
  },
  mamaria: {
    gradient: "from-[#B76E79] to-[#D48995]",
    lightBg: "from-[#B76E79]/5 to-[#D48995]/5",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 12c0-3 2-6 6-6s6 3 6 6" />
        <path d="M9 12c0-3 2-6 6-6s6 3 6 6" />
        <circle cx="6" cy="12" r="0.5" fill="currentColor" opacity="0.5" />
        <circle cx="18" cy="12" r="0.5" fill="currentColor" opacity="0.5" />
      </svg>
    ),
  },
  facial: {
    gradient: "from-[#4A8DB7] to-[#6DB3D9]",
    lightBg: "from-[#4A8DB7]/5 to-[#6DB3D9]/5",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <circle cx="9" cy="10" r="1.2" fill="currentColor" />
        <circle cx="15" cy="10" r="1.2" fill="currentColor" />
        <path d="M8 14.5c1.5 2 4.5 2 6.5 1" strokeWidth="1.5" />
        <path d="M20 12h2M2 12h2M12 2v2M12 20v2" opacity="0.3" strokeWidth="1" />
      </svg>
    ),
  },
};

const categoryColors: Record<string, string> = {
  corporal: "#0F4A44",
  mamaria: "#B76E79",
  facial: "#4A8DB7",
};

function ServiceCard({
  title,
  description,
  href,
  popular,
  categorySlug,
}: {
  title: string;
  description: string;
  href: string | undefined;
  popular?: boolean;
  categorySlug?: string;
}) {
  const style = categorySlug ? categoryStyling[categorySlug] : categoryStyling.corporal;
  return (
    <Link
      href={href ?? "#"}
      className="group relative block bg-white rounded-2xl overflow-hidden border border-silver/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
    >
      <div className={`bg-gradient-to-br ${style.gradient} h-28 md:h-32 flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.8'%3E%3Ccircle cx='24' cy='24' r='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/10 blur-xl" aria-hidden="true" />
        <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-white/8 blur-lg" aria-hidden="true" />
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/15 backdrop-blur-sm text-white flex items-center justify-center group-hover:bg-white/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-400 shadow-lg shadow-black/10">
          {style.icon}
        </div>
      </div>
      <div className="p-5 md:p-6">
        {popular && (
          <span className="inline-block mb-3 bg-accent/10 text-accent font-body font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
            Más solicitado
          </span>
        )}
        <h3 className="font-heading font-bold text-text-dark text-base md:text-lg group-hover:text-primary transition-colors duration-300 leading-tight">
          {title}
        </h3>
        <p className="mt-2 text-sm text-text-main/65 font-body leading-relaxed">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center text-sm font-body font-semibold gap-1.5 group-hover:gap-2.5 transition-all duration-300"
          style={{ color: categoryColors[categorySlug ?? "corporal"] }}
        >
          Ver información
          <svg className="w-4 h-4 transition-all duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </span>
      </div>
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
        {/* ─── HERO ─────────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-[#0F4A44] via-[#1B6E66] to-[#2FA79C] pt-28 pb-16 md:pt-36 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl animate-[float_12s_ease-in-out_infinite]" />
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl animate-[float_15s_ease-in-out_infinite_reverse]" />
            <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-white/30 animate-[float_8s_ease-in-out_infinite]" />
            <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-white/20 animate-[float_11s_ease-in-out_infinite_reverse]" />
            <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 rounded-full bg-white/25 animate-[float_9s_ease-in-out_infinite]" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F4A44]/40 via-transparent to-[#0F4A44]/20" aria-hidden="true" />
          <Container>
            <div className="max-w-3xl relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-white/60 font-body font-semibold text-xs tracking-[0.25em] uppercase">
                  IPS Habilitada · Res 3100 de 2019
                </span>
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.08] text-balance">
                Procedimientos{" "}
                <span className="text-accent-light">estéticos</span>
                <br />
                con seguridad y calidad
              </h1>
              <p className="mt-5 text-base md:text-lg text-white/70 font-body leading-relaxed max-w-xl">
                Cirugía corporal, mamaria y facial realizada en instalaciones
                habilitadas, con equipo calificado y acompañamiento profesional
                en cada etapa de tu proceso.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#0F4A44] font-body font-bold px-8 py-3.5 rounded-full hover:bg-white/90 hover:shadow-xl hover:shadow-black/25 transition-all duration-300 text-base shadow-lg shadow-black/20 no-underline"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Agendar valoración
                </a>
                <a
                  href="#servicios-lista"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/25 text-white font-body font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all duration-300 text-base no-underline"
                >
                  Ver procedimientos
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </a>
              </div>
              <p className="mt-6 text-xs text-white/40 font-body max-w-md">
                Todo procedimiento requiere una valoración médica presencial obligatoria.
              </p>
            </div>
          </Container>
        </section>

        {/* ─── STATS ────────────────────────────────────────────── */}
        <AnimateInView variant="fadeUp" as="section" className="relative bg-primary-deep py-14 md:py-18 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 0v40M0 20h40'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          <Container>
            <StaggerGrid className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8" staggerDelay={0.1}>
              {stats.map((stat, i) => (
                <StaggerItem key={stat.label}><div className="relative group">
                  <div className="text-center p-5 md:p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm group-hover:bg-white/10 transition-all duration-300">
                    <span className="block text-3xl md:text-5xl font-heading font-bold text-white mb-1">
                      {stat.value}
                    </span>
                    <span className="w-6 md:w-8 h-[2px] md:h-0.5 bg-accent block mx-auto mb-2 md:mb-3 rounded-full" />
                    <p className="text-white/65 font-body text-xs md:text-sm leading-snug">
                      {stat.label}
                    </p>
                  </div>
                </div></StaggerItem>
              ))}
            </StaggerGrid>
          </Container>
        </AnimateInView>

        {/* ─── SERVICIOS POR CATEGORÍA ─────────────────────────── */}
        <AnimateInView as="section" id="servicios-lista" className="bg-white py-20 md:py-28 relative overflow-hidden">
          <div className="absolute top-40 left-0 w-72 h-72 rounded-full bg-primary/[0.02] blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-40 right-0 w-96 h-96 rounded-full bg-accent/[0.02] blur-3xl pointer-events-none" aria-hidden="true" />
          <Container>
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4 border border-primary/20 rounded-full px-4 py-1.5">
                Nuestros procedimientos
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-text-dark leading-tight text-balance max-w-3xl mx-auto">
                Cirugía estética con estándares de{" "}
                <span className="text-primary">seguridad y calidad</span>
              </h2>
              <p className="mt-4 text-text-main/70 font-body text-base max-w-2xl mx-auto">
                Cada procedimiento tiene indicaciones específicas, técnicas
                quirúrgicas adaptadas y un proceso de recuperación particular.
              </p>
            </div>

            {categoryMeta.map((cat) => {
              const catServices = services.filter(
                (s) => s.category === cat.name
              );
              if (catServices.length === 0) return null;
              const catStyle = categoryStyling[cat.slug];
              return (
                <div key={cat.slug} className="mb-16 md:mb-20 last:mb-0 relative">
                  <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full opacity-[0.03] pointer-events-none" aria-hidden="true"
                    style={{
                      background: `radial-gradient(circle, ${cat.slug === "corporal" ? "#0F4A44" : cat.slug === "mamaria" ? "#B76E79" : "#4A8DB7"} 0%, transparent 70%)`,
                    }} />
                  <div className="flex items-start gap-4 mb-8">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${catStyle.gradient} text-white flex items-center justify-center shrink-0 shadow-lg`}
                      style={{ boxShadow: `0 4px 14px ${cat.slug === "corporal" ? "#0F4A4433" : cat.slug === "mamaria" ? "#B76E7933" : "#4A8DB733"}` }}>
                      {categoryStyling[cat.slug].icon}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-text-dark text-xl md:text-2xl">
                        {cat.name}
                      </h3>
                      <p className="text-sm text-text-main/60 font-body mt-1">
                        {cat.desc}
                      </p>
                    </div>
                  </div>
                  <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
                    {catServices.map((service) => {
                      const href = service.href ?? service.detailUrl ?? "#";
                      return (
                        <StaggerItem key={service.id}>
                          <ServiceCard
                            title={service.title}
                            description={service.description}
                            href={href}
                            popular={service.popular}
                            categorySlug={cat.slug}
                          />
                        </StaggerItem>
                      );
                    })}
                  </StaggerGrid>
                </div>
              );
            })}

            <div className="mt-16 text-center max-w-xl mx-auto p-8 bg-[#FBFBF9] rounded-2xl border border-silver/20">
              <p className="text-sm text-text-main/70 font-body">
                ¿No encuentras lo que buscas?{" "}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark transition-colors"
                >
                  Contáctanos
                </a>
                , te orientaremos durante tu valoración médica.
              </p>
            </div>
          </Container>
        </AnimateInView>

        {/* ─── BENEFICIOS ───────────────────────────────────────── */}
        <AnimateInView as="section" variant="fadeUp" className="bg-[#FBFBF9] py-20 md:py-28 overflow-hidden">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <AnimateInView variant="fadeLeft" className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=700&h=800&fit=crop&crop=entropy&auto=format&q=80"
                    alt="Instalaciones quirúrgicas de Tiffany Esthetic Group IPS"
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F4A44]/50 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <p className="text-xs text-text-dark font-body font-semibold">
                        "La seguridad del paciente es nuestra prioridad en cada
                        etapa del proceso quirúrgico."
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateInView>

              <AnimateInView variant="fadeRight">
                <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
                  ¿Por qué elegirnos?
                </span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-dark leading-tight mt-3">
                  Tu seguridad es{" "}
                  <span className="text-primary">nuestra prioridad</span>
                </h2>
                <div className="mt-8 space-y-5">
                  {benefitsData.map((item, i) => (
                    <div
                      key={item.title}
                      className="flex gap-4 p-4 rounded-xl bg-white border border-silver/20 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-text-dark text-base">
                          {item.title}
                        </h3>
                        <p className="text-sm text-text-main/70 font-body leading-relaxed mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateInView>
            </div>
          </Container>
        </AnimateInView>

        {/* ─── PROCESO ──────────────────────────────────────────── */}
        <AnimateInView as="section" variant="fadeUp" className="bg-[#FBFBF9] py-20 md:py-28">
          <Container>
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4 border border-primary/20 rounded-full px-4 py-1.5">
                Tu proceso quirúrgico
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-dark leading-tight">
                ¿Cómo es el proceso?
              </h2>
              <p className="mt-4 text-text-main/70 font-body text-base max-w-2xl mx-auto">
                Cinco etapas clave desde la primera consulta hasta tus resultados.
              </p>
            </div>

            <StaggerGrid className="grid md:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto" staggerDelay={0.1}>
              {processSteps.map((step, i) => (
                <StaggerItem key={step.number}>
                  <div className="bg-white rounded-2xl p-6 border border-silver/15 shadow-sm hover:shadow-md transition-all duration-300 text-center h-full flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-heading font-bold text-sm mb-4 shadow-lg shadow-primary/20">
                      {step.number}
                    </div>
                    <h3 className="font-heading font-bold text-text-dark text-sm md:text-base mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-text-main/65 font-body leading-relaxed flex-1">
                      {step.desc}
                    </p>
                    {i < processSteps.length - 1 && (
                      <svg className="w-5 h-5 text-primary/30 mt-3 hidden md:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </Container>
        </AnimateInView>

        {/* ─── FAQ ──────────────────────────────────────────────── */}
        <AnimateInView as="section" variant="fadeUp" className="bg-[#FBFBF9] py-20 md:py-28">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <AnimateInView variant="fadeLeft">
                <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
                  FAQ
                </span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-dark leading-tight mt-3">
                  Preguntas frecuentes
                </h2>
                <p className="mt-4 text-text-main/70 font-body text-base">
                  Resolvemos tus dudas sobre nuestros procedimientos
                  quirúrgicos, la valoración médica y el proceso de atención.
                </p>
                <div className="mt-6 p-5 bg-primary/5 rounded-xl border border-primary/10">
                  <p className="text-sm font-body text-primary-dark font-semibold">
                    ¿Tienes más preguntas?{" "}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                    >
                      Escríbenos al WhatsApp
                    </a>
                  </p>
                </div>
              </AnimateInView>
              <AnimateInView variant="fadeRight"
                className="divide-y divide-silver/20"
              >
                <div
                  itemScope
                  itemType="https://schema.org/FAQPage"
                >
                {faqs.map((faq) => (
                  <details
                    key={faq.q}
                    className="group py-4"
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                  >
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-heading font-semibold text-text-dark text-sm md:text-base">
                      <span itemProp="name">{faq.q}</span>
                      <svg
                        className="w-4 h-4 text-primary shrink-0 transition-transform duration-300 group-open:rotate-180"
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
                      className="mt-3 text-sm text-text-main/75 font-body leading-relaxed"
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <div itemProp="text">{faq.a}</div>
                    </div>
                  </details>
                ))}
              </div>
              </AnimateInView>
            </div>
          </Container>
        </AnimateInView>

        {/* ─── CTA FINAL ────────────────────────────────────────── */}
        <AnimateInView as="section" variant="fadeUp" className="relative bg-gradient-to-br from-[#0F4A44] via-[#1B6E66] to-[#2FA79C] py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          <div className="absolute top-0 left-0 w-full h-full opacity-10"
            style={{
              backgroundImage: "radial-gradient(ellipse 100% 80% at 30% 50%, rgba(255,255,255,0.15) 0%, transparent 70%)",
            }}
            aria-hidden="true" />
          <Container>
            <div className="relative text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 mb-6 bg-white/10 border border-white/20 rounded-full px-5 py-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-white/80 font-body text-xs font-semibold tracking-wider uppercase">
                  Comienza tu proceso hoy
                </span>
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-white leading-tight">
                Agenda tu valoración médica{" "}
                <span className="text-accent-light">en Cali</span>
              </h2>
              <p className="mt-5 text-white/75 font-body text-lg max-w-2xl mx-auto leading-relaxed">
                Da el primer paso: una consulta presencial con nuestros
                especialistas para evaluar tu caso, resolver tus dudas y
                encontrar el procedimiento ideal para ti.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#0F4A44] font-body font-bold px-10 py-4 rounded-full hover:bg-white/90 hover:shadow-2xl hover:shadow-black/25 transition-all duration-300 text-lg shadow-xl shadow-black/20 no-underline"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Agendar valoración médica
                </a>
                <a
                  href="https://wa.me/573202703522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-body font-semibold px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-300 text-lg no-underline"
                >
                  Resolver dudas
                </a>
              </div>
              <p className="mt-8 text-xs text-white/50 font-body max-w-lg mx-auto">
                Tiffany Esthetic Group IPS — Institución Prestadora de Servicios
                de Salud habilitada ante las autoridades sanitarias de Colombia.
              </p>
            </div>
          </Container>
        </AnimateInView>
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
