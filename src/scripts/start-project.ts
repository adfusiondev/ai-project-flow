import {
	FILES,
	FLOW_ORDER,
	LEVEL_LABELS,
	SIZES,
	fileLevel,
	type FileId,
	type FileLevel,
	type ProjectSize,
} from './prompt-data.js';

const ROOT_ID = 'project-start';

interface StartLabels {
	chooseSize: string;
	hint: string;
	startHere: string;
	startHereCta: string;
	generate: string;
	levels: Record<FileLevel, string>;
	listLabel: string;
}

const EN: StartLabels = {
	chooseSize: 'Choose a project size',
	hint: SIZES.map((s) => `${s.en} — ${FLOW_ORDER[s.id].length} files`).join(' · '),
	startHere: 'Start here',
	startHereCta: 'Generate the prompt',
	generate: 'Generate prompt',
	levels: {
		core: 'Required',
		recommended: 'Recommended',
		optional: 'Optional',
		skip: 'Skip',
	},
	listLabel: 'Recommended file sequence',
};

const AR: StartLabels = {
	chooseSize: 'اختر حجم المشروع',
	hint: SIZES.map((s) => `${s.ar} — ${FLOW_ORDER[s.id].length} ملفات`).join(' · '),
	startHere: 'ابدأ من هنا',
	startHereCta: 'إنشاء المطالبة',
	generate: 'إنشاء المطالبة',
	levels: {
		core: 'أساسي',
		recommended: 'موصى به',
		optional: 'اختياري',
		skip: 'لا حاجة له',
	},
	listLabel: 'التسلسل الموصى به للملفات',
};

function getLabels(): StartLabels {
	return document.documentElement.lang === 'ar' ? AR : EN;
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

function generatorUrl(file: FileId, size: ProjectSize): string {
	const base = document.documentElement.lang === 'ar' ? '/ar/tools/prompt-generator/' : '/tools/prompt-generator/';
	return `${base}?file=${file}&action=create&size=${size}`;
}

function render() {
	const root = document.getElementById(ROOT_ID);
	if (!root || root.dataset.ready) return;
	root.dataset.ready = 'true';
	root.classList.add('not-content');

	const labels = getLabels();
	const isArabic = document.documentElement.lang === 'ar';
	let size: ProjectSize = 'small';

	root.replaceChildren();

	root.appendChild(el('p', { className: 'apf-start__choose' }, labels.chooseSize));

	const seg = el('div', { className: 'apf-generator__seg', role: 'radiogroup' });
	for (const option of SIZES) {
		const item = el('label', { className: 'apf-generator__seg-item' });
		const input = el('input', {
			type: 'radio',
			name: 'start-size',
			className: 'apf-generator__seg-input',
			value: option.id,
		});
		if (option.id === size) input.checked = true;
		input.addEventListener('change', () => {
			size = option.id;
			renderList();
		});
		item.appendChild(input);
		item.appendChild(el('span', { className: 'apf-generator__seg-label' }, isArabic ? option.ar : option.en));
		seg.appendChild(item);
	}
	root.appendChild(seg);

	root.appendChild(el('p', { className: 'apf-start__hint' }, labels.hint));

	const list = el('div', { className: 'apf-start__list', role: 'list', 'aria-label': labels.listLabel });
	root.appendChild(list);

	function renderList() {
		list.replaceChildren();
		FLOW_ORDER[size].forEach((fileId, index) => {
			const info = FILES[fileId];
			const level = fileLevel(size, fileId);
			const isFirst = index === 0;

			const row = el('div', {
				className: `apf-start__row${isFirst ? ' apf-start__row--start' : ''}`,
				role: 'listitem',
			});
			row.appendChild(el('span', { className: 'apf-start__index' }, String(index + 1)));

			const infoBox = el('div', { className: 'apf-start__info' });
			const head = el('div', { className: 'apf-start__head' });
			if (isFirst) head.appendChild(el('span', { className: 'apf-start__badge' }, labels.startHere));
			head.appendChild(el('span', { className: 'apf-start__name' }, isArabic ? info.ar : info.en));
			head.appendChild(el('code', { className: 'apf-start__file' }, info.file));
			infoBox.appendChild(head);

			const meta = el('div', { className: 'apf-start__meta' });
			meta.appendChild(el('span', { className: `apf-start__level apf-start__level--${level}` }, labels.levels[level]));
			meta.appendChild(el('p', { className: 'apf-start__purpose' }, isArabic ? info.purpose.ar : info.purpose.en));
			infoBox.appendChild(meta);

			row.appendChild(infoBox);
			row.appendChild(
				el('a', {
					className: `apf-action${isFirst ? ' apf-action--primary' : ''} apf-start__gen`,
					href: generatorUrl(fileId, size),
				}, isFirst ? labels.startHereCta : labels.generate),
			);
			list.appendChild(row);
		});
	}

	renderList();
}

function init() {
	render();
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', init);
} else {
	init();
}

document.addEventListener('astro:page-load', init);
