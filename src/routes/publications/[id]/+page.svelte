<script>
	import AuthorCard from '../../../components/Publications/AuthorCard.svelte';

	export let data;
	const { enrichedPublication } = data;
	const authors = enrichedPublication.authors;
</script>

{#if enrichedPublication}
	<div class="max-w-7xl mx-auto px-4 py-10">
		<h1 class="text-3xl font-semibold px-4 pt-5 leading-snug">{enrichedPublication.title}</h1>

		<div class="text-sm text-gray-700 px-4 pt-5">
			<p class="mb-2">
				<strong>Conference:</strong>
				{enrichedPublication.conference}
			</p>
			<p class="mb-2">
				<strong>Status:</strong>
				{enrichedPublication.status || 'N/A'}
			</p>
			<p class="mb-2">
				<strong>Note:</strong>
				{enrichedPublication.note || 'N/A'}
			</p>
		</div>

		<div class="flex flex-wrap justify-center gap-x-8 gap-y-8 pt-24">
			{#each authors as author}
				<AuthorCard {author} />
			{/each}
		</div>

		<div class="text-sm text-gray-700 px-4 pt-5">
			<p class="mb-4">
				<strong>Abstract</strong>
			</p>
			<p>
				{enrichedPublication.abstract}
			</p>
		</div>

		<div class="text-sm text-gray-700 px-4 pt-5">
			<p class="mb-4">
				<strong>Materials</strong>
			</p>
			<div class="flex gap-4 mt-2">
				<a
					href={`/publications/${enrichedPublication.links.pdf}`}
					target="_blank"
					class="flex items-center gap-2 hover:underline"
				>
					<i class="fa-solid fa-file-pdf"></i> <span>PDF</span>
				</a>
				<!-- <a
					href={`/publications/${enrichedPublication.links.pdf}`}
					target="_blank"
					class="flex items-center gap-2 hover:underline"
				>
					<i class="fa-solid fa-file-pdf"></i> <span>PDF</span>
				</a> -->
			</div>
		</div>
	</div>
{:else}
	<p class="text-red-500">Publication not found.</p>
{/if}
