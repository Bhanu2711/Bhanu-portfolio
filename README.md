# Bhanu Prakash Ponugupati Portfolio

A cinematic, single-page personal portfolio built with React, Vite, TypeScript, Framer Motion, and lucide-react.

## Why this stack

- **React + TypeScript** keeps the portfolio modular and easier to update.
- **Vite** gives a fast local workflow and produces static files that can be deployed to Netlify, Vercel, GitHub Pages, or any static host.
- **Framer Motion** handles refined section reveals while respecting reduced-motion preferences.
- **Plain CSS** keeps the editorial visual system lightweight and easy to tune.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL printed in the terminal.

## Build for deployment

```bash
npm run build
```

The production-ready site is generated in `dist/`.

## Update content

Most portfolio copy is stored in `src/data/portfolio.ts`. Update that file for experience, projects, education, skills, achievements, and contact links.

The hero image lives in `public/assets/images/hero-mountains.png`.

The resume download points to `public/assets/resume/Bhanu-Prakash-Ponugupati-Resume.pdf`. Replace that file with a newer verified PDF when needed and keep `resumePath` in `src/data/portfolio.ts` aligned with the filename.
