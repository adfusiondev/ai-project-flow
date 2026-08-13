# AI Project Flow — Requirements

## Purpose

This document defines the functional and non-functional requirements for the current AI Project Flow MVP.

The requirements must remain aligned with `PROJECT_CONTEXT.md` and `docs/MVP.md` and must not introduce features that are outside the approved MVP scope.

---

## Functional Requirements

### FR-01 — Project Lifecycle Documentation

The website must present the main stages of the software project lifecycle in a clear and logical order.

Each stage should explain:

- What the stage is.
- Why it is needed.
- When it should be performed.
- What files or artifacts are associated with it.
- What should be completed before moving to the next stage.

### FR-02 — Project File Documentation

The website must explain the purpose of important project files such as:

- `PROJECT_CONTEXT.md`
- `MVP.md`
- `REQUIREMENTS.md`
- `PLAN.md`
- `PROJECT_STATUS.md`
- `AGENTS.md`
- `CHANGELOG.md`
- `HANDOFF.md`
- `SKILL.md`

Each documented file should include:

- What the file is.
- Why it exists.
- When it should be created.
- When it should be updated.
- A practical example where appropriate.

### FR-03 — Practical Examples

The website must provide practical and reusable examples of:

- Project files.
- Terminal commands.
- AI prompts.
- Skills.
- Project workflows.

Examples must be visually distinguishable from explanatory content.

### FR-04 — Terminal Commands

Terminal commands must be displayed in clear code blocks.

Each important command should include:

- What the command does.
- What its important parts mean.
- When the command should be used.
- What result the user should expect.
- Whether the command changes files or only reads information.

### FR-05 — AI Prompts

The website must include reusable AI prompts for important project lifecycle tasks.

Prompts should clearly define:

- The task.
- Relevant context.
- Constraints.
- Expected output.
- Conditions for stopping or requesting approval when appropriate.

### FR-06 — Copy Functionality

Relevant commands, prompts, code examples, and file examples should provide an easy way to copy their content.

### FR-07 — Documentation Navigation

The website must provide clear navigation between:

- Project lifecycle stages.
- Project files.
- Skills.
- Commands.
- Prompts.
- Verification content.
- Handoff content.

### FR-08 — Project Lifecycle Order

The documentation should present the project lifecycle in a logical sequence from idea to handoff.

The initial reference flow should cover:

1. Idea and Discovery.
2. Project Context.
3. MVP Definition.
4. Requirements.
5. Architecture.
6. Implementation Planning.
7. Project Skills and Agent Instructions.
8. Implementation.
9. Verification and Testing.
10. Project Status Updates.
11. Change Documentation.
12. Handoff and Portability.

---

## Non-Functional Requirements

### NFR-01 — Simplicity

The interface should remain simple, focused, and easy to understand.

The documentation should avoid:

- Unnecessary complexity.
- Excessive visual decoration.
- Distracting interactions.
- Unnecessary dependencies.

### NFR-02 — Readability

Documentation content must be easy to scan and read.

The interface should provide:

- Clear typography hierarchy.
- Comfortable line lengths.
- Consistent spacing.
- Distinct code blocks.
- Clear separation between explanations, commands, prompts, and examples.

### NFR-03 — Responsive Layout

The website should remain usable across common:

- Desktop.
- Tablet.
- Mobile.

Navigation and documentation content should adapt without hiding essential information.

### NFR-04 — Performance

The MVP should load quickly.

Static documentation content should be preferred where practical.

Heavy dependencies should not be added unless they provide clear value.

### NFR-05 — Accessibility

The interface should use semantic structure and maintain good keyboard and screen-reader usability where practical.

Text and interactive controls should maintain sufficient visual contrast.

### NFR-06 — Bilingual Readiness

The project structure should support Arabic and English content.

Arabic content must support right-to-left layout.

English content must support left-to-right layout.

### NFR-07 — Portability

The project must remain understandable and maintainable across different IDEs and AI coding agents.

Important project knowledge must remain stored in repository files rather than depending on a specific AI conversation or development environment.

### NFR-08 — Maintainability

The project structure, documentation, and implementation should remain simple enough to modify and extend in future phases.

Major decisions and meaningful changes should be documented.

---

## Content Requirements

### CR-01 — Clear Explanations

Each project stage, file, command, prompt, and skill should be explained in simple and direct language.

The documentation should prioritize understanding over unnecessary technical jargon.

### CR-02 — Practical Examples

Important concepts should include realistic and reusable examples where appropriate.

Examples should demonstrate how the concept is used in a real project.

