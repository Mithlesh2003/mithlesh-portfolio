import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies of the manufacturing and operations systems I have designed and built — purchase, part codes, inventory, order-to-delivery, costing and more.",
};

export default function ProjectsIndex() {
  const ordered = [...projects].sort(
    (a, b) => Number(b.featured) - Number(a.featured),
  );

  return (
    <div className="mx-auto max-w-6xl px-6 pt-28">
      <p className="label">Case studies</p>
      <h1 className="display mt-5 text-5xl text-paper sm:text-6xl">
        Every system, in depth<span className="text-accent">.</span>
      </h1>
      <p className="prose-body mt-6 max-w-2xl text-lg">
        What the process looked like before, what I built, who owns which part,
        and the numbers each system has produced since it went live.
      </p>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {ordered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
