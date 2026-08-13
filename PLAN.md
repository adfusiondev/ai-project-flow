# AI Project Flow — Implementation Plan

## Goal

Build the approved documentation-focused MVP in controlled phases.

The plan must remain aligned with:

* `PROJECT_CONTEXT.md`
* `docs/MVP.md`
* `docs/REQUIREMENTS.md`
* `docs/ARCHITECTURE.md`
* `docs/DECISIONS.md`
* `docs/SCREEN_MAP.md`
* `docs/DESIGN_SYSTEM.md`

---

## Phase 0 — Planning Foundation

Status: Completed

### Objective

Prepare the project context, requirements, architecture, workflows, screen map, design direction, and agent rules before implementation.

### Completed Files

* `PROJECT_CONTEXT.md`
* `docs/MVP.md`
* `docs/REQUIREMENTS.md`
* `docs/ARCHITECTURE.md`
* `docs/DECISIONS.md`
* `docs/WORKFLOWS.md`
* `docs/SCREEN_MAP.md`
* `docs/DESIGN_SYSTEM.md`
* `AGENTS.md`
* `PROJECT_STATUS.md`

### Completion Criteria

* Project scope is clear.
* MVP is defined.
* Requirements are documented.
* Architecture is defined.
* Important decisions are recorded.
* Navigation and design direction are documented.
* Project status is current.

---

## Phase 1 — Final Project Preparation

Status: Completed

### Objective

Complete the remaining portable project-management files and reusable skills.

### Completed

* `PLAN.md` created.
* `CHANGELOG.md` completed.
* `HANDOFF.md` completed.
* Reusable project `SKILL.md` files populated.
* Core project documentation prepared.
* Repository structure made understandable without relying on conversation history.

### Acceptance Criteria

* All core project files contain useful content.
* Skills define reusable project workflows.
* The next implementation step is explicit.

---

## Phase 2 — Technology Selection

Status: Completed

### Objective

Select the simplest suitable frontend technology for the MVP.

### Selected Stack

* Frontend: Astro
* Documentation framework: Starlight
* Content: Markdown
* Backend: None
* Database: None

### Decision

Astro + Starlight was selected because it provides a simple, fast, documentation-focused foundation with strong Markdown support and avoids unnecessary full-stack complexity.

The decision is recorded in `docs/DECISIONS.md` (`DEC-010`) and reflected in `docs/ARCHITECTURE.md`.

### Acceptance Criteria

* Technology choice is justified.
* No unnecessary backend or database is introduced.
* The selected approach supports the approved MVP.

---

## Phase 3 — Project Foundation

Status: Completed

### Objective

Create the runnable Astro + Starlight project and basic documentation shell.

### Scope

* Astro + Starlight initialization.
* Base application structure.
* Main documentation layout.
* Top navigation.
* Left sidebar.
* Main content area.
* Optional right-side "On this page" structure.
* Basic responsive behavior.

### Implemented

* Astro + Starlight project initialized (`package.json`, `astro.config.mjs`, `tsconfig.json`).
* Starter template content replaced with the AI Project Flow documentation shell.
* Starlight sidebar configured with the planned MVP sections:
  * Start Here
  * Project Lifecycle
  * Project Files
  * Skills
  * Commands
  * Prompts
  * Verification
  * Handoff
  * Reference
* Start Here page created at `src/content/docs/index.mdx`.
* One overview page created per planned section under `src/content/docs/`.

### Verification

* `npm install` succeeds.
* `npm run build` succeeds (10 pages built, search index generated).
* `npm run dev` starts and serves all routes with HTTP 200.
* Full navigation structure renders in the sidebar.
* No critical runtime errors.

### Acceptance Criteria

* Project installs successfully. — Passed
* Development server starts successfully. — Passed
* Documentation shell renders. — Passed
* Main navigation structure is visible. — Passed
* No critical runtime errors. — Passed

---

## Phase 4 — Design System Implementation

Status: Completed

### Objective

Implement the documented visual system consistently.

### Scope

* Typography.
* Colors.
* Spacing.
* Borders.
* Content width.
* Sidebar styling.
* Code blocks.
* Prompt blocks.
* Copy controls.
* Responsive rules.
* RTL/LTR foundation.
* Theme readiness.

### Implemented

* `docs/DESIGN_SYSTEM.md` completed with the full visual spec (typography, colors, spacing, borders, content width, sidebar, code blocks, prompt blocks, copy controls, responsive rules, RTL/LTR foundation, theme readiness).
* `docs/SCREEN_MAP.md` completed with the full navigation and page structure.
* Shared design tokens implemented in `src/styles/custom.css` using the `--apf-` prefix.
* Starlight theme variables remapped to the design tokens so framework components follow the design system.
* `customCss: ['/src/styles/custom.css']` wired into `astro.config.mjs`.
* Sidebar styling, code block styling, prompt block styling, and copy control styling implemented.
* RTL/LTR foundation implemented with logical CSS properties; code blocks stay LTR in RTL contexts.
* Light and dark themes implemented from the same token structure.

