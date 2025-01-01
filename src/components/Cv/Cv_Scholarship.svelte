<script>
	import TitleComponent from './Title_Component.svelte';
	import DatedComponent from './Dated_Component.svelte';

	export let scholarships = [
		{ description: 'BK21 Scholarship, M.Sc. at Seoul National University', date: 'Dec 2023' },
		{
			description: 'University Merit Scholarship for Academic Excellence, M.Sc.',
			date: 'Dec 2023'
		},
		{
			description: 'University Merit Scholarship for Academic Excellence, B.Sc. (4 semesters)',
			date: '2016 - 2021'
		}
	];
</script>

<div class="max-w-7xl mx-auto px-4 pt-5">
	<TitleComponent title="SCHOLARSHIPS" />
	<div class="space-y-1">
		{#each scholarships as { description, date }}
			<DatedComponent {date}>
				<div class="flex flex-col text-sm text-gray-700 space-y-4">
					<p>{description}</p>
				</div>
			</DatedComponent>
		{/each}
	</div>
</div>
