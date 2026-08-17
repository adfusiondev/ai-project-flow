# AI Project Flow — Implementation Plan

## Goal

Build the approved documentation-focused MVP in controlled phases.

The plan must remain aligned with:

* `PROJECT_CONTEXT.md`
* `docs/MVP.md`
* `docs/REQUIREMENTS.md`
* `docs/ARCHITECTURE.md`
* `docs/DECISIONS.md`
* `docs/SCREEN_MAP.md`
* `docs/DESIGN_SYSTEM.md`

---

## Phase 0 — Planning Foundation

Status: Completed

### Objective

Prepare the project context, requirements, architecture, workflows, screen map, design direction, and agent rules before implementation.

### Completed Files

* `PROJECT_CONTEXT.md`
* `docs/MVP.md`
* `docs/REQUIREMENTS.md`
* `docs/ARCHITECTURE.md`
* `docs/DECISIONS.md`
* `docs/WORKFLOWS.md`
* `docs/SCREEN_MAP.md`
* `docs/DESIGN_SYSTEM.md`
* `AGENTS.md`
* `PROJECT_STATUS.md`

### Completion Criteria

* Project scope is clear.
* MVP is defined.
* Requirements are documented.
* Architecture is defined.
* Important decisions are recorded.
* Navigation and design direction are documented.
* Project status is current.

---

## Phase 1 — Final Project Preparation

Status: Completed

### Objective

Complete the remaining portable project-management files and reusable skills.

### Completed

* `PLAN.md` created.
* `CHANGELOG.md` completed.
* `HANDOFF.md` completed.
* Reusable project `SKILL.md` files populated.
* Core project documentation prepared.
* Repository structure made understandable without relying on conversation history.

### Acceptance Criteria

* All core project files contain useful content.
* Skills define reusable project workflows.
* The next implementation step is explicit.

---

## Phase 2 — Technology Selection

Status: Completed

### Objective

Select the simplest suitable frontend technology for the MVP.

### Selected Stack

* Frontend: Astro
* Documentation framework: Starlight
* Content: Markdown
* Backend: None
* Database: None

### Decision

Astro + Starlight was selected because it provides a simple, fast, documentation-focused foundation with strong Markdown support and avoids unnecessary full-stack complexity.

The decision is recorded in `docs/DECISIONS.md` (`DEC-010`) and reflected in `docs/ARCHITECTURE.md`.

### Acceptance Criteria

* Technology choice is justified.
* No unnecessary backend or database is introduced.
* The selected approach supports the approved MVP.

---

## Phase 3 — Project Foundation

Status: Completed

### Objective

Create the runnable Astro + Starlight project and basic documentation shell.

### Scope

* Astro + Starlight initialization.
* Base application structure.
* Main documentation layout.
* Top navigation.
* Left sidebar.
* Main content area.
* Optional right-side "On this page" structure.
* Basic responsive behavior.

### Implemented

* Astro + Starlight project initialized (`package.json`, `astro.config.mjs`, `tsconfig.json`).
* Starter template content replaced with the AI Project Flow documentation shell.
* Starlight sidebar configured with the planned MVP sections:
  * Start Here
  * Project Lifecycle
  * Project Files
  * Skills
  * Commands
  * Prompts
  * Verification
  * Handoff
  * Reference
* Start Here page created at `src/content/docs/index.mdx`.
* One overview page created per planned section under `src/content/docs/`.

### Verification

* `npm install` succeeds.
* `npm run build` succeeds (10 pages built, search index generated).
* `npm run dev` starts and serves all routes with HTTP 200.
* Full navigation structure renders in the sidebar.
* No critical runtime errors.

### Acceptance Criteria

* Project installs successfully. — Passed
* Development server starts successfully. — Passed
* Documentation shell renders. — Passed
* Main navigation structure is visible. — Passed
* No critical runtime errors. — Passed

---

## Phase 4 — Design System Implementation

Status: Completed

### Objective

Implement the documented visual system consistently.

### Scope

* Typography.
* Colors.
* Spacing.
* Borders.
* Content width.
* Sidebar styling.
* Code blocks.
* Prompt blocks.
* Copy controls.
* Responsive rules.
* RTL/LTR foundation.
* Theme readiness.

### Implemented

