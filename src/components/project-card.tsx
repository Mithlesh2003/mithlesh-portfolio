import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  const cover = project.images[0];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="card group flex flex-col overflow-hidden transition-colors hover:border-line-strong"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-line bg-ink-soft">
        {cover ? (
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 px-6 text-center">
            <span className="display text-5xl text-line-strong">
              {project.org
                .split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 3)
                .toUpperCase()}
            </span>
            <span className="label">screenshots coming</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="label text-accent">{project.org}</span>
          <span className="label">{project.status}</span>
        </div>

        <h3 className="display mt-3 text-2xl text-paper transition-colors group-hover:text-accent-soft">
          {project.title}
        </h3>

        <p className="prose-body mt-3 flex-1 text-sm">{project.excerpt}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-paper-faint"
            >
              {tech}
            </span>
          ))}
        </div>

        <span className="label mt-6 inline-flex items-center gap-2 text-paper-dim transition-colors group-hover:text-accent">
          Read the full case study
          <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
