<script>
	import publications from '$lib/data/publications.json';

	export let publication_id;
	const publication = publications.find((p) => p.id === publication_id);
</script>

<div class="px-6 mb-4">
	<a
		href={`/publications/${publication.id}/${publication.links.pdf}`}
		target="_blank"
		class="flex items-center gap-2 hover:underline"
	>
		<i class="fa-solid fa-file-pdf"></i> <span>Paper</span>
	</a>
</div>
