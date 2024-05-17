---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
#background: https://source.unsplash.com/collection/94734566/1920x1080
background: /assets/intro01.jpg
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
#highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
aspectRatio: '16_/9'
routerMode: 'hash'
materia: TPSI 5
as: 2022/2023
version: '1.1.0'

---  

# TPSI 5

I Data Base NoSQL

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

---

# NoSQL

Intro

- Il settore dell'informatica è da sempre legato all'uso dei DB Relazionali (RDBMS)
- Questa tecnologia è stata ed è tuttora utilissima in moltissimi scenatri e tipi di applicazioni
- Tuttavia l'avvento del Web e le necessarie caratteristiche di dinamicità hanno messo in luce le forti limitazioni dei DB Relazionali
- Le applicazioni Web richiedono un ambiente più dinamico, meno rigido, più facilmente  modificabile
- La scalabilità su vasta scala è un fattore importante
  

<img src="/media/nosql_01.png" width="400" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# NoSQL

Intro

- Per decenni, il modello di dati predominante, utilizzato per lo sviluppo delle applicazioni, è stato il modello dei dati relazionale utilizzato dai database relazionali quali Oracle, DB2, SQL Server, MySQL e PostgreSQL. 
- Fu solo a partire dalla seconda metà del 2000 che si iniziò a utilizzare in modo significativo altri modelli di dati. 
- Per differenziare e categorizzare queste nuove classi di database e di modelli di dati fu coniato il termine “NoSQL”. 
- Spesso il termine “NoSQL” viene usato in alternativa a “non relazionale”.


---

# NoSQL

Intro

- Sono state effettuate ricerche per valutare i pro e i contro di un database SQL/NoSQL ed è emerso che non sempre i DBMS tradizionali si dimostrano in grado di gestire quantità di dati molto grandi, se non al prezzo di performance molto più limitate e costi piuttosto elevati. Qui di seguito sono stati raccolti alcuni punti di debolezza ravvisati nell’uso dei DBMS relazionali:
  - Join: nonostante la loro efficacia, queste operazioni coinvolgono spesso più righe del necessario (soprattutto se le query non sono ottimizzate), limitando le performance delle interrogazioni eseguite
  - Struttura rigida delle tabelle, che si rivela utile finché si ha necessità di introdurre informazioni caratterizzate sempre dalle medesime proprietà, ma molto meno efficiente per informazioni di natura eterogenea
  - Conflitto di impedenza, che consiste nella differenza strutturale tra i record delle tabelle e gli oggetti comunemente utilizzati per gestire i dati nei software che interagiscono con le basi di dati. Questo problema ha prodotto, tra l’altro, la nascita di strumenti come gli `ORM`, librerie in grado di convertire oggetti in record (e viceversa)

---

# NoSQL

Intro

 - Proprietà ACID: ogni transazione deve essere atomica, consistente, isolata.
  

<img src="/media/nosql_02.png" width="400" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# NoSQL

Intro

- **Atomicità**: il processo deve essere suddivisibile in un numero finito di unità indivisibili, chiamate transazioni. L'esecuzione di una transazione perciò deve essere per definizione o totale o nulla, e non sono ammesse esecuzioni parziali
- **Coerenza**: il database rispetta i vincoli di integrità, sia a inizio che a fine transazione. Non devono verificarsi contraddizioni (incoerenza dei dati) tra i dati archiviati nel DB
- **Isolamento**: ogni transazione deve essere eseguita in modo isolato e indipendente dalle altre transazioni, l'eventuale fallimento di una transazione non deve interferire con le altre transazioni in esecuzione;
- **Durevolezza**: detta anche persistenza, si riferisce al fatto che una volta che una transazione abbia richiesto un commit work, i cambiamenti apportati non dovranno essere più persi. Per evitare che nel lasso di tempo fra il momento in cui la base di dati si impegna a scrivere le modifiche e quello in cui li scrive effettivamente si verifichino perdite di dati dovuti a malfunzionamenti, vengono tenuti dei registri di log dove sono annotate tutte le operazioni sul DB.

