export const prerender = false;

interface SkillInput {
	projectName?: string;
	projectType?: string;
	projectIdea?: string;
	platform?: string;
	languages?: string;
	constraints?: string;
	lang?: 'en' | 'ar';
}

const SYSTEM_PROMPT_EN = `You are a technical writer. Generate a concise, practical SKILL.md file based on the project information provided.

Follow this exact structure:
# Skill

## Purpose
[What this skill does and when to use it.]

## Rules
- [Key rules to follow when using this skill.]

## Output
Create or update:
- [Target file or artifact]

## Quality Gate
Skill is complete when:
- [Criterion 1]
- [Criterion 2]

Rules:
- Do not invent project-specific facts not provided in the inputs.
- Keep the skill generic and reusable.
- Use the project type and constraints to inform the rules.
- Keep it concise and practical.
- Output valid Markdown only.`;

const SYSTEM_PROMPT_AR = `أنت كاتب تقني. أنشئ ملف SKILL.md مختصرًا وعمليًا بناءً على معلومات المشروع المقدمة.

اتبع هذا الهيكل بالضبط:
# مهارة

## الغرض
[ما تفعله هذه المهارة ومتى تستخدمها.]

## القواعد
- [القواعد الرئيسية لاتباعها عند استخدام هذه المهارة.]

## المخرجات
أنشئ أو حدّث:
- [الملف أو الملفات المستهدفة]

## بوابة الجودة
المهارة مكتملة عندما:
- [المعيار 1]
- [المعيار 2]

القواعد:
- لا تخترع حقائق خاصة بالمشروع لم تُقدم في المدخلات.
- اجعل المهارة عامة وقابلة لإعادة الاستخدام.
- استخدم نوع المشروع والقيود لإثراء القواعد.
- كن مختصرًا وعمليًا.
- أخرج Markdown صالح فقط.`;

export async function POST({ request }: { request: Request }): Promise<Response> {
	const headers = {
		'Content-Type': 'application/json',
	};

	try {
		const body = await request.json() as SkillInput;
		const { projectName, projectType, projectIdea, platform, languages, constraints, lang = 'en' } = body;

		const apiKey = import.meta.env.OPENROUTER_API_KEY || process.env.OPENROUTER_API_KEY;
		if (!apiKey) {
			return new Response(
				JSON.stringify({ error: 'AI generation is not configured. OPENROUTER_API_KEY is missing.' }),
				{ status: 503, headers }
			);
		}

		const hasInput = projectType || projectIdea || platform || languages || constraints;
		if (!hasInput) {
			return new Response(
				JSON.stringify({ error: 'Please provide at least one project detail (type, idea, platform, languages, or constraints).' }),
				{ status: 400, headers }
			);
		}

		const inputLines: string[] = [];
		if (projectName) inputLines.push(`Project Name: ${projectName}`);
		if (projectType) inputLines.push(`Project Type: ${projectType}`);
		if (projectIdea) inputLines.push(`Project Idea: ${projectIdea}`);
		if (platform) inputLines.push(`Platform: ${platform}`);
		if (languages) inputLines.push(`Languages/Tech Stack: ${languages}`);
		if (constraints) inputLines.push(`Constraints: ${constraints}`);

		const userMessage = `Generate a SKILL.md for this project:\n\n${inputLines.join('\n')}`;

		const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${apiKey}`,
				'Content-Type': 'application/json',
				'HTTP-Referer': 'https://ai-project-flow.vercel.app',
				'X-Title': 'AI Project Flow',
			},
			body: JSON.stringify({
				model: 'openrouter/free',
				messages: [
					{ role: 'system', content: lang === 'ar' ? SYSTEM_PROMPT_AR : SYSTEM_PROMPT_EN },
					{ role: 'user', content: userMessage },
				],
				temperature: 0.7,
				max_tokens: 1000,
			}),
		});

		if (!response.ok) {
			const errorText = await response.text();
			console.error('OpenRouter API error:', response.status, errorText);
			return new Response(
				JSON.stringify({ error: 'AI generation failed. Please try again.' }),
				{ status: 502, headers }
			);
		}

		const data = await response.json();
		const content = data.choices?.[0]?.message?.content;
		const model = data.model;

		if (!content) {
			return new Response(
				JSON.stringify({ error: 'AI generation returned empty output.' }),
				{ status: 502, headers }
			);
		}

		return new Response(
			JSON.stringify({ content, model }),
			{ status: 200, headers }
		);

	} catch (error) {
		console.error('Skill generation error:', error);
		return new Response(
			JSON.stringify({ error: 'An unexpected error occurred.' }),
			{ status: 500, headers }
		);
	}
}
