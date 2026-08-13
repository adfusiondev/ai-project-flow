---
title: HANDOFF.md
description: The minimum information another IDE or AI coding agent needs to continue the project safely.
---

## What it is

`HANDOFF.md` provides the minimum information needed for another IDE or AI coding agent to understand and continue the project safely.

## Why it exists

The receiving environment should not require access to previous conversation history. This file is the compact summary that makes the project transferable.

## When it should be created

Before the first handoff, and updated whenever the project state changes significantly.

## When it should be updated

- Before the project moves to another environment.
- When the current phase changes.
- When important decisions change.
- When the next recommended step changes.

## What it should include

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

Related section: [Handoff lifecycle stage](/lifecycle/handoff-and-portability/).
