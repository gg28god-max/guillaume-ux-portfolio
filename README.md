# Guillaume Goder — UX/Product Portfolio

Self-coded, static HTML/CSS/JS site. No build step, no framework — deploys directly to Vercel as a static site.

## Structure

```
index.html                          Homepage
case-studies/ai-mcp-pipeline.html   Case Study 1 (real, in progress)
case-studies/agent-trust.html       Case Study 2 (speculative, scheduled weeks 3–4)
case-studies/ehr-documentation.html Case Study 3 (speculative, scheduled weeks 5–6)
styles.css                          Design tokens + all styling (light/dark)
script.js                           Dark-mode toggle + mobile nav
```

## Status (Week 0 — site shell)

- [x] Visual system implemented: Newsreader + Inter, fixed light/dark palettes, functional toggle (persists via localStorage, respects `prefers-color-scheme` on first visit)
- [x] Homepage IA: hero, 3 case study cards with distinct icons, "how I work" strip, about/contact
- [x] Case study page template (6-part structure): Header → Problem/Context → Constraints → Process → Solution → Reflection
- [x] Mobile-responsive (hamburger nav under 640px, single-column grids)
- [x] Semantic HTML (`header`, `main`, `article`, `section`, `nav`, `footer`, one `h1` per page, ordered heading hierarchy) for MX/scraper legibility
- [ ] Case Study 1 real pipeline capture (blocked — see below)
- [ ] Case Study 2 build (scheduled weeks 3–4)
- [ ] Case Study 3 build (scheduled weeks 5–6)
- [ ] Distinct case-study icon *artwork* (current icons are placeholder line-art with the right motif — network/node for CS1, orbit/control for CS2, document/chart for CS3 — final illustrated versions TBD)
- [x] LinkedIn URL (live in About section)
- [ ] Resume PDF (placeholder in About section)
- [ ] Deployed Vercel URL

## Open items requiring Guillaume

1. **Case Study 1 real assets.** Run 1–2 real jobs through the pipeline (reference image → TRELLIS2 mesh → UE5 import, and/or Figma component → UMG/Widget Blueprint) and capture genuine screenshots + rough timing notes. Send these back and the case study narrative gets written from them — no placeholder content will be substituted for this.
2. ~~Bio copy~~ — done, final bio live in the About section (EN/FR).
3. **Resume PDF** for the About section link (LinkedIn is live).
4. **GitHub repo** — created empty at `guillaume-ux-portfolio` (public); this code needs to be pushed to it (see push instructions below) and then imported into Vercel.

## Bio (live on site)

> I'm a UX/Product Designer and Concept Artist based in Montréal, working at the intersection of research, interface design, and implementation. Over six years in the game industry — most recently as Lead UI/UX Designer at Little Guy Games — I've designed and shipped interfaces through to Unreal Engine 5, and built my own AI-assisted creative pipeline connecting Claude, Blender, UE5, Figma, and ComfyUI. I hold a Bachelor of Design in Illustration from OCAD University and UX/UI certifications from Epic Games. Bilingual (EN/FR).

## Pushing to GitHub

The repo is live and empty at **https://github.com/gg28god-max/guillaume-ux-portfolio** (public). For credential setup (Git install, Personal Access Token, first push) and the reusable commit/push workflow for every future update, see **[SETUP.md](SETUP.md)**.

Then import the repo into Vercel as a static site (no build command needed — Vercel will serve `index.html` directly, or set output directory to the repo root).
