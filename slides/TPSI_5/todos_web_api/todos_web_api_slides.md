---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
#highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
aspectRatio: '16_/9'
routerMode: 'hash'
as: 2023/2024
version: '1.0.0'

---  


# ToDoS Web API

Colleghiamo ToDoS Web a ToDoS API

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

---

# ToDoS Web API

REST API Client

- Le applicazioni che abbiamo sviluppato, *ToDoS Web* e *ToDoS Mobile* servono entrambe a gestire una ToDo List personale
- Entrambe utilizzano il localStorage per rendere i nostri dati persistenti
- Tuttavia esse non sono interoperabili, cioè se creaimo un ToDo Item in ToDo Web non potremo vederlo in ToDo Mobile e viceversa
- Al fine di rendere ToDo un servizio veramente utili è necessario poter manipolare la stessa ToDo List personale sia dal web che dal mobile
- In altre parole vogliamo fare in modo che un ToDo creato dallo smartphone possa essere visto anche dal web e viceversa
- In questo modo possiamo gestire la nostra ToDo List comodamente dal laptop quando siamo a scuola o a casa e allo stesso tempo avere accesso ad essa quando siamo in mobilità

---

# ToDoS Web API

REST API Client

- Per far ciò dobbiamo ricorrere all'uso di uno storage centralizzato
- Per raggiungere tale scopo ci viene in aiuto la REST API che abbiamo sviluppato
- Quindi l'obiettivo di queste lezioni sarà quello di rimpiazzare il localStorage in ToDo Web con l'uso dell'API REST
- Facendo la stessa cosa in ToDo Mobile raggiungeremo l'obiettivo che ci siamo prefissati

---

# ToDoS Web API

REST API Client

<img src="/media/todo_00.png" width="550" style="margin:auto;position:relative; left: 0px; top: -30px;">

---

# ToDoS Web API

REST API Client

- Quindi andremo a  modificare *ToDoS Web* nel seguente modo
  - lettura da localStorage --> HTTP GET verso l'API REST
  - scrittura su localStorage --> HTTP POST/PUT verso l'API REST
  - cancellazione dal localStorage --> HTTP DELETE verso l'API REST 
 
<img src="/media/todo_01.png" width="400" style="margin:auto;position:relative; left: 0px; top: 5px;">

---

# ToDoS Web API

REST API Client

- In tal modo manterremo il core della nostra applicazione immutato
- Questo perchè abbiamo sviluppato ToDoS Web e ToDoS Mobile in maniera modulare
- Pertanto i punti in cui interagiamo con il localStorage sono limitati e dovremo apportare poche modifiche

<img src="/media/todo_02.png" width="450" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Web API

Vecchio modello Web

- Nella prima metà degli anni '90, la maggior parte dei siti Web era basata su pagine HTML complete
- Ogni azione dell'utente richiedeva il caricamento di una nuova pagina completa dal server. 
- Questo processo è stato inefficiente, come evidenziato dall'esperienza utente: 
  - tutto il contenuto della pagina è scomparso, quindi è apparsa la nuova pagina. 
  - ogni volta che il browser ricaricava una pagina a causa di una modifica parziale, tutto il contenuto doveva essere reinviato, anche se solo alcune informazioni erano cambiate. 
  - ciò ha posto un carico aggiuntivo sul server e ha reso la larghezza di banda un fattore limitante per le prestazioni.
- Il termine `AJAX` (***Ashyncronous Javascript and XML***) è stato pubblicamente utilizzato per la prima volta nel 2005 in un articolo intitolato *Ajax: A New Approach to Web Applications*, basato sulle tecniche utilizzate nelle pagine di Google (Gmail e Maps)
- Nel2006, il World Wide Web Consortium (W3C) ha rilasciato la prima bozza di specifica per l'oggetto ***XMLHttpRequest*** nel tentativo di creare uno standard Web ufficiale per AJAX
---

# ToDoS Web API

AJAX

- ***AJAX*** è un insieme di tecniche di sviluppo (modello di programmazione) web che utilizza varie tecnologie web sul lato client per creare applicazioni web asincrone. 
- Con Ajax, le applicazioni Web possono inviare e recuperare dati da un server in modo asincrono (in background) senza interferire con la visualizzazione e il comportamento della pagina esistente. 
- Disaccoppiando il livello di interscambio dei dati dal livello di presentazione
- Ajax consente alle pagine Web e, per estensione, alle applicazioni Web, di modificare i contenuti in modo dinamico senza la necessità di ricaricare l'intera pagina.
- In pratica, le implementazioni moderne utilizzano comunemente JSON invece di XML.
- La pagina Web può essere modificata da JavaScript per essere visualizzata dinamicamente e consentire all'utente di interagire con le nuove informazioni. - 

---

# ToDoS Web API

AJAX

<img src="/media/todo_03.png" width="480" style="margin:auto;position:relative; left: 0px; top: -50px;">

---

# ToDoS Web API

fetch API