---

# NoSQL

Intro

- Un RDBMS per garantire e implementare le proprietà ACID, ricorrea una serie di controlli e precauzioni che penalizzano le prestazioni del sistema stesso.
- Pertanto "l'acidità" di un DB Relazionale è un punto di forza, che lo rende adatto a determinati tipi did applicazione (prenotazione biglietti aerei), e allo stesso tempo è una debolezza che lo rende inadatto al mondo delle applicazioni web (social network)
- I database non relazionali o `NoSQL` sono meno stringenti e non ACID, offrendo una maggiore elasticità e scalabilità
 
<img src="/media/nosql_03.png" width="350" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# NoSQL

Intro

Ma quindi cos'è un DB NoSQL?

- Un DB NoSQL è un Data Base che non utilizza un modello di dati relazionale
- E' appositamente realizzato per modelli di dati fluidi e che hanno schemi flessibili per creare applicazioni moderne
- In un DB NoSQL non è presente il concetto di tabella strutturata
- Ogni "record" del DB può avere un formato ed uno schema dati differente dagli altri
- I database NoSQL si sono affermati per la facilità di sviluppo, per la grande flessibilità e scalabilità delle prestazioni. 


---

# NoSQL

Intro

- I database NoSQL utilizzano una varietà di modelli di dati per accedere e gestire i dati. 
- Questi tipi di database sono ottimizzati specificatamente per applicazioni che necessitano di grandi volumi di dati, latenza bassa e modelli di dati flessibili, ottenuti snellendo alcuni dei criteri di coerenza dei dati degli altri database (ACID).

Consideriamo l'esempio della creazione di un modello di schema per il database di un semplice libro:

- RDBMS
  - In un database relazionale, il record di un libro spesso viene smontato (o "normalizzato") e archiviato in tabelle distinte
  - Le relazioni sono definite da vincoli di chiavi primarie ed esterne. 


---

# NoSQL

Intro

- In questo esempio, la tabella Libri ha colonne per ISBN, Titolo libro e Numero edizione
- La tabella Autori ha colonne per IDAutore e Nome autore 
- La tabella ISBN-autore ha colonne per IDAutore e ISBN. 
- Il modello relazionale è progettato per permettere al database di attuare l'integrità referenziale tra le tabelle del database, normalizzato per ridurre la ridondanza e generalmente ottimizzato per lo storage.

<img src="/media/nosql_05.png" width="600" style="margin:auto;position:relative; left: 0px; top: 30px;">


---

# NoSQL

Intro

- NoSQL
  - In un database NoSQL, il record di un libro è solitamente memorizzato come documento JSON. 
  - Per ogni libro, ISBN, Titolo libro, Numero edizione, Nome autore e IDAutore sono archiviati come attributi in un unico documento. 
  - In questo modello, i dati sono ottimizzati per lo sviluppo intuitivo e la scalabilità orizzontale.

 
<img src="/media/nosql_04.png" width="400" style="margin:auto;position:relative; left: 0px; top: 30px;">


---

# NoSQL

Intro

<div style="background-color: green;color: yellow; font-size: 2rem; line-height: 3rem;padding: 20px;">
I database NoSQL sono una soluzione ideale per molte applicazioni moderne, quali dispositivi mobili, Web e videogiochi che richiedono database flessibili, scalabili, con prestazioni elevate ed altamente funzionali per offrire un'esperienza utente eccezionale
</div>

---

# NoSQL

Intro

