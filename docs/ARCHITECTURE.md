# AI Project Flow — Architecture

## Purpose

This document defines the technical architecture for the current AI Project Flow MVP.

The architecture should support the approved documentation-focused MVP while remaining simple, portable, maintainable, and ready for future expansion.

The architecture must remain aligned with:

- `PROJECT_CONTEXT.md`
- `docs/MVP.md`
- `docs/REQUIREMENTS.md`

---

## Architecture Principles

The project should follow these principles:

- Keep the MVP technically simple.
- Prefer static or content-driven architecture where practical.
- Avoid backend infrastructure unless a future feature requires it.
- Avoid database integration in the current MVP.
- Keep documentation content separate from presentation logic where practical.
- Keep the project portable across IDEs and AI coding agents.
- Avoid unnecessary framework or vendor lock-in.
- Keep future expansion possible without overengineering the MVP.

---

## Current Application Type

AI Project Flow is currently a documentation website.

The current MVP does not require:

- Authentication.
- User accounts.
- Database storage.
- Backend APIs.
- Dynamic project generation.
- Server-side processing.

The application should primarily render structured documentation content.

---
## Selected Technology

The current MVP will use:

- Astro
- Starlight
- Markdown and MDX content
- No backend
- No database

Astro + Starlight was selected because it provides a simple, fast, documentation-focused foundation with strong Markdown support and minimal unnecessary complexity.
---

## Navigation Structure

The site sidebar organizes content into sections:

- **Start Here** — introduction and quick start.
- **Project Lifecycle** — the 12 lifecycle stages from idea to handoff.
- **Project Files** — file documentation organized into five workflow categories (Define the Project, Design the Solution, Execute & Track, Guide AI Agents, Transfer & Continue), with Overview and Start a New Project as standalone entries.
- **Skills** — reusable AI agent workflows.
- **Commands** — terminal commands with explanations.
- **Prompts** — reusable AI prompts.
- **Verification** — how to confirm work is complete.
- **Handoff** — making a project portable.
- **Reference** — supporting reference content.
- **Tools** — interactive workflow tools (Prompt Generator).

Sidebar categories and their file mappings are defined in `astro.config.mjs` and `src/scripts/prompt-data.ts`.

---

## Recommended Technical Shape

The MVP should use a simple frontend-oriented architecture.

High-level structure:

```text
Documentation Content
        ↓
Content Rendering
        ↓
Documentation Layout
        ↓
Navigation + Copy Interactions + Locale Switching
        ↓
Browser
