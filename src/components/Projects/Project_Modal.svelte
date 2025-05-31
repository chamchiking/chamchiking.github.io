<script>
	export let selectedProject;
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();
	let dialogEl;

	onMount(() => {
		if (dialogEl && !dialogEl.open) {
			dialogEl.showModal(); // 💡 <dialog> must be opened like this
		}
	});

	function handleClose() {
		dispatch('closeProject');
	}
</script>

<!-- Actual Modal Area -->
<dialog
	bind:this={dialogEl}
	class="z-50 rounded-lg w-full max-w-2xl shadow-xl p-6 bg-white"
	on:close={handleClose}
	aria-labelledby="modal-title"
>
	<!-- Close Button -->
	<button
		class="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
		on:click={handleClose}
		aria-label="Close modal"
	>
		x
	</button>

	<!-- Project Content -->
	<h2 id="modal-title" class="text-2xl font-bold mb-2">{selectedProject.title}</h2>
	<p class="text-gray-700 mb-4">{selectedProject.description}</p>

	{#if selectedProject.diagram}
		<img
			src={selectedProject.diagram}
			alt="Diagram for {selectedProject.title}"
			class="w-full h-auto rounded-lg mb-4"
		/>
	{/if}

	<p class="text-gray-600 mb-4">{selectedProject.longDescription}</p>

	<p class="text-gray-800 font-medium">[My role in this project]</p>
	<p class="text-gray-600 mb-4">{selectedProject.teamRole}</p>

	<div class="flex flex-wrap gap-2">
		{#each selectedProject.tags as tag}
			<span class="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded">
				{tag}
			</span>
		{/each}
	</div>
</dialog>
