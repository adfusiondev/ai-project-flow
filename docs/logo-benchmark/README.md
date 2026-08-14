# OpenCode-style Benchmark Wordmark

Private visual benchmark evaluating how closely the **OpenCode** header wordmark's
design language can be reconstructed and applied to **"AI PROJECT FLOW"**.

> **This is a benchmark, not the product logo.** It is currently **temporarily
> integrated** into the application (header wordmark + favicon) **for visual
> evaluation only**, not as an approved production identity. The source files
> below remain the benchmark source. Compare the styles side by side in
> [`preview.html`](preview.html).

## Deliverables

| File | Description |
|---|---|
| `ai-project-flow-benchmark.svg` | Primary horizontal wordmark, light (ink + chip two-tone, mid-word fade) |
| `ai-project-flow-benchmark-dark.svg` | Primary wordmark, dark theme palette |
| `ai-project-flow-benchmark-compact.svg` | Compact header version (letter 20 / W 30 / gap 4 / word gap 12) |
| `ai-project-flow-benchmark-compact-dark.svg` | Compact header version, dark |
| `ai-project-flow-benchmark-black.svg` | Monochrome black — ink `#000000`, chip knockout `#FFFFFF` |
| `ai-project-flow-benchmark-white.svg` | Monochrome white — ink `#FFFFFF`, chip knockout `#121417` |
| `ai-project-flow-benchmark-favicon.svg` | Wordmark O-glyph mark (ring + chip), theme-aware (`prefers-color-scheme`) |
| `preview.html` | Comparison sheet — all variants on light/dark panels |

## Construction

Everything is drawn from primitives (rects + butt-capped strokes) — **no text,
no fonts, no curves**.

- Cap: y 6–36 (30 units tall), stroke: 6 units, 100% rectilinear
- Letter cell: 24 × 30, advance 30 (24 + 6 gap), word gap 18; primary viewBox `0 0 426 42`
- `I` is a full-width squared capital (top bar + centered stem + bottom bar, no
  counter) so the **AI** opening reads as a unit rather than a punctuation-like mark
- `P`/`R` use a raised bowl (floor at y24–30) with the stem/leg foot below, so they
  read as P/R instead of a closed ring like `O`
- Counter: 12 wide × 18 tall (y 12–30); **chip** fills the lower 2/3 of each void,
  flush to the void bottom — 12 × 12 in bowls (O J L A), 12 × 6 in P/R, 18 wide in
  E/C/F, 6 × 12 in W; the T is stem-left with the chip filling the right void
- `W` is 30 wide, built from four 6-unit diagonal strokes with a chip in the center
  notch
- Fade: letters 1–6 (`AI PROJ`) lead color, letters 7–13 (`ECT FLOW`) tail color —
  the mid-word split mirrors the reference's `open|code` split

## Palettes

| Variant | Lead letters | Tail letters | Chip |
|---|---|---|---|
| Light | `#656363` | `#211E1E` | `#CFCECD` |
| Dark | `#B7B1B1` | `#F1ECEC` | `#4B4646` |
| Mono black | `#000000` | `#000000` | `#FFFFFF` (knockout) |
| Mono white | `#FFFFFF` | `#FFFFFF` | `#121417` (knockout) |

Favicon (36 × 36): the wordmark **O glyph** itself — ring 24 × 30 (6-unit bars),
counter 12 × 18, chip 12 × 12 — centered at translate(6, −3) so the mark is
provably the same letter that appears in the wordmark. Light `#656363` / chip
`#CFCECD`; dark `#F1ECEC` / chip `#4B4646`, theme-aware via `prefers-color-scheme`.

## Files

- `preview.html` — side-by-side comparison sheet
- `preview.png` — rendered preview image
- SVG sources above

## Re-generate

```sh
python3 /tmp/gen_benchmark.py   # emits all SVGs
python3 /tmp/gen_preview.py     # rebuilds preview.html
```
