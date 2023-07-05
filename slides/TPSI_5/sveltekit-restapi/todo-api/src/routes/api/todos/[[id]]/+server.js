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
    const sql_azione5 = db.prepare("SELECT * FROM todo WHERE priority = ?;");

    //eseguo la query e creo l'oggetto da restituire
    const exec_query = (azione, param) => {
        //se param è definito o uguale a 0 eseguo quiry con param
        const todo = param || param == 0 ? azione.all(param) : azione.all();
        if (todo.length > 0) 
            return json(todo, { status: 200 });
        else 
            return json({}, { status: 404 });
    };
  
    try {   
        if (params.id) {
            //accedo al DB e prelevo solo il todo con id = params.id
            //se non presente restituisco errore
            return exec_query(sql_azione3, params.id)
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



// export async function POST({ request }) {
//     console.log("Ricevuto HTTP POST");

//     const body = await request.json();
//     console.log("POST BODY:", body);
//     body['id'] = Math.ceil(Math.random() * 100);

//     todos.push(body);

//     //inserisco l'oggetto ToDo ricevuto nel DB
//     return json('OK');
// }

// export async function PUT({ params, request }) {
//     console.log("Ricevuto HTTP PUT con parametro:", params);

//     const body = await request.json();
//     console.log("PUT BODY:", body);

//     //verifico se l'oggetto con id = params.id esiste
//     // in caso affermativo lo aggiorno con l'oggetto nel body
//     //se l'oggetto non esiste nel DB restituisco errore
//     let todo = todos.findIndex(t => t.id == params.id);
//     todos[todo] = body;

//     return json('OK');
// }

// export async function PATCH({ params, request }) {
//     console.log("Ricevuto HTTP PATCH con parametro:", params);

//     let body = await  request.json();

//     //verifico se l'oggetto con id = params.id esiste
//     // in caso affermativo aggiorno il campo presente nel body
//     //se l'oggetto non esiste nel DB restituisco errore
//     let todo = todos.findIndex(t => t.id == params.id);

//     const key  = Object.keys(body);
//     todos[todo][key] = body[key];

//     return json('OK');
// }

// export async function DELETE({ params, request }) {
//     console.log("Ricevuto HTTP DELETE con parametro:", params);

//     //rimuovo l'oggetto con id = params.id dal DB
//     //se non esiste restituisco errore
//     todos = todos.filter(t => t.id != params.id);

//     return json('OK');
// }
