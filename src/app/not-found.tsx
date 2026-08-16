import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6">
      <p className="label">404</p>
      <h1 className="display mt-4 text-5xl text-paper sm:text-6xl">
        Nothing tracked at this address<span className="text-accent">.</span>
      </h1>
      <p className="prose-body mt-5 max-w-xl">
        The page you asked for does not exist. The systems, however, do.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="border border-accent bg-accent px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:bg-accent-soft"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="border border-line px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:border-line-strong"
        >
          Projects
        </Link>
      </div>
    </div>
  );
}
