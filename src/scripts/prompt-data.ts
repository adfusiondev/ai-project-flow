export type ProjectSize = 'small' | 'standard' | 'advanced';
export type FileLevel = 'core' | 'recommended' | 'optional' | 'skip';
export type Action = 'create' | 'review' | 'update' | 'recover';

export type CategoryId = 'define' | 'design' | 'execute' | 'guide' | 'transfer';

export type FileId =
	| 'project-context'
	| 'mvp'
	| 'requirements'
	| 'architecture'
	| 'decisions'
	| 'plan'
	| 'agents'
	| 'skill'
	| 'project-status'
	| 'changelog'
	| 'handoff';

export interface CategoryInfo {
	id: CategoryId;
	en: string;
	ar: string;
}

export interface FileInfo {
	id: FileId;
	file: string;
	en: string;
	ar: string;
	purpose: { en: string; ar: string };
	category: CategoryId;
}

export const CATEGORIES: CategoryInfo[] = [
	{ id: 'define', en: 'Define the Project', ar: 'حدّد المشروع' },
	{ id: 'design', en: 'Design the Solution', ar: 'صمّم الحل' },
	{ id: 'execute', en: 'Execute & Track', ar: 'نفّذ وتتبّع' },
	{ id: 'guide', en: 'Guide AI Agents', ar: 'وجّه وكلاء الذكاء الاصطناعي' },
	{ id: 'transfer', en: 'Transfer & Continue', ar: 'سلّم واستمر' },
];

export const FILES: Record<FileId, FileInfo> = {
	'project-context': {
		id: 'project-context',
		file: 'PROJECT_CONTEXT.md',
		en: 'Project Context',
		ar: 'سياق المشروع',
		purpose: {
			en: 'The project\u2019s foundation \u2014 context, rules, and working agreement.',
			ar: 'أساس المشروع \u2014 السياق والقواعد واتفاقية العمل.',
		},
		category: 'define',
	},
	mvp: {
		id: 'mvp',
		file: 'docs/MVP.md',
		en: 'MVP',
		ar: 'الحد الأدنى للمنتج (MVP)',
		purpose: {
			en: 'Defines the minimal product and what is out of scope.',
			ar: 'يحدّد الحد الأدنى للمنتج وما يقع خارج النطاق.',
		},
		category: 'define',
	},
	requirements: {
		id: 'requirements',
		file: 'docs/REQUIREMENTS.md',
		en: 'Requirements',
		ar: 'المتطلبات',
		purpose: {
			en: 'Formal functional and non-functional requirements.',
			ar: 'المتطلبات الوظيفية وغير الوظيفية بشكل رسمي.',
		},
		category: 'design',
	},
	architecture: {
		id: 'architecture',
		file: 'docs/ARCHITECTURE.md',
		en: 'Architecture',
		ar: 'البنية البرمجية',
		purpose: {
			en: 'Technical architecture and component decisions.',
			ar: 'البنية البرمجية وقرارات المكونات.',
		},
		category: 'design',
	},
	decisions: {
		id: 'decisions',
		file: 'docs/DECISIONS.md',
		en: 'Decisions',
		ar: 'القرارات',
		purpose: {
			en: 'Records accepted decisions and their rationale.',
			ar: 'يوثّق القرارات المعتمدة وأسبابها.',
		},
		category: 'design',
	},
	plan: {
		id: 'plan',
		file: 'PLAN.md',
		en: 'Plan',
		ar: 'الخطة',
		purpose: {
			en: 'The ordered implementation plan and its phases.',
			ar: 'خطة التنفيذ المرتبة ومراحلها.',
		},
		category: 'execute',
	},
	agents: {
		id: 'agents',
		file: 'AGENTS.md',
		en: 'Agent Instructions',
		ar: 'توجيهات الوكلاء',
		purpose: {
			en: 'Instructions that shape how AI agents work on the repo.',
			ar: 'تعليمات تشكّل طريقة عمل وكلاء الذكاء الاصطناعي في المستودع.',
		},
		category: 'guide',
	},
	skill: {
		id: 'skill',
		file: 'SKILL.md',
		en: 'Skill',
		ar: 'المهارة',
		purpose: {
			en: 'A reusable skill that encodes a project workflow.',
			ar: 'مهارة قابلة لإعادة الاستخدام تجسّد سير عمل المشروع.',
		},
		category: 'guide',
	},
	'project-status': {
		id: 'project-status',
		file: 'PROJECT_STATUS.md',
		en: 'Project Status',
		ar: 'حالة المشروع',
		purpose: {
			en: 'Current phase, progress, and next steps.',
			ar: 'المرحلة الحالية والتقدّم والخطوات التالية.',
		},
		category: 'execute',
	},
	changelog: {
		id: 'changelog',
		file: 'CHANGELOG.md',
		en: 'Changelog',
		ar: 'سجل التغييرات',
		purpose: {
			en: 'A timeline of changes and why they were made.',
			ar: 'جدول زمني للتغييرات وأسبابها.',
		},
		category: 'execute',
	},
	handoff: {
		id: 'handoff',
		file: 'HANDOFF.md',
		en: 'Handoff',
		ar: 'التسليم',
		purpose: {
			en: 'How to hand off and resume work across agents and tools.',
			ar: 'كيفية التسليم واستئناف العمل بين الوكلاء والأدوات.',
		},
		category: 'transfer',
	},
};

