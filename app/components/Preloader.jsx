"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let value = 0;
    const tick = setInterval(() => {
      value += Math.random() * 18;
      if (value >= 100) {
        value = 100;
        clearInterval(tick);
        setTimeout(() => setDone(true), 400);
      }
      setProgress(value);
    }, 120);
    return () => clearInterval(tick);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-bg-deep transition-opacity duration-700 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden={done}
    >
      <div className="w-44">
        <div className="h-1.5 w-full rounded-full bg-white/15">
          <div
            className="h-full rounded-full bg-ink transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-4 text-center font-mono text-xs text-ink-dim">
          {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
}
