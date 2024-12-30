export const prerender = true;

// Import the JSON data
import publications from '$lib/data/publications.json';

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

	return { publication };
}
