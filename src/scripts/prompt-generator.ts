import {
	ACTIONS,
	CATEGORIES,
	FILE_IDS,
	FILES,
	FILE_TEMPLATES,
	PROMPT_RULES,
	SIZES,
	generateFileContent,
	getAction,
	nextFile,
	type Action,
	type FileId,
	type ProjectSize,
} from './prompt-data.js';
import { enhancePromptBlocks } from './copy-controls.js';

const GENERATOR_ID = 'prompt-generator';

export interface GeneratorInput {
	file: FileId;
	action: Action;
	size?: ProjectSize;
	projectName?: string;
	projectType?: string;
	projectIdea?: string;
	targetUsers?: string;
	platform?: string;
	languages?: string;
	constraints?: string;
}

interface Labels {
	intro: string;
	overview: string;
	rules: string;
	target: string;
	file: string;
	action: string;
	size: string;
	next: string;
	projectName: string;
	projectType: string;
	projectIdea: string;
	targetUsers: string;
	platform: string;
	languages: string;
	constraints: string;
	projectDetails: string;
	optional: string;
	generate: string;
	outputLabel: string;
	sizeHint: string;
	type: string;
	idea: string;
	users: string;
	stack: string;
	workflowNav: string;
	backTo: string;
	nextRecommended: string;
	generateItsPrompt: string;
	generateFile: string;
	aiGenerate: string;
	aiGenerating: string;
	outputLabelFile: string;
	fileContentMode: string;
	promptMode: string;
}

const EN: Labels = {
	intro: 'You are working on the project',
	overview: 'Project overview',
	rules: 'Rules for this work',
	target: 'Target file',
	file: 'Target file',
	action: 'Action',
	size: 'Project size',
	next: 'Next file',
	projectName: 'Project name',
	projectType: 'Project type',
	projectIdea: 'Project idea',
	targetUsers: 'Target users',
	platform: 'Platform',
	languages: 'Languages / tech stack',
	constraints: 'Main constraints',
	projectDetails: 'Project details',
	optional: 'optional',
	generate: 'Generate prompt',
	outputLabel: 'Generated prompt',
	sizeHint: 'Small: minimal set · Standard: recommended set · Advanced: full project',
	type: 'Type',
	idea: 'Idea',
	users: 'Target users',
	stack: 'Languages / tech stack',
	workflowNav: 'Project Files navigation',
	backTo: 'Back to',
	nextRecommended: 'Next recommended file',
	generateItsPrompt: 'Generate its prompt',
	generateFile: 'Generate file',
	aiGenerate: 'AI Generate',
	aiGenerating: 'Generating...',
	outputLabelFile: 'Generated file',
	fileContentMode: 'File Content',
	promptMode: 'Prompt',
};

const AR: Labels = {
	intro: 'أنت تعمل على مشروع',
	overview: 'نظرة عامة عن المشروع',
	rules: 'قواعد هذا العمل',
	target: 'الملف المستهدف',
	file: 'الملف المستهدف',
	action: 'الإجراء',
	size: 'حجم المشروع',
	next: 'الملف التالي',
	projectName: 'اسم المشروع',
	projectType: 'نوع المشروع',
	projectIdea: 'فكرة المشروع',
	targetUsers: 'المستخدمون المستهدفون',
	platform: 'المنصة',
	languages: 'اللغات / التقنيات',
	constraints: 'القيود الرئيسية',
	projectDetails: 'تفاصيل المشروع',
	optional: 'اختياري',
	generate: 'إنشاء المطالبة',
	outputLabel: 'المطالبة المُولَّدة',
	sizeHint: 'صغير: مجموعة الحد الأدنى · قياسي: المجموعة الموصى بها · متقدم: المشروع كامل',
	type: 'النوع',
	idea: 'الفكرة',
	users: 'المستخدمون المستهدفون',
	stack: 'اللغات / التقنيات',
	workflowNav: 'التنقل في ملفات المشروع',
	backTo: 'العودة إلى',
	nextRecommended: 'الملف الموصى به التالي',
	generateItsPrompt: 'أنشئ مطالبتها',
	generateFile: 'إنشاء ملف',
	aiGenerate: 'إنشاء بالذكاء الاصطناعي',
	aiGenerating: 'جارٍ الإنشاء...',
	outputLabelFile: 'الملف المُولَّدة',
	fileContentMode: 'محتوى الملف',
	promptMode: 'المطالبة',
};

