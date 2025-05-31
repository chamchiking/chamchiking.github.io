<script>
	import projects from '$lib/data/projects.json';
</script>

<div class="max-w-7xl mx-auto px-4 py-10">
	<div class="text-lg mb-6">Recent Projects</div>

	<!-- Auto-Scrolling Horizontal Container -->
	<div class="relative overflow-hidden">
		<!-- Optional: fade effect -->
		<div
			class="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10"
		></div>
		<div
			class="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10"
		></div>

		<div class="mt-6 mb-6 flex items-center space-x-6 animate-scroll hover:animate-pause">
			{#each projects.concat(projects) as project, index}
				<div
					class="flex-shrink-0 w-56 h-60 bg-white rounded-lg hover:shadow-lg transition transform hover:scale-105"
				>
					{#if project.mainImage && project.image != ''}
						<img
							src={project.mainImage}
							alt={project.title}
							class="w-full h-30 object-cover rounded-t-lg"
						/>
					{:else}
						<img
							src="/projects/alt_projects.jpg"
							alt=""
							class="w-full h-30 object-cover rounded-t-lg"
						/>
					{/if}

					<div class="p-4 text-center">
						<!-- <h2 class="text-sm font-semibold">{project.title}</h2> -->
						<!-- <p class="text-xs text-gray-600">{project.description}</p> -->
						<p class="text-xs text-gray-600">{project.shortDescription}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="text-right">
		<a href="/projects" class="hover:underline text-base text-xs"> > View All </a>
	</div>
</div>

<style>
	/* Horizontal scrolling animation */
	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	/* Base scrolling animation */
	.animate-scroll {
		display: inline-flex;
		animation: scroll 100s linear infinite; /* Adjust time for slower/faster scroll */
		width: max-content;
	}

	/* Pause animation on hover */
	.hover\:animate-pause:hover {
		animation-play-state: paused;
	}
</style>
