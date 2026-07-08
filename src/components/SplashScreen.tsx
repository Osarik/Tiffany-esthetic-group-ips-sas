"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
  "https://images.unsplash.com/photo-1551076805-e1869033e561?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=200&h=200&fit=crop&crop=face",
];

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [phase, setPhase] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handle = () => setIsMobile(window.innerWidth < 640);
    handle();
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  const finish = useCallback(() => {
    sessionStorage.setItem("splash-seen", "true");
    onFinish();
  }, [onFinish]);

  useEffect(() => {
    if (sessionStorage.getItem("splash-seen")) {
      onFinish();
      return;
    }
    const t1 = setTimeout(() => setPhase(1), 1800);
    const t2 = setTimeout(() => setPhase(2), 3200);
    const t3 = setTimeout(() => setPhase(3), 4400);
    const t4 = setTimeout(() => setPhase(4), 5600);
    const t5 = setTimeout(finish, 6600);
    return () => {
      clearTimeout(t1); clearTimeout(t2);
      clearTimeout(t3); clearTimeout(t4); clearTimeout(t5);
    };
  }, [onFinish, finish]);

  const m = isMobile ? 0.7 : 1; // mobile multiplier for positions
  const imgSize = isMobile ? 70 : 135;

  // Phase 3 positions as % offset from center (50%, 50%)
  const pos = [
    { l: 50 + (-18 * m), t: 50 + (-18 * m) },
    { l: 50 + (18 * m), t: 50 + (-18 * m) },
    { l: 50 + (-22 * m), t: 50 + (3 * m) },
    { l: 50 + (22 * m), t: 50 + (3 * m) },
    { l: 50 + (-12 * m), t: 50 + (22 * m) },
    { l: 50 + (12 * m), t: 50 + (22 * m) },
  ];

  // Phase 4 exit positions as % offset from center
  const exitPos = [
    { l: -20, t: -20 },
    { l: 120, t: -20 },
    { l: -20, t: 50 },
    { l: 120, t: 50 },
    { l: -20, t: 120 },
    { l: 120, t: 120 },
  ];

  return (
    <div className="flex items-center justify-center bg-[#FBFBF9] w-full h-dvh">
      {phase < 3 && (
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <div className="relative flex items-center justify-center w-20 h-20 md:w-[120px] md:h-[120px]">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={
                phase === 0
                  ? { scale: 0 }
                  : phase === 1
                  ? { scale: 1 }
                  : { scale: 0, opacity: 0 }
              }
              transition={
                phase === 0
                  ? { duration: 1.8, ease: [0.16, 1, 0.3, 1] }
                  : { duration: 0.5, ease: "easeIn" }
              }
            >
              <motion.div
                animate={
                  phase === 1
                    ? { rotate: 360 }
                    : { rotate: 0 }
                }
                transition={
                  phase === 1
                    ? { duration: 3, repeat: Infinity, ease: "linear" }
                    : { duration: 0.3 }
                }
                className="w-full h-full"
              >
                <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect x="2" y="2" width="15" height="15" rx="3" stroke="#2FA79C" strokeWidth="4" />
                  <rect x="22.5" y="2" width="15" height="15" rx="3" stroke="#2FA79C" strokeWidth="4" />
                  <rect x="43" y="2" width="15" height="15" rx="3" stroke="#2FA79C" strokeWidth="4" />
                  <rect x="2" y="22.5" width="15" height="15" rx="3" stroke="#2FA79C" strokeWidth="4" />
                  <rect x="43" y="22.5" width="15" height="15" rx="3" stroke="#2FA79C" strokeWidth="4" />
                  <rect x="2" y="43" width="15" height="15" rx="3" stroke="#2FA79C" strokeWidth="4" />
                  <rect x="22.5" y="43" width="15" height="15" rx="3" stroke="#2FA79C" strokeWidth="4" />
                  <rect x="43" y="43" width="15" height="15" rx="3" stroke="#2FA79C" strokeWidth="4" />
                </svg>
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-[#2FA79C] rounded-full"
              style={{ width: 17, height: 17, position: "relative", zIndex: 2 }}
              animate={
                phase < 2
                  ? { scale: 1 }
                  : { scale: isMobile ? 10 : 30, opacity: phase >= 3 ? 0 : 1 }
              }
              transition={
                phase < 2
                  ? { duration: 1.8, ease: [0.16, 1, 0.3, 1] }
                  : { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
              }
            />
          </div>

          <AnimatePresence>
            {phase === 1 && (
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="font-script text-[#2FA79C] text-2xl md:text-3xl mt-8 md:mt-12"
              >
                Bienvenidos
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      )}

      {(phase === 3 || phase === 4) && (
        <div className="fixed inset-0">
          {IMAGES.map((url, i) => (
            <motion.div
              key={i}
              initial={{
                left: "50%",
                top: "50%",
                x: "-50%",
                y: "-50%",
                scale: 0,
                opacity: 0,
              }}
              animate={
                phase === 3
                  ? {
                      left: `${pos[i].l}%`,
                      top: `${pos[i].t}%`,
                      x: "-50%",
                      y: "-50%",
                      scale: 1,
                      opacity: 1,
                    }
                  : {
                      left: `${exitPos[i].l}%`,
                      top: `${exitPos[i].t}%`,
                      x: "-50%",
                      y: "-50%",
                      scale: 0.3,
                      opacity: 0,
                    }
              }
              transition={
                phase === 3
                  ? { duration: 1.2, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }
                  : { duration: 0.9, ease: "easeIn" }
              }
              style={{ width: imgSize, height: imgSize, position: "absolute" }}
              className="rounded-full overflow-hidden border-[3px] md:border-[4px] border-white shadow-xl"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${url})` }}
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
