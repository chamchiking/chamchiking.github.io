<script>
	import TitleComponent from './Title_Component.svelte';
	import DatedComponent from './Dated_Component.svelte';

	export let education = [
		{
			period: '2023 - ',
			institution: 'Seoul National University, Seoul, Korea',
			degree: 'M.Sc. in Electrical and Computer Engineering',
			advisors: 'Advisor: Professor Hyuk Jae Lee, Ph.D.;'
		},
		{
			period: '2016 - 2023',
			institution: 'Seoul National University, Seoul, Korea',
			degree: 'B.Sc. in Electrical and Computer Engineering',
			advisors: ''
		}
	];
</script>

<div class="max-w-7xl mx-auto px-4 pt-5">
	<TitleComponent title={'EDUCATION'} />
	<div class="space-y-6">
		{#each education as edu}
			<DatedComponent date={edu.period}>
				<p class="font-semibold">{edu.institution}</p>
				<p>{edu.degree}</p>
				{#if edu.advisors}<p class="text-gray-500">{edu.advisors}</p>{/if}
			</DatedComponent>
		{/each}
	</div>
</div>