function getLabels(): Labels {
	return document.documentElement.lang === 'ar' ? AR : EN;
}

function escapeHtml(text: string): string {
	return text
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

const FILE_NAME_RE = new RegExp(
	`(${Object.values(FILES)
		.map((f) => f.file.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
		.join('|')})`,
	'g',
);

function highlight(text: string): string {
	return escapeHtml(text).replace(FILE_NAME_RE, (match) => `<code>${match}</code>`);
}

export function buildPrompt(input: GeneratorInput): string {
	const isArabic = document.documentElement.lang === 'ar';
	const labels = isArabic ? AR : EN;
	const paragraphs: string[] = [];

	if (input.projectName) {
		paragraphs.push(`${labels.intro} «${input.projectName}».`);
	}

	const overview: string[] = [];
	if (input.projectType) overview.push(`- ${labels.type}: ${input.projectType}`);
	if (input.projectIdea) overview.push(`- ${labels.idea}: ${input.projectIdea}`);
	if (input.targetUsers) overview.push(`- ${labels.users}: ${input.targetUsers}`);
	if (input.platform) overview.push(`- ${labels.platform}: ${input.platform}`);
	if (input.languages) overview.push(`- ${labels.stack}: ${input.languages}`);
	if (input.constraints) overview.push(`- ${labels.constraints}: ${input.constraints}`);
	if (overview.length > 0) {
		paragraphs.push(`${labels.overview}:\n${overview.join('\n')}`);
	}

	paragraphs.push(`${labels.rules}:\n${PROMPT_RULES[isArabic ? 'ar' : 'en']}`);

	const file = FILES[input.file];
	const sizeLabel = SIZES.find((s) => s.id === input.size);
	const targetLines = [`${labels.target}: ${file.file}`, `${labels.action}: ${getAction(input.action)[isArabic ? 'ar' : 'en']}`];
	if (sizeLabel) targetLines.push(`${labels.size}: ${sizeLabel[isArabic ? 'ar' : 'en']}`);
	paragraphs.push(targetLines.join('\n'));

	const action = getAction(input.action);
	paragraphs.push(action.instruction[isArabic ? 'ar' : 'en'].replace('{file}', file.file));

	if (input.size) {
		const next = nextFile(input.size, input.file);
		if (next) paragraphs.push(`${labels.next}: ${FILES[next].file}`);
	}

	return paragraphs.join('\n\n');
}

function el<K extends keyof HTMLElementTagNameMap>(
	tag: K,
	props: Record<string, string> = {},
	text?: string,
): HTMLElementTagNameMap[K] {
	const node = document.createElement(tag);
	for (const [key, value] of Object.entries(props)) {
		if (key === 'className') node.className = value;
		else node.setAttribute(key, value);
	}
	if (text !== undefined) node.textContent = text;
	return node;
}

interface GeneratorState {
	form: HTMLFormElement;
	inputs: {
		projectName: HTMLInputElement;
		projectType: HTMLInputElement;
		projectIdea: HTMLTextAreaElement;
		targetUsers: HTMLInputElement;
		platform: HTMLInputElement;
		languages: HTMLInputElement;
		constraints: HTMLTextAreaElement;
	};
	file: { value: () => FileId; set: (id: FileId) => void; onChange: (cb: () => void) => void; element: HTMLElement };
	output: HTMLDivElement;
	mode: 'prompt' | 'file' | 'ai';
	submitBtn: HTMLButtonElement;
	updateMode: () => void;
}

function makeInput(name: string): HTMLInputElement {
	return el('input', { type: 'text', className: 'apf-form__input', name });
}

function makeTextarea(name: string): HTMLTextAreaElement {
	return el('textarea', { className: 'apf-form__textarea', name });
}

function makeField(labelText: string, control: HTMLElement, full = false): HTMLElement {
	const field = el('label', { className: `apf-form__field${full ? ' apf-form__field--full' : ''}` });
	const span = el('span', { className: 'apf-form__label' }, labelText);
	field.appendChild(span);
	field.appendChild(control);
	return field;
}

function makeStep(number: number, label: string, control: HTMLElement): HTMLElement {
	const step = el('div', { className: 'apf-generator__step' });
	const head = el('div', { className: 'apf-generator__step-head' });
	head.appendChild(el('span', { className: 'apf-generator__step-num' }, String(number)));
	head.appendChild(el('span', { className: 'apf-generator__step-label' }, label));
	step.appendChild(head);
	step.appendChild(control);
	return step;
}

function makeSegmented(name: string, options: { value: string; label: string }[], checked: string): HTMLElement {
	const group = el('div', { className: 'apf-generator__seg', role: 'radiogroup' });
	for (const option of options) {
		const item = el('label', { className: 'apf-generator__seg-item' });
		const input = el('input', { type: 'radio', className: 'apf-generator__seg-input', name, value: option.value });
		if (option.value === checked) input.checked = true;
		const span = el('span', { className: 'apf-generator__seg-label' }, option.label);
		item.appendChild(input);
		item.appendChild(span);
		group.appendChild(item);
	}
	return group;
}

function makeFileDropdown(): GeneratorState['file'] {
	const isArabic = document.documentElement.lang === 'ar';
	let current: FileId = 'project-context';
	let notify: () => void = () => {};

	const wrap = el('div', { className: 'apf-generator__dropdown' });
	const trigger = el('button', {
		type: 'button',
		className: 'apf-generator__dropdown-trigger',
		'aria-haspopup': 'listbox',
		'aria-expanded': 'false',
	});
	const valueLabel = el('span', { className: 'apf-generator__dropdown-value-label' });
	const valueSep = el('span', { className: 'apf-generator__dropdown-value-sep' }, ' · ');
	const valueFile = el('span', { className: 'apf-generator__dropdown-value-file' });
	const valueSpan = el('span', { className: 'apf-generator__dropdown-value' });
	valueSpan.appendChild(valueLabel);
	valueSpan.appendChild(valueSep);
	valueSpan.appendChild(valueFile);
	trigger.appendChild(valueSpan);
	trigger.appendChild(el('span', { className: 'apf-generator__dropdown-caret', 'aria-hidden': 'true' }, '▾'));

	const menu = el('div', { className: 'apf-generator__dropdown-menu', role: 'listbox' });
	menu.hidden = true;

	const options: { button: HTMLButtonElement; id: FileId }[] = [];

	for (const category of CATEGORIES) {
		const group = el('div', { className: 'apf-generator__dropdown-group' });
		group.appendChild(el('div', { className: 'apf-generator__dropdown-group-label' }, isArabic ? category.ar : category.en));
		for (const id of FILE_IDS) {
			if (FILES[id].category !== category.id) continue;
			const info = FILES[id];
			const option = el('button', {
				type: 'button',
				role: 'option',
				className: 'apf-generator__dropdown-option',
				'aria-selected': id === current ? 'true' : 'false',
			});
			option.appendChild(el('span', { className: 'apf-generator__dropdown-option-label' }, isArabic ? info.ar : info.en));
			option.appendChild(el('span', { className: 'apf-generator__dropdown-option-file' }, info.file));
			option.addEventListener('mousedown', (event) => event.preventDefault());
			option.addEventListener('click', () => select(id));
			group.appendChild(option);
			options.push({ button: option, id });
		}
		menu.appendChild(group);
	}
	wrap.appendChild(trigger);
	wrap.appendChild(menu);

	function renderValue(): void {
		const info = FILES[current];
		valueLabel.textContent = isArabic ? info.ar : info.en;
		valueFile.textContent = info.file;
	}

	function select(id: FileId): void {
		current = id;
		options.forEach((o) => o.button.setAttribute('aria-selected', o.id === id ? 'true' : 'false'));
		renderValue();
		close();
		trigger.focus();
		notify();
	}

	function open(): void {
		trigger.setAttribute('aria-expanded', 'true');
		menu.hidden = false;
		const selected = options.find((o) => o.id === current);
		if (selected) selected.button.focus();
		document.addEventListener('click', onDocumentClick);
	}

	function close(): void {
		trigger.setAttribute('aria-expanded', 'false');
		menu.hidden = true;
		document.removeEventListener('click', onDocumentClick);
	}

	function onDocumentClick(event: MouseEvent): void {
		if (!wrap.contains(event.target as Node)) close();
	}

	trigger.addEventListener('click', () => {
		menu.hidden ? open() : close();
	});

	trigger.addEventListener('keydown', (event) => {
		if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
			event.preventDefault();
			open();
		} else if (event.key === 'Escape') {
			close();
		}
	});

	menu.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			event.preventDefault();
			close();
			trigger.focus();
			return;
		}
		if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
		event.preventDefault();
		const index = options.findIndex((o) => o.id === current);
		const direction = event.key === 'ArrowDown' ? 1 : -1;
		const next = options[(index + direction + options.length) % options.length];
		current = next.id;
		options.forEach((o) => o.button.setAttribute('aria-selected', o.id === current ? 'true' : 'false'));
		renderValue();
		next.button.focus();
		notify();
	});

	wrap.addEventListener('focusout', (event) => {
		if (!wrap.contains(event.relatedTarget as Node)) close();
	});

	renderValue();

	return {
		element: wrap,
		value: () => current,
		set: (id: FileId) => select(id),
		onChange: (cb: () => void) => {
			notify = cb;
		},
	};
}

