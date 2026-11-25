# Portfolio-100

Personal portfolio site for Abiral Bhattarai, a Jr. AI/ML Engineer based in Kathmandu, Nepal.

Live at [abiralbhattarai.github.io/Portfolio-100](https://abiralbhattarai.github.io/Portfolio-100/).

## Stack

- [Astro](https://astro.build) for the static site.
- Self-hosted Schibsted Grotesk and Fragment Mono fonts.
- GitHub Pages for hosting, deployed by `.github/workflows/deploy.yml` on every push to `main`.

## Run locally

Requires Node 22.

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

The build output goes to `dist/`.

## Structure

```
src/pages/index.astro       Landing page
src/pages/404.astro         Not-found page
src/components/Loader.astro Intro loader
src/styles/global.css       Global styles and design tokens
public/                     Fonts, favicon, CV, and og.png (link preview)
public/images/              Photos (the Sectra clip photo is CC0, from StockSnap)
DESIGN.md                   Design system
PRODUCT.md                  Product notes
```
