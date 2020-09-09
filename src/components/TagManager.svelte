<script>
	import Tag from './Tag.svelte';
	import { tags } from '../stores.js';

	let tagId = 0

	function createTag(){
		$tags = [...$tags, {id: tagId++, name: "Obama"}]
	}
</script>

<main class="shadow">
	<ul>
		<Tag/>
	</ul>
	<div class="newTag" on:click={createTag}>Click to create</div>
</main>

<style>
	main{
		position: fixed;
		background: white;
		width: 14rem;
		height: auto;
		right: 6.8rem;
		color: var(--main-black);
		margin-top: 0.8rem;
		border-radius: 1rem;
		padding: 1rem;
	}

	ul{
		margin: 0;
		padding: 0;
	}

	.newTag{
        background: var(--new-card);
        height: 2.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;
        cursor: pointer;
        margin-top: 1rem;
	}
</style>