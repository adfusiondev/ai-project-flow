# Benchmark Fixture — v1

## Purpose

A single, reproducible, bounded navigation/content-consistency defect derived from the baseline. The receiving agent must find and fix it from a symptom-first prompt without being told the root cause or exact file.

## Baseline

- **baseline_commit:** `bcfefb12ba4e190ec823913258807c2d955f7ed2`
- **baseline_tag:** `transfer-baseline-v1`

## Defect

Remove the existing Recovery & Continuity cross-link from the English verification overview page, creating an EN/AR parity inconsistency.

### EN fixture file

`src/content/docs/verification/overview.md`

### AR mirror (unchanged)

`src/content/docs/ar/verification/overview.md`

### Exact line removed

```
If verification uncovers a broken state, an agent error, or a need to switch models, see [Recovery & Continuity](/recovery/overview/) for workflows that cover recovery, session continuity, model switching, and agent failure handling.
```

## Fixture details

- **fixture_commit:** `23fd661bb17aa0270873c938adfc14ea5f1754d7`
- **fixture_tag:** `benchmark-fixture-v1`

## Reset procedure (before each run)

```
git checkout benchmark-fixture-v1
```

For write scenarios (Scenario C), create a disposable branch from the fixture tag:

```
git checkout -b benchmark-run-[date] benchmark-fixture-v1
```

The fixture tag is never modified after creation. Each run starts from the same clean state. Runs never work on a detached HEAD or on the fixture tag directly.
