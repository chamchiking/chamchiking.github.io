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
	class="flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer text-left"
	on:click={handleClick}
>
	{#if project.mainImage && project.image != ''}
		<img src={project.mainImage} alt={project.title} class="w-full object-cover rounded-t-lg" />
	{:else}
		<img src="/projects/alt_projects.jpg" alt="" class="w-full object-cover rounded-t-lg" />
	{/if}

	<div class="p-4">
		<h2 class="text-lg font-semibold">{project.title}</h2>
		<p class="text-sm text-gray-600">{project.description}</p>
		<div class="mt-2 flex flex-wrap gap-2">
			{#each project.tags as tag}
				<span class="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded">
					{tag}
				</span>
			{/each}
		</div>
	</div>
</div>
