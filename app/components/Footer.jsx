import { socials } from "../data/projects";
import Reveal from "./Reveal";
import SplitTextReveal from "./SplitTextReveal";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative flex min-h-svh flex-col justify-between overflow-hidden bg-bg-deep px-6 pt-32 md:px-12"
    >
      <span className="crosshair right-8 top-16" />

      <div>
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-ink-dim">
            (CONTACT)
          </p>
        </Reveal>
        <SplitTextReveal
          as="h2"
          className="display mt-8 text-[10.5vw] md:text-[9vw]"
          type="lines"
          stagger={0.12}
        >
          Let&apos;s create
          <br />
          something
          <br />
          <span className="text-blue-soft">extraordinary</span>
        </SplitTextReveal>

        <Reveal delay={200}>
          <ul className="mt-16 flex flex-col gap-3 font-mono text-sm tracking-widest md:flex-row md:gap-10">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="text-ink-dim underline-offset-4 transition-colors hover:text-ink hover:underline"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="relative -mx-6 mt-24 overflow-hidden border-t border-white/10 py-6 md:-mx-12">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap font-mono text-xs tracking-[0.3em] text-ink-dim">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i}>MAJO PASKUVAN © 2026 — MADE IN CHILE —</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
