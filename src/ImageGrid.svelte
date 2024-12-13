<script>
    export let products = []; // Import products as a prop
</script>

<style>
    /* Ensure the grid has 3 columns and responds well on smaller screens */
    .image-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 3 columns */
        gap: 16px; /* Space between grid items */
        padding: 16px;
    }

    /* Responsive behavior for smaller screens */
    @media (max-width: 1200px) {
        .image-grid {
            grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
        }
    }

    @media (max-width: 768px) {
        .image-grid {
            grid-template-columns: 1fr; /* Single column for small screens */
        }
    }

    .product {
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 8px;
        overflow: hidden;
        text-align: center;
        padding: 16px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease; /* Added hover effect */
    }

    /* Hover effect for product cards */
    .product:hover {
        transform: scale(1.05);
    }

    .product-image {
        width: 100%;
        height: auto;
        object-fit: cover;
        margin-bottom: 8px;
        border-radius: 4px;
    }

    .product h3 {
        font-size: 18px;
        color: #333;
        margin: 8px 0;
    }

    .product p {
        font-size: 16px;
        color: #666;
        margin-bottom: 8px;
    }

    .see-more {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 8px 16px;
        cursor: pointer;
        border-radius: 4px;
    }

    .see-more:hover {
        background-color: #0056b3;
    }
</style>

<div class="image-grid">
    {#each products as product}
        <div class="product">
            {#if product.image}
                <img
                        src={product.image}
                alt={product.title}
                class="product-image"
                />
            {/if}
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>
                {product.description.length > 100
                    ? product.description.slice(0, 100) + '...'
                    : product.description}
            </p>
            {#if product.description.length > 100}
                <button class="see-more">See More</button>
            {/if}
        </div>
    {/each}
</div>
