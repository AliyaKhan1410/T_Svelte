<script>
	import { onMount } from 'svelte';
	import ImageGrid from "./ImageGrid.svelte";

	let products = [];
	let categories = [];
	let loading = true;
	let error = null;

	onMount(async () => {
		try {
			const productResponse = await fetch('https://fakestoreapi.com/products');
			const categoryResponse = await fetch('https://fakestoreapi.com/products/categories');

			if (!productResponse.ok || !categoryResponse.ok) {
				throw new Error('Failed to fetch data');
			}

			const productData = await productResponse.json();
			const categoryData = await categoryResponse.json();

			products = productData;
			categories = categoryData;
			loading = false;
		} catch (err) {
			error = 'Failed to load data. Please try again later.';
			console.error('Error fetching products and categories:', err);
			loading = false;
		}
	});
</script>

{#if loading}
	<p>Loading...</p>
{:else if error}
	<p>{error}</p>
{:else}
	<h2>Categories</h2>
	<ul>
		{#each categories as category}
			<li>{category}</li>
		{/each}
	</ul>
	<ImageGrid {products} />
{/if}
