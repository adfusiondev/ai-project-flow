# AI Project Flow — Changelog

All meaningful project changes should be recorded here.

## 2026-08-16 — Prompt Generator workflow navigation

### Added

- Contextual navigation on the Prompt Generator (`/tools/prompt-generator/` + Arabic): a **Back to <file>** link returns to the target file's guide page, and a **Next recommended file** block links to the next file in the workflow plus a **Generate its prompt** deep link. The links are derived from the current `?file=`/`?size=` state (shared `FLOW_ORDER` / `nextFile` data) and re-render when the target file or size changes; the last file in a flow shows only the back link. Direct visits without query params default to the same context (`project-context`, current size).

### Fixed

- Users landing on the generator from a file-guide action (Create / Review / Update / Recover), a "Generate its prompt" link, or the Start widget previously had no navigation on the destination page. The generator is the only Project Files workflow page outside the Starlight sidebar, so it had no Previous/Next pagination and no way back to the originating file or forward to the next recommended file. A traditional sidebar Previous/Next is not appropriate here because the generator's context is dynamic (not sidebar-ordered), so the workflow-consistent contextual Back / Next recommended-file pattern is used instead. All `/files/*` pages keep their native Starlight pagination unchanged.

### Verified

- EN + AR × desktop (1280px) × mobile (390px): nav present and correct (RTL mirrored with Back on the reading-start side, stacked full-width on mobile, no horizontal overflow); Back returns to the originating file guide; next links and deep links follow the recommended file order per size; file-guide pages keep native pagination; no console errors; production build passes (145 pages).

## 2026-08-16 — Phase C2 / Project Files Reconciliation approved and committed

### Completed

- Phase C2 (Project Files Reconciliation) was approved and committed, closing the Phase C checkpoint. The Project Files UI/UX reconciliation, the visual refinement pass, and the button/control alignment fixes are all included.
- EN/AR verification completed; the production build passes (145 pages).

### Notes

- Temporary review/report artifacts (`.report-c2.md`, `.review-*.png`) were removed from the repository.
- Phase D (navigation and documentation reconciliation) and Phase E (validate and decide) remain pending.

## 2026-08-16 — Button alignment pass (unified control heights and vertical alignment)

### Fixed

- **Generator control heights unified on the shared 40px base** — the segmented size/action pills (rendered at 42px) and the Target File dropdown trigger (44px, `0.9375rem`) now use the same metrics as `.apf-action`: `min-height` `2.5rem`, `0.875rem`/600, `line-height` `1.25`. They previously inherited Starlight's markdown `line-height` (`1.75`), which inflated them above the 40px Generate button.
- **Starlight generic sibling-margin leak closed (generator)** — Starlight's `.sl-markdown-content :not(...) + :not(...)` rule was applying `--sl-content-gap-y` (16px) top margins to elements inside the generator panel (the second-and-later segmented pills, the step controls, the Target File dropdown, the size hint, and the details body). This shifted each step badge 8px off-center relative to its control and offset the segmented pills vertically. The flow now opts out with Starlight's own `not-content` class, and the intended 16px section rhythm is expressed explicitly (`.apf-generator__flow > * + *`).
- **Start a New Project widget — same leak closed** — the Start widget's size selector reuses the generator's segmented pills, so it suffered the same 16px pill offset (the segmented row rendered 56px tall), and the sequence list rows sat 24px apart instead of the intended 8px. The widget root now carries `not-content` and the 16px section rhythm is explicit (`#project-start > * + *`); the pills sit on one aligned 40px row and the rows return to the intended `Space 2` gaps. Row-internal alignment (index badge, name, filename, Generate button) was already correct and is unchanged.
- Verified across EN/AR × light/dark × 1280/390: every generator control and Start widget control is 40px, each step badge is centered on its control (delta 0), the segmented pills sit on one aligned row (and wrap cleanly on mobile), sequence rows use the intended 8px gaps, and there is no horizontal overflow. The Start buttons, all file-guide action bars, and the generator submit all remain on the shared 40px `.apf-action` base.
- **No behavior changes** — routing, deep-links, the size/action/file data model, prompt building, copy behavior, scroll, and layout-height code are untouched.

### Documentation

- `docs/DESIGN_SYSTEM.md` — noted that the generator's segmented pills and dropdown share the Action Button base metrics, and that the flow opts out of Starlight's generic content styling via `not-content`.

## 2026-08-16 — Project Files visual refinement pass (one coherent workflow)

### Changed

- **Prompt Generator integration** — the generator is now one continuous workflow panel instead of three stacked cards. The numbered steps, the collapsible Project details, and the Generate action section share the single `.apf-generator__flow` surface, separated by hairline dividers (`prompt-generator.ts` now appends the details and the actions to the flow, not the form). The generated prompt renders as a standard `.prompt-block` — the same surface as the file-guide templates — and the empty result container is hidden (`.apf-generator__output:empty`) so it never leaves a phantom gap. The removed `.has-output` state hook is no longer referenced.
- **Details section Starlight overrides** — the generator's collapsible `<details>/<summary>` is scoped under `.apf-generator__flow` to defeat Starlight's generic markdown-details styling (inline-start padding, 2px left border, arrow marker, `-8px` inline margin), so the Project details summary lines up with the workflow steps.
- **Vertical rhythm** — the Start widget hint gap normalized from `Space 3` (12px) to `Space 4` (16px), matching the shared rhythm elsewhere in the workflow.
- **Consolidation** — the identical step/index badge styles (`.apf-generator__step-num` and `.apf-start__index`) were merged into one grouped rule and the duplicate removed. The output label (`.apf-generator__output-label`) and `.prompt-block__label` now use the shared mono label treatment and are included in the Arabic font override.
- **No behavior changes** — routing, deep-links, the size/action/file data model, prompt building, and the copy-control behavior are untouched. No scroll or layout-height code was changed.

### Documentation

- `docs/DESIGN_SYSTEM.md` — documented the generator as a single workflow surface and the output as a standard prompt-block in the Shared Surfaces section.

### Notes

## 2026-08-16 — Project Files UI/UX reconciliation (shared action system)

### Changed

