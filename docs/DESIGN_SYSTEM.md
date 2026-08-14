# AI Project Flow — Design System

## Purpose

This document defines the visual and interaction principles for the AI Project Flow documentation website.

The design system should keep the interface consistent, minimal, readable, and easy to maintain.

The primary visual reference is the OpenCode documentation experience.

AI Project Flow should follow a similar documentation-first philosophy without copying OpenCode branding, logos, or proprietary identity elements.

---

## Design Principles

The interface should feel:

- Minimal.
- Calm.
- Technical.
- Clear.
- Structured.
- Fast.
- Documentation-first.
- Comfortable for long reading sessions.

The design should prioritize:

- Content clarity.
- Strong hierarchy.
- Generous spacing.
- Clean code presentation.
- Predictable navigation.
- Consistent alignment.
- Low visual noise.

Avoid:

- Heavy shadows.
- Large gradients.
- Excessive decoration.
- Oversized marketing sections.
- Dashboard-like visual clutter.
- Unnecessary animations.
- Bright or overly saturated accent colors.

---

## Layout System

The primary desktop layout should follow this structure:

```text
┌──────────────────────────────────────────────────────────────┐
│                       Top Navigation                         │
├───────────────┬───────────────────────────────┬──────────────┤
│               │                               │              │
│ Left Sidebar  │     Documentation Content     │ On This Page │
│               │                               │              │
└───────────────┴───────────────────────────────┴──────────────┘
```

### Layout Roles

- **Top navigation** holds the site identity, primary links, search, and theme control.
- **Left sidebar** provides primary section navigation.
- **Main content** holds the documentation for the current page.
- **On This Page** shows the current page's headings for quick navigation.

### Layout Rules

- The main content column is the visual center of the interface.
- The sidebar remains visually quieter than the content.
- The "On This Page" navigation is optional and can be hidden on smaller screens.
- Navigation and content must not crowd each other on any screen size.

---

## Breakpoints

The layout adapts at two main breakpoints:

| Breakpoint | Behavior |
| --- | --- |
| Below `50em` (800px) | The left sidebar collapses behind the navigation menu. |
| `50em` and above | The left sidebar is visible by default. |
| `72rem` (1152px) and above | Content padding increases and the "On This Page" column is available. |

---

## Typography

### Font Stacks

- **UI and body text**: system sans-serif stack.

```text
-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans',
Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'
```

- **Code and terminal text**: system monospace stack.

```text
ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace
```

- **Arabic UI and body text**: IBM Plex Sans Arabic, self-hosted, applied only to the Arabic locale (`dir="rtl"`).

```text
'IBM Plex Sans Arabic', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
'Noto Sans', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'
```

  The font is loaded from `public/fonts/` via `@font-face` (weights 400, 600, 700; `font-display: swap`). It replaces the system stack for Arabic pages only; English pages keep the system sans-serif stack.

### Type Scale

| Role | Size | Weight |
| --- | --- | --- |
| Heading 1 | `2rem` (32px) | `700` |
| Heading 2 | `1.5rem` (24px) | `650` |
| Heading 3 | `1.25rem` (20px) | `600` |
| Heading 4 | `1.125rem` (18px) | `600` |
| Body | `1rem` (16px) | `400` |
| Small | `0.875rem` (14px) | `400` |
| Code | `0.875rem` (14px) | `400` |

### Typography Rules

- Body line height: `1.7`.
- Heading line height: `1.25`.
- Use the system font stacks for English pages. IBM Plex Sans Arabic is the only bundled font dependency, and it is used for the Arabic locale only.
- Arabic text (body, headings, navigation, sidebar, table of contents, pagination, search UI, and copy controls) always uses IBM Plex Sans Arabic. Code and inline code keep the monospace stack in both locales.
- The `h2` weight of `650` is rendered by IBM Plex Sans Arabic's closest available weight (`600`).
- Headings use tight weight and clear spacing to create hierarchy without decoration.
- Code always uses the monospace stack, including inline code.

---

## Colors

The palette is a restrained cool-neutral scale with a single indigo accent.

Colors are defined once per theme as design tokens and applied through the shared stylesheet.

### Light Theme

| Token | Value |
| --- | --- |
| Background | `hsl(0 0% 100%)` |
| Surface | `hsl(220 18% 97%)` |
| Text primary | `hsl(220 14% 18%)` |
| Text secondary | `hsl(220 8% 36%)` |
| Text muted | `hsl(220 7% 44%)` |
| Hairline | `hsl(220 16% 90%)` |
| Accent | `hsl(239 60% 52%)` |
| Accent high | `hsl(239 58% 42%)` |
| Accent low | `hsl(239 70% 95%)` |
| Code background | `hsl(220 20% 97%)` |
| Code border | `hsl(220 16% 90%)` |

### Dark Theme

