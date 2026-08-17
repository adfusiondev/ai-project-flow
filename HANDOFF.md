# AI Project Flow — Handoff

## Purpose

This file provides the minimum information needed for another IDE or AI coding agent to understand and continue the project safely.

The receiving environment should not require access to previous conversation history.

---

## Project

Name: AI Project Flow

Type: Documentation website

Current Purpose:

A personal learning and reusable reference project for documenting the complete lifecycle of building software projects with AI coding agents.

---

## Current Phase

Project Files Workflow Redesign — Complete

Status: All phases (A–E) implemented, validated, and committed (2026-08-16)

Phase C (prototype pages) of the approved Project Files Workflow Redesign is implemented: the rewritten Project Files Overview, the new "Start a New Project" page with an interactive size selector and recommended file sequence, and the redesigned `PROJECT_CONTEXT.md` and `PROJECT_STATUS.md` pages (EN + AR) with primary action bars, copyable templates, and next-file guidance. The Phase C checkpoint was approved and the reconciliation committed (Phase C2) on 2026-08-16; Phase D completed and committed; Phase E completed and committed. A UI/UX reconciliation pass standardized all workflow action buttons on the shared 40px `.apf-action` system (Primary/Secondary only, no compact size), unified the Arabic Recover label to `استعادة`, removed the orphaned `.apf-matrix` CSS, and recorded the canonical Action System in `docs/DESIGN_SYSTEM.md`. A final visual refinement pass then made the workflow one coherent product: the Prompt Generator is now a single continuous workflow surface (steps, collapsible Project details, and Generate action share one panel with hairline dividers) and its output renders as a standard `.prompt-block`, the generator's `<details>/<summary>` no longer picks up Starlight's generic details styling, the Start hint gap was normalized to the shared 16px rhythm, and the duplicated step/index badge rules were merged. No routing, data-model, deep-link, prompt-building, copy, scroll, or layout-height behavior changed. A button-alignment pass then unified every generator control on the shared 40px action height (segmented pills and the Target File dropdown had inherited Starlight's markdown line-height and rendered at 42px/44px), and closed a Starlight sibling-margin leak inside the generator panel by opting the flow out with the `not-content` class while making the 16px section rhythm explicit — step badges now sit centered on their controls (delta 0) and the segmented pills form one aligned row. The same leak was then closed on the Start a New Project widget (which reuses the generator's size selector): its segmented row now renders 40px with aligned pills and the sequence rows return to their intended 8px gaps. Approved and committed as Phase C2 on 2026-08-16.

A Navigation Consistency pass (2026-08-16) then closed the last navigation gap in the Project Files workflow: the Prompt Generator (`/tools/prompt-generator/` + `/ar/tools/prompt-generator/`) is outside the Starlight sidebar, so it had no Previous/Next and no way to return to the originating file or continue to the next recommended file. The generator now shows a contextual Back-to-file / Next-recommended-file navigation (EN + AR) built from the shared `FLOW_ORDER` / `nextFile` workflow data and re-rendered when the target file or size changes; all `/files/*` pages keep their native Starlight pagination. Verified EN/AR × desktop × mobile.

The site remains deployed and live at https://ai-project-flow.vercel.app. The core English MVP (Phases 0-10) is complete and verified, and the Arabic localization (Phases 1-3) is complete.

Phase 1 (High-Level Overview Pages) is complete: sidebar translations, the localized prompt copy script, the Arabic home page, and all 8 section overview pages.

Phase 2 (Lifecycle & Files Sections) is complete: all 12 Project Lifecycle stage pages and all 11 Project Files pages are translated into professional Arabic.

Phase 3 (Remaining Sections) is complete: all 11 Skills pages, 9 Commands pages, 10 Prompts pages, 3 Verification pages, 3 Handoff pages, and 2 Reference pages are translated into professional Arabic. The Arabic locale is now fully translated across the site, verified via the production build and browser checks (RTL/LTR, sidebar labels, navigation, pagination, copy controls, language switching, Arabic search, and mobile layout).

Phase 6's copy and documentation interactions are implemented and verified. Command and code-block copy buttons come from the Expressive Code toolbar; prompt blocks receive a `Copy` button injected by `src/scripts/copy-controls.ts` (bundled via the `apf-copy-controls` integration in `astro.config.mjs`), with `Copied!` feedback.

