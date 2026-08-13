---
title: Receiving Agent Workflow
description: How a new agent should start on a project it has not seen before.
---

A receiving agent should reconstruct the project checkpoint from the repository before making any changes.

## The workflow

1. **Inspect the repository** — look at the file structure and git state.
2. **Read `AGENTS.md`** — learn the working rules.
3. **Read `PROJECT_CONTEXT.md`** — understand what the project is.
4. **Read `PROJECT_STATUS.md`** — learn the current phase and status.
5. **Read `PLAN.md`** — understand the phases and the current step.
6. **Read `HANDOFF.md`** — read the compact handoff summary.
7. **Compare documentation with the repository** — check for discrepancies.
8. **Continue only after reconstructing the checkpoint** — identify the last completed work and the next step.

## What not to do

- Do not begin implementation before understanding the current phase.
- Do not rely on prior conversation history that the receiving environment does not have.
- Do not repeat completed work.

## If documentation disagrees with the repository

Report the discrepancy before making assumptions. The repository is the primary source of truth, but a documented decision should not be changed silently.

Related skill: [Handoff](/skills/handoff/). Related prompt: [Resume a Project](/prompts/resume-project/).
