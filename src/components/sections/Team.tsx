"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { team } from "@/data/team";

const roleIcons: Record<string, React.ReactNode> = {
  "Cirujanos plásticos": (
    <img src="/images/cirujano.png" alt="Cirujanos plásticos" className="w-14 h-14 object-contain" />
  ),
  Anestesiólogos: (
    <img src="/images/anestesiologo.png" alt="Anestesiólogos" className="w-14 h-14 object-contain" />
  ),
  "Equipo quirúrgico y recuperación": (
    <img src="/images/equipo.png" alt="Equipo quirúrgico" className="w-14 h-14 object-contain" />
  ),
  "Servicio farmacéutico": (
    <img src="/images/farmaco.png" alt="Servicio farmacéutico" className="w-14 h-14 object-contain" />
  ),
};

const logos = [
  {
    href: "https://cirugiaplastica.org.co/",
    src: "https://cirugiaplastica.org.co/wp-content/uploads/2022/07/logo-sccp.png",
    alt: "Sociedad Colombiana de Cirugía Plástica",
  },
  {
    href: "https://scare.org.co/",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoFCeO86ByR6Xp9c02HTjR8tk7oSjy-m-Qko64JVRwsA&s=10",
    alt: "Sociedad Colombiana de Anestesiología y Reanimación",
  },
  {
    href: "https://www.supersalud.gov.co/",
    src: "https://www.supersalud.gov.co/Style%20Library/Images/Logo-Supersalud-2024.svg",
    alt: "Superintendencia Nacional de Salud - Vigilado",
    label: "Vigilado",
  },
];

export default function Team() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const hoverTimer = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    return () => clearTimeout(hoverTimer.current);
  }, []);

  const EXP = 400;
  const COL = 80;
  const GAP = 24;

  const cardContent = (member: (typeof team)[number], i: number) => {
    const isHovered = hoveredIndex === i;
    const isCollapsed = hoveredIndex !== null && !isHovered;

    return (
      <>
        <div
          className={`h-full rounded-3xl transition-all duration-[700] ease-out ${
            isHovered
              ? "bg-white shadow-lg"
              : isCollapsed
                ? "bg-transparent"
                : "bg-white/50"
          }`}
        >
          <div
            className={`flex flex-col items-center justify-center h-full p-6 transition-all duration-[700] ease-out ${
              isCollapsed ? "gap-0" : "gap-4"
            }`}
          >
            <div
              className={`shrink-0 transition-all duration-[700] ease-out ${
                isCollapsed ? "scale-75" : "scale-100"
              }`}
            >
              {roleIcons[member.name]}
            </div>
            <div
              className={`overflow-hidden transition-all duration-[700] ease-out ${
                isCollapsed
                  ? "max-h-0 opacity-0 w-0"
                  : "max-h-[500px] opacity-100"
              }`}
            >
              <h3 className="font-heading font-bold text-text-dark text-lg text-center mt-2">
                {member.name}
              </h3>
              <span className="block text-primary font-body font-semibold text-sm text-center mt-1">
                {member.title}
              </span>
              <p className="text-text-main/70 font-body text-sm leading-relaxed text-center mt-3 max-w-[260px] mx-auto">
                {member.description}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <Section dark id="equipo">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
          Nuestro Equipo
        </span>
        <Heading as="h2" className="mt-3">
          Profesionales al servicio de tu seguridad
        </Heading>
        <p className="mt-4 text-text-main font-body max-w-2xl mx-auto">
          La atención quirúrgica se apoya en cirujanos plásticos,
          anestesiólogos, farmaceuta, instrumentación, circulante de cirugía y
          enfermería recuperadora.
        </p>
      </motion.div>

      <div
        onMouseOver={(e) => {
          const el = (e.target as HTMLElement).closest("[data-card-idx]");
          if (el) {
            const idx = Number(el.getAttribute("data-card-idx"));
            clearTimeout(hoverTimer.current);
            hoverTimer.current = setTimeout(() => {
              setHoveredIndex((prev) => (prev === idx ? prev : idx));
            }, 400);
          }
        }}
        onMouseLeave={() => {
          clearTimeout(hoverTimer.current);
          setHoveredIndex(null);
        }}
      >
        {/* Mobile: flex-col */}
        <div className="flex md:hidden flex-col items-stretch gap-4">
          {team.map((member, i) => {
            const isHovered = hoveredIndex === i;
            const isCollapsed = hoveredIndex !== null && !isHovered;

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.0, delay: i * 0.1 }}
                data-card-idx={i}
                className={`cursor-default transition-all duration-[700] ease-out ${
                  isCollapsed
                    ? "basis-[60px]"
                    : isHovered
                      ? "basis-full"
                      : "basis-full"
                }`}
              >
                {cardContent(member, i)}
              </motion.div>
            );
          })}
        </div>

        {/* Desktop: absolute-positioned with centered hovered card */}
        <div className="hidden md:block relative h-[460px]">
          {team.map((member, i) => {
            const isHovered = hoveredIndex === i;
            const isCollapsed = hoveredIndex !== null && !isHovered;
            const n = team.length;
            const gapPx = GAP;

            let left: string;
            let width: string | number;

            if (hoveredIndex === null) {
              const cardShare = 100 / n;
              left = `calc(${i * cardShare}% + ${i * (gapPx / n)}px)`;
              width = `calc(${cardShare}% - ${gapPx - gapPx / n}px)`;
            } else if (isHovered) {
              left = `calc(50% - ${EXP / 2}px)`;
              width = EXP;
            } else if (i < hoveredIndex) {
              const dist = hoveredIndex - i;
              left = `calc(50% - ${EXP / 2}px - ${dist * (COL + GAP)}px)`;
              width = COL;
            } else {
              const dist = i - hoveredIndex;
              left = `calc(50% + ${EXP / 2}px + ${GAP + (dist - 1) * (COL + GAP)}px)`;
              width = COL;
            }

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.0, delay: i * 0.1 }}
                data-card-idx={i}
                style={{
                  position: "absolute",
                  left,
                  width,
                  top: 0,
                  bottom: 0,
                  transition:
                    "left 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
                className="cursor-default"
              >
                {cardContent(member, i)}
              </motion.div>
            );
          })}
        </div>

        {/* ─── Logo marquee ───────────────────────────── */}
        <div className="w-full overflow-hidden mt-16 mask-fade">
          <div className="flex items-center gap-16 md:gap-24 w-max marquee-track">
            {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
              <a
                key={i}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center justify-center h-14 md:h-16 px-6 gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300"
              >
                {logo.label && (
                  <span className="font-body font-bold text-sm text-black whitespace-nowrap leading-none">
                    {logo.label}
                  </span>
                )}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-[160px] object-contain"
                  loading="lazy"
                />
              </a>
            ))}
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
    </Section>
  );
}
