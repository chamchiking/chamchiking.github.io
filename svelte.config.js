import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined // Fallback for unmatched routes
		}),
		prerender: {
			entries: ['*'] // Attempt to prerender all pages
		},
		paths: {
			base: ''
		}
	}
};

export default config;
