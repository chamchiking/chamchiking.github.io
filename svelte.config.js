import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'none' // Fallback for unmatched routes
		}),
		prerender: {
			entries: ['*'], // Attempt to prerender all pages
			handleHttpError: ({ status, path, referrer }) => {
				if (status === 404) {
					console.warn(`404 error at ${path} (referred from ${referrer})`);
					return;
				}
				throw new Error(`${status} error at ${path}`);
			}
		},
		paths: {
			base: dev ? '' : '/chamchiking.github.io' // Replace with your repository name
		}
	}
};

export default config;
