# AGENTS.md — Chappy's Junk Removal LLC Landing Page

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

A single-page marketing landing page for Chappy's Junk Removal LLC. No backend, no database, no authentication — purely a static marketing site built with TanStack Start on Netlify.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS |
| Language | TypeScript 5 |
| Deployment | Netlify |

## Directory Structure

```
src/
  routes/
    __root.tsx     # HTML shell: meta tags, Google Fonts import via head()
    index.tsx      # Entire landing page — all sections in one file
  styles.css       # CSS variables, animations, component classes (no Tailwind config)
public/
  favicon.ico
netlify.toml       # Netlify build config
vite.config.ts     # Vite + TanStack Start + Tailwind + Netlify plugin
```

## Key Design Decisions

- **Single-file page**: All sections (hero, services, features, testimonials, CTA, footer) live in `src/routes/index.tsx`. For a small marketing page this keeps everything discoverable and easy to edit.
- **CSS variables for brand colors**: All theme colors live in `src/styles.css` under `:root`. To rebrand, update those variables only — hex values never appear in JSX.
- **Inline SVGs**: Icons and the truck illustration are hand-crafted SVG components at the top of `index.tsx`. No icon library dependency needed.
- **Tailwind v4 + custom CSS hybrid**: Tailwind handles resets; custom CSS handles complex animations, `clip-path` shapes, and hover transitions that Tailwind utilities can't express cleanly.
- **Google Fonts via `head()`**: Fonts (Bebas Neue display, Barlow/Barlow Condensed body) are declared in `__root.tsx` `head()` links — not CSS `@import` — to avoid a render-blocking flash.

## Brand & Content

- **Phone**: `(555) 123-4567` — search `index.tsx` to update
- **Email**: `hello@chappysjunk.com` — search `index.tsx` to update
- **Pricing**: Single item pickup starts at $125; other services in the `services` array in `index.tsx`
- **Colors**: `--orange: #e85d04`, `--charcoal: #1c1c1c`, `--cream: #f5f0e8` in `styles.css`

## Extending the Page

- **Contact form**: Use the `netlify-forms-tanstack` skill in `.agents/skills/`
- **New page/route**: Add a file to `src/routes/` following TanStack Router file-based conventions
- **Change colors or fonts**: Edit `:root` in `src/styles.css` and the Google Fonts URL in `__root.tsx`
- **Add blog or FAQ**: Consider the `content-collections` skill available in `.agents/skills/`

## Conventions

- Inline `style={{}}` objects for layout-level styles in JSX
- CSS class names (`.btn-primary`, `.service-card`, etc.) for reusable component styles
- No `cn()` helper or class variance authority — the design is non-modular by intention
- TypeScript strict mode; `@/` path alias resolves to `src/`
