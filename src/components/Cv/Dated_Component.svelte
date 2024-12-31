<script>
	import DatedDate from './Dated_Date.svelte';
	export let period; // The period (date) to be displayed
</script>

<div class="flex flex-col gap-6">
	<div class="flex items-baseline gap-6">
		<!-- Date Section -->
		<DatedDate {period} />
		<!-- Content Section -->
		<div class="flex-1 flex flex-col space-y-1 text-sm leading-6">
			<slot />
		</div>
	</div>
</div>
