<script>
	import projects from '$lib/data/projects.json';
	import ProjectCard from './Project_Card.svelte';
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
				{#if project.publication}
					<a href={`/publications/${project.publication}`} class="block">
						<ProjectCard {project} />
					</a>
				{:else}
					<ProjectCard {project} />
				{/if}
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
