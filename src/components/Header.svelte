<script>
	import TagManager from './TagManager.svelte'
	import Settings from './Settings.svelte'

	let isTagManager = false, 
	isSettings = false
</script>

<header class="shadow">
	<li>hello board</li>
	<ul>
		<li on:click={()=>{isTagManager = !isTagManager; isSettings = false}}>manage tags</li>
		<li on:click={()=>{isSettings = !isSettings; isTagManager = false}}>settings</li>
	</ul>
</header>

{#if isTagManager}
	<TagManager/>	
{:else if isSettings}
	<Settings/>
{/if}

<style>
	header{
		height: 3rem;
		background: white;
		display: flex;
		align-items: center;
		padding: 0 2rem;
		font-weight: 600;
		justify-content: space-between;
	}
	li{
		list-style: none;
	}

	ul li{
		display: inline-block;
		margin-left: 0.8rem;
	}
</style>