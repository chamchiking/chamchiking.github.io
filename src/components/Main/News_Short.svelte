<script>
	import newsItems from '$lib/data/news.json';

	// Limit the number of news items to display
	const limitedNews = newsItems.slice(0, 4);
</script>

<div class="max-w-7xl mx-auto px-4 py-10">
	<div class="text-lg mb-6">News</div>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		{#each limitedNews as news}
			<div class="space-y-2">
				<h2 class="text-sm font-semibold">{news.title}</h2>
				<p class="text-sm text-gray-500">{news.date}</p>
				<p class="text-sm">{news.description}</p>
				<hr class="mt-4 border-t border-gray-300" />
			</div>
		{/each}
	</div>
	<div class="mt-6 text-right">
		<a href="/news" class="hover:underline text-base text-xs"> > View All </a>
	</div>
</div>
