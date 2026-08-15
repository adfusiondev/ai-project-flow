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

## Saved Experiment — OpenCode-style Logo Benchmark

A private visual benchmark was executed in `docs/logo-benchmark/` to evaluate how closely the OpenCode header wordmark's design language could be reconstructed for "AI PROJECT FLOW".

- The benchmark reached a **partial visual approximation**, but not a sufficiently accurate reproduction.
- The current result is intentionally saved as a **checkpoint**; this area can be resumed later if needed.
- The benchmark is **temporarily integrated** into the site header (compact wordmark, light/dark variants) and favicon **for visual evaluation only**; it remains **not the approved production logo** and will be removed or replaced after evaluation. This is consistent with the project rule that AI Project Flow must not copy OpenCode branding, logos, or proprietary identity elements — the benchmark is a study only, and its deliverables do not reproduce the OpenCode mark itself.

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

The planning and preparation stages are complete, and the core English MVP is implemented and verified.

The Arabic localization is complete:

- **Phase 1 (High-Level Overview Pages)**: Complete. Sidebar translations are configured, the prompt copy script is localized, the Arabic home page matches the English layout, and all 8 section overview pages have been translated into professional Arabic.
- **Phase 2 (Lifecycle & Files Sections)**: Complete. All 12 Project Lifecycle stage pages and all 11 Project Files pages have been translated into professional Arabic, preserving exact structural parity with the English pages and keeping commands, code, file names, paths, and technical identifiers LTR where appropriate.
- **Phase 3 (Remaining Sections)**: Complete. All 11 Skills pages, 9 Commands pages, 10 Prompts pages, 3 Verification pages, 3 Handoff pages, and 2 Reference pages have been translated into professional Arabic.
- **Verification**: Complete. The production build (141 pages, sitemap, Pagefind index) builds without error; every Arabic route serves real translated content with `dir="rtl"` (no fallback notices remain); and RTL/LTR behavior, sidebar labels, on-page navigation, pagination, copy controls, language switching, Arabic search results, and the mobile layout were verified in the browser.
- **Deployment**: Complete. The site is deployed and live on Vercel at https://ai-project-flow.vercel.app.

The Arabic locale provides fully translated content across the entire site, and the site is deployed and live on Vercel at https://ai-project-flow.vercel.app.
