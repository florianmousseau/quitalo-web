// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/consts.ts';

// Static output, deployed as-is to Cloudflare Pages.
export default defineConfig({
	site: SITE_URL,
	output: 'static',
	trailingSlash: 'ignore',
	// Les CGV portent un `noindex` tant que rien n'est vendu : les laisser dans
	// le sitemap enverrait aux moteurs deux consignes contradictoires.
	integrations: [sitemap({ filter: (page) => !page.endsWith('/cgv') })],
	// 'file' emits /mentions-legales.html served exactly at /mentions-legales:
	// the canonical URL answers 200 directly instead of a 308 to a slashed twin.
	build: { inlineStylesheets: 'auto', format: 'file' },
	compressHTML: true
});
