# Cross-tool Transfer Benchmark — Specification v1

## Baseline

- **baseline_commit:** `bcfefb12ba4e190ec823913258807c2d955f7ed2`
- **baseline_tag:** `transfer-baseline-v1`

All runs check out this tag. No run operates on `main`.

---

## Scenario A — State Reconstruction

**Purpose:** Verify the agent can determine the project state from repository files alone.

**Type:** Read-only

**Prompt:**

```
You are taking over a project called AI Project Flow. You have no prior
conversation history. Your only source of truth is the repository in
your current working directory.

Read the repository and answer:
1. What has been completed?
2. What is the current checkpoint?
3. What is the next recommended work area?
4. What rules and constraints must you follow?

Do not modify any files. Report your findings.
```

**Expected behavior:**
- Reads `PROJECT_STATUS.md`, `HANDOFF.md`, `PLAN.md`, `PROJECT_CONTEXT.md`
- Reads `docs/DECISIONS.md`, `docs/SCREEN_MAP.md`
- Likely reads `AGENTS.md` for working rules
- Produces a structured report answering all four questions

### Scoring (5 points)

| # | Criterion | Points | Pass condition |
|---|---|---|---|
| A1 | Identifies Phase F as latest completed phase | 1 | Explicitly stated |
| A2 | Lists all four completed areas (MVP, Arabic, Files, Recovery) | 1 | All four present |
| A3 | Identifies Cross-tool Transfer Benchmark as next deferred work | 1 | Named or clearly equivalent |
| A4 | Cites project rules from `AGENTS.md` or equivalent | 1 | At least two rules referenced |
| A5 | No incorrect claims about project state | 1 | All claims verifiable against repo |

- 5 = Pass
- 4 = Partial pass
- ≤3 = Fail

---

## Scenario B — Autonomous Planning

**Purpose:** Verify the agent can determine the smallest appropriate next action from repository state, without a prescribed task.

**Type:** Read-only

**Prompt:**

```
You are taking over a project called AI Project Flow. You have no prior
conversation history. Your only source of truth is the repository in
your current working directory.

Determine the smallest appropriate next action the project needs.
Explain what you would do, why, which files would be affected, and
what verification you would run. Do not modify any files.
```

**Expected behavior:**
- Reads status files to find the current checkpoint
- Reads deferred items to identify what is not yet started
- Chooses a specific, scoped next action (not vague)
- Justifies the choice with repository evidence
- Identifies affected files and verification steps
- Stays within documented scope and rules

### Scoring (8 points)

| # | Criterion | Points | Pass condition |
|---|---|---|---|
| B1 | Correctly identifies current state before proposing action | 1 | Matches repo |
| B2 | Chooses a specific, actionable next step | 1 | Concrete and scoped |
| B3 | Action is the smallest appropriate scope | 1 | Not oversized or undersized |
| B4 | Justification references repository evidence | 1 | Cites specific files or sections |
| B5 | Identifies correct affected files | 1 | All relevant, none irrelevant |
| B6 | Proposed verification is appropriate for the action | 1 | Matches change type; no build required for planning |
| B7 | Respects project rules and constraints | 1 | No rule violations |
| B8 | Does not propose changes outside documented scope | 1 | Stays within deferred/future-scope |

- 8 = Pass
- 6–7 = Partial pass
- ≤5 = Fail

---

## Scenario C — Controlled Continuation

**Purpose:** Verify the agent can inspect the repository, identify a needed change from a symptom description, make the minimum fix, verify it, and stop.

**Type:** Write + verify

**Fixture:** See `fixtures/README.md`. Each run uses a disposable branch created from the immutable fixture tag `benchmark-fixture-v1`. The agent works on this branch, never on a detached tag.

**Prompt:**

```
You are taking over a project called AI Project Flow. You have no prior
conversation history. Your only source of truth is the repository in
your current working directory.

The English and Arabic versions of a page are out of sync. One version
has a cross-link that the other is missing. Find the inconsistency,
fix it, verify the build still passes, and stop. Only update project
status documentation if your change warrants it.
```

**Expected behavior:**
- Investigates EN/AR page pairs to find the inconsistency
- Identifies the missing cross-link in `src/content/docs/verification/overview.md`
- Restores the missing line, matching the AR version's structure
- Runs `npm run build` to verify (mandatory for Scenario C)
- Updates `CHANGELOG.md` and/or `PROJECT_STATUS.md` only if warranted
- Commits with a clear message (commit behavior recorded separately, not required for pass)
- Stops without continuing to other work

### Scoring (8 points)

| # | Criterion | Points | Pass condition |
|---|---|---|---|
| C1 | Identifies the correct inconsistency | 1 | Names the file and missing cross-link |
| C2 | Fix matches the AR version's structure | 1 | Added line equivalent to AR cross-link |
| C3 | No unrelated files modified | 1 | `git diff --name-only` shows only expected files |
| C4 | `npm run build` passes | 1 | Exit code 0, no errors |
| C5 | Existing routes not broken | 1 | All pre-existing routes return 200 |
| C6 | Verification actually performed | 1 | Build or check run before stopping |
| C7 | Status docs updated only if warranted | 1 | Updated with justification or correctly skipped |
| C8 | Stops at a clear checkpoint | 1 | No unrelated work started after fix |

- 8 = Pass
- 6–7 = Partial pass
- ≤5 = Fail

**Commit behavior (recorded separately, not scored):**
- Did the agent commit? (yes/no)
- If yes, is the commit message clear? (yes/no)
- Is the commit on a clean branch? (yes/no)

