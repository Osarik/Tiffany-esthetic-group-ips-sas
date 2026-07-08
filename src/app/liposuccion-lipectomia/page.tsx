import type { Metadata } from "next";
import Link from "next/link";
import Heading from "@/components/ui/Heading";
import WhatsAppButton from "@/components/WhatsAppButton";

const whatsappUrl =
  "https://wa.me/573XXXXXXXXX?text=Hola, quiero agendar una valoración médica para liposucción y lipectomía en Cali.";

export const metadata: Metadata = {
  title:
    "Liposucción y Lipectomía en Cali | Tiffany Esthetic Group IPS SAS",
  description:
    "Valoración médica para liposucción, lipectomía y transferencia de grasa autóloga en Cali. Institución habilitada, salas de cirugía, recuperación y personal calificado.",
  alternates: {
    canonical: "/liposuccion-lipectomia",
  },
  keywords: [
    "liposucción en Cali",
    "lipectomía Cali",
    "abdominoplastia Cali",
    "transferencia de grasa glútea Cali",
    "lipoinyección glútea Cali",
    "moldeamiento corporal Valle del Cauca",
    "Tiffany Esthetic Group IPS SAS",
  ],
  openGraph: {
    title: "Liposucción y Lipectomía en Cali",
    description:
      "Moldeamiento corporal con valoración médica, instalaciones habilitadas y acompañamiento quirúrgico.",
    url: "https://www.tiffanyesthetic.com/liposuccion-lipectomia",
    siteName: "Tiffany Esthetic Group IPS SAS",
    locale: "es_CO",
    type: "article",
  },
};

const benefits = [
  "Mejora del contorno corporal en zonas con grasa localizada.",
  "Retiro de exceso de piel y tejido graso abdominal cuando está indicado.",
  "Redistribución de grasa autóloga en áreas como la región glútea.",
  "Acompañamiento clínico durante valoración, cirugía y recuperación.",
];

const candidateItems = [
  "Personas en condiciones de salud adecuadas para cirugía.",
  "Pacientes con grasa localizada, flacidez o exceso de piel abdominal.",
  "Personas con expectativas realistas sobre resultados y recuperación.",
  "Pacientes que comprenden riesgos, beneficios y alternativas.",
];

const safetySteps = [
  "Valoración médica obligatoria para revisar antecedentes, objetivos y riesgos.",
  "Explicación del procedimiento, alternativas y posibles complicaciones.",
  "Firma de consentimiento informado antes del procedimiento.",
  "Atención en instalaciones habilitadas y seguimiento de protocolos clínicos.",
  "Controles posteriores y recomendaciones para la recuperación.",
];

