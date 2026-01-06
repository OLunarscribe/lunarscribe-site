'use client';

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type GlowMode = "dark" | "light";

export default function GlowModeToggle() {
  const [mode, setMode] = useState<GlowMode>("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("glowMode");
    const initial: GlowMode = saved === "light" ? "light" : "dark";
    setMode(initial);

    // We keep the UI in dark theme always, and only toggle glow intensity.
    document.documentElement.classList.toggle("glow-lite", initial === "light");
  }, []);

  const set = (next: GlowMode) => {
    setMode(next);
    window.localStorage.setItem("glowMode", next);
    document.documentElement.classList.toggle("glow-lite", next === "light");
  };

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      <button
        type="button"
        onClick={() => set("dark")}
        className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 transition ${
          mode === "dark" ? "bg-white/10" : "hover:bg-white/5"
        }`}
        aria-label="Dark glow"
      >
        <Moon className="h-3.5 w-3.5" />
        Dark
      </button>

      <button
        type="button"
        onClick={() => set("light")}
        className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 transition ${
          mode === "light" ? "bg-white/10" : "hover:bg-white/5"
        }`}
        aria-label="Light glow"
      >
        <Sun className="h-3.5 w-3.5" />
        Light
      </button>
    </div>
  );
}
