<script>
	export let project;
</script>

<div
	class="flex-shrink-0 w-56 h-60 bg-white rounded-lg hover:shadow-lg transition transform hover:scale-105"
>
	<!-- Image Container -->
	<div class="flex items-center justify-center h-48 rounded-t-lg">
		{#if project.mainImage && project.image != ''}
			<img
				src={project.mainImage}
				alt={project.title}
				class="object-contain max-h-full max-w-full rounded-lg"
			/>
		{:else}
			<img
				src="/projects/alt_projects.jpg"
				alt="placeholder"
				class="object-contain max-h-full max-w-full rounded-lg"
			/>
		{/if}
	</div>

	<!-- Text -->
	<div class="p-4 text-center">
		<p class="text-xs text-gray-600">{project.shortDescription}</p>
	</div>
</div>