- **Shared action system** — standardized every actionable button/link across Start a New Project, all 11 Project File guide pages, and the Prompt Generator on the single `.apf-action` base (`min-height` `2.5rem`/40px, `0.875rem`/600 typography, `0.5rem 1rem` padding, `0.25rem` radius, shared hover/focus). Hierarchy comes only from `.apf-action--primary` (filled accent) vs. the default secondary control. Removed `apf-action--compact` from the Start widget so no workflow action uses a different size.
- **Overview CTAs** — the "Start a New Project" call-to-action on the Project Files overview (EN + AR) now uses the shared primary action instead of a plain text link.
- **Arabic terminology** — unified the Recover action label to `استعادة` everywhere: the shared action data (`prompt-data.ts`), the Prompt Generator segmented control and generated prompt UI (which render from that data), and the Arabic generator page description. File pages already used `استعادة`.
- **CSS cleanup** — removed the orphaned `.apf-matrix th/td` rule and its Size-matrix comment (no markup references them), and removed the now-unused `.apf-action--compact` rule.

### Documentation

- `docs/DESIGN_SYSTEM.md` — added the canonical **Action System (Project Files Workflow)** section: the single 40px action-button base, Primary/Secondary hierarchy, responsive action-group behavior (4-across / 2×2 / stacked), RTL ordering, and the shared `.apf-primary-action` / `.apf-next-file` surface rules.

### Notes

## 2026-08-15 — Project Files pages full rollout to compact action-first structure

### Changed

- Converted the remaining nine Project Files guide pages to the compact action-first structure validated on PROJECT_CONTEXT.md and PROJECT_STATUS.md. Each page (EN + AR) now has:
  - A one-line purpose under the page title.
  - A top action area (`What to do next` / `ما الخطوة التالية`) with Create / Review / Update / Recover buttons; the recommended action is filled (`apf-action--primary`).
  - Compact sections: Purpose, When to use it, Required inputs, Reads from and feeds into, a full copyable Markdown template (`.prompt-block` + `.apf-template` with Copy button), a short generic Example, a Next recommended file block, and a Related lifecycle-stage link.
- Primary action per file (rationale: first-creation vs. evolving-record vs. resume):
  - `docs/MVP.md`, `docs/REQUIREMENTS.md`, `docs/ARCHITECTURE.md`, `AGENTS.md`, `SKILL.md` → **Create**.
  - `docs/DECISIONS.md`, `PLAN.md`, `CHANGELOG.md` → **Update** (continuously evolving records).
  - `HANDOFF.md` → **Recover** (reconstruct when resuming in a new environment).
- Renamed the nine `.md` guide pages to `.mdx` (EN and AR) so the action-first layout can use JSX components; routes are slug-based and unchanged.
- Next-file guidance per page: mvp→requirements, requirements→plan, architecture→decisions, decisions→plan, plan→agents, agents→project-status, skill→project-status, changelog→project-status (cycle), handoff→project-context (receiving environment).
- All action and next-file links deep-link to the Prompt Generator with `?file=...&action=...&size=standard` (EN `/tools/...`, AR `/ar/tools/...`).

### Notes

- Templates inside `<pre className="apf-template">{`...`}</pre>` cannot contain backticks or `${`, so templates use 4-space indented code blocks and `{Placeholder}` text instead of fenced blocks.
- Templates are Markdown (shared verbatim across EN and AR); only the surrounding prose is translated.
- Remaining known inconsistency (pre-existing, not changed): the generator page labels the Recover action `استرجاع` while the file pages use `استعادة`. `prompt-data.ts` ACTIONS was intentionally left untouched.
- Checkpoint passed — the Phase C2 reconciliation was approved and committed on 2026-08-16.

### Verified

- Production build passes: 145 pages.
- Browser checks (dev server) for all 18 pages (9 EN + 9 AR) at 1280px desktop, low-height desktop (1280x700), and 390px mobile:
  - All four action buttons present; correct deep-link prefill confirmed on the generator (file/action/size + auto-generate) for EN and AR.
  - Template Copy button copies the exact template text (match confirmed; shows "Copied!").
  - Next-file guidance and Related lifecycle link present and correct per page; sidebar slugs unchanged.
  - RTL parity: AR pages render Arabic prose RTL, technical filenames and button labels LTR-consistent; matches validated PROJECT_CONTEXT.md / PROJECT_STATUS.md computed styles (identical colors, borders, padding).
  - No horizontal overflow and true page bottom reachable on every page at every tested viewport.
  - No console errors; light and dark themes render correctly.
## 2026-08-15 — Start a New Project page refinement (row structure, no duplication)

### Changed

- `src/scripts/start-project.ts` — removed the separate `.apf-primary-action` "Start here" card that duplicated PROJECT_CONTEXT.md as both the primary action and the first list row. The first step is now the first row of the sequence, emphasized as a hero row:
  - Row 1 keeps the "Start here" badge (now on its own line), file name + technical filename together, and a filled `.apf-action--primary` "Generate the prompt" CTA.
  - Every row shares one structure: sequence number, level badge, file name + short purpose, and a Generate action.
- `src/scripts/prompt-data.ts` — added a short `purpose: { en, ar }` to every `FileInfo` (additive; generator page unaffected). Row meta now shows the level badge with the file's one-line purpose beneath it instead of the previous size-only note.
- `src/styles/custom.css`:
  - `.apf-start__meta` stacks level badge above purpose so rows align consistently regardless of badge/text length; `.apf-start__level` keeps `align-self: flex-start`.
  - `.apf-start__badge` is `flex: 1 1 100%` so the "Start here" label sits on its own line and the file name stays paired with its technical filename.
  - Removed the now-unused `.apf-start__primary` rules; `.apf-primary-action` styles remain for the file pages.
  - New section 16 — pagination override: `.pagination-links a { overflow-wrap: break-word }`. Starlight's default `overflow-wrap: anywhere` broke technical filenames mid-word (e.g. `PROJECT_CONTEXT.` / `md`, `docs/MVP.` / `md`) on the next/prev links; `break-word` only breaks when a token truly cannot fit, keeping filenames on one line at desktop/tablet widths.

### Notes

- No functionality changed: Small/Standard/Advanced switching, file sequences, level badges, and generator deep-links (`?file=...&action=...&size=...`) are preserved.

- Checkpoint passed — the Phase C2 reconciliation was approved and committed on 2026-08-16.

