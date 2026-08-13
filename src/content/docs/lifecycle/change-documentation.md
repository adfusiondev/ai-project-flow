---
title: Change Documentation
description: Record meaningful changes and important decisions so project history stays in the repository.
---

Change documentation keeps a record of what changed, when it changed, and why.

## What this stage is

Meaningful changes are recorded in `CHANGELOG.md`, and important choices are recorded in `docs/DECISIONS.md`. This preserves the history that AI conversation history would otherwise lose.

## Why it matters

Projects are continued by different agents over time. If a change is not documented, a future agent may repeat it, reverse it, or not understand why it exists.

## What to record

- New features and completed phases.
- Important implementation details.
- Meaningful decisions and their reasoning.
- Verification results.
- Known issues and limitations.

## Rules to follow

- Update only files affected by the change.
- Do not document features that do not actually work.
- Keep project files consistent with each other.
- Record important changes and decisions.

Move to **Handoff and Portability** when the change record matches the real repository state.

Related files: `CHANGELOG.md`, `docs/DECISIONS.md`. Related skill: [Project Documentation](/skills/project-documentation/).