function buildForm(): GeneratorState {
	const labels = getLabels();
	const isArabic = document.documentElement.lang === 'ar';
	const form = el('form', { className: 'apf-form' });

	const flow = el('div', { className: 'apf-generator__flow not-content' });
	const sizeControl = el('div', { className: 'apf-generator__step-control' });
	const sizeGroup = makeSegmented(
		'size',
		SIZES.map((s) => ({ value: s.id, label: isArabic ? s.ar : s.en })),
		'small',
	);
	sizeControl.appendChild(sizeGroup);
	sizeControl.appendChild(el('p', { className: 'apf-generator__hint' }, labels.sizeHint));
	flow.appendChild(makeStep(1, labels.size, sizeControl));
	const file = makeFileDropdown();
	flow.appendChild(makeStep(2, labels.file, file.element));
	const actionGroup = makeSegmented(
		'action',
		ACTIONS.map((a) => ({ value: a.id, label: isArabic ? a.ar : a.en })),
		'create',
	);
	flow.appendChild(makeStep(3, labels.action, actionGroup));
	form.appendChild(flow);

	const details = el('details', { className: 'apf-generator__details' });
	const summary = el('summary', { className: 'apf-generator__details-summary' });
	summary.appendChild(el('span', { className: 'apf-generator__details-title' }, labels.projectDetails));
	summary.appendChild(el('span', { className: 'apf-generator__details-optional' }, `(${labels.optional})`));
	summary.appendChild(el('span', { className: 'apf-generator__details-caret', 'aria-hidden': 'true' }, '▾'));
	details.appendChild(summary);

	const detailsBody = el('div', { className: 'apf-generator__details-body' });
	const grid = el('div', { className: 'apf-form__grid' });
	const inputs = {
		projectName: makeInput('projectName'),
		projectType: makeInput('projectType'),
		projectIdea: makeTextarea('projectIdea'),
		targetUsers: makeInput('targetUsers'),
		platform: makeInput('platform'),
		languages: makeInput('languages'),
		constraints: makeTextarea('constraints'),
	};
	grid.appendChild(makeField(labels.projectName, inputs.projectName));
	grid.appendChild(makeField(labels.projectType, inputs.projectType));
	grid.appendChild(makeField(labels.targetUsers, inputs.targetUsers));
	grid.appendChild(makeField(labels.platform, inputs.platform));
	grid.appendChild(makeField(labels.languages, inputs.languages));
	grid.appendChild(makeField(labels.constraints, inputs.constraints));
	grid.appendChild(makeField(labels.projectIdea, inputs.projectIdea, true));
	detailsBody.appendChild(grid);
	details.appendChild(detailsBody);
	flow.appendChild(details);

	// Mode toggle (only visible when file has a template)
	const modeRow = el('div', { className: 'apf-generator__mode' });
	const modeLabel = el('span', { className: 'apf-generator__mode-label' });
	const modeSeg = makeSegmented(
		'output-mode',
		[
			{ value: 'prompt', label: labels.promptMode },
			{ value: 'file', label: labels.fileContentMode },
		],
		'prompt',
	);
	modeRow.appendChild(modeLabel);
	modeRow.appendChild(modeSeg);
	modeRow.hidden = true;
	flow.appendChild(modeRow);

	const actions = el('div', { className: 'apf-generator__actions apf-action-group' });
	actions.appendChild(el('span', { className: 'apf-generator__step-num' }, '4'));
	const submit = el('button', { type: 'submit', className: 'apf-action apf-action--primary apf-generator__submit' }, labels.generate);
	actions.appendChild(submit);
	flow.appendChild(actions);

	form.appendChild(el('div', { className: 'apf-generator__output' }));

	let currentMode: 'prompt' | 'file' | 'ai' = 'prompt';

	const state = { form, inputs, file, output: form.querySelector<HTMLDivElement>('.apf-generator__output')!, mode: currentMode as 'prompt' | 'file' | 'ai', submitBtn: submit, updateMode: () => {} };

	function updateMode(): void {
		const hasTemplate = FILE_TEMPLATES[state.file.value()] != null;
		const hasAI = hasTemplate && (state.file.value() === 'architecture' || state.file.value() === 'skill');
		modeRow.hidden = !hasTemplate;
		if (!hasTemplate) currentMode = 'prompt';
		else {
			// Add or remove AI option based on file
			const existingAI = form.querySelector<HTMLInputElement>('input[name="output-mode"][value="ai"]');
			if (hasAI && !existingAI) {
				const segGroup = modeRow.querySelector('.apf-generator__seg');
				if (segGroup) {
					const aiItem = document.createElement('label');
					aiItem.className = 'apf-generator__seg-item';
					const aiInput = document.createElement('input');
					aiInput.type = 'radio';
					aiInput.className = 'apf-generator__seg-input';
					aiInput.name = 'output-mode';
					aiInput.value = 'ai';
					const aiSpan = document.createElement('span');
					aiSpan.className = 'apf-generator__seg-label';
					aiSpan.textContent = labels.aiGenerate;
					aiItem.appendChild(aiInput);
					aiItem.appendChild(aiSpan);
					segGroup.appendChild(aiItem);
				}
			} else if (!hasAI && existingAI) {
				existingAI.parentElement?.remove();
			}
			const checked = form.querySelector<HTMLInputElement>('input[name="output-mode"]:checked');
			currentMode = (checked?.value as 'prompt' | 'file' | 'ai') ?? 'prompt';
		}
		state.mode = currentMode;
		submit.textContent = currentMode === 'file' ? labels.generateFile : currentMode === 'ai' ? labels.aiGenerate : labels.generate;
	}

	state.updateMode = updateMode;
	return state;
}