### Verified

- Production build passes: 145 pages.
- Browser checks (dev server) for EN + AR / light + dark / 1280px desktop / 900px low-width desktop (sidebar visible) / 390px mobile:
  - Row structure and action alignment consistent in both directions: sequence number, level + purpose stacked, Generate action right-aligned (LTR) / left-aligned (RTL); right/left edges of actions align within 1px across rows.
  - Technical filenames stay LTR mono, `nowrap`, `unicode-bidi: isolate`; never break mid-word at any tested width.
  - Pagination next/prev titles render on a single line (e.g. `PROJECT_CONTEXT.md`, `docs/MVP.md`) in EN and AR.
  - Hero row: badge on its own line, name + filename paired, filled primary CTA; other rows use compact actions.
  - No horizontal overflow at any tested width; no console errors.

## 2026-08-15 — Shared action/button system refinement (Phase B + C unification)

### Changed

- Introduced a single shared action system in `src/styles/custom.css` (section 15) replacing the three separate button styles that previously drifted apart:
  - `.apf-action` — base action (secondary), 0.875rem/600 weight, `space-2 space-4` padding, `--apf-radius-small`, locked `min-height: 2.5rem`, `white-space: nowrap`.
  - `.apf-action--primary` — filled accent (`--apf-color-accent` bg + `--apf-color-accent-ink` text), the one recognizable main action everywhere.
  - `.apf-action--compact` — 0.8125rem, `2.25rem` min-height, for dense per-row actions.
  - `.apf-action-group` — flex row, uniform `space-3` gap, wraps whole buttons (never splits a label).
  - `.apf-action-group--actions` — predictable equal-width bar: one row of four on desktop/tablet (>= 34em), 2x2 below, stacked below 24em; never a lone wrapped button.
- Migrated every action to the shared classes:
  - `project-context.mdx` / `project-status.mdx` (EN + AR) — the Create / Review / Update / Recover action bar now uses `apf-action-group apf-action-group--actions` with `apf-action` / `apf-action--primary`.
  - `src/scripts/start-project.ts` — "Generate the prompt" CTA is `apf-action apf-action--primary`; each row's "Generate prompt" link is `apf-action apf-action--compact apf-start__gen`.
  - `src/scripts/prompt-generator.ts` — the Generate submit is `apf-action apf-action--primary apf-generator__submit` (keeps `flex: 1` full-width).
- Removed the old `.apf-btn` / `.apf-btn--primary` styles and the per-component size/padding/font duplication from `.apf-generator__submit` and `.apf-start__gen` (now layout-only). RTL Arabic font applied via a single `[dir='rtl'] .apf-action` rule; technical filenames remain LTR mono.

### Notes

- No functionality changed: generator URL prefills, segmented controls, copy behavior, file sequences, and workflow logic are unchanged.
- Mobile behavior is intentionally different: on narrow widths the 4-action bar goes 2x2 then stacked, and primary CTAs stretch full width for comfortable touch targets.
- Checkpoint passed — the Phase C2 reconciliation was approved and committed on 2026-08-16.

### Verified

- Production build passes: 145 pages.
- Browser checks on the dev server across every affected page (Prompt Generator, Start, PROJECT_CONTEXT.md, PROJECT_STATUS.md, EN + AR):

| Page | 1280px | 900px | 700px | 500px | 390px | 320px |
| --- | --- | --- | --- | --- | --- | --- |
| action bar (4) | 1 row | 1 row | 1 row | 2x2 | 2x2 | stacked |
| Start rows | aligned | aligned | aligned | aligned | stacked | stacked |
| Generator submit | full-width | full-width | full-width | full-width | full-width | full-width |

- Buttons uniform per context: height 40px (primary/secondary) and 36px (compact), font 14px/600 (13px compact), radius 4px, gap 12px; primary filled accent in both light and dark themes; Arabic uses the IBM Plex Sans Arabic font with correct RTL ordering and LTR mono filenames; no horizontal overflow at any width; no console errors beyond the pre-existing Starlight form notice; copy behavior and generator prefill re-verified.

## 2026-08-15 — Project Files Workflow Redesign — Phase C: Prototype Project Files pages

### Added

- `src/content/docs/files/start.md` and `src/content/docs/ar/files/start.md` — new "Start a New Project" / «ابدأ مشروعًا جديدًا» pages (URLs `/files/start/` and `/ar/files/start/`), added to the Project Files sidebar right after Overview.
- `src/scripts/start-project.ts` — the Start widget: a segmented Small/Standard/Advanced size selector, a hint line showing the file count per size, a "Start here" primary action bar for the first file, and the recommended file sequence for the selected size. Each row shows the file name, mono filename, a level badge (Required / Recommended / Optional / Skip) with a short skip-consequence note, and a "Generate prompt" link that opens the Prompt Generator pre-filled (`?file=<file>&action=create&size=<size>`). The first file of the flow is highlighted and marked with a "Start here" badge.
- Registered the `apf-start-project` Astro integration (page-wide script injection, same pattern as `apf-prompt-generator`).

### Changed

- `src/content/docs/files/overview.md` and `src/content/docs/ar/files/overview.md` — rewritten as a concise workflow guide: a one-paragraph "what Project Files are", a primary "Start a New Project" link, a compact file/purpose table, a short "how the Prompt Generator fits" section, and a "where to start" pointer to `PROJECT_CONTEXT.md`.
- `src/content/docs/files/project-context.md` → `.mdx` and `src/content/docs/ar/files/project-context.md` → `.mdx` — compact redesign: a "What to do next" primary action bar with Create / Review / Update / Recover buttons pre-filled into the Prompt Generator, a Purpose one-liner, When to use it, Required inputs, Reads from / feeds into, a copyable Markdown template in a `.prompt-block`, a very short generic example, a "Next recommended file" callout (`docs/MVP.md`), and the lifecycle link.
- `src/content/docs/files/project-status.md` → `.mdx` and `src/content/docs/ar/files/project-status.md` → `.mdx` — same compact structure adapted to tracking (template mirrors the repo status doc structure), with the next-file callout pointing to `CHANGELOG.md`.
- `astro.config.mjs` — added the `files/start` sidebar entry with Arabic translation and the `apf-start-project` integration.
- `src/styles/custom.css` — section 14: `.apf-start__*` widget styles (choose label, hint, list, rows, index badges, level badges with `--core`/`--recommended`/`--optional`/`--skip` modifiers, start-here highlight, generate buttons, file-name isolation), the `.apf-template` copyable-template style, and mobile/desktop responsive rules.

