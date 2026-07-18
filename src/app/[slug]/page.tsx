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
        telephone: "+57-602-XXX-XXXX",
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
          <Container>
            <div className="relative max-w-3xl">
              <span className="inline-block text-white/70 font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4 border border-white/20 rounded-full px-4 py-1.5">
                {service.category}
              </span>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight text-balance">
                {service.title} en Cali
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/80 font-body leading-relaxed max-w-2xl">
                {service.description}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href={waLink} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#0F4A44] font-body font-bold px-8 py-3.5 rounded-full hover:bg-white/90 transition-all duration-300 text-base shadow-lg shadow-black/20 no-underline">
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

        <Section id="que-es" className="bg-white">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <SectionHeader label="¿Qué es?" title={service.title} />
              <div className="space-y-5 text-text-main/80 font-body leading-relaxed">
                {landing.descriptionLong.split("\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="bg-[#FBFBF9] rounded-2xl p-8 border border-silver/20">
              <div className="flex items-start gap-3 mb-4">
                <svg className="w-6 h-6 text-primary shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <h3 className="font-heading font-bold text-text-dark text-lg">Seguridad y legalidad</h3>
              </div>
              <p className="text-sm text-text-main/80 font-body leading-relaxed">
                Todos nuestros procedimientos se realizan en instalaciones habilitadas por la Secretaría de Salud,
                con personal médico calificado y protocolos de bioseguridad que cumplen la Resolución 3100 de 2019.
              </p>
              <div className="mt-6 bg-primary/5 rounded-xl p-5 border border-primary/10">
                <p className="text-sm font-body font-semibold text-primary-dark">
                  Tu seguridad es nuestra prioridad en cada etapa del proceso quirúrgico.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="proceso" className="bg-[#FBFBF9]">
          <SectionHeader label="Procedimiento" title={`¿Cómo es el proceso?`}
            desc="El procedimiento quirúrgico se desarrolla en etapas secuenciales, desde la valoración inicial hasta el postoperatorio." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {landing.steps.map((step) => (
              <article key={step.number} className="relative bg-white rounded-2xl p-8 border border-silver/20 shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="font-heading font-bold text-5xl text-primary/10 absolute top-4 right-6 select-none" aria-hidden="true">{step.number}</span>
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-body font-bold text-sm mb-5 relative">{step.number}</div>
                <h3 className="font-heading font-bold text-text-dark text-lg mb-3">{step.title}</h3>
                <p className="text-sm text-text-main/80 font-body leading-relaxed">{step.desc}</p>
              </article>
            ))}
          </div>
        </Section>

        {landing.benefits && landing.benefits.length > 0 && (
          <Section id="beneficios" className="bg-white">
            <SectionHeader label="Beneficios" title={`Beneficios de la ${service.title.toLowerCase()}`} />
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {landing.benefits.map((item, i) => (
                <div key={i} className="bg-[#FBFBF9] rounded-xl p-6 border border-silver/20 flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-sm text-text-main/80 font-body leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {landing.techniques && landing.techniques.length > 0 && (
          <Section id="tecnicas" className="bg-[#FBFBF9]">
            <SectionHeader label="Técnicas" title={landing.techniqueTitle ?? "Técnicas quirúrgicas"} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {landing.techniques.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-silver/20 shadow-sm">
                  <h3 className="font-heading font-bold text-text-dark text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-text-main/80 font-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {landing.candidates && landing.candidates.length > 0 && (
          <Section id="candidatos" className="bg-white">
            <SectionHeader label="Candidatos" title="¿Quién es candidato ideal?"
              desc="La idoneidad del paciente se determina mediante evaluación clínica presencial." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {landing.candidates.map((item) => (
                <div key={item.title} className="bg-[#FBFBF9] rounded-xl p-6 border border-silver/20">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h3 className="font-heading font-bold text-text-dark text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-text-main/80 font-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {landing.areas && landing.areas.length > 0 && (
          <Section id="areas" className="bg-[#FBFBF9]">
            <SectionHeader label="Áreas" title="Zonas del cuerpo" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {landing.areas.map((item) => (
                <div key={item.area} className="bg-white rounded-2xl p-6 border border-silver/20 shadow-sm">
                  <h3 className="font-heading font-bold text-text-dark text-lg mb-2">{item.area}</h3>
                  <p className="text-sm text-text-main/80 font-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {landing.preparation && landing.preparation.length > 0 && (
          <Section id="preparacion" className="bg-white">
            <SectionHeader label="Preparación" title="Preparación preoperatoria"
              desc="Una adecuada preparación es fundamental para el éxito del procedimiento y la seguridad del paciente." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {landing.preparation.map((item, i) => (
                <div key={i} className="bg-[#FBFBF9] rounded-xl p-6 border border-silver/20 flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <p className="text-sm text-text-main/80 font-body leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        <Section id="recuperacion" className="bg-white">
          <SectionHeader label="Recuperación" title="Postoperatorio y evolución"
            desc="El proceso de recuperación es progresivo. Cada etapa requiere cuidados específicos." />
          <div className="max-w-3xl mx-auto space-y-6">
            {landing.recovery.map((item) => (
              <div key={item.period} className="relative pl-8 md:pl-12 border-l-2 border-primary/30">
                <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
                <h3 className="font-heading font-bold text-text-dark text-lg">{item.period}</h3>
                <p className="mt-2 text-sm text-text-main/80 font-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {landing.resultsDescription && (
          <Section id="resultados" className="bg-[#FBFBF9]">
            <SectionHeader label="Resultados" title="Resultados esperados"
              desc="Los resultados son progresivos y dependen de la respuesta biológica de cada paciente." />
            <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-10 border border-silver/20 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-text-main/80 font-body leading-relaxed">{landing.resultsDescription}</p>
                  {landing.duration && (
                    <div className="mt-6 grid sm:grid-cols-3 gap-4">
                      {landing.duration && (
                        <div className="bg-[#FBFBF9] rounded-xl p-4 border border-silver/20 text-center">
                          <p className="text-xs text-text-main/60 font-body uppercase tracking-wider mb-1">Duración</p>
                          <p className="font-heading font-bold text-text-dark">{landing.duration}</p>
                        </div>
                      )}
                      {landing.anesthesia && (
                        <div className="bg-[#FBFBF9] rounded-xl p-4 border border-silver/20 text-center">
                          <p className="text-xs text-text-main/60 font-body uppercase tracking-wider mb-1">Anestesia</p>
                          <p className="font-heading font-bold text-text-dark">{landing.anesthesia}</p>
                        </div>
                      )}
                      {landing.hospitalization && (
                        <div className="bg-[#FBFBF9] rounded-xl p-4 border border-silver/20 text-center">
                          <p className="text-xs text-text-main/60 font-body uppercase tracking-wider mb-1">Hospitalización</p>
                          <p className="font-heading font-bold text-text-dark">{landing.hospitalization}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Section>
        )}

        <Section id="faq" className="bg-[#FBFBF9]">
          <SectionHeader label="FAQ" title="Preguntas frecuentes" />
          <div className="max-w-3xl mx-auto divide-y divide-silver/20" itemScope itemType="https://schema.org/FAQPage">
            {landing.faqs.map((faq) => (
              <details key={faq.q} className="group py-5" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
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
            ))}
          </div>
        </Section>

        <section className={`bg-gradient-to-br from-[${gradientFrom}] via-[${gradientFrom}dd] to-[${gradientTo}] py-20 md:py-28`}>
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                ¿Listo para tu valoración médica?
              </h2>
              <p className="mt-4 text-white/80 font-body text-lg leading-relaxed">
                El primer paso es una consulta presencial con nuestros especialistas para evaluar tu caso de manera personalizada.
              </p>
              <a href={waLink} target="_blank" rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 bg-white text-[#0F4A44] font-body font-bold px-10 py-4 rounded-full hover:bg-white/90 transition-all duration-300 text-lg shadow-xl shadow-black/20 no-underline">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar valoración médica
              </a>
              <p className="mt-6 text-sm text-white/60 font-body">
                Tiffany Esthetic Group IPS — Institución Prestadora de Servicios de Salud habilitada ante las autoridades sanitarias de Colombia.
              </p>
            </div>
          </Container>
        </section>
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
