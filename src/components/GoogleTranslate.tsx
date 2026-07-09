"use client";

import { useEffect, useState } from "react";

const LANGUAGES = [
  { code: "", label: "Idioma" },
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "pt", label: "Português" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
  { code: "ja", label: "日本語" },
  { code: "zh-CN", label: "中文" },
];

export default function GoogleTranslate() {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    const saved = getCookie("googtrans");
    if (saved) {
      const code = saved.split("/").pop();
      if (code && code !== "es") setCurrent(code);
    }
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const code = e.target.value;
    if (!code) return;
    document.cookie = `googtrans=/auto/${code}; path=/; max-age=86400`;
    setCurrent(code);
    location.reload();
  }

  function handleReset() {
    document.cookie = "googtrans=; path=/; max-age=0";
    setCurrent("");
    location.reload();
  }

  return (
    <div className="fixed bottom-6 left-6 z-[999]">
      <div className="flex items-center gap-2 bg-white rounded-full pl-4 pr-1.5 py-1.5 shadow-lg border border-silver/20 hover:border-primary/30 transition-all duration-200">
        <span className="text-base leading-none">🌐</span>
        <select
          value={current}
          onChange={handleChange}
          className="text-sm font-body font-semibold text-text-main bg-transparent border-none outline-none cursor-pointer appearance-none pr-6 py-0.5 focus:ring-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23223231' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 2px center",
            backgroundSize: "12px",
          }}
        >
          {LANGUAGES.map((l) => (
            <option key={l.code} value={l.code}>
              {l.label}
            </option>
          ))}
        </select>
        {current && (
          <button
            onClick={handleReset}
            className="text-xs text-text-main/50 hover:text-primary transition-colors px-1.5 py-0.5 rounded-full hover:bg-primary/10"
            title="Restablecer idioma"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}

function getCookie(name: string) {
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match?.[1] || null;
}
