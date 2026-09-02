"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const VIDEOS = [
  { src: "/videos/hero1.webm", poster: "/images/hero-poster.webp" },
  { src: "/videos/hero2.webm", poster: "/images/hero2-poster.webp" },
  { src: "/videos/hero3.webm", poster: "/images/hero3-poster.webp" },
];

const BAR_COUNT = 7;
const BLINDS_TIMEOUT_MS = 1800;

export default function HeroBackground() {
  const [opened, setOpened] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [hero1Ready, setHero1Ready] = useState(false);
  const animated = useRef(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const check = () => setIsDesktop(mq.matches);
    check();
    mq.addEventListener("change", check);
    return () => mq.removeEventListener("change", check);
  }, []);

  const startBlinds = useCallback(() => {
    if (animated.current) return;
    animated.current = true;
    setOpened(true);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(startBlinds, BLINDS_TIMEOUT_MS);
    return () => window.clearTimeout(timer);
  }, [startBlinds]);

  const handleCanPlay = (index: number) => {
    if (index === 0) setHero1Ready(true);
    startBlinds();
  };

  const preload = (index: number) =>
    index === 0 ? "auto" : hero1Ready ? "auto" : "metadata";

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {isDesktop ? (
        <div className="grid grid-cols-3 h-full w-full">
          {VIDEOS.map((video, i) => (
            <video
              key={video.src}
              src={video.src}
              poster={video.poster}
              autoPlay
              muted
              loop
              playsInline
              preload={preload(i)}
              onCanPlay={() => handleCanPlay(i)}
              className="relative w-full h-full object-cover"
            />
          ))}
        </div>
      ) : (
        <video
          src={VIDEOS[0].src}
          poster={VIDEOS[0].poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => handleCanPlay(0)}
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