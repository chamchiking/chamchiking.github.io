<script>
	export let period;
</script>

<div class="dated-date text-gray-600 text-sm">
	{#if period}
		{period}
	{:else}
		<span>No period provided</span>
	{/if}
</div>
