# AI Project Flow — Decisions

## Purpose

This document records important project decisions and the reasoning behind them.

Its purpose is to prevent important choices from being lost, silently reversed, or re-decided without understanding the original context.

Each important decision should include:

- The decision.
- Why it was made.
- Alternatives considered where relevant.
- Current status.

---

## Decision Status Values

Use one of the following statuses:

- Proposed — Under consideration.
- Accepted — Approved and currently in effect.
- Superseded — Replaced by a newer decision.
- Rejected — Considered but intentionally not selected.

---

## DEC-001 — Documentation Website First

Status: Accepted

### Decision

AI Project Flow will begin as a documentation-focused website.

### Reason

The primary goal of the current project is to learn, document, and preserve a reusable software project workflow.

A documentation website is sufficient to achieve the current MVP without introducing unnecessary application complexity.

### Deferred Alternatives

- Interactive project wizard.
- Automatic project generation.
- Backend-powered application.

These may be reconsidered in future phases.

---

## DEC-002 — Personal Project First

Status: Accepted

### Decision

The current project is designed primarily for personal use by the project owner.

### Reason

The immediate objective is learning and building a reusable personal reference.

Public-user requirements are not currently necessary.

### Current Exclusions

The MVP should not introduce:

- User registration.
- Authentication.
- Subscriptions.
- Team management.
- Administrative dashboards.

---

## DEC-003 — Repository as Source of Truth

Status: Accepted

### Decision

Important project knowledge must be stored inside repository files.

### Reason

The project should remain understandable when moved between different IDEs and AI coding agents.

AI conversation history must not be the only place where important project context exists.

### Implications

Important information should be maintained in files such as:

- PROJECT_CONTEXT.md
- PROJECT_STATUS.md
- PLAN.md
- CHANGELOG.md
- HANDOFF.md
- docs/
- skills/

---

## DEC-004 — Tool-Agnostic Workflow

Status: Accepted

### Decision

The project workflow should remain independent from one specific IDE or AI coding agent whenever practical.

### Reason

AI Project Flow is intended to remain usable across tools such as:

- OpenCode.
- Codex.
- Antigravity.
- VS Code.
- Claude Code.
- Other compatible environments.

### Implication

Tool-specific features may be used when useful, but core project knowledge and workflow must remain portable.

---

## DEC-005 — Markdown for Project Documentation

Status: Accepted

### Decision

Markdown will be the default format for project documentation and reusable reference content.

### Reason

Markdown is:

- Human-readable.
- AI-friendly.
- Portable.
- Easy to version.
- Widely supported.
- Easy to edit in different IDEs.

### Exceptions

Other formats may be introduced later when a specific requirement justifies them.

---

## DEC-006 — No Backend in the Current MVP

Status: Accepted

### Decision

The current MVP will not include backend services.

### Reason

The approved MVP consists primarily of documentation content, navigation, examples, prompts, commands, and copy interactions.

These capabilities can be implemented without backend infrastructure.

### Reconsider When

A backend may be reconsidered if future requirements introduce:

- Saved user projects.
- Dynamic project generation.
- User accounts.
- Synchronization.
- Server-side processing.
- External integrations.

---

## DEC-007 — No Database in the Current MVP

Status: Accepted

### Decision

The current MVP will not use a database.

### Reason

Documentation content can remain inside the repository.

There is currently no requirement for persistent user-generated data.

### Reconsider When

A database may be introduced when persistent application data becomes a real requirement.

---

## DEC-008 — OpenCode Documentation as Visual Reference

Status: Accepted

### Decision

The OpenCode documentation experience is the primary visual reference for AI Project Flow.

### Desired Characteristics

- Documentation-first layout.
- Left sidebar.
- Focused main content.
- Optional "On this page" navigation.
- Minimal visual decoration.
- Clean code blocks.
- Strong typography.
- Restrained colors.
- Generous spacing.

### Constraint

AI Project Flow must retain its own identity and must not copy OpenCode branding, logos, or proprietary identity elements.

---

## DEC-009 — Arabic and English Readiness

Status: Accepted

### Decision

The project should remain ready for both Arabic and English documentation.

### Reason

The project owner wants the reference to support both languages.

### Requirements

- Arabic must support RTL.
- English must support LTR.
- Content organization should avoid mixing languages unnecessarily.

### Implementation Note

The MVP may begin with one language first if necessary, provided the structure remains ready for bilingual support.

### Implemented Scope

The site is configured with Starlight multilingual support: English is the root locale (`lang: en`, `dir: ltr`) and Arabic is an additional locale (`lang: ar`, `dir: rtl`) at `/ar/`. Sidebar labels are translated for all 70 navigation items.

- Phase 7: a single Arabic proof page at `/ar/` was committed with explicit approval.
- Phase 1 (Arabic Localization): the home page and all 8 section overview pages were translated, and the prompt copy script was localized.
- Phase 2 (Arabic Localization): all 12 Project Lifecycle stage pages and all 11 Project Files pages were translated with exact structural parity, keeping file names, paths, commands, and technical identifiers LTR where appropriate.
- Phase 3 (Arabic Localization): all 11 Skills pages, 9 Commands pages, 10 Prompts pages, 3 Verification pages, 3 Handoff pages, and 2 Reference pages were translated with exact structural parity.
- The Arabic locale is now fully translated; no Starlight "not yet translated" fallback pages remain.

---

## DEC-010 — Astro + Starlight Selected

Status: Accepted

### Decision

