# Formly — Frontend (Simple Form Builder) 🚀

Formly is the frontend for a lightweight form-builder application where users can create, customize, and share forms (contact, surveys, feedback, etc.) and collect responses in a dashboard. This repository contains the React + Vite frontend for the Formly MVP.

## Table of contents
- Features
- Tech stack
- Quick start
- Available scripts
- Project structure
- Environment variables
- Contributing
- License

## Features
- Create, edit and share public forms
- Live form previews while building
- Lightweight dashboard to view submissions (backend required)
- Mobile-responsive UI

## Tech stack
- React 19
- Vite (dev tooling)
- TailwindCSS
- React Router
- GSAP (animations)
- OGL (WebGL helpers — optional visuals)

## Quick start
Prerequisites
- Node.js 18+ (recommended)
- npm 9+ or compatible

Install dependencies (from project root):

```powershell
npm install
```

Run the dev server:

```powershell
npm run dev
```

Build for production:

```powershell
npm run build
```

Preview a production build locally:

```powershell
npm run preview
```

Lint the project:

```powershell
npm run lint
```

## Available scripts (from `package.json`)
- `dev` — start Vite dev server
- `build` — create a production build
- `preview` — locally preview a production build
- `lint` — run ESLint across the codebase

## Environment variables
The frontend expects the typical Vite-style env vars (optional). Create a `.env` or `.env.local` at project root when needed.


```
VITE_API_URL=https://api.local
```

Note: Vite exposes env variables prefixed with `VITE_` to the client.

## Project structure

Top-level files/folders you’ll care about:

- `index.html` — Vite entry
- `src/main.jsx` — app bootstrap
- `src/App.jsx` — main app component / routes
- `src/index.css` — global styles (Tailwind)
- `src/components/` — shared UI components (Navbar, Banner, Footer, etc.)
- `src/pages/` — top-level route pages (e.g., `LandingPage.jsx`)
- `public/` — static assets

This is intentionally small and focused. Add new pages under `src/pages` and reusable UI inside `src/components`.

## Deployment
Build with `npm run build`. The output directory is `dist/`. Serve it with any static host (Netlify, Vercel, Surge, S3 + CloudFront, etc.). If your backend has a different origin, set `VITE_API_URL` to point to it.

## Contributing
- Keep changes small and focused
- Run `npm run lint` before opening a PR
- Add short, focused commits and provide a clear PR description

## Troubleshooting
- If you see stale styles, clear the browser cache or restart the dev server
- If animations using GSAP or OGL don't render, verify the browser supports WebGL and check console errors

## License
This project is open source. Add your preferred license file (`LICENSE`) as needed.

## Contact
If you need help or want to collaborate, open an issue or contact the maintainer.

---

Happy building! 🛠️