Phase 7's localization readiness is implemented and verified. Starlight multilingual support is enabled in `astro.config.mjs`: English is the root locale (`lang: en`, `dir: ltr`) and Arabic is an additional locale (`lang: ar`, `dir: rtl`) at `/ar/`. A real Arabic starter page exists at `src/content/docs/ar/index.mdx`. At the time, all other Arabic URLs served Starlight's untranslated fallback (English content with an Arabic notice); since then the home page, overview pages, and the Lifecycle and Files sections have been translated. The existing RTL/LTR CSS foundation keeps code and prompt blocks LTR inside RTL pages.

Phase 8's verification is complete. The MVP satisfies the documented requirements and the `docs/MVP.md` success criteria: build (141 pages), runtime, navigation, responsive behavior (1440/768/390px), copy functionality, typography (matches `docs/DESIGN_SYSTEM.md`), accessibility (Lighthouse 100), RTL/LTR behavior, requirement coverage (FR/NFR/CR/DR/LR/PR), broken links (0 across all pages), and documentation consistency all pass. Known issues are documented in `PLAN.md` and `CHANGELOG.md`.

Phase 9's documentation reconciliation is complete. `PROJECT_CONTEXT.md` reflects the implemented MVP; `docs/WORKFLOWS.md`, the workflow-at-a-glance reference page, and the project-lifecycle skill now describe the same 12-stage lifecycle the site implements; `docs/ARCHITECTURE.md` and `docs/DECISIONS.md` record Markdown and MDX content, locale switching, and the implemented Arabic scope; and the remaining docs were confirmed consistent with the repository.

Phase 10's handoff checkpoint is complete. The repository alone lets a new agent determine what the project is, how to run it, what is complete, what remains, what decisions were made, and the next step, without requiring previous conversation history. Run instructions were confirmed against `package.json`, and the build (141 pages) and development server were re-verified.

Deployment is complete: the site is live on Vercel at https://ai-project-flow.vercel.app. The production build, sitemap, and Pagefind index generate from the configured `site` URL, and the deployment configuration was unchanged.

The planned English MVP and the Arabic localization (Phases 1-3) are complete, and the site is deployed and live on Vercel. The Project Files Workflow Redesign is the active improvement plan: Phases A (Foundation), B (Prompt Generator), C (Prototype Pages), C2 (Reconciliation), Navigation Consistency, and Phase D (Navigation and Documentation Reconciliation) are complete and committed; Phase E (Validate and Decide) is complete and committed.

---

## Current MVP

The MVP includes:

- Project lifecycle explanations.
- Project file documentation.
- Practical examples.
- Terminal commands with explanations.
- Reusable AI prompts.
- Copyable reference content.
- Documentation-style navigation.

The MVP currently excludes:

- Backend services.
- Database integration.
- Authentication.
- User accounts.
- Dynamic project generation.
- Automatic file generation.

---

## Completed

- Completed Project Files Workflow Redesign — Phase B (Prompt Generator):
  - `src/content/docs/tools/prompt-generator.mdx` and `src/content/docs/ar/tools/prompt-generator.mdx` — the bilingual tool pages (sidebar entry deferred to Phase D).
  - `src/scripts/prompt-generator.ts` — full generator: bilingual form (project name, type, idea, target users, platform, languages/tech stack, constraints, project size, target file, action), Generate button, and a `.prompt-block` output with the shared rules, project overview, target file, action instruction, project size, and next-file chain. File names isolated LTR via `<code>`. All fields carry `name` attributes.
  - URL prefill via `?file=&action=&size=` with auto-generate; invalid values fall back to defaults.
  - `src/scripts/prompt-data.ts` — added `SIZES`, bilingual per-action instruction templates, and `getAction()`.
  - `src/scripts/copy-controls.ts` — exported `enhancePromptBlocks()`.
  - `src/styles/custom.css` — `.apf-form__field--full`, `.apf-form__actions`, `.apf-generator__output`.
  - UX refinement (final pass): shortened page intros; wrap-safe Target File dropdown options on narrow screens; accent-bordered "Generated prompt" output panel; muted size hint line. 4-step workflow, controls, details disclosure, URL prefill, copy, and bilingual/RTL behavior unchanged.
  - Verified: production build (143 pages); EN/AR, all four actions, URL prefill, copy behavior, desktop/mobile layouts, light/dark contrast, no console errors, no Prompts regression.

