"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const VIDEOS = [
  "/videos/hero1.webm",
  "/videos/hero2.webm",
  "/videos/hero3.webm",
];

const BAR_COUNT = 7;

export default function HeroBackground() {
  const [opened, setOpened] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const animated = useRef(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const check = () => setIsDesktop(mq.matches);
    check();
    mq.addEventListener("change", check);
    return () => mq.removeEventListener("change", check);
  }, []);

  const startBlinds = () => {
    if (animated.current) return;
    animated.current = true;
    setOpened(true);
  };

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {isDesktop ? (
        <div className="grid grid-cols-3 h-full w-full">
          {VIDEOS.map((src) => (
            <video
              key={src}
              src={src}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onCanPlay={startBlinds}
              className="relative w-full h-full object-cover"
            />
          ))}
        </div>
      ) : (
        <video
          src={VIDEOS[0]}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={startBlinds}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {opened && !reduced && (
        <motion.div className="absolute inset-0 grid grid-rows-7">
          {Array.from({ length: BAR_COUNT }).map((_, i) => (
            <motion.div
              key={i}
              className="h-full w-full bg-[#0A2A26]"
              initial={{ clipPath: "inset(0 0 0% 0)" }}
              animate={{ clipPath: "inset(0 0 100% 0)" }}
              transition={{
                duration: 0.6,
                ease: [0.65, 0, 0.35, 1],
                delay: i * 0.09,
              }}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}