# CLAUDE.md

## Project Overview

Personal portfolio website for Pratham Rohatgi (Frontend Engineer). Single-page React app showcasing projects, skills, qualifications, and contact info.

**Live site**: https://prathamrohatgi.vercel.app/

## Tech Stack

- **Framework**: React 18.3 with Vite 7
- **Language**: JavaScript/JSX (no TypeScript)
- **Styling**: Plain CSS with CSS custom properties (HSL-based theming)
- **Animations**: GSAP + ScrollTrigger
- **Carousel**: Swiper 8
- **Contact form**: EmailJS
- **Icons**: Boxicons + Unicons (loaded via CDN in index.html)
- **Deployment**: Vercel (auto-deploys on push)

## Commands

- `npm run dev` — Start dev server (localhost:5173)
- `npm run build` — Production build to `/dist`
- `npm run preview` — Preview production build locally

No test runner is configured in scripts.

## Project Structure

```
src/
├── assets/            # Images, CV PDF, project screenshots
├── components/        # One folder per section
│   ├── about/         # About section + Info stats
│   ├── contact/       # Contact form (EmailJS)
│   ├── floatingBrackets/
│   ├── footer/
│   ├── header/        # Responsive navbar with mobile menu
│   ├── home/          # Hero section (Data, Social, ScrollDown)
│   ├── qualification/ # Education/Experience timeline (tabbed)
│   ├── recentWork/
│   ├── scrollup/
│   ├── skills/        # Frontend.jsx, Other.jsx with GSAP animations
│   └── work/          # Filterable project grid (Data.jsx has project list)
├── App.jsx            # Root component — assembles all sections
├── App.css            # Global styles, CSS variables, theming
├── main.jsx           # Entry point
└── index.css          # Base/reset styles
```

## Conventions

- **Components**: PascalCase filenames (`Header.jsx`, `Contact.jsx`), one component per file
- **CSS**: Separate CSS file per component, kebab-case filenames (`header.css`, `about.css`)
- **CSS classes**: BEM-inspired naming (`nav__menu`, `contact__form-input`, `button--flex`)
- **Static data**: Kept in `Data.jsx` files alongside their component
- **State management**: React hooks only (useState) — no Redux/Context
- **Path alias**: `@` maps to `./src` (configured in vite.config.js)
- **Font**: Poppins (Google Fonts)
- **Responsive**: Mobile-first, breakpoints at 768px and 1024px
- **Layout**: CSS Grid container class (`grid`) + Flexbox utilities

## Theming (CSS Variables)

Defined in `App.css` using HSL. Key variables:
- `--hue`, `--sat` — base color controls
- `--title-color`, `--text-color`, `--body-color`, `--container-color`
- Spacing: `--mb-0-25` through `--mb-3`
- Typography: `--big-font-size` through `--small-font-size`
- Z-index scale: `--z-tooltip`, `--z-fixed`, `--z-modal`

## Linting

ESLint configured (extends `react-app`). No Prettier config.
