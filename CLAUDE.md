# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint (flat config, `eslint.config.js`)

No test suite is configured in this project.

## Architecture

Single-page React 19 + Vite landing page (marketing/lead-gen site for a freelance dev studio, content in Spanish). No router — `App.jsx` composes one page as a fixed sequence of full-width `<section>` components: `Header`, `Hero`, `PainPoints`, `Services`, `UruFix`, `Contact`, `Footer`, `FloatingButtons`. Adding a new page section means adding a component to `src/components/` and inserting it into that sequence in `App.jsx`.

**Styling**: Tailwind CSS v4 via `@tailwindcss/vite` (no `tailwind.config.js` — v4 is CSS-first, configured in `src/index.css`). Components mix Tailwind utility classes with inline `style={{ color: '#0a1f24', ... }}` objects for the brand color palette — this is the established pattern, not a one-off.

**Animation**: `motion/react` (Framer Motion) on nearly every section — the recurring pattern is `initial` / `whileInView` / `transition` / `viewport={{ once: true, amount }}`. The `amount` threshold comes from `useViewportAmount()` (`src/hooks/useViewportAmount.jsx`), which lowers the trigger threshold on mobile (`<768px`) vs desktop so animations fire earlier on small screens.

**Configuration split** — two separate config files serve different purposes, don't merge them:
- `CONFIG.js` (project root) — business/contact info, social links, deployment platform. Has a large inline comment block documenting each field; keep that doc in sync when adding fields.
- `src/config/seo.js` — SEO-specific: keywords (by region/sector), per-page meta tag generator (`getMetaTags(page)`), regional targeting data for Uruguay/Argentina/Chile/Mexico/Colombia/Peru.

Neither config is currently wired end-to-end into every component (e.g. `Contact.jsx` reads EmailJS credentials directly from `import.meta.env`, not from `CONFIG.EMAIL_JS`) — check how a given component actually sources its data before assuming `CONFIG`/`seoConfig` is the live source of truth.

**Contact form**: `Contact.jsx` sends via `@emailjs/browser` `sendForm`, reading `VITE_SERVICE_ID` / `VITE_TEMPLATE_ID` / `VITE_PUBLIC_KEY` from `.env`. No backend.

**SEO**: Handled mostly in static `index.html` (meta tags, Open Graph, JSON-LD schema.org) plus `public/robots.txt`, `public/sitemap.xml`, `public/_headers`, `public/_redirects`. `SEO_GUIDE.md` documents the SEO strategy and maintenance checklist in detail — read it before touching meta tags, schema, or the sitemap.

**Deployment target**: Vercel/Netlify (static build from `vite build`; `_headers`/`_redirects` in `public/` apply automatically).
