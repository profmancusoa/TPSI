<script>
    import Icon from "./icon.svelte";
    import TodoItem from "./todo_item.svelte";
    import { onMount } from "svelte";
    import * as api from '../js/todos_api';

    let todos = []; //ToDoList
    let last_id = 0;

    let todo = { //ToDo Item
        id: last_id,
        task: "",
        done: false,
        priority: 3
    };

    const create_todo = async () => {
        todo = {
            id: ++last_id,
            task: "",
            done: false,
            priority: 3
        };
        console.log("CREATE:", todo);

        const api_todo = await api.create_todo(todo);
        if(api_todo) {
            //aggiorno la ToDoList
            todos =  [...todos, api_todo];
        } else {
           console.log("ERRORE: IMPOSSIBILE CREARE IL TODO");
        }
    }

    const change_todo_item = async (e) => {
        console.log(e)
        switch(e.detail.type) {
            case 'update':
                update_item(e.detail.id);
                break;
            case 'delete':
                delete_item(e.detail.id);
                break;
        }
    }

    const update_item = async (id) => {
        console.log("UPDATE:", id);

        const todo = todos.filter(t => t.id == id)[0];
        if(!await api.update_todo(todo)) {
            console.log("ERRORE: IMPOSSIBILE AGGIORNARE IL TODO");
        }
    }

    const delete_item = async (id) => {
        console.log("DELETE:", id);
        todos = todos.filter(t => t.id != id);

        if(!await api.remove_todo(id)) {
            console.log("ERRORE: IMPOSSIBILE RIMUOVERE IL TODO");
        }
    }

    onMount(async () => {
        todos = await api.get_all_todos();

        const keyn = todos.length;
        if(keyn >= last_id)
            last_id = keyn;
    });
</script>

<h1 class="app-title">ToDos</h1>
<div class="todo-list">
    <div class="header"><Icon name="tag" /></div>
    <div class="header"><Icon name="task_alt" /></div>
    <div class="header"><Icon name="list" /></div>
    <div class="header"><Icon name="schedule" /></div>
    <div class="header header-last"><Icon name="add_box" handler={create_todo}/></div>

    <!-- ToDo Items -->
    {#each todos as todo}
        <TodoItem todo={todo} on:change={change_todo_item}/>
    {/each}
</div>

<style>
    /* importo il font per il titolo */
    @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
    

    .app-title {
        font-family: 'Permanent Marker', cursive;
        margin-top: 0px;
        font-size: 60px;
        opacity: 0.3;
    }

    .todo-list {
        display: grid;
        grid-template-columns: 1fr 1fr 4fr 2fr 1fr;
        border: 0px solid blue;
        width: 95%;
        margin: auto;
    }

    .header {
        border-bottom: 1px solid #E7ECEE;
        border-right: 1px solid #E7ECEE;
        text-align: center;
        padding-bottom: 20px;
    }
    
    .header-last {
        border-right: none;
    }
</style>