- Il modello AJAX ha rivoluzionato il web permettendo la realizzazione di vere e proprie applicazioni Web con performance e caratteristiche simile alle tradizionali applicazioni desktop
- Tuttavia la programmazione AJAX e l'uso dell'oggetto *XMLHttpRequest* sono sempre stati difficoltosi
- Quindi circa nel 2015 (Chrome 42) è stata introdotta una nuova API [FETCH](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- L'API `Fetch` fornisce un'interfaccia moderna, più potente e flessibile di XMLHttpRequest
- Quindi il metodo di programmazione AJAX (con JSON al posto di XML) rimane valido anche se semplificato grazie alll'introduzione di ***Fecth***

<img src="/media/todo_04.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# ToDoS Web API

fetch API

- Per implementare la nostra applicazione *ToDoS Web API* utilizzeremo proprio l'API *Fetch* in JS
- *Fetch* invia un oggetto `Request` al server destinatario, identificato da un URL, e riceve un oggetto `Response` che contiene la risposta del server (dati o errore)

<img src="/media/todo_05.png" width="500" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Web API

fetch API

**Oggetto Request**

```js
new Request(input)
new Request(input, options)
```

dove:
- *input*: URL del server a cui inviare la richiesta
- *options*:
  - *method*: metodo HTTP (GET default) per la chiamata
  - *headers*: eventuali HTTP header
  - *body*: body della richiesta (es: POST) 

<br>

```js
const request = await fetch('https://my.api.server.it/todos/');
```

---

# ToDoS Web API

fetch API

<br>

```js
const request = await fetch('https://my.api.server.it/todos', {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo), // body data type must match "Content-Type" header
    mode: "cors", // no-cors, *cors, same-origin
  });
```


<br><br>

```js
const request = await fetch('https://my.api.server.it/todos/15', {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
  });
```

---

# ToDoS Web API

fetch API

**Oggetto Response**

```js
new Response()
new Response(body)
new Response(body, options)
```

dove:
- *body*: il body della risposta (String, Blob, ...)
- *options*:
  - *status*: lo stato HTTP della risposta
  - *statusText*: Un messaggio testuale associato allo status (defaul: "")
  - *headers*: eventuali HTTP header 

<br>

```js
const response = new Response(JSON.stringify(todo), { status: 200, statusText: "OK" });
```

---

# ToDoS Web API

Esercitazione_01

Questo passo ci server per poter sviluppare *ToDoS Web API*

- Far girare ToDoS REST API
- Fare un test e creare 3 ToDo con *thunderclient*

<br>

```js
[ {
    "id": 1, "task": "Studiare TPSI", "done": true, "priority": 1
  },
  {
    "id": 2, "task": "Studiare RETI", "done": false, "priority": 2 
  },
  {
    "id": 3, "task": "Studiare Italiano", "done": true, "priority": 2
  }]
```

---

# ToDoS Web API

REST API Client

- Bene adesso possiamo procedere con la modifica di *ToDoS Web* in modo da rimpiazzare localStorage con Fetch API
- Al fine di mantener eil codice pulito ed organizzato, raggruppiamo tutte le chiamate ad API, tramite fecth, in un modulo chiamato *todos_api.js*

```bash
src
├── app.html
├── components
│   ├── cell.svelte
│   ├── icon.svelte
│   ├── priority.svelte
│   ├── todo_item.svelte
│   └── todo_list.svelte
├── js
│   └── todos_api.js --> modulo helper 
└── routes
    ├── +page.server.js
    └── +page.svelte
```

---

# ToDoS Web API

REST API Client

- La prima cosa da fare è modificare la funzione *onMount* in cui carichiamo dal localStorage tutta la ToDo List
- Dobbiamo ora rimuovere il codice del localStorage e rimpiazzarlo con una chiamata GET all'API *http://localhost:5173/api/todos*

<img src="/media/todo_07.png" width="450" style="margin:auto;position:relative; left: -220px; top: 40px;">
<img src="/media/todo_06.png" width="400" style="margin:auto;position:relative; left: 250px; top: -230px;">

---

# ToDoS Web API

Esercitazione_02

- Implementare *todos_api.js* e le modifiche al componente *ToDo List*
- Consegnare su github (non fare assolutamente il commit di node_modules)

<img src="/media/todo_08.png" width="650" style="margin:auto;position:relative; left: 0px; top: 10px;">

<br>

- I tre ToDo creati con *thunderclient* saranno visualizzati anche se il localStorage è vuoto in quanto sono prelevati dal server tramite la REST API


---

# ToDoS Web API

REST API Client

- Ora siamo in una situazione "ibrida*, nel senso che la ToDO List iniziale viene prelevata dal server, ma se aggiungiamo un nuovo ToDo Item questo viene memorizzato nel localStorage
- Pertanto modifichiamo questo comportamento, facendo in modo che un nuovo ToDo Item sia memorizzato nel server tramite l'API TODOS

<img src="/media/todo_09.png" width="400" style="margin:auto;position:relative; left: -200px; top: 10px;">
<img src="/media/todo_10.png" width="360" style="margin:auto;position:relative; left: 220px; top: -300px;">

---

# ToDoS Web API

Esercitazione_03

- Implementare *todos_api.js* e le modifiche al componente *ToDo List*
- Consegnare su github (non fare assolutamente il commit di node_modules)

<img src="/media/todo_08.png" width="650" style="margin:auto;position:relative; left: 0px; top: 10px;">


---

# ToDoS Web API

REST API Client

- Sfortunatamente le modifiche che abbiamo apportato non funzionano
- Se guardate la console di JS quando create un nuovo ToDo vedrete qualcosa di simile

<img src="/media/todo_11.png" width="850" style="margin:auto;position:relative; left: 0px; top: 10px;">

<br>

- In realtà quest'errore è corretto ed era previsto
- E' un errore dovuto al fatto che il dominio del server API e del client sono diversi (http://localhost:5173 vs http://localhost:5174)  

---

# ToDoS Web API

CORS

- Si parla di  `Cross-Origin Resource Sharing` (**CORS**) quando un client richiede una risorsa di un differente dominio, protocollo o porta. 
- Ad esempio una web application con dominio X non può richiedere una risorsa ad un dominio Y tramite AJAX request se Y non ha abilitato il CORS.
- Lo standard CORS funziona aggiungendo un nuovo HTTP headers che permette ai server di specificare i domini  a cui è permesso fare richieste per recuperare dati. 
- E’ possibile anche inserire come dominio abilitato `*` per abilitare qualsiasi dominio, oppure specificare esattamente la URL del dominio che si vuole accettare. 

---

# ToDoS Web API

CORS

<img src="/media/todo_12.png" width="700" style="margin:auto;position:relative; left: 0px; top: -70px;">

---

# ToDoS Web API

CORS

<div style="width: 50%">

- CORS si basa anche su un meccanismo mediante il quale i browser effettuano una richiesta di `preflight` al server che ospita la risorsa cross-origin, al fine di verificare che il server consenta l'effettiva richiesta. 
- In quel preflight, il browser invia intestazioni che indicano il metodo HTTP e le intestazioni che verranno utilizzate nella richiesta effettiva.

</div>

<img src="/media/todo_13.png" width="450" style="margin:auto;position:relative; left: 250px; top: -330px;">

---

# ToDoS Web API

CORS

- Il motivo dell’errore riportato nel nostro esempio (* Response to preflight request doesn't pass access control check*)) era quindi causato dal fatto che la richiesta POST era stata identificata come ***preflight*** request e quindi il browser ha prima inviato una richiesta OPTIONS per sapere se poteva inoltrare una richiesta POST
- Tuttavia il nostro sever API non implementa un handler per il metodo *OPTIONS*, quindi questo genera l'errore
- Quindi per risolvere il problema dobbiamo implementare l'handler per HTTO OPTION nel server API in modo che fornisca il seguente header

<br>

```js
Access-Control-Allow-Origin: * 

oppure

Access-Control-Allow-Origin: http://localhost:5174
```
---

# ToDoS Web API

REST API Client

- Quindi modifichiamo il server API in questo modo
  
<img src="/media/todo_14.png" width="450" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Web API

Esercitazione_04

- Implementare *todos_api.js* e le modifiche al componente *ToDo List*
- Consegnare su github (non fare assolutamente il commit di node_modules)
- Ora creiamo un ToDo e tutto funzionerà correttamente senza errori ed il ToDo verrà inserito nel DB
  
<img src="/media/todo_15.png" width="700" style="margin:auto;position:relative; left: 0px; top: 10px;">
<img src="/media/todo_16.png" width="550" style="margin:auto;position:relative; left: 0px; top: 30px;">

---

# ToDoS Web API

REST API Client

- Bene, adesso che abbiamo risolto il problema del CORS, non ci resta che implementare l'update e il delete di un ToDo
- Partiamo con l'update

<img src="/media/todo_17.png" width="450" style="margin:auto;position:relative; left: -250px; top: 10px;">
<img src="/media/todo_18.png" width="450" style="margin:auto;position:relative; left: 250px; top: -250px;">

---

# ToDoS Web API

Esercitazione_05

- Implementare *todos_api.js* e le modifiche al componente *ToDo List*
- Consegnare su github (non fare assolutamente il commit di node_modules)
  
<img src="/media/todo_19.png" width="700" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Web API

REST API Client

- Infine implementiamo la rimozione di un ToDo Item esistente
  
<img src="/media/todo_20.png" width="450" style="margin:auto;position:relative; left: -250px; top: 30px;">
<img src="/media/todo_21.png" width="450" style="margin:auto;position:relative; left: 250px; top: -220px;">

---

# ToDoS Web API

Esercitazione_06

- Implementare *todos_api.js* e le modifiche al componente *ToDo List*
- Consegnare su github (non fare assolutamente il commit di node_modules)

---

# ToDoS Web API

REST API Client

- Bene come visto, con pochissime modifiche al componente *ToDo List* abbiamo modificato pesantemente la nostra applicazione
- Ora l'applicazione non usa più il localStorage per salvare la nostra ToDo List, ma sfrutta il server API REST che abbiamo sviluppato
- In questo modo ora la nostra ToDo List può essere fruibile da qualsiasi dispositivo e da qualsiasi luogo

---

# ToDoS Web API

REST API Client

<img src="/media/todo_22.gif" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">
