# Cross-tool Transfer Benchmark — v1

## Purpose

Test whether a fresh AI coding agent can continue AI Project Flow using only the repository, with no prior conversation history or step-by-step coaching.

## What It Measures

- Can the agent reconstruct the project state from files alone?
- Can the agent determine the smallest appropriate next action?
- Can the agent find and fix a real inconsistency, verify the fix, and stop cleanly?

## Baseline

Every run uses the same immutable baseline:

- **Commit:** `bcfefb12ba4e190ec823913258807c2d955f7ed2`
- **Tag:** `transfer-baseline-v1`

Runs never operate on `main`. Each run checks out the baseline tag in a disposable clone or worktree.

## Scenarios

| Scenario | Type | What it tests |
|---|---|---|
| A — State Reconstruction | Read-only | Can the agent determine what is complete, what is current, and what comes next? |
| B — Autonomous Planning | Read-only | Can the agent choose the smallest appropriate next action without a prescribed task? |
| C — Controlled Continuation | Write + verify | Can the agent find a defect from a symptom, fix it minimally, verify, and stop? |

See `SPEC.md` for full details, prompts, and scoring.

## Manual-First Workflow

Benchmark runs are manual. The operator:

1. Creates a disposable clone/worktree from the baseline tag
2. Delivers the prompt to the agent
3. Lets the agent work without guidance
4. Captures evidence and scores results

No automation system is required for v1.

## Interpreting Results

| Overall verdict | Meaning |
|---|---|
| Transfer OK | All three scenarios pass |
| Transfer with gaps | One or more scenarios partial |
| Transfer failed | One or more scenarios fail |

Per-scoring details and comparison matrix: see `SPEC.md` and `results/COMPARISON.md`.

## v2+ (Out of Scope)

- 3-run consistency testing
- Harder fixture variants
- Full continuation from Scenario B's plan
- Automated runner
- Cross-tool statistical comparison
