import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ImageMouseTrail3 from "@/components/ui/image-mousetrail-without-component";
import ResultadosGrid from "@/components/ui/resultados-grid";
import { HeroTextContainer, HeroTextChild } from "@/components/ui/hero-text-animated";

const whatsappUrl =
  "https://wa.me/573202703522?text=Hola%2C%20quiero%20conocer%20resultados%20de%20procedimientos%20en%20Tiffany%20Esthetic%20Group.";

const procedures = [
  { name: "Lipoescultura + Lipoinyección Glútea", slug: "lipoescultura-lipoinyeccion-glutea-cali", desc: "Contorno corporal y aumento glúteo con grasa autóloga." },
  { name: "Liposucción + Aumento Mamario", slug: "liposuccion-aumento", desc: "Liposucción simultánea con aumento de senos." },
  { name: "Liposucción + Lipectomía", slug: "liposuccion-lipectomia", desc: "Liposucción con resección de piel abdominal." },
  { name: "Liposucción + Pexia Mamaria", slug: "liposuccion-pexia-mamaria", desc: "Liposucción y levantamiento de senos combinados." },
  { name: "Pexia Mamaria", slug: "pexia-mamaria", desc: "Levantamiento de senos sin implantes." },
  { name: "Rinoplastia", slug: "rinoplastia", desc: "Cirugía estética y funcional de nariz." },
  { name: "Blefaroplastia", slug: "blefaroplastia", desc: "Cirugía de párpados superiores e inferiores." },
  { name: "Lifting Facial", slug: "lifting-facial", desc: "Rejuvenecimiento facial quirúrgico." },
];

const faqs = [
  {
    q: "¿Los resultados varían de un paciente a otro?",
    a: "Sí. Cada paciente tiene condiciones anatómicas, fisiológicas y de salud únicas. Los resultados publicados corresponden a pacientes reales con su autorización expresa, pero no garantizan resultados idénticos. Durante tu valoración presencial, el cirujano te explicará los resultados esperables según tu caso específico.",
  },
  {
    q: "¿Cuánto tiempo tarda en verse el resultado final?",
    a: "El resultado inicial es visible al retirar vendajes y drenajes (1-2 semanas), pero el resultado final puede tardar entre 3 y 12 meses, dependiendo del procedimiento. La inflamación residual disminuye progresivamente y las cicatrices maduran durante el primer año.",
  },
  {
    q: "¿Las imágenes de antes y después son de pacientes reales?",
    a: "Todas las imágenes publicadas corresponden a pacientes reales de Tiffany Esthetic Group IPS que han autorizado expresamente su divulgación mediante consentimiento informado, cumpliendo con la Ley 1581 de 2012 de protección de datos personales y datos sensibles en salud.",
  },
  {
    q: "¿Puedo ver resultados de pacientes con mi mismo tipo de cuerpo?",
    a: "Durante tu valoración presencial, el cirujano puede mostrarte casos de pacientes con características similares a las tuyas, respetando siempre la confidencialidad y el consentimiento de cada paciente.",
  },
];

const stats = [
  { value: "8", label: "Procedimientos quirúrgicos" },
  { value: "3", label: "Salas de cirugía habilitadas" },
  { value: "1", label: "Farmacia habilitada" },
  { value: "100%", label: "Compromiso de confidencialidad" },
];

export const metadata: Metadata = {
  title:
    "Resultados Reales | Antes y Después | Tiffany Esthetic Group IPS",
  description:
    "Galería de resultados quirúrgicos reales de pacientes de Tiffany Esthetic Group IPS en Cali. Procedimientos de cirugía plástica realizados por cirujanos miembros de la SCCP.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/resultados" },
  openGraph: {
    title: "Resultados Reales | Tiffany Esthetic Group IPS",
    description:
      "Conoce resultados reales de cirugía plástica en Cali. Procedimientos realizados por cirujanos miembros de la SCCP en instalaciones habilitadas por la Secretaría de Salud.",
    locale: "es_CO",
    type: "website",
  },
};

