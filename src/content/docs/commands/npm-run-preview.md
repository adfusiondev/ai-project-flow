---
title: npm run preview
description: Preview the built static site locally.
---

```bash
npm run preview
```

## What it does

Serves the output of `npm run build` from `dist/` so you can review the production build locally before deploying.

## Important parts

- `npm run` — runs a script defined in `package.json`.
- `preview` — the script name for serving the built site.

## When to use it

- After a build, to check that the production output looks and works correctly.

## Expected result

A local URL serving the built site, distinct from the development server.

## Changes files?

No — it only reads `dist/` and serves it locally.
