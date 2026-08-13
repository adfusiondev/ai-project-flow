# Handoff Skill

## Purpose

Use this skill to prepare a project for continuation in another IDE or AI coding agent.

## Before Handoff

Update:

- `PROJECT_STATUS.md`
- `PLAN.md`
- `CHANGELOG.md`
- `HANDOFF.md`

## Handoff Must Include

- Current phase
- Completed work
- Remaining work
- Known issues
- Important decisions
- Setup and run commands
- Next recommended step

## Receiving Agent Workflow

The receiving agent should:

1. Inspect the repository.
2. Read `AGENTS.md`.
3. Read `PROJECT_CONTEXT.md`.
4. Read `PROJECT_STATUS.md`.
5. Read `PLAN.md`.
6. Read `HANDOFF.md`.
7. Compare documentation with the actual repository.
8. Continue only after reconstructing the current checkpoint.

## Quality Gate

The handoff is ready when another agent can continue without needing previous conversation history.
