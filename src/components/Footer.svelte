<script>
    // Define a specific date
    const updateDate = 'Dec 30, 2024';
  
    const socialLinks = [
      { label: 'LinkedIn', href: 'https://linkedin.com/mincheol', icon: '🔗' },
      { label: 'Facebook', href: 'https://facebook.com/mincheol', icon: '🌐' },
      { label: 'Instagram', href: 'https://instagram.com/iron_chamchi', icon: '📸' }
    ];
</script>
  

<footer class="max-w-7xl mx-auto px-4 py-10">
    <hr style="margin-left: 15px; color: #000 !important; background-color: #000 !important; opacity: 1 !important; width: 40px; height: .5px !important; margin-bottom: 1rem !important;">
    <div class="flex md:flex-row md:items-center gap-6">
        <div class="flex-4 text-center md:text-left">
            <p class="footer-text">
                Mincheol's theme
            </p>
            <p>
                Up-to-date as of
            </p> 
            <p>
                {updateDate}
            </p>
        </div>
        
        <div class="flex-8">
            <p>
                {#each socialLinks as social}
                    <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="footer-text"
                    aria-label={`Visit ${social.label}`}
                    style="margin-right: 10.5px"
                    >
                    <span>{social.icon}</span>
                    <span>{social.label}</span>
                    </a><br>
                {/each}
            </p>
        </div>
    </div>
</footer>