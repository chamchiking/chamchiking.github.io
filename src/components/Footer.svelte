<script>
	// Define a specific date
	const updateDate = 'Dec 30, 2024';

	const socialLinks = [
		{
			label: 'LinkedIn',
			href: 'https://linkedin.com/mincheol',
			icon: 'fab fa-linkedin'
		},
		{
			label: 'Facebook',
			href: 'https://facebook.com/mincheol',
			icon: 'fab fa-facebook'
		},
		{
			label: 'Instagram',
			href: 'https://instagram.com/iron_chamchi',
			icon: 'fab fa-instagram'
		}
	];
</script>

<footer class="max-w-7xl mx-auto px-4 py-10 text-sm">
	<hr class="ml-4 border-gray-300 w-10 h-0.5 mb-4" />
	<div class="flex flex-row items-baseline gap-6">
		<!-- Left Section -->
		<div class="flex-4 text-left space-y-1 mr-32">
			<p>Mincheol's theme</p>
			<p class="text-gray-500">Up-to-date as of</p>
			<p>{updateDate}</p>
		</div>

		<!-- Right Section -->
		<div class="flex-8 flex flex-col">
			{#each socialLinks as social}
				<a
					href={social.href}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center text-gray-700"
					aria-label={`Visit ${social.label}`}
				>
					<i class={`${social.icon} mr-2`}></i> <span class="hover:font-bold">{social.label}</span>
				</a>
			{/each}
		</div>
	</div>
</footer>
