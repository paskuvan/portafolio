"use client";

import dynamic from "next/dynamic";
import Clock from "./Clock";
import SplitTextReveal from "./SplitTextReveal";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-center overflow-hidden px-6 md:px-12">
      <div className="absolute inset-0 opacity-90">
        <HeroCanvas />
      </div>

      <span className="crosshair left-6 top-[18%]" />
      <span className="crosshair right-6 top-[30%]" />
      <span className="crosshair left-[45%] bottom-[12%]" />

      <div className="pointer-events-none relative z-10">
        <SplitTextReveal
          as="h1"
          className="display text-[13vw] leading-[0.9] md:text-[9vw]"
          type="lines"
          onScroll={false}
          stagger={0.12}
          delay={1.6}
        >
          I bring
          <br />
          craft &amp; play
          <br />
          to digital work
        </SplitTextReveal>
        <SplitTextReveal
          as="p"
          className="mt-10 max-w-xl font-mono text-sm leading-relaxed text-ink-dim md:text-base"
          type="lines"
          onScroll={false}
          stagger={0.08}
          delay={2.2}
          duration={0.9}
        >
          I&apos;m Majo Paskuvan, designing and building playful digital
          products with craft and care.
        </SplitTextReveal>
      </div>

      <div className="absolute bottom-6 left-6 z-10 md:left-12">
        <Clock />
      </div>
      <div className="absolute bottom-6 right-6 z-10 md:right-12">
        <span className="font-mono text-sm tracking-widest text-ink-dim">
          SCROLL ↓
        </span>
      </div>
    </section>
  );
}
