<script>
	import projects from '$lib/data/projects.json';
</script>

<div class="max-w-7xl mx-auto px-4 py-10">
	<div class="text-lg mb-6">Recent Projects</div>

	<!-- Auto-Scrolling Horizontal Container -->
	<div class="relative overflow-hidden">
		<div class="flex items-center space-x-6 animate-scroll hover:animate-pause">
			{#each projects.concat(projects) as project, index}
				<div
					class="flex-shrink-0 w-56 bg-white rounded-lg hover:shadow-lg transition transform hover:scale-105"
				>
					<img
						src={project.image}
						alt={project.title}
						class="w-full h-40 object-cover rounded-t-lg"
					/>
					<div class="p-4">
						<h2 class="text-sm font-semibold truncate">{project.title}</h2>
						<p class="text-xs text-gray-600 truncate">{project.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="mt-6 text-right">
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