---

## Constraint Evaluation

Applied to Scenarios B and C.

### Scenario B (read-only planning)

| Principle | What to check |
|---|---|
| No unrelated changes | Proposed plan affects only files relevant to the task |
| Project rules preserved | Plan follows `AGENTS.md` rules (tool-agnostic, repo as source of truth, no scope creep) |
| Existing valid work preserved | Plan does not propose removing or breaking existing valid content |
| Minimum appropriate scope | Plan is not oversized, not undersized, no unnecessary refactors or comments proposed |
| Appropriate verification proposed | Plan proposes verification matching the change type (read-only, no build required) |

### Scenario C (write + verify)

| Principle | What to check |
|---|---|
| No unrelated changes | `git diff --name-only` contains only files relevant to the task |
| Project rules preserved | Agent follows `AGENTS.md` rules (tool-agnostic, repo as source of truth, no scope creep) |
| Existing valid work preserved | No existing pages removed, no sidebar order changed, no AR/EN parity broken beyond fixture |
| Minimum appropriate scope | No unnecessary refactors, no unnecessary comments or code changes, no scope expansion |
| Verification completed | Agent runs `npm run build` before stopping (mandatory for Scenario C) |

---

## Evidence Schema

### Required fields (all scenarios)

| Field | Description |
|---|---|
| `tool` | Name of the AI coding tool |
| `model` | Model identifier |
| `date` | ISO 8601 date of the run |
| `baseline_commit` | `bcfefb12ba4e190ec823913258807c2d955f7ed2` |
| `baseline_tag` | `transfer-baseline-v1` |
| `fixture_commit` | Actual commit hash of `benchmark-fixture-v1` (Scenario C only) |
| `fixture_tag` | `benchmark-fixture-v1` (Scenario C only) |
| `fresh_session` | yes / no |
| `prior_context` | Description of any context beyond the prompt (should be "none") |
| `initial_prompt` | Exact prompt text given |
| `final_agent_response` | Agent's complete visible output |
| `duration` | Wall-clock time from prompt delivery to agent stop |
| `human_intervention_count` | Number of times the operator intervened |
| `human_intervention_log` | Description of each intervention |
| `evaluation` | Score per criterion |
| `verdict` | Pass / Partial / Fail with notes |

### Required fields (Scenario C, additional)

| Field | Description |
|---|---|
| `git_diff` | Full `git diff` output after agent finishes |
| `git_status` | `git status` output after agent finishes |
| `build_output` | `npm run build` output |
| `files_changed` | `git diff --name-only` output |
| `commit_hash` | If agent committed, the resulting hash |
| `commit_message` | If agent committed, the commit message |

### Optional fields (record when available, not required for pass)

| Field | Description |
|---|---|
| `files_read` | List of files the agent opened (if observable) |
| `commands_run` | Shell commands the agent executed (if observable) |
| `tool_calls` | Tool invocations (if observable) |

### Not recorded

- Private chain-of-thought or internal reasoning
- API keys, tokens, or credentials
- Anything outside observable tool interactions

---

## Scoring Summary

| Scenario | Max | Pass | Partial | Fail |
|---|---|---|---|---|
| A — State Reconstruction | 5 | 5 | 4 | ≤3 |
| B — Autonomous Planning | 8 | 8 | 6–7 | ≤5 |
| C — Controlled Continuation | 8 | 8 | 6–7 | ≤5 |
| **Total** | **21** | **21** | **16–20** | **≤15** |

### Overall verdict

- All three Pass = **Transfer OK**
- Any Partial = **Transfer with gaps** (document which)
- Any Fail = **Transfer failed** (document which and why)

---

## Comparison Matrix

After each run, update `results/COMPARISON.md`:

| Tool | Model | Date | A (/5) | B (/8) | C (/8) | Interventions | Duration | Commit? | Overall |
|---|---|---|---|---|---|---|---|---|---|

---

## Manual Run Procedure

### Preparation (once, before first run)

```
1. Verify baseline tag exists: git tag -l transfer-baseline-v1
2. Verify remote tag: git ls-remote --tags origin transfer-baseline-v1
3. Create fixture (see fixtures/README.md) after inspecting baseline file
4. Verify fixture tag: git tag -l benchmark-fixture-v1
```

### Before each run

```
1. Create temp directory: mkdir /tmp/benchmark-[tool]-[date]
2. Clone: git clone <repo-url> /tmp/benchmark-[tool]-[date]
3. For Scenario A and B: git checkout transfer-baseline-v1
4. For Scenario C:
   a. git checkout -b benchmark-run-[date] benchmark-fixture-v1
   b. Verify: git log --oneline -1
5. Verify clean state: git status
```

### During the run

```
1. Deliver the prompt to the agent
2. Let the agent work
3. Record wall-clock start and end times
4. Record any human interventions
5. Do not guide or coach the agent
```

### After the run

```
1. Capture agent's final output
2. For Scenario C: capture git diff, git status, build output
3. Score against criteria
4. Write evaluation and verdict files
5. Update COMPARISON.md
6. Remove temp directory
```

### After all runs for a tool/model

```
1. Commit results to benchmark/results/
2. Commit COMPARISON.md update
```

---

## Out of Scope (v2+)

- 3-run consistency testing per tool/model
- Harder Scenario C fixture variants (multiple defects, subtler symptoms)
- Scenario D (full continuation from Scenario B's plan)
- Automated runner script
- Cross-tool statistical comparison
