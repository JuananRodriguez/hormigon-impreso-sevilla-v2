// @ts-check
import { defineConfig } from 'astro/config';
import deno from '@deno/astro-adapter';
import fulldev from 'fulldev-ui/integration';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: deno(),
	site: 'https://hormigonimpresosevilla.es/',
	integrations: [mdx(), sitemap(), fulldev({
		// css: '/src/css/custom.css',
		colors: {
			theme: 'dark',
			dark: {
				background: '#111110',
				base: '#6F6D66',
				brand: '#058cb9',
			},
			light: {
				background: '#EEEEEC',
				base: '#6F6D66',
				brand: '#058cb9',
			},
		},
	}),],
});