I DB NoSQL offrono e sono
- **Flessibilità**: i database NoSQL offrono generalmente schemi flessibili che consentono uno sviluppo più veloce e iterativo. Il modello di dati flessibile fa dei database NoSQL la soluzione ideale per i dati semi-strutturati e non strutturati.
- **Scalabilità**: i database NoSQL in genere sono progettati per il dimensionamento orizzontalmente, attuato usando cluster distribuiti di hardware, invece del dimensionamento verticalmente, che avviene aggiungendo server costosi e di grosse dimensioni. Alcuni fornitori di cloud gestiscono queste operazioni dietro le quinte offrendo un servizio completamente gestito (cloud DB).
- **Elevate prestazioni**: i database NoSQL sono ottimizzati per modelli di dati specifici e schemi di accesso che consentono prestazioni più elevate rispetto ai risultati che si ottengono cercando di raggiungere una funzionalità simile con i database relazionali.
- **Altamente funzionali**: i database NoSQL offrono API altamente funzionali e tipi di dati che sono dedicati a ciascuno dei rispettivi modelli di dati.

---

# NoSQL

Intro

Esistono vari tipologie di DB NoSQL

`Chiave-valore`
- I database chiave-valore (key-value) sono altamente partizionabili e consentono dimensionamento orizzontale a livelli che altri tipi di database non possono raggiungere
- Il modello di dati chiave-valore è particolarmente adatto per casi d'uso quali i videogiochi, le tecnologie pubblicitarie e l'IoT
- Per esempio `Amazon DynamoDB` è progettato per fornire una latenza costante non superiore a una decina di millisecondi su qualsiasi scala
- Questa performance costante rappresenta gran parte del motivo per cui la funzionalità Snapchat Stories, che include il più grande carico di lavoro in scrittura di Snapchat, è passata a DynamoDB.


<img src="/media/nosql_06.png" width="100" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# NoSQL

Intro

`Document`
- Esattamente come nel codice pplicativo, i dati sono speso rappresentati come oggetto o un documento di tipo JSON
- Questo DB offre un modello dati efficiente ed intuitivo per gli sviluppatori 
- I database di documenti semplificano agli sviluppatori la ricerca e la memorizzazione di dati in un database, usando lo stesso formato di modello di documento che usano nel codice dell'applicazione. 
- La natura gerarchica, semistrutturata e flessibile dei documenti e dei database dei documenti, gli permette di evolversi in base alle esigenze delle applicazioni. 
- Amazon DocumentDB (con compatibilità MongoDB) sono database di documenti ampiamente diffusi che forniscono API potenti e intuitive per uno sviluppo iterativo e flessibile.

<img src="/media/nosql_07.png" width="100" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# NoSQL

Intro

`Graph`
- Lo scopo di un database a grafo è facilitare la creazione e l'esecuzione delle applicazioni che operano con set di dati ad elevata connessione. 
- I casi d'uso tipici di un database a grafo includono i social network, i motori di raccomandazione, il rilevamento di frodi e i grafi della conoscenza
- Amazon Neptune è un servizio di database a grafo completamente gestito. 
- I database a grafo più comuni includono Neo4j e Giraph.

<img src="/media/nosql_08.png" width="150" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# NoSQL

Intro

`Memory`
-  I videogiochi e le applicazioni per tecnologie pubblicitarie hanno casi d'uso come tabelle dei punteggi, session store e analisi in tempo reale che richiedono tempi di risposta nell'ordine di microsecondi e possono registrare picchi notevoli di traffico in qualsiasi momento. 
-  Questi tipi di DB sono completamente gestiti in memoria RAM per offrire prestazioni eccezionali
-  Il principale memory DB è Redis (sviluppo Italiano) ed è alla base di innumerevoli servizi web di successo, tra cui ChatGPT
-  Amazon MemoryDB per Redis è un servizio di database in memoria durevole e compatibile con Redis che offre latenza di lettura di microsecondi, latenza di scrittura di millisecondi a una cifra e durabilità Multi-AZ. 
  
<img src="/media/nosql_09.png" width="120" style="margin:auto;position:relative; left: 0px; top: 10px;">

---

# NoSQL

Intro

Principlai differenze tra DB relazionali e non

