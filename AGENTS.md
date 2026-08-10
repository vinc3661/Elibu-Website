# AI Agent Instructions for Elibu Website

## Project Overview
- Frontend-only React application using Vite + TypeScript.
- Tailwind CSS v4 with `@tailwindcss/postcss` plugin and Vite integration.
- Minimal app shell and components live under `src/`.
- Uses `react-dom/client` and React `StrictMode`.

## Build and Development
- `npm install` to install dependencies.
- `npm run dev` to start the Vite development server.
- `npm run build` to run `tsc -b` and `vite build`.
- `npm run lint` to validate with ESLint.

## Key Files
- `src/main.tsx` — React app entry point.
- `src/App.tsx` — main application layout and page structure.
- `src/components/` — reusable UI pieces, including `Navbar.tsx`, `Hero.tsx`, and `Aurora.tsx`.
- `src/Lib/utils.ts` — shared utility helpers.
- `tailwind.config.js` — Tailwind content and theme config.
- `vite.config.ts` — Vite plugins and build config.
- `eslint.config.js` — linting config for TypeScript and React.

## Coding Conventions
- Use functional React components with TypeScript types.
- Keep JSX/CSS-in-JS styling via Tailwind utility classes.
- Preserve `className` strings and responsive Tailwind patterns already present.
- Prefer explicit props and typed component interfaces for reusable components.

## What Agents Should Do
- Make changes in the existing React + Vite + Tailwind structure.
- Avoid introducing unrelated backend code or non-Vite tooling.
- Use existing ESLint-friendly syntax and modern React patterns.
- Limit scope to the app shell and component files unless a broader update is clearly needed.

## Notes
- This repository appears to be a minimal starter app, so keep fixes small and aligned with the current code style.
- No existing AI customization file was present; use this file for future agent guidance.
