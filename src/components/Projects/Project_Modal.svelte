<script>
	export let selectedProject;
	const projectId = selectedProject.id; // Extract project ID from the selected project

	import { createEventDispatcher, onMount } from 'svelte';
	import { marked } from 'marked';

	const dispatch = createEventDispatcher();
	let dialogEl;

	let projectContentHtml = '';
	onMount(async () => {
		const res = await fetch(`/projects/${projectId}/content.md`);
		const raw = await res.text();

		if (dialogEl && !dialogEl.open) {
			dialogEl.showModal(); // 💡 <dialog> must be opened like this
		}
		projectContentHtml = marked.parse(raw);
		console.log(projectContentHtml);
	});

	function handleClose() {
		dispatch('closeProject');
	}
</script>

<!-- Actual Modal Area -->
<dialog
	bind:this={dialogEl}
	class="z-50 rounded-lg w-full max-w-2xl shadow-xl bg-white"
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
	<h2 id="modal-title" class="text-2xl font-bold pt-6 px-6 mb-2">{selectedProject.title}</h2>
	<p class="text-gray-700 px-6 mb-4">{selectedProject.description}</p>

	<hr />
	<div class="px-6 pt-6">
		<div class="mb-4">
			{@html projectContentHtml}
		</div>

		<hr />
		<p class="text-gray-800 mt-4 font-medium">[My role in this project]</p>
		<p class="text-gray-600 mb-4">{selectedProject.teamRole}</p>
	</div>
</dialog>
