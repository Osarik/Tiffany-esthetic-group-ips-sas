"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";
import {
  Scissors,
  Activity,
  Heart,
  Eye,
  Sparkles,
  Droplets,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const serviceIcons: Record<string, React.ReactNode> = {
  lipoescultura: <Scissors size={18} />,
  "liposuccion-lipectomia": <Activity size={18} />,
  "liposuccion-pexia-mamaria": <Activity size={18} />,
  "liposuccion-aumento": <Droplets size={18} />,
  pexia: <Heart size={18} />,
  rinoplastia: <Eye size={18} />,
  blefaroplastia: <Eye size={18} />,
  "lifting-facial": <Sparkles size={18} />,
};

const serviceImages: Record<string, string> = {
  lipoescultura:
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&h=1000&fit=crop",
  "liposuccion-lipectomia":
    "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&h=1000&fit=crop",
  "liposuccion-pexia-mamaria":
    "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&h=1000&fit=crop",
  "liposuccion-aumento":
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&h=1000&fit=crop",
  pexia:
    "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&h=1000&fit=crop",
  rinoplastia:
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&h=1000&fit=crop",
  blefaroplastia:
    "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=800&h=1000&fit=crop",
  "lifting-facial":
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&h=1000&fit=crop",
};

const AUTO_PLAY_INTERVAL = 5000;
const ITEM_HEIGHT = 70;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function ServicesCarousel() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex =
    ((step % services.length) + services.length) % services.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const prevStep = useCallback(() => {
    setStep((prev) => prev - 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + services.length) % services.length;
    if (diff > 0) setStep((s) => s + diff);
    if (diff < 0) setStep((s) => s - Math.abs(diff));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = services.length;

    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <section id="servicios" className="w-full py-16 md:py-24">
      <div className="text-center mb-12 px-4">
        <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
          Nuestros Servicios
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mt-3">
          Procedimientos quirúrgicos personalizados
        </h2>
        <p className="mt-4 text-text-main font-body max-w-2xl mx-auto text-sm md:text-base">
          Ofrecemos procedimientos corporales, mamarios y faciales con
          valoración médica, personal calificado y acompañamiento profesional.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto md:p-8">
        <div className="relative overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] flex flex-col lg:flex-row min-h-[600px] lg:aspect-video border border-primary/20">
          <div className="w-full lg:w-[40%] min-h-[350px] md:min-h-[450px] lg:h-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-8 md:px-16 lg:pl-16 bg-gradient-to-br from-primary via-primary-dark to-primary-deep">
            <div className="absolute inset-x-0 top-0 h-12 md:h-20 lg:h-16 bg-gradient-to-b from-primary via-primary/80 to-transparent z-40" />
            <div className="absolute inset-x-0 bottom-0 h-12 md:h-20 lg:h-16 bg-gradient-to-t from-primary-deep via-primary-dark/80 to-transparent z-40" />
            <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20">
              {services.map((service, index) => {
                const isActive = index === currentIndex;
                const distance = index - currentIndex;
                const wrappedDistance = wrap(
                  -(services.length / 2),
                  services.length / 2,
                  distance
                );

                return (
                  <motion.div
                    key={service.id}
                    style={{
                      height: ITEM_HEIGHT,
                      width: "fit-content",
                    }}
                    animate={{
                      y: wrappedDistance * ITEM_HEIGHT,
                      opacity: 1 - Math.abs(wrappedDistance) * 0.25,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 90,
                      damping: 22,
                      mass: 1,
                    }}
                    className="absolute flex items-center justify-start"
                  >
                    <button
                      onClick={() => handleChipClick(index)}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      className={cn(
                        "relative flex items-center gap-3 px-6 md:px-10 lg:px-8 py-3 md:py-3.5 lg:py-3 rounded-full transition-all duration-700 text-left group border",
                        isActive
                          ? "bg-clinic-bg text-primary border-clinic-bg z-10 shadow-lg"
                          : "bg-transparent text-white/60 border-white/20 hover:border-white/40 hover:text-white"
                      )}
                    >
                      <div
                        className={cn(
                          "flex items-center justify-center transition-colors duration-500",
                          isActive ? "text-primary" : "text-white/40"
                        )}
                      >
                        {serviceIcons[service.id]}
                      </div>

                      <div className="flex flex-col">
                        <span className="text-[10px] font-body font-semibold opacity-60 uppercase tracking-wider leading-none">
                          {service.category}
                        </span>
                        <span className="font-normal text-sm md:text-[15px] tracking-tight whitespace-nowrap mt-0.5">
                          {service.title}
                        </span>
                      </div>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="flex-1 min-h-[500px] md:min-h-[600px] lg:h-full relative bg-primary-soft/50 flex items-center justify-center py-16 md:py-24 lg:py-16 px-6 md:px-12 lg:px-10 overflow-hidden border-t lg:border-t-0 lg:border-l border-primary/20">
            {/* Navigation arrows */}
            <button
              onClick={() => { setIsPaused(true); prevStep(); setTimeout(() => setIsPaused(false), 5000); }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/90 hover:bg-primary text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Servicio anterior"
            >
              <ChevronLeft size={20} className="md:w-6 md:h-6" />
            </button>
            <button
              onClick={() => { setIsPaused(true); nextStep(); setTimeout(() => setIsPaused(false), 5000); }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/90 hover:bg-primary text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Siguiente servicio"
            >
              <ChevronRight size={20} className="md:w-6 md:h-6" />
            </button>

            <div className="relative w-full max-w-[420px] flex flex-col items-center gap-6">
              <div className="relative w-full aspect-[4/5] flex items-center justify-center">
              {services.map((service, index) => {
                const status = getCardStatus(index);
                const isActive = status === "active";
                const isPrev = status === "prev";
                const isNext = status === "next";
                const serviceHref = service.href ?? service.detailUrl;

                return (
                  <motion.div
                    key={service.id}
                    initial={false}
                    animate={{
                      x: isActive ? 0 : isPrev ? -100 : isNext ? 100 : 0,
                      scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                      opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                      rotate: isPrev ? -3 : isNext ? 3 : 0,
                      zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 25,
                      mass: 0.8,
                    }}
                    className="absolute inset-0 rounded-[2rem] md:rounded-[2.8rem] overflow-hidden border-4 md:border-8 border-clinic-bg bg-clinic-bg origin-center"
                  >
                    <img
                      src={serviceImages[service.id]}
                      alt={service.title}
                      className={cn(
                        "w-full h-full object-cover transition-all duration-700",
                        isActive
                          ? "grayscale-0 blur-0"
                          : "grayscale blur-[2px] brightness-75"
                      )}
                    />

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute inset-x-0 bottom-0 p-8 pt-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end pointer-events-none"
                        >
                          <div className="bg-clinic-bg text-text-dark px-4 py-1.5 rounded-full text-[11px] font-normal uppercase tracking-[0.2em] w-fit shadow-lg mb-3 border border-primary/20">
                            {index + 1} · {service.category}
                          </div>
                          <h3 className="text-white font-heading font-bold text-xl md:text-2xl leading-tight drop-shadow-md tracking-tight mb-2">
                            {service.title}
                          </h3>
                          <p className="text-white/80 font-body text-sm md:text-base leading-relaxed drop-shadow-md">
                            {service.description}
                          </p>
                          {serviceHref && (
                            <Link
                              href={serviceHref}
                              className="pointer-events-auto mt-4 inline-flex items-center gap-2 text-sm font-body font-semibold text-clinic-bg hover:text-white transition-colors group/link"
                              aria-label={`Más información sobre ${service.title}`}
                            >
                              Ver información médica
                              <ArrowRight
                                size={16}
                                className="transition-transform duration-300 group-hover/link:translate-x-1"
                              />
                            </Link>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div
                      className={cn(
                        "absolute top-6 left-6 flex items-center gap-2 transition-opacity duration-300",
                        isActive ? "opacity-100" : "opacity-0"
                      )}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#2FA79C]" />
                      <span className="text-white/70 text-[10px] font-normal uppercase tracking-[0.25em]">
                        Procedimiento
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

              <Link
                href="/servicios"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-body font-bold text-lg shadow-lg hover:bg-primary-dark hover:shadow-xl active:scale-95 transition-all duration-300 w-fit"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                Ver Servicios
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesCarousel;
