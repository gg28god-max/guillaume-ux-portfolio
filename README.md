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
- [ ] LinkedIn URL and resume PDF (placeholders in About section)
- [ ] Deployed Vercel URL

## Open items requiring Guillaume

1. **Case Study 1 real assets.** Run 1–2 real jobs through the pipeline (reference image → TRELLIS2 mesh → UE5 import, and/or Figma component → UMG/Widget Blueprint) and capture genuine screenshots + rough timing notes. Send these back and the case study narrative gets written from them — no placeholder content will be substituted for this.
2. **Bio copy** — starter draft below. Factual only; edit or replace before publishing.
3. **LinkedIn URL and resume PDF** for the About section links.
4. **GitHub repo** — created empty at `guillaume-ux-portfolio` (public); this code needs to be pushed to it (see push instructions below) and then imported into Vercel.

## Starter bio draft (factual, for Guillaume to edit)

> Guillaume Goder is a UX/product designer with a background in illustration (OCAD) and several years in game development, now working at the intersection of product UX and AI-assisted design tooling. His recent work includes building a personal AI/MCP pipeline connecting Claude, Blender, Unreal Engine, Figma, and ComfyUI — using that same technical fluency to design and prototype user-facing product experiences. He's based in [city — fill in] and open to [role type — fill in, e.g. "UX/Product Designer roles in tech-product teams"].

This draft avoids: invented metrics, generic "passionate about" phrasing, and unverifiable claims. Replace bracketed fields and adjust tone before publishing.

## Pushing to GitHub

The repo is live and empty at **https://github.com/gg28god-max/guillaume-ux-portfolio** (public). For credential setup (Git install, Personal Access Token, first push) and the reusable commit/push workflow for every future update, see **[SETUP.md](SETUP.md)**.

Then import the repo into Vercel as a static site (no build command needed — Vercel will serve `index.html` directly, or set output directory to the repo root).
