# Repository Guidelines

## Project Structure & Module Organization
The repository stores the compiled static site served on GitHub Pages. `index.html` loads assets from `css/`, `js/`, `fonts/`, and `img/`. Interaction logic lives in `js/main.js`, with Lucide icons isolated in `js/lucide.js`. `_sources/` retains design notes and Astro drafts—update them when the structure changes. `src/env.d.ts` keeps Astro typings for IDE assistance but is not part of the deployed bundle.

## Build, Test, and Development Commands
The committed files are production-ready, so no build step is required to preview changes. Use `npx serve .` (or WebStorm’s built-in server) to run the site locally. When regenerating from the Astro authoring workspace, run `npm install`, `npm run dev`, and `npm run build:prod`, then sync the generated `dist/` back here after validating with `npm run preview`.

## Coding Style & Naming Conventions
Maintain two-space indentation in `js/main.js` and wrap new functionality in IIFEs to avoid global leaks. Prefer `const`, camelCase helpers such as `initScrollSpy`, and dashed CSS classes like `.sidebar-link`. Declare shared custom properties in `:root` within `css/style.css`. Store imagery under `img/` and web fonts under `fonts/` with descriptive, kebab-case filenames.

## Testing Guidelines
There is no automated suite; rely on manual smoke tests in Chrome and Firefox at mobile (<768px) and desktop breakpoints. Confirm the navigation toggle, scroll-spy highlighting, and Lucide icon replacement. Run a quick Lighthouse accessibility pass and note follow-ups in `_sources/auto-evaluation.md` when needed.

## Commit & Pull Request Guidelines
History favours concise, present-tense French messages (`menu progressif`, `feat: MAJ navigation`). Keep the first line under ~60 characters and add prefixes like `feat:`, `fix:`, or `chore:` when useful. Pull requests should describe user impact, summarize manual tests, and link to the relevant Module 113 task. Attach before/after screenshots for layout or visual updates.

## Deployment Notes
GitHub Pages deploys directly from the repository root via `.github/workflows/deploy.yml`. Avoid committing temporary tooling, large archives, or local server output because everything in the root is published. Keep drafts or configuration snippets inside `_sources/` or another ignored path.