- Completed Project Files Workflow Redesign — Phase C (Prototype Pages) — implemented and committed as Phase C2 (2026-08-16):
  - `files/overview.md` + `ar/` mirror — rewritten as a workflow guide: one-paragraph "what Project Files are", a primary "Start a New Project" link, a compact file/purpose table, a short "how the Prompt Generator fits" section, and a "where to start" pointer to `PROJECT_CONTEXT.md`.
  - New `/files/start/` and `/ar/files/start/` pages — "Start a New Project": `src/scripts/start-project.ts` renders a Small/Standard/Advanced size selector, per-size file count hint, "Start here" primary action bar for the first file, and the recommended sequence with level badges and skip-consequence notes; each row deep-links into the Prompt Generator pre-filled (`?file=…&action=create&size=…`). Added the `files/start` sidebar entry and the `apf-start-project` Astro integration.
  - `files/project-context.mdx` + `ar/` mirror (renamed `.md` → `.mdx` so the JSX compiles) — compact redesign: "What to do next" primary action bar (Create / Review / Update / Recover deep links), Purpose, When to use it, Required inputs, Reads from / feeds into, a copyable Markdown template in a `.prompt-block`, a short generic example, a "Next recommended file" callout (`docs/MVP.md`), and the lifecycle link.
  - `files/project-status.mdx` + `ar/` mirror — same compact structure adapted to tracking, with the template mirroring the repo status doc structure and the next-file callout pointing to `CHANGELOG.md`.
  - `src/styles/custom.css` — section 14 for the Start widget and the `.apf-template` copyable template.
  - Verified: production build (145 pages); EN/AR rendering with correct RTL/LTR and fonts, Start widget sequences for all three sizes, primary action bar updates on size change, all deep links pre-fill the generator, file-page templates copy the full Markdown, desktop (1280px) and 390px mobile without overflow, Prompts copy controls unchanged, no console errors.

- Completed Project Files Workflow Redesign — Phase C (UI/UX Reconciliation) — committed as Phase C2 (2026-08-16):
  - Standardized every actionable button/link across Start a New Project, the 11 file guide pages, and the Prompt Generator on the shared `.apf-action` base (40px min-height, shared typography/padding/radius/focus). Hierarchy now comes only from Primary vs. Secondary; `apf-action--compact` removed from the Start widget.
  - Project Files overview "Start a New Project" CTA (EN + AR) converted to the shared primary action.
  - Arabic Recover label unified to `استعادة` in the shared action data (`prompt-data.ts`), the generator UI (which renders from the data), and the Arabic generator description.
  - Removed orphaned `.apf-matrix th/td` CSS and the unused `.apf-action--compact` rule.
  - `docs/DESIGN_SYSTEM.md` updated with the canonical Action System (Project Files workflow): single 40px base, Primary/Secondary hierarchy, responsive action-group behavior, RTL ordering, shared surfaces.
  - Verified: production build passes; EN/AR × light/dark × viewports re-tested on Start, all 11 file guides, and the Prompt Generator.

- Completed Project Files Workflow Redesign — Phase A (Foundation):
  - `src/scripts/prompt-data.ts` — shared bilingual (English/Arabic) data: canonical AI prompt rules block, 11-file registry with labels and categories, Small/Standard/Advanced size matrix (`CHANGELOG.md` = Recommended for Small), per-size flow order, and level/action labels.
  - `src/scripts/prompt-generator.ts` — Prompt Generator script skeleton with bilingual `buildPrompt()` (rules + target file + action + next-file chain) and a guarded `init()`; the full form is deferred to Phase B.
  - `astro.config.mjs` — new `apf-prompt-generator` integration injecting the generator script on every page.
  - `src/styles/custom.css` — section 12 "Workflow blocks": primary action bar, next-file callout, generator form controls, buttons, and size-matrix alignment, with RTL/LTR and responsive rules.
  - Verified: production build (141 pages) passes; generator script bundled into built pages; new CSS classes compile into the shared stylesheet; browser checks confirm English/Arabic rendering, light/dark theme selector, unchanged prompt-block copy controls, and no console errors; `buildPrompt()` produces the correct bilingual prompt with the next-file chain in both locales.

