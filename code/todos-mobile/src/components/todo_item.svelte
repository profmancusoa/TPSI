<script>
    import { ListItem, 
             SwipeoutActions, 
             SwipeoutButton 
           } from 'framework7-svelte';
    
    import Priority from './priority.svelte';
    import { createEventDispatcher } from "svelte";

    export let todo;
    const dispatch = createEventDispatcher();

    const item_change = (type) => {
        console.log(type)
        dispatch('change', { type: type, id: todo.id });
    }

    const change_prio = (p) => {
        todo.priority = p;
        item_change('update');
    }

    const toggle_status = () => {
        todo.done = !todo.done;
        item_change('update');
    }
</script>

<ListItem swipeout>
    <input slot="title"
        type="text" 
        class="{todo.done == true ? 'text-done' : ''}" 
        placeholder="Inserisci il nuovo ToDo" 
        id="1" 
        bind:value={todo.task} 
        on:change={() => item_change('update')}
    />
    <Priority slot="after" bind:priority={todo.priority}/>
    <SwipeoutActions left>
        <SwipeoutButton close color="green" onClick={() => change_prio(3)}>BASSA</SwipeoutButton>
        <SwipeoutButton close color="yellow" onClick={() => change_prio(2)}>MEDIA</SwipeoutButton>
        <SwipeoutButton close color="red" onClick={() => change_prio(1)}>ALTA</SwipeoutButton>
    </SwipeoutActions>
    <SwipeoutActions right>
        {#if todo.done == true}
            <SwipeoutButton close color="yellow" onClick={toggle_status}>In Progress</SwipeoutButton>
        {:else}
            <SwipeoutButton close color="green" onClick={toggle_status}>Done</SwipeoutButton>
        {/if}
        <SwipeoutButton close color="red" onClick={() => item_change('delete')}>Delete</SwipeoutButton>
      </SwipeoutActions> 
</ListItem>

<style>
    .text-done {
        text-decoration: line-through;
        opacity: 0.5;
    }
</style>