// // import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static';

// const dev = process.env.NODE_ENV === 'development';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
// 		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
// 		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
// 		adapter: adapter({
// 			pages: 'build',
// 			assets: 'build',
// 			fallback: null // No fallback file since we are prerendering all routes
// 		}),
// 		prerender: {
// 			entries: ['*'] // Prerender all pages, including dynamic ones
// 		},
// 		paths: {
// 			base: dev ? '' : '/chamchiking.github.io' // Replace with your repo name
// 		}
// 	}
// };

// export default config;

import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	base: '/chamchiking.github.io/', // Replace <repository-name> with your GitHub repository name
	plugins: [svelte()]
});
