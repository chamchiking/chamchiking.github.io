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
			{#each selectedProject.contents as cont}
				<!-- text -->
				{#if cont.type === 'text'}
					<p class="text-gray-800 mb-2">{cont.body}</p>
				{:else if cont.type === 'img'}
					<img
						src={cont.src}
						alt={cont.alt}
						class="rounded-lg mx-auto mb-8"
						style={`width: ${cont.width}`}
					/>
				{:else if cont.type === 'video'}
					<video controls class="w-full rounded-lg mb-8">
						<source src={cont.src} type="video/mp4" />
						<track kind="captions" src={cont.captions} srclang="en" label="English captions" />
						Your browser does not support the video tag.
					</video>
				{:else if cont.type === 'link'}
					<a href={cont.href} class="text-blue-600 hover:underline" target="_blank">
						{cont.body}
					</a>
				{/if}
			{/each}
		</div>

		<hr />
		<p class="text-gray-800 mt-4 font-medium">[My role in this project]</p>
		<p class="text-gray-600 mb-4">{selectedProject.teamRole}</p>
	</div>
</dialog>
