<script>
	import { tags } from '../stores.js';
	import { slide } from 'svelte/transition';

	function deleteTag(id){
		$tags = $tags.filter(tag => tag.id !== id)
	}
</script>

{#each $tags as {id, name}}
	<li transition:slide|local>
		<div class="colorPicker"></div>
		<div>{name}</div>
		<img src="add.png" class="deleteIcon" on:click={()=>deleteTag(id)}>
	</li>
{/each}

<style>
	li{
		list-style: none;
		padding: 0.8rem 0rem;
		width: 100%;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #00000010;
		display: flex;
		align-items: center;
	}

	.colorPicker{
		width: 1rem;
		height: 1rem;
		background: red;
	}

	.deleteIcon{
		cursor: pointer;
		height: 1rem;
		transform: rotate(45deg);
	}
</style>