import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/content/projects";
import { MetricGrid } from "@/components/metric-grid";
import { FlowSteps } from "@/components/flow-steps";
import { Gallery } from "@/components/gallery";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.excerpt,
    openGraph: { title: project.title, description: project.excerpt },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="pt-28">
      {/* Header */}
      <header className="mx-auto max-w-6xl px-6">
        <Link href="/#projects" className="label hover:text-paper">
          ← All projects
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="label text-accent">{project.org}</span>
          <span className="label">{project.period}</span>
          <span className="border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-paper-dim">
            {project.status}
          </span>
        </div>

        <h1 className="display mt-5 max-w-4xl text-4xl text-paper sm:text-6xl">
          {project.title}
        </h1>
        <p className="prose-body mt-6 max-w-3xl text-lg">{project.tagline}</p>

        <dl className="mt-10 grid gap-8 border-t border-line pt-8 md:grid-cols-3">
          <div>
            <dt className="label">Ownership</dt>
            <dd className="prose-body mt-2 text-sm">{project.ownership}</dd>
          </div>
          <div>
            <dt className="label">Stack</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-paper-dim"
                >
                  {tech}
                </span>
              ))}
            </dd>
          </div>
          <div>
            <dt className="label">Departments served</dt>
            <dd className="prose-body mt-2 text-sm">
              {project.departments?.join(" · ") ?? "—"}
            </dd>
          </div>
        </dl>
      </header>

      {/* Intro */}
      <section className="mx-auto mt-16 max-w-6xl px-6">
        <div className="max-w-3xl space-y-5">
          {project.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="prose-body text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Metrics */}
      <section className="mx-auto mt-16 max-w-6xl px-6">
        <h2 className="label mb-5">By the numbers</h2>
        <MetricGrid metrics={project.metrics} columns={3} />
      </section>

      {/* Before / Built */}
      <section className="mx-auto mt-20 max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="display text-2xl text-paper">
              Before the system
            </h2>
            <ul className="mt-5 space-y-3">
              {project.before.map((item) => (
                <li
                  key={item.slice(0, 32)}
                  className="prose-body flex gap-3 text-sm"
                >
                  <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-paper-faint" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display text-2xl text-paper">What I built</h2>
            <ul className="mt-5 space-y-3">
              {project.built.map((item) => (
                <li
                  key={item.slice(0, 32)}
                  className="prose-body flex gap-3 text-sm"
                >
                  <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Flow */}
      {project.flow && (
        <section className="mx-auto mt-20 max-w-6xl px-6">
          <h2 className="display text-2xl text-paper">The flow, end to end</h2>
          <div className="mt-6 max-w-3xl">
            <FlowSteps steps={project.flow} />
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="mx-auto mt-20 max-w-6xl px-6">
        <h2 className="display text-2xl text-paper">Inside the system</h2>
        <div className="mt-6">
          <Gallery images={project.images} slug={project.slug} />
        </div>
      </section>

      {/* Outcomes */}
      <section className="mx-auto mt-20 max-w-6xl px-6">
        <h2 className="display text-2xl text-paper">What changed</h2>
        <ul className="mt-6 grid gap-px overflow-hidden rounded border border-line bg-line sm:grid-cols-2">
          {project.outcomes.map((item) => (
            <li key={item.slice(0, 32)} className="prose-body bg-ink-card p-6 text-sm">
              {item}
            </li>
          ))}
        </ul>

        {project.notes && (
          <div className="card mt-6 border-l-2 border-l-accent p-6">
            {project.notes.map((note) => (
              <p key={note.slice(0, 32)} className="prose-body text-sm">
                {note}
              </p>
            ))}
          </div>
        )}
      </section>

      {/* Next */}
      <nav className="hairline mx-auto mt-24 max-w-6xl px-6 pt-10">
        <p className="label">Next project</p>
        <Link
          href={`/projects/${next.slug}`}
          className="display mt-3 block text-3xl text-paper transition-colors hover:text-accent sm:text-4xl"
        >
          {next.title} <span aria-hidden>→</span>
        </Link>
      </nav>
    </article>
  );
}
