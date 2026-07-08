"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplashScreen from "./SplashScreen";

export default function SplashWrapper({ children }: { children: ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleFinish = () => {
    setShowSplash(false);
    setShowContent(true);
  };

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            exit={{ x: "-100%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100]"
          >
            <SplashScreen onFinish={handleFinish} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        key="content"
        initial={{ x: "100%" }}
        animate={{ x: showContent ? 0 : "100%" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
