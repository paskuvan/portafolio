"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

// Masked SplitText reveal. `onScroll` plays it when the element enters the
// viewport (ScrollTrigger); otherwise it plays on mount (hero).
// autoSplit re-splits when fonts finish loading or the width changes, and
// the tween returned from onSplit is re-created each time (official GSAP
// pattern), so lines are always measured against the final layout.
export default function SplitTextReveal({
  children,
  as: Tag = "div",
  className = "",
  type = "lines", // "lines" | "words" | "chars"
  onScroll = true,
  stagger = 0.1,
  delay = 0,
  duration = 1.2,
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const split = SplitText.create(ref.current, {
        type,
        mask: type,
        autoSplit: true,
        onSplit(self) {
          gsap.set(ref.current, { visibility: "visible" });
          return gsap.from(self[type], {
            yPercent: 115,
            duration,
            ease: "power4.out",
            stagger,
            delay,
            ...(onScroll && {
              scrollTrigger: {
                trigger: ref.current,
                start: "top 85%",
                once: true,
              },
            }),
          });
        },
      });

      return () => split.revert();
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={`invisible ${className}`}>
      {children}
    </Tag>
  );
}
