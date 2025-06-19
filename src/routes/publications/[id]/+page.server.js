export const prerender = true;

// Import the JSON data
import publications from '$lib/data/publications.json';
import authors from '$lib/data/authors.json';
import { error } from '@sveltejs/kit';
import fs from 'fs/promises';
import path from 'path';
import { marked } from 'marked';

// import { marked } from 'marked'; // markdown parser

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
		throw error(404, `Publication with ID ${params.id} not found`);
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

	// Read and parse Markdown content
	let contentHtml = '';
	try {
		const contentPath = path.resolve('static/publications', id, 'content.md');
		const contentMd = await fs.readFile(contentPath, 'utf-8');
		contentHtml = marked.parse(contentMd);
	} catch (e) {
		console.warn(`Markdown content for ${id} not found`);
		contentHtml = null;
	}

	// Read and parse Markdown abstract
	let abstractHtml = '';
	try {
		const abstractPath = path.resolve('static/publications', id, 'abstract.md');
		const abstractMd = await fs.readFile(abstractPath, 'utf-8');
		abstractHtml = marked.parse(abstractMd);
	} catch (e) {
		console.warn(`Markdown abstract for ${id} not found`);
		abstractHtml = null;
	}

	const enrichedPublication = {
		...publication,
		authors: enrichedAuthors,
		content: contentHtml,
		abstract: abstractHtml
	};

	return { enrichedPublication };
}