* `docs/DESIGN_SYSTEM.md` completed with the full visual spec (typography, colors, spacing, borders, content width, sidebar, code blocks, prompt blocks, copy controls, responsive rules, RTL/LTR foundation, theme readiness).
* `docs/SCREEN_MAP.md` completed with the full navigation and page structure.
* Shared design tokens implemented in `src/styles/custom.css` using the `--apf-` prefix.
* Starlight theme variables remapped to the design tokens so framework components follow the design system.
* `customCss: ['/src/styles/custom.css']` wired into `astro.config.mjs`.
* Sidebar styling, code block styling, prompt block styling, and copy control styling implemented.
* RTL/LTR foundation implemented with logical CSS properties; code blocks stay LTR in RTL contexts.
* Light and dark themes implemented from the same token structure.

### Verification

* `npm run build` succeeds (10 pages built, search index generated).
* Development server serves all routes with HTTP 200.
* Computed styles verified in light and dark themes across desktop and mobile viewports.
* Design tokens resolve correctly; sidebar, code blocks, prompt blocks, copy controls, and inline code render with the documented values.
* Active sidebar link shows the documented accent state.
* Responsive behavior verified at `1440px` and `390px` viewports.
* RTL foundation verified: prompt block accent border flips via logical properties; code blocks remain LTR in RTL contexts.

### Acceptance Criteria

* UI follows `docs/DESIGN_SYSTEM.md`. — Passed
* Layout resembles the approved OpenCode-inspired direction. — Passed
* Shared styles are reusable. — Passed
* No unnecessary page-specific styling system is introduced. — Passed

---

## Phase 5 — Core Documentation Content

Status: Completed

### Objective

Implement the main MVP documentation sections.

### Scope

* Start Here.
* Project Lifecycle.
* Project Files.
* Skills.
* Commands.
* Prompts.
* Verification.
* Handoff.
* Reference.

### Implemented

