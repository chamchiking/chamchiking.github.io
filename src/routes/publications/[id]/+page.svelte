<script>
    export let data;
  
    // Access the dynamic parameter and the fetched data
    const { id } = data.params;
    const publication = data.publication;
  </script>
  
  <h1>Publication Details</h1>
  
  <p><strong>ID:</strong> {id}</p>
  
  {#if publication}
    <p><strong>Title:</strong> {publication.title}</p>
    <p><strong>Author:</strong> {publication.author}</p>
    <p><strong>Year:</strong> {publication.year}</p>
  {:else}
    <p>No publication found for this ID.</p>
  {/if}
  