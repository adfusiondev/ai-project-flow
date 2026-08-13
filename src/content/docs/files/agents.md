---
title: AGENTS.md
description: The default working rules for AI coding agents operating on the project.
---

## What it is

`AGENTS.md` defines the default working rules for AI coding agents operating on the project.

## Why it exists

AI coding agents do not share conversation history. This file is the portable contract that makes every agent follow the same planning, implementation, and verification rules.

## When it should be created

Before implementation begins, so agents working on the project follow the same rules.

## When it should be updated

- When working rules change.
- When the reading order or project documentation changes.
- When the verification rule changes.

## What it should contain

- The project purpose and working environment.
- The required reading order before making changes.
- Core working rules.
- The "before implementation" checklist.
- The "during implementation" rules.
- The verification rule and expected sequence.

## Practical example

This repository's `AGENTS.md` requires agents to read `PROJECT_CONTEXT.md`, `PROJECT_STATUS.md`, `PLAN.md`, `HANDOFF.md`, and the relevant `docs/` files before making meaningful changes, and to follow the Plan → Implement → Run → Inspect → Test → Fix → Verify → Update → Record → Checkpoint sequence.

Related section: [Skills and Agent Instructions lifecycle stage](/lifecycle/skills-and-agent-instructions/).
