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
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  return (
    <section
      ref={sectionRef}
      className={cn("relative overflow-hidden", className)}
    >
      <motion.div
        className="absolute inset-0 w-full h-[150%] -top-[25%]"
        style={{ y, willChange: "transform" }}
      >
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
          draggable={false}
        />
      </motion.div>
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