export const FILE_IDS: FileId[] = [
	'project-context',
	'mvp',
	'requirements',
	'architecture',
	'decisions',
	'plan',
	'agents',
	'skill',
	'project-status',
	'changelog',
	'handoff',
];

export const MATRIX: Record<FileId, Record<ProjectSize, FileLevel>> = {
	'project-context': { small: 'core', standard: 'core', advanced: 'core' },
	mvp: { small: 'optional', standard: 'core', advanced: 'core' },
	requirements: { small: 'skip', standard: 'core', advanced: 'core' },
	architecture: { small: 'skip', standard: 'optional', advanced: 'core' },
	decisions: { small: 'skip', standard: 'optional', advanced: 'core' },
	plan: { small: 'optional', standard: 'core', advanced: 'core' },
	agents: { small: 'optional', standard: 'core', advanced: 'core' },
	skill: { small: 'skip', standard: 'optional', advanced: 'core' },
	'project-status': { small: 'core', standard: 'core', advanced: 'core' },
	changelog: { small: 'recommended', standard: 'core', advanced: 'core' },
	handoff: { small: 'skip', standard: 'optional', advanced: 'core' },
};

export const FLOW_ORDER: Record<ProjectSize, FileId[]> = {
	small: ['project-context', 'project-status', 'changelog'],
	standard: ['project-context', 'mvp', 'requirements', 'plan', 'agents', 'project-status', 'changelog'],
	advanced: [
		'project-context',
		'mvp',
		'requirements',
		'architecture',
		'decisions',
		'plan',
		'agents',
		'skill',
		'project-status',
		'changelog',
		'handoff',
	],
};


// --- G7: Progressive Project Generation Workflow (Small projects) ---

export const SMALL_WORKFLOW: FileId[] = ['project-context', 'mvp', 'requirements'];

export function isWorkflowFile(fileId: FileId): boolean {
	return SMALL_WORKFLOW.includes(fileId);
}

export function getWorkflowIndex(fileId: FileId): number {
	return SMALL_WORKFLOW.indexOf(fileId);
}

export function getWorkflowNext(currentFileId: FileId): FileId | null {
	const index = getWorkflowIndex(currentFileId);
	if (index === -1 || index >= SMALL_WORKFLOW.length - 1) return null;
	return SMALL_WORKFLOW[index + 1];
}

export function isWorkflowComplete(currentFileId: FileId): boolean {
	return getWorkflowNext(currentFileId) === null;
}

export const LEVEL_LABELS: Record<FileLevel, { en: string; ar: string }> = {
	core: { en: 'Required', ar: 'أساسي' },
	recommended: { en: 'Recommended', ar: 'موصى به' },
	optional: { en: 'Optional', ar: 'اختياري' },
	skip: { en: 'Skip', ar: 'لا حاجة له' },
};

export const SIZES: { id: ProjectSize; en: string; ar: string }[] = [
	{ id: 'small', en: 'Small', ar: 'صغير' },
	{ id: 'standard', en: 'Standard', ar: 'قياسي' },
	{ id: 'advanced', en: 'Advanced', ar: 'متقدم' },
];

