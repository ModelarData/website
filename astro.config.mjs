// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.modelardata.com',
  trailingSlash: 'always',
  output: 'static',
  integrations: [sitemap()],
  // No inline scripts, so the Content-Security-Policy can stay at script-src 'self'.
  vite: { build: { assetsInlineLimit: 0 } },
});
