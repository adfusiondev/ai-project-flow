# AI Project Flow — Changelog

All meaningful project changes should be recorded here.

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
