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
		category: 'define',
	},
	mvp: { id: 'mvp', file: 'docs/MVP.md', en: 'MVP', ar: 'الحد الأدنى للمنتج (MVP)', category: 'define' },
	requirements: {
		id: 'requirements',
		file: 'docs/REQUIREMENTS.md',
		en: 'Requirements',
		ar: 'المتطلبات',
		category: 'design',
	},
	architecture: {
		id: 'architecture',
		file: 'docs/ARCHITECTURE.md',
		en: 'Architecture',
		ar: 'البنية البرمجية',
		category: 'design',
	},
	decisions: {
		id: 'decisions',
		file: 'docs/DECISIONS.md',
		en: 'Decisions',
		ar: 'القرارات',
		category: 'design',
	},
	plan: { id: 'plan', file: 'PLAN.md', en: 'Plan', ar: 'الخطة', category: 'execute' },
	agents: {
		id: 'agents',
		file: 'AGENTS.md',
		en: 'Agent Instructions',
		ar: 'توجيهات الوكلاء',
		category: 'guide',
	},
	skill: { id: 'skill', file: 'SKILL.md', en: 'Skill', ar: 'المهارة', category: 'guide' },
	'project-status': {
		id: 'project-status',
		file: 'PROJECT_STATUS.md',
		en: 'Project Status',
		ar: 'حالة المشروع',
		category: 'execute',
	},
	changelog: {
		id: 'changelog',
		file: 'CHANGELOG.md',
		en: 'Changelog',
		ar: 'سجل التغييرات',
		category: 'execute',
	},
	handoff: { id: 'handoff', file: 'HANDOFF.md', en: 'Handoff', ar: 'التسليم', category: 'transfer' },
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
		ar: 'استرجاع',
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