- Core project documentation files completed.
- Reusable project `SKILL.md` files populated.
- Frontend technology selected and recorded (`DEC-010`): Astro + Starlight.
- Astro + Starlight project initialized.
- Starter template content replaced with the AI Project Flow documentation shell.
- Main navigation structure configured with the planned sections.
- Start Here page and one overview page per planned section created.
- `npm install` verified.
- `npm run build` verified (10 pages built, search index generated).
- Development server verified (`npm run dev`).

- Completed `docs/DESIGN_SYSTEM.md` with the full visual spec.
- Completed `docs/SCREEN_MAP.md` with the full navigation structure.
- Implemented the design system in `src/styles/custom.css` (`--apf-` tokens).
- Wired `customCss` into `astro.config.mjs`.
- Styled the sidebar, code blocks, prompt blocks, and copy controls.
- Added the RTL/LTR foundation and both light and dark themes.
- Verified the build, routes, computed styles, responsive behavior, and RTL behavior.

- Completed Phase 5 — Core Documentation Content:
  - Expanded the sidebar with the full content structure.
  - Implemented the Start Here page with quick start and run instructions.
  - Implemented the Project Lifecycle section (overview plus 12 stage pages).
  - Implemented the Project Files section (overview plus 11 file pages).
  - Implemented the Skills section (overview plus 11 skill pages).
  - Implemented the Commands section (overview plus 9 command pages).
  - Implemented the Prompts section (overview plus 10 reusable prompts using the `.prompt-block` pattern).
  - Implemented the Verification, Handoff, and Reference sections.
  - Removed the old placeholder overview pages.
  - Verified the build (71 pages), all routes (HTTP 200), internal links, and prompt/code block rendering in light and dark themes.

- Completed Phase 6 — Copy and Documentation Interactions:
  - Command and code-block copy buttons provided by the Expressive Code toolbar (built into Starlight).
  - Prompt copy buttons injected into every `.prompt-block` header by `src/scripts/copy-controls.ts`, bundled via the `apf-copy-controls` integration in `astro.config.mjs`.
  - `Copied!` feedback (2 seconds) on prompt buttons; `aria-live` announcement on code blocks.
  - Verified in the browser: clipboard write, light/dark themes, 390px mobile, keyboard focus, RTL (blocks stay LTR), client-side navigation (no duplicates), no console errors.

- Completed Phase 7 — Localization Readiness:
  - Enabled Starlight multilingual support in `astro.config.mjs`: English root locale (`lang: en`, `dir: ltr`) plus Arabic (`lang: ar`, `dir: rtl`) at `/ar/`.
  - Added `src/content/docs/ar/index.mdx` as a real Arabic starter page proving RTL rendering (Arabic text, LTR code block, prompt block with copy control).
  - Confirmed the RTL/LTR CSS foundation: logical CSS properties throughout; code and prompt-block code forced to `direction: ltr` with `unicode-bidi: isolate` in RTL contexts.
  - Untranslated Arabic URLs render Starlight's fallback: English content with an Arabic "not yet translated" notice.
  - Starlight UI chrome auto-localized (search, theme select, language select, table of contents, pagination, skip link).
  - Verified: build (141 pages), `/ar/` RTL mirroring, English unchanged, language selector works both ways, mobile 390px RTL without horizontal overflow, Lighthouse Accessibility 100 on `/ar/`, no console errors.

- Completed Phase 8 — Verification:
  - Build passes (141 pages); sitemap index successfully generated at `dist/sitemap-index.xml`.
  - Runtime: all routes HTTP 200 on dev server and production preview; no console errors; 404 page points users to search.
  - Navigation: sidebar, table of contents, Pagefind search, language selector, pagination in lifecycle order, and mobile menu all verified.
  - Responsive: no overflow at 1440px, 768px, or 390px; sidebar becomes a drawer on mobile.
  - Copy: prompt copy matches the exact body with `Copied!` feedback; code-block copy announces via `aria-live`.
  - Typography/visuals match `docs/DESIGN_SYSTEM.md`; light and dark themes verified.
  - Accessibility: Lighthouse 100 on desktop and mobile; skip link, focus rings, semantic headings confirmed.
  - RTL/LTR: `/ar/` RTL mirrored; English LTR; code and prompt blocks stay LTR.
  - Requirement coverage: FR-01..FR-08, NFR-01..NFR-08, CR-01..CR-07, DR-01..DR-06, LR-01..LR-05, PR-01..PR-06 all pass.
  - Links: 0 broken internal links across all 141 built pages; every sidebar slug resolves; every content file reachable.
  - Documentation consistency: section/page counts match the repository; `skills/` matches the Skills section.
  - MVP success criteria satisfied; no major regression. Known issues documented in `PLAN.md`.

