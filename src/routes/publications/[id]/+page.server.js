// Import the publications data
import publications from '$lib/data/publications.json';

export async function load({ params }) {
	const { id } = params;

	// Find the publication by ID
	const publication = publications.find((pub) => pub.id === id);

	if (!publication) {
		// Optionally return a 404 status and error message
		return {
			status: 404,
			error: new Error(`Publication with ID ${id} not found`)
		};
	}

	return {
		params,
		publication
	};
}
