import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import AnimateInView, { StaggerGrid, StaggerItem } from "@/components/ui/AnimateInView";
import WhatsAppButton from "@/components/WhatsAppButton";
import { team } from "@/data/team";

const whatsappUrl =
  "https://wa.me/573XXXXXXXXX?text=Hola%2C%20quiero%20agendar%20una%20valoraci%C3%B3n%20m%C3%A9dica%20en%20Tiffany%20Esthetic%20Group.";

const values = [
  {
    title: "Seguridad ante todo",
    desc: "Cada procedimiento se realiza bajo estrictos protocolos de bioseguridad en instalaciones habilitadas por la Secretaría de Salud.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Calidad humana",
    desc: "Más que un equipo médico, somos personas comprometidas con tu bienestar. Te acompañamos en cada etapa del proceso quirúrgico.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Excelencia técnica",
    desc: "Cirujanos plásticos miembros de la SCCP y anestesiólogos certificados por el Consejo de Anestesiología de Colombia.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Acompañamiento integral",
    desc: "Desde la valoración inicial hasta el postoperatorio, un mismo equipo te guía con controles programados y cuidados personalizados.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "3", label: "Cirujanos plásticos disponibles" },
  { value: "2+", label: "Anestesiólogos certificados" },
  { value: "6+", label: "Profesionales de enfermería" },
  { value: "15+", label: "Años de experiencia combinada" },
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
        "Conoce a los cirujanos plásticos, anestesiólogos y personal de enfermería de Tiffany Esthetic Group IPS en Cali. Profesionales calificados para tu cirugía estética.",
      inLanguage: "es",
      medicalAudience: "Patient",
    },
    {
      "@type": "MedicalClinic",
      name: "Tiffany Esthetic Group IPS",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Cra. 35 #5A-57, Barrio Granada",
        addressLocality: "Cali",
        addressRegion: "Valle del Cauca",
        addressCountry: "CO",
      },
      medicalSpecialty: "PlasticSurgery",
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Equipo Médico Profesional | Cirujanos y Especialistas | Tiffany Esthetic Group IPS SAS",
  description:
    "Conoce a los cirujanos plásticos, anestesiólogos y personal quirúrgico de Tiffany Esthetic Group IPS en Cali. Equipo calificado para cirugía estética y reconstructiva.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/equipo" },
  openGraph: {
    title: "Equipo Médico Profesional | Tiffany Esthetic Group IPS",
    description:
      "Cirujanos plásticos miembros de la SCCP, anestesiólogos certificados y personal de enfermería especializado en Cali.",
    locale: "es_CO",
    type: "website",
  },
};