function readSegmented(form: HTMLFormElement, name: string): string {
	const input = form.querySelector<HTMLInputElement>(`input[name="${name}"]:checked`);
	return input ? input.value : '';
}

function collectInput(state: GeneratorState): GeneratorInput {
	const value = (input: HTMLInputElement | HTMLTextAreaElement): string | undefined => {
		const text = input.value.trim();
		return text.length > 0 ? text : undefined;
	};
	return {
		file: state.file.value(),
		action: readSegmented(state.form, 'action') as Action,
		size: readSegmented(state.form, 'size') as ProjectSize,
		projectName: value(state.inputs.projectName),
		projectType: value(state.inputs.projectType),
		projectIdea: value(state.inputs.projectIdea),
		targetUsers: value(state.inputs.targetUsers),
		platform: value(state.inputs.platform),
		languages: value(state.inputs.languages),
		constraints: value(state.inputs.constraints),
	};
}

function generatePrompt(state: GeneratorState): void {
	const text = buildPrompt(collectInput(state));
	const labels = getLabels();
	state.output.replaceChildren();

	const block = el('div', { className: 'prompt-block' });
	const header = el('div', { className: 'prompt-block__header' });
	header.appendChild(el('span', { className: 'apf-generator__output-label' }, labels.outputLabel));
	const body = el('div', { className: 'prompt-block__body' });
	for (const paragraph of text.split(/\n\n+/)) {
		const p = el('p');
		p.innerHTML = highlight(paragraph).replace(/\n/g, '<br>');
		body.appendChild(p);
	}
	block.appendChild(header);
	block.appendChild(body);
	state.output.appendChild(block);
	enhancePromptBlocks();
}

