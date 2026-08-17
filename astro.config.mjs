// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://ai-project-flow.vercel.app',
	integrations: [
		starlight({
			title: 'AI Project Flow',
			locales: {
				root: { label: 'English', lang: 'en', dir: 'ltr' },
				ar: { label: 'العربية', lang: 'ar', dir: 'rtl' },
			},
			favicon: '/favicon-benchmark.svg',
			logo: {
				light: './docs/logo-benchmark/ai-project-flow-benchmark-compact.svg',
				dark: './docs/logo-benchmark/ai-project-flow-benchmark-compact-dark.svg',
				alt: 'AI Project Flow',
				replacesTitle: true,
			},
			customCss: ['/src/styles/custom.css'],

			sidebar: [
				{ label: 'Start Here', link: '/', translations: { ar: 'ابدأ من هنا' } },
				{
					label: 'Project Lifecycle',
					translations: { ar: 'دورة حياة المشروع' },
					items: [
						{ label: 'Overview', slug: 'lifecycle/overview', translations: { ar: 'نظرة عامة' } },
						{ label: 'Idea and Discovery', slug: 'lifecycle/idea-and-discovery', translations: { ar: 'الفكرة والاستكشاف' } },
						{ label: 'Project Context', slug: 'lifecycle/project-context', translations: { ar: 'سياق المشروع' } },
						{ label: 'MVP Definition', slug: 'lifecycle/mvp-definition', translations: { ar: 'تحديد الحد الأدنى للمنتج (MVP)' } },
						{ label: 'Requirements', slug: 'lifecycle/requirements', translations: { ar: 'المتطلبات' } },
						{ label: 'Architecture', slug: 'lifecycle/architecture', translations: { ar: 'البنية البرمجية' } },
						{ label: 'Implementation Planning', slug: 'lifecycle/implementation-planning', translations: { ar: 'التخطيط للتنفيذ' } },
						{ label: 'Skills and Agent Instructions', slug: 'lifecycle/skills-and-agent-instructions', translations: { ar: 'المهارات وتوجيهات الوكلاء' } },
						{ label: 'Implementation', slug: 'lifecycle/implementation', translations: { ar: 'التنفيذ' } },
						{ label: 'Verification and Testing', slug: 'lifecycle/verification-and-testing', translations: { ar: 'التحقق والاختبار' } },
						{ label: 'Project Status Updates', slug: 'lifecycle/project-status-updates', translations: { ar: 'تحديثات حالة المشروع' } },
						{ label: 'Change Documentation', slug: 'lifecycle/change-documentation', translations: { ar: 'توثيق التغييرات' } },
						{ label: 'Handoff and Portability', slug: 'lifecycle/handoff-and-portability', translations: { ar: 'التسليم وقابلية النقل' } },
					],
				},
				{
					label: 'Project Files',
					translations: { ar: 'ملفات المشروع' },
					items: [
						{ label: 'Overview', slug: 'files/overview', translations: { ar: 'نظرة عامة' } },
						{ label: 'Start a New Project', slug: 'files/start', translations: { ar: 'ابدأ مشروعًا جديدًا' } },
						{
							label: 'Define the Project',
							translations: { ar: 'تحديد المشروع' },
							collapsed: false,
							items: [
								{ label: 'PROJECT_CONTEXT.md', slug: 'files/project-context', translations: { ar: 'PROJECT_CONTEXT.md' } },
								{ label: 'docs/MVP.md', slug: 'files/mvp', translations: { ar: 'docs/MVP.md' } },
							],
						},
						{
							label: 'Design the Solution',
							translations: { ar: 'تصميم الحل' },
							collapsed: false,
							items: [
								{ label: 'docs/REQUIREMENTS.md', slug: 'files/requirements', translations: { ar: 'docs/REQUIREMENTS.md' } },
								{ label: 'docs/ARCHITECTURE.md', slug: 'files/architecture', translations: { ar: 'docs/ARCHITECTURE.md' } },
								{ label: 'docs/DECISIONS.md', slug: 'files/decisions', translations: { ar: 'docs/DECISIONS.md' } },
							],
						},
						{
							label: 'Execute & Track',
							translations: { ar: 'التنفيذ والتتبع' },
							collapsed: false,
							items: [
								{ label: 'PLAN.md', slug: 'files/plan', translations: { ar: 'PLAN.md' } },
								{ label: 'PROJECT_STATUS.md', slug: 'files/project-status', translations: { ar: 'PROJECT_STATUS.md' } },
								{ label: 'CHANGELOG.md', slug: 'files/changelog', translations: { ar: 'CHANGELOG.md' } },
							],
						},
						{
							label: 'Guide AI Agents',
							translations: { ar: 'توجه وكلاء الذكاء الاصطناعي' },
							collapsed: false,
							items: [
								{ label: 'AGENTS.md', slug: 'files/agents', translations: { ar: 'AGENTS.md' } },
								{ label: 'SKILL.md', slug: 'files/skill', translations: { ar: 'SKILL.md' } },
							],
						},
						{
							label: 'Transfer & Continue',
							translations: { ar: 'النقل والمتابعة' },
							collapsed: false,
							items: [
								{ label: 'HANDOFF.md', slug: 'files/handoff', translations: { ar: 'HANDOFF.md' } },
							],
						},
					],
				},
				{
					label: 'Skills',
					translations: { ar: 'المهارات' },
					items: [
						{ label: 'Overview', slug: 'skills/overview', translations: { ar: 'نظرة عامة' } },
						{ label: 'Project Lifecycle', slug: 'skills/project-lifecycle', translations: { ar: 'دورة حياة المشروع' } },
						{ label: 'Project Discovery', slug: 'skills/project-discovery', translations: { ar: 'استكشاف المشروع' } },
						{ label: 'MVP Planning', slug: 'skills/mvp-planning', translations: { ar: 'التخطيط للـ MVP' } },
						{ label: 'Requirements', slug: 'skills/requirements', translations: { ar: 'المتطلبات' } },
						{ label: 'Architecture', slug: 'skills/architecture', translations: { ar: 'البنية البرمجية' } },
						{ label: 'Implementation Planning', slug: 'skills/implementation-planning', translations: { ar: 'التخطيط للتنفيذ' } },
						{ label: 'Project Documentation', slug: 'skills/project-documentation', translations: { ar: 'توثيق المشروع' } },
						{ label: 'Project Status', slug: 'skills/project-status', translations: { ar: 'حالة المشروع' } },
						{ label: 'Verification', slug: 'skills/verification', translations: { ar: 'التحقق' } },
						{ label: 'Handoff', slug: 'skills/handoff', translations: { ar: 'التسليم' } },
						{ label: 'UI Implementation', slug: 'skills/ui-implementation', translations: { ar: 'تنفيذ واجهة المستخدم' } },
					],
				},
				{
					label: 'Commands',
					translations: { ar: 'الأوامر' },
					items: [
						{ label: 'Overview', slug: 'commands/overview', translations: { ar: 'نظرة عامة' } },
						{ label: 'npm install', slug: 'commands/npm-install', translations: { ar: 'npm install' } },
						{ label: 'npm run dev', slug: 'commands/npm-run-dev', translations: { ar: 'npm run dev' } },
						{ label: 'npm run build', slug: 'commands/npm-run-build', translations: { ar: 'npm run build' } },
						{ label: 'npm run preview', slug: 'commands/npm-run-preview', translations: { ar: 'npm run preview' } },
						{ label: 'git status', slug: 'commands/git-status', translations: { ar: 'git status' } },
						{ label: 'git add', slug: 'commands/git-add', translations: { ar: 'git add' } },
						{ label: 'git commit', slug: 'commands/git-commit', translations: { ar: 'git commit' } },
						{ label: 'git log', slug: 'commands/git-log', translations: { ar: 'git log' } },
						{ label: 'git diff', slug: 'commands/git-diff', translations: { ar: 'git diff' } },
					],
				},
				{
					label: 'Prompts',
					translations: { ar: 'المطالبات (Prompts)' },
					items: [
						{ label: 'Overview', slug: 'prompts/overview', translations: { ar: 'نظرة عامة' } },
						{ label: 'Resume a Project', slug: 'prompts/resume-project', translations: { ar: 'استئناف مشروع' } },
						{ label: 'Project Discovery', slug: 'prompts/project-discovery', translations: { ar: 'استكشاف المشروع' } },
						{ label: 'Project Context', slug: 'prompts/project-context', translations: { ar: 'سياق المشروع' } },
						{ label: 'MVP Planning', slug: 'prompts/mvp-planning', translations: { ar: 'التخطيط للـ MVP' } },
						{ label: 'Requirements', slug: 'prompts/requirements', translations: { ar: 'المتطلبات' } },
						{ label: 'Architecture', slug: 'prompts/architecture', translations: { ar: 'البنية البرمجية' } },
						{ label: 'Implementation Planning', slug: 'prompts/implementation-planning', translations: { ar: 'التخطيط للتنفيذ' } },
						{ label: 'Implementation', slug: 'prompts/implementation', translations: { ar: 'التنفيذ' } },
						{ label: 'Verification', slug: 'prompts/verification', translations: { ar: 'التحقق' } },
						{ label: 'Handoff', slug: 'prompts/handoff', translations: { ar: 'التسليم' } },
					],
				},
				{
					label: 'Verification',
					translations: { ar: 'التحقق من الصحة' },
					items: [
						{ label: 'Overview', slug: 'verification/overview', translations: { ar: 'نظرة عامة' } },
						{ label: 'Verification Workflow', slug: 'verification/workflow', translations: { ar: 'سير عمل التحقق' } },
						{ label: 'Build and Runtime Checks', slug: 'verification/build-and-runtime', translations: { ar: 'فحوصات البناء والتشغيل' } },
						{ label: 'Acceptance Criteria Review', slug: 'verification/acceptance-criteria', translations: { ar: 'مراجعة معايير القبول' } },
					],
				},
				{
					label: 'Handoff',
					translations: { ar: 'التسليم وقابلية النقل' },
					items: [
						{ label: 'Overview', slug: 'handoff/overview', translations: { ar: 'نظرة عامة' } },
						{ label: 'Preparing a Handoff', slug: 'handoff/preparing', translations: { ar: 'تحضير عملية التسليم' } },
						{ label: 'Receiving Agent Workflow', slug: 'handoff/receiving', translations: { ar: 'سير عمل الوكيل المستلم' } },
						{ label: 'Running This Project', slug: 'handoff/running-the-project', translations: { ar: 'تشغيل هذا المشروع' } },
					],
				},
				{
					label: 'Recovery & Continuity',
					translations: { ar: 'الاستعادة والاستمرارية' },
					collapsed: false,
					items: [
						{ label: 'Overview', slug: 'recovery/overview', translations: { ar: 'نظرة عامة' } },
						{ label: 'Recovery', slug: 'recovery/recovery', translations: { ar: 'الاستعادة' } },
						{ label: 'Session Continuity', slug: 'recovery/session-continuity', translations: { ar: 'استمرارية الجلسة' } },
						{ label: 'Model Switching', slug: 'recovery/model-switching', translations: { ar: 'تبديل النموذج' } },
						{ label: 'Agent Failure Handling', slug: 'recovery/agent-failure', translations: { ar: 'التعامل مع فشل الوكيل' } },
					],
				},
				{
					label: 'Reference',
					translations: { ar: 'المراجع' },
					items: [
						{ label: 'Overview', slug: 'reference/overview', translations: { ar: 'نظرة عامة' } },
						{ label: 'Workflow at a Glance', slug: 'reference/workflow-at-a-glance', translations: { ar: 'سير العمل بنظرة سريعة' } },
						{ label: 'Reading Order', slug: 'reference/reading-order', translations: { ar: 'ترتيب القراءة' } },
					],
				},
				{
					label: 'Tools',
					translations: { ar: 'الأدوات' },
					items: [
						{ label: 'Prompt Generator', slug: 'tools/prompt-generator', translations: { ar: 'مولد المطالبات' } },
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
		{
			name: 'apf-prompt-generator',
			hooks: {
				'astro:config:setup': ({ injectScript }) => {
					injectScript('page', 'import "/src/scripts/prompt-generator.ts";');
				},
			},
		},
		{
			name: 'apf-start-project',
			hooks: {
				'astro:config:setup': ({ injectScript }) => {
					injectScript('page', 'import "/src/scripts/start-project.ts";');
				},
			},
		},
	],
});
