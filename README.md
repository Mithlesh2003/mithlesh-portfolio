# Mithlesh Kumar — Portfolio

Personal portfolio site: the long version of the CV. Two-to-three pages of
résumé cannot carry the before/after of a six-system plant rebuild, so every
system here gets a full case study — the mess it replaced, what was built, the
honest ownership split, the numbers since go-live, and screenshots.

Live: https://mithlesh2003.github.io/mithlesh-portfolio/
Replaces: the earlier one-page version at `portfolio--m-k-k-1.replit.app`

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS 4 (theme tokens in `src/app/globals.css`)
- `next/font` — Instrument Serif (display), Inter (body), JetBrains Mono (labels)
- Static-friendly: no database, all content is typed data

## Run it

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:3000

```bash
npm run build
```

## Where the content lives

| File | What it holds |
| --- | --- |
| `src/content/profile.ts` | Name, headline, about, approach, skills, education, interests, hero metrics |
| `src/content/experience.ts` | The two roles, with links to the project case studies |
| `src/content/projects.ts` | Every case study — before / built / flow / metrics / outcomes / images |
| `public/projects/<slug>/` | Screenshots for that case study (see `public/projects/README.md`) |

Nothing else needs editing to update the site. Add a project by appending one
object to `projects` in `src/content/projects.ts` — the home grid, the
`/projects` index, the static route and the next-project link all pick it up.

## Adding screenshots

Full instructions, including what to mask before publishing internal
screens, are in [`public/projects/README.md`](public/projects/README.md).
Short version: drop files in `public/projects/<slug>/`, then add
`{ src, alt, caption }` entries to that project's `images` array. Empty
arrays render a placeholder, so the site is always safe to deploy.

## Structure

```
src/
  app/
    page.tsx                  home — hero, about, experience, projects, skills, education, contact
    projects/page.tsx         all case studies
    projects/[slug]/page.tsx  one case study (statically generated per project)
    not-found.tsx
  components/                 nav, footer, section, project card, metric grid, flow steps, gallery
  content/                    all copy and data
```

## Deploy

### Option A — Vercel (recommended)

Import the repo at [vercel.com/new](https://vercel.com/new). Framework
auto-detects as Next.js, no environment variables, no config. Keeps image
optimization and gives a preview URL for every branch.

### Option B — GitHub Pages

Already wired. [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)
builds a static export and publishes it on every push to `main`.

One-time setup: repo **Settings → Pages → Build and deployment → Source:
GitHub Actions**. The site then lives at
`https://<user>.github.io/mithlesh-portfolio/`.

Pages needs a sub-path and cannot run Next's image optimizer, so the workflow
sets `GITHUB_PAGES=true`, which switches [`next.config.ts`](next.config.ts) to
`output: "export"`, `basePath: "/mithlesh-portfolio"` and unoptimized images.
Local dev and Vercel are unaffected.

If the repo is renamed, or a custom domain / `<user>.github.io` repo is used
(both serve from the root), change `basePath` — set the
`GITHUB_PAGES_BASE_PATH` env var, to `""` for root-served sites.

Test the static build locally the way CI does:

```bash
GITHUB_PAGES=true npm run build
```

Trade-off: Pages is free and tied to the repo, but serves unoptimized images
and no preview deployments. Vercel handles both.

## Updating the live site

The deploy is git-driven — push to `main` and the host rebuilds. There is no
separate upload step and no build output in the repo.

```bash
npm run dev
```

Edit the content file, check it at http://localhost:3000, then:

```bash
git add -A && git commit -m "Update O2D case study numbers" && git push
```

Vercel redeploys in ~1 minute; GitHub Pages in ~2 (watch it under the repo's
Actions tab). Typical edits:

| Change | File |
| --- | --- |
| New numbers on a system | `metrics` array in `src/content/projects.ts` |
| New project | append one object to `projects` |
| Add screenshots | drop files in `public/projects/<slug>/`, add to `images` |
| New job / role | `src/content/experience.ts` |
| Bio, skills, education, contact | `src/content/profile.ts` |

Run `npm run build` before pushing if you changed anything beyond text — it
catches type errors that would otherwise fail the deploy.

## Content rules this site follows

- Ownership is stated per project (sole developer / co-architect / contributed),
  matching what a reference check would confirm.
- Numbers come from the live systems, and capacity figures are labelled as
  capacity rather than usage.
- Internal commercial detail, colleague comparisons and known open defects
  stay out of a public page.
