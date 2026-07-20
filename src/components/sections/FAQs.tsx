"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { faqs } from "@/data/faqs";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="preguntas-frecuentes" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg className="absolute bottom-0 w-full h-48 md:h-72" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
          <path fill="#0F4A44" fillOpacity="0.6" d="M0,192 C320,320 640,64 960,192 C1280,320 1440,160 1440,160 L1440,320 L0,320 Z" />
        </svg>
        <svg className="absolute bottom-0 w-full h-48 md:h-72" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
          <path fill="#1B6E66" fillOpacity="0.35" d="M0,224 C240,96 480,288 720,160 C960,32 1200,224 1440,128 L1440,320 L0,320 Z" />
        </svg>
        <svg className="absolute bottom-0 w-full h-48 md:h-72" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
          <path fill="#2FA79C" fillOpacity="0.15" d="M0,256 C160,160 320,320 480,224 C640,128 800,288 960,192 C1120,96 1280,256 1440,192 L1440,320 L0,320 Z" />
        </svg>
      </div>
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
            FAQ
          </span>
          <Heading as="h2" className="mt-3">
            Preguntas Frecuentes
          </Heading>
          <p className="mt-4 text-text-main font-body">
            Todo lo que necesitas saber antes de tu procedimiento.
          </p>
        </motion.div>

        <dl className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
               className={`rounded-2xl border transition-colors duration-[600] ${
                 openIndex === i
                   ? "border-primary/30 bg-primary/[0.03]"
                   : "border-silver/20 bg-white"
               }`}
            >
              <dt>
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-2xl cursor-pointer"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-body font-semibold text-text-dark text-sm pr-4" itemProp="name">
                    {faq.question}
                  </span>
                  <svg
                     className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-[600] ${
                       openIndex === i ? "rotate-180" : ""
                     }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </dt>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.dd
                    id={`faq-answer-${i}`}
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="overflow-hidden"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <div itemProp="text">
                      <p className="px-6 pb-5 text-sm text-text-main font-body leading-relaxed border-t border-silver/10 pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.dd>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
