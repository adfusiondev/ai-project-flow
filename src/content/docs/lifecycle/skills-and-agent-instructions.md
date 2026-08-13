---
title: Skills and Agent Instructions
description: Prepare reusable workflows and rules so AI coding agents can work consistently on the project.
---

Before implementation begins, the project prepares the reusable workflows and rules that guide AI coding agents.

## What this stage is

This stage creates the agent instructions (`AGENTS.md`) and reusable skills (`skills/`) that tell an AI coding agent how this project should be planned, implemented, verified, documented, and handed off.

## Why it matters

AI coding agents do not share conversation history with each other. Instruction files in the repository are the only reliable way to make every agent follow the same project rules.

## What to prepare

- `AGENTS.md` — working rules, reading order, implementation guidance, and the verification rule.
- `skills/` — reusable workflows such as project discovery, MVP planning, requirements, architecture, implementation planning, project documentation, project status, verification, handoff, and UI implementation.

## What should be completed before moving on

- Agent instructions exist and are readable by the chosen agent environment.
- The skills used by the project are stored under `skills/` and populated.
- Instructions are portable and not tied to one specific tool.

Move to **Implementation** when a new agent can read the repository and understand how to work on it.

Related files: `AGENTS.md`, `skills/`. Related sections: [Skills](/skills/overview/).
