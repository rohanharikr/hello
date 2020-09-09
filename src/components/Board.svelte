<script>
    import { flip } from 'svelte/animate';
    import { dndzone } from 'svelte-dnd-action';
    import { createEventDispatcher } from 'svelte';

    let columnItems = []

    const dispatch = createEventDispatcher();
    const flipDurationMs = 300;
    function handleDndConsiderColumns(e) {
        columnItems = e.detail.items;
    }
    function handleDndFinalizeColumns(e) {
        columnItems = e.detail.items;
    }
    function handleDndConsiderCards(cid, e) {
        const colIdx = columnItems.findIndex(c => c.id === cid);
        columnItems[colIdx].items = e.detail.items;
        columnItems = [...columnItems];
    }
    function handleDndFinalizeCards(cid, e) {
        const colIdx = columnItems.findIndex(c => c.id === cid);
        columnItems[colIdx].items = e.detail.items;
        columnItems = [...columnItems];
    }
    function handleClick(e) {
        // alert('dragabble elements are still clickable :)');
    }
    
    let columnId = 0
    let cardId = 0

    function newColumn(){
        columnItems = [...columnItems, {id: columnId++, name:"No name", items: []}]
        console.log(columnId);
    }
    function addNewCard(id, pos){
         // find specific id in array
         let idInArray = columnItems.findIndex(x => x.id === id)
         let ref = columnItems[idInArray].items
         if (pos === 'top'){
            columnItems[idInArray].items = [{id: cardId++, name: "Rohan"}, ...ref]
         } else {
            columnItems[idInArray].items = [...ref, {id: cardId++, name: "Rohan"}]
         }

    }
</script>
<div on:click={newColumn}>add new column</div>
<section class="board" use:dndzone={{items:columnItems, flipDurationMs, type:'columns'}} on:consider={handleDndConsiderColumns} on:finalize={handleDndFinalizeColumns}>
    {#each columnItems as column (column.id)}
        <div class="column"
             animate:flip="{{duration: flipDurationMs}}">
            <div class="column-title">
                <input class="column-name" bind:value={column.name} on:keyup={()=>dispatch("updatecolumnName",{colId: column.id, newColName: column.name})}/>
                <div class="column-actions">
                    <li on:click={()=>addNewCard(column.id, 'top')} class="addNewCardIcon">
                        <img src="add.png">
                    </li>
                    <li></li>
                </div>
            </div>
            <div class="column-content" use:dndzone={{items:column.items, flipDurationMs}}
                 on:consider={(e) => handleDndConsiderCards(column.id, e)} on:finalize={(e) => handleDndFinalizeCards(column.id, e)}>
                {#each column.items as item (item.id)}
                    <div class="card shadow" animate:flip="{{duration: flipDurationMs}}" on:click={handleClick}>
                        <div class="tags">
                            <li>Design</li>
                        </div>
                        <div class="card-content">{item.name}</div>
                        <div class="card-content">
                        </div>
                    </div>
                {/each}
            </div>
            <!-- <div class="new-task" on:click={()=>{dispatch("makeNewCard", {id: column.id, pos: "bot"})}}>Add new card</div> -->
            <div class="new-task" on:click={()=>addNewCard(column.id)}>Add new card</div>
        </div>
    {/each}
</section>

<style>
    .board {
        height: calc(100% - 8rem);
        /*width: 100%;*/
        padding: 0.5em;
    }
    .column {
        min-height: 10rem;
        width: 18rem;
        background: var(--column);
        margin: 1em;
        border-radius: 1rem;
        float: left;
        /*Notice we make sure this container doesn't scroll so that the title stays on top and the dndzone inside is scrollable*/
        overflow-y: hidden;
    }
    .tags{
        display: flex;
        list-style: none;
    }
    .column-name{
        width: 11rem;
        font-weight: 500;
    }
    .addNewCardIcon{
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .addNewCardIcon img{
        height: 1rem;
        opacity: 0.6;
    }
    .tags li{
        list-style: none;
        background: var(--blue-bg);
        color: var(--blue-txt);
        padding: 0.2rem;
        margin-right: 0.4rem;
        font-weight: 500;
        border-radius: 0.2rem;
        margin-bottom: 1rem;
    }
    .new-task{
        background: var(--new-card);
        margin: 1rem;
        height: 2.6rem;
        /*card already has a margin of 1rem*/
        margin-top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;
        cursor: pointer;
    }

    .column-content {
        scrollbar-width: none;
        min-height: 10rem;
        /* Notice that the scroll container needs to be the dndzone if you want dragging near the edge to trigger scrolling */
        overflow-y: scroll;
    }
    .column-title {
        display: flex;
        align-items: center;
        margin-top: 1rem;
        padding: 0 1rem;
        font-weight: 500;
        justify-content: space-between;
    }
    .column-actions{
        display: flex;
    }
    .column-actions li{
        list-style: none;
        background: var(--new-card);
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        margin-left: 0.2rem;
    }
    .card {
        min-height: 6rem;
        background: white;
        border-radius: 0.5rem;
        margin: 1rem;
        padding: 1rem;
    }
</style>