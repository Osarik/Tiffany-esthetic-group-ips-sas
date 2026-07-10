"use client";

import { useEffect } from "react";

export default function ForceTopOnMount() {
  useEffect(() => {
    const prev = history.scrollRestoration;
    if (prev) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    return () => {
      if (prev) history.scrollRestoration = prev;
    };
  }, []);
  return null;
}
