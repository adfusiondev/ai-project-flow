---
title: git add
description: Stage changes so they can be committed.
---

```bash
git add <file>
```

## What it does

Adds the given file or files to the staging area, preparing them for the next commit.

## Important parts

- `git` — the version control command.
- `add` — stages the named paths.
- `<file>` — the file or directory to stage; use `.` to stage all changes.

## When to use it

- After making changes, before committing.
- When you want to commit only a specific set of files.

## Expected result

The staged files appear under "Changes to be committed" in `git status`.

## Changes files?

It changes Git's staging state, but it does not modify the project's actual files.
