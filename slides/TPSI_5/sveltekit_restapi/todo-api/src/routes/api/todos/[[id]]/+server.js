import { error } from "@sveltejs/kit";
import { json } from "@sveltejs/kit";
import Database from "better-sqlite3"; //npm install better-sqlite3

//creo la connessione al DB
const db = new Database("TODO.db", { verbose: console.log });

export async function GET({ params, request, url }) {
  console.log("Ricevuto HTTP GET con parametro:", params);

  //definisco gli statement (query) per l'esecuzione
  //? rappresenta un parametro della query
  const sql_azione2 = db.prepare("SELECT * FROM todo");
  const sql_azione3 = db.prepare("SELECT * FROM todo WHERE id= ?");
  const sql_azione4 = db.prepare("SELECT * FROM todo WHERE done = ?");
  const sql_azione5 = db.prepare("SELECT * FROM todo WHERE priority = ?");

  //eseguo la query e creo l'oggetto da restituire
  const exec_query = (azione, param) => {
    //se param è definito o uguale a 0 eseguo quiry con param
    const todo = param || param == 0 ? azione.all(param) : azione.all();
    if (todo.length > 0) return json(todo, { status: 200 });
    else return json({}, { status: 404 });
  };

  try {
    if (params.id) {
      //accedo al DB e prelevo solo il todo con id = params.id
      //se non presente restituisco errore
      return exec_query(sql_azione3, params.id);
    }
    //accedo al DB e prelevo solo il todo filtrati per priority
    if (url.searchParams.has("priority")) {
      return exec_query(sql_azione5, +url.searchParams.get("priority"));
    }
    //accedo al DB e prelevo solo il todo filtrati per stato
    if (url.searchParams.has("done")) {
      return exec_query(sql_azione4, +JSON.parse(url.searchParams.get("done")));
    }
    //accedo al DB e prelevo tutti i todo dal DB
    return exec_query(sql_azione2);
  } catch (e) {
    //in tutti gli altri casi errore interno
    return json({}, { status: 500 });
  }
}

export async function POST({ request }) {
  try {
    const body = await request.json();
    console.log("Ricevuto HTTP POST con body:", body);

    //insert statement da eseguire
    const sql_azione1 = db.prepare(
      "INSERT INTO todo (task, done, priority) VALUES(@task , @done, @priority)"
    );

    //eseguo al query con i valori del body
    const res = sql_azione1.run({
      task: body.task,
      done: +body.done,
      priority: +body.priority,
    });

    //se c'è una modifica tutto ok
    if (res.changes == 1) {
      //aggiungo all'oggetto inserito l'id generato dal DB
      body["id"] = res.lastInsertRowid;
      return json(body, { 
        status: 201, 
        headers: new Headers({"Location": `http://localhost:5173/api/todos/${body["id"]}`}) 
      });
    }
  } catch (e) {
    console.log(e)
    //in tutti gli altri casi errore interno
    return json({}, { status: 500 });
  }
}

export async function PUT({ params, request }) {
  try {
    const body = await request.json();
    console.log("Ricevuto HTTP PUT con parametro:", params);
    console.log("PUT BODY:", body);

    //update statement da eseguire
    const sql_azione6 = db.prepare(
      "UPDATE todo SET task = @task,  done = @done,  priority = @priority WHERE id = @id"
    );

    //eseguo al query con i valori del body
    const res = sql_azione6.run({
      id: +params.id,
      task: body.task,
      done: +body.done,
      priority: +body.priority,
    });

    console.log(res);
    //se c'è una modifica tutto ok
    if (res.changes == 0) 
        return json({}, { status: 404 });
    else if (res.changes == 1) 
        return json(body, { status: 200});
  } catch (e) {
    //in tutti gli altri casi errore interno
    return json({}, { status: 500 });
  }
}

export async function PATCH({ params, request }) {
  try {
    const body = await request.json();
    console.log("Ricevuto HTTP PATCH con parametro:", params);
    console.log("PUT BODY:", body);

    //update statement da eseguire
    const sql_azione7 = db.prepare("UPDATE todo SET task = @task WHERE id = @id");
    const sql_azione8 = db.prepare("UPDATE todo SET priority = @priority WHERE id = @id");
    const sql_azione9 = db.prepare("UPDATE todo SET done = @done WHERE id = @id");
    const sql_get_todo = db.prepare("SELECT * FROM todo WHERE id= ?");

    let key = Object.keys(body)[0]; //campo da aggiornare 
    let res; //risultato query
    switch(key) {
        case 'task':
            res = sql_azione7.run({
                id: +params.id,
                task: body.task
            });
            break;
        case 'priority':
            res = sql_azione8.run({
                id: +params.id,
                priority: +body.priority
            });
            break;
        case 'done':
            res = sql_azione9.run({
                id: +params.id,
                done: body.done
            });
            break;
        default:
            return json({}, { status: 500 });
    }
    
    //se c'è una modifica tutto ok
    if (res.changes == 0) 
        return json({}, { status: 404 });
    else if (res.changes == 1) {
        const todo = sql_get_todo.all(+params.id);
        return json(todo, { status: 200 });
    }
  } catch (e) {
    console.log(e)
    //in tutti gli altri casi errore interno
    return json({}, { status: 500 });
  }
}

export async function DELETE({ params, request }) {
    try {
        console.log("Ricevuto HTTP DELETE con parametro:", params);

        //delete statement da eseguire
        //rimuovo l'oggetto con id = params.id dal DB
        const sql_azione10 = db.prepare("DELETE FROM todo WHERE id = @id");
        const res = sql_azione10.run({ id: +params.id });

        //se non esiste restituisco errore
        if (res.changes == 0) 
            return json({}, { status: 404 });
        else if (res.changes == 1) {
            //non c'è un body quindi non possiamo usare json()
            return new Response(null, { status: 204});
        }
    } catch (e) {
        //in tutti gli altri casi errore interno
        return json({}, { status: 500 });
    }
}

export async function OPTIONS({ request }) {
    return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
    });
}