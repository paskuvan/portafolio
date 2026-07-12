import Link from "next/link";
import { projects } from "../data/projects";
import ProjectMedia from "./ProjectMedia";
import Reveal from "./Reveal";

export default function WorkList() {
  return (
    <section id="work" className="px-6 pb-32 md:px-12 md:pb-48">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.3em] text-ink-dim">
          (SELECTED WORK)
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-12 lg:gap-y-24">
        {projects.map((project, i) => (
          <article key={project.slug} className={`col-span-1 ${project.layout}`}>
            <Reveal delay={(i % 3) * 80}>
              <Link href={`/work/${project.slug}`} className="group block space-y-3">
                <ProjectMedia
                  image={project.image}
                  ratio={project.ratio}
                  hue={project.hue}
                  alt={project.title}
                  watermark={project.title}
                  badge={project.category}
                  hoverZoom
                />
                <div className="flex items-baseline justify-between gap-3 font-mono text-xs uppercase tracking-widest">
                  <span className="min-w-0 flex-1 truncate text-ink">
                    {project.title}
                  </span>
                  <span className="shrink-0 tabular-nums text-ink-dim">
                    {project.year}
                  </span>
                </div>
              </Link>
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  );
}