- Completed Arabic Localization Phase 3 (Remaining Sections):
  - Translated all 11 Skills pages, 9 Commands pages, 10 Prompts pages, 3 Verification pages, 3 Handoff pages, and 2 Reference pages (38 pages total) into professional Arabic under src/content/docs/ar/.
  - Prompts pages are MDX and preserve the prompt-block structure with localized "المطالبة" labels and the نسخ / تم النسخ! copy button.
  - Verified: production build (141 pages) passes with no Arabic fallback notices; all 38 routes serve real Arabic content; structural parity, RTL/LTR, sidebar labels, pagination, language switching, copy controls, Arabic search, and the 390px mobile drawer all verified with no console errors.

- Completed Arabic Localization Phase 2 (Lifecycle & Files Sections):
  - Translated all 12 Project Lifecycle stage pages (idea-and-discovery, project-context, mvp-definition, requirements, architecture, implementation-planning, skills-and-agent-instructions, implementation, verification-and-testing, project-status-updates, change-documentation, handoff-and-portability) and all 11 Project Files pages (project-context, mvp, requirements, architecture, decisions, plan, project-status, agents, changelog, handoff, skill) into professional Arabic under src/content/docs/ar/.
  - Preserved exact structural parity with the English pages; kept file names, paths, commands, and technical identifiers LTR where appropriate.
  - Verified: production build (141 pages) passes, all 23 routes serve real Arabic content with dir="rtl", sidebar right / TOC left mirroring, LTR inline code, Arabic sidebar and on-page navigation, pagination in order, language selector both ways, "نسخ" / "تم النسخ!" copy feedback, Arabic search results, and 390px mobile without horizontal overflow.

- Completed Phase 9 — Documentation Reconciliation:
  - `PROJECT_CONTEXT.md`, `docs/WORKFLOWS.md`, the workflow-at-a-glance reference page, and the project-lifecycle skill now describe the implemented 12-stage lifecycle.
  - `docs/ARCHITECTURE.md` and `docs/DECISIONS.md` record Markdown and MDX content, locale switching, and the implemented Arabic scope.
  - Remaining docs confirmed consistent with the repository; completed phases correctly marked; future scope separated; next recommended step documented.

- Completed Phase 10 — Handoff Checkpoint:
  - Confirmed the repository alone lets a new agent determine what the project is, how to run it, what is complete, what remains, what decisions were made, and the next step.
  - Run instructions match `package.json` scripts; build (141 pages) and development server re-verified.
  - Fixed the stale Current Phase header; updated `PLAN.md`, `PROJECT_STATUS.md`, `CHANGELOG.md`, `README.md`, and `PROJECT_CONTEXT.md` to record the completed plan.
- Completed deployment to Vercel:
  - The site is live at https://ai-project-flow.vercel.app.
  - The production build, sitemap, and Pagefind index generate from the configured `site` URL; the deployment configuration is unchanged.
- Completed a saved OpenCode-style logo benchmark checkpoint:
  - Executed a private visual benchmark under `docs/logo-benchmark/` reconstructing the OpenCode wordmark's design DNA (grid, 6-unit rectilinear strokes, open counters, two-tone ink/chip, mid-word fade) applied to "AI PROJECT FLOW".
  - The benchmark produced a **partial visual approximation**, but not a sufficiently accurate reproduction; the result is intentionally saved as a checkpoint for later resumption.
  - The benchmark is separate from the application: `src/` and `public/` were not modified, nothing from it is integrated into the site, and it is **not the approved production logo**.

---

## Temporary Integration — Logo Benchmark

- The OpenCode-style logo benchmark is **temporarily integrated** into the app for visual evaluation:
  - Header wordmark: benchmark compact variant via Starlight `logo` config in `astro.config.mjs` (light/dark theme variants, `replacesTitle: true`).
  - Favicon: `public/favicon-benchmark.svg` (theme-aware), configured as `favicon` in `astro.config.mjs`.
