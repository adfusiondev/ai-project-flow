---
title: git log
description: Show the commit history of the repository.
---

```bash
git log --oneline
```

## What it does

Lists the commits in the repository, most recent first.

## Important parts

- `git` — the version control command.
- `log` — shows commit history.
- `--oneline` — displays each commit on a single, compact line.

## When to use it

- To review what has been done in the project.
- To find the last completed checkpoint before continuing work.

## Expected result

A chronological list of commits with their messages and identifiers, for example:

```text
0c77943 feat: establish AI Project Flow documentation MVP foundation
```

## Changes files?

No — it only reads information.
