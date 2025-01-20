import adapter from '@sveltejs/adapter-vercel'; // or '@sveltejs/adapter-auto'

export default {
  kit: {
    adapter: adapter(),
  },
};
