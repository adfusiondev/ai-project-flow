---
title: Architecture
description: Choose the simplest technical approach that supports the approved MVP.
---

Architecture defines the technical shape of the project: the technology, the structure, and the boundaries between parts.

## What this stage is

This stage chooses the simplest technical approach that can support the approved MVP and documents why that approach was chosen.

## Why it matters

Architecture decisions are the most expensive ones to reverse. Documenting them — including the alternatives that were rejected — prevents future agents from re-deciding them without the original context.

## What to document

- The current application type.
- The selected technology stack.
- The high-level structure of the system.
- The reasoning behind important choices.
- Explicit decisions to avoid backend, database, or other infrastructure unless a real requirement exists.

## Rules to follow

- Start from the requirements, not from a preferred framework.
- Avoid overengineering.
- Do not add backend, database, or infrastructure without a real requirement.
- Record important technical decisions in `docs/DECISIONS.md`.

## What should be completed before moving on

- `docs/ARCHITECTURE.md` exists.
- The architecture supports the current MVP.
- Responsibilities are clear.
- Unnecessary complexity is avoided.
- Important decisions are recorded.

Move to **Implementation Planning** when the architecture is simple, documented, and sufficient for the MVP.

Related files: `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`. Related skill: [Architecture](/skills/architecture/).
