"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Slide = {
  src: string;
  label: string;
};

type ImageCarouselProps = {
  slides: Slide[];
  autoPlayInterval?: number;
};

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
};

export default function ImageCarousel({
  slides,
  autoPlayInterval = 4000,
}: ImageCarouselProps) {
  const [[index, dir], setPage] = useState([0, 0]);
  const [paused, setPaused] = useState(false);
  const indexRef = useRef(index);
  indexRef.current = index;

  const goTo = useCallback(
    (next: number) => setPage([next, next > indexRef.current ? 1 : -1]),
    []
  );

  const next = useCallback(
    () => goTo((indexRef.current + 1) % slides.length),
    [slides.length, goTo]
  );

  const prev = useCallback(
    () => goTo((indexRef.current - 1 + slides.length) % slides.length),
    [slides.length, goTo]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, autoPlayInterval);
    return () => clearInterval(id);
  }, [paused, next, autoPlayInterval]);

  const slide = slides[index];

  return (
    <div
      className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg bg-silver/10 select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="aspect-[16/10] md:aspect-[16/9] relative">
        <AnimatePresence custom={dir} mode="wait">
          <motion.img
            key={slide.src}
            src={slide.src}
            alt={slide.label}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A26]/60 via-transparent to-transparent pointer-events-none" />

        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 pointer-events-none">
          <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2.5 inline-block border border-white/10">
            <p className="text-white font-body text-sm font-semibold">
              {slide.label}
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm text-[#0F4A44] flex items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-md cursor-pointer z-10"
        aria-label="Anterior"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm text-[#0F4A44] flex items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-md cursor-pointer z-10"
        aria-label="Siguiente"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="absolute bottom-5 right-5 md:bottom-7 md:right-7 flex gap-2 z-10">
        {slides.map((s, i) => (
          <button
            key={s.src}
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
              i === index
                ? "bg-white w-6"
                : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Ir a imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
