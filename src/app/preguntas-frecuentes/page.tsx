import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import AnimateInView, { StaggerGrid, StaggerItem } from "@/components/ui/AnimateInView";
import { faqs } from "@/data/faqs";

const whatsappUrl =
  "https://wa.me/573202703522?text=Hola%2C%20tengo%20una%20consulta%20sobre%20los%20procedimientos%20de%20Tiffany%20Esthetic%20Group.";

const categories = [
  {
    name: "Procedimientos",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
    ),
    desc: "Lipoescultura, liposucción, pexia mamaria, rinoplastia, blefaroplastia, lifting facial y más.",
  },
  {
    name: "Habilitación y seguridad",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    desc: "IPS habilitada por la Secretaría de Salud con farmacia, salas de cirugía y área de recuperación.",
  },
  {
    name: "Proceso quirúrgico",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    desc: "Valoración médica, exámenes preoperatorios, cirugía, recuperación y seguimiento postoperatorio.",
  },
  {
    name: "Contacto y agenda",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    desc: "Agenda tu valoración médica presencial por WhatsApp, teléfono o visitando nuestras instalaciones en Cali.",
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
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl animate-[float_12s_ease-in-out_infinite]" />
            <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl animate-[float_15s_ease-in-out_infinite_reverse]" />
            <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] rounded-full bg-white/5 blur-3xl animate-[float_10s_ease-in-out_infinite]" />
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

        {/* ─── CATEGORÍAS ────────────────────────────────────────── */}
        <section className="bg-white py-16 md:py-20">
          <Container>
            <AnimateInView variant="fadeUp">
              <div className="text-center mb-12">
                <span className="inline-block text-primary font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4 border border-primary/20 rounded-full px-4 py-1.5">
                  Categorías
                </span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-dark leading-tight">
                  Explora por{" "}
                  <span className="text-primary">tema</span>
                </h2>
              </div>
            </AnimateInView>

            <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.08}>
              {categories.map((cat) => (
                <StaggerItem key={cat.name}>
                  <div className="group p-6 rounded-2xl bg-white border border-silver/20 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-400">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-400">
                      {cat.icon}
                    </div>
                    <h3 className="font-heading font-bold text-text-dark text-sm mb-2">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-text-main/65 font-body leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
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
