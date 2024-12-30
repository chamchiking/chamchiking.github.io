<script>
  export let projects = [
    { title: "VPU Acceleration", description: "Improved softmax by 50% on FPGA.", link: "/projects/vpu" },
    { title: "CIS-DVS Fusion", description: "Developed a high-speed fusion system for object detection.", link: "/projects/cis-dvs" },
  ];
</script>

<section class="max-w-4xl mx-auto py-16">
  <h1 class="text-4xl font-bold mb-8">Projects</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each projects as project}
      <a href={project.link} class="p-4 border rounded-lg hover:shadow-lg">
        <h2 class="text-2xl font-semibold">{project.title}</h2>
        <p class="text-gray-500">{project.description}</p>
      </a>
    {/each}
  </div>
</section>
