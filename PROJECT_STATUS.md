# AI Project Flow — Project Status

## Current Phase

Project Files Workflow Redesign — Phase B: Prompt Generator

Status: Completed

Phase B (Prompt Generator) of the approved Project Files Workflow Redesign is complete: the bilingual tool pages (`/tools/prompt-generator/` and `/ar/tools/prompt-generator/`), the full frontend-only generator form, URL-prefilled state, and reuse of the existing prompt-block copy behavior. Phase C (prototype pages — Start a New Project, `PROJECT_CONTEXT.md`, `PROJECT_STATUS.md`) is next. The site remains live on Vercel at https://ai-project-flow.vercel.app.

## Overall Status

Complete — English MVP (Phases 0-10) and Arabic localization (Phases 1-3) delivered; site live on Vercel. In progress — Project Files Workflow Redesign (Phases A-Foundation and B-Prompt Generator complete, Phases C-E pending).

---

## Completed

### Project Files Workflow Redesign — Phase B (Prompt Generator)

* Implemented the bilingual Prompt Generator (frontend-only, no backend):
  * `src/content/docs/tools/prompt-generator.mdx` and `src/content/docs/ar/tools/prompt-generator.mdx` — the tool pages at `/tools/prompt-generator/` and `/ar/tools/prompt-generator/` (sidebar entry deferred to Phase D).
  * `src/scripts/prompt-generator.ts` — the full generator: bilingual form (project name, type, idea, target users, platform, languages/tech stack, main constraints, project size, target file, action), Generate button, and a `.prompt-block` output that renders the shared rules, project overview, target file, action instruction, project size, and next-file chain with LTR-isolated file names.
  * URL prefill via `?file=&action=&size=` with auto-generate; invalid values fall back to defaults.
  * `src/scripts/prompt-data.ts` — added `SIZES`, bilingual per-action instruction templates, and `getAction()`.
  * `src/scripts/copy-controls.ts` — exported `enhancePromptBlocks()` so the generator reuses the existing copy control.
  * `src/styles/custom.css` — `.apf-form__field--full`, `.apf-form__actions`, `.apf-generator__output`.
* UX refinement (final pass): shortened page intros; wrap-safe Target File dropdown options on narrow screens; accent-bordered "Generated prompt" output panel; muted size hint line. 4-step workflow, controls, details disclosure, URL prefill, copy, and bilingual/RTL behavior unchanged.
* Verified: production build passes (143 pages); English/Arabic rendering, all four actions, URL prefill (valid/invalid), copy behavior, desktop (1280px) and mobile (390px) layouts without overflow, light/dark contrast, no console errors, and no regression to the Prompts section copy controls.

### Project Files Workflow Redesign — Phase A (Foundation)

* Implemented the shared foundation for the approved Project Files Workflow Redesign:
  * `src/scripts/prompt-data.ts` — shared bilingual (English/Arabic) data: the canonical AI prompt rules block, the 11-file registry with labels and categories, the Small/Standard/Advanced size matrix (`CHANGELOG.md` = Recommended for Small), per-size flow order, and level/action labels.
  * `src/scripts/prompt-generator.ts` — Prompt Generator script skeleton with bilingual `buildPrompt()` and a guarded `init()`; the full form is deferred to Phase B.
  * `astro.config.mjs` — new `apf-prompt-generator` integration injecting the generator script on every page (mirrors `apf-copy-controls`).
  * `src/styles/custom.css` — section 12 "Workflow blocks": primary action bar, next-file callout, generator form controls, buttons, and size-matrix alignment on existing `--apf-` tokens, with RTL/LTR and responsive rules.
* Verified: production build passes (141 pages, sitemap, Pagefind index); the generator script is bundled into built pages and the new CSS classes compile into the shared stylesheet; browser checks confirm English/Arabic pages render correctly, the light/dark theme selector works, prompt-block copy controls are unchanged, and there are no console errors; `buildPrompt()` produces the correct bilingual prompt with the next-file chain in both locales.
* Scope respected: the Prompts section, the remaining Project Files pages, and the Lifecycle pages are untouched; no new pages or forms were built.

