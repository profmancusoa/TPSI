<script>
    import {
      Page,
      Navbar,
      NavTitle,
      NavRight,
      Link
    } from 'framework7-svelte';
  
    import TodoList from '../components/todo_list.svelte';
    let todo_list; //referenza al componente ToDo List

  </script>

<Page name="home">
    <!-- Top Navbar -->
    <Navbar>
        <NavTitle>ToDoS Mobile</NavTitle>
        <NavRight>
            <Link iconF7="plus_rectangle" text="ToDo" color="green" onClick={() => todo_list.create_todo()}></Link>
        </NavRight>
    </Navbar>
    
    <!-- Page content -->
    <TodoList bind:this={todo_list}/>
</Page>

