"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const cases = [
  { id: "case1", beforeLabel: "Antes", afterLabel: "Después", beforeSrc: "/images/lpo + lipec + amuento/LLA1.webp", afterSrc: "/images/lpo + lipec + amuento/LLA1r.webp" },
  { id: "case2", beforeLabel: "Antes", afterLabel: "Después", beforeSrc: "/images/lpo + lipec + amuento/LLA2.webp", afterSrc: "/images/lpo + lipec + amuento/LLA2r.webp" },
  { id: "case3", beforeLabel: "Antes", afterLabel: "Después", beforeSrc: "/images/Lipo escultura/le1.webp", afterSrc: "/images/Lipo escultura/le1r.webp" },
];

export default function BeforeAfter() {
  return (
    <Section dark id="resultados">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
          Resultados Reales
        </span>
        <Heading as="h2" className="mt-3">
          Antes y después de nuestros pacientes
        </Heading>
        <p className="mt-4 text-text-main font-body max-w-2xl mx-auto">
          Resultados naturales y reales de pacientes reales. Desliza la barra
          para ver la transformación.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.0, delay: i * 0.1 }}
          >
            <BeforeAfterSlider
              beforeSrc={c.beforeSrc}
              afterSrc={c.afterSrc}
              beforeLabel={c.beforeLabel}
              afterLabel={c.afterLabel}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