<table border="1">
<tr>
    <td>&nbsp;</td>
    <td><b>Database relazionali</b></td>
    <td><b>Database NoSQL</b></td>
</tr>
<tr>
    <td><b>Carichi di lavoro ottimali</b></td>
    <td>I database relazionali sono progettati per le applicazioni transazionali e OLTP (online transaction processing) fortemente coerenti e sono validi anche per l'OLAP (online analytical processing).</td>
    <td>I database NoSQL sono progettati per molti schemi di accesso ai dati che includono le applicazioni a bassa latenza. I database NoSQL di ricerca sono progettati per l'analisi di dati semi-strutturati. </td>
</tr>
<tr>
    <td><b>Modello di dati</b></td>
    <td>Il modello relazionale normalizza i dati in tabelle che sono costituite da righe e colonne. Uno schema definisce rigidamente tabelle, righe, colonne, indici, relazioni tra tabelle e ulteriori elementi del database. Il database attua l'integrità referenziale nelle relazioni tra le tabelle. </td>
    <td>I database NoSQL offrono una varietà di modelli di dati come chiave-valore, documento e grafo, ottimizzati per prestazioni e scalabilità. </td>
</tr>

</table>


---

# NoSQL

Intro

Principlai differenze tra DB relazionali e non

<table border="1">
<tr>
    <td>&nbsp;</td>
    <td><b>Database relazionali</b></td>
    <td><b>Database NoSQL</b></td>
</tr>
<tr>
    <td><b>Prestazioni</b></td>
    <td>Le prestazioni dipendono generalmente dal sottosistema di dischi. Per raggiungere il massimo livello di prestazioni, spesso è necessario ottimizzare query, indici e struttura delle tabelle.</td>
    <td>Le prestazioni si calcolano generalmente in funzione delle dimensioni del cluster dell'hardware, della latenza di rete e dell'applicazione di chiamata.</td>
</tr>
<tr>
    <td><b>Scalabilità</b></td>
    <td>La scalabilità, nei database relazionali, avviene tipicamente in verticale, incrementando le capacità di elaborazione dell'hardware, oppure in orizzontale aggiungendo repliche per i carichi di lavoro di sola lettura.</td>
    <td>I database NoSQL sono in genere partizionabili perché gli schemi di accesso sono in grado di ridimensionarsi in orizzontale usando l'architettura distribuita per aumentare il throughput che offre prestazioni coerenti quasi senza alcun limite di scalabilità.</td>
</tr>
</table>

---

# NoSQL

Intro

Principlai differenze tra DB relazionali e non

<table border="1">
<tr>
    <td>&nbsp;</td>
    <td><b>Database relazionali</b></td>
    <td><b>Database NoSQL</b></td>
</tr>
<tr>
    <td><b>API</b></td>
    <td>Le richieste di archiviazione e ripristino dati vengono comunicate tramite query conformi al linguaggio SQL (Structured Query Language). Queste query sono analizzate ed eseguite dal database relazionale.</td>
    <td>Le API basate su oggetti consentono agli sviluppatori di app di archiviare e ripristinare facilmente strutture di dati. Le chiavi di partizione danno alle app l'istruzione di cercare coppie chiave-valore, serie di colonne o documenti semi-strutturati contenenti oggetti e attributi serializzati delle app.</td>
</tr>
</table>

---

# NoSQL

Intro

- Esempi di di noSQL sono:
  - Colayer
  - Google Firebase
  - Elasticsearch
  - CouchDB
  - CouchBase
  - MongoDB
  - OrientDB
  - Raven DB
  - Cassandra
  - Neo4J
  - HBase
  - ...

---

# NoSQL

Esercitazione 01 - MongoDB

