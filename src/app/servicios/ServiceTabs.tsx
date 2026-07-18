"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import AnimateInView from "@/components/ui/AnimateInView";
import { services } from "@/data/services";

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
      <path d="M24 4C16 4 10 10 8 18C6 26 8 34 14 40C18 44 22 46 24 48C26 46 30 44 34 40C40 34 42 26 40 18C38 10 32 4 24 4Z" fill="currentColor" opacity="0.3"/>
      <path d="M24 14C19 14 15 18 13 23C11 28 12 33 15 36C17 38 20 39 22 40C22 40 24 38 24 38C24 38 26 40 26 40C28 39 31 38 33 36C36 33 37 28 35 23C33 18 29 14 24 14Z" fill="currentColor" opacity="0.2"/>
    </svg>
  ),
  mamaria: (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" aria-hidden="true">
      <path d="M24 8C20 8 16 10 13 14C10 18 9 22 10 26C11 28 13 30 16 31C18 32 20 33 22 34C23 35 24 36 24 38C24 36 25 35 26 34C28 33 30 32 32 31C35 30 37 28 38 26C39 22 38 18 35 14C32 10 28 8 24 8Z" fill="currentColor" opacity="0.3"/>
      <ellipse cx="18" cy="22" rx="5" ry="7" fill="currentColor" opacity="0.15"/>
      <ellipse cx="30" cy="22" rx="5" ry="7" fill="currentColor" opacity="0.15"/>
    </svg>
  ),
  facial: (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" aria-hidden="true">
      <path d="M24 6C16 6 10 12 8 20C6 28 8 36 12 40C14 42 18 44 22 45C22 46 22 47 22 47L24 46L26 47C26 46 26 45 26 45C30 44 34 42 36 40C40 36 42 28 40 20C38 12 32 6 24 6Z" fill="currentColor" opacity="0.3"/>
      <ellipse cx="18" cy="20" rx="3" ry="2.5" fill="currentColor" opacity="0.2"/>
      <ellipse cx="30" cy="20" rx="3" ry="2.5" fill="currentColor" opacity="0.2"/>
      <path d="M18 28C20 31 22 32 24 32C26 32 28 31 30 28" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3"/>
    </svg>
  ),
};

const tabsConfig = [
  { key: "corporal" as const, label: "Cirugía Corporal", categoryName: "Cirugía Corporal" },
  { key: "mamaria" as const, label: "Cirugía Mamaria", categoryName: "Cirugía Mamaria" },
  { key: "facial" as const, label: "Cirugía Facial", categoryName: "Cirugía Facial" },
];

const procedureIcons: Record<string, React.ReactNode> = {
  lipoescultura: "🔄",
  lipectomia: "✂️",
  "lipo-lipectomia": "⬆️",
  "lipo-lipectomia-senos": "🔄",
  "lipo-lipectomia-pexia-periareolar": "🔄",
  "lipo-lipectomia-pexia": "🔄",
  hernia: "🔧",
  "mamoplastia-aumento-rinoplastia": "🔄",
  "mamoplastia-aumento": "📐",
  gigantomastia: "⬇️",
  ginecomastia: "👨",
  "pexia-reconstructiva": "⬆️",
  pexia: "⬆️",
  "pexia-periareolar": "⬆️",
  "lipo-pexia-periareolar": "🔄",
  "lipo-pexia": "🔄",
  "lipo-protesis-aumento": "🔄",
  "lipectomia-pexia": "🔄",
  "ritidoplastia-completa": "✨",
  "ritidoplastia-tercio-medio": "✨",
  "ritidoplastia-tercio-inferior": "✨",
  rinoplastia: "👃",
  "lipo-rinoplastia": "🔄",
  "blefaroplastia-otoplastia-lipectomia": "🔄",
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