export default function ResultadosPage() {
  const resultadosSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://www.tiffanyesthetic.com/resultados/#webpage",
        url: "https://www.tiffanyesthetic.com/resultados",
        name: "Resultados Reales de Cirugía Plástica | Tiffany Esthetic Group IPS",
        description:
          "Galería de resultados quirúrgicos reales en Cali, Colombia. Antes y después de lipoescultura, rinoplastia, blefaroplastia, abdominoplastia y más procedimientos estéticos.",
        about: { "@id": "https://www.tiffanyesthetic.com/#business" },
        mainContentOfPage: { "@type": "ImageGallery", about: { "@id": "https://www.tiffanyesthetic.com/#business" } },
      },
      {
        "@type": "ImageGallery",
        "@id": "https://www.tiffanyesthetic.com/resultados/#gallery",
        url: "https://www.tiffanyesthetic.com/resultados",
        about: { "@id": "https://www.tiffanyesthetic.com/#business" },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(resultadosSchema) }} />
      <article>
        {/* ─── HERO ─────────────────────────────────────────────── */}
        <section className="relative h-[70vh] md:h-[80vh] min-h-[500px] md:min-h-[600px] overflow-hidden">
          <img
            src="/images/Combine_with_logo_202607111802.jpeg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none z-[1]" />
          <ImageMouseTrail3 background />
          <div className="absolute inset-0 flex items-center pointer-events-none z-40">
            <Container>
              <div className="max-w-3xl">
                <HeroTextContainer>
                  <HeroTextChild>
                    <div className="flex items-center gap-2 mb-5">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <span className="text-white/70 font-body font-semibold text-xs tracking-[0.2em] uppercase mix-blend-difference">
                        Resultados reales · Pacientes reales
                      </span>
                    </div>
                  </HeroTextChild>
                  <HeroTextChild>
                    <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mix-blend-difference">
                      Resultados que{" "}
                      <span className="text-white">hablan por sí solos</span>
                    </h1>
                  </HeroTextChild>
                  <HeroTextChild>
                    <p className="mt-6 text-base md:text-lg text-white font-body leading-relaxed max-w-xl mix-blend-difference">
                    Cada procedimiento en Tiffany Esthetic Group es realizado por
                    cirujanos plásticos miembros de la SCCP en instalaciones
                    habilitadas por la Secretaría de Salud. Explora resultados
                    reales de nuestros pacientes.
                  </p>
                  </HeroTextChild>
                  <HeroTextChild>
                    <div className="mt-8 flex flex-col sm:flex-row gap-3 pointer-events-auto">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#0F4A44] font-body font-bold px-8 py-3.5 rounded-full hover:bg-white/90 hover:shadow-xl hover:shadow-black/25 transition-all duration-300 text-base shadow-lg shadow-black/20 no-underline"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Solicitar información
                </a>
                <a
                  href="#procedimientos"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/80 text-white font-body font-semibold px-8 py-3.5 rounded-full hover:bg-white/15 hover:border-white transition-all duration-300 text-base no-underline"
                >
                  Ver procedimientos
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </a>
              </div>
            </HeroTextChild>
            </HeroTextContainer>
          </div>
          </Container>
          </div>
        </section>

        {/* ─── STATS ──────────────────────────────────────────── */}
        <section className="bg-primary-deep py-14 md:py-18">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <span className="block text-4xl md:text-5xl font-heading font-bold text-white mb-1">
                    {stat.value}
                  </span>
                  <span className="w-8 h-0.5 bg-accent block mx-auto mb-3 rounded-full" />
                  <p className="text-white/65 font-body text-sm leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ─── RESULTADOS POR PROCEDIMIENTO ────────────────────── */}
        <section id="procedimientos" className="bg-[#FBFBF9] py-20 md:py-28">
          <Container>
            <div className="text-center mb-14">
              <span className="inline-block text-primary font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4 border border-primary/20 rounded-full px-4 py-1.5">
                Procedimientos
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-dark leading-tight">
                Nuestros{" "}
                <span className="text-primary">procedimientos</span>
              </h2>
              <p className="mt-3 text-text-main/70 font-body text-base max-w-xl mx-auto">
                Explora los resultados de cada tipo de cirugía plástica que
                realizamos en nuestra IPS habilitada en Cali. Haz clic en
                cada imagen para ver la galería.
              </p>
            </div>
            <ResultadosGrid procedures={procedures} />
          </Container>
        </section>

        {/* ─── INFORMACIÓN MÉDICA ─────────────────────────────── */}
        <section className="bg-white py-20 md:py-28">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
                  Transparencia quirúrgica
                </span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-dark leading-tight mt-3">
                  Lo que debes saber sobre{" "}
                  <span className="text-primary">los resultados</span>
                </h2>
                <div className="mt-6 space-y-4">
                  <div className="flex gap-4 p-5 rounded-xl bg-[#FBFBF9] border border-silver/20">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-text-dark text-sm">
                        Resultados individuales
                      </h3>
                      <p className="text-xs text-text-main/70 font-body mt-1 leading-relaxed">
                        Cada paciente es único. Los resultados dependen de
                        factores anatómicos, fisiológicos y del cumplimiento
                        de las recomendaciones postoperatorias.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 rounded-xl bg-[#FBFBF9] border border-silver/20">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-text-dark text-sm">
                        Consentimiento informado
                      </h3>
                      <p className="text-xs text-text-main/70 font-body mt-1 leading-relaxed">
                        Todas las imágenes se publican con autorización
                        expresa de los pacientes, cumpliendo la Ley 1581 de
                        2012 de protección de datos sensibles en salud.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 rounded-xl bg-[#FBFBF9] border border-silver/20">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-text-dark text-sm">
                        Instalaciones habilitadas
                      </h3>
                      <p className="text-xs text-text-main/70 font-body mt-1 leading-relaxed">
                        Todos los procedimientos se realizan en quirófanos
                        habilitados por la Secretaría de Salud, con cirujanos
                        miembros de la SCCP y anestesiólogos certificados.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80&auto=format&fit=crop"
                  alt="Instalaciones quirúrgicas de Tiffany Esthetic Group IPS"
                  className="w-full rounded-2xl shadow-lg"
                  loading="lazy"
                />
                <div className="absolute -bottom-4 -left-4 bg-primary-deep text-white p-5 rounded-2xl shadow-xl max-w-[220px]">
                  <p className="font-heading font-bold text-lg">8+</p>
                  <p className="text-xs text-white/70 font-body">
                    Procedimientos quirúrgicos realizados por nuestro equipo
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ─── CONFIANZA ───────────────────────────────────────── */}
        <section className="bg-[#FBFBF9] py-16 md:py-20">
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
                Confianza y seguridad
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-dark leading-tight mt-3">
                Tu seguridad es{" "}
                <span className="text-primary">nuestra prioridad</span>
              </h2>
              <p className="mt-4 text-text-main/70 font-body text-base leading-relaxed">
                Todos los resultados mostrados en esta galería corresponden a
                procedimientos realizados por cirujanos plásticos miembros de
                la Sociedad Colombiana de Cirugía Plástica (SCCP) en
                instalaciones debidamente habilitadas por la Secretaría de
                Salud, cumpliendo la Resolución 3100 de 2019 y normativa
                vigente.
              </p>
              <div className="mt-8 flex justify-center gap-6 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-body text-text-main/80">
                    Cirujanos SCCP
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-body text-text-main/80">
                    IPS habilitada
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-body text-text-main/80">
                    Consentimiento informado
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-body text-text-main/80">
                    Confidencialidad garantizada
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ─── FAQ ────────────────────────────────────────────── */}
        <section className="bg-white py-20 md:py-28">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-dark leading-tight">
                  Preguntas frecuentes sobre{" "}
                  <span className="text-primary">resultados</span>
                </h2>
              </div>
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <details
                    key={faq.q}
                    className="group rounded-xl border border-silver/20 bg-white transition-all duration-200 open:border-primary/30 open:bg-primary/[0.02]"
                  >
                    <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-body font-semibold text-text-dark text-sm">
                      {faq.q}
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
                    <div className="px-5 pb-4 text-sm text-text-main/70 font-body leading-relaxed border-t border-silver/10 pt-3">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ─── CTA ────────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-[#0F4A44] via-[#1B6E66] to-[#2FA79C] py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          <Container>
            <div className="relative text-center max-w-3xl mx-auto">
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-white leading-tight">
                ¿Listo para tu{" "}
                <span className="text-accent-light">transformación?</span>
              </h2>
              <p className="mt-5 text-white/75 font-body text-lg max-w-2xl mx-auto leading-relaxed">
                El primer paso es una valoración presencial con nuestros
                especialistas. Resolveremos todas tus dudas y crearemos un
                plan quirúrgico personalizado para ti.
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
                  Agendar valoración
                </a>
                <a
                  href="/servicios"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-body font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 text-base no-underline"
                >
                  Ver todos los procedimientos
                </a>
              </div>
              <p className="mt-8 text-xs text-white/50 font-body max-w-lg mx-auto">
                Tiffany Esthetic Group IPS — Institución Prestadora de
                Servicios de Salud habilitada ante las autoridades sanitarias
                de Colombia. Los resultados varían según cada paciente.
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
            Protección Social). Las imágenes de antes y después corresponden a
            pacientes reales que han autorizado su divulgación mediante
            consentimiento informado. Los resultados son individuales y no
            garantizan resultados idénticos en otros pacientes.
          </p>
        </Container>
      </footer>
    </>
  );
}