function generateFile(state: GeneratorState): void {
	const input = collectInput(state);
	const lang = document.documentElement.lang === 'ar' ? 'ar' : 'en';
	const text = generateFileContent(input, lang);
	if (!text) return;
	const labels = getLabels();
	state.output.replaceChildren();

	const block = el('div', { className: 'file-block' });
	const header = el('div', { className: 'file-block__header' });
	header.appendChild(el('span', { className: 'file-block__label' }, labels.outputLabelFile));
	const body = el('div', { className: 'file-block__body' });
	const pre = el('pre', { className: 'file-block__content' });
	pre.textContent = text;
	body.appendChild(pre);
	block.appendChild(header);
	block.appendChild(body);
	state.output.appendChild(block);
	enhancePromptBlocks();
}



async function generateAIArchitecture(state: GeneratorState): Promise<void> {
	const input = collectInput(state);
	const lang = document.documentElement.lang === 'ar' ? 'ar' : 'en';
	const labels = getLabels();
	const isArabic = lang === 'ar';

	// Show loading state
	state.output.replaceChildren();
	const loadingBlock = el('div', { className: 'ai-block ai-block--loading' });
	const loadingHeader = el('div', { className: 'ai-block__header' });
	loadingHeader.appendChild(el('span', { className: 'ai-block__label' }, labels.aiGenerating));
	const loadingBody = el('div', { className: 'ai-block__body' });
	const spinner = el('div', { className: 'ai-block__spinner' });
	loadingBody.appendChild(spinner);
	loadingBlock.appendChild(loadingHeader);
	loadingBlock.appendChild(loadingBody);
	state.output.appendChild(loadingBlock);

	try {
		const response = await fetch('/api/generate-architecture', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				projectName: input.projectName,
				projectType: input.projectType,
				projectIdea: input.projectIdea,
				platform: input.platform,
				languages: input.languages,
				constraints: input.constraints,
				lang,
			}),
		});

		const data = await response.json();

		if (!response.ok) {
			state.output.replaceChildren();
			const errorBlock = el('div', { className: 'ai-block ai-block--error' });
			errorBlock.appendChild(el('p', {}, data.error || 'Generation failed.'));
			state.output.appendChild(errorBlock);
			return;
		}

		state.output.replaceChildren();
		const block = el('div', { className: 'file-block' });
		const header = el('div', { className: 'file-block__header' });
		header.appendChild(el('span', { className: 'file-block__label' }, labels.outputLabelFile));
		if (data.model) {
			header.appendChild(el('span', { className: 'file-block__model' }, data.model));
		}
		const body = el('div', { className: 'file-block__body' });
		const pre = el('pre', { className: 'file-block__content' });
		pre.textContent = data.content;
		body.appendChild(pre);
		block.appendChild(header);
		block.appendChild(body);
		state.output.appendChild(block);
		enhancePromptBlocks();
	} catch (error) {
		state.output.replaceChildren();
		const errorBlock = el('div', { className: 'ai-block ai-block--error' });
		errorBlock.appendChild(el('p', {}, isArabic ? 'حدث خطأ غير متوقع.' : 'An unexpected error occurred.'));
		state.output.appendChild(errorBlock);
	}
}


