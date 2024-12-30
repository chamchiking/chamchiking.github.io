<script>
	import DatedComponent from './Dated_Component.svelte';

	export let education = [
		{
			period: '2023 - Present',
			institution: 'Seoul National University, Seoul, Korea',
			degree: 'M.Sc. in Electrical and Computer Engineering',
			gpa: 'GPA: 3.83/4.3',
			advisors:
				'Advisor: Professor Hyuk Jae Lee, Ph.D.; Secondary Advisor: Xuan Truong Nguyen, Ph.D.'
		},
		{
			period: '2016 - 2023',
			institution: 'Seoul National University, Seoul, Korea',
			degree: 'B.Sc. in Electrical and Computer Engineering',
			gpa: 'GPA: 3.64/4.3 (Cum Laude)'
		}
	];
</script>

<div class="max-w-7xl mx-auto px-4 py-10">
	<div class="text-xl font-bold mb-6">EDUCATION</div>
	<div class="space-y-6">
		{#each education as edu}
			<DatedComponent period={edu.period}>
				<div class="dated-content flex flex-col space-y-1">
					<p class="font-semibold">{edu.institution}</p>
					<p>{edu.degree}</p>
					{#if edu.gpa}<p class="text-gray-500">{edu.gpa}</p>{/if}
					{#if edu.advisors}<p class="text-gray-500">{edu.advisors}</p>{/if}
				</div>
			</DatedComponent>
		{/each}
	</div>
</div>