- MongoDB (da "humongous", enorme) è un popolare DBMS non relazionale, orientato ai documenti.
- Classificato come un database di tipo NoSQL, MongoDB si allontana dalla struttura tradizionale basata su tabelle dei database relazionali in favore di documenti in stile JSON con schema dinamico (MongoDB chiama il formato **BSON** Binary JSON), rendendo l'integrazione di dati di alcuni tipi di applicazioni più facile e veloce.
- Sviluppato inizialmente dalla società di software 10gen (ora diventata MongoDB Inc.) nell'ottobre 2007 come un componente di un prodotto di platform as a service, l'azienda si è spostata verso un modello di sviluppo open source nel 2009, con 10gen in grado di offrire un supporto commerciale e altri servizi.[1] Da allora, MongoDB è stato adottato come backend da un alto numero di grandi siti web e società di servizi come Craigslist, eBay, Foursquare, SourceForge e il The New York Times, tra gli altri. 
- MongoDB è il più popolare database NoSQL.

---

# NoSQL

Esercitazione 01 - MongoDB - Installazione

- Per installare e sviluppare con MongoDB, ricorriamo all'uso di docker
- Nello specifico installeremo il DB e un front end grafico per poter utilizzare il DB (mongoexpress)
- Pertanto, seguendo il modello a micro-servizi, avremo due container separati
  - uno per il DB
  - uno per il front-end

<img src="/media/nosql_10.png" width="400" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# NoSQL

Esercitazione 01 - MongoDB - Installazione

- Creiamo una rete locale (bridge) per i nostri container mongo

<br>

```bash
# docker network create mongoNET
```

<br>


- Verifichiamo che la creazione sia andata a buon fine

<br>

```bash
# docker network ls

NETWORK ID     NAME          DRIVER    SCOPE
b7a6f186cdc3   bridge        bridge    local
3318ca6e102a   host          host      local
77637634e965   mongoNET      bridge    local
3391460356fd   none          null      local
5d9ee7558d13   tmp_default   bridge    local
```

<br>

- useremo mongoNET per far comunicare il front-end (mongoexpress) con il mongoDB


---

# NoSQL

Esercitazione 01 - MongoDB - Installazione

- Creiamo il container docker per mongoDB con

```bash
# docker run -d --name mongolo -p 27017:27017 \
   --network mongoNET \
  -e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
  -e MONGO_INITDB_ROOT_PASSWORD=qwe123 mongo
```

<br>

- -p: Creaimo un port forwarding per la porta 27017
- --network: colleghiamo il container alla rete precedentemente creata mongoNET
- -e: passiamo due variabili d'ambiente contenente le credenziali di admin per il DB

<br>

```bash
docker ps -a     
CONTAINER ID   IMAGE     CREATED          PORTS                                           NAMES
dc9031eefd19   mongo     14 seconds ago   0.0.0.0:27017->27017/tcp, :::27017->27017/tcp   mongolo
```

<br>

- et voilà, il nostro mongoDB è pronto per l'uso  (magia di docker)

---

# NoSQL

Esercitazione 01 - MongoDB - Installazione

- Prima di installare mongo-express è necessario che il nome del container di mongoDB sia risolvibile
- Pertanto modifichiamo il file */etc/hosts* in questo modo

<br>

```bash
# sudo vi /etc/hosts

127.0.0.1       localhost mongolo
```

<br>

- Questo è necessario per far si che mongo-express sia in grado di collegarsi al mongoDB
  
---

# NoSQL

Esercitazione 01 - MongoDB - Installazione

- Ora creiamo il docker per mongo express collegandolo sempre alla stessa rete

<br>

```bash
# docker run -d \
--name mongo-express \
--network mongoNET \
-p 8081:8081 \
-e ME_CONFIG_MONGO_DB_ADMINUSERNAME=mongoadmin \
-e ME_CONFIG_MONGO_DB_ADMINPASSWORD=qwe123 \
-e ME_CONFIG_MONGO_DB_SERVER=mongodb \
-e ME_CONFIG_MONGODB_URL="mongodb://mongoadmin:qwe123@mongolo:27017" \
mongo-express


# docker ps -a                                                                    
CONTAINER ID   IMAGE           PORTS                                           NAMES
87974f9a238a   mongo-express   0.0.0.0:8081->8081/tcp, :::8081->8081/tcp       mongo-express
dc9031eefd19   mongo           0.0.0.0:27017->27017/tcp, :::27017->27017/tcp   mongolo
```