async function generateAISkill(state: GeneratorState): Promise<void> {
	const input = collectInput(state);
	const lang = document.documentElement.lang === 'ar' ? 'ar' : 'en';
	const labels = getLabels();
	const isArabic = lang === 'ar';

	// Show loading state
	state.output.replaceChildren();
	const loadingBlock = el('div', { className: 'ai-block ai-block--loading' });
	const loadingHeader = el('div', { className: 'ai-block__header' });
	loadingHeader.appendChild(el('span', { className: 'ai-block__label' }, labels.aiGenerating));
	const loadingBody = el('div', { className: 'ai-block__body' });
	const spinner = el('div', { className: 'ai-block__spinner' });
	loadingBody.appendChild(spinner);
	loadingBlock.appendChild(loadingHeader);
	loadingBlock.appendChild(loadingBody);
	state.output.appendChild(loadingBlock);

	try {
		const response = await fetch('/api/generate-skill', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				projectName: input.projectName,
				projectType: input.projectType,
				projectIdea: input.projectIdea,
				platform: input.platform,
				languages: input.languages,
				constraints: input.constraints,
				lang,
			}),
		});

		const data = await response.json();

		if (!response.ok) {
			state.output.replaceChildren();
			const errorBlock = el('div', { className: 'ai-block ai-block--error' });
			errorBlock.appendChild(el('p', {}, data.error || 'Generation failed.'));
			state.output.appendChild(errorBlock);
			return;
		}

		state.output.replaceChildren();
		const block = el('div', { className: 'file-block' });
		const header = el('div', { className: 'file-block__header' });
		header.appendChild(el('span', { className: 'file-block__label' }, labels.outputLabelFile));
		if (data.model) {
			header.appendChild(el('span', { className: 'file-block__model' }, data.model));
		}
		const body = el('div', { className: 'file-block__body' });
		const pre = el('pre', { className: 'file-block__content' });
		pre.textContent = data.content;
		body.appendChild(pre);
		block.appendChild(header);
		block.appendChild(body);
		state.output.appendChild(block);
		enhancePromptBlocks();
	} catch (error) {
		state.output.replaceChildren();
		const errorBlock = el('div', { className: 'ai-block ai-block--error' });
		errorBlock.appendChild(el('p', {}, isArabic ? 'حدث خطأ غير متوقع.' : 'An unexpected error occurred.'));
		state.output.appendChild(errorBlock);
	}
}

