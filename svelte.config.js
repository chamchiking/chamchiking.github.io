import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html' // Fallback for unmatched routes
		}),
		prerender: {
			entries: ['*'] // Attempt to prerender all pages
		},
		paths: {
			base: dev ? '' : '/chamchiking.github.io' // Replace with your repository name
		}
	}
};

export default config;