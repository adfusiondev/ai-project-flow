export const prerender = false;

interface ArchitectureInput {
	projectName?: string;
	projectType?: string;
	projectIdea?: string;
	platform?: string;
	languages?: string;
	constraints?: string;
	lang?: 'en' | 'ar';
}

const SYSTEM_PROMPT_EN = `You are a technical architect. Generate a concise, practical docs/ARCHITECTURE.md file based on the project information provided.

Follow this exact structure:
# {Project Name} — Architecture

## Purpose
[What this document defines and the principles it follows.]

## Architecture Principles
- [Key principles based on the project type and constraints.]

## Current Application Type
[Application type and what the MVP does not require.]

## Selected Technology
- [Framework / language / tools recommended based on inputs.]

## High-Level Structure
[Simple ASCII diagram showing the component relationships.]

## Rejected Alternatives
- [Common approaches that don't fit this project and why.]

Rules:
- Distinguish known project facts (from inputs) from recommendations.
- Do not present unsupported assumptions as confirmed facts.
- Use the project name in the heading.
- Keep it concise and practical.
- Output valid Markdown only.`;

const SYSTEM_PROMPT_AR = `أنت مهندس معماري تقني. أنشئ ملف docs/ARCHITECTURE.md مختصرًا وعمليًا بناءً على معلومات المشروع المقدمة.

اتبع هذا الهيكل بالضبط:
# {Project Name} — Architecture

## Purpose
[ما يُعرّفه هذا المستند والمبادئ التي يتبعها.]

## Architecture Principles
- [المبادئ الرئيسية بناءً على نوع المشروع والقيود.]

## Current Application Type
[نوع التطبيق وما لا يحتاجه الحد الأدنى للمنتج.]

## Selected Technology
- [التوصيات بالـ framework / اللغة / الأدوات بناءً على المدخلات.]

## High-Level Structure
[مخطط ASCII بسيط يُظهر علاقات المكونات.]

## Rejected Alternatives
- [المناهج الشائعة التي لا تناسب هذا المشروع ولماذا.]

القواعد:
- ميّز بين الحقائق المعروفة (من المدخلات) والتوصيات.
- لا تقدّم افتراضات غير مدعومة كحقائق مؤكدة.
- استخدم اسم المشروع في العنوان.
- كن مختصرًا وعمليًا.
- أخرج Markdown صالح فقط.`;

export async function POST({ request }: { request: Request }): Promise<Response> {
	const headers = {
		'Content-Type': 'application/json',
	};

	try {
		const body = await request.json() as ArchitectureInput;
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

		const userMessage = `Generate a docs/ARCHITECTURE.md for this project:\n\n${inputLines.join('\n')}`;

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
				max_tokens: 1500,
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
		console.error('Architecture generation error:', error);
		return new Response(
			JSON.stringify({ error: 'An unexpected error occurred.' }),
			{ status: 500, headers }
		);
	}
}
