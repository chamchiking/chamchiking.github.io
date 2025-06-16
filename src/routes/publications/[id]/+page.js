export const prerender = true;

// Import the JSON data
import publications from '$lib/data/publications.json';
import authors from '$lib/data/authors.json';

// List all dynamic routes for prerendering
export async function entries() {
	return publications.map((publication) => ({
		id: publication.id
	}));
}

// Load the data for the specific route
export async function load({ params }) {
	const { id } = params;

	// Find the publication by ID
	const publication = publications.find((pub) => pub.id === id);

	if (!publication) {
		// Return a 404 status if publication not found
		return {
			status: 404,
			error: new Error(`Publication with ID ${id} not found`)
		};
	}

	const enrichedAuthors = publication.authors.map((p) => {
		const authorInfo = authors.find((a) => a.id === p.id);

		// Base enriched object
		const enriched = {
			...p,
			img: authorInfo?.img || '/imgs/person-dummy.jpg'
		};

		// Conditionally add 'link' only if it exists
		if (authorInfo?.link) {
			enriched.link = authorInfo.link;
		}

		// Conditionally add 'affiliation' only if it exists
		if (authorInfo?.affiliation) {
			enriched.affiliation = authorInfo.affiliation;
		}

		return enriched;
	});

	// Replace authors with enriched version
	const enrichedPublication = {
		...publication,
		authors: enrichedAuthors
	};
	console.log(enrichedPublication);

	return { enrichedPublication };
}