function workflowNav(state: GeneratorState): void {
	const mount = document.getElementById('apf-workflow-nav');
	if (!mount) return;
	const labels = getLabels();
	const isArabic = document.documentElement.lang === 'ar';
	const prefix = isArabic ? '/ar' : '';
	const file = state.file.value();
	const size = readSegmented(state.form, 'size') as ProjectSize;
	const info = FILES[file];

	mount.classList.add('not-content');
	mount.replaceChildren();

	const nav = el('nav', { className: 'apf-workflow-nav', 'aria-label': labels.workflowNav });

	const back = el('div', { className: 'apf-workflow-nav__item' });
	back.appendChild(el('span', { className: 'apf-workflow-nav__label' }, labels.backTo));
	const backLink = el('a', {
		className: 'apf-workflow-nav__link apf-workflow-nav__back-link',
		href: `${prefix}/files/${file}/`,
	});
	backLink.appendChild(el('span', { className: 'apf-workflow-nav__title' }, isArabic ? info.ar : info.en));
	backLink.appendChild(el('span', { className: 'apf-workflow-nav__file' }, info.file));
	back.appendChild(backLink);
	nav.appendChild(back);

	const next = nextFile(size, file);
	if (next) {
		const nextInfo = FILES[next];
		const nextBox = el('div', { className: 'apf-workflow-nav__item' });
		nextBox.appendChild(el('span', { className: 'apf-workflow-nav__label' }, labels.nextRecommended));
		const nextLink = el('a', {
			className: 'apf-workflow-nav__link apf-workflow-nav__next-link',
			href: `${prefix}/files/${next}/`,
		});
		nextLink.appendChild(el('span', { className: 'apf-workflow-nav__title' }, isArabic ? nextInfo.ar : nextInfo.en));
		nextLink.appendChild(el('span', { className: 'apf-workflow-nav__file' }, nextInfo.file));
		nextBox.appendChild(nextLink);
		nextBox.appendChild(el('a', {
			className: 'apf-workflow-nav__gen',
			href: `${prefix}/tools/prompt-generator/?file=${next}&action=create&size=${size}`,
		}, labels.generateItsPrompt));
		nav.appendChild(nextBox);
	}

	mount.appendChild(nav);
}