### Verification

* `npm run build` succeeds (10 pages built, search index generated).
* Development server serves all routes with HTTP 200.
* Computed styles verified in light and dark themes across desktop and mobile viewports.
* Design tokens resolve correctly; sidebar, code blocks, prompt blocks, copy controls, and inline code render with the documented values.
* Active sidebar link shows the documented accent state.
* Responsive behavior verified at `1440px` and `390px` viewports.
* RTL foundation verified: prompt block accent border flips via logical properties; code blocks remain LTR in RTL contexts.

### Acceptance Criteria

* UI follows `docs/DESIGN_SYSTEM.md`. — Passed
* Layout resembles the approved OpenCode-inspired direction. — Passed
* Shared styles are reusable. — Passed
* No unnecessary page-specific styling system is introduced. — Passed

---

## Phase 5 — Core Documentation Content

Status: Next

### Objective

Implement the main MVP documentation sections.

### Scope

* Start Here.
* Project Lifecycle.
* Project Files.
* Skills.
* Commands.
* Prompts.
* Verification.
* Handoff.
* Reference.

### Acceptance Criteria

* Main documentation sections are accessible.
* Navigation matches `docs/SCREEN_MAP.md`.
* Content hierarchy is consistent.
* Important commands, examples, and prompts are clearly presented.

---

## Phase 6 — Copy and Documentation Interactions

Status: Not Started

### Objective

Add the lightweight interactions required by the MVP.

### Scope

* Copy buttons for commands.
* Copy buttons for prompts.
* Copy buttons for reusable examples.
* Clear copy feedback.
* Sidebar behavior on smaller screens.
* On-page navigation where appropriate.

### Acceptance Criteria

* Copy interactions work reliably.
* No backend is required.
* Interactions remain simple and accessible.

---

## Phase 7 — Localization Readiness

Status: Not Started

### Objective

Ensure the implementation can support Arabic and English correctly.

### Scope

* RTL support.
* LTR support.
* Language-aware layout structure.
* Code and terminal blocks remain appropriately LTR.
* Navigation behavior works in both directions.

### Acceptance Criteria

* Arabic content can render correctly in RTL.
* English content renders correctly in LTR.
* Layout does not require a major redesign to support both languages.

---

## Phase 8 — Verification

Status: Not Started

### Objective

Verify the MVP against documented requirements.

### Verification Areas

* Build.
* Runtime.
* Navigation.
* Responsive behavior.
* Copy functionality.
* Typography and visual consistency.
* Accessibility basics.
* RTL/LTR behavior.
* Requirement coverage.
* Broken links or missing pages.
* Documentation consistency.

### Acceptance Criteria

* Critical requirements pass.
* Known issues are documented.
* No major regression remains.
* MVP success criteria in `docs/MVP.md` are satisfied.

---

## Phase 9 — Documentation Reconciliation

Status: Not Started

### Objective

Synchronize project documentation with the final implemented state.

### Tasks

Update where necessary:

* `PROJECT_CONTEXT.md`
* `PROJECT_STATUS.md`
* `PLAN.md`
* `CHANGELOG.md`
* `HANDOFF.md`
* `docs/`
* `skills/`

### Acceptance Criteria

* Documentation matches the actual repository.
* Completed phases are correctly marked.
* Remaining future scope is clearly separated.
* Next recommended step is documented.

---

## Phase 10 — Handoff Checkpoint

Status: Not Started

### Objective

Make the project ready to continue in another IDE or AI coding agent.

### Acceptance Criteria

A new agent should be able to determine:

* What the project is.
* How to run it.
* What is complete.
* What remains.
* What decisions were made.
* What the next step is.

The receiving agent should not require the previous conversation history.

---

## Current Plan Status

Current phase:

`Phase 5 — Core Documentation Content`

Completed:

* Phase 0 — Planning Foundation
* Phase 1 — Final Project Preparation
* Phase 2 — Technology Selection
* Phase 3 — Project Foundation
* Phase 4 — Design System Implementation

Selected stack:

* Astro
* Starlight
* Markdown
* No backend
* No database

Next tasks:

1. Begin Phase 5 — Core Documentation Content.
2. Follow `docs/SCREEN_MAP.md` for navigation and `docs/REQUIREMENTS.md` for content requirements.
3. Use the design system classes defined in `src/styles/custom.css` (for example the `.prompt-block` structure) as the shared patterns for prompts and examples.
