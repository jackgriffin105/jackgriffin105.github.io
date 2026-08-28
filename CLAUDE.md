# projects.adityajain.me — Projects showcase (Astro)

A dedicated projects page for Aditya Jain. Static **Astro** site deployed to
**GitHub Pages** at **projects.adityajain.me** (`public/CNAME`).

## This site is a CONSUMER — it owns no project data

The project list is the **single source of truth on the main portfolio**
(`adityajn105.github.io` → `src/data/projects.ts`), published at
**`https://adityajain.me/projects.json`**.

- `src/pages/index.astro` **`fetch()`es that feed at build time** and renders the
  cards. There is intentionally **no** `src/data/projects.ts` and **no** project
  images in `public/img/` here — image URLs in the feed are already absolute
  (`https://adityajain.me/img/...`).
- **To add/edit a project or thumbnail, do it in the main repo**
  (`adityajn105.github.io`: `src/data/projects.ts` + `public/img/`), not here.
- If the feed is unreachable the build **fails on purpose** (rather than shipping an
  empty page); GitHub Pages keeps the last good deploy. Override the URL for local
  testing: `PROJECTS_FEED=http://localhost:4321/projects.json npm run build`.
- `src/components/SEO.astro` defaults its OG image to
  `https://adityajain.me/img/profile.png` (also hosted on the main site).

## Deploy

Push to `master` → `.github/workflows/deploy.yml` builds + publishes to Pages. It also
runs **weekly** (`schedule` cron) so the project list re-syncs from the feed without a
push. **Deploy the main site first** so `/projects.json` exists before this one builds.

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/  (fetches the live feed unless PROJECTS_FEED is set)
npm run preview
```
