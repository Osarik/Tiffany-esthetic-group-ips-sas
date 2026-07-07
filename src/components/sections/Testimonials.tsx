"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <Section id="testimonios" className="relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none hidden lg:flex">
        <div className="text-primary/[0.08]">
          <svg width="480" height="480" viewBox="0 0 60 60" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="4" />
            <rect x="22.5" y="2" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="4" />
            <rect x="43" y="2" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="4" />
            <rect x="2" y="22.5" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="4" />
            <circle cx="30" cy="30" r="8.5" fill="currentColor" />
            <rect x="43" y="22.5" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="4" />
            <rect x="2" y="43" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="4" />
            <rect x="22.5" y="43" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="4" />
            <rect x="43" y="43" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <div className="text-center mb-16 relative z-10">
        <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
          Testimonios
        </span>
        <Heading as="h2" className="mt-3">
          Lo que dicen nuestros pacientes
        </Heading>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative bg-white rounded-2xl p-8 border border-silver/20 shadow-sm"
          >
            <svg
              className="absolute top-4 left-6 w-8 h-8 text-primary/10"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <div className="relative">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg
                    key={s}
                    className={`w-4 h-4 ${
                      s < t.rating ? "text-yellow-400" : "text-silver"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-main font-body leading-relaxed mb-4 text-sm">
                &ldquo;{t.text}&rdquo;
              </p>
              <footer>
                <strong className="block font-body font-semibold text-text-dark text-sm">
                  {t.name}
                </strong>
                <span className="text-xs text-primary font-body">
                  {t.procedure}
                </span>
              </footer>
            </div>
          </motion.blockquote>
        ))}
      </div>
    </Section>
  );
}
