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

The core documentation content, copy interactions, and localization readiness are implemented and verified. English is the default locale at `/`; an Arabic locale at `/ar/` proves RTL rendering with code and prompt blocks kept LTR.

Verification is complete: the MVP satisfies the documented requirements and success criteria across build, runtime, navigation, responsive behavior, copy, typography, accessibility, RTL/LTR, links, and documentation consistency.

Documentation reconciliation is complete: the workflow docs and lifecycle skill now match the implemented 12-stage lifecycle, and the status files reflect the finished phases.

The handoff checkpoint is complete: the planned MVP is finished and verified, and a new agent can continue from the repository alone without previous conversation history.

Status: Complete — planned MVP delivered (Phases 0-10).

See:

- `PROJECT_CONTEXT.md`
- `PROJECT_STATUS.md`
- `PLAN.md`
- `HANDOFF.md`
- `docs/DESIGN_SYSTEM.md`
- `docs/SCREEN_MAP.md`

## Documentation

Main documentation is located in:

```text
docs/
```
