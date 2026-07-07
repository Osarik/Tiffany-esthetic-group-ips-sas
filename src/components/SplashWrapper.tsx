"use client";

import { useState, ReactNode } from "react";
import SplashScreen from "./SplashScreen";

export default function SplashWrapper({ children }: { children: ReactNode }) {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {!showContent && <SplashScreen onFinish={() => setShowContent(true)} />}
      <div style={{ display: showContent ? "" : "none" }}>{children}</div>
    </>
  );
}
