<script>
	import DatedDate from './Dated_Date.svelte';
	export let date; // The date to be displayed
</script>

<div class="flex flex-col">
	<div class="flex items-baseline gap-6">
		<!-- Date Section -->
		<DatedDate {date} />
		<!-- Content Section -->
		<div class="flex-1 flex flex-col space-y-1 text-sm leading-6">
			<slot />
		</div>
	</div>
</div>
