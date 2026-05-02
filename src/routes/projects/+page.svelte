<script>
	import projects from '$lib/data/projects.json';
	import ProjectButton from '../../components/Projects/Project_Button.svelte';
	import ProjectModal from '../../components/Projects/Project_Modal.svelte';

	let selectedProject = null; // Holds the currently selected project

	function openModal(project) {
		selectedProject = project;
	}

	function closeModal() {
		selectedProject = null; // Clear the selected project
	}
</script>

<svelte:head>
	<title>Projects — Mincheol Cha</title>
	<meta
		name="description"
		content="Hardware and ML projects by Mincheol Cha: FPGA accelerators (Winograd CNN, transformer vector engine), DVS-CIS sensor fusion, MIPI controllers, and more."
	/>
	<meta property="og:title" content="Projects — Mincheol Cha" />
	<meta property="og:url" content="https://chamchiking.github.io/projects" />
	<link rel="canonical" href="https://chamchiking.github.io/projects" />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 py-10">
	<div class="text-xl mb-6">Projects</div>

	<!-- Projects Button List -->
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
		{#each projects as project}
			<ProjectButton {project} on:open={() => openModal(project)} />
		{/each}
	</div>

	{#if selectedProject}
		<ProjectModal {selectedProject} on:closeProject={() => closeModal()} />
	{/if}
</div>
