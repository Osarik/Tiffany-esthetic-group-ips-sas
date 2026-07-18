"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import AnimateInView from "@/components/ui/AnimateInView";
import { services } from "@/data/services";
import BodyContourSvg from "@/components/icons/BodyContourSvg";
import HerniaSvg from "@/components/icons/HerniaSvg";
import MammaplastySvg from "@/components/icons/MammaplastySvg";
import LipectomySvg from "@/components/icons/LipectomySvg";
import MamariaSvg from "@/components/icons/MamariaSvg";
import FacialSvg from "@/components/icons/FacialSvg";
import EyeSvg from "@/components/icons/EyeSvg";
import GinecomastiaSvg from "@/components/icons/GinecomastiaSvg";

const categoryConfig: Record<string, { gradient: string; label: string; iconBg: string; border: string }> = {
  corporal: {
    gradient: "from-[#0F4A44] to-[#2FA79C]",
    label: "Cirugía Corporal",
    iconBg: "bg-[#0F4A44]/10",
    border: "border-[#0F4A44]/20",
  },
  mamaria: {
    gradient: "from-[#B76E79] to-[#D48995]",
    label: "Cirugía Mamaria",
    iconBg: "bg-[#B76E79]/10",
    border: "border-[#B76E79]/20",
  },
  facial: {
    gradient: "from-[#4A8DB7] to-[#6DB3D9]",
    label: "Cirugía Facial",
    iconBg: "bg-[#4A8DB7]/10",
    border: "border-[#4A8DB7]/20",
  },
};

const categoryIcons: Record<string, React.ReactNode> = {
  corporal: (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" aria-hidden="true">
      <path d="M24 4C19.4 4 15.5 6.5 13.5 10.5C11.5 14.5 11.5 19.5 13.5 24C14.5 26.2 16 28.2 17.5 30C18.5 31.2 19.5 32.5 20 34C20.5 35.5 20.5 37 20.5 38.5C20.5 40 20.5 42 20.5 44H27.5C27.5 42 27.5 40 27.5 38.5C27.5 37 27.5 35.5 28 34C28.5 32.5 29.5 31.2 30.5 30C32 28.2 33.5 26.2 34.5 24C36.5 19.5 36.5 14.5 34.5 10.5C32.5 6.5 28.6 4 24 4Z" fill="currentColor" opacity="0.28"/>
      <path d="M24 10C21 10 18.5 11.8 17.5 14.5C16.5 17.2 16.5 20.5 17.5 23C18 24.2 18.8 25.3 19.5 26.5C20 27.3 20.3 28 20.3 29C20.3 30 20.3 31 20.3 32H27.7C27.7 31 27.7 30 27.7 29C27.7 28 28 27.3 28.5 26.5C29.2 25.3 30 24.2 30.5 23C31.5 20.5 31.5 17.2 30.5 14.5C29.5 11.8 27 10 24 10Z" fill="currentColor" opacity="0.15"/>
      <circle cx="24" cy="38" r="6" fill="currentColor" opacity="0.2"/>
      <path d="M14 16C14 16 17 20 24 20C31 20 34 16 34 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.35"/>
    </svg>
  ),
  mamaria: (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" aria-hidden="true">
      <path d="M16 10C12 10 8 13 7 17C6 21 7 25 9 27.5C11 30 14 31 16 31.5C17 31.7 18 31.8 19 31.5C20 31.2 21 30.5 22 29.5C23 28.5 24 27 24 26C24 27 25 28.5 26 29.5C27 30.5 28 31.2 29 31.5C30 31.8 31 31.7 32 31.5C34 31 37 30 39 27.5C41 25 42 21 41 17C40 13 36 10 32 10" fill="currentColor" opacity="0.28"/>
      <path d="M12 14C10.5 16 10 19 11 21.5C12 24 14 25.5 16 26C17 26.3 18 26.3 18.5 25.5C19 24.7 19 23 18.5 21.5C18 20 17 18.5 16 17.5C15 16.5 14 16 13 17C12 18 12 19.5 12 21C12 22.5 12.5 24 13.5 25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
      <path d="M36 14C37.5 16 38 19 37 21.5C36 24 34 25.5 32 26C31 26.3 30 26.3 29.5 25.5C29 24.7 29 23 29.5 21.5C30 20 31 18.5 32 17.5C33 16.5 34 16 35 17C36 18 36 19.5 36 21C36 22.5 35.5 24 34.5 25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
    </svg>
  ),
  facial: <FacialSvg />,
};