export interface ActionInfo {
	id: Action;
	en: string;
	ar: string;
	instruction: Record<'en' | 'ar', string>;
}

export const ACTIONS: ActionInfo[] = [
	{
		id: 'create',
		en: 'Create',
		ar: 'إنشاء',
		instruction: {
			en: 'Create {file} for this project using the information above. Follow the same structure and style already used in this repository.',
			ar: 'أنشئ {file} لهذا المشروع باستخدام المعلومات أعلاه، واتبع البنية والأسلوب نفسهما المستخدمين بالفعل في هذا المستودع.',
		},
	},
	{
		id: 'review',
		en: 'Review',
		ar: 'مراجعة',
		instruction: {
			en: 'Review {file} against the current project state. Verify it is complete, accurate, and consistent with the other project files, then report the findings and any required fixes.',
			ar: 'راجع {file} مقارنةً بالحالة الحالية للمشروع. تحقق من اكتماله ودقته واتساقه مع ملفات المشروع الأخرى، ثم أبلغ بالنتائج وأي إصلاحات مطلوبة.',
		},
	},
	{
		id: 'update',
		en: 'Update',
		ar: 'تحديث',
		instruction: {
			en: 'Update {file} to reflect the current project state. Preserve valid existing information and change only what is necessary.',
			ar: 'حدّث {file} ليعكس الحالة الحالية للمشروع. حافظ على المعلومات الصحيحة الموجودة وغيّر ما يلزم فقط.',
		},
	},
	{
		id: 'recover',
		en: 'Recover',
		ar: 'استعادة',
		instruction: {
			en: 'Recover {file}. Reconstruct it from the current repository state and the information in this prompt. Do not guess; ask only the minimum necessary questions.',
			ar: 'استعد {file}. أعد بناءه من الحالة الحالية للمستودع ومن المعلومات الواردة في هذه المطالبة. لا تخمّن؛ لا تطرح إلا الحد الأدنى من الأسئلة الضرورية.',
		},
	},
];

export function getAction(actionId: Action): ActionInfo {
	return ACTIONS.find((a) => a.id === actionId) ?? ACTIONS[0];
}

export const PROMPT_RULES: Record<'en' | 'ar', string> = {
	en: [
		'1. Never invent project information. Use only the information provided in this prompt or already present in the repository.',
		'2. Use known information first. Ask only the minimum necessary questions before proceeding.',
		'3. Never create all project files at once. Work one stage at a time.',
		'4. Preserve valid existing information. Do not overwrite or redo already completed work.',
		'5. Update project status documentation when your change affects the project state.',
		'6. Stop at a clear checkpoint when the target file is done, and report what you changed and what the next file should be.',
		'7. Remain independent of any specific IDE, AI tool, or model.',
	].join('\n'),
	ar: [
		'1. لا تخترع أبدًا معلومات المشروع. استخدم فقط المعلومات الواردة في هذه المطالبة أو الموجودة بالفعل في المستودع.',
		'2. استخدم المعلومات المعروفة أولًا، ولا تطرح إلا الحد الأدنى من الأسئلة الضرورية قبل المتابعة.',
		'3. لا تنشئ جميع ملفات المشروع دفعة واحدة. اعمل مرحلة واحدة في كل مرة.',
		'4. حافظ على المعلومات الصحيحة الموجودة. لا تستبدل أو تعيد عملًا مكتملًا بالفعل.',
		'5. حدّث توثيق حالة المشروع عندما يؤثر تغييرك على حالة المشروع.',
		'6. توقف عند نقطة تفتيش واضحة عند اكتمال الملف المستهدف، وأبلغ بما غيّرته وبأي ملف يجب أن يكون التالي.',
		'7. ابقَ مستقلًا عن أي بيئة تطوير أو أداة ذكاء اصطناعي أو نموذج محدد.',
	].join('\n'),
};

export function getFile(fileId: FileId): FileInfo {
	return FILES[fileId];
}

export function fileLevel(size: ProjectSize, fileId: FileId): FileLevel {
	return MATRIX[fileId][size];
}