### Notes

- Scope limited to the four prototype pages plus the Start page: Overview, Start a New Project, PROJECT_CONTEXT.md, and PROJECT_STATUS.md (EN + AR). The remaining Project Files pages, the Prompts section, and the sidebar grouping are unchanged.
- Files with JSX (the two redesigned pages) moved from `.md` to `.mdx` so expressions compile; the stale `node_modules/.astro` content store was cleared so renamed pages re-render.
- Phase C ends at the checkpoint; the Phase C2 reconciliation was approved and committed on 2026-08-16.

### Verified

- Production build passes: 145 pages (two new Start pages).
- Browser tests on the dev server:
  - English and Arabic: Start widget renders the correct sequence for Small (3), Standard (7), and Advanced (11) with correct badges and skip notes; the primary action bar updates with the selected size; all row and CTA links open the Prompt Generator pre-filled with the right file/action/size.
  - PROJECT_CONTEXT.md and PROJECT_STATUS.md pages (EN + AR): four action buttons pre-fill the generator, the copyable template renders and copies the full Markdown via the copy control, and the next-file callout links to the generator pre-filled for `docs/MVP.md` / `CHANGELOG.md`.
  - Desktop (1280px) and 390px mobile (emulated): no horizontal overflow on any new page; RTL/LTR and Arabic fonts applied correctly.
  - Prompts pages copy controls still work (no regression).
  - No console errors; only the pre-existing Starlight search-form accessibility notice remains.

---
## 2026-08-15 — Project Files Workflow Redesign — Phase B: Prompt Generator UX refinement (final pass)

### Changed

- Shortened the bilingual generator page intros (EN + AR) so the workflow is understandable faster.
- Target File dropdown options now wrap to a clean two-line stack (label over mono filename) on narrow screens (≤ 26em), so long technical filenames such as `docs/ARCHITECTURE.md` stay fully readable on 390px mobile without horizontal overflow.
- The generated prompt is now unmistakable as the final output: once a prompt is generated, the result renders inside an accent-bordered output panel with a "Generated prompt" / «المطالبة المُولَّدة» header label, and the inner block drops its own chrome so the panel reads as the single copy target.
- Added a single muted helper line under the Project size control: "Small: minimal set · Standard: recommended set · Advanced: full project" / «صغير: مجموعة الحد الأدنى · قياسي: المجموعة الموصى بها · متقدم: المشروع كامل».
- `src/styles/custom.css` — section 13 additions: `.apf-generator__hint`, `.apf-generator__step-control`, `.apf-generator__output-label`, the generated-output panel, and wrap-safe dropdown options.

### Notes

- The 4-step workflow (size → target file → action → generate), segmented controls, custom file dropdown, optional project-details disclosure, URL prefill, copy behavior, bilingual support, and RTL/LTR behavior are unchanged.
- No new features, no redesign of the form, and no changes to the Prototype Project Files pages (Phase C not started).

### Verified

- Production build passes: 143 pages.
- Browser tests on the dev server:
  - English and Arabic, light and dark themes: segmented controls, step badges, output panel, and size hint all use correct tokens and contrast.
  - Desktop (1280px) and 390px mobile (emulated): no horizontal overflow; dropdown menu fits and all 11 options stay fully readable (options stack label-over-filename on narrow widths).
  - All four actions and all three sizes produce the correct prompt and next-file chain.
  - URL prefill works for valid values and falls back to defaults for invalid ones.
  - Copy button copies the full prompt and shows localized feedback.
  - Prompts pages copy controls still work (no regression).
  - No console errors; only the pre-existing Starlight search-form accessibility notice remains.

---

### Added

- `src/content/docs/tools/prompt-generator.mdx` and `src/content/docs/ar/tools/prompt-generator.mdx` — the bilingual Prompt Generator tool pages (URLs `/tools/prompt-generator/` and `/ar/tools/prompt-generator/`). The page hosts a `#prompt-generator` root where the script renders the full form. Sidebar entry deferred to Phase D.
- URL-prefilled state: `?file=<file>&action=<create|review|update|recover>&size=<small|standard|advanced>` prefills the form and auto-generates the prompt; invalid values are ignored and fall back to defaults.
- The form fields carry `name` attributes (a11y); the generated output reuses the existing `.prompt-block` markup and copy control.

### Changed

- `src/scripts/prompt-generator.ts` — completed the skeleton into the full generator: bilingual form (project name, type, idea, target users, platform, languages/tech stack, main constraints, project size, target file, action), Generate button, and a generated prompt block that renders the shared rules plus project details, target file, action instruction, project size, and the next-file chain. File names are wrapped in `<code>` for LTR isolation inside Arabic prose. `buildPrompt()` now includes the project overview and the action-specific instruction.
- `src/scripts/prompt-data.ts` — added the `SIZES` registry (Small/Standard/Advanced, bilingual), per-action bilingual instruction templates (`instruction` on each `ActionInfo`), and the `getAction()` helper.
- `src/scripts/copy-controls.ts` — exported `enhancePromptBlocks()` so the generator reuses the existing copy behavior for dynamically created prompt blocks.
- `src/styles/custom.css` — section 12 additions: `.apf-form__field--full` (full-width grid fields), `.apf-form__actions`, and `.apf-generator__output` spacing.

### Notes

- Fully frontend-only: no backend, database, or persistence. State lives only in the page and URL params.
- The Prompts section and all existing Project Files pages are unchanged.
- `PROJECT_CONTEXT.md` and `PROJECT_STATUS.md` pages are not redesigned yet (Phase C).

### Verified

