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
