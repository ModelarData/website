// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.modelardata.com',
  // GitHub Pages: the deploy workflow sets BASE_PATH ('/website' on the github.io preview, empty with the custom domain).
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  output: 'static',
  // Was a 301 in staticwebapp.config.json; GitHub Pages has no server redirects, so Astro writes a redirect page.
  // Astro does not prefix redirect targets with the base, so add it here.
  redirects: { '/mobile': `${(process.env.BASE_PATH || '').replace(/\/$/, '')}/` },
  integrations: [sitemap()],
  // No inline scripts, so the Content-Security-Policy can stay at script-src 'self'.
  vite: { build: { assetsInlineLimit: 0 } },
});
