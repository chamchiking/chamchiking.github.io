<script>
	import TitleComponent from './Title_Component.svelte';
	import DatedComponent from './Dated_Component.svelte';

	import patents from '$lib/data/patents.json';
</script>

<div class="max-w-7xl mx-auto px-4 pt-5">
	<TitleComponent title="PATENTS" />
	<div class="space-y-6">
		{#each patents as { id, title, country, patent_number, status, date_filed }}
			<DatedComponent date={date_filed}>
				<div class="flex flex-col text-sm text-gray-700 space-y-4">
					<div class="flex flex-col space-y-1">
						<p>
							{title} <strong>[{id}]</strong>
						</p>
						<p class="text-xs">
							<strong>Country:</strong>
							{country.join(', ')} <br />
							<strong>Patent Number:</strong>
							{patent_number} <br />
							<strong>Status:</strong>
							{status}
						</p>
					</div>
				</div>
			</DatedComponent>
		{/each}
	</div>
</div>
