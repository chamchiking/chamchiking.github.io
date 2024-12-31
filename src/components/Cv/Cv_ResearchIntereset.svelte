<script>
	import TitleComponent from './Title_Component.svelte';
	import DatedComponent from './Dated_Component.svelte';

	export let researchInterests = [
		{
			category: '1. High-Performance Reconfigurable Computing',
			items: ['FPGA', 'Computer architecture', 'System on Chip (SoC)']
		},
		{
			category: '2. Sensor Technologies',
			items: ['Dynamic Vision Sensors (DVS)', 'Sensor fusion']
		},
		{
			category: '3. Machine Learning and System',
			items: ['ML algorithm/system co-design', '3D Network']
		},
		{
			category: '4. Electronic Design Automation (EDA)',
			items: ['High-level synthesis (HLS)', 'Physical design']
		}
	];
</script>

<div class="max-w-7xl mx-auto px-4 pt-5">
	<TitleComponent title="RESEARCH INTERESTS" />
	<div class="space-y-6">
		<DatedComponent>
			{#each researchInterests as interest}
				<div class="pt-1">
					<p class="text-sm">{interest.category}</p>
					<div class="flex flex-wrap text-xs text-gray-700">
						<p>
							{#each interest.items as item}
								{item},
							{/each}
						</p>
					</div>
				</div>
			{/each}
		</DatedComponent>
	</div>
</div>
