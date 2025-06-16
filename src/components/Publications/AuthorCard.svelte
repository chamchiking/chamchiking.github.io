<script>
	export let author;

	// Choose wrapper tag and props based on presence of link
	const tag = author.link ? 'a' : 'div';
	const tagProps = author.link
		? { href: author.link, target: '_blank', rel: 'noopener noreferrer' }
		: {};
</script>

<svelte:element this={tag} {...tagProps} class="text-center block w-40">
	<div
		class="w-24 h-24 rounded-full mx-auto bg-cover bg-center shadow"
		style="background-image: url({author.img})"
	></div>
	<p class="mt-2 text-sm font-medium">{author.name}</p>
	<p class="text-xs text-gray-500">{author.affiliation}</p>
</svelte:element>
