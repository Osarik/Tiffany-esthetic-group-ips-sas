import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import AnimateInView, { StaggerGrid, StaggerItem } from "@/components/ui/AnimateInView";
import { faqs } from "@/data/faqs";

const whatsappUrl =
  "https://wa.me/573202703522?text=Hola%2C%20tengo%20una%20consulta%20sobre%20los%20procedimientos%20de%20Tiffany%20Esthetic%20Group.";

const categories = [
  {
    name: "Procedimientos",
    href: "/servicios",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-full h-full">
        <circle cx="24" cy="24" r="20" />
        <path d="M24 12v24" />
        <path d="M12 24h24" />
        <path d="M18 18l6 6 6-6" />
        <path d="M18 30l6-6 6 6" />
      </svg>
    ),
    desc: "Lipoescultura, liposucción, pexia mamaria, rinoplastia, blefaroplastia, lifting facial y más.",
  },
  {
    name: "Habilitación",
    href: "/equipo",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-full h-full">
        <path d="M24 44s16-8 16-20V10l-16-6-16 6v14c0 12 16 20 16 20z" />
        <path d="M20 28l4 4 8-8" />
      </svg>
    ),
    desc: "IPS habilitada por la Secretaría de Salud. Conoce nuestras credenciales y estándares de calidad.",
  },
  {
    name: "Proceso quirúrgico",
    href: "#faq-lista",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-full h-full">
        <rect x="6" y="6" width="36" height="36" rx="4" />
        <path d="M6 16h36" />
        <path d="M16 6v8" />
        <path d="M32 6v8" />
        <circle cx="16" cy="28" r="2" />
        <circle cx="24" cy="28" r="2" />
        <circle cx="32" cy="28" r="2" />
      </svg>
    ),
    desc: "Valoración médica, exámenes preoperatorios, cirugía, recuperación y seguimiento postoperatorio.",
  },
  {
    name: "Valoración médica",
    href: "https://wa.me/573202703522?text=Hola%2C%20quiero%20agendar%20una%20valoraci%C3%B3n%20m%C3%A9dica%20en%20Tiffany%20Esthetic%20Group.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-full h-full">
        <path d="M42 8H6a2 2 0 00-2 2v28a2 2 0 002 2h36a2 2 0 002-2V10a2 2 0 00-2-2z" />
        <path d="M32 12v8h8" />
        <path d="M28 28l-8-8-8 8" />
        <path d="M20 20v16" />
      </svg>
    ),
    desc: "Agenda tu consulta presencial con nuestros especialistas para evaluar tu caso.",
  },
  {
    name: "Instalaciones",
    href: "/instalaciones",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-full h-full">
        <rect x="8" y="6" width="32" height="36" rx="3" />
        <path d="M8 18h32" />
        <path d="M20 34h8" />
        <path d="M20 28h8" />
        <path d="M20 22h8" />
      </svg>
    ),
    desc: "Tres quirófanos, área de recuperación, farmacia habilitada y consultorios en Cali.",
  },
  {
    name: "Cuidados postoperatorios",
    href: "#faq-lista",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-full h-full">
        <path d="M24 6C14.06 6 6 14.06 6 24s8.06 18 18 18 18-8.06 18-18S33.94 6 24 6z" />
        <path d="M24 14v10l6 6" />
        <path d="M14 24h20" />
      </svg>
    ),
    desc: "Recomendaciones para tu recuperación, cuidados de heridas, medicación y controles.",
  },
  {
    name: "Nuestro equipo",
    href: "/equipo",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-full h-full">
        <circle cx="18" cy="16" r="5" />
        <circle cx="30" cy="16" r="5" />
        <path d="M6 40c0-8 5.373-12 12-12" />
        <path d="M42 40c0-8-5.373-12-12-12" />
        <path d="M18 28h12" />
        <path d="M24 28v12" />
      </svg>
    ),
    desc: "Cirujanos SCCP, anestesiólogos certificados, instrumentación y enfermería recuperadora.",
  },
  {
    name: "Precios y formas de pago",
    href: "https://wa.me/573202703522?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20precios%20y%20formas%20de%20pago%20en%20Tiffany%20Esthetic%20Group.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-full h-full">
        <rect x="6" y="10" width="36" height="28" rx="3" />
        <line x1="6" y1="18" x2="42" y2="18" />
        <circle cx="16" cy="26" r="2" />
        <circle cx="24" cy="26" r="2" />
        <circle cx="32" cy="26" r="2" />
      </svg>
    ),
    desc: "Consulta precios, opciones de financiación y métodos de pago disponibles en nuestra IPS.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.tiffanyesthetic.com/preguntas-frecuentes#webpage",
      url: "https://www.tiffanyesthetic.com/preguntas-frecuentes",
      name: "Preguntas Frecuentes | Tiffany Esthetic Group IPS SAS",
      description:
        "Resuelve tus dudas sobre procedimientos de cirugía plástica, habilitación de la IPS, proceso quirúrgico y cómo agendar tu valoración médica en Cali.",
      inLanguage: "es",
      medicalAudience: "Patient",
      mainEntity: {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Preguntas Frecuentes | Cirugía Plástica en Cali | Tiffany Esthetic Group IPS SAS",
  description:
    "Resuelve todas tus dudas sobre procedimientos quirúrgicos estéticos, habilitación de la IPS, proceso de valoración, recuperación y cómo agendar tu cita en Cali.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/preguntas-frecuentes" },
  openGraph: {
    title: "Preguntas Frecuentes | Tiffany Esthetic Group IPS",
    description:
      "Todo lo que necesitas saber sobre cirugía plástica estética en Cali: procedimientos, seguridad, proceso quirúrgico y contacto.",
    locale: "es_CO",
    type: "website",
  },
};

