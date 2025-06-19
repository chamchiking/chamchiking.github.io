<script>
	export let pub;
</script>

<div class="space-y-2 border-b border-gray-200 pb-4">
	<!-- Title -->
	<a href={`/publications/${pub.id}`} class="text-lg font-medium text-black hover:underline">
		{pub.title}
	</a>
	<!-- Authors -->
	<p class="text-sm text-gray-600">
		{#each pub.authors as author, index}
			<span class={author.name === 'Mincheol Cha' ? 'font-bold' : ''}>
				{author.name}
			</span>
			<span>
				{index < pub.authors.length - 1 ? (index < pub.authors.length - 2 ? ', ' : ' and ') : ''}
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
			<a href={pub.links.project} target="_blank" class="flex items-center gap-2 hover:underline">
				<i class="fa-solid fa-external-link-alt"></i> <span>Project</span>
			</a>
		{/if}

		{#if pub.links.pdf}
			<a
				href={`/publications/${pub.id}/${pub.links.pdf}`}
				target="_blank"
				class="flex items-center gap-2 hover:underline"
			>
				<i class="fa-solid fa-file-pdf"></i> <span>PDF</span>
			</a>
		{/if}

		{#if pub.links.video}
			<a href={pub.links.video} target="_blank" class="flex items-center gap-2 hover:underline">
				<i class="fa-solid fa-play"></i> <span>Video</span>
			</a>
		{/if}

		{#if pub.links.demo}
			<a href={pub.links.demo} target="_blank" class="flex items-center gap-2 hover:underline">
				<i class="fa-solid fa-play"></i> <span>Demo</span>
			</a>
		{/if}
	</div>
</div>
