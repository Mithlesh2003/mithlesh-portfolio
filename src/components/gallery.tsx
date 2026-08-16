"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { ProjectImage } from "@/content/projects";

export function Gallery({
  images,
  slug,
}: {
  images: ProjectImage[];
  slug: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((current) =>
        current === null
          ? current
          : (current + delta + images.length) % images.length,
      ),
    [images.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openIndex, close, step]);

  if (images.length === 0) {
    return (
      <div className="rounded border border-dashed border-line p-10 text-center">
        <p className="label">Screenshots coming</p>
        <p className="prose-body mx-auto mt-3 max-w-md text-sm">
          Interface screenshots for this system are being prepared. Internal
          data is masked before anything is published here.
        </p>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-paper-faint">
          public/projects/{slug}/
        </p>
      </div>
    );
  }

  const active = openIndex === null ? null : images[openIndex];

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {images.map((image, index) => (
          <figure key={image.src} className="card overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group relative block aspect-[16/10] w-full cursor-zoom-in bg-ink-soft"
              aria-label={`Open ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </button>
            {image.caption && (
              <figcaption className="border-t border-line px-4 py-3 text-xs leading-relaxed text-paper-faint">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-4 bg-ink/95 p-6 backdrop-blur"
          onClick={close}
        >
          <div
            className="relative h-[70vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <div
            className="flex items-center gap-6"
            onClick={(event) => event.stopPropagation()}
          >
            {images.length > 1 && (
              <button type="button" onClick={() => step(-1)} className="label hover:text-paper">
                ← Prev
              </button>
            )}
            <p className="max-w-xl text-center text-xs text-paper-dim">
              {active.caption ?? active.alt}
            </p>
            {images.length > 1 && (
              <button type="button" onClick={() => step(1)} className="label hover:text-paper">
                Next →
              </button>
            )}
          </div>

          <button type="button" onClick={close} className="label hover:text-paper">
            Close (Esc)
          </button>
        </div>
      )}
    </>
  );
}
