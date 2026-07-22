"use client";

import { useRef, ReactNode } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

interface ParallaxGradientProps {
  gradientFrom: string;
  gradientTo: string;
  children: ReactNode;
  className?: string;
  overlay?: boolean;
  id?: string;
  image?: string;
  serviceTitle?: string;
}

function placeholderImage(from: string, to: string, title: string): string {
  return `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${from}"/>
          <stop offset="100%" stop-color="${to}"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#g)"/>
      <circle cx="600" cy="150" r="250" fill="rgba(255,255,255,0.04)"/>
      <circle cx="150" cy="450" r="200" fill="rgba(255,255,255,0.03)"/>
      <circle cx="400" cy="300" r="120" fill="rgba(255,255,255,0.05)"/>
      <circle cx="700" cy="500" r="80" fill="rgba(255,255,255,0.04)"/>
      <circle cx="100" cy="100" r="60" fill="rgba(255,255,255,0.04)"/>
    </svg>`
  )}`;
}

export default function ParallaxGradient({
  gradientFrom,
  gradientTo,
  children,
  className = "",
  overlay = true,
  id,
  image,
  serviceTitle,
}: ParallaxGradientProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 0.9]);

  const imgSrc =
    image && image.trim() !== ""
      ? image
      : placeholderImage(gradientFrom, gradientTo, serviceTitle ?? "");

  return (
    <section ref={sectionRef} id={id} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 w-full h-[140%] -top-[20%]"
        style={{ y, willChange: "transform" }}
      >
        <Image
          src={imgSrc}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          draggable={false}
          unoptimized
        />
      </motion.div>
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, ${gradientFrom}cc, ${gradientTo}aa)` }}
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
