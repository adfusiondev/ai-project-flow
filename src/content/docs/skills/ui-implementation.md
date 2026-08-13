---
title: UI Implementation Skill
description: Implement or modify user interface elements consistently.
---

## Purpose

The UI Implementation skill is used when implementing or modifying user interface elements.

## Rules

- Follow `docs/DESIGN_SYSTEM.md`.
- Follow `docs/SCREEN_MAP.md`.
- Preserve shared visual patterns.
- Avoid isolated one-page fixes when a shared component or style is affected.
- Keep responsive behavior consistent.
- Respect RTL and LTR requirements.
- Reuse shared styles and components where practical.
- Verify all affected pages after cross-cutting UI changes.

## Verification

Check where relevant:

- Desktop layout.
- Tablet layout.
- Mobile layout.
- Navigation.
- Typography.
- Spacing.
- Code blocks.
- Copy controls.
- RTL/LTR behavior.
- Accessibility basics.

## Quality gate

UI work is complete when:

- Affected pages are consistent.
- Shared rules are reused.
- Responsive behavior is verified.
- No obvious regressions remain.

Location: `skills/ui-implementation/SKILL.md`
