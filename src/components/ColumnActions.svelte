<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher()
</script>

<ul class="columnActions shadow">
	<li on:click={()=>dispatch("duplicate")}>Duplicate</li>
	<li on:click={()=>dispatch("delete")}>Delete</li>
</ul>

<style>
	.columnActions{
		position: absolute;
		right: 0;
		top: 2.6rem;
		text-align: right;
		background: white;
		padding: 1rem;
		border-radius: 0.5rem;
	}

	.columnActions li{
		padding: 0.4rem 0;
	}
</style>