| Token | Value |
| --- | --- |
| Background | `hsl(220 12% 8%)` |
| Surface | `hsl(220 12% 12%)` |
| Text primary | `hsl(220 16% 94%)` |
| Text secondary | `hsl(220 8% 74%)` |
| Text muted | `hsl(220 7% 55%)` |
| Hairline | `hsl(220 10% 18%)` |
| Accent | `hsl(239 68% 68%)` |
| Accent high | `hsl(239 80% 80%)` |
| Accent low | `hsl(239 40% 20%)` |
| Code background | `hsl(220 14% 10%)` |
| Code border | `hsl(220 12% 16%)` |

### Color Rules

- The accent is reserved for interactive and active elements: links, active navigation, focus rings, and small highlights.
- Text and interactive controls must maintain WCAG AA contrast.
- Do not add new hues without a documented reason.
- Code blocks use the code-specific background rather than the general surface.

---

## Spacing

Use a 4px-based scale in `rem` units.

| Token | Value |
| --- | --- |
| Space 1 | `0.25rem` |
| Space 2 | `0.5rem` |
| Space 3 | `0.75rem` |
| Space 4 | `1rem` |
| Space 5 | `1.5rem` |
| Space 6 | `2rem` |
| Space 7 | `3rem` |
| Space 8 | `4rem` |

### Spacing Rules

- Use the scale instead of arbitrary values.
- Generous spacing is preferred between major blocks.
- Vertical rhythm between content blocks should feel consistent.
- Inline code and small controls use the smaller values.

---

## Borders

- Hairline borders are `1px` and use the `Hairline` token.
- Border radius: `0.25rem` for small elements, `0.5rem` for blocks and code containers.
- Borders are quiet separators, not visual decoration.

---

## Content Width

- Main content maximum width: `48rem`.
- Content padding: `1rem`, expanding to `1.5rem` at `72rem`.
- Left sidebar width: `18.75rem`.
- Top navigation height: `4rem`.

### Content Width Rules

- Keep comfortable line lengths for long reading.
- Do not let content stretch edge to edge on large screens.

---

## Sidebar

- Background: `Surface`.
- Separator: right hairline border.
- Section labels: small, muted, uppercase.
- Links: secondary text color.
- Active link: accent color with `Accent low` background and a small radius.

---

## Code Blocks

- Background: `Code background`.
- Border: `1px` `Code border`, radius `0.5rem`.
- Font: monospace stack at `0.875rem`.
- Padding: `Space 4`.
- Code blocks remain left-to-right even in right-to-left contexts.

---

## Prompt Blocks

A prompt block is a reusable, visually distinct container for AI prompts.

Structure:

```text
┌────────────────────────────────────────────┐
│ PROMPT                        [Copy]       │
│────────────────────────────────────────────│
│ <the reusable prompt text>                 │
└────────────────────────────────────────────┘
```

- Background: `Surface`.
- Border: `1px` `Hairline`, radius `0.5rem`, with a `2px` accent left border.
- Label: small, uppercase, muted, monospace.
- Body: normal body text with relaxed line height.
- The copy control sits at the top right of the block.

---

## Copy Controls

- Default state: quiet button with `Text secondary` color and hairline border.
- Hover: `Accent` text with `Accent low` background.
- Focus: visible focus ring using `Accent`.
- Copied state: `Accent` text with `Accent low` background and accent border, shown while feedback is displayed.
- Feedback: the control label changes to `Copied!` for about 2 seconds, then returns to the default state.
- The control must be large enough for touch and mouse use.

### Where They Appear

- Commands and reusable examples: the Expressive Code code-block toolbar provides the copy control.
- Prompt blocks: a shared script (`src/scripts/copy-controls.ts`) injects a `Copy prompt` control into every `.prompt-block` header at runtime. The script is bundled on every page via the `apf-copy-controls` integration in `astro.config.mjs`.

---

## Responsive Rules

- Small screens: single column, sidebar hidden behind the menu, content full width.
- Medium screens: sidebar visible, content remains focused.
- Large screens: full three-column layout with "On This Page".
- Essential information is never hidden; it moves rather than disappears.

---

## RTL/LTR Foundation

- Layout uses logical CSS properties (`margin-inline`, `padding-inline`, `border-inline`, `inset-inline`) wherever practical.
- Code blocks and terminal content stay `direction: ltr` with `unicode-bidi: isolate` so command text remains correct in Arabic pages.
- The sidebar and navigation flow should mirror automatically in RTL without custom mirrored styles.
- Locale configuration lives in `astro.config.mjs` under `locales`: English is the root locale (`lang: en`, `dir: ltr`) and Arabic is an additional locale (`lang: ar`, `dir: rtl`) served at `/ar/`.
- Only pages actually translated for a locale are served as real pages; every other URL in that locale renders the content in the fallback language with Starlight's "not yet translated" notice.

---

## Theme Readiness

- Both light and dark themes are implemented and follow the same token structure.
- The active theme is controlled by the standard Starlight theme selector.
- Contrast is checked in both themes.
- The layout does not depend on a specific theme to remain usable.

---

## Implementation Location

The design system is implemented in `src/styles/custom.css` and wired into the Starlight configuration through the `customCss` option.

Token names in the stylesheet use the `--apf-` prefix. Starlight's own theme variables are remapped to these tokens so the framework and the design system stay consistent.
