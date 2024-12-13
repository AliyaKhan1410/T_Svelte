<script>
    export let product = {};
    export let imageUrl = '';

    // Log any errors related to missing or invalid props
    $: {
        if (!product.name || !product.price) {
            console.error('Missing essential product details:', product);
        }
    }
</script>

<div class="product-card">
    {#if imageUrl}
        <img src={imageUrl} alt={product.name} class="product-image" />
    {/if}
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <span>${product.price}</span>
</div>
