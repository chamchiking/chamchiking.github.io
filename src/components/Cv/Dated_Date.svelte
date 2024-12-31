<script>
	export let period; // The period (date) to be displayed
</script>

<div class="w-16 text-gray-500 text-xs text-right whitespace-nowrap">
	{#if period}
		{period}
	{/if}
</div>
