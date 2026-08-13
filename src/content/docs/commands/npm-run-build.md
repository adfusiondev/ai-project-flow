---
title: npm run build
description: Build the static site into the dist directory.
---

```bash
npm run build
```

## What it does

Builds the static site and writes the output to `dist/`. It compiles the content, generates the search index, and reports the number of pages built.

## Important parts

- `npm run` — runs a script defined in `package.json`.
- `build` — the script name for the production build.

## When to use it

- Before shipping or deploying.
- After significant changes, to verify the site still builds.
- As part of the [verification](/verification/build-and-runtime/) workflow.

## Expected result

A `dist/` directory with the generated static site. The build reports something like `10 page(s) built`. A sitemap warning about a missing `site` URL is expected until a deployment domain is known.

## Changes files?

Yes — it creates or overwrites the `dist/` output directory.
