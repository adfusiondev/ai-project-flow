---
title: Project Documentation Skill
description: Keep project documentation synchronized with the actual repository state.
---

## Purpose

The Project Documentation skill is used to keep project documentation synchronized with the actual repository state.

## Rules

- Update only files affected by the change.
- Do not document features that do not actually work.
- Keep project files consistent with each other.
- Record important changes and decisions.
- Preserve portability across IDEs and AI agents.

## Review after meaningful changes

Check whether these files need updates:

- `PROJECT_CONTEXT.md`.
- `PROJECT_STATUS.md`.
- `PLAN.md`.
- `CHANGELOG.md`.
- `HANDOFF.md`.
- Relevant files under `docs/`.
- Relevant files under `skills/`.

## Quality gate

Documentation is ready when:

- It matches the real project state.
- No major contradictions remain.
- The current status and next step are clear.

Location: `skills/project-documentation/SKILL.md`
