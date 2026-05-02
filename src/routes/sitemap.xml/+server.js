import publications from '$lib/data/publications.json';

const SITE = 'https://chamchiking.github.io';

const STATIC_ROUTES = ['/', '/publications', '/projects', '/cv'];

export const prerender = true;

export async function GET() {
	const today = new Date().toISOString().slice(0, 10);

	const urls = [
		...STATIC_ROUTES.map((path) => ({ loc: `${SITE}${path}`, lastmod: today })),
		...publications.map((pub) => ({
			loc: `${SITE}/publications/${pub.id}`,
			lastmod: today
		}))
	];

	const body =
		`<?xml version="1.0" encoding="UTF-8"?>\n` +
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
		urls
			.map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n  </url>`)
			.join('\n') +
		`\n</urlset>\n`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
