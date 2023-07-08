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
as: 2023/2024
version: '1.0.0'

---  

# TPSI 5

Sveltekit back-end DB

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>


---

# SvelteKit e DB

Il  modello 3-Tier

- Nell'ambito dello sviluppo di applicazioni Web, molto spesso, per non dire sempre, si ha la necessità di immagazzinare dei dati che rappresentano gli oggetti che permettono alla nostra applicazione di funzionare (immaginiamo il registro elettronico)
  - l'informazioni dello studente
  - la lista delle classi
  - l'associazione tra studenti e classi
  - la lista delle materi
  - i voti di uno studente per ciascuna materia
- Ovviamente alcune di queste informazioni sono relative al nostro utente, ma altre sono generali per tutta l'applicazione

---

# SvelteKit e DB

Il  modello 3-Tier

- Benchè i moderni browser permettono lo storage lato front-end (*local storage*), in uno scenario come quello descritto ha poco senso immagazzinare i dati lato front-end
- Ciò creerebbe parecchi problemi ed una grande replicazione di dati
- Ogni utente dovrebbe immagazzinare i suoi dati più una copia dei dati generici o di dizionario (la lista delle classi, la lista delle materie)
- Questo comporto non solo problemi di spazio, ma anche problemi di aggiornamento (cosa avviene se aggiungo una materia?, ...)
- Pertanto in questi e moltissim altri casi, ha senso ed è corretto immagazzinare i dati lato back-end
- Questa situazione è così comune nello0 sviluppo Web che è stato creato un modello architetturale standard chiamato `3 Tier model`

---

# SvelteKit e DB

Il  modello 3-Tier

<img src="/media/db_00.png" width="600" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# SvelteKit e DB

Il  modello 3-Tier

<div style="width:40%">

- Nel modello ` 3 Tier` possiamo identificare **3** aree e livelli principali (**Tier**) in cui un'applicazione Web è organizzata
  1. `PRESENTATION TIER` : il front-end dell'applicazione Web che si occupa dell'esperienza e dell'interfaccia utente (UI/UX)
  2. `BUSINESS LOGIC TIER` : il cuore dell'applicazione in cui vengono applicate tutte le logiche applicative
  3. `DATA TIER` :  storage dei dati tipicamente DB o filesystem 

</div>

<img src="/media/db_01.png" width="550" style="margin:auto;position:relative; left: 200px; top: -440px;">

---

# SvelteKit e DB

Il  modello 3-Tier

1. L'utente interagisce con la UI e effettua un'operazione
2. La richiesta dal front-end viene inviata verso il back-end (REST API)
3. Il business-tier del back-end processa la richiesta
4. Per manipolare i dati necessari al processamento della richiesta invia una Query al DATA tier
5. Il DATA tier elabora la query
6. e fornisce i dati al business-tier richiedente
7. Il business-tier ora ha tutte le informazioni per completare la logica applicativa scaturita dall richiesta #2 e fornisce una ricposta al front-end
8. Il front-end aggiorna la UI in funzione della risposta #7

<br>
<Banner padding="20px">
Il modello 3-Tier è ampiamente utilizzato sul Web e nello sviluppo di applicazioni
</Banner>

---

# SvelteKit e DB

Back-End e DB