AI Project Flow will use Astro with Starlight for the current documentation website MVP.

### Reason

Astro + Starlight is well suited for documentation websites and provides a simple, fast, Markdown-friendly foundation with built-in documentation features.

### Current Stack

- Frontend: Astro
- Documentation framework: Starlight
- Content: Markdown and MDX
- Backend: None
- Database: None

### Why This Choice

- Simple for a documentation-focused project.
- Free and open source.
- Strong Markdown support.
- Good performance.
- Documentation navigation is already supported.
- Suitable for future Arabic and English content.
- Avoids unnecessary full-stack complexity.

---

## DEC-011 — IBM Plex Sans Arabic for the Arabic Locale

Status: Accepted

### Decision

The Arabic locale uses the self-hosted IBM Plex Sans Arabic font for all prose and UI text. English pages keep the system sans-serif stack.

### Reason

The Arabic version should use a high-quality Arabic typeface rather than relying on whatever Arabic font the visitor's operating system provides. IBM Plex Sans Arabic was chosen for its quality, open-source license, and consistency with the clean, utilitarian feel of the design system.

### Implementation Note

- Font files are self-hosted in `public/fonts/` and declared with `@font-face` in `src/styles/custom.css` (weights 400, 600, 700; `font-display: swap`) — no external font service or runtime dependency is used, matching the project's portability and avoid-dependencies rules.
- The font is applied to the Arabic locale only by overriding `--sl-font-system` under `html[dir='rtl']`, so body, headings, navigation, sidebar, table of contents, pagination, and the Pagefind search UI all inherit it. The copy controls override `font-family` directly.
- Code and inline code keep the monospace stack and LTR direction in both locales.
- The design scale's `h2` weight of `650` is rendered with the closest available Plex weight (`600`).

---

## DEC-012 — Project Files Workflow Redesign

Status: Accepted

### Decision

The Project Files section will be redesigned from static documentation into a fast, action-first workflow that guides the project owner when starting any new software project with any AI coding agent.

### Approved Scope

- Workflow-first UX: "What do I do next?" must be answerable within seconds; the primary action sits at the top of each file page, above explanatory prose.
- Three project modes: Small, Standard, Advanced/Multi-Agent. Projects are not forced to use every file; a non-core file may be skipped, and the UI briefly explains the consequence of skipping it.
- `CHANGELOG.md` is Recommended (not required) for Small projects.
- Project files are organized into five categories: Define the Project, Design the Solution, Execute & Track, Guide AI Agents, Transfer & Continue.
- Reusable prompts follow shared bilingual AI prompt rules: never invent information, use known information first, ask only the minimum necessary questions, never create all files at once, work one stage at a time, preserve valid existing information, update project status when appropriate, stop at a clear checkpoint, and remain tool/IDE/model agnostic.
- Prompt Generator: a frontend-only tool page (no backend, no new framework) using the script-injection pattern (`apf-prompt-generator` in `astro.config.mjs`), implemented with `src/scripts/prompt-generator.ts` and shared data in `src/scripts/prompt-data.ts`. High priority.
- Bilingual English/Arabic; technical file names, commands, paths, and identifiers remain LTR.
- Prototype scope: Start a New Project, the Prompt Generator, `PROJECT_CONTEXT.md`, and `PROJECT_STATUS.md` only. The Prompts section and the remaining Project Files pages remain unchanged until the prototype is validated.

### Reason

The existing file pages are explanatory ("what the file is / why it exists") and do not tell the user what to create next. The redesign converts them into a time-saving guide for starting any new project with any AI coding agent, without creating documentation overhead.

### Implementation Status

- Phase A (Foundation) implemented and verified: shared workflow CSS blocks, shared bilingual prompt rules and file registry in `src/scripts/prompt-data.ts`, the Prompt Generator script skeleton in `src/scripts/prompt-generator.ts`, and the `apf-prompt-generator` script-injection integration.
- Phase B (Prompt Generator) implemented and verified: bilingual tool pages at `/tools/prompt-generator/` and `/ar/tools/prompt-generator/`, the full frontend-only form, URL-prefilled state, and reuse of the existing prompt-block copy behavior.
- Phase C (Prototype Pages) implemented and verified: rewritten Project Files Overview, Start a New Project page with interactive size selector, redesigned PROJECT_CONTEXT.md and PROJECT_STATUS.md pages (EN + AR).
- Phase C2 (Reconciliation) approved and committed: UI/UX reconciliation, visual refinement, button/control alignment.
- Navigation Consistency implemented and verified: contextual Back-to-file / Next-recommended-file navigation on the Prompt Generator.
- Phase D (Navigation and Documentation Reconciliation) implemented and verified: Project Files sidebar reorganized into five workflow categories; Tools section added with the Prompt Generator entry; documentation updated.
- Phase E (Validate and Decide) implemented and verified: end-to-end workflow validation completed; AR sidebar label bug fixed; stale documentation cleaned up. Project Files Workflow Redesign is fully completed.

---

## Current Decision Summary

Accepted decisions:

- Documentation website first.
- Personal project first.
- Repository as source of truth.
- Tool-agnostic workflow.
- Markdown documentation.
- No backend in the MVP.
- No database in the MVP.
- OpenCode documentation as visual reference.
- Arabic and English readiness.
- Astro + Starlight selected for the documentation MVP.
- IBM Plex Sans Arabic for the Arabic locale.
- Project Files Workflow Redesign (Phases A-E implemented, validated, and committed — complete).