### Arabic Localization — Phase 3 (Remaining Sections)

* Translated all 11 Skills pages into professional Arabic: architecture, handoff, implementation-planning, mvp-planning, project-discovery, project-documentation, project-lifecycle, project-status, requirements, ui-implementation, verification.
* Translated all 9 Commands pages into professional Arabic: git-add, git-commit, git-diff, git-log, git-status, npm-install, npm-run-build, npm-run-dev, npm-run-preview.
* Translated all 10 Prompts pages into professional Arabic: architecture, handoff, implementation, implementation-planning, mvp-planning, project-context, project-discovery, requirements, resume-project, verification (MDX with localized prompt blocks and "المطالبة" labels).
* Translated all 3 Verification pages, all 3 Handoff pages, and both Reference pages into professional Arabic.
* Preserved exact structural parity with the English pages (headings, bullets, code blocks, tables, and internal links verified for all 38 pages); kept file names, paths, commands, and technical identifiers LTR while keeping Arabic prose RTL.
* Verified: production build (141 pages) passes; all Arabic routes serve real translated content with no "not yet translated" fallback notices; all internal `/ar/` links resolve; sitemap includes the new URLs; RTL/LTR (sidebar right, TOC left, LTR inline code) correct; sidebar labels, pagination, language switching, "نسخ"/"تم النسخ!" copy controls, Pagefind Arabic search (11 results for "الاستكشاف"), and the 390px mobile drawer layout all verified in the browser with no console errors.

### Arabic Localization — Phase 2 (Lifecycle & Files Sections)

* Translated all 12 Project Lifecycle stage pages into professional Arabic: idea-and-discovery, project-context, mvp-definition, requirements, architecture, implementation-planning, skills-and-agent-instructions, implementation, verification-and-testing, project-status-updates, change-documentation, handoff-and-portability.
* Translated all 11 Project Files pages into professional Arabic: project-context, mvp, requirements, architecture, decisions, plan, project-status, agents, changelog, handoff, skill.
* Preserved exact structural parity with the English pages (headings, bullet lists, code and file references, and internal links).
* Kept file names, paths, commands, and technical identifiers (CLI, API, MVP, RTL, LTR, Git/Astro/Starlight terms) LTR where appropriate while keeping Arabic prose RTL.
* Verified in the browser: all 23 routes serve real Arabic content (no fallback notices), `lang="ar" dir="rtl"` renders correctly with the sidebar on the right and table of contents on the left, inline code stays LTR, sidebar labels and on-page navigation are Arabic, pagination links work in lifecycle and files order, the language selector switches both ways, the prompt copy button shows "نسخ" / "تم النسخ!", Pagefind returns Arabic search results, and the 390px mobile layout has no horizontal overflow with the drawer menu working.
* Ran the production build (141 pages, sitemap, Pagefind index) with no errors; all 23 new Arabic routes return HTTP 200; all 39 unique `/ar/` internal links in the new pages resolve.

### Arabic Localization — Phase 1 (High-Level Overview Pages)

* Confirmed sidebar translations for all 70 sidebar items in `astro.config.mjs`.
* Localized `src/scripts/copy-controls.ts` with runtime BCP-47 language detection for prompt copy button text ("نسخ" / "تم النسخ!").
* Rewrote `src/content/docs/ar/index.mdx` to match the English home page structure.
* Created and translated the 8 Arabic section overview pages:
  * `lifecycle/overview.md`
  * `files/overview.md`
  * `skills/overview.md`
  * `commands/overview.md`
  * `prompts/overview.md`
  * `verification/overview.md`
  * `handoff/overview.md`
  * `reference/overview.md`
* Ran production build (141 pages, sitemap, search index verified) and confirmed RTL layout direction, active sidebar navigation highlighting, and LTR code-block formatting inside RTL contexts.

