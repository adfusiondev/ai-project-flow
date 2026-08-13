# AI Project Flow — Changelog

All meaningful project changes should be recorded here.

---

## 2026-08-13

### Added

- Created the initial `AI Project Flow` project structure.
- Created core project documentation files.
- Created reusable `skills/` directories.
- Completed `PROJECT_CONTEXT.md`.
- Completed `docs/MVP.md`.
- Completed `docs/REQUIREMENTS.md`.
- Completed `docs/ARCHITECTURE.md`.
- Completed `docs/DECISIONS.md`.
- Completed `docs/WORKFLOWS.md`.
- Completed `docs/SCREEN_MAP.md`.
- Completed `docs/DESIGN_SYSTEM.md`.
- Completed `AGENTS.md`.
- Completed `PROJECT_STATUS.md`.
- Completed `PLAN.md`.
- Completed `CHANGELOG.md`.
- Completed `HANDOFF.md`.
- Populated reusable project `SKILL.md` files.
- Selected the frontend technology and recorded `DEC-010`.

### Phase 3 — Project Foundation

- Initialized the Astro + Starlight project (`package.json`, `astro.config.mjs`, `tsconfig.json`, `public/`, `src/`).
- Replaced the starter template content with the AI Project Flow documentation shell.
- Configured the Starlight sidebar with the planned MVP navigation sections.
- Created the Start Here page and one overview page per planned section.
- Verified `npm install`, `npm run build`, and the development server.

### Phase 4 — Design System Implementation

- Completed `docs/DESIGN_SYSTEM.md` with the full visual spec (typography, colors, spacing, borders, content width, sidebar, code blocks, prompt blocks, copy controls, responsive rules, RTL/LTR foundation, and theme readiness).
- Completed `docs/SCREEN_MAP.md` with the full navigation and page structure.
- Implemented the shared design system in `src/styles/custom.css` using `--apf-` tokens.
- Remapped Starlight theme variables to the design tokens.
- Wired `customCss` into `astro.config.mjs`.
- Styled the sidebar, code blocks, prompt blocks, and copy controls.
- Added the RTL/LTR foundation using logical CSS properties.
- Implemented light and dark themes from the same token structure.
- Verified the build, all routes, computed styles, responsive behavior, and RTL behavior.

### Decisions

- The current product is a documentation-focused website.
- The project is currently intended for personal use.
- The repository is the primary source of truth.
- The workflow must remain portable across IDEs and AI coding agents.
- Markdown is the default documentation format.
- No backend is required for the current MVP.
- No database is required for the current MVP.
- Arabic and English readiness is required.
- OpenCode documentation is the primary visual reference.
- Frontend technology: Astro + Starlight (`DEC-010`).

### Current State

The planning and project preparation stages are complete.

The Astro + Starlight project foundation is implemented and verified.

The design system is implemented and verified.

### Next

- Implement the core documentation content (Phase 5).
