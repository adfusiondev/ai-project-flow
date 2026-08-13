# AI Project Flow — Workflows

## Purpose

This document defines the main workflows used throughout AI Project Flow.

A workflow describes the order in which project activities should happen and the conditions required before moving to the next step.

The goal is to keep project work consistent, understandable, portable, and easy to continue across different IDEs and AI coding agents.

---

## Core Project Lifecycle

The default lifecycle for a new software project is:

```text
Idea and Discovery
↓
Project Context
↓
MVP Definition
↓
Requirements
↓
Architecture
↓
Implementation Planning
↓
Skills and Agent Instructions
↓
Implementation
↓
Verification and Testing
↓
Project Status Updates
↓
Change Documentation
↓
Handoff and Portability
```

## The files each stage produces

| Stage | Main files |
| --- | --- |
| Idea and Discovery | `PROJECT_CONTEXT.md` |
| Project Context | `PROJECT_CONTEXT.md` |
| MVP Definition | `docs/MVP.md` |
| Requirements | `docs/REQUIREMENTS.md` |
| Architecture | `docs/ARCHITECTURE.md`, `docs/DECISIONS.md` |
| Implementation Planning | `PLAN.md` |
| Skills and Agent Instructions | `AGENTS.md`, `skills/` |
| Implementation | source and content files |
| Verification and Testing | updates `PROJECT_STATUS.md`, `CHANGELOG.md`, `PLAN.md` |
| Project Status Updates | `PROJECT_STATUS.md` |
| Change Documentation | `CHANGELOG.md`, `docs/DECISIONS.md` |
| Handoff and Portability | `HANDOFF.md` |

## The per-phase working loop

Work advances in phases. Each phase follows the same working loop, and the loop is repeated for every phase until the lifecycle reaches handoff:

```text
Plan
↓
Implement
↓
Run
↓
Inspect
↓
Test
↓
Fix
↓
Verify
↓
Update Documentation
↓
Update Status
↓
Record Changes
↓
Checkpoint
↓
Next Phase
```
