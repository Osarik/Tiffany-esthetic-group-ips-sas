'use client';

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function HeroTextReveal({ children, delay = 1.4 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
