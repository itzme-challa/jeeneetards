import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  build: {
    outDir: '.svelte-kit/output/client',
  },
  server: {
    fs: {
      allow: ['src'],
    },
  },
};

export default config;