- This is a **temporary visual benchmark integration, not an approved production identity**. It will be removed or replaced after evaluation.
- Reverting: set `favicon` back to `'/favicon.svg'`, remove the `logo` block, and delete `public/favicon-benchmark.svg`.

## Skills Status


Reusable project skills exist and are populated under `skills/`:

- `skills/project-lifecycle/`
- `skills/project-discovery/`
- `skills/mvp-planning/`
- `skills/requirements/`
- `skills/architecture/`
- `skills/implementation-planning/`
- `skills/project-documentation/`
- `skills/project-status/`
- `skills/verification/`
- `skills/handoff/`
- `skills/ui-implementation/`

---

## Important Decisions

Current accepted decisions include:

- Documentation website first.
- Personal project first.
- Repository as source of truth.
- Tool-agnostic workflow.
- Markdown-first documentation.
- No backend in the MVP.
- No database in the MVP.
- Arabic and English readiness.
- OpenCode documentation as the primary visual reference.
- Frontend technology: Astro + Starlight.

See:

`docs/DECISIONS.md`

for the full reasoning.

---

## Design Direction

The visual direction is inspired by the OpenCode documentation experience.

The interface should prioritize:

- Minimal documentation layout.
- Left sidebar navigation.
- Focused main content.
- Optional "On this page" navigation.
- Clean code blocks.
- Restrained colors.
- Strong typography.
- Generous spacing.
- RTL and LTR readiness.

See:

`docs/DESIGN_SYSTEM.md`

---

## How to Run

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:4321`.

Build the static site:

```bash
npm run build
```

Output is written to `dist/`.

---

## Repository Structure

Project path:

`/Users/mac/Desktop/ai-project-flow`

Implementation:

- `astro.config.mjs` — Starlight site configuration (including the `locales` block for English and Arabic), navigation, and the `apf-copy-controls` and `apf-prompt-generator` integrations.
- `src/styles/custom.css` — the shared design system implementation (logical properties; RTL/LTR foundation in section 10; workflow blocks in section 12).
- `src/scripts/copy-controls.ts` — shared script that adds prompt copy buttons to every `.prompt-block`.
- `src/scripts/prompt-data.ts` — shared bilingual prompt rules, file registry, the Small/Standard/Advanced size matrix, and the per-action instruction templates for the Project Files Workflow Redesign.
- `src/scripts/prompt-generator.ts` — Prompt Generator: bilingual form, `buildPrompt()`, URL prefill, and output in the shared prompt block.
- `src/content/docs/tools/prompt-generator.mdx` and `src/content/docs/ar/tools/prompt-generator.mdx` — the bilingual Prompt Generator tool pages.
- `src/content/docs/` — English documentation content (Markdown and MDX).
- `src/content/docs/ar/` — Arabic documentation content: fully translated across all sections (home page, overview pages, Lifecycle, Files, Skills, Commands, Prompts, Verification, Handoff, and Reference).
- `public/` — static assets.
- `src/content.config.ts` — content collection definition.

Documentation:

- `docs/` — project planning and reference documentation.

Skills:

- `skills/` — reusable project skills.

---

## Required Reading for a Receiving Agent

Before making changes, read:

1. `AGENTS.md`
2. `PROJECT_CONTEXT.md`
3. `PROJECT_STATUS.md`
4. `PLAN.md`
5. `HANDOFF.md`
6. `docs/MVP.md`
7. `docs/REQUIREMENTS.md`
8. `docs/ARCHITECTURE.md`
9. `docs/DECISIONS.md`
10. Relevant files under `docs/`
11. Relevant files under `skills/`

---

Note: the build is configured with `site: 'https://ai-project-flow.vercel.app'`, which is the live production URL, for production sitemap generation.

---

## Blockers

None currently.

---

## Next Recommended Step

The Recovery & Continuity section is complete. All phases (A–F) of the project are implemented, validated, and committed.

Cross-tool Transfer Benchmark v1 framework is prepared (baseline and fixture tags established, no runs executed). Next step: first actual benchmark run.

---

## Receiving Agent Rule

Do not begin implementation immediately.

First:

- Inspect the repository.
- Read the project documentation.
- Verify that documentation matches the actual repository.
- Reconstruct the current checkpoint.
- Report any discrepancy.
- Continue from the documented next step.

The repository is the primary source of truth.
