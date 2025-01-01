<script>
	import projects from '$lib/data/projects.json';

	let selectedProject = null; // Holds the currently selected project

	function openModal(project) {
		selectedProject = project; // Set the selected project
	}

	function closeModal() {
		selectedProject = null; // Clear the selected project
	}
</script>

<div class="max-w-7xl mx-auto px-4 py-10">
	<div class="text-xl mb-6">Projects</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
		{#each projects as project}
			<button
				type="button"
				class="block w-full bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer text-left"
				on:click={() => openModal(project)}
			>
				<img
					src={project.image}
					alt={project.title}
					class="w-full h-48 object-cover rounded-t-lg"
				/>
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
			</button>
		{/each}
	</div>

	{#if selectedProject}
		<!-- Modal -->
		<div
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title"
			class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
			on:click={closeModal}
		>
			<div
				class="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4 p-6 relative"
				on:click|stopPropagation
			>
				<!-- Close button -->
				<button
					type="button"
					class="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
					on:click={closeModal}
				>
					✕
				</button>

				<!-- Project Details -->
				<h2 id="modal-title" class="text-2xl font-bold mb-2">{selectedProject.title}</h2>
				<p class="text-gray-700 mb-4">{selectedProject.description}</p>

				<!-- Diagram -->
				{#if selectedProject.diagram}
					<img
						src={selectedProject.diagram}
						alt="Diagram for {selectedProject.title}"
						class="w-full h-auto rounded-lg mb-4"
					/>
				{/if}

				<!-- Long Description -->
				<p class="text-gray-600 mb-4">{selectedProject.longDescription}</p>

				<!-- Team Role -->
				<p class="text-gray-800 font-medium">[My role in this project]</p>
				<p class="text-gray-600 mb-4">{selectedProject.teamRole}</p>

				<div class="flex flex-wrap gap-2">
					{#each selectedProject.tags as tag}
						<span class="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded">
							{tag}
						</span>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</div>
