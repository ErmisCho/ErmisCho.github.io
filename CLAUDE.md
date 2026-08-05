# Ermis CV Portfolio

Static Astro portfolio for Ermis Chorinopoulos, deployed to GitHub Pages.

## Stack Defaults

- Language/runtime: TypeScript on Node.js
- Framework: Astro
- Package manager: npm
- Deployment: GitHub Pages

## Commands

- Dev: `npm run dev`
- Build: `npm run build`
- Typecheck: `npm exec tsc -- --noEmit`
- Whitespace check: `git diff --check`

## Conventions

- Keep homepage content in `src/data/homepage.ts`.
- Keep project previews lightweight, synthetic, and free of private applicant or job data.
- Use MP4 on the portfolio; use an optimized GIF linked to the MP4 when GitHub README rendering requires it.
- Do not modify related project repositories unless the task explicitly includes them.
- Preserve existing repository changes when working across repos; stage only task-owned files.

## Session Config

project-name: ermis-cv
vcs: github
persistence: true
enforcement: warn
waves: 5
agents-per-wave: 6
test-command: npm run build
typecheck-command: npm exec tsc -- --noEmit
lint-command: git diff --check
recent-commits: 20
stale-branch-days: 7
issue-limit: 50
ssot-files:
  - README.md
  - src/data/homepage.ts
  - C:/latex/github_projects.MD
vault:
  path: C:/Users/Administrator/Projects/vault
  product-domain: portfolio
  persona-db:
