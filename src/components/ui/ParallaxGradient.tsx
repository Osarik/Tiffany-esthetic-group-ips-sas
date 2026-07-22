"use client";

import { useRef, ReactNode } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface ParallaxGradientProps {
  gradientFrom: string;
  gradientTo: string;
  children: ReactNode;
  className?: string;
  overlay?: boolean;
  id?: string;
}

export default function ParallaxGradient({
  gradientFrom,
  gradientTo,
  children,
  className = "",
  overlay = true,
  id,
}: ParallaxGradientProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.8, 0.6]);

  return (
      <section ref={sectionRef} id={id} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={{ scale, opacity, background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`, willChange: "transform" }}
      />
      {overlay && (
        <div className="absolute inset-0 bg-white/85" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
