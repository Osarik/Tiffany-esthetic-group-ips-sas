"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplashScreen from "./SplashScreen";

export default function SplashWrapper({ children }: { children: ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  const handleFinish = () => {
    setShowSplash(false);
  };

  useEffect(() => {
    if (!showSplash) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [showSplash]);

  return (
    <>
      {children}

      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            data-splash=""
            exit={{ x: "-100%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[1000] bg-[#FBFBF9]"
          >
            <SplashScreen onFinish={handleFinish} />
          </motion.div>
        )}
      </AnimatePresence>

      <noscript>
        <style>{`[data-splash]{display:none !important}`}</style>
      </noscript>
    </>
  );
}