### CR-03 — Step-by-Step Learning

The documentation should present concepts in a logical progression.

The project owner should be able to follow the lifecycle from the first idea through planning, implementation, verification, and handoff without undocumented prior knowledge.

### CR-04 — Command Explanations

Terminal commands should not be shown without context.

Each important command should explain:

- What it does.
- What its main parts mean.
- What result should be expected.
- Whether it changes files or only reads information.

### CR-05 — Prompt Quality

AI prompts should be written so they can be reused with different coding agents where practical.

Prompts should avoid unnecessary dependence on one specific AI tool.

### CR-06 — Consistency

Terminology should remain consistent throughout the documentation.

The same project concepts, file names, lifecycle stages, and status terms should not be renamed unnecessarily.

### CR-07 — Copy-Friendly Content

Commands, prompts, examples, and templates intended for reuse should be presented in a format that makes copying straightforward.

---

## Design Requirements

### DR-01 — Documentation-First Layout

The interface should follow a documentation-focused layout inspired by the OpenCode documentation experience.

Content clarity should take priority over decorative visual elements.

### DR-02 — Main Layout

The documentation experience should support:

- A clear left sidebar for primary navigation.
- A focused main content area.
- An optional right-side "On this page" navigation.
- Simple top-level navigation where useful.

### DR-03 — Visual Simplicity

The interface should use:

- Minimal visual decoration.
- Restrained colors.
- Clear typography hierarchy.
- Generous spacing.
- Clean borders and separators.
- Consistent code blocks.

The interface should avoid:

- Heavy shadows.
- Excessive gradients.
- Crowded layouts.
- Unnecessary animations.

### DR-04 — Code and Prompt Presentation

Commands, prompts, file examples, and code snippets should be visually distinct from normal explanatory text.

Copyable content should be easy to identify.

### DR-05 — Theme Readiness

The design should remain compatible with light and dark themes.

The MVP may prioritize one theme first if necessary.

### DR-06 — Independent Identity

AI Project Flow may use the OpenCode documentation website as a visual reference.

It must retain its own:

- Name.
- Content.
- Identity.

OpenCode branding, logos, or proprietary identity elements must not be copied.

---

## Localization Requirements

### LR-01 — Supported Languages

AI Project Flow should support:

- Arabic.
- English.

### LR-02 — Text Direction

Arabic content must support right-to-left layout.

English content must use left-to-right layout.

### LR-03 — Content Separation

Arabic and English content should be organized clearly so translations do not become mixed or difficult to maintain.

### LR-04 — Consistent Structure

Equivalent Arabic and English documentation pages should follow the same general information structure where practical.

### LR-05 — Incremental Implementation

The MVP may initially implement one language first if that keeps development simpler.

The project structure must remain ready for bilingual support without requiring a major redesign later.

---

## Portability Requirements

### PR-01 — Repository as Source of Truth

Important project knowledge must be stored inside repository files.

The project should not depend on a specific AI conversation history to remain understandable.

### PR-02 — Tool-Agnostic Documentation

Project documentation should remain readable and useful across different:

- IDEs.
- Editors.
- AI coding agents.

### PR-03 — Clear Project State

The repository must make it possible to determine:

- What the project is.
- What has been completed.
- What is currently in progress.
- What remains to be done.
- What important decisions have already been made.
- What the recommended next step is.

### PR-04 — Handoff Readiness

The project should be transferable to another IDE or AI coding agent without requiring the full history of previous conversations.

### PR-05 — Standard File Formats

Documentation should use simple and widely supported formats such as Markdown whenever practical.

### PR-06 — Minimal Tool Lock-In

The project should avoid unnecessary dependencies on proprietary IDE-specific or AI-agent-specific features when a portable alternative is reasonable.

---

## MVP Constraints

The current MVP must not require:

- User accounts.
- Authentication.
- Database integration.
- Backend services.
- Dynamic project generation.
- Automatic file generation.
- Cross-device synchronization.
- Automated IDE integrations.

These capabilities may be considered in future phases only after the documentation-focused MVP is stable.

---

## Requirements Completion Criteria

The requirements stage is considered complete when:

- The functional scope is clearly defined.
- Non-functional expectations are documented.
- Content requirements are documented.
- Design direction is documented.
- Localization requirements are documented.
- Portability requirements are documented.
- MVP constraints are explicit.
- The requirements remain consistent with `PROJECT_CONTEXT.md`.
- The requirements remain consistent with `docs/MVP.md`.
- No future-scope feature has been accidentally promoted into the current MVP.
