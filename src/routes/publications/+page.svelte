<script>
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
					<div class="space-y-2 border-b border-gray-200 pb-4">
						<!-- Title -->
						<a
							href={`/publications/${pub.id}`}
							class="text-lg font-medium text-black hover:underline"
						>
							{pub.title}
						</a>
						<!-- Authors -->
						<p class="text-sm text-gray-600">
							{#each pub.authors as author, index}
								<span class={author === 'Cha, Mincheol' ? 'font-bold' : ''}>
									{author}
								</span>
								<span>
									{index < pub.authors.length - 1
										? index < pub.authors.length - 2
											? ', '
											: ' and '
										: ''}
								</span>
							{/each}
						</p>
						<!-- Conference -->
						<p class="text-sm text-gray-500">
							{pub.conference}
							{#if pub.note}
								[{pub.note}]
							{/if}
						</p>
						<!-- Links -->
						<div class="flex gap-4 mt-2">
							{#if pub.links.project}
								<a
									href={pub.links.project}
									target="_blank"
									class="flex items-center gap-2 hover:underline"
								>
									<i class="fa-solid fa-external-link-alt"></i> <span>Project</span>
								</a>
							{/if}
							{#if pub.links.pdf}
								<a
									href={`/publications/${pub.links.pdf}`}
									target="_blank"
									class="flex items-center gap-2 hover:underline"
								>
									<i class="fa-solid fa-file-pdf"></i> <span>PDF</span>
								</a>
							{/if}
							{#if pub.links.video}
								<a
									href={pub.links.video}
									target="_blank"
									class="flex items-center gap-2 hover:underline"
								>
									<i class="fa-solid fa-play"></i> <span>Video</span>
								</a>
							{/if}
							{#if pub.links.demo}
								<a
									href={pub.links.demo}
									target="_blank"
									class="flex items-center gap-2 hover:underline"
								>
									<i class="fa-solid fa-play"></i> <span>Demo</span>
								</a>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>
