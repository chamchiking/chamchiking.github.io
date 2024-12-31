<script>
	export let data;

	const { publication } = data;
</script>

{#if publication}
	<div class="max-w-4xl mx-auto py-10">
		<h1 class="text-3xl font-bold mb-4">{publication.title}</h1>
		<p class="text-lg text-gray-700">{publication.authors}</p>
	</div>
{:else}
	<p class="text-red-500">Publication not found.</p>
{/if}
