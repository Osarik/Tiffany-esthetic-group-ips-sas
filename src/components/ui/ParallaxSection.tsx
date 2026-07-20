"use client";

import { useRef, ReactNode } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
  image: string;
  children: ReactNode;
  className?: string;
  overlayClassName?: string;
  containerClassName?: string;
  bgPosition?: string;
}

export default function ParallaxSection({
  image,
  children,
  className,
  overlayClassName,
  containerClassName,
  bgPosition = "center",
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      ref={sectionRef}
      className={cn("relative overflow-hidden", className)}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: bgPosition,
            y,
            willChange: "transform",
          }}
        />
      </div>
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-primary-deep/85 via-primary-deep/50 to-primary-deep/20",
          overlayClassName
        )}
      />
      <div className={cn("relative z-10", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
