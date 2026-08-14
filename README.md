# AI Project Flow

AI Project Flow is a personal documentation and learning project for understanding and preserving a complete AI-assisted software project lifecycle.

## Current Purpose

The project documents:

- Project discovery
- MVP planning
- Requirements
- Architecture
- Decisions
- Implementation planning
- Project skills
- Verification
- Project status
- Handoff between IDEs and AI agents

## Current MVP

A documentation-focused website with:

- Clear lifecycle explanations
- Project file examples
- Terminal commands
- Reusable AI prompts
- Copyable reference content
- Documentation-style navigation

## Tech Stack

- Frontend: Astro
- Documentation framework: Starlight
- Content: Markdown and MDX
- Backend: None
- Database: None

## Run Locally

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

## Project Status

The planning and project preparation stages are complete.

The Astro + Starlight project foundation and the shared design system are implemented and verified.

The core documentation content, copy interactions, and localization readiness are implemented and verified. English is the default locale at `/`; Arabic is served at `/ar/` with RTL rendering and code and prompt blocks kept LTR.

Verification is complete: the MVP satisfies the documented requirements and success criteria across build, runtime, navigation, responsive behavior, copy, typography, accessibility, RTL/LTR, links, and documentation consistency.

Arabic localization is complete: the home page, all section overview pages (Phase 1), all 12 Project Lifecycle stage pages plus all 11 Project Files pages (Phase 2), and all Skills, Commands, Prompts, Verification, Handoff, and Reference pages (Phase 3) are translated into professional Arabic with exact structural parity.

Status: Complete — planned English MVP delivered (Phases 0-10); Arabic localization delivered (Phases 1-3 complete).

See:

- `PROJECT_CONTEXT.md`
- `PROJECT_STATUS.md`
- `PLAN.md`
- `HANDOFF.md`
- `docs/DESIGN_SYSTEM.md`
- `docs/SCREEN_MAP.md`

## Saved Experiment — OpenCode-style Logo Benchmark

A private visual benchmark lives in `docs/logo-benchmark/`: it reconstructs the OpenCode wordmark's design language applied to "AI PROJECT FLOW".

- Produced a **partial visual approximation**, not a sufficiently accurate reproduction.
- Intentionally saved as a checkpoint; resumable later.
- Separate from the application and **not the approved production logo**.

See `docs/logo-benchmark/README.md`.

## Documentation

Main documentation is located in:

```text
docs/
```