function init() {
	const root = document.getElementById(GENERATOR_ID);
	if (!root) return;
	if (root.dataset.ready) return;
	root.dataset.ready = 'true';

	const state = buildForm();
	root.appendChild(state.form);

	const renderNav = (): void => workflowNav(state);
	state.form.querySelectorAll<HTMLInputElement>('input[name="size"]').forEach((input) => {
		input.addEventListener('change', renderNav);
	});
	renderNav();

	// Mode toggle change
	state.form.querySelectorAll<HTMLInputElement>('input[name="output-mode"]').forEach((input) => {
		input.addEventListener('change', () => {
			state.updateMode();
		});
	});

	state.file.onChange(() => {
		state.updateMode();
		renderNav();
	});

	state.form.addEventListener('submit', (event) => {
		event.preventDefault();
		if (state.mode === 'file') {
			generateFile(state);
		} else if (state.mode === 'ai') {
			if (state.file.value() === 'skill') {
				generateAISkill(state);
			} else {
				generateAIArchitecture(state);
			}
		} else {
			generatePrompt(state);
		}
		state.output.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
	});

	const params = new URLSearchParams(window.location.search);
	const file = params.get('file');
	const action = params.get('action');
	const size = params.get('size');
	let prefilled = false;

	const setRadio = (name: string, value: string): boolean => {
		const input = state.form.querySelector<HTMLInputElement>(`input[name="${name}"][value="${value}"]`);
		if (!input) return false;
		input.checked = true;
		return true;
	};

	if (size && SIZES.some((s) => s.id === size) && setRadio('size', size)) prefilled = true;
	if (file && FILE_IDS.includes(file as FileId)) {
		state.file.set(file as FileId);
		prefilled = true;
	}
	if (action && ACTIONS.some((a) => a.id === action) && setRadio('action', action)) prefilled = true;

	if (prefilled) {
		state.updateMode();
		if (state.mode === 'file') generateFile(state);
		else generatePrompt(state);
	}
	state.updateMode();
	renderNav();
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', init);
} else {
	init();
}

document.addEventListener('astro:page-load', init);
