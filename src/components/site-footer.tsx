import Link from "next/link";
import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="hairline mt-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="label">
          © {new Date().getFullYear()} {profile.name} · {profile.headline}
        </p>
        <div className="flex gap-6">
          <a href={`mailto:${profile.email}`} className="label hover:text-paper">
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="label hover:text-paper"
          >
            LinkedIn
          </a>
          <Link href="/#projects" className="label hover:text-paper">
            Projects
          </Link>
        </div>
      </div>
    </footer>
  );
}
