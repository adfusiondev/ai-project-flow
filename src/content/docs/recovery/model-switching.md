---
title: Model Switching
description: How to change AI models or tools mid-project without losing state or progress.
---

Use this workflow when you need to switch from one AI model or tool to another during a project.

## When to use it

- Switching from one AI model to another (e.g., Claude to GPT, OpenCode to Cursor).
- A model hits a limitation (context window, capability, availability).
- You want to compare approaches across models.
- Moving from one IDE to another.

## Inputs to inspect first

Before switching, prepare the state:

1. `PROJECT_STATUS.md` — current phase and status.
2. `HANDOFF.md` — compact summary for the receiving model.
3. `AGENTS.md` — working rules the new model needs.
4. Current task state — is the current task complete or in progress?

## Recommended sequence

1. **Pause or complete the current task** before switching. Do not switch mid-edit.
2. **Update project documentation** (`PROJECT_STATUS.md`, `HANDOFF.md`) to reflect actual state.
3. **Identify what the new model needs to know:** project identity, current phase, completed work, next step, constraints.
4. **Use the Handoff workflow** to prepare a clean state.
5. **Switch model or tool.**
6. **Have the new model read the repository** following the [Receiving Agent Workflow](/handoff/receiving/).
7. **Verify the new model understands** the project state before continuing.
8. **Continue from the documented next step.**

## Stop condition

The switch is complete when:

- The new model has read the repository.
- The new model can state the current phase and next step without prompting.
- No work was lost during the transition.

## What NOT to do

- Do not assume the new model has context from the previous model.
- Do not switch mid-task without documenting the current state.
- Do not skip the receiving agent workflow for the new model.
- Do not continue without verifying the new model understands the project.

## Related

- [Handoff](/handoff/overview/) — preparing a project for transfer.
- [Receiving Agent Workflow](/handoff/receiving/) — how a new agent should start on the project.
- [Resume a Project](/prompts/resume-project/) — the prompt for resuming from repository state.
- [AGENTS.md](/files/agents/) — the working rules the new model needs.
