import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example.com', // kasnije promijeni na pravi domen
  output: 'server',            // omogućava Cloudflare Functions kada budu trebale
  adapter: cloudflare(),
  integrations: [sitemap()]
});
