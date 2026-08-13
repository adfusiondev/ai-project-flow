---
title: Workflow at a Glance
description: The project lifecycle and supporting workflows summarized in one view.
---

## Core project lifecycle

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

## The verification sequence

```text
Plan → Implement → Run → Inspect → Test → Fix → Verify
→ Update Documentation → Update Status → Record Changes → Checkpoint
```

Related sections: [Project Lifecycle](/lifecycle/overview/), [Project Files](/files/overview/), [Verification](/verification/overview/).