- Production build passes: 143 pages (two new generator pages), sitemap and Pagefind index generated without errors.
- Browser tests on the dev server and the production preview:
  - English and Arabic pages render correctly (`lang`/`dir` intact), form labels localized.
  - All four actions (Create / Review / Update / Recover) produce the correct bilingual instruction for the target file.
  - URL prefill works for valid values and falls back to defaults for invalid ones (no auto-generate).
  - Copy button copies the full prompt text and shows the localized "Copied!" feedback.
  - Desktop (1280px) uses a two-column form grid; mobile (390px) stacks to one column; no horizontal overflow in either.
  - File names are isolated LTR inside RTL Arabic prose via the existing `.prompt-block__body code` rule.
  - Prompt copy controls on the existing Prompts pages still work (no regression).
  - No console errors; the only browser "issue" is the pre-existing Starlight search-form accessibility notice.

---

## 2026-08-15 — Project Files Workflow Redesign — Phase A: Foundation

### Added

- `src/scripts/prompt-data.ts` — the shared bilingual (English/Arabic) data foundation for the Project Files Workflow Redesign: the canonical AI prompt rules block, the 11-file registry with English and Arabic labels and categories, the Small/Standard/Advanced size matrix (with `CHANGELOG.md` as Recommended rather than required for Small projects), per-size flow order, level labels, and the `create/review/update/recover` action labels.
- `src/scripts/prompt-generator.ts` — the Prompt Generator script skeleton: bilingual `buildPrompt()` that assembles the shared prompt rules plus the target file, action, and next-file chain from `prompt-data.ts`, and a guarded `init()` that activates on a future `#prompt-generator` element. No form is built yet.
- `apf-prompt-generator` integration in `astro.config.mjs` — injects the generator script into every page, mirroring the existing `apf-copy-controls` pattern.

### Changed

- `src/styles/custom.css` — added section 12 "Workflow blocks" with the shared foundation components using existing `--apf-` tokens and logical properties: primary action bar, next-file callout, generator form controls, buttons, and the size matrix alignment, with RTL/LTR and responsive rules.

### Notes

- The workflow must remain flexible: users may skip a non-core file when it adds no value, and the UI (Phases B/C) will briefly explain the consequence of skipping it.
- Prototype scope approved: Start a New Project, Prompt Generator, `PROJECT_CONTEXT.md`, and `PROJECT_STATUS.md`. The Prompts section and the remaining Project Files pages are untouched.

### Verified

- Production build passes: 141 pages, sitemap and Pagefind index generated without errors.
- The generator script is bundled into built pages; the new CSS classes compile into the shared stylesheet.
- Browser checks: English and Arabic pages render correctly (`lang`/`dir` intact), the light/dark theme selector works, prompt-block copy controls still work, and there are no console errors.
- Functional check: `buildPrompt()` produces the correct bilingual prompt (Arabic on `/ar/` pages, English on `/` pages) including the next-file chain (`project-context` → `project-status` in the Small flow).

---

## 2026-08-14 — Temporarily Integrate OpenCode-style Logo Benchmark for Evaluation

### Changed

- The benchmark wordmark and favicon are **temporarily integrated** into the application for visual evaluation only.
- Site header now renders the benchmark **compact wordmark** (`docs/logo-benchmark/ai-project-flow-benchmark-compact*.svg`) via the Starlight `logo` config, with the light variant in light theme and the dark variant in dark theme (`replacesTitle: true` keeps the site title accessible via `sr-only`).
- Site favicon now points to `public/favicon-benchmark.svg` (the benchmark favicon, theme-aware via `prefers-color-scheme`).

### Notes

- **This is a temporary visual benchmark integration, not an approved production identity.**
- No content, localization, or layout was modified; responsive and light/dark behavior are preserved.
- Source files under `docs/logo-benchmark/` are unchanged.
- Reverting means restoring `astro.config.mjs` to `favicon: '/favicon.svg'`, removing the `logo` config, and deleting `public/favicon-benchmark.svg`.

---

## 2026-08-14 — OpenCode-style Logo Benchmark Checkpoint

### Added

- `docs/logo-benchmark/` — a private visual benchmark evaluating how closely the OpenCode header wordmark's design language can be reconstructed and applied to "AI PROJECT FLOW" (grid, 6-unit rectilinear strokes, open counters, two-tone ink/chip scheme, mid-word fade).
- Deliverables: 7 SVG variants (primary light/dark, compact light/dark, mono black/white, theme-aware favicon), `preview.html`, `preview.png`, and `README.md`.

### Result

- The benchmark produced a **partial visual approximation** of the OpenCode wordmark style, but not a sufficiently accurate reproduction.
- The result is intentionally **saved as a checkpoint** so this experiment can be resumed later; no further logo refinement is in progress.

### Notes

- The benchmark is **separate from the application**: nothing under `src/` or `public/` was changed and nothing from the benchmark is wired into the site.
- It is **not the approved production logo** and no element of the OpenCode mark itself is reproduced as a deliverable (per `PROJECT_CONTEXT.md`).
- This area can be resumed later if needed.

---

## 2026-08-14 — IBM Plex Sans Arabic for the Arabic Locale

### Changed

- The Arabic locale now uses the self-hosted IBM Plex Sans Arabic typeface (weights 400, 600, 700) for all prose and UI text: headings, body, navigation, sidebar, table of contents, pagination, the Pagefind search UI, prompt-block bodies, and copy controls.
- Font files are self-hosted under `public/fonts/` and declared with `@font-face` (`font-display: swap`) in `src/styles/custom.css` — no external font service or runtime dependency was introduced.
- The font is applied only to the Arabic locale via `html[dir='rtl']`, overriding `--sl-font-system`. English pages keep the system sans-serif stack.

### Verified

- Production build: 141 pages, sitemap and Pagefind index generated without errors; font files copied to `dist/fonts/`.
- Arabic pages compute `IBM Plex Sans Arabic` for body, headings, sidebar links, copy controls, prompt bodies, and the search dialog; all three weights load over the network (HTTP 200).
- English pages are unchanged (system sans-serif stack).
- RTL/LTR preserved: Arabic sidebar stays on the right and table of contents on the left; no horizontal overflow.
- Code blocks and inline code keep the monospace stack and LTR direction on Arabic pages.
- Mobile 390px viewport: no horizontal overflow; drawer navigation renders all 70 Arabic sidebar items with the new font.

---

## 2026-08-14 — Arabic Localization Phase 3

### Added

- Translated all 11 Skills pages into professional Arabic under `src/content/docs/ar/skills/`:
  `architecture.md`, `handoff.md`, `implementation-planning.md`, `mvp-planning.md`, `project-discovery.md`, `project-documentation.md`, `project-lifecycle.md`, `project-status.md`, `requirements.md`, `ui-implementation.md`, `verification.md`.
