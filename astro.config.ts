import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import preact from '@astrojs/preact';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), sitemap(), compress({
    css: false, html: true, img: false, js: false, svg: false, logger: 0
  })],
  site: "https://navostoke.fabon.info"
});
