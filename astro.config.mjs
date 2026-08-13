// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'AI Project Flow',
			locales: {
				root: { label: 'English', lang: 'en', dir: 'ltr' },
				ar: { label: 'العربية', lang: 'ar', dir: 'rtl' },
			},
			favicon: '/favicon.svg',
			customCss: ['/src/styles/custom.css'],

			sidebar: [
				{ label: 'Start Here', link: '/' },
				{
					label: 'Project Lifecycle',
					items: [
						{ label: 'Overview', slug: 'lifecycle/overview' },
						{ label: 'Idea and Discovery', slug: 'lifecycle/idea-and-discovery' },
						{ label: 'Project Context', slug: 'lifecycle/project-context' },
						{ label: 'MVP Definition', slug: 'lifecycle/mvp-definition' },
						{ label: 'Requirements', slug: 'lifecycle/requirements' },
						{ label: 'Architecture', slug: 'lifecycle/architecture' },
						{ label: 'Implementation Planning', slug: 'lifecycle/implementation-planning' },
						{ label: 'Skills and Agent Instructions', slug: 'lifecycle/skills-and-agent-instructions' },
						{ label: 'Implementation', slug: 'lifecycle/implementation' },
						{ label: 'Verification and Testing', slug: 'lifecycle/verification-and-testing' },
						{ label: 'Project Status Updates', slug: 'lifecycle/project-status-updates' },
						{ label: 'Change Documentation', slug: 'lifecycle/change-documentation' },
						{ label: 'Handoff and Portability', slug: 'lifecycle/handoff-and-portability' },
					],
				},
				{
					label: 'Project Files',
					items: [
						{ label: 'Overview', slug: 'files/overview' },
						{ label: 'PROJECT_CONTEXT.md', slug: 'files/project-context' },
						{ label: 'docs/MVP.md', slug: 'files/mvp' },
						{ label: 'docs/REQUIREMENTS.md', slug: 'files/requirements' },
						{ label: 'docs/ARCHITECTURE.md', slug: 'files/architecture' },
						{ label: 'docs/DECISIONS.md', slug: 'files/decisions' },
						{ label: 'PLAN.md', slug: 'files/plan' },
						{ label: 'PROJECT_STATUS.md', slug: 'files/project-status' },
						{ label: 'AGENTS.md', slug: 'files/agents' },
						{ label: 'CHANGELOG.md', slug: 'files/changelog' },
						{ label: 'HANDOFF.md', slug: 'files/handoff' },
						{ label: 'SKILL.md', slug: 'files/skill' },
					],
				},
				{
					label: 'Skills',
					items: [
						{ label: 'Overview', slug: 'skills/overview' },
						{ label: 'Project Lifecycle', slug: 'skills/project-lifecycle' },
						{ label: 'Project Discovery', slug: 'skills/project-discovery' },
						{ label: 'MVP Planning', slug: 'skills/mvp-planning' },
						{ label: 'Requirements', slug: 'skills/requirements' },
						{ label: 'Architecture', slug: 'skills/architecture' },
						{ label: 'Implementation Planning', slug: 'skills/implementation-planning' },
						{ label: 'Project Documentation', slug: 'skills/project-documentation' },
						{ label: 'Project Status', slug: 'skills/project-status' },
						{ label: 'Verification', slug: 'skills/verification' },
						{ label: 'Handoff', slug: 'skills/handoff' },
						{ label: 'UI Implementation', slug: 'skills/ui-implementation' },
					],
				},
				{
					label: 'Commands',
					items: [
						{ label: 'Overview', slug: 'commands/overview' },
						{ label: 'npm install', slug: 'commands/npm-install' },
						{ label: 'npm run dev', slug: 'commands/npm-run-dev' },
						{ label: 'npm run build', slug: 'commands/npm-run-build' },
						{ label: 'npm run preview', slug: 'commands/npm-run-preview' },
						{ label: 'git status', slug: 'commands/git-status' },
						{ label: 'git add', slug: 'commands/git-add' },
						{ label: 'git commit', slug: 'commands/git-commit' },
						{ label: 'git log', slug: 'commands/git-log' },
						{ label: 'git diff', slug: 'commands/git-diff' },
					],
				},
				{
					label: 'Prompts',
					items: [
						{ label: 'Overview', slug: 'prompts/overview' },
						{ label: 'Resume a Project', slug: 'prompts/resume-project' },
						{ label: 'Project Discovery', slug: 'prompts/project-discovery' },
						{ label: 'Project Context', slug: 'prompts/project-context' },
						{ label: 'MVP Planning', slug: 'prompts/mvp-planning' },
						{ label: 'Requirements', slug: 'prompts/requirements' },
						{ label: 'Architecture', slug: 'prompts/architecture' },
						{ label: 'Implementation Planning', slug: 'prompts/implementation-planning' },
						{ label: 'Implementation', slug: 'prompts/implementation' },
						{ label: 'Verification', slug: 'prompts/verification' },
						{ label: 'Handoff', slug: 'prompts/handoff' },
					],
				},
				{
					label: 'Verification',
					items: [
						{ label: 'Overview', slug: 'verification/overview' },
						{ label: 'Verification Workflow', slug: 'verification/workflow' },
						{ label: 'Build and Runtime Checks', slug: 'verification/build-and-runtime' },
						{ label: 'Acceptance Criteria Review', slug: 'verification/acceptance-criteria' },
					],
				},
				{
					label: 'Handoff',
					items: [
						{ label: 'Overview', slug: 'handoff/overview' },
						{ label: 'Preparing a Handoff', slug: 'handoff/preparing' },
						{ label: 'Receiving Agent Workflow', slug: 'handoff/receiving' },
						{ label: 'Running This Project', slug: 'handoff/running-the-project' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Overview', slug: 'reference/overview' },
						{ label: 'Workflow at a Glance', slug: 'reference/workflow-at-a-glance' },
						{ label: 'Reading Order', slug: 'reference/reading-order' },
					],
				},
			],
		}),
		{
			name: 'apf-copy-controls',
			hooks: {
				'astro:config:setup': ({ injectScript }) => {
					injectScript('page', 'import "/src/scripts/copy-controls.ts";');
				},
			},
		},
	],
});