- Translated all 9 Commands pages into professional Arabic under `src/content/docs/ar/commands/`:
  `git-add.md`, `git-commit.md`, `git-diff.md`, `git-log.md`, `git-status.md`, `npm-install.md`, `npm-run-build.md`, `npm-run-dev.md`, `npm-run-preview.md`.
- Translated all 10 Prompts pages into professional Arabic under `src/content/docs/ar/prompts/`:
  `architecture.mdx`, `handoff.mdx`, `implementation.mdx`, `implementation-planning.mdx`, `mvp-planning.mdx`, `project-context.mdx`, `project-discovery.mdx`, `requirements.mdx`, `resume-project.mdx`, `verification.mdx` (MDX preserves the `prompt-block` structure with the localized "المطالبة" label).
- Translated all 3 Verification pages, all 3 Handoff pages, and both Reference pages into professional Arabic.
- Preserved exact structural parity with the English pages (headings, bullet lists, code blocks, tables, and internal links) while keeping file names, paths, commands, and technical identifiers LTR where appropriate and Arabic prose RTL.

### Verified

- Production build: 141 pages, sitemap and Pagefind index generated without errors; no "not yet translated" fallback notices remain anywhere in the Arabic locale.
- All 38 new Arabic routes serve real translated content and return HTTP 200; all internal `/ar/` links and sitemap URLs resolve.
- RTL/LTR: `lang="ar" dir="rtl"` on all Arabic pages; sidebar renders on the right and the table of contents on the left; inline code and command blocks stay LTR.
- Navigation: Arabic sidebar labels for all sections; active-page highlighting; pagination follows sidebar order with "السابق" / "التالي".
- Copy controls: the prompt copy button shows "نسخ" / "تم النسخ!" and resets; the language selector switches between `/ar/...` and `/...` in both directions with no console errors.
- Pagefind search returns Arabic results (test query "الاستكشاف" returned 11 results).
- Mobile 390px viewport: no horizontal overflow; the drawer menu opens with all 70 Arabic sidebar items.

---
## 2026-08-14 — Arabic Localization Phase 2

### Added

- Translated all 12 Project Lifecycle stage pages into professional Arabic under `src/content/docs/ar/lifecycle/`:
  `idea-and-discovery.md`, `project-context.md`, `mvp-definition.md`, `requirements.md`, `architecture.md`, `implementation-planning.md`, `skills-and-agent-instructions.md`, `implementation.md`, `verification-and-testing.md`, `project-status-updates.md`, `change-documentation.md`, `handoff-and-portability.md`.
- Translated all 11 Project Files pages into professional Arabic under `src/content/docs/ar/files/`:
  `project-context.md`, `mvp.md`, `requirements.md`, `architecture.md`, `decisions.md`, `plan.md`, `project-status.md`, `agents.md`, `changelog.md`, `handoff.md`, `skill.md`.
- Preserved exact structural parity with the English pages (headings, bullet lists, code and file references, internal links) while keeping file names, paths, commands, and technical identifiers (CLI, API, MVP, RTL, LTR, Git/Astro/Starlight terms) LTR where appropriate and Arabic prose RTL.
- All internal links in the new pages point to the `/ar/` locale (lifecycle, files, skills, and section cross-references).

### Verified

- Production build: 141 pages, sitemap and Pagefind index generated without errors; all 23 new Arabic routes serve real translated content (no "not yet translated" fallback notice).
- All 23 new Arabic routes return HTTP 200 on the preview server.
- RTL/LTR: `lang="ar" dir="rtl"` on all new pages; sidebar renders on the right and the table of contents on the left; inline code stays LTR inside RTL content.
- Navigation: sidebar labels for all 23 pages are Arabic; on-page table of contents anchors resolve; pagination follows lifecycle and files order.
- Copy controls: the prompt copy button shows "نسخ" / "تم النسخ!" in the Arabic context; code-block copy buttons present on Arabic pages.
- Language selector switches between `/ar/...` and `/...` in both directions; English pages are unchanged.
- Pagefind search returns Arabic results (test query "الاستكشاف").
- Mobile 390px viewport: no horizontal overflow; the drawer menu opens with Arabic labels.
- All 39 unique `/ar/` internal links in the new pages resolve (HTTP 200).

---
## 2026-08-13 — Arabic Localization Phase 1

### Added

- Sidebar navigation: all 70 sidebar items now carry `translations: { ar: '...' }` entries in `astro.config.mjs`.
- `src/scripts/copy-controls.ts`: runtime language detection added; prompt copy buttons show "نسخ" / "تم النسخ!" on Arabic pages.
- `src/content/docs/ar/index.mdx`: fully rewritten to match English home page structure (محتوى هذا الموقع, البداية السريعة, المستودع مصدر الحقيقة, etc.).
- Created 8 Arabic section overview pages: `lifecycle/overview.md`, `files/overview.md`, `skills/overview.md`, `commands/overview.md`, `prompts/overview.md`, `verification/overview.md`, `handoff/overview.md`, `reference/overview.md`.

### Verified

- Build: 141 pages, no errors, sitemap generated cleanly.
- RTL: `dir="rtl"` confirmed on all Arabic pages.
- Sidebar labels: all 8 section groups render in Arabic.
- Page titles and H1s: all overview pages show "نظرة عامة".
- Code blocks: LTR isolation confirmed in RTL context.

---

## 2026-08-13

### Added

- Created the initial `AI Project Flow` project structure.
- Created core project documentation files.
- Created reusable `skills/` directories.
- Completed `PROJECT_CONTEXT.md`.
- Completed `docs/MVP.md`.
- Completed `docs/REQUIREMENTS.md`.
- Completed `docs/ARCHITECTURE.md`.
- Completed `docs/DECISIONS.md`.
- Completed `docs/WORKFLOWS.md`.
- Completed `docs/SCREEN_MAP.md`.
- Completed `docs/DESIGN_SYSTEM.md`.
- Completed `AGENTS.md`.
- Completed `PROJECT_STATUS.md`.
- Completed `PLAN.md`.
- Completed `CHANGELOG.md`.
- Completed `HANDOFF.md`.
- Populated reusable project `SKILL.md` files.
- Selected the frontend technology and recorded `DEC-010`.

