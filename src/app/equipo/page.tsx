import type { Metadata } from "next";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import Container from "@/components/ui/Container";
import AnimateInView, { StaggerGrid, StaggerItem } from "@/components/ui/AnimateInView";
import ForceTopOnMount from "@/components/ForceTopOnMount";

const whatsappUrl =
  "https://wa.me/573202703522?text=Hola%2C%20quiero%20agendar%20una%20valoraci%C3%B3n%20m%C3%A9dica%20en%20Tiffany%20Esthetic%20Group.";

const stats = [
  { value: "3", label: "Salas de cirugía habilitadas" },
  { value: "3", label: "Especialidades quirúrgicas" },
  { value: "6+", label: "Profesionales de enfermería" },
  { value: "1", label: "Farmacia habilitada" },
];

const servicesOffered = [
  {
    title: "Alquiler de salas de cirugía",
    desc: "Tres quirófanos completamente equipados disponibles para cirujanos plásticos. Incluye apoyo de anestesiólogo, circulante de cirugía e instrumentador quirúrgico. Cada sala cuenta con equipo de anestesia, monitorización multiparámetro, lámpara LED, aspiración central y oxígeno.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Área de recuperación",
    desc: "Espacio de recuperación postoperatoria inmediata atendido por enfermeras recuperadoras especializadas. Monitorización continua de signos vitales, oxígeno suplementario, manejo del dolor y protocolos de alta segura supervisados por nuestro jefe de planta.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Farmacia habilitada",
    desc: "Farmacia institucional debidamente registrada y habilitada ante la Secretaría de Salud, con disponibilidad de medicamentos controlados, antibióticos, analgésicos, material de curación e insumos quirúrgicos con registro INVIMA y trazabilidad completa.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10.5 4.5l3-1.5 3 1.5" />
        <path d="M13.5 3v6" />
        <path d="M16.5 9H7.5a3 3 0 00-3 3v7a2 2 0 002 2h12a2 2 0 002-2v-7a3 3 0 00-3-3z" />
      </svg>
    ),
  },
  {
    title: "Coordinación quirúrgica",
    desc: "Un jefe de planta supervisa y coordina todo el servicio quirúrgico: desde la admisión del paciente, la preparación del quirófano, la disponibilidad del personal asistencial hasta el alta de recuperación. Garantizamos continuidad y calidad en cada etapa.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

const values = [
  {
    title: "Seguridad ante todo",
    desc: "Cada procedimiento se realiza en instalaciones habilitadas por la Secretaría de Salud bajo estrictos protocolos de bioseguridad, esterilización centralizada y manejo de residuos hospitalarios.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Idoneidad profesional",
    desc: "Cirujanos plásticos miembros de la SCCP y anestesiólogos certificados por el Consejo de Anestesiología, con recertificación periódica que garantiza estándares de calidad y actualización científica.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Acompañamiento integral",
    desc: "Desde la valoración inicial hasta el postoperatorio, el mismo equipo de cirujanos, anestesiólogos y enfermería te acompaña con controles programados, cuidados personalizados y seguimiento continuo.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.tiffanyesthetic.com/equipo#webpage",
      url: "https://www.tiffanyesthetic.com/equipo",
      name: "Equipo Médico Profesional | Tiffany Esthetic Group IPS",
      description:
        "Conoce nuestro equipo de cirujanos plásticos miembros de la SCCP, anestesiólogos certificados, enfermería recuperadora y servicios quirúrgicos en Cali.",
      inLanguage: "es",
      medicalAudience: "Patient",
    },
    {
      "@type": "MedicalClinic",
      name: "Tiffany Esthetic Group IPS",
      address: {
        "@type": "PostalAddress",
        streetAddress: "13a1-25, Cra 85c, Comuna 17",
        addressLocality: "Cali",
        addressRegion: "Valle del Cauca",
        addressCountry: "CO",
      },
      medicalSpecialty: "PlasticSurgery",
      availableService: ["Surgical", "Recovery", "Pharmacy"],
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Equipo Médico Profesional | Cirujanos SCCP y Anestesiólogos | Tiffany Esthetic Group IPS SAS",
  description:
    "Cirujanos plásticos miembros de la Sociedad Colombiana de Cirugía Plástica (SCCP), anestesiólogos certificados por el Consejo de Anestesiología, enfermería recuperadora y servicios quirúrgicos en Cali. IPS habilitada.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/equipo" },
  openGraph: {
    title: "Equipo Médico Profesional | Tiffany Esthetic Group IPS",
    description:
      "Cirujanos plásticos miembros de la SCCP, anestesiólogos certificados y personal de enfermería especializado. IPS habilitada con 3 salas de cirugía en Cali.",
    locale: "es_CO",
    type: "website",
  },
};

export default function EquipoPage() {
  return (
    <>
      <ForceTopOnMount />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/videos/drjuan.mp4"
        bgImageSrc="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1920&auto=format&fit=crop"
        title="Equipo de Cirujanos Plásticos en Cali"
        date="IPS habilitada · Secretaría de Salud"
        scrollToExpand="Desliza para conocer al equipo"
        textBlend
      >
        <article>
        {/* ─── STATS ──────────────────────────────────────────── */}
        <AnimateInView variant="fadeUp" as="section" className="bg-primary-deep py-14 md:py-18 overflow-hidden">
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

        {/* ─── SERVICIOS QUIRÚRGICOS ──────────────────────────── */}
        <section className="bg-white py-20 md:py-28">
          <Container>
            <AnimateInView variant="fadeUp">
              <div className="text-center mb-16">
                <span className="inline-block text-primary font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4 border border-primary/20 rounded-full px-4 py-1.5">
                  Servicios quirúrgicos
                </span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-text-dark leading-tight text-balance max-w-3xl mx-auto">
                  Lo que ofrecemos como{" "}
                  <span className="text-primary">equipo quirúrgico</span>
                </h2>
                <p className="mt-4 text-text-main/70 font-body text-base max-w-2xl mx-auto">
                  Tiffany Esthetic Group IPS pone a disposición de cirujanos
                  plásticos y pacientes una infraestructura completa con talento
                  humano calificado, tres salas de cirugía, área de recuperación
                  y farmacia habilitada.
                </p>
              </div>
            </AnimateInView>

            <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.1}>
              {servicesOffered.map((s) => (
                <StaggerItem key={s.title}>
                  <div className="group p-6 md:p-7 rounded-2xl bg-white border border-silver/20 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-400 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-400">
                      {s.icon}
                    </div>
                    <h3 className="font-heading font-bold text-text-dark text-base mb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm text-text-main/65 font-body leading-relaxed flex-1">
                      {s.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </Container>
        </section>

        {/* ─── EQUIPO ─────────────────────────────────────────── */}
        <section id="equipo" className="py-16 md:py-24 bg-clinic-bg">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12" style={{ opacity: 1, transform: "none" }}>
              <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">Nuestro Equipo</span>
              <h2 className="text-balance font-heading font-bold leading-tight tracking-tight text-3xl md:text-4xl lg:text-5xl mt-3">
                Profesionales al servicio de tu seguridad
              </h2>
              <p className="mt-4 text-text-main font-body max-w-2xl mx-auto">
                La atención quirúrgica se apoya en cirujanos plásticos, anestesiólogos, farmaceuta, instrumentación, circulante de cirugía y enfermería recuperadora.
              </p>
            </div>

            {/* ─── RETHUS BANNER ──────────────────────────────── */}
            <div className="max-w-3xl mx-auto mb-12 p-5 md:p-6 rounded-2xl bg-green-50/80 border border-green-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-heading font-bold text-green-800 text-sm md:text-base">
                    100 % de nuestro talento humano registrado y verificado en <span className="text-green-600">RETHUS</span>
                  </p>
                  <p className="text-green-700/70 font-body text-xs md:text-sm mt-1 leading-relaxed">
                    El Registro de Talento Humano en Salud (RETHUS) es el sistema oficial del Ministerio de Salud de Colombia que acredita a los profesionales sanitarios.
                  </p>
                  <a
                    href="https://rethussis.minsalud.gov.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-green-700 font-body font-semibold text-xs hover:text-green-800 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Consultar en el portal RETHUS
                  </a>
                </div>
              </div>
            </div>

            <div>
              {/* Mobile: stacked */}
              <div className="flex md:hidden flex-col items-stretch gap-4">
                {[
                  { img: "/images/cirujano.png", alt: "Cirujanos plásticos", title: "Cirujanos plásticos", subtitle: "Especialistas en cirugía plástica y estética", desc: "Cirujanos plásticos calificados para procedimientos corporales, mamarios y faciales. Algunos de nuestros profesionales son miembros de la Sociedad Colombiana de Cirugía Plástica (SCCP). Cada cirujano cuenta con la certificación que acredita su especialidad y se mantiene en actualización permanente." },
                  { img: "/images/anestesiologo.png", alt: "Anestesiólogos", title: "Anestesiólogos", subtitle: "Miembros del Consejo de Anestesiología (S.C.A.R.E.)", desc: "Anestesiólogos certificados y miembros del Consejo de Anestesiología, con recertificación periódica según los estándares del C.A.M.E.C. Evaluamos cada caso de forma individual para seleccionar la técnica anestésica más segura según el procedimiento y las condiciones del paciente." },
                  { img: "/images/equipo.png", alt: "Equipo quirúrgico", title: "Equipo quirúrgico y recuperación", subtitle: "Instrumentación, circulante, enfermería y jefe de planta", desc: "Contamos con instrumentador quirúrgico, circulante de cirugía y enfermeras recuperadoras que acompañan al paciente antes, durante y después del procedimiento. Un jefe de planta coordina todo el servicio quirúrgico para garantizar la continuidad y calidad de la atención." },
                  { img: "/images/farmaco.png", alt: "Servicio farmacéutico", title: "Servicio farmacéutico", subtitle: "Farmaceuta con habilitación institucional", desc: "Nuestra farmacia habilitada cuenta con profesional farmaceuta que garantiza la gestión, dispensación y trazabilidad de medicamentos e insumos quirúrgicos bajo estándares de calidad, seguridad y oportunidad durante cada etapa de la atención." },
                ].map((item, idx) => (
                  <div key={idx} data-card-idx={idx} className="cursor-default transition-all duration-[700] ease-out basis-full" style={{ opacity: 0, transform: "translateY(20px)" }}>
                    <div className="h-full rounded-3xl transition-all duration-[700] ease-out bg-white/50">
                      <div className="flex flex-col items-center justify-center h-full p-6 transition-all duration-[700] ease-out gap-4">
                        <div className="shrink-0 transition-all duration-[700] ease-out scale-100">
                          <img alt={item.alt} className="w-14 h-14 object-contain" src={item.img} />
                        </div>
                        <div className="transition-all duration-[700] ease-out opacity-100">
                          <h3 className="font-heading font-bold text-text-dark text-lg text-center mt-2">{item.title}</h3>
                          <span className="block text-primary font-body font-semibold text-sm text-center mt-1">{item.subtitle}</span>
                          <p className="text-text-main/70 font-body text-sm leading-relaxed text-center mt-3 max-w-[260px] mx-auto">{item.desc}</p>
                          <div className="flex items-center justify-center gap-1.5 mt-4">
                            <svg className="w-3.5 h-3.5 text-green-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                              <polyline points="9 12 11 14 15 10" />
                            </svg>
                            <span className="text-[11px] font-body font-semibold text-green-600">Registrado en RETHUS</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Desktop: horizontal layout with positioning */}
              <div className="hidden md:block relative h-[540px]">
                {[
                  { img: "/images/cirujano.png", alt: "Cirujanos plásticos", title: "Cirujanos plásticos", subtitle: "Especialistas en cirugía plástica y estética", desc: "Cirujanos plásticos calificados para procedimientos corporales, mamarios y faciales. Algunos de nuestros profesionales son miembros de la Sociedad Colombiana de Cirugía Plástica (SCCP). Cada cirujano cuenta con la certificación que acredita su especialidad y se mantiene en actualización permanente." },
                  { img: "/images/anestesiologo.png", alt: "Anestesiólogos", title: "Anestesiólogos", subtitle: "Miembros del Consejo de Anestesiología (S.C.A.R.E.)", desc: "Anestesiólogos certificados y miembros del Consejo de Anestesiología, con recertificación periódica según los estándares del C.A.M.E.C. Evaluamos cada caso de forma individual para seleccionar la técnica anestésica más segura según el procedimiento y las condiciones del paciente." },
                  { img: "/images/equipo.png", alt: "Equipo quirúrgico", title: "Equipo quirúrgico y recuperación", subtitle: "Instrumentación, circulante, enfermería y jefe de planta", desc: "Contamos con instrumentador quirúrgico, circulante de cirugía y enfermeras recuperadoras que acompañan al paciente antes, durante y después del procedimiento. Un jefe de planta coordina todo el servicio quirúrgico para garantizar la continuidad y calidad de la atención." },
                  { img: "/images/farmaco.png", alt: "Servicio farmacéutico", title: "Servicio farmacéutico", subtitle: "Farmaceuta con habilitación institucional", desc: "Nuestra farmacia habilitada cuenta con profesional farmaceuta que garantiza la gestión, dispensación y trazabilidad de medicamentos e insumos quirúrgicos bajo estándares de calidad, seguridad y oportunidad durante cada etapa de la atención." },
                ].map((item, idx) => (
                  <div key={idx} data-card-idx={idx} className="cursor-default" style={{
                    position: "absolute",
                    left: `calc(${idx * 25}% + ${idx * 6}px)`,
                    width: "calc(25% - 18px)",
                    top: 0,
                    bottom: 0,
                    transition: "left 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    opacity: 1,
                    transform: "none",
                  }}>
                    <div className="h-full rounded-3xl transition-all duration-[700] ease-out bg-white/50">
                      <div className="flex flex-col items-center justify-center h-full p-6 transition-all duration-[700] ease-out gap-4">
                        <div className="shrink-0 transition-all duration-[700] ease-out scale-100">
                          <img alt={item.alt} className="w-14 h-14 object-contain" src={item.img} />
                        </div>
                        <div className="transition-all duration-[700] ease-out opacity-100">
                          <h3 className="font-heading font-bold text-text-dark text-lg text-center mt-2">{item.title}</h3>
                          <span className="block text-primary font-body font-semibold text-sm text-center mt-1">{item.subtitle}</span>
                          <p className="text-text-main/70 font-body text-sm leading-relaxed text-center mt-3 max-w-[260px] mx-auto">{item.desc}</p>
                          <div className="flex items-center justify-center gap-1.5 mt-4">
                            <svg className="w-3.5 h-3.5 text-green-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                              <polyline points="9 12 11 14 15 10" />
                            </svg>
                            <span className="text-[11px] font-body font-semibold text-green-600">Registrado en RETHUS</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Marquee logos */}
              <div className="w-full overflow-hidden mt-16 mask-fade">
                <div className="flex items-center gap-16 md:gap-24 w-max marquee-track">
                  {[...Array(4)].flatMap((_, i) => [
                    <a key={"sccp-" + i} href="https://cirugiaplastica.org.co/" target="_blank" rel="noopener noreferrer" className="shrink-0 flex items-center justify-center h-14 md:h-16 px-6 gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300">
                      <img alt="Sociedad Colombiana de Cirugía Plástica" className="max-h-full max-w-[160px] object-contain" loading="lazy" src="https://cirugiaplastica.org.co/wp-content/uploads/2022/07/logo-sccp.png" />
                    </a>,
                    <a key={"scare-" + i} href="https://scare.org.co/" target="_blank" rel="noopener noreferrer" className="shrink-0 flex items-center justify-center h-14 md:h-16 px-6 gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300">
                      <img alt="Sociedad Colombiana de Anestesiología y Reanimación" className="max-h-full max-w-[160px] object-contain" loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoFCeO86ByR6Xp9c02HTjR8tk7oSjy-m-Qko64JVRwsA&s=10" />
                    </a>,
                    <a key={"supersalud-" + i} href="https://www.supersalud.gov.co/" target="_blank" rel="noopener noreferrer" className="shrink-0 flex items-center justify-center h-14 md:h-16 px-6 gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300">
                      <span className="font-body font-bold text-sm text-black whitespace-nowrap leading-none">Vigilado</span>
                      <img alt="Superintendencia Nacional de Salud - Vigilado" className="max-h-full max-w-[160px] object-contain" loading="lazy" src="https://www.supersalud.gov.co/Style%20Library/Images/Logo-Supersalud-2024.svg" />
                    </a>,
                  ])}
                </div>
              </div>
              <style>{`
@keyframes marquee-loop {
  from { transform: translateX(0); }
  to { transform: translateX(-25%); }
}
.marquee-track {
  animation: marquee-loop 25s linear infinite;
}
@media (min-width: 768px) {
  .marquee-track {
    animation-duration: 60s;
  }
}
              `}</style>
            </div>
          </div>
        </section>

        {/* ─── HABILITACIONES Y CREDENCIALES ──────────────────── */}
        <AnimateInView as="section" variant="fadeUp" className="bg-white py-20 md:py-28 overflow-hidden relative">
          <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-3xl bg-primary/[0.03] pointer-events-none hidden lg:block" aria-hidden="true" />
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative">
                <AnimateInView variant="fadeLeft">
                  <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
                    Habilitaciones y credenciales
                  </span>
                  <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-dark leading-tight mt-3">
                    Cumplimos con los estándares{" "}
                    <span className="text-primary">exigidos en Colombia</span>
                  </h2>
                  <p className="mt-4 text-text-main/70 font-body text-base leading-relaxed">
                    Tiffany Esthetic Group IPS es una institución prestadora de
                    servicios de salud debidamente inscrita en el Registro
                    Especial de Prestadores de Servicios de Salud (REPS) y
                    habilitada por la Secretaría de Salud según la Resolución
                    3100 de 2019 del Ministerio de Salud y Protección Social,
                    modificada por las Resoluciones 544 de 2023 y 465 de 2025.
                  </p>
                </AnimateInView>
              </div>

              <AnimateInView variant="fadeRight">
                <div className="space-y-4">
                  <div className="flex gap-4 p-5 rounded-xl bg-[#FBFBF9] border border-silver/20 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-text-dark text-sm">
                        Resolución 3100 de 2019
                      </h3>
                      <p className="text-xs text-text-main/70 font-body mt-1 leading-relaxed">
                        IPS habilitada bajo los estándares del Sistema Obligatorio
                        de Garantía de Calidad de la Atención de Salud (SOGCS),
                        con servicios de cirugía, recuperación y farmacia.
                      </p>
                    </div>
                  </div>

                  <a href="https://cirugiaplastica.org.co/" target="_blank" rel="noopener noreferrer" className="block no-underline">
                    <div className="flex gap-4 p-5 rounded-xl bg-[#FBFBF9] border border-silver/20 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 cursor-pointer">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-text-dark text-sm">
                          SCCP — Sociedad Colombiana de Cirugía Plástica
                        </h3>
                        <p className="text-xs text-text-main/70 font-body mt-1 leading-relaxed">
                          Nuestros cirujanos plásticos son miembros de número de la
                          SCCP (fundada en 1956), lo que acredita su especialidad
                          y su compromiso con la actualización científica y el
                          código de ética de la Sociedad.
                        </p>
                      </div>
                    </div>
                  </a>

                  <a href="https://scare.org.co/" target="_blank" rel="noopener noreferrer" className="block no-underline">
                    <div className="flex gap-4 p-5 rounded-xl bg-[#FBFBF9] border border-silver/20 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 cursor-pointer">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                          <line x1="8" y1="21" x2="16" y2="21" />
                          <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-text-dark text-sm">
                          S.C.A.R.E. — Consejo de Anestesiología
                        </h3>
                        <p className="text-xs text-text-main/70 font-body mt-1 leading-relaxed">
                          Anestesiólogos miembros de la Sociedad Colombiana de
                          Anestesiología y Reanimación, con recertificación
                          periódica según los estándares del C.A.M.E.C. (Consejo
                          Colombiano de Acreditación y Recertificación Médica).
                        </p>
                      </div>
                    </div>
                  </a>

                  <div className="flex gap-4 p-5 rounded-xl bg-[#FBFBF9] border border-silver/20 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M10.5 4.5l3-1.5 3 1.5" />
                        <path d="M13.5 3v6" />
                        <path d="M16.5 9H7.5a3 3 0 00-3 3v7a2 2 0 002 2h12a2 2 0 002-2v-7a3 3 0 00-3-3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-text-dark text-sm">
                        Farmacia habilitada · Registro INVIMA
                      </h3>
                      <p className="text-xs text-text-main/70 font-body mt-1 leading-relaxed">
                        Servicio de farmacia habilitado por la Secretaría de
                        Salud, con medicamentos e insumos que cuentan con
                        registro INVIMA, control de temperatura, cadena de frío
                        y trazabilidad completa.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateInView>
            </div>
          </Container>
        </AnimateInView>

        {/* ─── VALORES ────────────────────────────────────────── */}
        <AnimateInView as="section" variant="fadeUp" className="bg-[#FBFBF9] py-20 md:py-28 overflow-hidden">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <AnimateInView variant="fadeLeft">
                <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
                  Nuestra filosofía
                </span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-dark leading-tight mt-3">
                  Más que un equipo médico,{" "}
                  <span className="text-primary">un compromiso</span>
                </h2>
                <p className="mt-4 text-text-main/70 font-body text-base leading-relaxed">
                  En Tiffany Esthetic Group creemos que la excelencia médica
                  va de la mano del compromiso con la seguridad del paciente.
                  Por eso cada profesional que te atiende comparte los mismos
                  valores: idoneidad, transparencia y calidad humana.
                </p>
                <div className="mt-8 p-5 bg-primary/5 rounded-xl border border-primary/10">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                    <p className="text-sm font-body text-primary-dark font-semibold">
                      ¿Quieres conocer más sobre nuestro equipo y servicios?{" "}
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                        Escríbenos al WhatsApp
                      </a>
                    </p>
                  </div>
                </div>
              </AnimateInView>

              <AnimateInView variant="fadeRight">
                <StaggerGrid className="space-y-4" staggerDelay={0.08}>
                  {values.map((v) => (
                    <StaggerItem key={v.title}>
                      <div className="flex gap-4 p-5 rounded-xl bg-white border border-silver/20 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          {v.icon}
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-text-dark text-sm">
                            {v.title}
                          </h3>
                          <p className="text-xs text-text-main/70 font-body leading-relaxed mt-1">
                            {v.desc}
                          </p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGrid>
              </AnimateInView>
            </div>
          </Container>
        </AnimateInView>

        {/* ─── CTA ────────────────────────────────────────────── */}
        <AnimateInView as="section" variant="fadeUp" className="relative bg-gradient-to-br from-[#0F4A44] via-[#1B6E66] to-[#2FA79C] py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          <div className="absolute top-0 left-0 w-full h-full opacity-10"
            style={{
              backgroundImage: "radial-gradient(ellipse 100% 80% at 30% 50%, rgba(255,255,255,0.15) 0%, transparent 70%)",
            }} aria-hidden="true" />
          <Container>
            <div className="relative text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 mb-6 bg-white/10 border border-white/20 rounded-full px-5 py-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-white/80 font-body text-xs font-semibold tracking-wider uppercase">
                  Comienza tu proceso hoy
                </span>
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-white leading-tight">
                Agenda tu valoración{" "}
                <span className="text-accent-light">médica presencial</span>
              </h2>
              <p className="mt-5 text-white/75 font-body text-lg max-w-2xl mx-auto leading-relaxed">
                Da el primer paso: una consulta con nuestro equipo para evaluar
                tu caso, resolver tus dudas y conocer las instalaciones donde
                se realizará tu procedimiento.
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
              </div>
              <p className="mt-8 text-xs text-white/50 font-body max-w-lg mx-auto">
                Tiffany Esthetic Group IPS — Institución Prestadora de
                Servicios de Salud habilitada ante la Secretaría de Salud
                según Resolución 3100 de 2019.
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
            Protección Social, modificada por la Resolución 544 de 2023). La
            información contenida en este sitio web es estrictamente educativa
            y no sustituye una consulta médica formal.
          </p>
        </Container>
      </footer>
      </ScrollExpandMedia>
    </>
  );
}