* Expanded the sidebar in `astro.config.mjs` with the full Phase 5 content structure (each section now has an Overview plus content pages).
* Start Here implemented with a quick start, run instructions, and a section guide.
* Project Lifecycle implemented: overview plus 12 stage pages from idea and discovery through handoff and portability.
* Project Files implemented: overview plus 11 file pages (`PROJECT_CONTEXT.md`, `docs/MVP.md`, `docs/REQUIREMENTS.md`, `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `PLAN.md`, `PROJECT_STATUS.md`, `AGENTS.md`, `CHANGELOG.md`, `HANDOFF.md`, `SKILL.md`).
* Skills implemented: overview plus 11 skill pages matching the `skills/` directory.
* Commands implemented: overview plus 9 command pages covering npm and git commands.
* Prompts implemented: overview plus 10 reusable prompt pages using the `.prompt-block` design pattern.
* Verification implemented: overview plus workflow, build/runtime, and acceptance criteria pages.
* Handoff implemented: overview plus preparing, receiving, and running-the-project pages.
* Reference implemented: overview plus workflow-at-a-glance and reading-order pages.
* Removed the old placeholder overview pages.

### Verification

* `npm run build` succeeds (71 pages built, search index generated).
* All routes verified with HTTP 200 via the preview server.
* All internal links verified against the built routes.
* Prompt block rendering verified in light and dark themes (accent border, surface background, uppercase label).
* Code block rendering verified.

### Acceptance Criteria

* Main documentation sections are accessible. — Passed
* Navigation matches `docs/SCREEN_MAP.md`. — Passed
* Content hierarchy is consistent. — Passed
* Important commands, examples, and prompts are clearly presented. — Passed

---

## Phase 6 — Copy and Documentation Interactions

Status: Completed

### Objective

Add the lightweight interactions required by the MVP.

### Scope

* Copy buttons for commands.
* Copy buttons for prompts.
* Copy buttons for reusable examples.
* Clear copy feedback.
* Sidebar behavior on smaller screens.
* On-page navigation where appropriate.

### Implemented

* Command and reusable-example copy buttons are provided by the Expressive Code code-block toolbar built into Starlight, so every code block is copyable.
* Prompt copy buttons are injected into every `.prompt-block` header by a shared script at `src/scripts/copy-controls.ts`, which is bundled into every page by the `apf-copy-controls` integration in `astro.config.mjs`.
* Clear copy feedback: the prompt button label changes to `Copied!` with an accent state for 2 seconds; Expressive Code blocks announce `Copied!` through an `aria-live` region.
* Sidebar behavior on smaller screens uses the Starlight built-in mobile menu (verified).
* On-page navigation uses the Starlight built-in table of contents (verified).

### Verification

* `npm run build` succeeds (71 pages); the copy-controls script is bundled and referenced on every page.
* Prompt copy verified in the browser: button injects into the block header, copies the prompt body to the clipboard, shows `Copied!` feedback, and resets after 2 seconds.
* Code-block copy verified in the browser with `Copied!` feedback.
* Verified in light and dark themes, at the 390px mobile viewport (no horizontal overflow, button fits the header), with keyboard focus and a visible focus ring, and across client-side navigation (no duplicate buttons).
* No console errors or warnings.

### Acceptance Criteria

* Copy interactions work reliably. — Passed
* No backend is required. — Passed
* Interactions remain simple and accessible. — Passed

---

## Phase 7 — Localization Readiness

Status: Completed

### Objective

Ensure the implementation can support Arabic and English correctly.

### Scope

* RTL support.
* LTR support.
* Language-aware layout structure.
* Code and terminal blocks remain appropriately LTR.
* Navigation behavior works in both directions.

### Implemented

* Enabled Starlight multilingual support in `astro.config.mjs`: English is the root locale (`lang: en`, `dir: ltr`) and Arabic is an additional locale (`lang: ar`, `dir: rtl`) at `/ar/`.
* Added a real Arabic starter page at `src/content/docs/ar/index.mdx` that demonstrates RTL rendering: Arabic headings and body text, a bash code block (kept LTR), and an Arabic prompt block with the copy control.
* Confirmed the existing RTL/LTR CSS foundation (`src/styles/custom.css` section 10): logical CSS properties throughout, and code and prompt-block code forced to `direction: ltr` with `unicode-bidi: isolate` and `text-align: left` in RTL contexts.
* Untranslated Arabic URLs render Starlight's standard fallback: the English content with an Arabic "not yet translated" notice (`هذا المحتوى غير متوفر بلغتك بعد.`), so the site remains usable without full translations.
* The Starlight UI chrome (search, theme select, language select, table of contents, pagination, skip link) is automatically localized through Starlight's built-in Arabic translations.

### Verification

* `npm run build` succeeds (141 pages: 71 English + 70 Arabic routes, of which `/ar/` is real Arabic content and the rest are untranslated fallbacks).
* `/ar/` renders `lang="ar" dir="rtl"` with the sidebar on the right and the "On This Page" navigation on the left (mirrored from English).
* English pages are unchanged: `lang="en" dir="ltr"`, sidebar left, table of contents right.
* Code blocks and prompt-block code stay `direction: ltr` with left alignment inside the RTL page; the prompt copy button copies the Arabic body correctly.
* The language selector switches between `/ar/...` and `/...` URLs in both directions.
* Mobile (390px) RTL renders with no horizontal overflow; the copy button fits the prompt header; the menu button shows the Arabic label.
* Lighthouse snapshot on `/ar/`: Accessibility 100, Best Practices 100, Agentic Browsing 100. No console errors.

### Acceptance Criteria

* Arabic content can render correctly in RTL. — Passed
* English content renders correctly in LTR. — Passed
* Layout does not require a major redesign to support both languages. — Passed

---

## Phase 8 — Verification

Status: Completed

### Objective

Verify the MVP against documented requirements.

### Verification Areas

* Build.
* Runtime.
* Navigation.
* Responsive behavior.
* Copy functionality.
* Typography and visual consistency.
* Accessibility basics.
* RTL/LTR behavior.
* Requirement coverage.
* Broken links or missing pages.
* Documentation consistency.

### Results

* Build — Passed. `npm run build` completes without errors: 141 pages (71 English + 70 Arabic routes). The sitemap index is generated successfully at `dist/sitemap-index.xml`.
* Runtime — Passed. Development server and production preview serve routes with HTTP 200. No browser console errors. The 404 page renders and points users to search.
* Navigation — Passed. Sidebar (70 links), on-page table of contents (scrolls to sections), Pagefind search (returns and opens results; available in production builds by design), language selector, pagination (lifecycle order follows FR-08), and the mobile menu drawer all work.
* Responsive behavior — Passed. Verified at 1440px, 768px, and 390px. No horizontal overflow; the sidebar becomes a drawer on mobile and the table of contents relocates on smaller screens; prompt copy buttons fit the prompt header.
* Copy functionality — Passed. Prompt copy writes the exact prompt body (matches `innerText`, preserving line breaks) with `Copied!` feedback; Expressive Code block copy works and announces via `aria-live`.
* Typography and visual consistency — Passed. Computed styles match `docs/DESIGN_SYSTEM.md`: h1 2rem/700, h2 1.5rem/650, body 1rem/1.7, code 0.875rem monospace, token values match, and both light and dark themes render correctly.
* Accessibility basics — Passed. Lighthouse Accessibility 100 on desktop and mobile (home page and `/ar/`). Skip link, visible 2px accent focus rings, semantic headings, and labelled controls confirmed.
* RTL/LTR behavior — Passed. `/ar/` renders `dir="rtl"` with the sidebar and table of contents mirrored; English stays `dir="ltr"`; code and prompt blocks remain LTR in RTL pages.
* Requirement coverage — Passed. Functional (FR-01..FR-08), non-functional (NFR-01..NFR-08), content (CR-01..CR-07), design (DR-01..DR-06), localization (LR-01..LR-05), and portability (PR-01..PR-06) requirements are covered by the implementation.
* Broken links or missing pages — Passed. Scanned all 141 built pages: 0 broken internal links. Every sidebar slug resolves to content and every content file is reachable (the root index is the home page).
* Documentation consistency — Passed. Section and page counts match the repository (9 sections, lifecycle overview + 12 stages, files overview + 11 pages, skills overview + 11 pages, commands overview + 9 pages, prompts overview + 10 pages, verification 4, handoff 4, reference 3). The `skills/` directory matches the Skills section, and the `SKILL.md` files are populated.

### Known Issues

* Sitemap integration successfully configured and verified.
* The 404 page has no meta description and no home link in its main content (it offers search instead). Cosmetic only.
* Lighthouse flags two SEO items from Starlight's own chrome, not project content: the search button's visible keyboard hint versus its accessible name, and the Starlight footer "Learn more" link text.
* Pagefind search is only available in production builds and preview (Starlight behavior by design).
* The Arabic locale currently ships one proof page at `/ar/`; other `/ar/*` URLs render the English content with Starlight's "not yet translated" notice until the bilingual content work is done.

### Acceptance Criteria

* Critical requirements pass. — Passed
* Known issues are documented. — Passed
* No major regression remains. — Passed (no regressions found)
* MVP success criteria in `docs/MVP.md` are satisfied. — Passed

---

## Phase 9 — Documentation Reconciliation

Status: Completed

### Objective

Synchronize project documentation with the final implemented state.

### Tasks

Update where necessary:

* `PROJECT_CONTEXT.md`
* `PROJECT_STATUS.md`
* `PLAN.md`
* `CHANGELOG.md`
* `HANDOFF.md`
* `docs/`
* `skills/`

### Changes

* `PROJECT_CONTEXT.md` — Current Status rewritten to reflect the implemented MVP: all phases through verification are complete, the nine-section site (141 pages including the Arabic locale), and the remaining work (Phase 10 handoff checkpoint).
* `docs/ARCHITECTURE.md` — Content format corrected to "Markdown and MDX"; the architecture shape diagram now includes locale switching.
* `docs/DECISIONS.md` — DEC-009 now records the implemented Arabic locale scope (English root + Arabic `/ar/` proof page with fallbacks); DEC-010 stack corrected to "Markdown and MDX".
* `docs/WORKFLOWS.md` — The core lifecycle corrected to the implemented 12-stage flow (matching FR-08 and the site); added the file-per-stage table and the per-phase working loop as a distinct sub-workflow.
* `src/content/docs/reference/workflow-at-a-glance.md` — Same lifecycle correction (12 stages) plus the files-per-stage table, keeping the page consistent with the Project Lifecycle section.
* `skills/project-lifecycle/SKILL.md` — Greenfield default flow aligned to the 12-stage lifecycle stage names.
* `docs/SCREEN_MAP.md`, `docs/DESIGN_SYSTEM.md`, `PLAN.md`, `PROJECT_STATUS.md`, `CHANGELOG.md`, `HANDOFF.md`, and `README.md` were already reconciled in Phases 6-8 and are consistent with the repository.

### Acceptance Criteria

* Documentation matches the actual repository. — Passed
* Completed phases are correctly marked. — Passed
* Remaining future scope is clearly separated. — Passed
* Next recommended step is documented. — Passed

---

## Phase 10 — Handoff Checkpoint

Status: Completed

### Objective

Make the project ready to continue in another IDE or AI coding agent.

### Tasks

Confirm the repository alone lets a new agent determine:

* What the project is.
* How to run it.
* What is complete.
* What remains.
* What decisions were made.
* What the next step is.

The receiving agent should not require the previous conversation history.

### Changes

* Verified the handoff documentation is complete and consistent with the repository:
  * What the project is — `PROJECT_CONTEXT.md` and the `HANDOFF.md` Project section.
  * How to run it — `HANDOFF.md` How to Run and `README.md` Run Locally match `package.json` scripts (`npm install`, `npm run dev` on `http://localhost:4321`, `npm run build` to `dist/`, `npm run preview`).
  * What is complete — `PROJECT_STATUS.md`, `PLAN.md`, and `HANDOFF.md` Completed sections list all phases 0-10.
  * What remains — `PROJECT_CONTEXT.md` Future Scope, the `PLAN.md` known issues, and the deferred bilingual Arabic content note.
  * What decisions were made — `HANDOFF.md` Important Decisions and the full reasoning in `docs/DECISIONS.md`.
  * What the next step is — the MVP plan is complete; the next step is deployment and/or the deferred future-scope items.
* Fixed the stale `HANDOFF.md` Current Phase header (it still referenced Phase 8).
* Updated `PLAN.md`, `PROJECT_STATUS.md`, `CHANGELOG.md`, `HANDOFF.md`, `README.md`, and `PROJECT_CONTEXT.md` to record the completed plan.
* Re-verified the build (141 pages) and confirmed the development server, matching the documented run instructions.

### Acceptance Criteria

* A new agent can determine what the project is. — Passed
* A new agent can determine how to run it. — Passed
* A new agent can determine what is complete. — Passed
* A new agent can determine what remains. — Passed
* A new agent can determine what decisions were made. — Passed
* A new agent can determine what the next step is. — Passed
* The receiving agent does not require previous conversation history. — Passed

---

## Arabic Localization — Phase 1 (High-Level Overview Pages)

Status: Completed

### Objective

Translate the high-level overview pages into professional Arabic and configure the sidebar and copy controls.

### Completed

- All 70 sidebar items translated in `astro.config.mjs` (`translations: { ar: ... }`).
- Prompt copy script (`src/scripts/copy-controls.ts`) localized with runtime BCP-47 detection ("نسخ" / "تم النسخ!").
- Arabic home page (`src/content/docs/ar/index.mdx`) rewritten to match the English layout.
- All 8 section overview pages translated.

---

## Arabic Localization — Phase 2 (Lifecycle & Files Sections)

Status: Completed

### Objective

Translate the Project Lifecycle (12 stage pages) and Project Files (11 file pages) sections into professional Arabic.

### Completed

- Translated all 12 Project Lifecycle stage pages under `src/content/docs/ar/lifecycle/`.
- Translated all 11 Project Files pages under `src/content/docs/ar/files/`.
- Preserved exact structural parity with the English pages; kept file names, paths, commands, and technical identifiers LTR where appropriate while keeping Arabic prose RTL.

### Verification

- Production build passes (141 pages, sitemap, Pagefind index).
- All 23 new Arabic routes serve real translated content with `dir="rtl"` and return HTTP 200.
- Browser checks: RTL/LTR behavior, sidebar labels, on-page navigation, pagination, language selector, copy controls ("نسخ" / "تم النسخ!"), Arabic search results, and 390px mobile layout all pass.

### Acceptance Criteria

- Arabic Lifecycle and Files pages preserve structural parity with English. — Passed
- Commands, code, file names, paths, and technical identifiers remain LTR where appropriate. — Passed
- Arabic prose renders RTL correctly. — Passed
- English content and deployment configuration are unchanged. — Passed
- Production build passes and affected Arabic routes are verified. — Passed

---

## Arabic Localization — Phase 3 (Remaining Sections)

Status: Completed

### Objective

Translate the remaining sections (Skills, Commands, Prompts, Verification, Handoff, Reference) into professional Arabic, following the same structural-parity and RTL/LTR rules used in Phases 1 and 2.

### Completed

- Translated all 11 Skills pages, 9 Commands pages, 10 Prompts pages, 3 Verification pages, 3 Handoff pages, and 2 Reference pages (38 pages total) under `src/content/docs/ar/`.
- Prompts pages are MDX and preserve the `prompt-block` structure with localized labels ("المطالبة") and the injected `نسخ` / `تم النسخ!` copy button.
- Preserved exact structural parity with the English pages (headings, bullets, code blocks, tables, and internal links) and kept file names, paths, commands, and technical identifiers LTR while keeping Arabic prose RTL.

### Verification

- Production build passes (141 pages, sitemap, Pagefind index); no Arabic fallback notices remain in the Arabic locale.
- All 38 new routes serve real Arabic content and return HTTP 200; all internal `/ar/` links and sitemap URLs resolve.
- Browser checks: RTL/LTR, sidebar labels, pagination, language switching, copy controls, Pagefind Arabic search, and the 390px mobile drawer layout all pass with no console errors.

### Acceptance Criteria

- Arabic Skills, Commands, Prompts, Verification, Handoff, and Reference pages preserve structural parity with English. — Passed
- Commands, code, file names, paths, and technical identifiers remain LTR where appropriate. — Passed
- Arabic prose renders RTL correctly. — Passed
- English content and deployment configuration are unchanged. — Passed
- Production build passes and affected Arabic routes are verified. — Passed

---

## Project Files Workflow Redesign (New Plan)

Goal: transform the Project Files section from static documentation into a fast, practical system that guides the owner when starting any new software project with any AI coding agent. The workflow must save time, not create documentation overhead.

Approved scope and decisions:

- Workflow-first: "What do I do next?" is answerable in seconds; action-first UX on every file page.
- Three project modes: Small, Standard, Advanced/Multi-Agent. Projects are not forced to use every file; non-core files may be skipped, and the UI explains the consequence of skipping.
- `CHANGELOG.md` is Recommended (not required) for Small projects.
- Project files are organized into categories: Define the Project, Design the Solution, Execute & Track, Guide AI Agents, Transfer & Continue.
- Reusable prompts must follow the shared bilingual AI prompt rules (never invent information, use known information first, ask only the minimum necessary questions, never create all files at once, work one stage at a time, preserve valid existing information, update project status when appropriate, stop at a clear checkpoint, remain tool/IDE/model agnostic).
- Prompt Generator: a frontend-only, script-injection tool page (no backend, no new framework) that generates reusable prompts from a small form; file pages deep-link to it prefilled. High priority.
- Bilingual: English and Arabic, with technical file names, commands, paths, and identifiers left LTR.
- Prototype scope: Start a New Project, Prompt Generator, `PROJECT_CONTEXT.md`, and `PROJECT_STATUS.md` only. The Prompts section and the remaining Project Files pages stay unchanged until validated.
- Shared data lives in `src/scripts/prompt-data.ts` (single source for rules, file registry, and the size matrix) and is consumed by `src/scripts/prompt-generator.ts`.

### Phase A — Foundation

Status: Completed

Implemented:

- `src/styles/custom.css` — shared workflow blocks (section 12): primary action bar, next-file callout, generator form controls, buttons, size-matrix alignment, with RTL/LTR and responsive rules on existing `--apf-` tokens.
- `src/scripts/prompt-data.ts` — shared bilingual prompt rules, file registry (11 files), categories, Small/Standard/Advanced matrix (CHANGELOG = recommended for Small), per-size flow order, level and action labels.
- `src/scripts/prompt-generator.ts` — generator script skeleton with bilingual `buildPrompt()` and a guarded `init()`; the full form is deferred to Phase B.
- `astro.config.mjs` — `apf-prompt-generator` integration injecting the generator script on every page.

Verified:

- Production build passes (141 pages, sitemap, Pagefind index).
- Generator script bundled into built pages; new CSS classes compile into the shared stylesheet.
- Browser checks: English/Arabic pages render correctly, light/dark theme selector works, prompt-block copy controls unchanged, no console errors.
- `buildPrompt()` produces the correct bilingual prompt with the next-file chain in both locales.

### Phase B — Prompt Generator

Status: Completed

Implemented:

- New bilingual tool pages `/tools/prompt-generator/` and `/ar/tools/prompt-generator/` (`src/content/docs/tools/prompt-generator.mdx` and the `ar/` mirror) hosting a `#prompt-generator` root.
- Full generator form (frontend-only, no backend): project name, project type, project idea, target users, platform, languages/tech stack, main constraints, project size (Small/Standard/Advanced), target file (grouped by category), and action (Create/Review/Update/Recover).
- Deep-linkable prefill via URL params (`?file=…&action=…&size=…`), which auto-generates the prompt; invalid values are ignored (fall back to defaults, no auto-generate).
- Output renders in the existing `.prompt-block` markup and reuses the existing copy control (via the exported `enhancePromptBlocks()`), so copy works for free in both locales.
- `prompt-data.ts` gained the `SIZES` registry, bilingual per-action instruction templates, and `getAction()`.
- All form fields carry `name` attributes (a11y); file names are isolated LTR inside Arabic prose.

Verified:

- Production build passes (143 pages); generator pages tested on the dev server and the production preview.
- English/Arabic rendering, all four actions, URL prefill (valid and invalid), copy behavior, desktop (1280px, two-column) and mobile (390px, one-column) layouts with no overflow, and no console errors.
- Prompts section copy controls unchanged (no regression).

UX refinement (final pass):

- Shortened the bilingual page intros; Target File dropdown options wrap to a label-over-filename stack on narrow screens so long filenames stay readable on 390px mobile; the generated prompt renders inside an accent-bordered "Generated prompt" panel; a single muted size hint line was added. The 4-step workflow, segmented controls, dropdown, details disclosure, URL prefill, copy behavior, and bilingual/RTL behavior are unchanged.

### Phase C — Prototype Pages

Status: Completed

Implemented:

- `files/overview.md` + `ar/` mirror rewritten as the workflow guide: one-paragraph "what Project Files are", a primary "Start a New Project" link, a compact file/purpose table, a short "how the Prompt Generator fits" section, and a "where to start" pointer to `PROJECT_CONTEXT.md`.
- New "Start a New Project" pages (`/files/start/`, `/ar/files/start/`), added to the Project Files sidebar after Overview. `src/scripts/start-project.ts` renders the widget: Small/Standard/Advanced size selector, per-size file count hint, a "Start here" primary action bar for the first file, and the recommended sequence with level badges (Required / Recommended / Optional / Skip), skip-consequence notes, and per-row "Generate prompt" links pre-filled into the Prompt Generator (`?file=…&action=create&size=…`). New `apf-start-project` Astro integration injects the script page-wide.
- `PROJECT_CONTEXT.md` and `PROJECT_STATUS.md` pages redesigned (EN + AR, moved from `.md` to `.mdx` so the JSX compiles): compact structure with a "What to do next" primary action bar (Create / Review / Update / Recover deep links), Purpose, When to use it, Required inputs, Reads from / feeds into, a copyable Markdown template in a `.prompt-block`, a short generic example, a "Next recommended file" callout (`docs/MVP.md` → `/files/mvp/`; `CHANGELOG.md` → `/files/changelog/`), and the lifecycle link.
- `src/styles/custom.css` — section 14 for the Start widget and the `.apf-template` copyable template.

Verified:

- Production build passes (145 pages); a stale `node_modules/.astro` content store was cleared so the renamed pages re-render.
- Browser tests: English/Arabic Start widget sequences (Small 3 / Standard 7 / Advanced 11) with correct badges and skip notes; the primary action bar updates with the selected size; all deep links pre-fill the generator correctly; file-page templates render and copy the full Markdown; desktop (1280px) and 390px mobile without overflow; Prompts copy controls unchanged; no console errors.
- Checkpoint passed: Phase C2 (Project Files Reconciliation) was approved and committed on 2026-08-16.

### Phase C2 — Project Files Reconciliation

Status: Completed (approved and committed)

- UI/UX reconciliation: all workflow actions standardized on the shared `.apf-action` base (40px, Primary/Secondary only, compact removed); Arabic Recover unified to `استعادة` in shared data and generator UI; orphaned `.apf-matrix` CSS removed; the canonical Action System added to `docs/DESIGN_SYSTEM.md`.
- Visual refinement pass: the Prompt Generator became one continuous workflow surface (steps, collapsible Project details, and Generate action share one panel with hairline dividers), the output renders as a standard `.prompt-block`, Starlight's generic `<details>/<summary>` styling no longer applies to the generator, the Start hint gap was normalized to the shared 16px rhythm, and the duplicated step/index badge rules were merged.
- Button/control alignment fixes: generator segmented pills and the Target File dropdown were unified on the shared 40px height (they had inherited Starlight's markdown line-height and rendered at 42px/44px); a Starlight sibling-margin leak inside the generator panel and the Start widget was closed by opting both containers out with the `not-content` class and making the section rhythm explicit — step badges now sit centered on their controls and the segmented pills form one aligned row.
- Verified: EN/AR × light/dark × 1280/390 (all controls 40px, badges centered, aligned segmented rows, intended row gaps, no horizontal overflow); production build passes (145 pages).
- Temporary review/report artifacts were removed; the approved implementation is committed.

### Phase D — Navigation and Documentation Reconciliation

Status: Completed

Implemented:

- Reorganized the Project Files sidebar from a flat list of 13 items into five workflow categories (Define the Project, Design the Solution, Execute & Track, Guide AI Agents, Transfer & Continue), each expanded by default. Overview and Start a New Project remain as standalone entries.
- Added a top-level Tools sidebar section with the Prompt Generator entry.
- Updated `docs/SCREEN_MAP.md` (category structure + Tools row), `docs/WORKFLOWS.md` (category-to-lifecycle cross-reference), `docs/ARCHITECTURE.md` (navigation structure), `docs/DESIGN_SYSTEM.md` (no changes needed — sidebar styling is generic), `docs/DECISIONS.md` (DEC-012 status), and `README.md` (status line).

Verified:

- Production build passes (145 pages).
- EN/AR sidebar shows correct categories and Arabic labels; all links resolve (HTTP 200).
- Mobile drawer renders all groups expanded; no horizontal overflow.
- Prompt Generator accessible from Tools section; active state correct.

### Phase E — Validate and Decide

Status: Pending

- Build and browser verification (English/Arabic, RTL/LTR, responsive, Lighthouse).
- End-to-end test: generate a Small-size prompt, create the two prototype files with any AI agent, and confirm the next-file guidance.
- Decide whether to roll out the remaining 9 file pages.

---

## Current Plan Status

Status:

`Complete — MVP delivered`

All planned phases are complete:

* Phase 0 — Planning Foundation
* Phase 1 — Final Project Preparation
* Phase 2 — Technology Selection
* Phase 3 — Project Foundation
* Phase 4 — Design System Implementation
* Phase 5 — Core Documentation Content
* Phase 6 — Copy and Documentation Interactions
* Phase 7 — Localization Readiness
* Phase 8 — Verification
* Phase 9 — Documentation Reconciliation
* Phase 10 — Handoff Checkpoint

Selected stack:

* Astro
* Starlight
* Markdown and MDX
* No backend
* No database

The English MVP is complete and verified, and the Arabic localization (Phases 1-3) is complete. The Arabic locale is fully translated across the site.

The completed MVP plan (Phases 0-10, Arabic Phases 1-3) is delivered and deployed. A new improvement plan is now active: the **Project Files Workflow Redesign** (see the section above). Phases A (Foundation), B (Prompt Generator), C (Prototype Pages), C2 (Project Files Reconciliation), Navigation Consistency, and Phase D (Navigation and Documentation Reconciliation) are complete and committed; Phase E (Validate and Decide) is pending.

Next steps:

1. Continue the Project Files Workflow Redesign: Phase C/C2 is complete and committed; proceed to Phase D (navigation and documentation reconciliation) and Phase E (validate and decide).
2. Deferred future-scope items are listed in `PROJECT_CONTEXT.md` Future Scope.