export default function FAQsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        {/* ─── HERO ─────────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-[#0F4A44] via-[#1B6E66] to-[#2FA79C] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
            {Array.from({ length: 20 }, (_, i) => {
              const size = ['text-lg', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl'][i % 5];
              const left = `${(i * 5.2 + 2) % 100}%`;
              const duration = `${12 + (i % 8) * 2}s`;
              const delay = `${(i * 1.3) % 12}s`;
              const opacity = 0.06 + (i % 4) * 0.02;
              return (
                <span
                  key={i}
                  className={`absolute font-heading font-bold text-white ${size}`}
                  style={{
                    left,
                    top: -(10 + (i * 7) % 40),
                    opacity,
                    animation: `question-rain ${duration} linear ${delay} infinite`,
                  }}
                >
                  ?
                </span>
              );
            })}
          </div>
          <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            }} aria-hidden="true" />
          <Container>
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-3 relative z-10">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-white/70 font-body font-semibold text-xs tracking-[0.2em] uppercase">
                    Resuelve tus dudas
                  </span>
                </div>
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1]">
                  Preguntas{" "}
                  <span className="text-accent-light">frecuentes</span>
                </h1>
                <p className="mt-6 text-base md:text-lg text-white/75 font-body leading-relaxed max-w-xl">
                  Todo lo que necesitas saber sobre nuestros procedimientos
                  quirúrgicos, la habilitación de la IPS, el proceso de
                  atención y cómo agendar tu valoración médica en Cali.
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
                    Preguntar por WhatsApp
                  </a>
                  <a
                    href="#faq-lista"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-body font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all duration-300 text-base no-underline"
                  >
                    Ver preguntas
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right: floating question bubbles */}
              <div className="lg:col-span-2 relative hidden lg:flex items-center justify-center h-[420px]">
                <div className="relative w-full h-full">
                  {/* Large decorative "?" */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-[2rem] bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center animate-[float_8s_ease-in-out_infinite] shadow-2xl">
                    <span className="font-heading font-bold text-7xl text-white/80">?</span>
                  </div>
                  {/* Floating bubbles */}
                  <div className="absolute top-8 right-8 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm animate-[float_6s_ease-in-out_infinite_reverse] shadow-lg">
                    <span className="font-body text-sm text-white/80 font-semibold">Procedimientos</span>
                  </div>
                  <div className="absolute bottom-12 left-4 px-5 py-2.5 rounded-full bg-accent/15 border border-accent/20 backdrop-blur-sm animate-[float_7s_ease-in-out_infinite] shadow-lg">
                    <span className="font-body text-sm text-white/80 font-semibold">Habilitación</span>
                  </div>
                  <div className="absolute bottom-24 right-6 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm animate-[float_9s_ease-in-out_infinite] shadow-lg">
                    <span className="font-body text-sm text-white/80 font-semibold">Proceso</span>
                  </div>
                  <div className="absolute top-20 left-6 px-5 py-2.5 rounded-full bg-accent/15 border border-accent/20 backdrop-blur-sm animate-[float_10s_ease-in-out_infinite_reverse] shadow-lg">
                    <span className="font-body text-sm text-white/80 font-semibold">Contacto</span>
                  </div>
                  {/* Small decorative dots */}
                  <div className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-white/20 animate-[float_5s_ease-in-out_infinite]" />
                  <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-white/20 animate-[float_7s_ease-in-out_infinite_reverse]" />
                  <div className="absolute top-1/2 right-1/3 w-4 h-4 rounded-full bg-accent/20 animate-[float_6s_ease-in-out_infinite]" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ─── EXPLORA POR TEMA ─────────────────────────────────── */}
        <section className="bg-white py-16 md:py-24">
          <Container>
            <AnimateInView variant="fadeUp">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-dark leading-tight">
                  Explora por{" "}
                  <span className="text-primary">tema</span>
                </h2>
                <p className="mt-3 text-text-main/70 font-body text-base max-w-xl mx-auto">
                  Encuentra respuestas rápidas seleccionando el tema de tu interés.
                </p>
              </div>
            </AnimateInView>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-silver/20 rounded-2xl overflow-hidden shadow-sm">
              {categories.map((cat, i) => (
                <a
                  key={cat.name}
                  href={cat.href}
                  target={cat.href?.startsWith("http") ? "_blank" : undefined}
                  rel={cat.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group bg-white p-8 md:p-10 flex flex-col items-center text-center hover:bg-primary/[0.02] transition-all duration-300 no-underline"
                >
                  <div className="w-16 h-16 mb-5 text-primary/80 group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                    {cat.icon}
                  </div>
                  <h3 className="font-heading font-bold text-text-dark text-sm md:text-base group-hover:text-primary transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-xs text-text-main/60 font-body leading-relaxed max-w-[220px]">
                    {cat.desc}
                  </p>
                </a>
              ))}
            </div>
          </Container>
        </section>

        {/* ─── FAQ ────────────────────────────────────────────── */}
        <AnimateInView as="section" id="faq-lista" variant="fadeUp" className="bg-[#FBFBF9] py-20 md:py-28 relative overflow-hidden">
          <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-3xl bg-primary/[0.03] pointer-events-none hidden lg:block" aria-hidden="true" />
          <Container>
            <div className="max-w-3xl mx-auto relative z-10">
              <AnimateInView variant="fadeUp">
                <div className="text-center mb-12">
                  <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-dark leading-tight">
                    Todas las{" "}
                    <span className="text-primary">preguntas</span>
                  </h2>
                  <p className="mt-3 text-text-main/70 font-body text-base">
                    Información clara y transparente sobre nuestros servicios
                    quirúrgicos.
                  </p>
                </div>
              </AnimateInView>

              <div itemScope itemType="https://schema.org/FAQPage">
                <StaggerGrid className="space-y-3" staggerDelay={0.06}>
                  {faqs.map((faq, i) => (
                    <StaggerItem key={faq.question}>
                      <details
                        className="group rounded-2xl border border-silver/20 bg-white transition-all duration-300 open:border-primary/30 open:bg-primary/[0.02] hover:shadow-sm"
                        itemScope
                        itemProp="mainEntity"
                        itemType="https://schema.org/Question"
                      >
                        <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-body font-semibold text-text-dark text-sm md:text-base">
                          <span itemProp="name">{faq.question}</span>
                          <svg
                            className="w-4 h-4 text-primary shrink-0 transition-transform duration-300 group-open:rotate-180"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </summary>
                        <div
                          className="px-6 pb-5 text-sm text-text-main/75 font-body leading-relaxed border-t border-silver/10 pt-4"
                          itemScope
                          itemProp="acceptedAnswer"
                          itemType="https://schema.org/Answer"
                        >
                          <div itemProp="text">{faq.answer}</div>
                        </div>
                      </details>
                    </StaggerItem>
                  ))}
                </StaggerGrid>
              </div>

              <AnimateInView variant="fadeUp" className="mt-10 p-6 bg-primary/5 rounded-2xl border border-primary/10 text-center">
                <p className="text-sm font-body text-primary-dark font-semibold">
                  ¿No encuentras lo que buscas?{" "}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:no-underline font-bold"
                  >
                    Escríbenos al WhatsApp
                  </a>
                  , nuestro equipo resolverá todas tus dudas.
                </p>
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
              backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 50%)",
            }} aria-hidden="true" />
          <Container>
            <div className="relative text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 mb-6 bg-white/10 border border-white/20 rounded-full px-5 py-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-white/80 font-body text-xs font-semibold tracking-wider uppercase">
                  ¿Listo para el siguiente paso?
                </span>
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-white leading-tight">
                Agenda tu valoración{" "}
                <span className="text-accent-light">presencial</span>
              </h2>
              <p className="mt-5 text-white/75 font-body text-lg max-w-2xl mx-auto leading-relaxed">
                Una consulta con nuestros especialistas es el primer paso para
                resolver todas tus preguntas y encontrar el procedimiento
                ideal para ti.
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
            Protección Social). La información contenida en este sitio web es
            estrictamente educativa y no sustituye una consulta médica formal.
          </p>
        </Container>
      </footer>

    </>
  );
}
