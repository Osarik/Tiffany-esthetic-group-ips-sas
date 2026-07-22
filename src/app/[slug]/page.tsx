import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { services } from "@/data/services";
import { serviceLandings } from "@/data/service-landings";
import AnimateInView, { StaggerGrid, StaggerItem } from "@/components/ui/AnimateInView";

const whatsappUrl =
  "https://wa.me/573202703522?text=Hola%2C%20quiero%20agendar%20mi%20valoraci%C3%B3n%20m%C3%A9dica%20en%20Tiffany%20Esthetic%20Group.";

function slugFromHref(href: string) {
  return href.replace(/^\//, "");
}

const categoryConfig: Record<string, { gradient: string; label: string }> = {
  "Cirugía Corporal": { gradient: "from-[#0F4A44] to-[#2FA79C]", label: "Cirugía Corporal" },
  "Cirugía Mamaria": { gradient: "from-[#B76E79] to-[#D48995]", label: "Cirugía Mamaria" },
  "Cirugía Facial": { gradient: "from-[#4A8DB7] to-[#6DB3D9]", label: "Cirugía Facial" },
};

const categoryDesign: Record<string, {
  sectionAltBg: string; cardBorder: string; timelineColor: string; iconBg: string; iconColor: string; patternId: string; patternPath: string;
}> = {
  "Cirugía Corporal": {
    sectionAltBg: "from-[#0F4A44]/5 via-transparent to-[#2FA79C]/5",
    cardBorder: "border-[#0F4A44]/20",
    timelineColor: "#0F4A44",
    iconBg: "bg-[#0F4A44]/10",
    iconColor: "text-[#0F4A44]",
    patternId: "corpPattern",
    patternPath: '<path d="M 20 0 L 40 20 L 20 40 L 0 20 Z" fill="none" stroke="currentColor" stroke-width="1"/>',
  },
  "Cirugía Mamaria": {
    sectionAltBg: "from-[#B76E79]/5 via-transparent to-[#D48995]/5",
    cardBorder: "border-[#B76E79]/20",
    timelineColor: "#B76E79",
    iconBg: "bg-[#B76E79]/10",
    iconColor: "text-[#B76E79]",
    patternId: "mamPattern",
    patternPath: '<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1"/>',
  },
  "Cirugía Facial": {
    sectionAltBg: "from-[#4A8DB7]/5 via-transparent to-[#6DB3D9]/5",
    cardBorder: "border-[#4A8DB7]/20",
    timelineColor: "#4A8DB7",
    iconBg: "bg-[#4A8DB7]/10",
    iconColor: "text-[#4A8DB7]",
    patternId: "facePattern",
    patternPath: '<polygon points="12,2 22,22 2,22" fill="none" stroke="currentColor" stroke-width="1"/>',
  },
};

function Section({ id, className = "", children }: { id?: string; className?: string; children: React.ReactNode }) {
  return <section id={id} className={`py-16 md:py-24 ${className}`}><Container>{children}</Container></section>;
}

function SectionHeader({ label, title, desc }: { label: string; title: string; desc?: string }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">{label}</span>
      <Heading as="h2" className="mt-3">{title}</Heading>
      {desc && <p className="mt-4 text-text-main/80 font-body max-w-3xl mx-auto leading-relaxed">{desc}</p>}
    </div>
  );
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.filter((s) => s.href).map((s) => ({ slug: slugFromHref(s.href!) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => slugFromHref(s.href ?? "") === slug);
  if (!service) return {};
  return {
    title: `${service.title} en Cali | Tiffany Esthetic Group IPS`,
    description: service.description,
    robots: { index: true, follow: true },
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title: `${service.title} en Cali`,
      description: service.description,
      url: `https://www.tiffanyesthetic.com/${slug}`,
      siteName: "Tiffany Esthetic Group IPS SAS",
      locale: "es_CO",
      type: "article",
    },
  };
}

export default async function ServiceLandingPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => slugFromHref(s.href ?? "") === slug);
  if (!service) return null;

  const landing = serviceLandings[service.id];
  if (!landing) return null;

  const cat = categoryConfig[service.category];
  const catDesign = categoryDesign[service.category] ?? categoryDesign["Cirugía Corporal"];
  const gradientFrom = cat?.gradient.split(" ")[0]?.replace("from-[", "").replace("]", "") ?? "#0F4A44";
  const gradientTo = cat?.gradient.split(" ")[1]?.replace("to-[", "").replace("]", "") ?? "#2FA79C";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `https://www.tiffanyesthetic.com/${slug}#webpage`,
        url: `https://www.tiffanyesthetic.com/${slug}`,
        name: `${service.title} en Cali`,
        description: service.description,
        inLanguage: "es",
        medicalAudience: "Patient",
        aspect: "Treatment",
      },
      {
        "@type": "MedicalClinic",
        name: "Tiffany Esthetic Group IPS",
        image: "https://www.tiffanyesthetic.com/icon.svg",
        address: { "@type": "PostalAddress", streetAddress: "13a1-25, Cra 85c, Comuna 17", addressLocality: "Cali", addressRegion: "Valle del Cauca", addressCountry: "CO" },
        telephone: "+57 320 270 3522",
        medicalSpecialty: "PlasticSurgery",
      },
      {
        "@type": "MedicalProcedure",
        name: service.title,
        procedureType: "SurgicalProcedure",
        description: service.description,
      },
    ],
  };

  const waMsg = `Hola%2C%20quiero%20agendar%20mi%20valoraci%C3%B3n%20para%20${encodeURIComponent(service.title.toLowerCase())}%20en%20Cali.`;
  const waLink = `https://wa.me/573202703522?text=${waMsg}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article>
        <section className={`relative bg-gradient-to-br from-[${gradientFrom}] via-[${gradientFrom}dd] to-[${gradientTo}] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden`}>
          {landing.heroImage && (
            <div className="absolute inset-0" aria-hidden="true">
              <img src={landing.heroImage} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${gradientFrom} 0%, ${gradientFrom}dd 25%, ${gradientFrom}99 50%, ${gradientFrom}55 70%, transparent 100%)` }} />
            </div>
          )}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <AnimateInView variant="fadeIn" delay={0.3} className="absolute inset-0">
              <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/[0.04] blur-3xl animate-[float_12s_ease-in-out_infinite]" />
            </AnimateInView>
            <AnimateInView variant="fadeIn" delay={0.5} className="absolute inset-0">
              <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-3xl animate-[float_15s_ease-in-out_infinite_reverse]" />
            </AnimateInView>
            <AnimateInView variant="fadeIn" delay={0.7}>
              <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-white/20 animate-[float_8s_ease-in-out_infinite]" />
            </AnimateInView>
            <AnimateInView variant="fadeIn" delay={0.9}>
              <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-white/15 animate-[float_11s_ease-in-out_infinite_reverse]" />
            </AnimateInView>
            <AnimateInView variant="fadeIn" delay={1.1}>
              <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 rounded-full bg-white/20 animate-[float_9s_ease-in-out_infinite]" />
            </AnimateInView>
          </div>
          <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 100% 60% at 30% 50%, ${gradientTo}22 0%, transparent 70%)` }} aria-hidden="true" />
          <Container>
            <div className="relative max-w-3xl">
              <span className="inline-block text-white/70 font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm">
                {service.category}
              </span>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight text-balance drop-shadow-sm">
                {service.title} en Cali
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/80 font-body leading-relaxed max-w-2xl drop-shadow-sm">
                {service.description}
              </p>
              {landing.duration && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {landing.duration && (
                    <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1.5 text-xs text-white/80 font-body">
                      <svg className="w-3.5 h-3.5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      {landing.duration}
                    </span>
                  )}
                  {landing.anesthesia && (
                    <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1.5 text-xs text-white/80 font-body">
                      <svg className="w-3.5 h-3.5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      {landing.anesthesia}
                    </span>
                  )}
                  {landing.hospitalization && (
                    <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1.5 text-xs text-white/80 font-body">
                      <svg className="w-3.5 h-3.5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                      {landing.hospitalization}
                    </span>
                  )}
                </div>
              )}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href={waLink} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#0F4A44] font-body font-bold px-8 py-3.5 rounded-full hover:bg-white/90 hover:shadow-xl hover:shadow-black/25 transition-all duration-300 text-base shadow-lg shadow-black/20 no-underline">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Agendar valoración médica
                </a>
                <a href="#proceso"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-body font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all duration-300 text-base no-underline">
                  Conocer el procedimiento
                </a>
              </div>
              <p className="mt-6 text-sm text-white/60 font-body">
                De acuerdo con la normativa colombiana, todo procedimiento quirúrgico requiere una valoración médica presencial.
              </p>
            </div>
          </Container>
        </section>

        <AnimateInView variant="scaleIn" duration={0.7} as="section" id="que-es" className="bg-white py-16 md:py-24 relative overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${catDesign.sectionAltBg} opacity-40`} aria-hidden="true" />
          <Container>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
              <AnimateInView variant="fadeLeft">
                <SectionHeader label="¿Qué es?" title={service.title} />
                <div className="space-y-5 text-text-main/80 font-body leading-relaxed">
                  {landing.descriptionLong.split("\n").map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </AnimateInView>
              <AnimateInView variant="fadeRight" delay={0.2}>
                <div className={`bg-gradient-to-br from-[#FBFBF9] to-white rounded-2xl p-8 border ${catDesign.cardBorder} shadow-sm hover:shadow-md transition-shadow duration-300`}>
                  <div className={`w-10 h-10 rounded-xl ${catDesign.iconBg} ${catDesign.iconColor} flex items-center justify-center mb-4`}>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-text-dark text-lg mb-4">Seguridad y marco legal</h3>
                  <p className="text-sm text-text-main/80 font-body leading-relaxed">
                    Todos los procedimientos se realizan en instalaciones habilitadas por la Secretaría de Salud,
                    con personal calificado y protocolos de bioseguridad que cumplen la Resolución 3100 de 2019 del Ministerio de Salud.
                  </p>
                  <div className={`mt-6 ${catDesign.iconBg} rounded-xl p-5 border ${catDesign.cardBorder}`}>
                    <p className="text-sm font-body font-semibold text-text-dark">
                      Todo procedimiento requiere valoración médica presencial, exámenes preoperatorios y consentimiento informado.
                    </p>
                  </div>
                </div>
              </AnimateInView>
            </div>
          </Container>
        </AnimateInView>

        <AnimateInView variant="fadeUp" as="section" id="proceso" className="bg-[#FBFBF9] py-16 md:py-24 relative overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-bl ${catDesign.sectionAltBg} opacity-30`} aria-hidden="true" />
          <Container>
            <AnimateInView variant="fadeIn">
              <SectionHeader label="Procedimiento" title={`¿Cómo es el proceso?`}
                desc="El procedimiento quirúrgico se desarrolla en etapas secuenciales, desde la valoración inicial hasta el postoperatorio." />
            </AnimateInView>
            <div className="max-w-5xl mx-auto">
              {landing.steps.map((step, i) => (
                <AnimateInView key={step.number} variant={i % 2 === 0 ? "fadeLeft" : "fadeRight"} delay={i * 0.1}>
                  <div className="flex items-start gap-5 md:gap-8">
                    <div className="hidden md:flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br text-white flex items-center justify-center font-heading font-bold text-base shadow-lg shrink-0`}
                        style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}>{step.number}</div>
                      {i < landing.steps.length - 1 && <div className="w-0.5 h-16 bg-gradient-to-b" style={{ background: `linear-gradient(to bottom, ${gradientFrom}66, transparent)` }} />}
                    </div>
                    <div className={`flex-1 bg-white rounded-2xl p-6 md:p-8 border border-silver/20 shadow-sm hover:shadow-lg transition-all duration-300`}
                      style={{ borderLeftColor: gradientFrom, borderLeftWidth: i % 2 === 0 ? "4px" : "0", borderRightColor: gradientFrom, borderRightWidth: i % 2 !== 0 ? "4px" : "0" }}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="md:hidden w-8 h-8 rounded-full text-white flex items-center justify-center font-heading font-bold text-xs shrink-0"
                          style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}>{step.number}</span>
                        <h3 className="font-heading font-bold text-text-dark text-lg">{step.title}</h3>
                      </div>
                      <p className="text-sm text-text-main/80 font-body leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </AnimateInView>
              ))}
            </div>
          </Container>
        </AnimateInView>

        {landing.benefits && landing.benefits.length > 0 && (
          <AnimateInView variant="fadeUp" as="section" id="beneficios" className="bg-white py-16 md:py-24">
            <Container>
              <AnimateInView variant="fadeIn">
                <SectionHeader label="Beneficios" title={`Beneficios de la ${service.title.toLowerCase()}`} />
              </AnimateInView>
              <div className="max-w-4xl mx-auto space-y-4">
                {landing.benefits.map((item, i) => (
                  <AnimateInView key={i} variant={i % 2 === 0 ? "fadeLeft" : "fadeRight"} delay={i * 0.08}>
                    <div className="group flex items-start gap-5 p-5 md:p-6 rounded-xl border border-silver/20 transition-all duration-300 hover:shadow-md"
                      style={{ background: i % 2 === 0 ? "white" : `${gradientFrom}04` }}>
                      <div className="w-10 h-10 rounded-xl text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300"
                        style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}>
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm md:text-base text-text-main/80 font-body leading-relaxed">{item}</p>
                      </div>
                    </div>
                  </AnimateInView>
                ))}
              </div>
            </Container>
          </AnimateInView>
        )}

        {landing.techniques && landing.techniques.length > 0 && (
          <AnimateInView variant="fadeUp" as="section" id="tecnicas" className="bg-[#FBFBF9] py-16 md:py-24">
            <Container>
              <AnimateInView variant="fadeIn">
                <SectionHeader label="Técnicas" title={landing.techniqueTitle ?? "Técnicas quirúrgicas"} />
              </AnimateInView>
              <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
                {landing.techniques.map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="bg-white rounded-2xl p-6 border border-silver/20 shadow-sm hover:shadow-md transition-all duration-300 h-full group"
                      style={{ borderLeft: `4px solid ${gradientFrom}55` }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                        style={{ background: `${gradientFrom}12`, color: gradientFrom }}>
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                          <circle cx="9" cy="10" r="1" fill="currentColor" /><circle cx="15" cy="10" r="1" fill="currentColor" />
                          <path d="M8 15c1.5 1.5 4.5 1.5 6 0" />
                        </svg>
                      </div>
                      <h3 className="font-heading font-bold text-text-dark text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-text-main/80 font-body leading-relaxed">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </Container>
          </AnimateInView>
        )}

        {landing.candidates && landing.candidates.length > 0 && (
          <AnimateInView variant="fadeUp" as="section" id="candidatos" className="bg-white py-16 md:py-24">
            <Container>
              <AnimateInView variant="fadeIn">
                <SectionHeader label="Candidatos" title="¿Quién es candidato ideal?"
                  desc="La idoneidad del paciente se determina mediante evaluación clínica presencial." />
              </AnimateInView>
              <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto" staggerDelay={0.08}>
                {landing.candidates.map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="bg-white rounded-2xl overflow-hidden border border-silver/20 shadow-sm hover:shadow-lg transition-all duration-300 h-full group relative">
                      <div className="h-2" style={{ background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})` }} />
                      <div className="p-6">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                          style={{ background: `${gradientFrom}15`, color: gradientFrom }}>
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>
                        <h3 className="font-heading font-bold text-text-dark text-base mb-2">{item.title}</h3>
                        <p className="text-sm text-text-main/80 font-body leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </Container>
          </AnimateInView>
        )}

        {landing.areas && landing.areas.length > 0 && (
          <AnimateInView variant="fadeUp" as="section" id="areas" className="bg-[#FBFBF9] py-16 md:py-24">
            <Container>
              <AnimateInView variant="fadeIn">
                <SectionHeader label="Áreas" title="Zonas del cuerpo" />
              </AnimateInView>
              <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
                {landing.areas.map((item) => (
                  <StaggerItem key={item.area}>
                    <div className="bg-white rounded-2xl p-6 border border-silver/20 hover:shadow-md transition-all duration-300 h-full group text-center"
                      style={{ borderTopColor: gradientFrom, borderTopWidth: "3px" }}>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                        style={{ background: `${gradientFrom}10`, color: gradientFrom }}>
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><line x1="21.17" y1="8" x2="12" y2="8" /><line x1="3.95" y1="6.06" x2="8.54" y2="14" /><line x1="10.88" y1="21.94" x2="15.46" y2="14" />
                        </svg>
                      </div>
                      <h3 className="font-heading font-bold text-text-dark text-lg mb-2">{item.area}</h3>
                      <p className="text-sm text-text-main/80 font-body leading-relaxed">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </Container>
          </AnimateInView>
        )}

        {landing.preparation && landing.preparation.length > 0 && (
          <AnimateInView variant="fadeUp" as="section" id="preparacion" className="bg-white py-16 md:py-24">
            <Container>
              <AnimateInView variant="fadeIn">
                <SectionHeader label="Preparación" title="Preparación preoperatoria"
                  desc="Una adecuada preparación es fundamental para el éxito del procedimiento y la seguridad del paciente." />
              </AnimateInView>
              <div className="max-w-3xl mx-auto relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400/40 via-amber-400/20 to-transparent hidden md:block" aria-hidden="true" />
                <div className="space-y-8">
                  {landing.preparation.map((item, i) => (
                    <AnimateInView key={i} variant="fadeLeft" delay={i * 0.1}>
                      <div className="flex items-start gap-5 md:pl-12 relative">
                        <div className="hidden md:flex absolute left-2.5 top-1 w-6 h-6 rounded-full bg-amber-100 text-amber-600 items-center justify-center z-10 shadow-sm border-2 border-white">
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <div className="flex-1 bg-[#FBFBF9] rounded-xl p-5 md:p-6 border border-silver/20 hover:border-amber-200/50 transition-all duration-300">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="md:hidden w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                              <span className="text-[10px] font-bold">{i + 1}</span>
                            </span>
                          </div>
                          <p className="text-sm text-text-main/80 font-body leading-relaxed">{item}</p>
                        </div>
                      </div>
                    </AnimateInView>
                  ))}
                </div>
              </div>
            </Container>
          </AnimateInView>
        )}

        {landing.contraindications && landing.contraindications.length > 0 && (
          <AnimateInView variant="fadeUp" as="section" id="contraindicaciones" className="bg-[#FBFBF9] py-16 md:py-24">
            <Container>
              <AnimateInView variant="fadeIn">
                <SectionHeader label="Contraindicaciones" title="¿Quién no es candidato?"
                  desc="Existen condiciones que pueden contraindicar temporal o permanentemente el procedimiento." />
              </AnimateInView>
              <AnimateInView variant="scaleIn" className="max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden" style={{ borderColor: `${gradientFrom}44`, borderWidth: "1px" }}>
                  <div className="px-6 py-4 border-b" style={{ background: `linear-gradient(to right, ${gradientFrom}08, white)`, borderColor: `${gradientFrom}15` }}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: `${gradientFrom}15`, color: gradientFrom }}>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
                        </svg>
                      </div>
                      <p className="font-heading font-bold text-text-dark text-sm">Condiciones que contraindican el procedimiento</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    {landing.contraindications.map((item, i) => (
                      <AnimateInView key={i} variant="fadeLeft" delay={i * 0.08}>
                        <div className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-red-50 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <line x1="18" y1="6" x2="6" y2="18" />
                            </svg>
                          </span>
                          <p className="text-sm text-text-main/80 font-body leading-relaxed">{item}</p>
                        </div>
                      </AnimateInView>
                    ))}
                  </div>
                </div>
              </AnimateInView>
            </Container>
          </AnimateInView>
        )}

        <AnimateInView variant="fadeUp" as="section" id="recuperacion" className="bg-white py-16 md:py-24">
          <Container>
            <AnimateInView variant="fadeIn">
              <SectionHeader label="Recuperación" title="Postoperatorio y evolución"
                desc="El proceso de recuperación es progresivo. Cada etapa requiere cuidados específicos." />
            </AnimateInView>
            <div className="max-w-3xl mx-auto space-y-6">
              {landing.recovery.map((item, i) => (
                <AnimateInView key={item.period} variant="fadeRight" delay={i * 0.12}>
                  <div className="relative pl-10 md:pl-14 group transition-colors duration-300" style={{ borderLeft: `2px solid ${gradientFrom}33` }}>
                    <div className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-white border-2 group-hover:scale-125 transition-all duration-300" style={{ borderColor: gradientFrom }} aria-hidden="true" />
                    <div className="flex items-center gap-2 mb-1">
                      <svg className="w-4 h-4 shrink-0" style={{ color: `${gradientFrom}99` }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                      </svg>
                      <h3 className="font-heading font-bold text-text-dark text-lg">{item.period}</h3>
                    </div>
                    <p className="text-sm text-text-main/80 font-body leading-relaxed">{item.desc}</p>
                  </div>
                </AnimateInView>
              ))}
            </div>
          </Container>
        </AnimateInView>

        {landing.resultsDescription && (
          <AnimateInView variant="fadeRight" as="section" id="resultados" className="bg-[#FBFBF9] py-16 md:py-24">
            <Container>
              <AnimateInView variant="fadeIn">
                <SectionHeader label="Resultados" title="Resultados esperados"
                  desc="Los resultados son progresivos y dependen de la respuesta biológica de cada paciente." />
              </AnimateInView>
              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                <AnimateInView variant="fadeLeft" delay={0.1}>
                  <div className="bg-white rounded-2xl p-8 border border-silver/20 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${gradientFrom}15`, color: gradientFrom }}>
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
                        </svg>
                      </div>
                      <h3 className="font-heading font-bold text-text-dark text-lg">Resultado estético</h3>
                    </div>
                    <p className="text-sm text-text-main/80 font-body leading-relaxed">{landing.resultsDescription}</p>
                  </div>
                </AnimateInView>
                <AnimateInView variant="fadeRight" delay={0.2}>
                  <div className="bg-white rounded-2xl p-8 border border-silver/20 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${gradientFrom}15`, color: gradientFrom }}>
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                      </div>
                      <h3 className="font-heading font-bold text-text-dark text-lg">Recuperación y evolución</h3>
                    </div>
                    <p className="text-sm text-text-main/80 font-body leading-relaxed">El resultado completo se consolida progresivamente. La inflamación inicial cede en las primeras semanas, el contorno definitivo se aprecia entre el tercer y sexto mes, y las cicatrices maduran durante el primer año. El seguimiento médico programado es esencial para verificar la evolución.</p>
                  </div>
                </AnimateInView>
              </div>
              <div className="mt-6 text-center max-w-2xl mx-auto">
                <p className="text-xs text-text-main/60 font-body px-4">
                  Los resultados varían según las condiciones anatómicas, genéticas y los hábitos de vida de cada paciente. La información aquí presentada es educativa y no sustituye una consulta médica formal.
                </p>
              </div>
            </Container>
          </AnimateInView>
        )}

        {landing.risks && landing.risks.length > 0 && (
          <section id="riesgos" className="py-16 md:py-24 text-white relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientFrom}dd, ${gradientTo})` }}>
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
              <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
            </div>
            <Container className="relative z-10">
              <AnimateInView variant="fadeIn">
                <div className="text-center mb-12 md:mb-16">
                  <span className="font-body text-sm font-semibold uppercase tracking-widest text-white/60">Riesgos</span>
                  <Heading as="h2" className="mt-3 !text-white">Riesgos y consideraciones</Heading>
                  <p className="mt-4 text-white/70 font-body max-w-3xl mx-auto leading-relaxed">
                    Todo procedimiento quirúrgico conlleva riesgos potenciales que deben ser conocidos por el paciente.
                  </p>
                </div>
              </AnimateInView>
              <AnimateInView variant="scaleIn" className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4">
                  {landing.risks.map((item, i) => (
                    <AnimateInView key={i} variant="fadeUp" delay={i * 0.06}>
                      <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors duration-300">
                        <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                          {i + 1}
                        </span>
                        <p className="text-sm leading-relaxed text-white/80 font-body">{item}</p>
                      </div>
                    </AnimateInView>
                  ))}
                </div>
                <p className="text-xs text-white/50 font-body mt-6 text-center">
                  Esta lista no es exhaustiva. Los riesgos específicos de cada caso se discuten en detalle durante la valoración médica presencial.
                </p>
              </AnimateInView>
            </Container>
          </section>
        )}

        <AnimateInView variant="fadeUp" as="section" id="faq" className="bg-[#FBFBF9] py-16 md:py-24">
          <Container>
            <AnimateInView variant="fadeIn">
              <SectionHeader label="FAQ" title="Preguntas frecuentes" />
            </AnimateInView>
            <div className="max-w-3xl mx-auto divide-y divide-silver/20" itemScope itemType="https://schema.org/FAQPage">
              {landing.faqs.map((faq, i) => (
                <AnimateInView key={faq.q} variant="fadeUp" delay={i * 0.06}>
                  <details className="group py-5" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-heading font-semibold text-text-dark text-base md:text-lg">
                      <span itemProp="name">{faq.q}</span>
                      <svg className="w-5 h-5 text-primary shrink-0 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </summary>
                    <div className="mt-4 text-sm text-text-main/80 font-body leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <div itemProp="text">{faq.a}</div>
                    </div>
                  </details>
                </AnimateInView>
              ))}
            </div>
          </Container>
        </AnimateInView>

        <AnimateInView variant="fadeUp" as="section" className={`bg-gradient-to-br from-[${gradientFrom}] via-[${gradientFrom}dd] to-[${gradientTo}] py-20 md:py-28 relative overflow-hidden`}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
            <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs><pattern id="ctaGrid" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="white" /></pattern></defs>
              <rect width="100%" height="100%" fill="url(#ctaGrid)" />
            </svg>
          </div>
          <Container className="relative z-10">
            <div className="text-center max-w-2xl mx-auto">
              <AnimateInView variant="fadeIn" delay={0.1}>
                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                  ¿Listo para tu valoración médica?
                </h2>
              </AnimateInView>
              <AnimateInView variant="fadeUp" delay={0.2}>
                <p className="mt-4 text-white/80 font-body text-lg leading-relaxed">
                  El primer paso es una consulta presencial con nuestros especialistas para evaluar tu caso de manera personalizada.
                </p>
              </AnimateInView>
              <AnimateInView variant="scaleIn" delay={0.3}>
                <a href={waLink} target="_blank" rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-2 bg-white text-[#0F4A44] font-body font-bold px-10 py-4 rounded-full hover:bg-white/90 hover:scale-105 transition-all duration-300 text-lg shadow-xl shadow-black/20 no-underline">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Agendar valoración médica
                </a>
              </AnimateInView>
              <AnimateInView variant="fadeUp" delay={0.4}>
                <p className="mt-6 text-sm text-white/60 font-body">
                  Tiffany Esthetic Group IPS — Institución Prestadora de Servicios de Salud habilitada ante las autoridades sanitarias de Colombia.
                </p>
              </AnimateInView>
            </div>
          </Container>
        </AnimateInView>
      </article>

      <footer className="bg-[#223231] text-white/60 py-8">
        <Container>
          <p className="text-xs leading-relaxed text-center">
            Tiffany Esthetic Group IPS es una institución prestadora de servicios de salud registrada y habilitada ante las autoridades sanitarias de Colombia.
            Los resultados pueden variar según las condiciones anatómicas, genéticas y los hábitos de vida de cada paciente.
            La información es estrictamente educativa y no sustituye una consulta médica formal.
          </p>
        </Container>
      </footer>
    </>
  );
}
