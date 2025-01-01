<script>
	import TitleComponent from './Title_Component.svelte';
	import DatedComponent from './Dated_Component.svelte';

	export let languages = [
		{ language: 'English', proficiency: 'Fluent', note: '(TOEFL 105)' },
		{ language: 'Korean', proficiency: 'Native' },
		{ language: 'Chinese', proficiency: 'Basic conversational' }
	];
</script>

<div class="max-w-7xl mx-auto px-4 pt-5">
	<TitleComponent title="LANGUAGES" />
	<div class="space-y-1">
		{#each languages as { language, proficiency, note }}
			<DatedComponent>
				<div class="flex flex-col text-sm text-gray-700 space-y-1">
					<p>
						<strong>{language}:</strong>
						{proficiency}
						{note ? `${note}` : ''}
					</p>
				</div>
			</DatedComponent>
		{/each}
	</div>
</div>
