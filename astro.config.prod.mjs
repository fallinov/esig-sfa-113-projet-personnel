import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fallinov.github.io',
  base: '/esig-sfa-113-projet-personnel/',
  output: 'static',
  build: {
    assets: 'assets'
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  }
});
