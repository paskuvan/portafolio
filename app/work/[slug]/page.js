import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, socials } from "../../data/projects";
import Header from "../../components/Header";
import ProjectMedia from "../../components/ProjectMedia";
import Reveal from "../../components/Reveal";
import SmoothScroll from "../../components/SmoothScroll";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.title} — MAJO PASKUVAN` };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <SmoothScroll />
      <Header />

      <main className="mx-auto max-w-5xl px-6 pb-32 pt-40 md:px-12">
        <Reveal>
          <h1 className="display text-[12vw] md:text-[6vw]">{project.title}</h1>
          <p className="mt-4 font-mono text-sm tracking-widest text-ink-dim">
            {project.date}
          </p>
        </Reveal>

        <hr className="my-10 border-white/15" />

        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-ink-dim">
            {project.category} — {project.year}
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/90 md:text-xl">
            {project.description}
          </p>
        </Reveal>

        {project.link && (
          <Reveal delay={100}>
            <a
              href={project.link.href}
              className="mt-10 block w-full rounded-full bg-white/10 py-5 text-center font-mono text-sm tracking-widest text-ink transition-colors hover:bg-blue"
            >
              {project.link.label}
            </a>
          </Reveal>
        )}

        <div className="mt-16 space-y-6">
          {project.gallery.map((media, i) => (
            <Reveal key={i} delay={(i % 2) * 80}>
              <ProjectMedia
                image={media.image}
                ratio={media.ratio}
                hue={media.hue}
                alt={`${project.title} — ${i + 1}`}
              />
            </Reveal>
          ))}
        </div>

        <hr className="my-16 border-white/15" />

        <Reveal>
          <div className="flex flex-col gap-10 font-mono text-sm tracking-widest md:flex-row md:justify-between">
            <nav className="flex flex-col gap-3">
              <span className="text-xs text-ink-dim">(INDEX)</span>
              <Link href="/" className="text-ink-dim transition-colors hover:text-ink">
                HOME
              </Link>
              <Link href="/#work" className="text-ink-dim transition-colors hover:text-ink">
                WORK
              </Link>
              <Link href="/#contact" className="text-ink-dim transition-colors hover:text-ink">
                CONTACT
              </Link>
            </nav>
            <nav className="flex flex-col gap-3">
              <span className="text-xs text-ink-dim">(ELSEWHERE)</span>
              {socials.slice(1).map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-ink-dim transition-colors hover:text-ink"
                >
                  {social.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 md:items-end">
              <span className="text-xs text-ink-dim">(NEXT PROJECT)</span>
              <Link
                href={`/work/${next.slug}`}
                className="display text-2xl text-ink transition-colors hover:text-blue-soft md:text-3xl"
              >
                {next.title} →
              </Link>
            </div>
          </div>
        </Reveal>
      </main>
    </>
  );
}
