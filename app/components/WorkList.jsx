import { projects } from "../data/projects";
import Reveal from "./Reveal";

export default function WorkList() {
  return (
    <section id="work" className="px-6 pb-32 md:px-12 md:pb-48">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.3em] text-ink-dim">
          (SELECTED WORK)
        </p>
      </Reveal>
      <div className="mt-10 border-t border-white/15">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 60}>
            <a
              href={project.href}
              className="project-row group flex items-baseline justify-between gap-6 border-b border-white/15 px-2 py-8 md:py-10"
            >
              <span className="hidden w-48 shrink-0 font-mono text-xs tracking-widest text-ink-dim group-hover:text-ink md:block">
                {project.category}
              </span>
              <span className="row-title display flex-1 text-[9vw] md:text-[4vw]">
                {project.title}
              </span>
              <span className="shrink-0 font-mono text-xs tracking-widest text-ink-dim group-hover:text-ink">
                {project.year}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
