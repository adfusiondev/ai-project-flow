# AI Project Flow — Logo Concept · “The Flow Node”

Concept stage. The application has **not** been modified — everything below lives in
`docs/logo/` as design deliverables for review.

Open `preview.html` in a browser (or view `preview.png`) to see all variants rendered.

---

## 1 · The mark

The mark is a workflow drawn as a tiny diagram — one input, one decision, two outcomes:

```
          ▲
          │ branch (up)
          │
  ┌────┐  │  ◇───┐
  │    │──┘      │  main path (right)
  └────┘         ┘
    ▲
    │ entry (from below)
```

- **Square node** — the project file / code block. A terminal cursor turned into a
  building block. It receives the flow from below.
- **Diamond node** — the decision point where a project is shaped. In flowchart
  grammar a diamond *is* a decision; read differently, it is the square node rotated
  45° into motion — “the project begins to flow”.
- **Main path** — the delivery line continuing forward.
- **Ascending branch** — a path splits off the decision point: branching paths,
  alternative workflows, handoff.

Everything sits on an 8px unit grid. Nodes are 16×16; bars are 8px. Only axis-aligned
and 45° edges exist, so every join is mathematically exact at any size.

## 2 · Why it fits AI Project Flow

- **It depicts the product.** Lifecycle stages (flow), files and code (square node),
  decisions made with AI (diamond), branching agent workflows (the fork).
- **Technical, not decorative.** No brain icons, no robot heads, no gradients. It reads
  like something a developer would draw on a whiteboard — and that is the brand.
- **Terminal DNA.** The square is a block cursor; the wordmark is monospace. It inherits
  the site’s developer character and pairs with the IBM Plex Sans Arabic already used on
  the site (IBM Plex Mono is the same superfamily).
- **Survives small sizes.** Solid 16px/8px geometry collapses cleanly to a favicon.
- **Theme-native.** Two-color light/dark variants follow the design system tokens; the
  favicon switches ink via `prefers-color-scheme`, matching the existing favicon pattern.

## 3 · Deliverables

| File | Contents |
| --- | --- |
| `ai-project-flow-logo.svg` | Primary lockup, light background |
| `ai-project-flow-logo-dark.svg` | Primary lockup, dark background |
| `ai-project-flow-mark.svg` | Standalone mark, light background |
| `ai-project-flow-mark-dark.svg` | Standalone mark, dark background |
| `ai-project-flow-logo-stacked.svg` | Stacked lockup, light background |
| `ai-project-flow-logo-stacked-dark.svg` | Stacked lockup, dark background |
| `ai-project-flow-favicon.svg` | Simplified favicon, theme-aware (`prefers-color-scheme`) |
| `preview.html` / `preview.png` | Presentation page / rendered preview |
| `fonts/` | IBM Plex Mono 400/700 (OFL) used by the wordmark |

## 4 · Specification

**Color — light (on white/light surfaces)**

| Role | Token | Value |
| --- | --- | --- |
| Diamond (decision) | Accent | `#3B3ECE` — `hsl(239 60% 52%)` |
| Nodes & bars | Ink / text primary | `#272C34` — `hsl(220 14% 18%)` |

**Color — dark (on dark surfaces)**

| Role | Token | Value |
| --- | --- | --- |
| Diamond (decision) | Accent | `#7678E5` — `hsl(239 68% 68%)` |
| Nodes & bars | Ink / text primary | `#EDEFF2` — `hsl(220 16% 94%)` |

All values are the existing design-system tokens from `docs/DESIGN_SYSTEM.md`.

**Type** — IBM Plex Mono. “AI PROJECT” regular, “FLOW” bold, uppercase.

**Construction** — 8px unit grid · node 16px · bar 8px · 45° joins only.

**Clear space** — one node (16 units) on every side of the mark; equal measure between
mark and wordmark in the lockup.

**Minimum sizes** — lockup 120px wide, standalone mark 24px, favicon 16px. Below 24px,
use the favicon simplification (diamond + through-bar + branch, no square node).

## 5 · Do / Don’t

- Do keep it single-color or two-tone (ink + accent) on flat backgrounds.
- Do preserve the grid and the 45° joins if the mark is re-drawn.
- Don’t add gradients, shadows, or a third hue.
- Don’t rotate, skew, or re-space the nodes.
- Don’t place the mark on busy photography.

## 6 · Relationship to the OpenCode reference

OpenCode was used as a *feel* reference only — minimal, geometric, developer-focused.
No element of the OpenCode mark is reproduced: the concept here is an original
flow-diagram motif built from a square, a diamond, and a fork, with its own grid,
color, and type system.
