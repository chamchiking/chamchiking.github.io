<script>
    import { writable } from 'svelte/store';
  
    // Define the links for the navbar
    const links = [
      { href: "/", label: "home" },
      { href: "/publications", label: "publications" },
      { href: "/projects", label: "projects" },
      { href: "/cv", label: "cv" },
    ];
  
    let menuOpen = writable(false);
  </script>
  
  <nav class="bg-white shadow-md fixed top-0 w-full z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <a href="/" class="text-xl font-bold text-gray-800" aria-label="Home">Mincheol Cha</a>
  
        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-6">
          {#each links as link}
            <a
              href={link.href}
              class="text-gray-600 hover:text-gray-800 font-medium transition"
              aria-label={`Go to ${link.label}`}
            >
              {link.label}
            </a>
          {/each}
        </div>
  
        <!-- Mobile Menu Button -->
        <div class="flex md:hidden">
          <button
            type="button"
            class="text-gray-600 hover:text-gray-800 focus:outline-none"
            aria-label="Toggle mobile menu"
            on:click={() => menuOpen.update((v) => !v)}
          >
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  
    <!-- Mobile Dropdown Menu -->
    {#if $menuOpen}
      <div class="md:hidden bg-white shadow-md">
        <div class="px-2 pt-2 pb-3 space-y-1">
          {#each links as link}
            <a
              href={link.href}
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition"
              aria-label={`Go to ${link.label}`}
            >
              {link.label}
            </a>
          {/each}
        </div>
      </div>
    {/if}
  </nav>
  