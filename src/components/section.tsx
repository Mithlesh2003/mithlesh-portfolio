import type { ReactNode } from "react";

export function Section({
  id,
  label,
  title,
  intro,
  children,
}: {
  id?: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="hairline scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 grid gap-6 md:grid-cols-[minmax(0,14rem)_1fr] md:gap-12">
          <p className="label pt-2">{label}</p>
          <div>
            <h2 className="display text-4xl text-paper sm:text-5xl">
              {title}
              <span className="text-accent">.</span>
            </h2>
            {intro && (
              <p className="prose-body mt-4 max-w-2xl text-base">{intro}</p>
            )}
          </div>
        </div>
        <div className="md:pl-[calc(14rem+3rem)]">{children}</div>
      </div>
    </section>
  );
}