- Per semplificare l'aspetto sistemistico concentreremo il DATA tier e il BUSINESS LOGIC tier insieme
- Questo è possibile adottando un potentissimo e flessibilissimo DB chiamato `SQLite`
- [SQLite](https://www.sqlite.org/index.html) è una libreria in linguaggio C che implementa un motore di database SQL piccolo, veloce, autonomo, altamente affidabile e completo. 
- [SQLite è integrato in tutti i telefoni cellulari](https://www.sqlite.org/mostdeployed.html) e nella maggior parte dei computer e viene fornito in bundle all'interno di innumerevoli altre applicazioni che le persone utilizzano ogni giorno

<br>
<Banner padding="20px">
SQLite è il motore di database più utilizzato al mondo 
</Banner>
<br>

- SQLite è il DB perfetto per la maggior parte dei progetti di piccole/medie dimensioni

---

# SvelteKit e DB

Back-End e DB

- Per installare SQLite basta eseguire il seguente comando

<br>

```bash
# sudo apt install sqlite3
```
<br>

- Verifica la corretta instalalzione con

<br>
```bash
# sqlite3 --version
#
# 3.37.2 2022-01-06 13:25:41 872ba256cbf61d9290b571c0e6d82a20c224ca3ad82971edc46b29818d5dalt1
```

---

# SvelteKit e DB

Back-End e DB

<div style="width:45%">

- Un tool molto utile per lavorare con SQLite è [SQLite Data Browser](https://sqlitebrowser.org/)
- DB Browser for SQLite (DB4S) è uno strumento open source di alta qualità, visivo, per creare, progettare e modificare file di database SQLite.
- DB4S è per utenti e sviluppatori che desiderano creare, cercare e modificare database. 
- Si installa con

<br>

```bash
# sudo apt install sqlitebrowser
```

<br>
</div>

<img src="/media/db_03.png" width="500" style="margin:auto;position:relative; left: 220px; top: -450px;">

---

# SvelteKit e DB

Back-End e DB

SQLite Browser permette di eseguire molte operazione:
- Creare, definire, modificare ed eliminare DB e tabelle
- Creare, definire ed eliminare indici
- Sfoglia, modifica, aggiungi,elimina e cercarecord
- Importa ed esporta record come testo
- Importa ed esporta tabelle da/a file CSV
- Importa ed esporta database da/a file di dump SQL
- Invia query SQL e controlla i risultatiù
- Traccia grafici semplici basati su dati di tabelle o query
<img src="/media/db_04.png" width="450" style="margin:auto;position:relative; left: 240px; top: -300px;">


---

# SvelteKit e DB

Back-End e DB

- Vediamo ora come implementare il modello 3-Tier in SvelteKit
- Per fare ciò partiremo da quanto sviluppato nella lezione sui Form

<img src="/media/db_02.png" width="250" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# SvelteKit e DB

Esercitazione_01

- Creare un nuovo progetto SvleteKit di nome ***SvelteFormDB***
- Copiare i file *+page.svelte* e *+page.server.js* dal progretto *SvelteForm*
- Verifica il funzionamento dell'applicazione
- Cosengare su github (non fare il commit di node_modules)

<img src="/media/db_05.png" width="350" style="margin:auto;position:relative; left: 0px; top: 10px;">

---

# SvelteKit e DB

Back-End e DB

- La prima cosa da fare è progettare lo schema E-R del DB (nel nostro caso è banale siccome abbiamo una sola entità e quindi una sola tabella)
- Per realizzare il diagramma E-R possiamo usare l'ottimo [DBdiagram](https://dbdiagram.io/home)

<img src="/media/db_07.png" width="800" style="margin:auto;position:relative; left: 0px; top: 10px;">

---

# SvelteKit e DB

Back-End e DB

- DBdiagram usa un **DSL** (*Domain Specific Language*) per definire il  modello E-R 
- Creiamo il nostro modello E-R (anche se banalissimo) utilizzando il linguaggio `DBML` o **Data Base Markup Language** (leggi [qui](https://dbml.dbdiagram.io/docs/#project-definition) la documentazione)

<img src="/media/db_06.png" width="600" style="margin:auto;position:relative; left: 0px; top: 40px;">

---

# SvelteKit e DB

Back-End e DB

- Ora per convertire lo schema *.dbml* in linguaggio SQL DDL per SQLite possiamo usare uno strumento chiamato `dbml_sqlite`
- Si installa semplicemento con questo comando

<br>
```bash
# pip install dbml_sqlite
```
<br>

- Verifico il funzionamento

<br>
```bash
#dbml_sqlite --help   
Usage: dbml_sqlite [OPTIONS] SRC

  Converts DBML contained in SRC file to SQLite DDL and does with that string
  of SQLite DDL what you want.
  ...
  ...
```

---

# SvelteKit e DB

Back-End e DB

- Ora copio il DBML da DBdiagram nel file *schema.dbml*
- Poi converto da DBML a SQL DDL per SQLite e creo il DB in questo modo

<br>
```bash
# cd SvelteFormDB
# 
# dbml_sqlite -x USER.db schema.dbml
#
CREATE TABLE Utente (
  id INTEGER PRIMARY KEY,
  nome TEXT,
  cognome TEXT,
  eta INTEGER
);
```

---

# SvelteKit e DB

Back-End e DB

- Ora lo strumento a partire dal DBML ha generato un DB SQLite chiamato USER.db con la tabella Utente

<img src="/media/db_08.png" width="500" style="margin:auto;position:relative; left: 0px; top: 10px;">
<img src="/media/db_09.png" width="500" style="margin:auto;position:relative; left: 0px; top: 10px;">


---

# SvelteKit e DB

Back-End e DB

- In alternativa possiamo eseguire le stesse operazioni manualmente da sqlitebrowser

<img src="/media/db_10.gif" width="550" style="margin:auto;position:relative; left: 0px; top: 10px;">

---

# SvelteKit e DB

Esercitazione_02

- Creare il DB *USER.db* con uno dei metodi visti in precedenza
- Verificare la correttezza aprendo il DB con sqlitebrowser e verificare che non ci sono errori

---

# SvelteKit e DB

Back-End e DB

- Bene, ora che il DB è stato creato correttamente possiamo iniziare a scrivere il codice per aggiungere il supporto al DB lato back-end nel progetto SvelteFormDB
- Tuttavia prima dobbiamo ancora fare un passo: decidere quale libreria vogliamo utilizzare per accedere al DB SQLite
- Siccome SvelteKit usa l'onnipresente *node.js*, dobbiamo scegliere una libreria per node.js
- Ci sono varie librerie disponibili
  - sqlite
  - knwx.js
  - better-sqlite3

- Noi utilizziamo [better-sqlite3](https://github.com/WiseLibs/better-sqlite3)


---

# SvelteKit e DB

Back-End e DB

- `better-sqlite3` è la libreria più veloce e semplice per SQLite3 in Node.js ([documentazione](https://github.com/WiseLibs/better-sqlite3/blob/master/docs/api.md))
- Supporto completo per le transazioni
- Elevate prestazioni, efficienza e sicurezza
- API sincrona facile da usare (concorrenza migliore rispetto a un'API asincrona...)
- Supporto per funzioni, aggregazioni, tabelle virtuali ed estensioni definite dall'utente
- Supporto worker thread per query grandi/lente

<img src="/media/db_11.png" width="700" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# SvelteKit e DB

Back-End e DB

- Vediamo come usare la libreria (per ogni dubbio leggere sempre la documentazione)

```bash
# npm i better-sqlite3 //installa la libreria
```

<br>

**CONNESSIONE AL DB**

<br>

```js
import Database from 'better-sqlite3';

const db = new Database('percorso/al/file/del/db.db');
```

<br>

- Quindi **db** è l'oggetto che ci permette di accedere alle funzionalità del DB e ci permette di eseguire le query in SQL


---

# SvelteKit e DB

Back-End e DB

**METODO Database.prepare()**

- il metodo *prepare* ci permette di creare lo *statement* da eseguire
- In altre parole tramite *prepare* creiamo la query SQL che andremo poi ad eseguire sul DB
- La query può avere o meno dei parametri

<br>

```js
//seleziona tutti gli utenti
const query1 = db.prepare('SELECT * FROM Utente'); 

//seleziona gli utenti con una specifica età
const query2 = db.prepare('SELECT * FROM Utente WHERE eta = ?');

//seleziona gli utenti con una specifica età
const query3 = db.prepare('SELECT * FROM Utente WHERE eta = @anni');
```

<br>

- Il carattere `?` rappresenta un parametro anonimo nella query 
- `@anni` rappresenta un parametro esplicito nella query

---

# SvelteKit e DB

Back-End e DB

**METODO Statement.all(&lt;bind parameter&gt;)**

- Esegue uno statement (risulatto del metodo *prepare*) e restituisce tutte le righe (record) selezionate
- Quindi il metodo *all* viene utilizzato per le query di tipo *SELECT....FROM*

<br>

```js
const res = query1.all(); //esegue SELECT * FROM Utente
console.log(res);

[
  { id: 1, nome: 'Mario', cognome: 'Rossi', eta: 18 },
  { id: 2, nome: 'Giuseppe', cognome: 'Verdi', eta: 17 },
  { id: 3, nome: 'Pietro', cognome: 'Bianchi', eta: 19 }
]

```

---

# SvelteKit e DB

Back-End e DB

- Se la query contiene uno o più parametri è necessari passarli al metodo *all*
- I parametri anonimi sono posizionali, mentre quelli espliciti non hanno questa caratteristica

<br>

```js
const res2 = query2.all(18); //esegue SELECT * FROM Utente WHERE eta = 18
console.log(res2);

[ { id: 1, nome: 'Mario', cognome: 'Rossi', eta: 18 } ]

const res3 = query3.all( { anni: 18 }); //esegue SELECT * FROM Utente WHERE eta = 18
console.log(res3);

[ { id: 1, nome: 'Mario', cognome: 'Rossi', eta: 18 } ]
```

---

# SvelteKit e DB

Back-End e DB

**METODO Statement.run(&lt;bind parameter&gt;)**

- Per tutte le query che non restituiscono dei dati (INSERT, UPDATE e DELETE) utilizziamo il metodo *run* per eseguire la query SQL
- Al termine dell'esecuzione restituisce un oggetto *info* che descrive eventuali modifiche apportate al DB. L'oggetto info ha due proprietà:
- `info.changes`: il numero totale di righe che sono state inserite, aggiornate o eliminate da questa operazione. Le modifiche apportate da azioni di chiavi esterne o programmi trigger non vengono conteggiate.
- `info.lastInsertRowid`: il rowid dell'ultima riga inserita nel database (ignorando quelli provocati dai programmi trigger). Se l'istruzione corrente non ha inserito alcuna riga nel database, questo numero dovrebbe essere completamente ignorato.

---

# SvelteKit e DB

Back-End e DB

**INSERT**

```js
const query4 = db.prepare('INSERT INTO Utente (nome, cognome, eta) VALUES(?, ?, ?)');
const info4 = query4.run('Mirko', 'Bianchi', 25);
console.log(info4);

{ changes: 1, lastInsertRowid: 4 } //1 record aggiunto con id=4

[
  { id: 1, nome: 'Mario', cognome: 'Rossi', eta: 18 },
  { id: 2, nome: 'Giuseppe', cognome: 'Verdi', eta: 17 },
  { id: 3, nome: 'Pietro', cognome: 'Bianchi', eta: 19 },
  { id: 4, nome: 'Mirko', cognome: 'Bianchi', eta: 25 }
]
```

---

# SvelteKit e DB

Back-End e DB

**INSERT**

```js
const query4 = db.prepare('INSERT INTO Utente (nome, cognome, eta) VALUES(@nome, @cognome, @anni)');
const info4 = query4.run({ anni: 25, cognome: 'Bianchi', nome: 'Mirko'}); //non conta la posizione
console.log(info4);

{ changes: 1, lastInsertRowid: 5 } //1 record aggiunto con id=4

[
  { id: 1, nome: 'Mario', cognome: 'Rossi', eta: 18 },
  { id: 2, nome: 'Giuseppe', cognome: 'Verdi', eta: 17 },
  { id: 3, nome: 'Pietro', cognome: 'Bianchi', eta: 19 },
  { id: 4, nome: 'Mirko', cognome: 'Bianchi', eta: 25 },
  { id: 5, nome: 'Mirko', cognome: 'Bianchi', eta: 25 }
]
```

---

# SvelteKit e DB

Back-End e DB

**UPDATE**

```js
const query5 = db.prepare('UPDATE Utente SET nome=@nome WHERE id=@id');

const info5 = query5.run({ id: 5, nome: 'Mirco'});
console.log(info5);

{ changes: 1, lastInsertRowid: 0 } //solo update no insert

[
  { id: 1, nome: 'Mario', cognome: 'Rossi', eta: 18 },
  { id: 2, nome: 'Giuseppe', cognome: 'Verdi', eta: 17 },
  { id: 3, nome: 'Pietro', cognome: 'Bianchi', eta: 19 },
  { id: 4, nome: 'Mirko', cognome: 'Bianchi', eta: 25 },
  { id: 5, nome: 'Mirco', cognome: 'Bianchi', eta: 25 },
]
```

---

# SvelteKit e DB

Back-End e DB

**DELETE**

```js
const query6 = db.prepare('DELETE FROM Utente WHERE id= ?');

const info6 = query6.run(5);
console.log(info6);

{ changes: 1, lastInsertRowid: 0 } //solo delete no insert

[
  { id: 1, nome: 'Mario', cognome: 'Rossi', eta: 18 },
  { id: 2, nome: 'Giuseppe', cognome: 'Verdi', eta: 17 },
  { id: 3, nome: 'Pietro', cognome: 'Bianchi', eta: 19 },
  { id: 4, nome: 'Mirko', cognome: 'Bianchi', eta: 25 },
]
```

<br>

- Abbiamo visto i metodi principali della libreria *better-sqlite3* che ci permettono di eseguire tutti i principali tipi di query SQL

---

# SvelteKit e DB

Esercitazione_03

- Utilizzando la libreria *better-sqlite3* scriver eun programma per node.js che
  - inserisca 3 utenti nella tabella Utente
  - trovi e stampi tutti gli utenti con età > di 18 anni
  - trovi e stampi tutti gli utenti con età esattamente uguale a 16
  - faccia l'update di un utente e stampi lo stato del DB dopo l'update
  - rimuova un utente dal DB dato il suo id
  - consegnare su github (non fare il commit della directory node_modules)

---

# SvelteKit e DB

Back-End e DB

- Bene ora possiamo iniziare a modificare il codice per aggiungere il supporto al DB e nuove funzionalità
- modifica il file *+page.svelte*

<img src="/media/db_12.png" width="350" style="margin:auto;position:relative; left: -250px; top: 10px;">
<img src="/media/db_13.png" width="400" style="margin:auto;position:relative; left: 200px; top: -330px;">


---

# SvelteKit e DB

Back-End e DB

<img src="/media/db_14.png" width="350" style="margin:auto;position:relative; left: -250px; top: 0px;">
<img src="/media/db_15.png" width="350" style="margin:auto;position:relative; left: 200px; top: -400px;">


---

# SvelteKit e DB

Esercitazione_04

- Modifica il front-end nella nostra applicazione in modo da ottenere questo risultato
- Consegnare su github (non fare il commit della directory node_modules)

<img src="/media/db_16.png" width="400" style="margin:auto;position:relative; left: 0px; top: 10px;">

---

# SvelteKit e DB

Back-End e DB

- Ora modifichiamo il back-end e per prima cosa aggiorniamo la funzione load in modo da prelevare la lista degli utenti dal DB

*+page.server.js*

<img src="/media/db_17.png" width="500" style="margin:auto;position:relative; left: 0px; top: -20px;">

---

# SvelteKit e DB

Esercitazione_05

- Modifica il back-end aggiornando la funzione *load* come visto
- Modifica il front-end nella nostra applicazione in modo da ottenere questo risultato
- Consegnare su github (non fare il commit della directory node_modules)

<img src="/media/db_18.png" width="400" style="margin:auto;position:relative; left: 0px; top: 10px;">

---

# SvelteKit e DB

Back-End e DB

- In quest'applicazione oltre a creare utenti, vogliamo anche la possibilità di aggiornare e rimuovere un utente già esistente
- Come abbiamo visto, nel lato back-end abbiamo definito un `action` di *default* che gestisce il POST del form
- Tuttavia in questo scenario un singolo *action* non è sufficente in quanto vogliamo gestire tre situazioni differenti
- SvelteKit ci viene in aiuto con le `named actions`
- Quindi con le *named actions* possiamo avere quanti handler vigliamo per gestire differenti richieste POST da parte del form
- Ma vediamo in pratica come funziona 

---

# SvelteKit e DB

Back-End e DB

<div style="width:30%;">

- Modifichiamo l'action *default* e la trasformiamo in un *named action* (**create**) e faccimo INSERT nel DB

</div>
<img src="/media/db_19.png" width="650" style="margin:auto;position:relative; left: 160px; top: -150px;">

---

# SvelteKit e DB

Back-End e DB

- Dobbiamo anche modificare il front-end in modo che alla pressione del pulsante del form venga invcata l'action *create* e non quella di default, che ora non esiste più

<img src="/media/db_20.png" width="600" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# SvelteKit e DB

Esercitazione_06

- Modifica il front-end e il back-end trasformando l'azione default in *create*
- Verificare il corretto funzionamengto aggiungendo due utenti al DB tramite il front-end
- Consegnare su github (non fare il commit della directory node_modules)

<img src="/media/db_21.gif" width="400" style="margin:auto;position:relative; left: 0px; top: 10px;">


---

# SvelteKit e DB

Back-End e DB

<div style="width:40%">

- Per la funzione di edit vogliamo che quando l'utente seleziona la riga da modificare, vengano riempiti i campi del form
- Quandro premeremo il pulsante invia, non dovrà essere creato un nuovo utente ma bensì dovrà essere aggiornato quello selezionato
- Iniziamo a modificare il front-end

</div>
<img src="/media/db_21.png" width="500" style="margin:auto;position:relative; left: 200px; top: -350px;">

---

# SvelteKit e DB

Back-End e DB

<div style="width:40%">

- Ora modifichiamo il back-end implementando l'azione *update*

</div>
<img src="/media/db_22.png" width="500" style="margin:auto;position:relative; left: 200px; top: -150px;">

---

# SvelteKit e DB

Esercitazione_07

- Modifica il front-end e il back-end creando l'azione *update*
- Verificare il corretto funzionamengto modificando i valori per due utenti tramite il front-end
- Consegnare su github (non fare il commit della directory node_modules)

<img src="/media/db_23.gif" width="350" style="margin:auto;position:relative; left: 0px; top: 10px;">

---

# SvelteKit e DB

Back-End e DB

- Infine implementiamo le modifiche per la cancellazione di un utente
- Quando premiamo il pulsante *Remove* vogliamo che l'utente corrispondente venga eliminato
- Quindi dobbiamo eseguire l'azione *delete*
- Per fare ciò facciamo in modo che il pulsante sia all'interno di un form dedicato a cui è collegata l'action *delete*
- Questo form ha un campo hidden che contiene il valore dell'id dell'utente da rimuovere
- In questo modo nel back-end abbiamo l'id da rimuovere e possiamo eseguire facilmente la query


---

# SvelteKit e DB

Back-End e DB

- Iniziamo modificando il front-end

<img src="/media/db_23.png" width="550" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# SvelteKit e DB

Back-End e DB

- Nel back-end creiamo l'action *delete*

<img src="/media/db_24.png" width="600" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# SvelteKit e DB

Esercitazione_08

- Modifica il front-end e il back-end creando l'azione *delete*
- Verificare il corretto funzionamengto rimuovendo due utenti tramite il front-end
- Consegnare su github (non fare il commit della directory node_modules)

<img src="/media/db_25.gif" width="350" style="margin:auto;position:relative; left: 0px; top: 10px;">


---

# SvelteKit e DB

Back-End e DB

- Bene, siamo partiti dal progetto SvelteForm e lo abbiamo modificato e arricchito di funzionalità
- Abbiamo aggiunto il Data Tier tramite il DB SQLite
- Abbiamo rimosso l'azione di default e creato delle *named action* per gestire tutti i casi previsti dalla nostra applicazione
- Come visto gestire i form nel back-end con SvelteKit è veramente facile e intuitivo
- Questo meccanismo può essere impiegato in miriadi di applicazioni web che prevedono un'interazione utente tramite i form

