"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { team } from "@/data/team";

const roleIcons: Record<string, React.ReactNode> = {
  "Cirujanos plásticos": (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
      <circle cx="24" cy="24" r="22" stroke="#2FA79C" strokeWidth="1.5" />
      <path d="M16 30c0-4 3-8 8-8s8 4 8 8" stroke="#2FA79C" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="18" r="4" stroke="#2FA79C" strokeWidth="1.5" />
      <path d="M34 14l4-4M36 12l-4 4" stroke="#2FA79C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 34l4-4M12 32l-4 4" stroke="#2FA79C" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="14" cy="14" r="2" stroke="#2FA79C" strokeWidth="1" />
      <circle cx="34" cy="34" r="2" stroke="#2FA79C" strokeWidth="1" />
    </svg>
  ),
  Anestesiólogos: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
      <circle cx="24" cy="24" r="22" stroke="#2FA79C" strokeWidth="1.5" />
      <rect x="16" y="14" width="16" height="20" rx="3" stroke="#2FA79C" strokeWidth="1.5" />
      <line x1="20" y1="20" x2="28" y2="20" stroke="#2FA79C" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="24" x2="28" y2="24" stroke="#2FA79C" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="28" x2="25" y2="28" stroke="#2FA79C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 10l2-2 2 2" stroke="#2FA79C" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="24" y1="8" x2="24" y2="14" stroke="#2FA79C" strokeWidth="1" strokeLinecap="round" />
      <path d="M18 38l2-2M22 38l2-2M26 38l2-2" stroke="#2FA79C" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
  "Equipo quirúrgico y recuperación": (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
      <circle cx="24" cy="24" r="22" stroke="#2FA79C" strokeWidth="1.5" />
      <circle cx="18" cy="16" r="4" stroke="#2FA79C" strokeWidth="1.5" />
      <circle cx="30" cy="16" r="4" stroke="#2FA79C" strokeWidth="1.5" />
      <circle cx="24" cy="30" r="4" stroke="#2FA79C" strokeWidth="1.5" />
      <path d="M14 28c0-3 2-5 4-5M34 28c0-3-2-5-4-5" stroke="#2FA79C" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24" y1="34" x2="24" y2="40" stroke="#2FA79C" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="38" x2="28" y2="38" stroke="#2FA79C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 26l3 2M14 26l-3 2" stroke="#2FA79C" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
  "Servicio farmacéutico": (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
      <circle cx="24" cy="24" r="22" stroke="#2FA79C" strokeWidth="1.5" />
      <rect x="16" y="12" width="16" height="24" rx="4" stroke="#2FA79C" strokeWidth="1.5" />
      <line x1="24" y1="16" x2="24" y2="32" stroke="#2FA79C" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="24" x2="30" y2="24" stroke="#2FA79C" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="22" r="6" stroke="#2FA79C" strokeWidth="1" />
      <path d="M20 18l2-2 2 2M24 26l2 2" stroke="#2FA79C" strokeWidth="1" strokeLinecap="round" />
      <path d="M15 40l2-2M20 40l2-2M25 40l2-2" stroke="#2FA79C" strokeWidth="1" strokeLinecap="round" />
    </svg>
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
            setHoveredIndex((prev) => (prev === idx ? prev : idx));
          }
        }}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-6">
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
                className={`relative cursor-default transition-all duration-[600] ease-out ${
                  isCollapsed
                    ? "basis-[60px] md:basis-[80px]"
                    : isHovered
                      ? "basis-full md:basis-[400px]"
                      : "basis-full md:basis-1/4"
                }`}
              >
                <div
                  className={`h-full rounded-3xl transition-all duration-[600] ease-out ${
                    isHovered
                      ? "bg-white shadow-lg"
                      : isCollapsed
                        ? "bg-transparent"
                        : "bg-white/50"
                  }`}
                >
                  <div
                    className={`flex flex-col items-center justify-center h-full p-6 transition-all duration-[600] ease-out ${
                      isCollapsed ? "gap-0" : "gap-4"
                    }`}
                  >
                    <div
                      className={`shrink-0 transition-all duration-[600] ease-out ${
                        isCollapsed ? "scale-75" : "scale-100"
                      }`}
                    >
                      {roleIcons[member.name]}
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-[600] ease-out ${
                        isCollapsed
                          ? "max-h-0 opacity-0 w-0"
                          : "max-h-[300px] opacity-100"
                      }`}
                    >
                      <h3 className="font-heading font-bold text-text-dark text-base md:text-lg text-center mt-2">
                        {member.name}
                      </h3>
                      <span className="block text-primary font-body font-semibold text-xs md:text-sm text-center mt-1">
                        {member.title}
                      </span>
                      <p className="text-text-main/70 font-body text-sm leading-relaxed text-center mt-3 max-w-[280px] mx-auto">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ─── Logo marquee ───────────────────────────── */}
        <div className="w-full overflow-hidden mt-16 mask-fade">
          <div
            className="flex items-center gap-16 md:gap-24 w-max marquee-track"
          >
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
  animation: marquee-loop 60s linear infinite;
}
`}</style>
      </div>
    </Section>
  );
}
