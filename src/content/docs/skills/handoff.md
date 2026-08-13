---
title: Handoff Skill
description: Prepare a project for continuation in another IDE or AI coding agent.
---

## Purpose

The Handoff skill is used to prepare a project for continuation in another IDE or AI coding agent.

## Before handoff

Update:

- `PROJECT_STATUS.md`.
- `PLAN.md`.
- `CHANGELOG.md`.
- `HANDOFF.md`.

## What a handoff must include

- Current phase.
- Completed work.
- Remaining work.
- Known issues.
- Important decisions.
- Setup and run commands.
- Next recommended step.

## Receiving agent workflow

The receiving agent should:

1. Inspect the repository.
2. Read `AGENTS.md`.
3. Read `PROJECT_CONTEXT.md`.
4. Read `PROJECT_STATUS.md`.
5. Read `PLAN.md`.
6. Read `HANDOFF.md`.
7. Compare documentation with the actual repository.
8. Continue only after reconstructing the current checkpoint.

## Quality gate

The handoff is ready when another agent can continue without needing previous conversation history.

Location: `skills/handoff/SKILL.md`
