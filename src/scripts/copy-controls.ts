const FEEDBACK_DURATION = 2000;

function getLabels() {
	const isArabic = document.documentElement.lang === 'ar';
	return {
		default: isArabic ? 'نسخ' : 'Copy',
		copied: isArabic ? 'تم النسخ!' : 'Copied!',
		failed: isArabic ? 'فشل النسخ' : 'Copy failed',
		ariaLabel: isArabic ? 'نسخ المطالبة' : 'Copy prompt',
	};
}

function copyText(text: string): Promise<void> {
	if (navigator.clipboard && window.isSecureContext) {
		return navigator.clipboard.writeText(text);
	}
	return new Promise<void>((resolve, reject) => {
		const textarea = document.createElement('textarea');
		textarea.value = text;
		textarea.setAttribute('readonly', '');
		textarea.style.position = 'absolute';
		textarea.style.left = '-9999px';
		document.body.appendChild(textarea);
		textarea.select();
		textarea.setSelectionRange(0, textarea.value.length);
		try {
			const ok = document.execCommand('copy');
			ok ? resolve() : reject(new Error('Copy command failed'));
		} catch (error) {
			reject(error);
		} finally {
			document.body.removeChild(textarea);
		}
	});
}

function resetButton(button: HTMLButtonElement) {
	const labels = getLabels();
	button.textContent = labels.default;
	button.setAttribute('aria-label', labels.ariaLabel);
	button.classList.remove('is-copied');
}

function showFeedback(button: HTMLButtonElement, label: string) {
	button.textContent = label;
	button.setAttribute('aria-label', label);
	button.classList.add('is-copied');
	window.setTimeout(() => resetButton(button), FEEDBACK_DURATION);
}

function enhancePromptBlocks() {
	const blocks = document.querySelectorAll<HTMLElement>('.prompt-block');
	blocks.forEach((block) => {
		if (block.querySelector('.copy-control')) return;
		const header = block.querySelector<HTMLElement>('.prompt-block__header');
		const body = block.querySelector<HTMLElement>('.prompt-block__body');
		if (!header || !body) return;
		const button = document.createElement('button');
		button.type = 'button';
		button.className = 'copy-control';
		
		const labels = getLabels();
		button.textContent = labels.default;
		button.setAttribute('aria-label', labels.ariaLabel);
		
		button.addEventListener('click', () => {
			const currentLabels = getLabels();
			copyText(body.innerText.trim())
				.then(() => showFeedback(button, currentLabels.copied))
				.catch(() => showFeedback(button, currentLabels.failed));
		});
		header.appendChild(button);
	});
}

function init() {
	enhancePromptBlocks();
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', init);
} else {
	init();
}

document.addEventListener('astro:page-load', init);
