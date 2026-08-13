---
title: npm run dev
description: Start the local development server.
---

```bash
npm run dev
```

## What it does

Starts the Astro development server with hot reloading, so changes to content and styles appear immediately in the browser.

## Important parts

- `npm run` — runs a script defined in `package.json`.
- `dev` — the script name for the development server.

## When to use it

- During development, when you want to view changes live.
- When you need to inspect routes and content in the browser.

## Expected result

The server prints a local URL, by default `http://localhost:4321`. Open it in a browser to view the site.

## Changes files?

No — it only reads the project and serves it locally.
