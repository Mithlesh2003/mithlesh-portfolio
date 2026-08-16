# Mithlesh Kumar — Portfolio

Personal portfolio site: the long version of the CV. Two-to-three pages of
résumé cannot carry the before/after of a six-system plant rebuild, so every
system here gets a full case study — the mess it replaced, what was built, the
honest ownership split, the numbers since go-live, and screenshots.

Live: _add the deployed URL here after the first deploy_
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

Vercel: import the repo, framework auto-detects as Next.js, no environment
variables needed. Any Node host works — `npm run build && npm start`.

## Content rules this site follows

- Ownership is stated per project (sole developer / co-architect / contributed),
  matching what a reference check would confirm.
- Numbers come from the live systems, and capacity figures are labelled as
  capacity rather than usage.
- Internal commercial detail, colleague comparisons and known open defects
  stay out of a public page.
