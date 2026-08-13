# AI Project Flow — Screen Map

## Purpose

This document defines the high-level page and navigation structure for the AI Project Flow documentation website.

The screen map describes what the user can navigate to and how the main documentation areas relate to each other.

It does not define detailed visual styling. Visual rules belong in `docs/DESIGN_SYSTEM.md`.

---

## Current Product Structure

AI Project Flow is currently a documentation-focused website.

The MVP should use a simple documentation structure inspired by the OpenCode documentation experience.

The primary layout should consist of:

```text
Top Navigation
      ↓
Left Sidebar → Main Documentation Content ← On This Page
```

---

## Navigation Sections

The primary navigation is organized into the following sections:

| Section | Purpose |
| --- | --- |
| Start Here | Introduction to the documentation and how to use it. |
| Project Lifecycle | The main stages from idea to handoff. |
| Project Files | The purpose of the important project files. |
| Skills | Reusable workflows for AI coding agents. |
| Commands | Terminal commands with explanations. |
| Prompts | Reusable AI prompts for common project tasks. |
| Verification | How to confirm work is complete. |
| Handoff | Making a project portable between environments. |
| Reference | Supporting reference content. |

---

## Page Types

### Overview Pages

Each primary section has an overview page that explains the section and links into the content within it.

### Content Pages

Content pages hold the main documentation for a specific topic inside a section.

They may include:

- Explanations.
- Project file examples.
- Terminal commands.
- Reusable AI prompts.
- Copyable reference content.

---

## Navigation Rules

- The left sidebar shows the current section and its pages.
- The "On This Page" navigation shows the headings of the current page.
- The top navigation provides site-level controls and search.
- Navigation must remain usable on desktop, tablet, and mobile.

---

## RTL/LTR Behavior

The navigation structure is language-direction agnostic.

In RTL contexts (Arabic), the sidebar and content flow mirror automatically through logical CSS properties.

Locales are configured in `astro.config.mjs` (`locales`): English at the root (`/`) and Arabic at `/ar/`. The language selector switches between locales in both directions, and the navigation structure is identical for both. Only `/ar/` is translated so far; other Arabic URLs render the English content with a "not yet translated" notice.