### Phase 3 — Project Foundation

- Initialized the Astro + Starlight project (`package.json`, `astro.config.mjs`, `tsconfig.json`, `public/`, `src/`).
- Replaced the starter template content with the AI Project Flow documentation shell.
- Configured the Starlight sidebar with the planned MVP navigation sections.
- Created the Start Here page and one overview page per planned section.
- Verified `npm install`, `npm run build`, and the development server.

### Phase 4 — Design System Implementation

- Completed `docs/DESIGN_SYSTEM.md` with the full visual spec (typography, colors, spacing, borders, content width, sidebar, code blocks, prompt blocks, copy controls, responsive rules, RTL/LTR foundation, and theme readiness).
- Completed `docs/SCREEN_MAP.md` with the full navigation and page structure.
- Implemented the shared design system in `src/styles/custom.css` using `--apf-` tokens.
- Remapped Starlight theme variables to the design tokens.
- Wired `customCss` into `astro.config.mjs`.
- Styled the sidebar, code blocks, prompt blocks, and copy controls.
- Added the RTL/LTR foundation using logical CSS properties.
- Implemented light and dark themes from the same token structure.
- Verified the build, all routes, computed styles, responsive behavior, and RTL behavior.
### Phase 5 — Core Documentation Content

- Expanded the sidebar in `astro.config.mjs` with the full Phase 5 content structure.
- Implemented the Start Here page with a quick start, run instructions, and section guide.
- Implemented the Project Lifecycle section (overview plus 12 stage pages from idea and discovery through handoff and portability).
- Implemented the Project Files section (overview plus 11 file pages).
- Implemented the Skills section (overview plus 11 skill pages matching the `skills/` directory).
- Implemented the Commands section (overview plus 9 command pages covering npm and git commands).
- Implemented the Prompts section (overview plus 10 reusable prompt pages using the `.prompt-block` design pattern).
- Implemented the Verification section (overview plus workflow, build/runtime, and acceptance criteria pages).
- Implemented the Handoff section (overview plus preparing, receiving, and running-the-project pages).
- Implemented the Reference section (overview plus workflow-at-a-glance and reading-order pages).
- Removed the old placeholder overview pages.
- Verified the build (71 pages built), all routes (HTTP 200), internal links, and prompt/code block rendering in light and dark themes.

### Phase 5 Fixes — UI Inspection

- Fixed the light-theme `Text muted` token (`hsl(220 7% 52%)` → `hsl(220 7% 44%)`) so sidebar section labels and prompt-block labels meet WCAG AA contrast on the light surface and white backgrounds.
- Aligned typography with `docs/DESIGN_SYSTEM.md`: `h1` weight 700, `h2` 650, `h3`/`h4` 600.
- Mapped `--sl-color-text` to `Text primary` so body content uses the documented primary text color; kept sidebar links on `Text secondary` per the sidebar spec.
- Updated `docs/DESIGN_SYSTEM.md` with the corrected light `Text muted` value.
- Re-verified in the browser: Lighthouse Accessibility improved from 96 to 100; build still passes (71 pages).

### Phase 6 — Copy and Documentation Interactions

- Command and reusable-example copy buttons confirmed from the Expressive Code code-block toolbar built into Starlight (every fenced code block is copyable).
- Added prompt copy buttons by injecting a `Copy` control into every `.prompt-block` header at runtime via `src/scripts/copy-controls.ts`.
- Wired the shared script into every page through the `apf-copy-controls` integration (`astro:config:setup` → `injectScript`) in `astro.config.mjs`; the script is bundled and has no separate runtime request.
- Added clear copy feedback: prompt buttons show `Copied!` with an accent state for 2 seconds; code blocks announce `Copied!` via an `aria-live` region.
- Expanded `.copy-control` styling in `src/styles/custom.css` (larger touch target, hover/focus accent state, `is-copied` feedback state).
- Verified in the browser: prompt copy writes the prompt body to the clipboard, feedback resets after 2 seconds, buttons render in light and dark themes, fit the 390px mobile viewport, are keyboard focusable with a visible focus ring, and do not duplicate on client-side navigation.
- Re-verified the build (71 pages); no console errors.

### Phase 6 Verification

- Prompt copy: clipboard content matches the prompt body (verified via instrumented `navigator.clipboard.writeText`).
- Code-block copy: Expressive Code shows `Copied!` feedback with `aria-live` announcement.
- Theme, mobile, RTL, keyboard, and client-side navigation checks all passed.

### Phase 7 — Localization Readiness

- Enabled Starlight multilingual support in `astro.config.mjs`: English root locale (`lang: en`, `dir: ltr`) and Arabic (`lang: ar`, `dir: rtl`) served at `/ar/`.
- Added `src/content/docs/ar/index.mdx`, a real Arabic starter page that demonstrates RTL rendering: Arabic headings and body text, a bash code block kept LTR, and an Arabic prompt block with the copy control.
- Confirmed the existing RTL/LTR CSS foundation: logical CSS properties throughout, and code/prompt-block code forced to `direction: ltr` with `unicode-bidi: isolate` and `text-align: left` in RTL contexts.
- Untranslated Arabic URLs now use Starlight's standard fallback: English content with the Arabic "not yet translated" notice, so the site stays usable before full translation.
- The Starlight UI chrome (search, theme select, language select, table of contents, pagination, skip link) is automatically localized via Starlight's built-in Arabic translations.
- The sidebar and table of contents mirror correctly in RTL (sidebar right, "On This Page" left) and English stays unchanged (sidebar left, table of contents right).
- Verified the language selector switches between `/ar/...` and `/...` URLs in both directions; mobile 390px RTL has no horizontal overflow and the prompt copy button fits the header.
- Build verified (141 pages: 71 English + 70 Arabic routes). Lighthouse snapshot on `/ar/`: Accessibility 100, Best Practices 100, Agentic Browsing 100. No console errors.

### Phase 7 Verification

- `/ar/` renders `lang="ar" dir="rtl"`; English pages render `lang="en" dir="ltr"` unchanged.
- Arabic fallback pages show the untranslated-content notice and localized chrome.
- Code blocks and prompt-block code remain LTR inside the RTL page.
- Scope decision: a single Arabic proof page is committed (per explicit approval); full Arabic content and translated sidebar labels are deferred to the bilingual content work.

