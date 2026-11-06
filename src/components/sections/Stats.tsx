"use client";

import { useRef, useState, useEffect } from "react";
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
  // Arranca en el valor real: así el HTML servido (SSR) y cualquier crawler
  // o motor de IA sin JavaScript leen el dato correcto, no un cero.
  const [count, setCount] = useState(value);
  const hasAnimated = useRef(false);
  const mountedAt = useRef(0);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    // Si el bloque ya estaba en pantalla al hidratar, no lo reiniciamos a 0
    // para no provocar un parpadeo: se queda con el valor final.
    if (Date.now() - mountedAt.current < 500) {
      setCount(value);
      return;
    }

    const duration = 1000;
    const steps = 30;
    const increment = value / steps;
    let current = 0;
    setCount(0);
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.round(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span
      ref={ref}
      className="text-4xl md:text-5xl font-heading font-bold text-black"
    >
      {count}
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
              transition={{ duration: 1.0, delay: i * 0.1 }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p
                className="text-black/80 font-body text-sm md:text-base mt-2"
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