const faqs = [
  {
    question: "¿La liposucción sirve para bajar de peso?",
    answer:
      "No. La liposucción es un procedimiento de contorno corporal, no un tratamiento para la obesidad ni una alternativa a hábitos saludables.",
  },
  {
    question: "¿La grasa transferida es permanente?",
    answer:
      "Una parte de la grasa transferida puede ser reabsorbida por el cuerpo. La permanencia depende de factores individuales, técnica médica y cuidados posteriores.",
  },
  {
    question: "¿Cuánto tiempo dura la incapacidad?",
    answer:
      "Depende del procedimiento, la extensión tratada y la evolución del paciente. El médico tratante indicará el tiempo adecuado durante la valoración y los controles.",
  },
  {
    question: "¿Estos procedimientos son seguros?",
    answer:
      "Todo procedimiento quirúrgico implica riesgos. Realizarlos en instituciones habilitadas y con profesionales idóneos ayuda a minimizarlos, pero no elimina posibles complicaciones.",
  },
  {
    question: "¿Qué diferencia hay entre liposucción y lipectomía?",
    answer:
      "La liposucción remueve grasa localizada. La lipectomía o abdominoplastia busca retirar exceso de piel y tejido graso abdominal, y puede mejorar la firmeza de la pared abdominal cuando aplica.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.tiffanyesthetic.com/liposuccion-lipectomia#webpage",
      name: "Liposucción y Lipectomía en Cali",
      description:
        "Información médica sobre liposucción, lipectomía y transferencia de grasa autóloga en Tiffany Esthetic Group IPS SAS.",
      about: [
        { "@type": "MedicalProcedure", name: "Liposucción" },
        { "@type": "MedicalProcedure", name: "Lipectomía" },
        { "@type": "MedicalProcedure", name: "Transferencia de grasa autóloga" },
      ],
      mainEntity: {
        "@type": "MedicalBusiness",
        name: "Tiffany Esthetic Group IPS SAS",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cali",
          addressRegion: "Valle del Cauca",
          addressCountry: "CO",
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tiffanyesthetic.com/liposuccion-lipectomia#faq",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

function CheckIcon() {
  return (
    <svg
      className="mt-1 h-5 w-5 flex-none text-primary"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
      {children}
    </span>
  );
}

function CtaLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
}) {
  const classes =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20"
      : "border-2 border-primary text-primary hover:bg-primary hover:text-white";

  return (
    <a
      href={href}
      className={`${classes} inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary no-underline`}
    >
      {children}
    </a>
  );
}

export default function LiposuctionLipectomyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="bg-clinic-bg">
        <section className="bg-white">
          <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
            <div>
              <nav
                aria-label="Miga de pan"
                className="mb-6 text-sm font-semibold text-text-main/60"
              >
                <Link href="/" className="hover:text-primary no-underline">
                  Inicio
                </Link>
                <span aria-hidden="true" className="mx-2">
                  /
                </span>
                <span>Liposucción y lipectomía</span>
              </nav>

              <SectionLabel>Moldeamiento corporal en Cali</SectionLabel>
              <Heading as="h1" className="mt-4 max-w-3xl">
                Liposucción y lipectomía con valoración médica
              </Heading>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-main/80 md:text-xl">
                En Tiffany Esthetic Group IPS SAS ofrecemos liposucción,
                lipectomía o abdominoplastia y transferencia de grasa autóloga
                con enfoque en seguridad, bienestar y acompañamiento clínico.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaLink href={whatsappUrl}>Agendar valoración médica</CtaLink>
                <CtaLink href="#procedimientos" variant="outline">
                  Ver procedimientos
                </CtaLink>
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-text-main/65">
                Todo procedimiento quirúrgico implica riesgos. La idoneidad del
                paciente debe ser evaluada previamente mediante valoración
                médica.
              </p>
            </div>

            <aside className="rounded-2xl border border-silver/20 bg-primary-soft p-6 shadow-sm md:p-8">
              <h2 className="font-heading text-2xl font-bold text-text-dark">
                Resumen rápido
              </h2>
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="font-bold text-text-dark">Ubicación</dt>
                  <dd className="mt-1 text-sm text-text-main/75">
                    Cali, Valle del Cauca
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-text-dark">Procedimientos</dt>
                  <dd className="mt-1 text-sm text-text-main/75">
                    Liposucción, lipectomía y transferencia de grasa autóloga.
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-text-dark">Enfoque</dt>
                  <dd className="mt-1 text-sm text-text-main/75">
                    Contorno corporal con valoración médica y protocolos
                    clínicos.
                  </dd>
                </div>
              </dl>
              <div className="mt-7 rounded-xl bg-white p-4 text-sm leading-relaxed text-text-main/75">
                Institución habilitada por la Secretaría de Salud, con salas de
                cirugía, recuperación, farmacia y personal calificado.
              </div>
            </aside>
          </div>
        </section>

        <section id="procedimientos" className="bg-clinic-bg py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <SectionLabel>¿En qué consisten?</SectionLabel>
              <Heading as="h2" className="mt-3">
                Procedimientos de contorno corporal
              </Heading>
              <p className="mt-4 text-text-main/75">
                La elección del procedimiento depende de la historia clínica,
                anatomía, expectativas y criterio médico.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Liposucción",
                  text: "Remueve depósitos de grasa localizada en zonas como abdomen, flancos, espalda, muslos o brazos.",
                },
                {
                  title: "Transferencia de grasa",
                  text: "Recolecta grasa del propio paciente, la procesa y la aplica en áreas como la región glútea para mejorar el contorno.",
                },
                {
                  title: "Lipectomía",
                  text: "Retira exceso de piel y tejido graso abdominal. En algunos casos mejora la firmeza de la pared abdominal.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-silver/20 bg-white p-6 shadow-sm"
                >
                  <h3 className="font-heading text-2xl font-bold text-text-dark">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-main/75">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <SectionLabel>Beneficios posibles</SectionLabel>
              <Heading as="h2" className="mt-3">
                Qué puede mejorar el moldeamiento corporal
              </Heading>
              <p className="mt-4 text-text-main/75">
                Los resultados varían según cada paciente, sus condiciones de
                salud, hábitos y seguimiento médico.
              </p>
            </div>
            <ul className="grid gap-4">
              {benefits.map((item) => (
                <li key={item} className="flex gap-3 rounded-xl bg-clinic-bg p-4">
                  <CheckIcon />
                  <span className="text-sm leading-relaxed text-text-main/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-primary-deep py-16 text-white md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <span className="font-body text-sm font-semibold uppercase tracking-widest text-white/65">
                Seguridad y confianza
              </span>
              <Heading as="h2" className="mt-3 !text-white">
                Atención médica con protocolos establecidos
              </Heading>
              <p className="mt-4 text-white/75">
                La seguridad se construye antes, durante y después del
                procedimiento. Por eso el primer paso es siempre una valoración
                médica.
              </p>
            </div>
            <ol className="grid gap-4">
              {safetySteps.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-white/80">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <SectionLabel>Candidatos</SectionLabel>
              <Heading as="h2" className="mt-3">
                Quiénes pueden considerar estos procedimientos
              </Heading>
              <p className="mt-4 text-text-main/75">
                La indicación final depende de la valoración médica. Esta guía
                sirve como orientación inicial, no como diagnóstico.
              </p>
              <div className="mt-8">
                <CtaLink href={whatsappUrl}>Consultar si soy candidato</CtaLink>
              </div>
            </div>
            <ul className="grid gap-4">
              {candidateItems.map((item) => (
                <li key={item} className="flex gap-3 rounded-xl bg-clinic-bg p-4">
                  <CheckIcon />
                  <span className="text-sm leading-relaxed text-text-main/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-clinic-bg py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <SectionLabel>Riesgos y recuperación</SectionLabel>
                <Heading as="h2" className="mt-3">
                  Información importante antes de decidir
                </Heading>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:col-span-2">
                <article className="rounded-2xl border border-silver/20 bg-white p-6 shadow-sm">
                  <h3 className="font-heading text-2xl font-bold text-text-dark">
                    Riesgos posibles
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-main/75">
                    Pueden presentarse inflamación, dolor, hematomas,
                    infección, irregularidades del contorno, reabsorción parcial
                    de grasa y riesgos anestésicos.
                  </p>
                </article>
                <article className="rounded-2xl border border-silver/20 bg-white p-6 shadow-sm">
                  <h3 className="font-heading text-2xl font-bold text-text-dark">
                    Recuperación
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-main/75">
                    Puede requerir reposo relativo, uso de prendas de compresión
                    y controles médicos posteriores según indicación del equipo
                    tratante.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <SectionLabel>Preguntas frecuentes</SectionLabel>
              <Heading as="h2" className="mt-3">
                Respuestas directas sobre liposucción y lipectomía
              </Heading>
            </div>
            <div className="mt-10 space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-silver/20 bg-white p-6 shadow-sm"
                >
                  <summary className="cursor-pointer list-none font-bold text-text-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                    <span className="inline-flex w-full items-center justify-between gap-4">
                      {faq.question}
                      <span
                        aria-hidden="true"
                        className="text-primary transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-text-main/75">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary-soft py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <SectionLabel>Valoración médica en Cali</SectionLabel>
            <Heading as="h2" className="mt-3">
              El primer paso es una evaluación personalizada
            </Heading>
            <p className="mx-auto mt-4 max-w-2xl text-text-main/75">
              Este contenido tiene fines informativos y no sustituye la
              valoración médica. Agenda una cita para recibir orientación según
              tu caso, riesgos y alternativas.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <CtaLink href={whatsappUrl}>Agendar valoración médica</CtaLink>
              <Link
                href="/#servicios"
                className="inline-flex items-center justify-center rounded-full border-2 border-primary px-7 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary no-underline"
              >
                Ver otros servicios
              </Link>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppButton />
    </>
  );
}
