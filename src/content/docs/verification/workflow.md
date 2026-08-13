---
title: Verification Workflow
description: The sequence of checks to run before marking work complete.
---

Verification follows a repeatable sequence so that no important check is skipped.

## The sequence

```text
Plan
↓
Implement
↓
Run
↓
Inspect
↓
Test
↓
Fix
↓
Verify
↓
Update Documentation
↓
Update Status
↓
Record Changes
↓
Checkpoint
```

## The checks

Run the checks that apply to the work that was completed:

1. **Build or startup** — the project compiles or starts without errors.
2. **Runtime behavior** — the finished behavior works when used.
3. **Functional requirements** — the work satisfies the documented requirements.
4. **Responsive behavior** — layouts work on the required screen sizes.
5. **Accessibility basics** — structure, keyboard use, and contrast are reasonable.
6. **RTL/LTR behavior** — text direction works when relevant.
7. **Regressions** — previously working behavior is not broken.
8. **Documentation** — project files reflect the real state.

## For every check

State the real result:

- Passed.
- Failed — with what was done to fix it.
- Not applicable — with a brief reason.

## When verification is complete

- Required checks pass.
- Acceptance criteria were reviewed.
- Known issues are documented.
- Project status reflects the real result.

Related skill: [Verification](/skills/verification/). Related prompt: [Verification](/prompts/verification/).
