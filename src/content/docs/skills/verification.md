---
title: Verification Skill
description: Verify that completed work satisfies the documented requirements and acceptance criteria.
---

## Purpose

The Verification skill is used to verify that completed work satisfies the documented requirements and acceptance criteria.

## What to verify

- Build or startup.
- Runtime behavior.
- Functional requirements.
- Responsive behavior.
- Accessibility basics.
- RTL/LTR when relevant.
- Known regressions.

## Rules

- Do not mark work complete before verification.
- Compare results against documented acceptance criteria.
- Fix discovered issues before closing the phase.
- Record important failures or limitations.

## Output

Update where relevant:

- `PROJECT_STATUS.md`.
- `CHANGELOG.md`.
- `PLAN.md`.

## Quality gate

Verification is complete when:

- Required checks pass.
- Acceptance criteria were reviewed.
- Known issues are documented.
- Project status reflects the real result.

Location: `skills/verification/SKILL.md`