export function nextFile(size: ProjectSize, fileId: FileId): FileId | null {
	const order = FLOW_ORDER[size];
	const index = order.indexOf(fileId);
	if (index === -1 || index === order.length - 1) return null;
	return order[index + 1];
}

// --- G1: File Content Generation (PROJECT_CONTEXT.md only) ---

export interface FileTemplate {
	file: FileId;
	sections: { heading: string; field?: keyof import('./prompt-generator.js').GeneratorInput; placeholder: Record<'en' | 'ar', string> }[];
}

export const FILE_TEMPLATES: Partial<Record<FileId, FileTemplate>> = {
	'project-context': {
		file: 'project-context',
		sections: [
			{ heading: 'Project Purpose', field: 'projectIdea', placeholder: { en: '[Describe what this project is and why it exists.]', ar: '[صف ما هذا المشروع ولماذا существует.]' } },
			{ heading: 'Primary User', field: 'targetUsers', placeholder: { en: '[Describe who this project is for.]', ar: '[صف لمن هذا المشروع.]' } },
			{ heading: 'Current Product Form', field: 'platform', placeholder: { en: '[Describe what the product looks like today.]', ar: '[صف كيف يبدو المنتج اليوم.]' } },
			{ heading: 'Current MVP', field: 'projectType', placeholder: { en: '[The smallest useful first version, in a few bullets.]', ar: '[أصغر نسخة أولى مفيدة، في بضعة فقرات.]' } },
			{ heading: 'Future Scope', placeholder: { en: '[What comes after the MVP, clearly separated.]', ar: '[ما يأتي بعد الحد الأدنى للمنتج، مفصّل بوضوح.]' } },
			{ heading: 'Languages and Portability', field: 'languages', placeholder: { en: '[Languages, frameworks, and portability goals.]', ar: '[اللغات والأطر وأهداف القابلية للنقل.]' } },
			{ heading: 'Core Project Rules', field: 'constraints', placeholder: { en: '[Rule 1]\n- [Rule 2]', ar: '[القاعدة 1]\n- [القاعدة 2]' } },
			{ heading: 'Current Status', placeholder: { en: '[One short paragraph on where the project stands today.]', ar: '[فقرة قصيرة عن موقف المشروع اليوم.]' } },
		],
	},
	'mvp': {
		file: 'mvp',
		sections: [
			{ heading: 'MVP Goal', placeholder: { en: '[The smallest useful first version, in one sentence.]', ar: '[أصغر نسخة أولى مفيدة، في جملة واحدة.]' } },
			{ heading: 'MVP Scope', placeholder: { en: '- [What the first version includes.]', ar: '- [ما تشمله النسخة الأولى.]' } },
			{ heading: 'Out of Scope', placeholder: { en: '- [What is deliberately excluded from the MVP.]', ar: '- [ما يتم استبعاده عن قصد من الحد الأدنى للمنتج.]' } },
			{ heading: 'MVP Success Criteria', placeholder: { en: '- [How you will know the MVP is finished and works.]', ar: '- [كيف ستعرف أن الحد الأدنى للمنتج منجز ويعمل.]' } },
		],
	},
	'architecture': {
		file: 'architecture',
		sections: [
			{ heading: 'Purpose', field: 'projectIdea', placeholder: { en: '[What this document defines and the principles it follows.]', ar: '[ما يُعرّفه هذا المستند والمبادئ التي يتبعها.]' } },
			{ heading: 'Architecture Principles', placeholder: { en: '- [Keep it simple, portable, and maintainable.]', ar: '- [حافظ على البساطة والقابلية للنقل والصيانة.]' } },
			{ heading: 'Current Application Type', field: 'projectType', placeholder: { en: '[Application type and what the MVP does not require.]', ar: '[نوع التطبيق وما لا يحتاجه الحد الأدنى للمنتج.]' } },
			{ heading: 'Selected Technology', field: 'languages', placeholder: { en: '- [Framework / language / tools.]', ar: '- [الإطار / اللغة / الأدوات.]' } },
			{ heading: 'High-Level Structure', placeholder: { en: '[Simple ASCII diagram showing component relationships.]', ar: '[مخطط ASCII بسيط يُظهر علاقات المكونات.]' } },
			{ heading: 'Rejected Alternatives', placeholder: { en: '- [Approaches considered and why they were not chosen.]', ar: '- [المناهج التي تم рассмотрتها ولماذا لم تُختار.]' } },
		],
	},
	'requirements': {
		file: 'requirements',
		sections: [
			{ heading: 'Purpose', field: 'projectIdea', placeholder: { en: '[What this document defines and what it must stay aligned with.]', ar: '[ما يُعرّفه هذا المستند وما يجب أن يتوافق معه.]' } },
			{ heading: 'Functional Requirements', placeholder: { en: '### FR-01 — {Requirement Title}\n\n[Verifiable behavior: what the project must do.]\n\n### FR-02 — {Requirement Title}\n\n[Verifiable behavior.]', ar: '### FR-01 — {عنوان المتطلب}\n\n[سلوك قابل للتحقق: ما يجب أن يفعله المشروع.]\n\n### FR-02 — {عنوان المتطلب}\n\n[سلوك قابل للتحقق.]' } },
			{ heading: 'Non-Functional Requirements', field: 'platform', placeholder: { en: '- [Simplicity, performance, accessibility, portability, etc.]', ar: '- [البساطة والأداء والوصول والقابلية للنقل، إلخ.]' } },
			{ heading: 'Content Requirements', placeholder: { en: '- [What the content must deliver.]', ar: '- [ما يجب أن تقدمه المحتويات.]' } },
			{ heading: 'Design Requirements', placeholder: { en: '- [Layout and visual direction constraints.]', ar: '- [قيود التخطيط والتوجيه البصري.]' } },
			{ heading: 'Localization Requirements', field: 'languages', placeholder: { en: '- [Languages, text direction, content separation.]', ar: '- [اللغات واتجاه النص وفصل المحتوى.]' } },
			{ heading: 'Portability Requirements', field: 'constraints', placeholder: { en: '- [Tool, IDE, and AI-agent independence.]', ar: '- [استقلالية الأداة وبيئة التطوير ووكيل الذكاء الاصطناعي.]' } },
			{ heading: 'MVP Constraints', placeholder: { en: '- [What the MVP must not require.]', ar: '- [ما يجب ألا يشترطه الحد الأدنى للمنتج.]' } },
		],
	},
		'skill': {
		file: 'skill',
		sections: [
			{ heading: 'Purpose', field: 'projectIdea', placeholder: { en: '[What this skill does and when to use it.]', ar: '[ما تفعله هذه المهارة ومتى تستخدمها.]' } },
			{ heading: 'Rules', field: 'constraints', placeholder: { en: '- [Rule 1]\n- [Rule 2]', ar: '- [القاعدة 1]\n- [القاعدة 2]' } },
			{ heading: 'Output', placeholder: { en: 'Create or update:\n\n- `[Target file]`', ar: 'أنشئ أو حدّث:\n\n- `[الملف المستهدف]`' } },
			{ heading: 'Quality Gate', placeholder: { en: 'Skill is complete when:\n\n- [Criterion 1]\n- [Criterion 2]', ar: 'المهارة مكتملة عندما:\n\n- [المعيار 1]\n- [المعيار 2]' } },
		],
	},
};

export function generateFileContent(input: import('./prompt-generator.js').GeneratorInput, lang: 'en' | 'ar'): string | null {
	const template = FILE_TEMPLATES[input.file];
	if (!template) return null;

	const lines: string[] = [];
	const headingPrefix = input.file === 'project-context' ? '# PROJECT_CONTEXT.md' : input.file === 'mvp' ? `# ${input.projectName ? input.projectName + ' — ' : ''}MVP` : input.file === 'requirements' ? `# ${input.projectName ? input.projectName + ' — ' : ''}Requirements` : `# ${FILES[input.file].file}`;
	lines.push(headingPrefix);
	lines.push('');

	for (const section of template.sections) {
		lines.push(`## ${section.heading}`);
		lines.push('');
		if (section.field) {
			const value = input[section.field];
			if (value && value.trim().length > 0) {
				lines.push(value.trim());
			} else {
				lines.push(section.placeholder[lang]);
			}
		} else {
			lines.push(section.placeholder[lang]);
		}
		lines.push('');
	}

	return lines.join('\n').trimEnd() + '\n';
}
