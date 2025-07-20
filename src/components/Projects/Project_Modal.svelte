<script>
	export let selectedProject;
	const projectId = selectedProject.id; // Extract project ID from the selected project

	import { createEventDispatcher, onMount, tick } from 'svelte';
	import { marked } from 'marked';
	import DOMPurify from 'dompurify';
	import ProjectModalMaterials from './Project_Modal_Materials.svelte';

	marked.setOptions({
		gfm: true,
		breaks: true
	});

	const dispatch = createEventDispatcher();
	let dialogEl;

	let projectContentHtml = '';
	onMount(async () => {
		const res = await fetch(`/projects/${projectId}/content.md`);
		const raw = await res.text();
		projectContentHtml = DOMPurify.sanitize(marked.parse(raw));

		await tick(); // wait for DOM to update

		// trigger MathJax rendering if loaded
		if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
			window.MathJax.typesetPromise();
		}

		if (dialogEl && !dialogEl.open) {
			dialogEl.showModal(); // open modal after rendering
		}

		console.log('raw: ', raw);
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
	<!-- Project Header -->
	<div class="sticky top-0 bg-white z-10 border-b">
		<!-- Close Button -->
		<button
			class="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
			on:click={handleClose}
			aria-label="Close modal"
			>x
		</button>
		<h2 id="modal-title" class="text-2xl font-bold pt-6 px-6 mb-2">{selectedProject.title}</h2>
		<p class="text-gray-700 px-6 mb-4">{selectedProject.description}</p>
		<!-- Publication Link -->
		{#if selectedProject.publication}
			<ProjectModalMaterials publication_id={selectedProject.publication} />
		{/if}
	</div>

	<!-- Project Content -->
	<hr />
	<div class="px-6 pt-6">
		<div class="prose mb-4">
			{@html projectContentHtml}
		</div>

		<hr />
		<p class="text-gray-800 mt-4 font-medium">[My role in this project]</p>
		<p class="text-gray-600 mb-4">{selectedProject.teamRole}</p>
	</div>
</dialog>