const tabsConfig = [
  { key: "corporal" as const, label: "Cirugía Corporal", categoryName: "Cirugía Corporal" },
  { key: "mamaria" as const, label: "Cirugía Mamaria", categoryName: "Cirugía Mamaria" },
  { key: "facial" as const, label: "Cirugía Facial", categoryName: "Cirugía Facial" },
];

const SvgIcon = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 64 64" fill="none" className="w-5 h-5" aria-hidden="true" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const procedureIcons: Record<string, React.ReactNode> = {
  lipoescultura: <BodyContourSvg />,
  lipectomia: <BodyContourSvg />,
  "lipo-lipectomia": <BodyContourSvg />,
  "lipo-lipectomia-senos": <LipectomySvg />,
  "lipo-lipectomia-pexia-periareolar": <MammaplastySvg />,
  "lipo-lipectomia-pexia": <MammaplastySvg />,
  hernia: <HerniaSvg />,
  "mamoplastia-aumento-rinoplastia": <MamariaSvg />,
  "mamoplastia-aumento": <MamariaSvg />,
  gigantomastia: <MamariaSvg />,
  ginecomastia: <GinecomastiaSvg />,
  "pexia-reconstructiva": <MammaplastySvg />,
  pexia: <MammaplastySvg />,
  "pexia-periareolar": <MammaplastySvg />,
  "lipo-pexia-periareolar": <MammaplastySvg />,
  "lipo-pexia": <MammaplastySvg />,
  "lipo-protesis-aumento": <MamariaSvg />,
  "lipectomia-pexia": <MammaplastySvg />,
  "ritidoplastia-completa": (
    <SvgIcon>
      <ellipse cx="32" cy="34" rx="16" ry="18" opacity="0.2" />
      <path d="M16 22c-.5-3 1-6 3-8" opacity="0.5" />
      <path d="M48 22c.5-3-1-6-3-8" opacity="0.5" />
      <path d="M20 26c2 3 5.5 5 10 5.5" />
      <path d="M44 26c-2 3-5.5 5-10 5.5" />
      <path d="M22 30l-8-2" />
      <path d="M42 30l8-2" />
      <circle cx="24" cy="28" r="2.5" />
      <circle cx="40" cy="28" r="2.5" />
      <path d="M22 42c3 4 6 6 10 6s7-2 10-6" />
    </SvgIcon>
  ),
  "ritidoplastia-tercio-medio": (
    <SvgIcon>
      <ellipse cx="32" cy="34" rx="16" ry="18" opacity="0.2" />
      <path d="M16 22c-.5-3 1-6 3-8" opacity="0.35" />
      <path d="M48 22c.5-3-1-6-3-8" opacity="0.35" />
      <path d="M20 28c2 2.5 5.5 4 10 4.5" />
      <path d="M44 28c-2 2.5-5.5 4-10 4.5" />
      <circle cx="24" cy="28" r="2.5" />
      <circle cx="40" cy="28" r="2.5" />
      <path d="M22 34l-6-1.5" opacity="0.5" />
      <path d="M42 34l6-1.5" opacity="0.5" />
    </SvgIcon>
  ),
  "ritidoplastia-tercio-inferior": (
    <SvgIcon>
      <ellipse cx="32" cy="34" rx="16" ry="18" opacity="0.2" />
      <path d="M20 26c2 3 5.5 5 10 5.5" />
      <path d="M44 26c-2 3-5.5 5-10 5.5" />
      <circle cx="24" cy="28" r="2.5" />
      <circle cx="40" cy="28" r="2.5" />
      <path d="M22 42c3 4 6 6 10 6s7-2 10-6" />
      <path d="M16 46l4-3" opacity="0.5" />
      <path d="M48 46l-4-3" opacity="0.5" />
    </SvgIcon>
  ),
  rinoplastia: (
    <SvgIcon>
      <ellipse cx="32" cy="34" rx="16" ry="18" opacity="0.2" />
      <circle cx="24" cy="28" r="2.5" />
      <circle cx="40" cy="28" r="2.5" />
      <path d="M32 16v10" />
      <path d="M26 38c2 3 4 4.5 6 4.5s4-1.5 6-4.5" />
      <path d="M24 34c3 2 5 3 8 3s5-1 8-3" opacity="0.5" />
    </SvgIcon>
  ),
  "lipo-rinoplastia": (
    <SvgIcon>
      <path d="M32 10c-6 0-10 4-10 9v3" />
      <path d="M32 10c6 0 10 4 10 9v3" />
      <circle cx="32" cy="30" r="8" opacity="0.2" />
      <path d="M32 26v4" />
      <path d="M28 35c1 1.5 2.5 2.5 4 2.5s3-1 4-2.5" />
      <path d="M27 33c2 1 3.5 1.5 5 1.5s3-.5 5-1.5" opacity="0.5" />
      <path d="M22 38c2 3 5 5.5 10 6.5" opacity="0.4" />
      <path d="M42 38c-2 3-5 5.5-10 6.5" opacity="0.4" />
    </SvgIcon>
  ),
  "blefaroplastia-otoplastia-lipectomia": <EyeSvg />,
};

