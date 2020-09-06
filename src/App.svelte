<script>
	import Header from './components/Header.svelte'
	import Board from './components/Board.svelte'

	let columnId = 0
	let boarrId = 0

	let board = [
		{
			id: 1,
			name: "In Progress",
			items: []
		},
		{
			id: 2,
			name: "Pending",
			items: []
		},
		{
			id: 3,
			name: "Done",
			items: []
		}
	];

	function makeNewCard(e){
		const id = e.detail.id
		const pos = e.detail.pos
		const ref = board[id-1].items
		if (pos === "top"){
			board[id-1].items = [{id:columnId++,name:"This is spawned at top"}, ...ref]
		} else{
			board[id-1].items = [...ref, {id:columnId++, name:"This is spawned at bottom"}]
		}
	}
</script>

<Header/>
<Board columnItems={board} on:makeNewCard={makeNewCard}/>