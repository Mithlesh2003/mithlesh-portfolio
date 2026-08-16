import Link from "next/link";
import { profile, headlineMetrics } from "@/content/profile";
import { experience } from "@/content/experience";
import { projects, otherWork, getProject } from "@/content/projects";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { MetricGrid } from "@/components/metric-grid";

export default function Home() {
  const ordered = [...projects].sort(
    (a, b) => Number(b.featured) - Number(a.featured),
  );

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 50% at 20% 0%, rgba(217,164,65,0.16), transparent 70%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="label">{profile.headline}</p>
          <h1 className="display mt-6 text-5xl leading-[1.02] text-paper sm:text-7xl lg:text-8xl">
            {profile.hero.line1}
            <br />
            <span className="text-accent">{profile.hero.line2}</span>
          </h1>
          <p className="prose-body mt-8 max-w-2xl text-lg">
            {profile.hero.blurb}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="border border-accent bg-accent px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:bg-accent-soft"
            >
              See the systems
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="border border-line px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:border-line-strong"
            >
              Get in touch
            </a>
          </div>

          <dl className="mt-16 grid gap-8 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {headlineMetrics.map((metric) => (
              <div key={metric.label}>
                <dt className="display text-3xl text-paper">{metric.value}</dt>
                <dd className="mt-2 text-xs leading-relaxed text-paper-faint">
                  {metric.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* About */}
      <Section id="about" label="01 / Profile" title="What I actually do">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="prose-body">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="grid gap-px overflow-hidden rounded border border-line bg-line sm:grid-cols-2 lg:grid-cols-1">
            {profile.approach.map((item) => (
              <div key={item.title} className="bg-ink-card p-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                  {item.title}
                </h3>
                <p className="prose-body mt-3 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Experience */}
      <Section
        id="experience"
        label="02 / Experience"
        title="Where the work happened"
      >
        <div className="space-y-16">
          {experience.map((job) => (
            <article key={job.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="display text-3xl text-paper">{job.company}</h3>
                <p className="label">{job.period}</p>
              </div>
              <p className="mt-2 text-sm text-accent">{job.title}</p>
              {job.altTitle && (
                <p className="mt-1 text-xs text-paper-faint">{job.altTitle}</p>
              )}
              <p className="mt-1 text-xs text-paper-faint">
                {job.companyNote} · {job.location}
              </p>

              <p className="prose-body mt-5 max-w-3xl">{job.summary}</p>

              <ul className="mt-5 space-y-3">
                {job.points.map((point) => (
                  <li
                    key={point.slice(0, 32)}
                    className="prose-body flex gap-3 text-sm"
                  >
                    <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {job.projectSlugs.map((slug) => {
                  const project = getProject(slug);
                  if (!project) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/projects/${slug}`}
                      className="border border-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-paper-dim transition-colors hover:border-line-strong hover:text-accent"
                    >
                      {project.title.split("—")[0].trim()}
                    </Link>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section
        id="projects"
        label="03 / Projects"
        title="The systems, in depth"
        intro="Each case study covers what the process looked like before, what I built, who owns which part of it, and the numbers the system has produced since going live."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {ordered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="card mt-10 p-6">
          <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
            {otherWork.title}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {otherWork.items.map((item) => (
              <li key={item} className="text-sm text-paper-dim">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" label="04 / Capabilities" title="What I work with">
        <div className="grid gap-px overflow-hidden rounded border border-line bg-line md:grid-cols-3">
          {profile.skills.map((group) => (
            <div key={group.group} className="bg-ink-card p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                {group.group}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-paper-dim">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" label="05 / Education" title="Background">
        <div className="space-y-px overflow-hidden rounded border border-line bg-line">
          {profile.education.map((entry) => (
            <div
              key={entry.degree + entry.period}
              className="flex flex-wrap items-baseline justify-between gap-2 bg-ink-card p-6"
            >
              <div>
                <h3 className="text-base text-paper">{entry.degree}</h3>
                <p className="mt-1 text-sm text-paper-faint">{entry.school}</p>
              </div>
              <p className="label">{entry.period}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {profile.interests.map((interest) => (
            <span
              key={interest.label}
              className="border border-line px-4 py-2 text-sm text-paper-dim"
            >
              {interest.label}
              <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-paper-faint">
                {interest.tag}
              </span>
            </span>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        label="06 / Contact"
        title="Let's build systems"
        intro="Looking to digitise an operation, clean up master data, or turn a spreadsheet process into a real application? That is the work I do."
      >
        <MetricGrid
          columns={3}
          metrics={[
            { value: "Email", label: profile.email },
            { value: "Phone", label: profile.phone },
            { value: "Based in", label: profile.location },
          ]}
        />
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="border border-accent bg-accent px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:bg-accent-soft"
          >
            Email me
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="border border-line px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:border-line-strong"
          >
            LinkedIn
          </a>
        </div>
      </Section>
    </>
  );
}
