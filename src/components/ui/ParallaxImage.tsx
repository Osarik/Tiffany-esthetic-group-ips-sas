"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  fullWidth?: boolean;
}

export default function ParallaxImage({ src, alt, fullWidth }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    fullWidth
      ? ["translateY(-40px)", "translateY(40px)"]
      : [
          "perspective(1800px) translateZ(-120px) scale(0.94) rotateX(1deg) translateY(80px)",
          "perspective(1800px) translateZ(-120px) scale(0.94) rotateX(1deg) translateY(-80px)",
        ]
  );

  if (fullWidth) {
    return (
      <div
        ref={containerRef}
        className="w-full h-full min-h-[280px] md:min-h-[400px] overflow-hidden relative"
      >
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          style={{ transform, willChange: "transform" }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A26]/40 to-transparent" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden flex items-center justify-center"
      style={{ perspective: "1800px" }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ transform, willChange: "transform" }}
        className="w-[85%] h-[85%] object-cover rounded-2xl shadow-xl"
      />
    </div>
  );
}