### Phase 8 — Verification

Phase 8 verified the MVP against the documented requirements across every verification area in `PLAN.md`:

- Build: `npm run build` succeeds (141 pages) with sitemap index successfully generated at `dist/sitemap-index.xml`.
- Runtime: dev server and production preview serve all routes with HTTP 200; no browser console errors; the 404 page points users to search.
- Navigation: sidebar, on-page table of contents, Pagefind search (production builds), language selector, pagination in lifecycle order, and the mobile menu drawer all work.
- Responsive: verified at 1440px, 768px, and 390px with no horizontal overflow; the sidebar becomes a drawer on mobile.
- Copy: prompt copy matches the exact body with `Copied!` feedback; code-block copy announces via `aria-live`.
- Typography/visuals: computed styles match `docs/DESIGN_SYSTEM.md`; light and dark themes both render correctly.
- Accessibility: Lighthouse Accessibility 100 on desktop and mobile (home and `/ar/`); skip link, focus rings, and semantic headings confirmed.
- RTL/LTR: `/ar/` mirrors correctly in RTL; English stays LTR; code and prompt blocks remain LTR.
- Requirement coverage: FR-01..FR-08, NFR-01..NFR-08, CR-01..CR-07, DR-01..DR-06, LR-01..LR-05, and PR-01..PR-06 all pass.
- Links/pages: 0 broken internal links across all 141 built pages; every sidebar slug resolves; every content file is reachable.
- Documentation consistency: section and page counts match the repository; the `skills/` directory matches the Skills section.
- MVP success criteria in `docs/MVP.md` are satisfied; no major regression remains.

### Phase 8 Known Issues

- Sitemap warning resolved by configuring `site: 'https://ai-project-flow.vercel.app'`.
- The 404 page has no meta description and no home link in its main content (it offers search instead); cosmetic.
- Lighthouse flags two SEO items from Starlight's own chrome (search button accessible-name vs keyboard hint, and the footer "Learn more" link), not project content.
- Pagefind search only works in production builds and preview (Starlight behavior by design).
- The Arabic locale ships one proof page at `/ar/`; other Arabic URLs render English content with the "not yet translated" notice until the bilingual content work.

### Phase 9 — Documentation Reconciliation

- `PROJECT_CONTEXT.md` Current Status rewritten to reflect the implemented MVP (phases 0-8 complete, nine-section site, 141 pages including the Arabic locale) and the remaining Phase 10 handoff checkpoint.
- `docs/WORKFLOWS.md` corrected to the implemented 12-stage lifecycle (matching FR-08 and the site), with the files-per-stage table and the per-phase working loop kept as a separate sub-workflow.
- `src/content/docs/reference/workflow-at-a-glance.md` corrected to the same 12-stage lifecycle and files table so the site matches the repository.
- `skills/project-lifecycle/SKILL.md` greenfield default flow aligned to the 12-stage lifecycle stage names.
- `docs/ARCHITECTURE.md` content format corrected to "Markdown and MDX"; architecture shape now includes locale switching.
- `docs/DECISIONS.md` DEC-009 records the implemented Arabic locale scope (English root + Arabic `/ar/` proof page with fallbacks); DEC-010 stack corrected to "Markdown and MDX".
- Confirmed the remaining docs (`SCREEN_MAP.md`, `DESIGN_SYSTEM.md`, `PLAN.md`, `PROJECT_STATUS.md`, `CHANGELOG.md`, `HANDOFF.md`, `README.md`) already match the repository.
- Acceptance criteria met: documentation matches the repository, completed phases correctly marked, future scope clearly separated, next recommended step documented.

### Phase 10 — Handoff Checkpoint

- Confirmed the repository alone lets a new agent determine what the project is, how to run it, what is complete, what remains, what decisions were made, and the next step — without requiring previous conversation history.
- Confirmed the run instructions match `package.json` (`npm run dev` on `http://localhost:4321`, `npm run build` to `dist/`, `npm run preview`).
- Fixed the stale `HANDOFF.md` Current Phase header and recorded the completed plan in `PLAN.md`, `PROJECT_STATUS.md`, `CHANGELOG.md`, `HANDOFF.md`, `README.md`, and `PROJECT_CONTEXT.md`.
- Re-verified the build (141 pages); development server confirmed running.
- Acceptance criteria met: a receiving agent does not require previous conversation history.

### Decisions

- The current product is a documentation-focused website.
- The project is currently intended for personal use.
- The repository is the primary source of truth.
- The workflow must remain portable across IDEs and AI coding agents.
- Markdown is the default documentation format.
- No backend is required for the current MVP.
- No database is required for the current MVP.
- Arabic and English readiness is required.
- OpenCode documentation is the primary visual reference.
- Frontend technology: Astro + Starlight (`DEC-010`).
- The implemented localization scope is an English root locale plus a single Arabic proof page at `/ar/` with untranslated fallbacks (`DEC-009`).

### Current State

The planned MVP is complete and verified across all ten phases.

The planning and project preparation stages are complete.

The Astro + Starlight project foundation is implemented and verified.

The design system is implemented and verified.

The core documentation content (Phase 5) is implemented and verified.

Copy and documentation interactions (Phase 6) are implemented and verified.

Localization readiness (Phase 7) is implemented and verified: English remains the default at `/`, and an Arabic locale at `/ar/` proves RTL rendering with code and prompt blocks kept LTR.

Verification (Phase 8) is complete: the MVP satisfies the documented requirements and the `docs/MVP.md` success criteria across build, runtime, navigation, responsive behavior, copy, typography, accessibility, RTL/LTR, requirement coverage, links, and documentation consistency. No major regression remains; known issues are documented.

Documentation reconciliation (Phase 9) is complete: the docs, workflow pages, and lifecycle skill now match the implemented repository state.

Handoff checkpoint (Phase 10) is complete: a new agent can continue from the repository alone without previous conversation history.

### Next

- Deploy the site to Vercel.
- Optionally begin the deferred future-scope items, starting with the bilingual Arabic content (all `/ar/*` pages other than the proof page are still English fallbacks).
