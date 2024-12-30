<script>
  export let bio = "I'm an engineer specializing in SoC design, FPGA development, and AI systems.";
  export let interests = ["HLS", "Domain-Specific Accelerators", "Autonomous Driving"];
</script>
  
<section class="max-w-4xl mx-auto py-16">
  <h1 class="text-4xl font-bold mb-8">About Me</h1>
  <p class="text-lg leading-relaxed mb-6">{bio}</p>
  <h2 class="text-2xl font-semibold mb-4">Interests</h2>
  <ul class="list-disc pl-6">
    {#each interests as interest}
      <li class="text-lg">{interest}</li>
    {/each}
  </ul>
</section>
  