<script>
    import TodoItem from "./todo_item.svelte";
    import { List } from 'framework7-svelte'; 
    import { onMount } from "svelte";

    let todos = []; //ToDoList
    let last_id = 0;

    let todo = { //ToDo Item
        id: last_id,
        task: "",
        done: false,
        priority: 3
    };

    export function create_todo() {
        todo = {
            id: ++last_id,
            task: "",
            done: false,
            priority: 3
        };
        console.log("CREATE:", todo);

        //inserisco il nuoto todo nel localStroage
        localStorage.setItem(`todo${todo.id}`, JSON.stringify(todo));

        //aggiorno la ToDoList
        todos =  [...todos, todo];
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

    const update_item = (id) => {
        console.log("UPDATE:", id);

        //aggiorno il localstroage
        const todo = todos.filter(t => t.id == id)[0];
        localStorage.setItem(`todo${id}`, JSON.stringify(todo));
    }

    const delete_item = (id) => {
        console.log("DELETE:", id);
        todos = todos.filter(t => t.id != id);

        //rimuovo il todo dal localStorage
        localStorage.removeItem(`todo${id}`);
    }

    onMount(async () => {
        for(let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const keyn = +key.substring(4);

            if(keyn >= last_id)
                last_id = keyn;
            
            const todo = JSON.parse(localStorage.getItem(key));
            if (todo != null)
                todos.push(todo);
        }

        //faccio vedere a Svelte le modifiche a todos
        todos = [...todos];
    });
</script>

<List insetMd>
    {#each todos as todo}
        <TodoItem todo={todo} on:change={change_todo_item}/>
    {/each}
</List>