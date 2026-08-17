---
title: Session Continuity
description: How to preserve project state when a session ends and resume cleanly.
---

Use this workflow when a session is ending, was interrupted, or you need to resume a project in a new session.

## When to use it

- A session is ending (context window filling, work pause, end of day).
- You need to resume a project in a new session.
- A session was interrupted unexpectedly.

## Inputs to inspect first

Before updating or resuming, inspect the current state:

1. `PROJECT_STATUS.md` — current phase and status.
2. `PLAN.md` — completed vs. pending phases.
3. `HANDOFF.md` — compact handoff summary.
4. `git status` — uncommitted work.
5. `CHANGELOG.md` — recent changes.

## Before the session ends

1. **Identify the current task** and its completion state.
2. **Update `PROJECT_STATUS.md`** — reflect actual state, not intended state.
3. **Update `HANDOFF.md`** — record what was done, what is pending, what is next.
4. **Update `CHANGELOG.md`** — record meaningful changes made in this session.
5. **Commit** if there is clean, complete work to preserve.
6. **Do not commit incomplete work** without noting it.
7. **Stop at a clear checkpoint.**

## Resuming a session

1. **Read `AGENTS.md`** — working rules.
2. **Read `PROJECT_CONTEXT.md`** — what the project is.
3. **Read `PROJECT_STATUS.md`** — current state.
4. **Read `PLAN.md`** — phases and progress.
5. **Read `HANDOFF.md`** — compact summary.
6. **Verify documentation matches repository state.** Run `git status` and a build check.
7. **Identify the last completed checkpoint** and the next step.
8. **Continue from there.**

## Stop condition

The session is properly closed when:

- Documentation is up to date.
- State is committed (or intentionally uncommitted with notes).
- A receiving agent could continue without conversation history.

The session is properly resumed when:

- Documentation matches repository state.
- The last completed checkpoint is identified.
- The next step is clear.

## What NOT to do

- Do not leave documentation stale.
- Do not commit incomplete work without noting it.
- Do not rely on conversation history that the next session will not have.
- Do not skip the verification step when resuming.

## Related

- [Resume a Project](/prompts/resume-project/) — the prompt for resuming from repository state.
- [Preparing a Handoff](/handoff/preparing/) — what to update before a project moves.
- [Receiving Agent Workflow](/handoff/receiving/) — how a new agent should start on the project.
- [HANDOFF.md](/files/handoff/) — the compact handoff summary.
