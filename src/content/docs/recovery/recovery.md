---
title: Recovery
description: How to return to a known-good state after something breaks.
---

Use this workflow when the project state is broken, unclear, or inconsistent.

## When to use it

- Build fails after changes.
- Implementation produced incorrect or unwanted results.
- Repository state is unclear or inconsistent.
- You suspect the current state is broken.

## Inputs to inspect first

Before making any changes, inspect the actual state:

1. `git status` — what is uncommitted?
2. `git diff` / `git log --oneline -5` — what changed recently?
3. `PROJECT_STATUS.md` — what does documentation claim is the current state?
4. `HANDOFF.md` — what was the last recorded checkpoint?
5. Build output — does the project build cleanly?

## Recommended sequence

1. **Describe the symptom.** What is broken? What error appears? What behavior is wrong?
2. **Do not assume the cause.** The symptom is the starting point, not the diagnosis.
3. **Inspect repository state.** Check git history, file changes, and build output.
4. **Compare documentation with reality.** Does `PROJECT_STATUS.md` match what is actually in the repository? Does `HANDOFF.md` reflect the last checkpoint?
5. **Decide: fix forward or roll back.**
   - **Fix forward** if the problem is a small, targeted issue you can correct.
   - **Roll back** if the changes are large, unclear, or the cause is unknown. Use `git revert` or `git checkout` to return to the last known-good commit.
6. **Execute the chosen path.**
7. **Verify.** Build passes, functionality works, documentation matches.
8. **Update documentation** if the recovery changed project state. Update `PROJECT_STATUS.md` and `CHANGELOG.md` as needed.
9. **Stop at a clear checkpoint.**

## Stop condition

The recovery is complete when:

- The build passes.
- Functionality is verified.
- Documentation reflects the actual state.

## What NOT to do

- Do not trust conversation memory over repository state.
- Do not invent missing project state.
- Do not proceed without verifying the fix.
- Do not make large unrelated changes during recovery.

## Related

- [Verification Workflow](/verification/workflow/) — the checks to run after recovery.
- [Build and Runtime Checks](/verification/build-and-runtime/) — how to verify the project builds and runs.
- [HANDOFF.md](/files/handoff/) — the compact handoff summary to compare against.
