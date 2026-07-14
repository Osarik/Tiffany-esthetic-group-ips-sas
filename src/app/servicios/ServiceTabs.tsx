"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import AnimateInView from "@/components/ui/AnimateInView";
import { services } from "@/data/services";

const categoryStyling: Record<string, { gradient: string; icon: React.ReactNode }> = {
  corporal: {
    gradient: "from-[#0F4A44] to-[#2FA79C]",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
        <g fill="currentColor" opacity="0.9">
          <path d="M50 5C38 5 28 12 22 22C16 32 14 44 16 55C18 63 22 70 28 76C34 82 42 88 50 95C58 88 66 82 72 76C78 70 82 63 84 55C86 44 84 32 78 22C72 12 62 5 50 5Z" />
          <path d="M50 20C42 20 35 24 30 30C25 36 22 44 22 52C22 58 24 64 28 68C32 72 38 74 44 74C48 74 50 72 50 72C50 72 52 74 56 74C62 74 68 72 72 68C76 64 78 58 78 52C78 44 75 36 70 30C65 24 58 20 50 20Z" opacity="0.7" />
          <circle cx="50" cy="38" r="6" opacity="0.5" />
          <circle cx="50" cy="52" r="5" opacity="0.4" />
        </g>
        <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6">
          <path d="M10 30 L18 30 M10 50 L18 50 M10 70 L18 70" />
          <path d="M82 30 L90 30 M82 50 L90 50 M82 70 L90 70" />
          <path d="M12 30 L15 27 L15 33 M12 50 L15 47 L15 53 M12 70 L15 67 L15 73" strokeWidth="0.8" />
          <path d="M88 30 L85 27 L85 33 M88 50 L85 47 L85 53 M88 70 L85 67 L85 73" strokeWidth="0.8" />
          <path d="M40 10 L60 10" strokeDasharray="2,2" />
          <path d="M50 10 L50 15" />
          <path d="M30 85 L70 85" strokeDasharray="2,2" />
          <path d="M50 85 L50 88" />
        </g>
      </svg>
    ),
  },
  mamaria: {
    gradient: "from-[#B76E79] to-[#D48995]",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
        <g fill="currentColor" opacity="0.9">
          <path d="M50 8C44 8 38 10 33 14C28 18 24 24 22 30C20 36 20 42 22 48C24 51 28 54 32 56C36 58 40 60 44 62C46 64 48 66 50 68C52 66 54 64 56 62C60 60 64 58 68 56C72 54 76 51 78 48C80 42 80 36 78 30C76 24 72 18 67 14C62 10 56 8 50 8Z" opacity="0.85" />
          <ellipse cx="38" cy="38" rx="10" ry="14" opacity="0.5" />
          <ellipse cx="62" cy="38" rx="10" ry="14" opacity="0.5" />
          <circle cx="38" cy="38" r="3" opacity="0.3" />
          <circle cx="62" cy="38" r="3" opacity="0.3" />
        </g>
        <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6">
          <path d="M50 2 L50 20" strokeDasharray="2,2" />
          <path d="M50 2 L50 2 M50 20 L50 22" />
          <path d="M20 38 L30 38" />
          <path d="M70 38 L80 38" />
          <path d="M22 38 L25 35 L25 41" strokeWidth="0.8" />
          <path d="M78 38 L75 35 L75 41" strokeWidth="0.8" />
          <path d="M50 55 L50 95" strokeDasharray="3,3" opacity="0.4" />
          <path d="M30 50 L35 48" strokeWidth="0.8" />
          <path d="M70 50 L65 48" strokeWidth="0.8" />
          <path d="M26 70 L30 68" strokeWidth="0.8" />
          <path d="M74 70 L70 68" strokeWidth="0.8" />
        </g>
        <g fill="currentColor" opacity="0.4">
          <circle cx="28" cy="60" r="1" />
          <circle cx="72" cy="60" r="1" />
          <circle cx="50" cy="55" r="1" />
        </g>
      </svg>
    ),
  },
  facial: {
    gradient: "from-[#4A8DB7] to-[#6DB3D9]",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
        <g fill="currentColor" opacity="0.9">
          <path d="M50 5C38 5 28 12 22 22C16 32 14 44 16 55C18 63 22 70 28 76L30 78C34 80 40 82 46 84L48 86C48 88 46 90 46 90L44 92C42 94 42 96 44 98C46 98 54 98 56 98C58 96 58 94 56 92L54 90C54 90 52 88 52 86L54 84C60 82 66 80 70 78L72 76C78 70 82 63 84 55C86 44 84 32 78 22C72 12 62 5 50 5Z" />
          <ellipse cx="36" cy="36" rx="5" ry="4" opacity="0.5" />
          <ellipse cx="64" cy="36" rx="5" ry="4" opacity="0.5" />
          <path d="M36 50C38 54 44 56 50 56C56 56 62 54 64 50" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
          <ellipse cx="50" cy="60" rx="4" ry="2" opacity="0.3" />
        </g>
        <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6">
          <path d="M2 36 L12 36" />
          <path d="M88 36 L98 36" />
          <path d="M4 36 L7 33 L7 39" strokeWidth="0.8" />
          <path d="M96 36 L93 33 L93 39" strokeWidth="0.8" />
          <path d="M12 55 L18 52" strokeWidth="0.8" />
          <path d="M88 55 L82 52" strokeWidth="0.8" />
          <path d="M50 2 L50 12" />
          <path d="M50 68 L50 98" strokeDasharray="3,3" opacity="0.4" />
          <path d="M12 70 L18 68" strokeWidth="0.8" />
          <path d="M88 70 L82 68" strokeWidth="0.8" />
        </g>
        <g fill="currentColor" opacity="0.4">
          <circle cx="18" cy="46" r="1" />
          <circle cx="82" cy="46" r="1" />
          <circle cx="8" cy="48" r="0.8" />
          <circle cx="92" cy="48" r="0.8" />
        </g>
      </svg>
    ),
  },
};

