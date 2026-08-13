# AI Project Flow

## Project Purpose

AI Project Flow is a personal learning and reference project for understanding and documenting the complete lifecycle of building software projects with AI coding agents.

The project is designed to preserve the steps, files, commands, prompts, skills, decisions, verification practices, and handoff processes used during development so they can be reused in future projects and understood by different IDEs and AI agents.

## Primary User

The current primary user is the project owner.

AI Project Flow is currently a personal tool for learning, documenting, and reusing a complete AI-assisted software development workflow.

The project should not assume public users, user accounts, subscriptions, teams, or commercial requirements unless those needs are explicitly introduced later.

## Current Product Form

AI Project Flow is currently a documentation website.

Its initial purpose is to present the complete software project lifecycle in a clear, structured, and reusable way.

The website will focus on explanations, project files, examples, terminal commands, AI prompts, skills, verification practices, and copyable reference content.
 
## Current MVP

The current MVP is a documentation-focused reference experience.

It includes:

- Clear explanations of each project lifecycle stage.
- The purpose of important project files.
- Real examples of files such as PLAN.md, AGENTS.md, PROJECT_CONTEXT.md, and SKILL.md.
- Terminal commands with simple explanations.
- Ready-to-use AI prompts.
- Copyable code blocks and reference content.

The MVP does not currently require dynamic project generation, a backend, user accounts, or a database.

## Future Scope

Possible future expansions may include:

- An interactive project setup wizard.
- Automatic generation of project files and templates.
- Downloadable project starter packs.
- Reusable project templates for different project types.
- Interactive skills and command libraries.
- Optional backend functionality if future features require it.
- More advanced project handoff and portability tools.

These features are intentionally deferred until the documentation-focused MVP is stable and useful.

## Content Structure

AI Project Flow will organize its reference content around the main stages and artifacts involved in building software projects with AI assistance.

The documentation may include:

- Project lifecycle stages.
- Project discovery and idea clarification.
- MVP planning.
- Requirements definition.
- Architecture planning.
- Implementation planning.
- Project files and their purposes.
- Reusable AI skills.
- Terminal commands with explanations.
- Ready-to-use AI prompts.
- Verification and testing practices.
- Project status tracking.
- Change documentation.
- Project handoff and portability between IDEs and AI agents.

## Design Reference

The primary visual reference for AI Project Flow is the OpenCode documentation website.

The project should follow a similar documentation experience, including:

- A clean and minimal documentation layout.
- A left sidebar for navigation.
- A clear main content area.
- An optional right-side "On this page" navigation.
- Simple top navigation.
- Clean code blocks.
- Strong typography hierarchy.
- Generous spacing.
- A restrained and consistent color system.
- Support for light and dark themes when appropriate.

AI Project Flow should remain its own project and should not copy OpenCode branding, logos, or proprietary identity elements.

## Languages

AI Project Flow will support both Arabic and English.

The documentation should be written and structured so that both languages can be maintained clearly without mixing content unnecessarily.

Arabic content should support right-to-left (RTL) layout where needed, while English content should use left-to-right (LTR) layout.

The initial implementation may begin with one language first if that keeps the MVP simpler, but the project structure should remain ready for bilingual support.

## Portability Goal

AI Project Flow should remain portable across different IDEs, editors, and AI coding agents.

The repository itself should be treated as the primary source of truth for project knowledge.

Important project context, decisions, plans, status, workflows, and handoff information should be stored in project files rather than relying only on conversation history or a specific AI tool.

The project should remain understandable and maintainable when moved between tools such as OpenCode, Codex, Antigravity, VS Code, Claude Code, or other compatible development environments.

## Core Project Rules

- Do not start implementation before the current planning stage is understood.
- Do not skip project phases without a documented reason.
- Do not silently change previously accepted decisions.
- Keep the project simple, portable, and tool-agnostic.
- Store important project knowledge in repository files, not only in AI conversation history.
- Update project documentation after meaningful changes.
- Verify implementation before marking work as complete.
- Keep future ideas separate from the current MVP unless they are explicitly approved.

## Current Status

The planning and preparation stages are complete.

The MVP is implemented and verified across all planned phases:

- Project folder structure created.
- Core project documentation files created.
- Reusable project skills populated.
- Frontend technology selected: Astro + Starlight.
- Astro + Starlight project foundation implemented and verified.
- Design system implemented according to `docs/DESIGN_SYSTEM.md`.
- Core documentation content implemented across all nine sections (141 pages built, including the Arabic locale) according to `PLAN.md` and `docs/SCREEN_MAP.md`.
- Copy and documentation interactions implemented and verified (prompt and code-block copy with feedback).
- Localization readiness implemented and verified (English root locale plus an Arabic locale at `/ar/` with RTL support).
- Verification completed against the documented requirements and the `docs/MVP.md` success criteria.

The design system is implemented in `src/styles/custom.css` and wired into the Starlight configuration.

The full plan is complete and verified (Phases 0-10, including the Phase 10 handoff checkpoint). A new agent can continue the project from the repository alone. The next step is outside the current plan: deploy the site (set a `site` URL for the sitemap) and optionally begin the deferred future-scope items such as the bilingual Arabic content.
