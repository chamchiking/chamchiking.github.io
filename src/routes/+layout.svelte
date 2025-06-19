<script>
	import '../app.css';
	let { children } = $props();
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="min-h-screen flex flex-col">
	<Navbar />

	<div class="pt-16 flex-1">
		{@render children()}
		<Footer />
	</div>
</div>
