---
title: Handoff and Portability
description: Make the project continueable in another IDE or AI coding agent without prior conversation history.
---

Handoff prepares the project to be continued by another IDE or AI coding agent.

## What this stage is

The project's documentation and status are brought up to date so that a receiving agent can reconstruct the checkpoint from repository files alone.

## What a handoff must include

- Current phase.
- Completed work.
- Remaining work.
- Known issues.
- Important decisions.
- Setup and run commands.
- Next recommended step.

## Before handoff

Update:

- `PROJECT_STATUS.md`.
- `PLAN.md`.
- `CHANGELOG.md`.
- `HANDOFF.md`.

## Why it matters

AI coding agents and IDEs do not share conversation history. A project is portable when its repository files contain everything needed to continue it.

## What should be completed before moving on

- Documentation matches the actual repository.
- The next step is explicit.
- A receiving agent can continue without previous conversation history.

Related files: `HANDOFF.md`. Related sections: [Handoff](/handoff/overview/). Related skill: [Handoff](/skills/handoff/).
