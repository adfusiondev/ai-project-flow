---
title: Agent Failure Handling
description: How to respond when an AI agent produces incorrect results or violates constraints.
---

Use this workflow when an AI agent produces incorrect results, gets stuck, or violates project constraints.

## When to use it

- Agent produces incorrect or unwanted code.
- Agent gets stuck in a loop.
- Agent violates project constraints (scope creep, wrong approach).
- Agent makes changes that break existing functionality.
- Agent cannot complete a task within its capabilities.

## The Symptom-First Principle

This principle applies throughout agent failure handling:

1. **Describe the visible symptom.** What is wrong? What error appears? What behavior is unexpected?
2. **Do not assume the cause.** The symptom is the starting point, not the diagnosis.
3. **Inspect runtime and repository state.** Check what changed, what the build says, what the runtime shows.
4. **Let the agent identify the root cause.** Ask the agent to explain what went wrong before telling it how to fix it.
5. **Verify the fix visually or operationally.** Build passes, functionality works, no regressions.
6. **Give technical instructions only if the agent fails or exceeds project constraints.**

## Inputs to inspect first

1. What did the agent change? (`git diff`)
2. What was the expected behavior vs. actual behavior?
3. Does the build pass?
4. What constraints or rules did the agent have? (`AGENTS.md`, relevant skill)

## Recommended sequence

1. **Describe the symptom clearly.** Be specific about what is wrong.
2. **Inspect what the agent changed.** Use `git diff`, build output, and runtime behavior.
3. **Ask the agent to identify the root cause** using the Symptom-First Principle.
4. **If the agent can fix it:** let the agent fix, then verify.
5. **If the agent cannot fix it:** try a different approach — rephrase the task, break it into smaller steps, provide more context.
6. **If the agent exceeds constraints:** stop the agent, revert changes, and reassess.
7. **If the task is beyond the agent's capability:** switch to a more capable model or handle manually.
8. **Verify the fix:** build passes, functionality works, no regressions.
9. **Update documentation** if the failure changed project state.

## Stop condition

The failure is resolved when:

- Root cause is identified.
- Fix is applied and verified.
- Documentation is updated if needed.
- No regressions remain.

## What NOT to do

- Do not assume the cause from the symptom alone.
- Do not let the agent continue without verification.
- Do not give up too early — sometimes a different approach works.
- Do not revert everything without understanding what went wrong.
- Do not skip documentation updates after a failure recovery.

## Related

- [Verification Workflow](/verification/workflow/) — the checks to run after fixing.
- [Acceptance Criteria Review](/verification/acceptance-criteria/) — how to review against documented criteria.
- [Recovery](/recovery/recovery/) — the broader recovery workflow for broken states.
- [Skills](/skills/overview/) — the constraints and rules agents should follow.
