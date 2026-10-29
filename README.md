# AUREL — Architecture & Objects

A responsive, editorial portfolio concept for a fictional architecture and interior design studio. Built with React, TypeScript, Vite, React Router, Tailwind CSS, Framer Motion, Lucide, React Hook Form and Zod.

> **Concept demo:** The studio, projects, locations, team members, articles, and any recognition are fictional. The photography is illustrative and does not depict work designed by AUREL. The inquiry form is simulated: it does not transmit or store submissions.

## Run locally

Requirements: Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

## Commands

```bash
npm run typecheck
npm run lint
npm test
npm run build
npm run preview
```

## Pages and interactions

- Home, project portfolio with category filters, and twelve detailed project concept pages
- Case-study image viewer with close, previous, next, Escape, and arrow-key controls
- Architecture and interior services, studio, process, team, recognition concept, journal and six article pages
- Contact inquiry form with client-side Zod validation and simulated confirmation
- FAQ accordion, privacy and terms demonstration copy, custom 404, responsive navigation
- Route titles, Open Graph defaults, sitemap and robots directives

All project concepts include fictional locations, concept years, objectives, design approach, materials and three illustrative images. Photography is served from Unsplash and Google Fonts are loaded remotely; internet access is needed for those resources.

## Static deployment

Build output is `dist/`. The project includes SPA fallback rules for Vercel (`vercel.json`) and Cloudflare Pages (`public/_redirects`). Set the deployment hostname to `portfolio.demo.aslisite.com` in the hosting dashboard and configure DNS there; the hostname is not used for application routing. Update `public/sitemap.xml` and `public/robots.txt` if deploying to a different host.

### Vercel

- Build command: `npm run build`
- Output directory: `dist`

### Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- The `public/_redirects` rule is copied into the output by Vite.

No server, database, credentials, paid API or environment variables are required.

## Attribution

Footer credit links to [Aslisite Technologies](https://aslisite.com). This concept website has not been deployed by this repository.
