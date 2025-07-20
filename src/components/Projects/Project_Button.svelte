<script>
	export let project;
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('open', project);
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="flex flex-col bg-white rounded-lg shadow-md border border-gray-300 transition transform hover:shadow-lg hover:-translate-y-1 cursor-pointer text-left"
	on:click={handleClick}
>
	<div>
		{#if project.mainImage && project.image != ''}
			<img src={project.mainImage} alt={project.title} class="w-full h-64 object-contain" />
		{:else}
			<img src="/projects/alt_projects.jpg" alt="" class="w-full h-64 object-contain" />
		{/if}
	</div>
	<hr />

	<div class="p-4">
		<h2 class="text-sm font-semibold">{project.title}</h2>
		<p class="text-xs text-gray-600">{project.description}</p>
		<div class="mt-2 flex flex-wrap gap-2">
			{#each project.tags as tag}
				<span class="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded">
					{tag}
				</span>
			{/each}
		</div>
	</div>
</div>
