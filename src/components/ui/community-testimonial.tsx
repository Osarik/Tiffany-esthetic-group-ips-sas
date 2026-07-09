"use client";

const testimonialsData = {
  title: "Lo que dicen nuestros pacientes",
  subtitle:
    "En Tiffany Esthetic Group, la satisfacción de nuestros pacientes es nuestra mayor recompensa. Conoce sus experiencias y resultados.",
  rows: [
    {
      id: "row1",
      speed: "50s",
      direction: "left" as const,
      testimonials: [
        {
          id: "t1",
          quote:
            "Súper recomiendo. Me realicé un procedimiento con el doctor Oscar Acosta y la atención desde la recepción es muy agradable. El día del procedimiento me sentí muy tranquila y segura.",
          authorName: "Alejandra García",
          authorTitle: "Cirugía con Dr. Oscar Acosta",
          avatarUrl:
            "https://placehold.co/100x100/2FA79C/FFFFFF?text=AG",
        },
        {
          id: "t2",
          quote:
            "Excelente clínica y excelentes profesionales. Me realizaron una lipoescultura y una corrección de hernia umbilical. Ambas cirugías fueron en un quirófano de primera calidad.",
          authorName: "Magaly Porto",
          authorTitle: "Lipoescultura",
          avatarUrl:
            "https://placehold.co/100x100/2FA79C/FFFFFF?text=MP",
        },
        {
          id: "t3",
          quote:
            "Super recomendados, larga trayectoria profesional. Ahora con una infraestructura excelente que sobrepasa todas las expectativas en seguridad, profesionalismo y cumplimiento. Excelentes profesionales.",
          authorName: "Alba Libreros",
          authorTitle: "Paciente",
          avatarUrl:
            "https://placehold.co/100x100/2FA79C/FFFFFF?text=AL",
        },
      ],
    },
    {
      id: "row2",
      speed: "40s",
      direction: "right" as const,
      testimonials: [
        {
          id: "t4",
          quote:
            "Súper recomendada la clínica. Excelente atención y seguridad en todos los procedimientos. Estoy feliz con los resultados de mi cirugía.",
          authorName: "Angie Penagoa",
          authorTitle: "Cirugía estética",
          avatarUrl:
            "https://placehold.co/100x100/2FA79C/FFFFFF?text=AP",
        },
        {
          id: "t5",
          quote:
            "Mi experiencia fue increíble. La clínica es muy agradable y el personal siempre es amable y servicial. Muy agradecida.",
          authorName: "Leires Altamirano",
          authorTitle: "Paciente",
          avatarUrl:
            "https://placehold.co/100x100/2FA79C/FFFFFF?text=LA",
        },
        {
          id: "t6",
          quote:
            "Excelente servicio al paciente. Un lugar donde prestan una atención de primera con personal altamente calificado.",
          authorName: "Greysy Hernández",
          authorTitle: "Paciente",
          avatarUrl:
            "https://placehold.co/100x100/2FA79C/FFFFFF?text=GH",
        },
      ],
    },
    {
      id: "row3",
      speed: "60s",
      direction: "left" as const,
      testimonials: [
        {
          id: "t7",
          quote:
            "Excelente clínica. Muy agradecida con la atención y el profesionalismo del equipo médico. Una experiencia que recomiendo totalmente.",
          authorName: "Sonia Amparo Ocoró",
          authorTitle: "Paciente",
          avatarUrl:
            "https://placehold.co/100x100/2FA79C/FFFFFF?text=SO",
        },
        {
          id: "t8",
          quote:
            "Excelente institución. Personal muy profesional y una atención maravillosa. Sin duda la mejor decisión.",
          authorName: "Alejandra Rudas",
          authorTitle: "Paciente",
          avatarUrl:
            "https://placehold.co/100x100/2FA79C/FFFFFF?text=AR",
        },
        {
          id: "t9",
          quote:
            "Excelente atención, buen servicio y unas instalaciones de primera. Muy recomendada.",
          authorName: "Andrea Caicedo",
          authorTitle: "Paciente",
          avatarUrl:
            "https://placehold.co/100x100/2FA79C/FFFFFF?text=AC",
        },
      ],
    },
  ],
};

function TestimonialCard({
  quote,
  authorName,
  authorTitle,
  avatarUrl,
}: {
  quote: string;
  authorName: string;
  authorTitle: string;
  avatarUrl: string;
}) {
  return (
    <div className="flex flex-col items-start gap-4 p-6 bg-white rounded-2xl border border-primary/10 shadow-sm w-[45vw] sm:w-[340px] md:w-96 flex-shrink-0">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, s) => (
          <svg
            key={s}
            className="w-4 h-4 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-text-main font-body text-sm leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-4 mt-auto">
        <img
          src={avatarUrl}
          alt={authorName}
          className="w-11 h-11 rounded-full object-cover"
        />
        <div>
          <h4 className="text-sm font-body font-bold text-text-dark">
            {authorName}
          </h4>
          <p className="text-xs font-body text-primary">{authorTitle}</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalScroller({
  children,
  speed = "40s",
  direction = "left",
}: {
  children: React.ReactNode;
  speed?: string;
  direction?: "left" | "right";
}) {
  const animationClass =
    direction === "right"
      ? "animate-scroll-horizontal-reverse"
      : "animate-scroll-horizontal";

  return (
    <div className="w-full overflow-hidden group relative mask-fade">
      <div
        className={`flex ${animationClass}`}
        style={{ "--scroll-duration": speed } as React.CSSProperties}
      >
        <div className="flex items-stretch justify-center gap-6 px-4">
          {children}
        </div>
        <div
          className="flex items-stretch justify-center gap-6 px-4"
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonios"
      className="relative flex flex-col items-center gap-12 py-20 md:py-28 px-4 w-full overflow-hidden"
    >
      <div className="flex flex-col items-center gap-4 text-center z-10 max-w-2xl">
        <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
          Testimonios
        </span>
        <h2
          className="font-heading text-4xl md:text-5xl font-bold text-text-dark leading-tight"
          style={{
            opacity: 0,
            animation: "fadeInUp 0.7s ease-out 0.2s forwards",
          }}
        >
          {testimonialsData.title}
        </h2>
        <p
          className="text-sm md:text-base text-text-main font-body max-w-xl"
          style={{
            opacity: 0,
            animation: "fadeInUp 0.7s ease-out 0.4s forwards",
          }}
        >
          {testimonialsData.subtitle}
        </p>
      </div>

      <div className="flex flex-col gap-8 z-10 w-full max-w-6xl">
        {testimonialsData.rows.map((row) => (
          <HorizontalScroller
            key={row.id}
            speed={row.speed}
            direction={row.direction}
          >
            {row.testimonials.map((t) => (
              <TestimonialCard
                key={t.id}
                quote={t.quote}
                authorName={t.authorName}
                authorTitle={t.authorTitle}
                avatarUrl={t.avatarUrl}
              />
            ))}
          </HorizontalScroller>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 85% 67% at 50% 100%, rgba(47,167,156,0.12) 0%, transparent 60%)",
          }}
        />
      </div>
    </section>
  );
}