---

# NoSQL

Esercitazione 01 - MongoDB

- Se tutto ha funzionato bene, accedendo con il browser alla porta 8081, vedremo qualcosa di simile

**CREDENZIALI** -->&nbsp;&nbsp;
`admin/pass`



<br>

<img src="/media/nosql_11.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# NoSQL

Esercitazione 02 - Creazione DB

- Ora, dall'interfaccia principale di mongo-express
- Creiamo un DB di nome studenti
  

<img src="/media/nosql_12.png" width="800" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# NoSQL

Esercitazione 02 - Creazione DB

- Selezioniamo il DB appena creato 
  
<br>
<img src="/media/nosql_13.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# NoSQL

Esercitazione 02 - Creazione DB

- Creiamo la collezione (l'equivalente di una tabella nel mondo relazionale) di nome *registro*
- Il DB può avere tabte collezioni quante necessarie all'applicazione 
  
<br>
<img src="/media/nosql_14.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# NoSQL

Esercitazione 02 - Creazione DB

- Creiamo un nuovo documento nella collezione registro 

<br>
<img src="/media/nosql_15.png" width="800" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# NoSQL

Esercitazione 02 - Creazione DB

- Il documento è in formato JSON

<img src="/media/nosql_16.png" width="400" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# NoSQL

Esercitazione 02 - Creazione DB


<img src="/media/nosql_17.png" width="800" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# NoSQL

Esercitazione 02 - Creazione DB

- Eseguiamo una ricerca all'interno della collezione
- Cerchiamo tutti gli studenti (docuementi) il cui campo classe è uguale a 4
- Premiamo *find* per iniziare la ricerca

<br>
<img src="/media/nosql_18.png" width="800" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# NoSQL

Esercitazione 02 - Creazione DB

- Ora clicchiamo sul documento trovato e modifichiamo la classe, editando il documento JSON

<br>
<img src="/media/nosql_19.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# NoSQL

Esercitazione 02 - Creazione DB

- Il documento (lo studente) è stato modificato correttamente

<br>
<img src="/media/nosql_20.png" width="650" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# NoSQL

Esercitazione 02 - Creazione DB

- Ora rimuoviamo un documento da una collezione facendo click sull'icona del bidoncino

<br>
<img src="/media/nosql_21.png" width="600" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# NoSQL

Esercitazione 02 - Creazione DB

- Il documento (lo studente) è stato rimosso correttamente

<br>
<img src="/media/nosql_22.png" width="800" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# NoSQL

Esercitazione 03 - mongoDB e JS

- In quest'esercitazione accediamo e manipoliamo (CRUD) il DB creato precedentemente tramite JavaScript
- Utilizziamo un client molto noto chiamato mongoose
- Iniziamo installando la dipendenza tramite npm

<br>

```bash
$ mkdir mongojs
$
$ cd mongojs
$
$ wget https://tpsi.mancusoa.it/support/package.json
$
$ wget https://tpsi.mancusoa.it/support/package-lock.json
$
$ npm ci
```

---

# NoSQL

Esercitazione 03 - mongoDB e JS

- Creiamo la connessione al DB fornendo le credenziali e il nome del DB a cui vogliamo accedere

```js
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
```

---

# NoSQL

Esercitazione 03 - mongoDB e JS

- Creiamo la connessione al DB fornendo le credenziali e il nome del DB a cui vogliamo accedere

```js
//main 
(async () => {
    // connettiamoci al DB usando le credenziali corrette
    let db = await connect('mongoadmin', 'qwe123', 'studenti');
    
    if(db.connection.readyState == 1)
        console.log("CONNESSIONE AL DB: OK!!!");

    // disconnettiamoci dal DB
    await db.disconnect();
    console.log("DISCONNESSO DAL DB!!!");
    process.exit(0);
})();
```
- Ora eseguiamo il programma

```bash
# node connect_mongo.js          
CONNESSIONE AL DB: OK!!!
DISCONNESSO DAL DB!!!
```

---

# NoSQL

Esercitazione 03 - mongoDB e JS

- Creiamo una collezione chiamata *studente*

```js
const create_collection = async () => {
    //definiamo lo schema della nostra collezione
    const schema = new mongoose.Schema({ 
                                        nome: "string", 
                                        cognome: "string", 
                                        classe: "number" 
    });

    //creiamo un modello a partire dallo schema
    const studente = mongoose.model("studente", schema);

    // creiamo la collezione
    let collection = await studente.createCollection();

    return collection;
}
```

---

# NoSQL

Esercitazione 03 - mongoDB e JS

```js
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
```

---

# NoSQL

Esercitazione 03 - mongoDB e JS

- Eseguiamo il programma e verifichiamo in mongo-express che la nuova collezzione sia stata effettivamente creata


<br>
<img src="/media/nosql_23.png" width="600" style="margin:auto;position:relative; left: 0px; top: 0px;">


- Il nome della collezione è stato "pluralizzato" da mongoDB

---


# NoSQL

Esercitazione 03 - mongoDB e JS

- Ora aggiungiamo dei documenti alla collezzione appena creata

```js
const add_document = async (model, doc) => {
    await model.create(doc);
}
//main
(async () => {
    // connettiamoci al DB usando le credenziali corrette
    let db = await connect('mongoadmin', 'qwe123', 'studenti');   
    ...
    ...
    console.log("COLLEZIONE CREATA: OK");

    //aggiungiamo un documento singolo
    await add_document(collection, {
        nome: "Mario",
        cognome: "Rossi",
        classe: 4
    });
    console.log("DOCUMENTO AGGIUNTO!!!");
    ...
    ...
```


---

# NoSQL

Esercitazione 03 - mongoDB e JS

- Verifichiamo che il documento sia stato aggiunto correttamente

<br>
<img src="/media/nosql_24.png" width="700" style="margin:auto;position:relative; left: 0px; top: 0px;">



---

# NoSQL

Esercitazione 03 - mongoDB e JS

- Ora proviamo a fare una ricerca per gli studenti della classe 5

```js
const search_document = async (model, params) => {
    let docs = await model.find(params);

    return docs;
}
//main 
(async () => {
    // connettiamoci al DB usando le credenziali corrette
    let db = await connect('mongoadmin', 'qwe123', 'studenti');
    ...
    
    // cerco gli studenti della 5
    // find restituisce un array di documenti
    let studenti = await search_document(collection, {classe: 5});
    console.log("STUDENTI TROVATI:", studenti);
    ...
})();
```

---

# NoSQL

Esercitazione 03 - mongoDB e JS

```bash
CONNESSIONE AL DB: OK!!!
COLLEZIONE CREATA: OK
STUDENTI TROVATI: [
  {
    _id: new ObjectId("642ef647c4e2257cc30f6ac8"),
    nome: 'Giuseppe',
    cognome: 'Verdi',
    classe: 5,
    __v: 0
  },
  {
    _id: new ObjectId("642ef647c4e2257cc30f6aca"),
    nome: 'Carlo',
    cognome: 'bianchi',
    classe: 5,
    __v: 0
  }
]
DISCONNESSO DAL DB!!!
```

---

# NoSQL

Esercitazione 03 - mongoDB e JS

```bash
let studenti = await search_document(collection, {classe: 4});

CONNESSIONE AL DB: OK!!!
COLLEZIONE CREATA: OK
STUDENTI TROVATI: [
  {
    _id: new ObjectId("642ef5784d3d9a96e7703b0a"),
    nome: 'Mario',
    cognome: 'Rossi',
    classe: 4,
    __v: 0
  }
]

DISCONNESSO DAL DB!!!
```

---

# NoSQL

Esercitazione 03 - mongoDB e JS

```bash
let studenti = await search_document(collection, {classe: 3});

CONNESSIONE AL DB: OK!!!
COLLEZIONE CREATA: OK
STUDENTI TROVATI: []
DISCONNESSO DAL DB!!!
```

---

# NoSQL

Esercitazione 03 - mongoDB e JS

- Ora facciamo l'update di un documento presente nella collezione

```js
const update_document = async (model, doc, new_doc) => {
    await model.updateOne(doc, new_doc);  
}

//main 
(async () => {
    // connettiamoci al DB usando le credenziali corrette
    let db = await connect('mongoadmin', 'qwe123', 'studenti');
    ...

    //aggiorno lo studente Mario Rossi
    await update_document(collection, {
        nome: "Mario",
        cognome: "Rossi"
    },
    {
        classe: 3
    });
    ...
})();
```


---

# NoSQL

Esercitazione 03 - mongoDB e JS

- Verifichiamo che il documento sia effettivamente aggiornato

<br>
<img src="/media/nosql_25.png" width="800" style="margin:auto;position:relative; left: 0px; top: 0px;">



---

# NoSQL

Esercitazione 03 - mongoDB e JS

- Ora rimuoviamo un documento dalla collezione

```js
const delete_document = async (model, params) => {
    let doc = await search_document(model, params);
    if(doc.length == 1)
        await doc[0].deleteOne();
}
//main 
(async () => {
    // connettiamoci al DB usando le credenziali corrette
    let db = await connect('mongoadmin', 'qwe123', 'studenti');
    ...

    await delete_document(collection, {
        nome: "Mario",
        cognome: "Rossi"
    });
    console.log("DOCUMENTO RIMOSSO: OK!!!");
    ...
})();
```


---

# NoSQL

Esercitazione 03 - mongoDB e JS

- Verifichiamo che il documento sia effettivamente rimosso

<br>
<img src="/media/nosql_26.png" width="800" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# NoSQL

Esercitazione 03 - mongoDB e JS

- Qui i link ai vari programmi che implementano le funzionalità appena viste

<div class="griglia">
    <div class="link link1"><a href="https://gist.github.com/profmancusoa/024ea06ce75c733c44695ccfb7ee6e4a" target="_blank">Connect</a></div>
    <div class="link link2"><a href="https://gist.github.com/profmancusoa/f2996cc75fc63a7cf09d5d2a116af35f" target="_blank">Create</a></div>
    <div class="link link3"><a href="https://gist.github.com/profmancusoa/2b7045a63bdf6d809bfa5d2cc1da7815" target="_blank">Add</a></div>
    <div class="link link4"><a href="https://gist.github.com/profmancusoa/c09701ed7131e90120460439a51c4ee5" target="_blank">Search</a></div>
    <div class="link link5"><a href="https://gist.github.com/profmancusoa/6c3d966c87eff7e01c6bb9757ae76ddc" target="_blank">Update</a></div>
    <div class="link link6"><a href="https://gist.github.com/profmancusoa/b311f58bac089134cd447f0c3fe55fe1" target="_blank">Delete</a></div>
</div>

<style>
    .griglia {
        position: relative;
        left: 200px;
        top: 30px;
        display: grid;
        grid-template-columns: repeat(3, 150px);
        grid-template-rows: repeat(3, 150px);
        gap: 10px;
    }

    .link {
        width: 150px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bolder;
        font-size: 1.3em;
    }
    
    .link1 { background-color: #FF0000;}
    .link2 { background-color: #FFCF00;}
    .link3 { background-color: #3069F0;}
    .link4 { background-color: #FF0094;}
    .link5 { background-color: #00B917;}
    .link6 { background-color: #00B5AB;}
</style>

---

&nbsp;
<center>
<img src="/media/nosql_27.jpg" width="800" />
</center>
