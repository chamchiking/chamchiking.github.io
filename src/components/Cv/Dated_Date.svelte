<script>
	export let date; // The date to be displayed
</script>

<div class="w-16 text-gray-500 text-xs text-right whitespace-nowrap">
	{#if date}
		{date}
	{/if}
</div>
