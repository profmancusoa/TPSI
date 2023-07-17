const TODOS_URL = 'http://localhost:5173/api/todos';


export async function get_all_todos() {
    const response = await fetch(TODOS_URL);
    return await response.json();
}

export async function create_todo(todo) {
    const response = await fetch(TODOS_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(todo)
    });

    if(response.ok) {
        return await response.json();
    } 
} 

export async function update_todo(todo) {
    const response = await fetch(`${TODOS_URL}/${todo.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(todo)
    });

    if(response.ok) {
        return await response.json();
    } 
} 

export async function remove_todo(id) {
    const response = await fetch(`${TODOS_URL}/${id}`, {
        method: 'DELETE'
    });

    return response.ok;
} 
