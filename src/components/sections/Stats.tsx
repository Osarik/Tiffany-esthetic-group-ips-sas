"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 3, suffix: "", label: "Salas de cirugía" },
  { value: 1, suffix: "", label: "Área de recuperación" },
  { value: 1, suffix: "", label: "Farmacia habilitada" },
  { value: 100, suffix: "%", label: "Personal calificado" },
];

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <span
      ref={ref}
      className="text-4xl md:text-5xl font-heading font-bold text-primary"
      style={{ WebkitTextStroke: "1px white" }}
    >
      {isInView ? value : 0}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <div
      className="bg-gradient-to-r from-primary to-secondary py-16 md:py-20 animate-wave"
      style={{ backgroundSize: "200% 100%" }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p
                className="text-white/90 font-body text-sm md:text-base mt-2"
                style={{ WebkitTextStroke: "0.5px #2FA79C" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
