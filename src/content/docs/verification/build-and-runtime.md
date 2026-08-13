---
title: Build and Runtime Checks
description: How to verify that the project builds and runs correctly.
---

Build and runtime checks confirm that the implementation actually compiles and works, not just that it looks correct in the source.

## Build check

Run the build and confirm it completes:

```bash
npm run build
```

What to look for:

- The build completes without errors.
- The expected number of pages is reported.
- Any warnings are understood and documented (for example, a sitemap warning that appears until a deployment domain is known).

## Runtime check

Start the development server and confirm the routes respond:

```bash
npm run dev
```

What to look for:

- The server starts and prints a local URL.
- The main routes load and return HTTP 200.
- Content, navigation, and shared styles render as expected.
- No critical runtime errors appear in the browser console.

## Preview check

After a production build, verify the built output locally:

```bash
npm run preview
```

## What counts as passing

- Build succeeds.
- Routes load correctly.
- No critical runtime errors.
- Any warnings or limitations are documented.

Related commands: [npm run build](/commands/npm-run-build/), [npm run dev](/commands/npm-run-dev/), [npm run preview](/commands/npm-run-preview/).
