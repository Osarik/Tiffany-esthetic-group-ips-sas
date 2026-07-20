import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import AnimateInView, { StaggerGrid, StaggerItem } from "@/components/ui/AnimateInView";
import ImageCarousel from "@/components/ui/ImageCarousel";
import VenetianBlindHero from "@/components/ui/venetian-blind-hero";
import HeroTextReveal from "@/components/ui/hero-text-reveal";
import ParallaxSection from "@/components/ui/ParallaxSection";

const whatsappUrl =
  "https://wa.me/573202703522?text=Hola%2C%20quiero%20agendar%20una%20visita%20a%20sus%20instalaciones%20en%20Cali.";

const stats = [
  { value: "3", label: "Salas de cirugía" },
  { value: "1", label: "Área de recuperación" },
  { value: "1", label: "Farmacia habilitada" },
  { value: "100%", label: "Personal calificado" },
];

const facilities = [
  {
    title: "Salas de Cirugía",
    subtitle: "3 quirófanos habilitados",
    desc: "Tres salas de cirugía completamente equipadas para procedimientos de cirugía plástica y estética. Cada sala cuenta con equipos de anestesia, monitorización cardiaca, mesa quirúrgica, luz de techo y sistemas de aspiración central. Condiciones controladas de temperatura, humedad y presión positiva para mantener un ambiente estéril.",
    features: [
      "Equipos de anestesia con monitorización multiparámetro",
      "Lámparas de quirófano con iluminación LED sin sombra",
      "Sistema de aspiración central y oxígeno",
      "Protocolos de esterilización y bioseguridad",
    ],
    img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=85&fit=crop&crop=entropy&auto=format",
  },
  {
    title: "Área de Recuperación",
    subtitle: "Cuidado postoperatorio inmediato",
    desc: "Espacio diseñado para la recuperación inmediata posterior a la cirugía, atendido por enfermería especializada en recuperación quirúrgica. Contamos con camillas de recuperación, monitores de signos vitales, oxígeno suplementario y medicamentos de emergencia.",
    features: [
      "Monitorización continua de signos vitales",
      "Enfermería especializada en recuperación",
      "Oxígeno suplementario y aspiración",
      "Protocolos de manejo del dolor y náuseas",
    ],
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=85&fit=crop&crop=entropy&auto=format",
  },
  {
    title: "Farmacia Habilitada",
    subtitle: "Medicamentos e insumos certificados",
    desc: "Farmacia institucional debidamente habilitada ante las autoridades sanitarias, con disponibilidad de medicamentos controlados, antibióticos, analgésicos, material de curación e insumos quirúrgicos. Todo el inventario cuenta con registro INVIMA y trazabilidad completa.",
    features: [
      "Medicamentos con registro INVIMA vigente",
      "Control de temperatura y cadena de frío",
      "Stock permanente de insumos quirúrgicos",
      "Trazabilidad completa de cada insumo",
    ],
    img: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=1920&q=85&fit=crop&crop=entropy&auto=format",
  },
];

