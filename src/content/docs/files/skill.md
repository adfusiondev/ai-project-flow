---
title: SKILL.md
description: A reusable workflow for a specific project task.
---

## What it is

A `SKILL.md` file defines a reusable workflow for a specific project task. Skills live under `skills/`, each in its own directory.

## Why it exists

Skills give AI coding agents specialized, repeatable instructions for tasks such as discovery, MVP planning, requirements, architecture, verification, and handoff. They make project workflows portable and consistent.

## When it should be created

- When a task will be repeated across projects.
- When an agent should follow a specific workflow for a task.

## When it should be updated

- When the workflow changes.
- When the task's inputs or outputs change.

## What a skill should include

- Purpose.
- When to use it.
- The workflow or rules.
- The expected output files.
- A quality gate.

## Practical example

This repository's `skills/` directory contains skills such as:

- `skills/project-lifecycle/` — the main orchestration workflow.
- `skills/mvp-planning/` — defining the smallest useful version.
- `skills/verification/` — verifying work before marking it complete.
- `skills/handoff/` — preparing the project for another environment.

See the [Skills](/skills/overview/) section for the full list.
