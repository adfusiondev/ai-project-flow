---
title: Acceptance Criteria Review
description: How to review completed work against the documented acceptance criteria.
---

Acceptance criteria are the explicit conditions that a phase or feature must meet to be considered complete.

## Where the criteria come from

- `PLAN.md` — every phase should define its own acceptance criteria.
- `docs/REQUIREMENTS.md` — functional and non-functional requirements.
- `docs/MVP.md` — MVP success criteria.

## How to review

1. Read the acceptance criteria for the current task before starting, not after.
2. Implement the work.
3. Compare the real result against each criterion.
4. For each criterion, record the evidence and the outcome:

| Criterion | Evidence | Result |
| --- | --- | --- |
| The project builds successfully | `npm run build` completes | Passed |
| Navigation matches the screen map | Sidebar routes verified | Passed |
| Prompts are visually distinct | Prompt block renders | Passed |

5. If any criterion fails, fix the work before marking the task complete.

## Common mistakes to avoid

- Marking work complete because it "should" work.
- Reviewing criteria after the fact against invented requirements.
- Ignoring criteria that are inconvenient to verify.
- Leaving known failures undocumented.

## When the review is complete

- Every criterion has a stated result.
- Failures were fixed or explicitly documented.
- The phase status reflects the real outcome.

Related section: [Verification Workflow](/verification/workflow/).
