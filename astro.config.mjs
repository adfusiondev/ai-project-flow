// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'AI Project Flow',
			favicon: '/favicon.svg',
			customCss: ['/src/styles/custom.css'],
			sidebar: [
				{ label: 'Start Here', link: '/' },
				{
					label: 'Project Lifecycle',
					items: [{ label: 'Overview', slug: 'lifecycle' }],
				},
				{
					label: 'Project Files',
					items: [{ label: 'Overview', slug: 'files' }],
				},
				{
					label: 'Skills',
					items: [{ label: 'Overview', slug: 'skills' }],
				},
				{
					label: 'Commands',
					items: [{ label: 'Overview', slug: 'commands' }],
				},
				{
					label: 'Prompts',
					items: [{ label: 'Overview', slug: 'prompts' }],
				},
				{
					label: 'Verification',
					items: [{ label: 'Overview', slug: 'verification' }],
				},
				{
					label: 'Handoff',
					items: [{ label: 'Overview', slug: 'handoff' }],
				},
				{
					label: 'Reference',
					items: [{ label: 'Overview', slug: 'reference' }],
				},
			],
		}),
	],
});
