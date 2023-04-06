// importiamo il client
const mongoose = require("mongoose");

//crea una connessione al DB
const connect = async (user, passwd, dbname) => {
    let db;
    try {
        db = await mongoose.connect(
            `mongodb://${user}:${passwd}@mongolo:27017/${dbname}?authSource=admin`
        );
    } catch(e) {
        console.log(e);
        process.exit(0);
    }

    return db;
}

const create_collection = async () => {
    //definiamo lo schema della nostra collezione
    const schema = new mongoose.Schema({ 
                                        nome: "string", 
                                        cognome: "string", 
                                        classe: "number" 
    });

    //creiamo un modello a partire dallo schema
    const studente = mongoose.model("studenti", schema);

    // creiamo la collezione
    let collection = await studente.createCollection();

    return collection;
}

//main 
(async () => {
    // connettiamoci al DB usando le credenziali corrette
    let db = await connect('mongoadmin', 'qwe123', 'studenti');
    
    if(db.connection.readyState == 1)
        console.log("CONNESSIONE AL DB: OK!!!");
    
    // creo una collezione
    let collection = await create_collection();
    console.log("COLLEZIONE CREATA: OK");

    // disconnettiamoci dal DB
    await db.disconnect();
    console.log("DISCONNESSO DAL DB!!!");
    process.exit(0);
})();