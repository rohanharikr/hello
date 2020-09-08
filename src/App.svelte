<script>
	import Header from './components/Header.svelte'
	import Board from './components/Board.svelte'

	let columnId = 0
	let cardId = 0

	// let board = [
	// 	{
	// 		id: 1,
	// 		name: "In Progress",
	// 		items: []
	// 	},
	// 	{
	// 		id: 2,
	// 		name: "Pending",
	// 		items: []
	// 	},
	// 	{
	// 		id: 3,
	// 		name: "Done",
	// 		items: []
	// 	}
	// ];

	// let board = []

	// $: console.log(board)

	// function makeNewCard(e){
	// 	const id = e.detail.id
	// 	const pos = e.detail.pos
	// 	const ref = board[id].items
	// 	if (pos === "top"){
	// 		board[id].items = [{id:cardId++, name: "give me a name"}, ...ref]
	// 	} else{
	// 		board[id].items = [...ref, {id:cardId++, name: "give me a name"}]
	// 	}
	// }

	// function newColumn(){
	// 	board = [...board, {id: columnId++, name:"No name", items: []}]
	// }

	// function updateColumnName(e){
	// 	board[e.detail.colId].name = e.detail.newColName
	// }
</script>

<!-- <Header on:newColumn={newColumn}/> -->
<Header/>
<!-- <Board columnItems={board} on:makeNewCard={makeNewCard} on:updatecolumnName={updateColumnName}/> -->
<Board/>