export default function EquipoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        {/* ─── HERO ─────────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-[#0F4A44] via-[#1B6E66] to-[#2FA79C] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.12) 0%, transparent 50%)",
            }} aria-hidden="true" />
          <Container>
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <div className="flex items-center justify-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-white/70 font-body font-semibold text-xs tracking-[0.2em] uppercase">
                  Profesionales de la salud
                </span>
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] text-balance">
                Nuestro equipo{" "}
                <span className="text-accent-light">médico</span>
              </h1>
              <p className="mt-6 text-base md:text-lg text-white/75 font-body leading-relaxed max-w-2xl mx-auto">
                Cirujanos plásticos, anestesiólogos, instrumentación y
                enfermería recuperadora trabajamos en equipo para brindarte
                una atención segura, profesional y humana en cada etapa
                de tu procedimiento.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
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
                  href="#equipo-lista"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-body font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all duration-300 text-base no-underline"
                >
                  Conocer al equipo
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </a>
              </div>
            </div>
          </Container>
        </section>

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

        {/* ─── EQUIPO ─────────────────────────────────────────── */}
        <section id="equipo-lista" className="bg-white py-20 md:py-28">
          <Container>
            <AnimateInView variant="fadeUp">
              <div className="text-center mb-16">
                <span className="inline-block text-primary font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4 border border-primary/20 rounded-full px-4 py-1.5">
                  Quiénes somos
                </span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-text-dark leading-tight">
                  Profesionales al servicio de{" "}
                  <span className="text-primary">tu seguridad</span>
                </h2>
                <p className="mt-4 text-text-main/70 font-body text-base max-w-2xl mx-auto">
                  Cada miembro de nuestro equipo está altamente calificado y
                  comprometido con los más altos estándares de atención
                  quirúrgica.
                </p>
              </div>
            </AnimateInView>

            <StaggerGrid className="grid md:grid-cols-3 gap-8 lg:gap-10" staggerDelay={0.12}>
              {team.map((member, i) => (
                <StaggerItem key={member.name}>
                  <div className="group bg-white rounded-2xl overflow-hidden border border-silver/20 shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="relative h-64 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-28 h-28 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <svg className="w-14 h-14 text-primary/60" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="p-6 md:p-7 text-center">
                      <h3 className="font-heading font-bold text-text-dark text-xl">
                        {member.name}
                      </h3>
                      <span className="text-sm font-body font-semibold text-primary block mt-1.5">
                        {member.title}
                      </span>
                      <div className="w-12 h-0.5 bg-primary/20 mx-auto my-4 rounded-full" />
                      <p className="text-sm text-text-main/70 font-body leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </Container>
        </section>

        {/* ─── VALORES ────────────────────────────────────────── */}
        <AnimateInView as="section" variant="fadeUp" className="bg-[#FBFBF9] py-20 md:py-28 overflow-hidden">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative">
                <AnimateInView variant="fadeLeft">
                  <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
                    Nuestra filosofía
                  </span>
                  <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-dark leading-tight mt-3">
                    Más que un equipo médico,{" "}
                    <span className="text-primary">una familia</span>
                  </h2>
                  <p className="mt-4 text-text-main/70 font-body text-base leading-relaxed">
                    En Tiffany Esthetic Group creemos que la excelencia médica
                    va de la mano del trato humano. Por eso cada profesional
                    que te atiende comparte los mismos valores: seguridad,
                    transparencia y compromiso con tu bienestar.
                  </p>
                  <div className="mt-8 p-5 bg-primary/5 rounded-xl border border-primary/10">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                      </svg>
                      <p className="text-sm font-body text-primary-dark font-semibold">
                        ¿Quieres conocer más sobre nuestros profesionales?{" "}
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
          Escríbenos al WhatsApp
        </a>
                      </p>
                    </div>
                  </div>
                </AnimateInView>
              </div>

              <AnimateInView variant="fadeRight">
                <StaggerGrid className="space-y-4" staggerDelay={0.08}>
                  {values.map((v) => (
                    <StaggerItem key={v.title}>
                      <div className="flex gap-4 p-5 rounded-xl bg-white border border-silver/20 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          {v.icon}
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-text-dark text-base">
                            {v.title}
                          </h3>
                          <p className="text-sm text-text-main/70 font-body leading-relaxed mt-1">
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
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.15) 0%, transparent 50%)",
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
                Tu cirugía con{" "}
                <span className="text-accent-light">profesionales</span>
              </h2>
              <p className="mt-5 text-white/75 font-body text-lg max-w-2xl mx-auto leading-relaxed">
                Da el primer paso: agenda tu valoración médica presencial y
                conoce al equipo que estará a tu lado durante todo el proceso
                quirúrgico.
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
            </div>
          </Container>
        </AnimateInView>
      </article>

      <footer className="bg-[#223231] text-white/60 py-8">
        <Container>
          <p className="text-xs leading-relaxed text-center font-body">
            Tiffany Esthetic Group IPS es una institución prestadora de servicios
            de salud registrada y habilitada ante las autoridades sanitarias de
            Colombia. La información contenida en este sitio web es estrictamente
            educativa y no sustituye una consulta médica formal.
          </p>
        </Container>
      </footer>

      <WhatsAppButton />
    </>
  );
}
