---
title: git status
description: Show the current state of the working tree.
---

```bash
git status
```

## What it does

Shows which files have been changed, which are staged for commit, and which are untracked.

## Important parts

- `git` — the version control command.
- `status` — shows the state of the working tree and staging area.

## When to use it

- Before committing, to review what will be committed.
- To check whether the repository is clean or has pending changes.

## Expected result

A summary such as `nothing to commit, working tree clean` when there are no pending changes, or a list of modified, staged, and untracked files.

## Changes files?

No — it only reads information.
