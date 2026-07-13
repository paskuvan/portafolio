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
  const characters = project.paragraphs.join("").length;
  const dimensions = project.gallery[0]?.dimensions ?? "—";

  return (
    <>
      <SmoothScroll />
      <Header />

      <main className="mx-auto max-w-5xl px-6 pb-32 pt-40 md:px-12">
        <Reveal>
          <h1 className="display text-[12vw] md:text-[6vw]">{project.title}</h1>
          <p className="mt-4 font-mono text-sm tracking-widest text-ink-dim">
            {project.published}
          </p>
        </Reveal>

        <hr className="my-10 border-white/15" />

        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-ink-dim">
            {project.category} — {project.year}
          </p>
          <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed text-ink/90 md:text-xl">
            {project.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
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

        <Reveal>
          <section className="mt-16 rounded-2xl bg-bg-deep p-8 md:p-10">
            <h2 className="text-lg font-bold">Metadata</h2>

            <dl className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div>
                <dt className="text-sm font-bold">Last Updated</dt>
                <dd className="mt-2 font-mono text-sm text-ink-dim">
                  {project.published}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-bold">Dimensions</dt>
                <dd className="mt-2 font-mono text-sm text-ink-dim">
                  {dimensions}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-bold">Characters</dt>
                <dd className="mt-2 font-mono text-sm text-ink-dim">
                  {characters}
                </dd>
              </div>
            </dl>

            <hr className="my-8 border-dashed border-white/15" />

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <h3 className="text-sm font-bold">Links</h3>
              <nav className="flex flex-col gap-2 font-mono text-sm">
                <Link href="/" className="text-ink-dim transition-colors hover:text-ink">
                  Home
                </Link>
                <Link href="/#work" className="text-ink-dim transition-colors hover:text-ink">
                  Work
                </Link>
                <Link href="/#contact" className="text-ink-dim transition-colors hover:text-ink">
                  Contact
                </Link>
              </nav>
              <nav className="flex flex-col gap-2 font-mono text-sm">
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
            </div>
          </section>
        </Reveal>

        <Reveal>
          <div className="mt-16 flex flex-col gap-3 md:items-end">
            <span className="font-mono text-xs tracking-widest text-ink-dim">
              (NEXT PROJECT)
            </span>
            <Link
              href={`/work/${next.slug}`}
              className="display text-2xl text-ink transition-colors hover:text-blue-soft md:text-3xl"
            >
              {next.title} →
            </Link>
          </div>
        </Reveal>
      </main>
    </>
  );
}
