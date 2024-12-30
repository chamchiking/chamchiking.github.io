<script>
	import DatedDate from './Dated_Date.svelte';
	export let period; // The period (date) to be displayed
</script>

<div class="dated-entry grid grid-cols-[max-content_auto] gap-4 items-start">
	<DatedDate {period} />
	<div class="dated-content flex flex-col space-y-1">
		<slot />
		<!-- Slot for dynamically injected content -->
	</div>
</div>
