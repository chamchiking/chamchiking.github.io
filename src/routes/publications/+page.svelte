<script>
	import PublicationCard from '../../components/Publications/PublicationCard.svelte';
	import publications from '$lib/data/publications.json';

	// Extract unique years and categories
	const years = [...new Set(publications.map((pub) => pub.year))].sort((a, b) => b - a);
	const categories = ['All', ...new Set(publications.flatMap((pub) => pub.category))];

	// Active category for filtering
	let activeCategory = 'All';

	// Filtered publications
	$: filteredPublications =
		activeCategory === 'All'
			? publications
			: publications.filter((pub) => pub.category.includes(activeCategory));
</script>

<div class="max-w-7xl mx-auto px-4 py-10">
	<div class="text-xl mb-6">Publications</div>

	<!-- Category Filter -->
	<div class="flex flex-wrap justify-center gap-2 mb-6 text-sm">
		{#each categories as category}
			<button
				class="px-4 py-2 {activeCategory === category ? 'underline font-bold' : ''}"
				on:click={() => (activeCategory = category)}
			>
				{category}
			</button>
		{/each}
	</div>

	<!-- Publications Grouped by Year -->
	{#each years as year}
		<div class="mb-10">
			<h2 class="text-xl font-semibold mb-4">{year}</h2>
			<div class="space-y-6">
				{#each filteredPublications.filter((pub) => pub.year === year) as pub}
					<PublicationCard {pub} />
				{/each}
			</div>
		</div>
	{/each}
</div>
