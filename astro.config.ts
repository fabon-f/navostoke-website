import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), compress({
    css: false, html: true, img: false, js: false, svg: false, logger: 0
  })],
  site: "https://navostoke.fabon.info"
});
