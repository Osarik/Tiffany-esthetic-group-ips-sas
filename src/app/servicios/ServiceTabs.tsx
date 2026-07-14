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
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="5" r="3" />
        <path d="M12 8v6" />
        <path d="M6 18c0-3 6-4 6-4s6 1 6 4" />
        <path d="M4 20c1-2 4-3 8-3s7 1 8 3" opacity="0.4" />
      </svg>
    ),
  },
  mamaria: {
    gradient: "from-[#B76E79] to-[#D48995]",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 12c0-3 2-6 6-6s6 3 6 6" />
        <path d="M9 12c0-3 2-6 6-6s6 3 6 6" />
        <circle cx="6" cy="12" r="0.5" fill="currentColor" opacity="0.5" />
        <circle cx="18" cy="12" r="0.5" fill="currentColor" opacity="0.5" />
      </svg>
    ),
  },
  facial: {
    gradient: "from-[#4A8DB7] to-[#6DB3D9]",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <circle cx="9" cy="10" r="1.2" fill="currentColor" />
        <circle cx="15" cy="10" r="1.2" fill="currentColor" />
        <path d="M8 14.5c1.5 2 4.5 2 6.5 1" strokeWidth="1.5" />
        <path d="M20 12h2M2 12h2M12 2v2M12 20v2" opacity="0.3" strokeWidth="1" />
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
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
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
