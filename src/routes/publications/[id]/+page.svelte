<script>
	import AuthorCard from '../../../components/Publications/AuthorCard.svelte';

	export let data;
	const { enrichedPublication } = data;
</script>

{#if enrichedPublication}
	<div class="max-w-7xl mx-auto px-4 py-10">
		<h1 class="text-xl font-medium px-4 pt-5 leading-snug">{enrichedPublication.title}</h1>

		<div class="text-sm text-gray-700 px-4 pt-5">
			<p class="mb-2">
				<strong>Conference:</strong>
				{enrichedPublication.conference}
			</p>
			<p class="mb-2">
				<strong>Status:</strong>
				{#if enrichedPublication.status === 'published'}
					<span>published in {enrichedPublication.year}</span>
				{:else if enrichedPublication.status === 'accepted'}
					<span>accepted</span>
				{:else if enrichedPublication.status === 'submitted'}
					<span>submitted</span>
				{:else}
					<span>{enrichedPublication.status}</span>
				{/if}
			</p>
			<p class="mb-2">
				<strong>Note:</strong>
				{enrichedPublication.note || 'N/A'}
			</p>
		</div>

		<!-- Author Cards -->
		<div class="flex flex-wrap justify-center gap-x-4 gap-y-4 pt-24">
			{#each enrichedPublication.authors as author}
				<AuthorCard {author} />
			{/each}
		</div>

		<!-- Abstract -->
		{#if enrichedPublication.abstract}
			<div class="text-sm text-gray-700 px-4 pt-10">
				<p class="mb-4">
					<strong>Abstract</strong>
				</p>
				{@html enrichedPublication.abstract}
			</div>
		{/if}

		<!-- Materials -->
		{#if enrichedPublication.links}
			<div class="text-sm text-gray-700 px-4 pt-10">
				<p class="mb-4">
					<strong>Materials</strong>
				</p>
				<div class="flex gap-4 mt-2">
					<a
						href={`/publications/${enrichedPublication.id}/${enrichedPublication.links.pdf}`}
						target="_blank"
						class="flex items-center gap-2 hover:underline"
					>
						<i class="fa-solid fa-file-pdf"></i> <span>PDF</span>
					</a>
				</div>
			</div>
		{/if}
	</div>
{:else}
	<p class="text-red-500">Publication not found.</p>
{/if}
