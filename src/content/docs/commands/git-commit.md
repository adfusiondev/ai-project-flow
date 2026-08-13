---
title: git commit
description: Record staged changes in the repository history.
---

```bash
git commit -m "message"
```

## What it does

Records the staged changes as a permanent entry in the project's commit history.

## Important parts

- `git` — the version control command.
- `commit` — creates the commit from staged changes.
- `-m "message"` — the commit message describing the change.

## When to use it

- After staging meaningful, reviewed changes.
- When a checkpoint should be preserved in history.

## Expected result

A new commit is created. `git log` will show it in the history.

## Changes files?

It records changes in Git history but does not modify the project's content. Only commit changes you intend to keep.