* Project folder structure created.
* Core documentation files created.
* Reusable skill folders created.
* Reusable `SKILL.md` files populated.
* `PROJECT_CONTEXT.md` completed for the current discovery stage.
* `docs/MVP.md` completed.
* `docs/REQUIREMENTS.md` completed.
* `docs/ARCHITECTURE.md` completed.
* `docs/DECISIONS.md` completed.
* `docs/WORKFLOWS.md` completed.
* `docs/SCREEN_MAP.md` completed.
* `docs/DESIGN_SYSTEM.md` completed.
* `AGENTS.md` completed.
* `PLAN.md` completed.
* `CHANGELOG.md` completed.
* `HANDOFF.md` completed.
* Frontend technology selected: Astro + Starlight.
* `docs/DECISIONS.md` updated with the technology decision.
* `docs/ARCHITECTURE.md` updated with the selected stack.
* Astro + Starlight project initialized.
* Documentation shell implemented.
* Main navigation structure configured with the planned sections.
* Start Here page and overview pages per planned section created.
* `npm install` verified.
* `npm run build` verified.
* Development server verified.

### Phase 4 — Design System Implementation

* `docs/DESIGN_SYSTEM.md` completed with the full visual spec.
* `docs/SCREEN_MAP.md` completed with the full navigation structure.
* Shared design tokens implemented in `src/styles/custom.css` (`--apf-` prefix).
* Starlight theme variables remapped to the design tokens.
* `customCss` wired into `astro.config.mjs`.
* Sidebar, code block, prompt block, and copy control styling implemented.
* RTL/LTR foundation implemented with logical CSS properties.
* Light and dark themes implemented.
* Build, routes, computed styles, responsive behavior, and RTL behavior verified.

### Phase 5 — Core Documentation Content

