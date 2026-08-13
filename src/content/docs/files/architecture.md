---
title: docs/ARCHITECTURE.md
description: The technical shape of the project and the reasoning behind the chosen approach.
---

## What it is

`docs/ARCHITECTURE.md` defines the technical architecture for the current MVP: the application type, the selected technology, and the high-level structure of the system.

## Why it exists

Architecture decisions are the most expensive ones to reverse. Documenting them — and the alternatives that were rejected — prevents future agents from re-deciding them without the original context.

## When it should be created

After the requirements are complete and before implementation planning.

## When it should be updated

- When the selected technology changes.
- When the application type changes.
- When new technical responsibilities are introduced.

## Practical example

This repository's `docs/ARCHITECTURE.md` records the Astro + Starlight stack, the principle that the MVP needs no backend and no database, and the content-to-browser rendering shape.

Related section: [Architecture lifecycle stage](/lifecycle/architecture/).
