"use client";

import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    const addScript = () => {
      if (document.getElementById("google-translate-script")) return;
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    (window as any).googleTranslateElementInit = () => {
      if (document.getElementById("google_translate_element")?.childElementCount) return;
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "es",
          includedLanguages: "en,es,fr,pt,de,it,ja,zh-CN",
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    addScript();
  }, []);

  return (
    <div id="google_translate_element" className="google-translate-widget" />
  );
}