* Sidebar expanded in `astro.config.mjs` with the full Phase 5 content structure.
* Start Here page implemented with quick start, run instructions, and section guide.
* Project Lifecycle section implemented: overview plus 12 stage pages from idea and discovery through handoff and portability.
* Project Files section implemented: overview plus 11 file pages (`PROJECT_CONTEXT.md`, `docs/MVP.md`, `docs/REQUIREMENTS.md`, `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `PLAN.md`, `PROJECT_STATUS.md`, `AGENTS.md`, `CHANGELOG.md`, `HANDOFF.md`, `SKILL.md`).
* Skills section implemented: overview plus 11 skill pages matching the `skills/` directory.
* Commands section implemented: overview plus 9 command pages covering npm and git commands.
* Prompts section implemented: overview plus 10 reusable prompt pages using the `.prompt-block` design pattern.
* Verification section implemented: overview plus workflow, build/runtime, and acceptance criteria pages.
* Handoff section implemented: overview plus preparing, receiving, and running-the-project pages.
* Reference section implemented: overview plus workflow-at-a-glance and reading-order pages.
* Old placeholder overview pages removed.
* Build verified (71 pages built, search index generated).
* All routes verified with HTTP 200.
* All internal links verified.
* Prompt block and code block rendering verified in light and dark themes.

### Phase 5 Fixes — UI Inspection

* Fixed the light-theme `Text muted` token (`hsl(220 7% 52%)` → `hsl(220 7% 44%)`) so sidebar labels and prompt-block labels meet WCAG AA contrast.
* Aligned typography with the design system: `h1` 700, `h2` 650, `h3`/`h4` 600.
* Mapped `--sl-color-text` to `Text primary`; kept sidebar links on `Text secondary`.
* Re-verified: Lighthouse Accessibility 100, build passes.

### Phase 6 — Copy and Documentation Interactions

* Command and reusable-example copy buttons provided by the Expressive Code code-block toolbar (built into Starlight).
* Prompt copy buttons injected into every `.prompt-block` header by `src/scripts/copy-controls.ts`, bundled via the `apf-copy-controls` integration in `astro.config.mjs`.
* Clear copy feedback: `Copied!` label with accent state for 2 seconds on prompt buttons; `aria-live` announcement on code blocks.
* Sidebar mobile menu and on-page table of contents confirmed working.
* Build verified (71 pages, script bundled on every page).
* Browser verification: copy writes the prompt body to the clipboard, feedback resets, buttons render in light and dark themes, fit the 390px mobile viewport, are keyboard focusable, and do not duplicate on client-side navigation. No console errors.

### Phase 7 — Localization Readiness

* Enabled Starlight multilingual support: English root locale (`lang: en`, `dir: ltr`) plus Arabic (`lang: ar`, `dir: rtl`) at `/ar/`.
* Added a real Arabic starter page at `src/content/docs/ar/index.mdx` proving RTL rendering (Arabic text, LTR code block, prompt block with copy control).
* Confirmed the RTL/LTR CSS foundation (logical properties; code and prompt-block code forced LTR with `unicode-bidi: isolate`).
* Untranslated Arabic URLs use Starlight's fallback: English content with an Arabic "not yet translated" notice.
* Starlight UI chrome automatically localized (search, theme select, language select, table of contents, pagination).
* Build verified (141 pages: 71 English + 70 Arabic routes, `/ar/` real and the rest fallbacks).
* Browser verification: `/ar/` renders RTL with mirrored sidebar and table of contents; English pages unchanged; language selector switches both ways; code blocks stay LTR; mobile 390px RTL has no horizontal overflow; Lighthouse Accessibility 100 on `/ar/`; no console errors.

### Phase 8 — Verification

* Build passes (141 pages) with sitemap generated.
* Runtime verified: dev server and production preview serve routes with HTTP 200; no console errors; the 404 page points users to search.
* Navigation verified: sidebar, table of contents (scrolls to sections), Pagefind search (12 results for a test query, opens results), language selector, pagination in lifecycle order, and mobile menu drawer.
* Responsive verified at 1440px, 768px, and 390px: no horizontal overflow; the sidebar becomes a drawer and the table of contents relocates on smaller screens.
* Copy functionality verified: prompt copy matches the exact body (590 chars, line breaks preserved) with `Copied!` feedback; Expressive Code block copy announces via `aria-live`.
* Typography and visual consistency verified against `docs/DESIGN_SYSTEM.md`: h1 2rem/700, h2 1.5rem/650, body 1rem/1.7, code 0.875rem monospace, matching tokens, and working light and dark themes.
* Accessibility verified: Lighthouse Accessibility 100 on desktop and mobile for the home page and `/ar/`; skip link, accent focus rings, and semantic headings confirmed.
* RTL/LTR verified: `/ar/` is RTL with mirrored sidebar/table of contents; English stays LTR; code and prompt blocks remain LTR.
* Requirement coverage verified for FR-01..FR-08, NFR-01..NFR-08, CR-01..CR-07, DR-01..DR-06, LR-01..LR-05, and PR-01..PR-06.
* Broken links and missing pages checked: 0 broken internal links across all 141 pages; every sidebar slug resolves and every content file is reachable.
* Documentation consistency verified: section and page counts match the repository; the `skills/` directory matches the Skills section.
* MVP success criteria in `docs/MVP.md` are satisfied. No major regression remains.

### Phase 9 — Documentation Reconciliation

* `PROJECT_CONTEXT.md` Current Status rewritten to reflect the implemented MVP through verification and the remaining Phase 10 handoff checkpoint.
* `docs/WORKFLOWS.md` corrected to the implemented 12-stage lifecycle (matching FR-08 and the site) with the files-per-stage table and the per-phase working loop kept separate.
* `src/content/docs/reference/workflow-at-a-glance.md` corrected to the same 12-stage lifecycle and files table.
* `skills/project-lifecycle/SKILL.md` greenfield flow aligned to the 12-stage lifecycle stage names.
* `docs/ARCHITECTURE.md` corrected to "Markdown and MDX" content and added locale switching to the architecture shape.
* `docs/DECISIONS.md` recorded the implemented Arabic locale scope under DEC-009 and corrected the DEC-010 stack to "Markdown and MDX".
* Confirmed the remaining docs (`SCREEN_MAP.md`, `DESIGN_SYSTEM.md`, `PLAN.md`, `CHANGELOG.md`, `HANDOFF.md`, `README.md`) already match the repository.
* Acceptance criteria met: documentation matches the repository, completed phases correctly marked, future scope clearly separated, next recommended step documented.

### Phase 10 — Handoff Checkpoint

* Audited that a new agent can determine from the repository alone: what the project is, how to run it, what is complete, what remains, what decisions were made, and what the next step is.
* Confirmed the run instructions match `package.json` (`npm run dev` on `http://localhost:4321`, `npm run build` to `dist/`, `npm run preview`).
* Fixed the stale `HANDOFF.md` Current Phase header and updated all status docs to record the completed plan.
* Re-verified the build (141 pages); development server confirmed running.
* Acceptance criteria met: a receiving agent does not require previous conversation history.

### Deployment — Live on Vercel

* The site is deployed and live on Vercel at https://ai-project-flow.vercel.app.
* The production build, sitemap, and Pagefind index generate from the configured `site` URL; the deployment configuration is unchanged.

---

## Saved Experiment — OpenCode-style Logo Benchmark

A private visual benchmark was executed in `docs/logo-benchmark/` evaluating how closely the OpenCode header wordmark's design language can be reconstructed and applied to "AI PROJECT FLOW".

- The benchmark produced a **partial visual approximation**, but not a sufficiently accurate reproduction.
- The current result is intentionally **saved as a checkpoint** so this area can be resumed later; no further refinement is in progress.
- The benchmark is **separate from the application** (`src/` and `public/` are untouched) and is **not the approved production logo**.
- See `docs/logo-benchmark/README.md` for the full spec and deliverables.

---

## In Progress

- **Temporary evaluation:** the OpenCode-style logo benchmark is temporarily integrated into the site header (compact wordmark, light/dark variants) and favicon (`public/favicon-benchmark.svg`). This is a **visual benchmark only, not an approved production identity** — it will be kept while under evaluation and removed or replaced afterward. Revert = restore `favicon: '/favicon.svg'`, drop the `logo` block in `astro.config.mjs`, delete `public/favicon-benchmark.svg`.


---

## Pending

Nothing within the current plan. Future-scope items are documented in `PROJECT_CONTEXT.md` (Future Scope) and the bilingual Arabic content in `docs/DECISIONS.md` (DEC-009).

---

## Current MVP

The MVP is a documentation-focused website containing:

* Project lifecycle explanations.
* Project file documentation.
* Practical examples.
* Terminal commands with explanations.
* Reusable AI prompts.
* Copyable content.
* Documentation-style navigation.

---

## Selected Technology

* Frontend: Astro
* Documentation framework: Starlight
* Content: Markdown and MDX
* Backend: None
* Database: None

---

## Known Issues

None currently.

---

## Blockers

None currently.

---

## Important Constraints

* No backend in the current MVP.
* No database in the current MVP.
* No authentication or user accounts.
* No dynamic project generation.
* No automatic file generation.
* Keep the project portable across IDEs and AI coding agents.
* Preserve Arabic and English readiness.
* Follow the documented OpenCode-inspired visual direction.

---

## Next Recommended Step

Continue the approved Project Files Workflow Redesign:

1. **Phase C — Prototype pages**: add the Start a New Project page and redesign the `PROJECT_CONTEXT.md` and `PROJECT_STATUS.md` pages (English and Arabic), adding the compact structure and deep links to the generator.
2. **Phase D — Navigation and documentation reconciliation**: regroup the sidebar Project Files section into the five categories, add the tools entry, and update the related docs.
3. **Phase E — Validate and decide**: end-to-end test and rollout decision.

Deferred (not started): Recovery / Session Continuity / Model Switching / Agent Failure Handling documentation and the cross-tool transfer benchmark.

---

## Implementation Status

Complete — Planned English MVP Delivered, Arabic Localization Phases 1-3 Delivered, and site deployed live on Vercel
