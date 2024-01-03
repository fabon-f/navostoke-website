import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import preact from '@astrojs/preact';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), sitemap(), compress({
    CSS: false, HTML: true, Image: false, JavaScript: false, SVG: false, Logger: 0
  })],
  site: "https://navostoke.fabon.info"
});
