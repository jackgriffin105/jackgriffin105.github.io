# projects.adityajain.me — Projects showcase (Astro)

A dedicated projects page for Aditya Jain. Static **Astro** site deployed to
**GitHub Pages** at **projects.adityajain.me** (`public/CNAME`).

## This site is a CONSUMER — it owns no project data

The project list is the **single source of truth on the main portfolio**
(`adityajn105.github.io` → `src/data/projects.ts`), published at
**`https://adityajain.me/projects.json`**.

- `src/pages/index.astro` fetches that feed **LIVE in the browser on page load**
  (a small inline `<script>` at the bottom of the file) and injects the cards.
  Nothing about the project list is baked in at build time — the page ships a
  static shell + a "Loading projects…" state, so it's **always current with no
  rebuild** when the list changes. There is intentionally **no**
  `src/data/projects.ts` and **no** project images in `public/img/` here — image
  URLs in the feed are already absolute (`https://adityajain.me/img/...`), and
  GitHub Pages serves the feed with `Access-Control-Allow-Origin: *`.
- **To add/edit a project or thumbnail, do it in the main repo**
  (`adityajn105.github.io`: `src/data/projects.ts` + `public/img/`), not here.
  Changes go live here on the reader's next page load — no deploy of this site needed.
- **Injected cards need GLOBAL styles.** They're created by JS, so they lack
  Astro's scoped `data-astro-cid-*` attributes and scoped `<style>` rules won't
  match. The card CSS lives in a `<style is:global>` block namespaced under
  `#projects`; the SVG glyphs are inlined in the script (mirroring `Icon.astro`).
  Do **not** put `data-reveal` on injected cards — the BaseLayout reveal observer
  runs once at load and won't see them (they'd stay invisible); a CSS stagger
  fade-in handles their entrance instead.
- If the feed is unreachable the script shows a graceful fallback ("Couldn't load
  projects… see them all on adityajain.me") — the page itself always builds and
  deploys fine since the build no longer depends on the feed.
- `src/components/SEO.astro` defaults its OG image to
  `https://adityajain.me/img/profile.png` (also hosted on the main site).

## Deploy

Push to `master` → `.github/workflows/deploy.yml` builds + publishes to Pages. **No
schedule/cron** — the project list is fetched live client-side, so this site never
goes stale and needs no periodic rebuild to re-sync. The build has **no dependency on
the feed** (it only ships the static shell), so deploy order vs. the main site no
longer matters; just make sure `adityajain.me/projects.json` is live for readers.

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/  (static shell; no feed fetch at build time)
npm run preview
```