const gallery = [
  { src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=85&fit=crop&crop=entropy&auto=format", label: "Sala de Cirugía" },
  { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=85&fit=crop&crop=entropy&auto=format", label: "Consultorio" },
  { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=85&fit=crop&crop=entropy&auto=format", label: "Recuperación" },
  { src: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&q=85&fit=crop&crop=entropy&auto=format", label: "Equipo Quirúrgico" },
  { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=85&fit=crop&crop=entropy&auto=format", label: "Tecnología" },
  { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=85&fit=crop&crop=entropy&auto=format", label: "Esterilización" },
];

const faqs = [
  {
    q: "¿Qué significa que una IPS esté habilitada?",
    a: "Una IPS habilitada cumple con los estándares del Ministerio de Salud de Colombia (Resolución 3100 de 2019) en infraestructura, talento humano, equipos de emergencia y bioseguridad. Esto garantiza que las instalaciones, los equipos y el personal cumplen con los requisitos mínimos para realizar procedimientos quirúrgicos de forma segura.",
  },
  {
    q: "¿Puedo visitar las instalaciones antes de mi cirugía?",
    a: "Sí. Puedes agendar una visita a nuestras instalaciones para conocer las salas de cirugía, el área de recuperación y la farmacia. Durante la visita resolveremos todas tus dudas sobre el entorno donde se realizará tu procedimiento.",
  },
  {
    q: "¿Las salas de cirugía se pueden alquilar?",
    a: "Sí, nuestras salas de cirugía están disponibles para alquiler por parte de cirujanos plásticos y otras especialidades quirúrgicas que requieran un quirófano habilitado. Incluimos el personal asistencial necesario: circulante de cirugía, instrumentador quirúrgico y enfermería recuperadora.",
  },
  {
    q: "¿Qué equipos tiene cada sala de cirugía?",
    a: "Cada sala cuenta con mesa quirúrgica, lámpara de techo LED, equipo de anestesia con monitorización multiparámetro (FC, PA, SpO2, capnografía), sistema de aspiración central, oxígeno, electrobisturí y equipos de emergencia. Además, contamos con temperatura y humedad controladas.",
  },
  {
    q: "¿La farmacia tiene todos los medicamentos para el postoperatorio?",
    a: "Nuestra farmacia habilitada cuenta con un stock permanente de antibióticos, analgésicos, antiinflamatorios, material de curación e insumos quirúrgicos. Todos los medicamentos cuentan con registro INVIMA y se almacenan bajo condiciones controladas de temperatura.",
  },
  {
    q: "¿Cuánto tiempo se permanece en el área de recuperación?",
    a: "El tiempo en recuperación varía según el procedimiento y las condiciones de cada paciente, generalmente entre 1 y 4 horas. Durante este período, el paciente es monitorizado continuamente por enfermería especializada hasta cumplir los criterios de alta segura.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.tiffanyesthetic.com/instalaciones#webpage",
      url: "https://www.tiffanyesthetic.com/instalaciones",
      name: "Instalaciones Quirúrgicas Habilitadas en Cali",
      description:
        "Conoce nuestras instalaciones: 3 salas de cirugía, área de recuperación con enfermería y farmacia habilitada. IPS habilitada según Resolución 3100 de 2019 en Cali.",
      inLanguage: "es",
      medicalAudience: "Patient",
      aspect: "Facility",
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
      availableService: ["Surgical", "Recovery", "Pharmacy"],
    },
    ...facilities.map((f) => ({
      "@type": "MedicalProcedure",
      name: f.title,
      description: f.desc,
    })),
  ],
};

export const metadata: Metadata = {
  title:
    "Instalaciones Quirúrgicas Habilitadas en Cali | Tiffany Esthetic Group IPS SAS",
  description:
    "Conoce nuestras instalaciones: 3 salas de cirugía completamente equipadas, área de recuperación con enfermería especializada y farmacia habilitada. IPS habilitada en Cali. Agenda tu visita.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/instalaciones",
  },
  openGraph: {
    title: "Instalaciones Quirúrgicas en Cali",
    description:
      "Salas de cirugía, recuperación y farmacia habilitada. IPS habilitada según Resolución 3100 de 2019. Conoce nuestras instalaciones en Cali.",
    url: "https://www.tiffanyesthetic.com/instalaciones",
    siteName: "Tiffany Esthetic Group IPS SAS",
    locale: "es_CO",
    type: "website",
  },
};

export default function InstalacionesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        {/* ─── HERO — Full-bleed image ────────────────────────── */}
        <section className="relative h-[85vh] min-h-[600px] md:min-h-[700px] flex items-end overflow-hidden -mt-16">
          <VenetianBlindHero />

          <Container>
            <HeroTextReveal>
              <div className="relative z-10 pb-12 md:pb-20">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-white/90 font-body text-xs font-semibold tracking-[0.15em] uppercase">
                  Resolución 3100 de 2019 · IPS Habilitada
                </span>
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] text-balance max-w-3xl">
                Instalaciones quirúrgicas{" "}
                <span className="text-accent-light">habilitadas en Cali</span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-white/75 font-body leading-relaxed max-w-2xl">
                Tres salas de cirugía completamente equipadas, área de
                recuperación con enfermería especializada y farmacia
                habilitada. Todo en un mismo lugar.
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
                  Agendar visita
                </a>
                <a
                  href="#instalaciones-lista"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-body font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all duration-300 text-base no-underline"
                >
                  Conocer espacios
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </a>
              </div>
            </div>
            </HeroTextReveal>
          </Container>

        </section>

        {/* ─── STATS ──────────────────────────────────────────── */}
        <AnimateInView as="section" variant="fadeUp" className="relative bg-primary-deep py-14 md:py-18 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 0v40M0 20h40'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          <Container>
            <StaggerGrid className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8" staggerDelay={0.1}>
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <span className="block text-4xl md:text-5xl font-heading font-bold text-white mb-1">
                      {stat.value}
                    </span>
                    <span className="w-8 h-0.5 bg-accent block mx-auto mb-3 rounded-full" />
                    <p className="text-white/65 font-body text-sm leading-snug">
                      {stat.label}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </Container>
        </AnimateInView>

        {/* ─── 3 INSTALACIONES — Parallax sections ────────────────── */}
        <section id="instalaciones-lista">
          <AnimateInView variant="fadeUp">
            <div className="text-center px-4 py-20 md:py-28 max-w-3xl mx-auto">
              <span className="inline-block text-primary font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4 border border-primary/20 rounded-full px-4 py-1.5">
                Nuestras instalaciones
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-text-dark leading-tight text-balance">
                Espacios diseñados para tu{" "}
                <span className="text-primary">seguridad</span>
              </h2>
              <p className="mt-4 text-text-main/70 font-body text-base max-w-2xl mx-auto">
                Cada espacio ha sido diseñado y equipado cumpliendo los
                estándares de la Resolución 3100 de 2019 del Ministerio de
                Salud de Colombia.
              </p>
            </div>
          </AnimateInView>

          {facilities.map((item, i) => (
            <ParallaxSection
              key={item.title}
              image={item.img}
              bgPosition={i === 0 ? "51% 13%" : "center"}
              className={`min-h-[70vh] ${i === 1 ? "md:flex-row-reverse" : ""}`}
              overlayClassName={i % 2 === 0 ? "bg-gradient-to-r from-primary-deep/90 via-primary-deep/60 to-transparent" : "bg-gradient-to-l from-primary-deep/90 via-primary-deep/60 to-transparent"}
            >
              <Container>
                <AnimateInView
                  variant={i % 2 === 0 ? "fadeLeft" : "fadeRight"}
                  className={`flex flex-col justify-center min-h-[70vh] py-24 max-w-xl ${i % 2 === 0 ? "" : "ml-auto text-right"}`}
                >
                  <span className="inline-block text-primary font-body font-semibold text-xs tracking-[0.2em] uppercase mb-3 border border-primary/30 rounded-full px-4 py-1.5 w-fit">
                    {item.subtitle}
                  </span>
                  <h3 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mt-2">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-white/80 font-body text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                  <ul className={`mt-6 space-y-3 ${i % 2 === 0 ? "" : "flex flex-col items-end"}`}>
                    {item.features.map((f) => (
                      <li key={f} className={`flex items-start gap-3 text-sm text-white/75 font-body ${i % 2 === 0 ? "" : "flex-row-reverse text-right"}`}>
                        <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </AnimateInView>
              </Container>
            </ParallaxSection>
          ))}
        </section>

        {/* ─── GALERÍA — Carrusel ────────────────────────────────── */}
        <section className="relative bg-gradient-to-b from-white via-[#FBFBF9] to-white py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230F4A44' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          <Container>
            <AnimateInView variant="fadeUp">
              <div className="text-center mb-14">
                <span className="inline-block text-primary font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4 border border-primary/20 rounded-full px-4 py-1.5">
                  Galería
                </span>
                <h2 className="font-heading font-bold text-3xl md:text-5xl text-text-dark leading-tight">
                  Un recorrido por nuestras{" "}
                  <span className="text-primary">instalaciones</span>
                </h2>
                <p className="mt-4 text-text-main/60 font-body text-base max-w-xl mx-auto">
                  Desliza para ver nuestras salas de cirugía, área de
                  recuperación y farmacia habilitada en Cali.
                </p>
              </div>
            </AnimateInView>

            <AnimateInView variant="fadeUp" className="group">
              <ImageCarousel slides={gallery} />
            </AnimateInView>

            <AnimateInView variant="fadeUp" className="mt-16 text-center">
              <span className="text-[14vw] md:text-[10vw] leading-[0.85] uppercase font-heading font-bold bg-gradient-to-r from-primary/10 via-primary/5 to-transparent bg-clip-text text-transparent select-none block">
                Instalaciones
              </span>
              <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-transparent mx-auto mt-4 rounded-full" />
            </AnimateInView>
          </Container>
        </section>

        {/* ─── BENEFICIOS ────────────────────────────────────── */}
        <section className="bg-white py-20 md:py-28">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <AnimateInView variant="fadeLeft">
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1400&q=85&fit=crop&crop=entropy&auto=format"
                    alt="Equipos de esterilización y bioseguridad"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A26]/50 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                      <p className="text-xs text-text-dark font-body font-semibold">
                        "Nuestras instalaciones cumplen con los más altos
                        estándares de bioseguridad y habilitación."
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateInView>

              <AnimateInView variant="fadeRight">
                <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
                  ¿Por qué es importante?
                </span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-dark leading-tight mt-3">
                  Instalaciones habilitadas ={" "}
                  <span className="text-primary">tranquilidad</span>
                </h2>
                <p className="mt-4 text-text-main/75 font-body text-sm leading-relaxed">
                  Elegir una IPS habilitada significa que las instalaciones, el
                  talento humano y los equipos han sido verificados por las
                  autoridades sanitarias de Colombia. No es solo una
                  recomendación, es un requisito para garantizar tu seguridad.
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    {
                      title: "Cumplimiento normativo",
                      desc: "Resolución 3100 de 2019 del Ministerio de Salud. Auditorías periódicas que verifican cada aspecto de la operación.",
                    },
                    {
                      title: "Equipos verificados",
                      desc: "Todo el equipamiento médico cuenta con mantenimiento preventivo, calibración y certificaciones vigentes.",
                    },
                    {
                      title: "Protocolos de bioseguridad",
                      desc: "Esterilización centralizada, manejo de residuos hospitalarios, control de infecciones y planes de emergencia.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-4 p-4 rounded-xl bg-[#FBFBF9] border border-silver/20 hover:shadow-sm transition-all duration-300"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-text-dark text-sm">
                          {item.title}
                        </h3>
                        <p className="text-xs text-text-main/70 font-body mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateInView>
            </div>
          </Container>
        </section>

        {/* ─── FAQ ────────────────────────────────────────────── */}
        <section className="bg-[#FBFBF9] py-20 md:py-28">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <AnimateInView variant="fadeLeft">
                <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
                  FAQ
                </span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-dark leading-tight mt-3">
                  Preguntas frecuentes sobre nuestras instalaciones
                </h2>
                <p className="mt-4 text-text-main/70 font-body text-sm">
                  Resolvemos tus dudas sobre las salas de cirugía, la
                  recuperación y la farmacia habilitada.
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
              <AnimateInView
                variant="fadeRight"
                className="divide-y divide-silver/20"
              >
                <div itemScope itemType="https://schema.org/FAQPage">
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
        </section>

        {/* ─── CTA ────────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-[#0F4A44] via-[#1B6E66] to-[#2FA79C] py-24 md:py-32 overflow-hidden">
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
            <AnimateInView variant="fadeUp">
              <div className="relative text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 mb-6 bg-white/10 border border-white/20 rounded-full px-5 py-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-white/80 font-body text-xs font-semibold tracking-wider uppercase">
                    Conoce nuestras instalaciones
                  </span>
                </div>
                <h2 className="font-heading font-bold text-3xl md:text-5xl text-white leading-tight">
                  Agenda una visita a nuestras{" "}
                  <span className="text-accent-light">instalaciones en Cali</span>
                </h2>
                <p className="mt-5 text-white/75 font-body text-lg max-w-2xl mx-auto leading-relaxed">
                  Te invitamos a conocer personalmente nuestros espacios
                  quirúrgicos, resolver todas tus dudas y sentir la confianza
                  de elegir una IPS habilitada.
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
                    Agendar visita
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
                  Tiffany Esthetic Group IPS — Institución Prestadora de
                  Servicios de Salud habilitada ante las autoridades sanitarias
                  de Colombia.
                </p>
              </div>
            </AnimateInView>
          </Container>
        </section>
      </article>

      <footer className="bg-[#223231] text-white/60 py-8">
        <Container>
          <p className="text-xs leading-relaxed text-center font-body">
            Tiffany Esthetic Group IPS es una institución prestadora de
            servicios de salud registrada y habilitada ante las autoridades
            sanitarias de Colombia (Resolución 3100 de 2019 del Ministerio de
            Salud y Protección Social). Los resultados de los procedimientos
            quirúrgicos estéticos pueden variar según las condiciones
            anatómicas, genéticas y los hábitos de vida de cada paciente. La
            información contenida en este sitio web es estrictamente educativa
            y no sustituye una consulta médica formal. Todo procedimiento
            quirúrgico implica riesgos; la idoneidad del paciente debe ser
            evaluada previamente mediante valoración médica presencial.
          </p>
        </Container>
      </footer>

    </>
  );
}
