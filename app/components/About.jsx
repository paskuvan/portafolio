import Reveal from "./Reveal";
import SplitTextReveal from "./SplitTextReveal";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-32 md:px-12 md:py-48">
      <span className="crosshair left-6 top-10" />
      <span className="crosshair right-10 bottom-10" />
      <Reveal>
        <p className="font-mono text-xs tracking-[0.3em] text-ink-dim">
          (ABOUT)
        </p>
      </Reveal>
      <SplitTextReveal
        as="h2"
        className="display mt-8 max-w-5xl text-[8vw] md:text-[4.5vw]"
        type="lines"
        stagger={0.09}
      >
        I explore how to shape playful digital experiences with craft and
        care, building products people love to use.
      </SplitTextReveal>
      <Reveal delay={200}>
        <p className="mt-12 max-w-xl font-mono text-sm leading-relaxed text-ink-dim">
          I work across product design, front-end engineering and branding —
          from first sketch to shipped product.
        </p>
      </Reveal>
    </section>
  );
}
