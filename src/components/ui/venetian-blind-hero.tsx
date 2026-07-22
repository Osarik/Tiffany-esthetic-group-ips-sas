'use client';

import { motion, type Variants } from "framer-motion";
import { useState, useEffect } from "react";

const gridItems = [
  { type: "image" as const, src: "/images/22.webp" },
  { type: "image" as const, src: "/images/23.webp" },
  { type: "image" as const, src: "/images/19.webp" },
  { type: "video" as const, src: "/videos/instalaciones-bg.mp4" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: {
    clipPath: "inset(0)",
    transition: { duration: 1.0, ease: "easeOut" },
  },
};

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, delay: 1.2, ease: "easeOut" },
  },
};

export default function VenetianBlindHero() {
  const [expanded, setExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setExpanded(true), 2400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const showExpandedMobile = !isDesktop && expanded;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {showExpandedMobile ? (
        <motion.video
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          src={gridItems[3].src}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/22.webp"
        />
      ) : (
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 h-full gap-0"
          style={{
            gridTemplateColumns: isDesktop
              ? expanded
                ? "1fr 1fr 1fr 3fr"
                : "1fr 1fr 1fr 1fr"
              : undefined,
            transition: isDesktop ? "grid-template-columns 1s ease-out" : undefined,
          }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {gridItems.map((item, i) => (
            <motion.div
              key={i}
              className="w-full h-full overflow-hidden bg-primary-deep"
              variants={itemVariants}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster="/images/22.webp"
                />
              ) : (
                <img
                  src={item.src}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="eager"
                  draggable={false}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      )}

      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-[#0A2A26] via-[#0A2A26]/60 to-transparent"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        aria-hidden="true"
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#0A2A26]/40 to-transparent"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        aria-hidden="true"
      />
    </div>
  );
}
