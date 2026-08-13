---
title: Running This Project
description: The setup and run commands for the AI Project Flow repository.
---

## Prerequisites

- Node.js and npm installed.

## Install dependencies

```bash
npm install
```

This installs the dependencies declared in `package.json`, including Astro and Starlight.

## Run the development server

```bash
npm run dev
```

The development server runs at `http://localhost:4321`. Changes to content and styles appear live in the browser.

## Build the static site

```bash
npm run build
```

Output is written to `dist/`.

## Preview the built site

```bash
npm run preview
```

This serves the production build from `dist/` so it can be reviewed locally.

## Expected build notes

The build prints a non-blocking warning that the sitemap integration requires a `site` URL. This is expected until a deployment domain is known.

Related commands: [npm install](/commands/npm-install/), [npm run dev](/commands/npm-run-dev/), [npm run build](/commands/npm-run-build/), [npm run preview](/commands/npm-run-preview/).
