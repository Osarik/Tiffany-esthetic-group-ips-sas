"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

interface IdleScrollHintProps {
  rootRef: React.RefObject<HTMLElement | null>;
  idleMs?: number;
}

export function IdleScrollHint({
  rootRef,
  idleMs = 1500,
}: IdleScrollHintProps) {
  const [visible, setVisible] = useState(false);
  const [inView, setInView] = useState(false);
  const lastActivityRef = useRef(Date.now());
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const onActivity = () => {
      lastActivityRef.current = Date.now();
      setVisible(false);
    };

    window.addEventListener("scroll", onActivity, { passive: true });
    window.addEventListener("wheel", onActivity, { passive: true });
    window.addEventListener("touchmove", onActivity, { passive: true });
    window.addEventListener("keydown", onActivity);

    const checkInterval = window.setInterval(() => {
      if (
        inView &&
        Date.now() - lastActivityRef.current > idleMs
      ) {
        setVisible(true);
      }
    }, 250);

    return () => {
      window.removeEventListener("scroll", onActivity);
      window.removeEventListener("wheel", onActivity);
      window.removeEventListener("touchmove", onActivity);
      window.removeEventListener("keydown", onActivity);
      window.clearInterval(checkInterval);
    };
  }, [inView, idleMs]);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setInView(entries[0].isIntersecting);
      },
      { rootMargin: "-15% 0px -15% 0px", threshold: 0 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootRef]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center"
    >
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="relative"
          >
            {!reducedMotion && (
              <motion.span
                animate={{
                  scale: [1, 2],
                  opacity: [0.45, 0],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.2,
                }}
                className="absolute inset-0 rounded-full bg-primary/40"
              />
            )}
            <motion.span
              animate={
                reducedMotion
                  ? undefined
                  : { y: [0, 7, 0] }
              }
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/40"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}