import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://projects.adityajain.me',
  build: {
    // Match the main portfolio's URL style.
    format: 'file',
  },
  integrations: [sitemap()],
});