const tabsConfig = [
  {
    key: "corporal" as const,
    label: "Cirugía\nCorporal",
    heading: "Contorno corporal\ndefinido",
    categoryName: "Cirugía Corporal",
    description: "Moldeamiento corporal, lipoescultura, liposucción y procedimientos para definir el contorno del cuerpo.",
  },
  {
    key: "mamaria" as const,
    label: "Cirugía\nMamaria",
    heading: "Mamoplastia y\nelevación",
    categoryName: "Cirugía Mamaria",
    description: "Elevación mamaria, pexia y técnicas quirúrgicas adaptadas a la anatomía de cada paciente.",
  },
  {
    key: "facial" as const,
    label: "Cirugía\nFacial",
    heading: "Armonía facial\ny expresión natural",
    categoryName: "Cirugía Facial",
    description: "Rinoplastia, blefaroplastia y lifting facial para rejuvenecer y armonizar los rasgos del rostro.",
  },
];

export default function ServiceTabs({ whatsappUrl }: { whatsappUrl: string }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <AnimateInView as="section" id="servicios-lista" className="bg-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-40 left-0 w-72 h-72 rounded-full bg-primary/[0.02] blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-96 h-96 rounded-full bg-accent/[0.02] blur-3xl pointer-events-none" aria-hidden="true" />
      <Container>
        <div className="text-center mb-14">
          <span className="inline-block text-primary font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4 border border-primary/20 rounded-full px-4 py-1.5">
            Nuestros procedimientos
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-text-dark leading-tight text-balance max-w-3xl mx-auto">
            Cirugía estética con estándares de{" "}
            <span className="text-primary">seguridad y calidad</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-14 border-b border-silver/10">
          {tabsConfig.map((tab, idx) => {
            const catStyle = categoryStyling[tab.key];
            const isActive = activeTab === idx;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-4 pb-5 border-b-2 transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "border-primary"
                    : "border-transparent hover:border-silver/30"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-br ${catStyle.gradient} text-white shadow-md`
                      : "bg-silver/10 text-text-main/40"
                  }`}
                >
                  {catStyle.icon}
                </div>
                <span className="font-heading font-bold text-sm md:text-base text-left leading-tight text-text-dark whitespace-pre-line">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {tabsConfig.map((tab, idx) => {
          if (activeTab !== idx) return null;
          const catServices = services.filter(
            (s) => s.category === tab.categoryName
          );
          const catStyle = categoryStyling[tab.key];
          return (
            <div key={tab.key} className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
              <div>
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${catStyle.gradient} text-white flex items-center justify-center mb-6 shadow-lg`}
                >
                  {catStyle.icon}
                </div>
                <h3 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-text-dark leading-tight whitespace-pre-line">
                  {tab.heading}
                </h3>
                <p className="mt-4 text-text-main/60 font-body text-base leading-relaxed max-w-lg">
                  {tab.description}
                </p>
                <div className="mt-8 flex gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-primary-dark transition-all duration-300 no-underline"
                  >
                    Consultar disponibilidad
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <ul className="space-y-2">
                  {catServices.map((service) => {
                    const href = service.href ?? service.detailUrl ?? "#";
                    return (
                      <li key={service.id}>
                        <Link
                          href={href}
                          className="group flex items-center justify-between gap-4 p-4 rounded-xl hover:bg-[#FBFBF9] border border-transparent hover:border-silver/15 transition-all duration-300 no-underline"
                        >
                          <div>
                            {service.popular && (
                              <span className="inline-block mb-1 text-[10px] font-body font-bold text-accent tracking-wider uppercase">
                                Más solicitado
                              </span>
                            )}
                            <span className="block font-heading font-semibold text-text-dark text-sm md:text-base group-hover:text-primary transition-colors">
                              {service.title}
                            </span>
                            <span className="block text-xs text-text-main/50 font-body mt-0.5 leading-relaxed line-clamp-1">
                              {service.description}
                            </span>
                          </div>
                          <svg className="w-4 h-4 text-text-main/30 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}

        <div className="mt-16 text-center max-w-xl mx-auto p-8 bg-[#FBFBF9] rounded-2xl border border-silver/20">
          <p className="text-sm text-text-main/70 font-body">
            ¿No encuentras lo que buscas?{" "}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Contáctanos
            </a>
            , te orientaremos durante tu valoración médica.
          </p>
        </div>
      </Container>
    </AnimateInView>
  );
}
