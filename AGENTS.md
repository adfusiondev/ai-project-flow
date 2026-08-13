# AI Project Flow — Agent Instructions

## Purpose

This file defines the default working rules for AI coding agents operating on AI Project Flow.

The repository itself is the source of truth.

Agents must not rely only on conversation history, hidden memory, or assumptions when project files provide the required context.

---

## Supported Development Environments

AI Project Flow should remain understandable and maintainable across environments such as:

- OpenCode
- Codex
- Antigravity
- VS Code
- Claude Code
- Other compatible AI coding environments

Do not assume that the same agent or IDE will continue the project forever.

---

## Required Reading Order

Before making meaningful changes, read the following files when relevant:

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

The goal is to understand the current project state before changing it.

---

## Core Working Rules

- Do not begin implementation before understanding the current phase.
- Do not skip documented project phases without a clear reason.
- Do not silently change accepted decisions.
- Do not introduce future-scope features into the current MVP without explicit approval.
- Keep changes focused on the current task.
- Avoid unrelated refactors.
- Prefer simple and maintainable solutions.
- Keep the project portable and tool-agnostic.
- Store important project knowledge in repository files.
- Do not treat AI conversation history as the only project memory.

---

## Before Implementation

Before implementing a meaningful change:

1. Identify the current phase.
2. Read the relevant requirements.
3. Read relevant architecture decisions.
4. Read the related skill if one exists.
5. Confirm what is in scope.
6. Confirm what is out of scope.
7. Identify acceptance criteria.
8. Identify the files or areas likely to be affected.

If documentation and implementation disagree, report the discrepancy before making assumptions.

---

## During Implementation

While implementing:

- Change only what is necessary.
- Preserve existing functionality unless the task explicitly changes it.
- Avoid introducing unnecessary dependencies.
- Avoid replacing existing architecture without documenting the reason.
- Keep files and naming clear.
- Reuse shared patterns instead of creating page-specific or feature-specific duplication.
- Respect RTL and LTR requirements when UI work is involved.
- Respect the documented design system when UI work is involved.

---

## Verification Rule

Writing code is not enough to mark work complete.

A task should only be considered complete when:

- The implementation exists.
- The relevant build or runtime checks pass.
- Required functionality has been tested.
- Acceptance criteria have been reviewed.
- Important regressions have been checked.
- Documentation has been updated where needed.

The expected sequence is:

```text
Plan
↓
Implement
↓
Run
↓
Inspect
↓
Test
↓
Fix
↓
Verify
↓
Update Documentation
↓
Update Status
↓
Record Changes
↓
Checkpoint
