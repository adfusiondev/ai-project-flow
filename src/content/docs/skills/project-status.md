---
title: Project Status Skill
description: Keep the current project state clear and easy to understand.
---

## Purpose

The Project Status skill is used to keep the current project state clear and easy to understand.

## Output

Create or update `PROJECT_STATUS.md`.

## What the status should include

- Current Phase.
- Overall Status.
- Completed.
- In Progress.
- Pending.
- Known Issues.
- Blockers.
- Next Recommended Step.

## Rules

- Reflect the actual repository state.
- Do not mark work complete before verification.
- Keep the next step explicit.
- Update status after meaningful project changes.

## Quality gate

The status is ready when another agent can quickly understand:

- Where the project is now.
- What is finished.
- What remains.
- What should happen next.

Location: `skills/project-status/SKILL.md`
