"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { faqs } from "@/data/faqs";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="preguntas-frecuentes">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
            FAQ
          </span>
          <Heading as="h2" className="mt-3">
            Preguntas Frecuentes
          </Heading>
          <p className="mt-4 text-text-main font-body">
            Todo lo que necesitas saber antes de tu procedimiento.
          </p>
        </div>

        <dl className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-2xl border transition-colors duration-300 ${
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
                  <span className="font-body font-semibold text-text-dark text-sm pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
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
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-text-main font-body leading-relaxed border-t border-silver/10 pt-4">
                      {faq.answer}
                    </p>
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
