<script>
	import TitleComponent from './Title_Component.svelte';
	import DatedComponent from './Dated_Component.svelte';

	import publications from '$lib/data/publications.json';

	export let mainAuthor = 'Cha, Mincheol';

	// Group publications by year
	let groupedPublications = publications.reduce((acc, pub) => {
		if (!acc[pub.year]) {
			acc[pub.year] = [];
		}
		acc[pub.year].push(pub);
		return acc;
	}, {});
</script>

<div class="max-w-7xl mx-auto px-4 pt-5">
	<TitleComponent title="PUBLICATIONS" />
	<div class="space-y-6">
		{#each Object.keys(groupedPublications).sort((a, b) => b - a) as year}
			<DatedComponent date={year}>
				<div class="flex flex-col text-sm text-gray-700 space-y-4">
					{#each groupedPublications[year] as { id, title, authors, conference, status, note, links }}
						<div class="flex flex-col space-y-1">
							<p>{title} <strong>[{id}]</strong></p>
							<p>
								{#each authors as author, i}
									{#if i > 0};
									{/if}
									{#if author === mainAuthor}
										<strong>{author}</strong>
									{:else}
										{author}
									{/if}
								{/each}.
							</p>
							<p>
								<em>{conference}</em>. {status ? `${status}.` : ''}
								{note ? `${note}.` : ''}
							</p>
							{#if links}
								<p>
									{#if links.doi}
										<span>[DOI]: {links.doi}</span>
									{/if}
									{#if links.pdf}
										<a href={links.pdf} target="_blank">[PDF]</a>
									{/if}
								</p>
							{/if}
						</div>
					{/each}
				</div>
			</DatedComponent>
		{/each}
	</div>
</div>
