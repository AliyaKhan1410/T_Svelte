<script>
    export let categories = [];
</script>

<div>
    <h2>Categories</h2>
    <ul>
        {#each categories as category}
            <li>{category}</li>
        {/each}
    </ul>
</div>
