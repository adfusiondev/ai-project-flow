---
title: Overview
description: What to do when something goes wrong during a project.
---

This section covers what to do when something goes wrong during a project — a failed build, an interrupted session, a model change, or an agent error. These workflows assume the repository is the source of truth.

## Shared principles

:::caution[Recovery principles]
1. The repository is the source of truth — not conversation memory.
2. Describe the symptom before assuming the cause.
3. Inspect actual state before making changes.
4. Verify after every recovery action.
5. Update documentation to reflect what actually happened.
6. Stop at a clear checkpoint.
:::

## Pages in this section

- [Recovery](/recovery/recovery/) — get back to a known-good state after something breaks.
- [Session Continuity](/recovery/session-continuity/) — preserve state when a session ends and resume cleanly.
- [Model Switching](/recovery/model-switching/) — change AI models or tools mid-project without losing progress.
- [Agent Failure Handling](/recovery/agent-failure/) — respond when an agent produces incorrect results or violates constraints.

## When to use these workflows

Use these workflows when:

- A build fails after changes.
- An implementation produced incorrect or unwanted results.
- A session ended and you need to resume.
- You are switching from one AI model or tool to another.
- An agent got stuck, made errors, or exceeded its constraints.

These workflows are complementary to the happy-path lifecycle. The normal flow is: discover, plan, implement, verify, handoff. These workflows cover what happens when that flow is interrupted.

## How these connect to the rest of the project

- **Lifecycle**: the normal project stages (Idea → Handoff). Recovery workflows can be triggered at any stage.
- **Verification**: confirms that recovery was successful.
- **Handoff**: prepares a clean state for transfer. Recovery handles what happens when transfer fails.
- **Project Files**: the documentation files (`PROJECT_STATUS.md`, `HANDOFF.md`, `PLAN.md`) that recovery workflows read and update.
