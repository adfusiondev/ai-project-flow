---
title: git diff
description: Show the differences between files or states.
---

```bash
git diff
```

## What it does

Shows the exact changes made to tracked files, line by line.

## Important parts

- `git` — the version control command.
- `diff` — shows differences.
- Add `--staged` to show changes that are already staged for commit.

## When to use it

- Before committing, to review exactly what changed.
- To check that a change matches what was intended.

## Expected result

A line-by-line listing of removed and added lines, with `-` for removed lines and `+` for added lines.

## Changes files?

No — it only reads information.
