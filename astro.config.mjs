// @ts-check
import { defineConfig } from 'astro/config';
import deno from '@deno/astro-adapter';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: deno(),
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
});
