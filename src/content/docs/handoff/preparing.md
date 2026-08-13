---
title: Preparing a Handoff
description: What to update before a project moves to another environment.
---

Before a project moves to another IDE or AI coding agent, its repository files must be brought up to date.

## What to update

- **`PROJECT_STATUS.md`** — current phase, overall status, completed work, in-progress work, pending work, known issues, blockers, and next recommended step.
- **`PLAN.md`** — completed phases marked, current phase identified, next step explicit.
- **`CHANGELOG.md`** — the meaningful changes made since the last checkpoint.
- **`HANDOFF.md`** — the compact summary described below.

## What HANDOFF.md must include

- Project name and type.
- Current phase and status.
- Current MVP.
- Completed work.
- Skills status.
- Important decisions.
- Design direction.
- How to run the project.
- Repository structure.
- Known issues and blockers.
- Next recommended step.

## The final check

Before calling the handoff ready, verify that a fresh agent can answer:

- What is this project?
- How do I run it?
- What has been completed?
- What is currently in progress?
- What remains?
- What is the next step?

If any of these cannot be answered from the repository, the handoff is not ready.

Related files: `HANDOFF.md`. Related skill: [Handoff](/skills/handoff/).
