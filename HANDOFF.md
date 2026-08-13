# AI Project Flow — Handoff

## Purpose

This file provides the minimum information needed for another IDE or AI coding agent to understand and continue the project safely.

The receiving environment should not require access to previous conversation history.

---

## Project

Name: AI Project Flow

Type: Documentation website

Current Purpose:

A personal learning and reusable reference project for documenting the complete lifecycle of building software projects with AI coding agents.

---

## Current Phase

Phase 4 — Design System Implementation

Status: Completed

The shared design system is implemented in `src/styles/custom.css` and verified in light and dark themes.

The next phase is Phase 5 — Core Documentation Content.

---

## Current MVP

The MVP includes:

- Project lifecycle explanations.
- Project file documentation.
- Practical examples.
- Terminal commands with explanations.
- Reusable AI prompts.
- Copyable reference content.
- Documentation-style navigation.

The MVP currently excludes:

- Backend services.
- Database integration.
- Authentication.
- User accounts.
- Dynamic project generation.
- Automatic file generation.

---

## Completed

- Core project documentation files completed.
- Reusable project `SKILL.md` files populated.
- Frontend technology selected and recorded (`DEC-010`): Astro + Starlight.
- Astro + Starlight project initialized.
- Starter template content replaced with the AI Project Flow documentation shell.
- Main navigation structure configured with the planned sections.
- Start Here page and one overview page per planned section created.
- `npm install` verified.
- `npm run build` verified (10 pages built, search index generated).
- Development server verified (`npm run dev`).

- Completed `docs/DESIGN_SYSTEM.md` with the full visual spec.
- Completed `docs/SCREEN_MAP.md` with the full navigation structure.
- Implemented the design system in `src/styles/custom.css` (`--apf-` tokens).
- Wired `customCss` into `astro.config.mjs`.
- Styled the sidebar, code blocks, prompt blocks, and copy controls.
- Added the RTL/LTR foundation and both light and dark themes.
- Verified the build, routes, computed styles, responsive behavior, and RTL behavior.

---

## Skills Status

Reusable project skills exist and are populated under `skills/`:

- `skills/project-lifecycle/`
- `skills/project-discovery/`
- `skills/mvp-planning/`
- `skills/requirements/`
- `skills/architecture/`
- `skills/implementation-planning/`
- `skills/project-documentation/`
- `skills/project-status/`
- `skills/verification/`
- `skills/handoff/`
- `skills/ui-implementation/`

---

## Important Decisions

Current accepted decisions include:

- Documentation website first.
- Personal project first.
- Repository as source of truth.
- Tool-agnostic workflow.
- Markdown-first documentation.
- No backend in the MVP.
- No database in the MVP.
- Arabic and English readiness.
- OpenCode documentation as the primary visual reference.
- Frontend technology: Astro + Starlight.

See:

`docs/DECISIONS.md`

for the full reasoning.

---

## Design Direction

The visual direction is inspired by the OpenCode documentation experience.

The interface should prioritize:

- Minimal documentation layout.
- Left sidebar navigation.
- Focused main content.
- Optional "On this page" navigation.
- Clean code blocks.
- Restrained colors.
- Strong typography.
- Generous spacing.
- RTL and LTR readiness.

See:

`docs/DESIGN_SYSTEM.md`

---

## How to Run

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:4321`.

Build the static site:

```bash
npm run build
```

Output is written to `dist/`.

---

## Repository Structure

Project path:

`/Users/mac/Desktop/ai-project-flow`

Implementation:

- `astro.config.mjs` — Starlight site configuration and navigation.
- `src/styles/custom.css` — the shared design system implementation.
- `src/content/docs/` — documentation content (Markdown and MDX).
- `public/` — static assets.
- `src/content.config.ts` — content collection definition.

Documentation:

- `docs/` — project planning and reference documentation.

Skills:

- `skills/` — reusable project skills.

---

## Required Reading for a Receiving Agent

Before making changes, read:

1. `AGENTS.md`
2. `PROJECT_CONTEXT.md`
3. `PROJECT_STATUS.md`
4. `PLAN.md`
5. `HANDOFF.md`
6. `docs/MVP.md`
7. `docs/REQUIREMENTS.md`
8. `docs/ARCHITECTURE.md`
9. `docs/DECISIONS.md`
10. Relevant files under `docs/`
11. Relevant files under `skills/`

---

## Known Issues

None currently.

Note: the build prints a non-blocking warning that the sitemap integration requires a `site` URL. This is expected until a deployment domain is known.

---

## Blockers

None currently.

---

## Next Recommended Step

Continue with Phase 5 — Core Documentation Content according to `PLAN.md`.

Scope:

- Start Here.
- Project Lifecycle.
- Project Files.
- Skills.
- Commands.
- Prompts.
- Verification.
- Handoff.
- Reference.

Use the shared design system patterns in `src/styles/custom.css` (for example the `.prompt-block` structure) when adding prompts and examples.

---

## Receiving Agent Rule

Do not begin implementation immediately.

First:

- Inspect the repository.
- Read the project documentation.
- Verify that documentation matches the actual repository.
- Reconstruct the current checkpoint.
- Report any discrepancy.
- Continue from the documented next step.

The repository is the primary source of truth.
