---
title: npm install
description: Install the project dependencies listed in package.json.
---

```bash
npm install
```

## What it does

Installs the dependencies declared in `package.json` into the `node_modules/` directory and creates or updates `package-lock.json`.

## Important parts

- `npm` — the Node.js package manager.
- `install` — the command that downloads and sets up dependencies.

## When to use it

- When you clone or open a project for the first time.
- After a dependency has been added or changed.

## Expected result

A `node_modules/` directory appears and the project's scripts become runnable.

## Changes files?

Yes — it creates `node_modules/` and updates `package-lock.json`. Run `npm install` before `npm run dev` or `npm run build`.