export default function ServiceTabs({ whatsappUrl }: { whatsappUrl: string }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <AnimateInView as="section" id="servicios-lista" className="bg-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-40 left-0 w-72 h-72 rounded-full bg-primary/[0.02] blur-3xl pointer-events-none" aria-hidden="true" />
      <Container>
        <div className="text-center mb-14">
          <span className="inline-block text-primary font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4 border border-primary/20 rounded-full px-4 py-1.5">
            Nuestros procedimientos
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-text-dark leading-tight text-balance max-w-3xl mx-auto">
            Explora nuestros{" "}
            <span className="text-primary">procedimientos</span>
          </h2>
          <p className="mt-4 text-text-main/60 font-body text-base max-w-xl mx-auto">
            Selecciona una categoría y encuentra el procedimiento ideal para ti
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabsConfig.map((tab, idx) => {
            const catStyle = categoryConfig[tab.key];
            const isActive = activeTab === idx;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl transition-all duration-300 cursor-pointer font-body font-semibold text-sm ${
                  isActive
                    ? `bg-gradient-to-r ${catStyle.gradient} text-white shadow-lg`
                    : "bg-silver/10 text-text-main/60 hover:bg-silver/20 hover:text-text-dark"
                }`}
              >
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center ${isActive ? "bg-white/20" : "bg-transparent"}`}>
                  {categoryIcons[tab.key]}
                </span>
                {tab.label}
              </button>
            );
          })}
        </div>

        {tabsConfig.map((tab, idx) => {
          if (activeTab !== idx) return null;
          const catServices = services.filter((s) => s.category === tab.categoryName);
          const catStyle = categoryConfig[tab.key];
          return (
            <div key={tab.key} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {catServices.map((service) => {
                const href = service.href ?? service.detailUrl ?? "#";
                return (
                  <Link
                    key={service.id}
                    href={href}
                    className="group relative bg-white rounded-2xl border border-silver/20 shadow-sm hover:shadow-xl transition-all duration-400 overflow-hidden no-underline flex flex-col"
                  >
                    <div className={`h-2 bg-gradient-to-r ${catStyle.gradient}`} />
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-3">
                        <div className={`w-10 h-10 rounded-xl ${catStyle.iconBg} flex items-center justify-center text-lg`}>
                          {procedureIcons[service.id] ?? "🔹"}
                        </div>
                        {service.popular && (
                          <span className="text-[10px] font-body font-bold text-accent tracking-wider uppercase bg-accent/5 px-2 py-1 rounded-md">
                            Popular
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading font-bold text-text-dark text-base md:text-lg group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-xs text-text-main/60 font-body leading-relaxed line-clamp-2 flex-1">
                        {service.description}
                      </p>
                      <div className="mt-4 pt-4 border-t border-silver/10 flex items-center gap-1.5 text-xs font-body font-semibold text-primary/60 group-hover:text-primary transition-colors">
                        Ver detalle
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          );
        })}

        <div className="mt-16 text-center max-w-xl mx-auto p-8 bg-[#FBFBF9] rounded-2xl border border-silver/20">
          <p className="text-sm text-text-main/70 font-body">
            ¿No encuentras lo que buscas?{" "}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="text-primary font-semibold hover:text-primary-dark transition-colors">
              Contáctanos
            </a>
            , te orientaremos durante tu valoración médica.
          </p>
        </div>
      </Container>
    </AnimateInView>
  );
}
