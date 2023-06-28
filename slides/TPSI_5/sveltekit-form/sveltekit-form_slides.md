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

Sveltekit Form && Back-end

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>


---

# Routing

Sveltekit routing

- Come visto precedentemente Sveltekit ha un sofisticato meccanismo di routing filesystem based
- Il meccanismo prevede che ogni route (destinazione) della tua applicazione web corrisponda ad una directory

```bash
routes
├── +layout.svelte
├── +page.svelte
├── pcto
│   ├── aziende
│   │   └── +page.svelte --> implementa /pcto/aziende
│   ├── presenze
│   │   └── +page.svelte --> implementa /pcto/presenze
│   ├── stage
│   │   ├── +page.svelte
│       
├── programmazione
│   ├── classe
│   │   └── +page.svelte --> implementa /programmazione/classe
```

---

# Routing

Sveltekit SSR

- `+page.svelte`: questo componente implementa una pagina della tua applicazione.
- Per default le pagine sono renderizzate prima lato server (SSR) e poi lato client nel browser (CSR)

**SSR -  Server Side Rendering**

- Il rendering lato server (SSR) è la generazione dei contenuti della pagina sul server. 
- SSR è generalmente preferito per il SEO. 
- Tende a migliorare le prestazioni percepite dall'utente 
- In SvelteKit, le pagine sono renderizzate lato server per impostazione predefinita. 
- Puoi disabilitare SSR in questo modo

<br>

```js
//nel file +page.js

export const ssr = false;
```

---

# Routing

Sveltekit CSR
 
**CSR - Client Side Rendering**

- Il rendering lato client (CSR) è la generazione dei contenuti della pagina nel browser Web utilizzando JavaScript.
- Il processo di rendering lato client si chiama **Idratazione**, in quanto arricchisce in modo dinamico la pagina statica generata lato server

 In SvelteKit, le pagine sono renderizzate lato client per impostazione predefinita. 
- Puoi disabilitare CSR in questo modo

<br>

```js
//nel file +page.js

export const csr = false;
```

<br>

- Pensa all'esempio del componente Counter visto nell'introduzione a sveltekit

---

# Routing

Idratazione

- I componenti Svelte memorizzano uno stato e aggiornano il DOM al mutare dello stato. 
- Durante il recupero dei dati durante SSR, per impostazione predefinita SvelteKit memorizzerà questi dati e li trasmetterà al client insieme all'HTML generato dal server. 
- I componenti possono quindi essere inizializzati sul client con quei dati senza dover chiamare nuovamente gli stessi endpoint API. 
- Svelte controllerà quindi che il DOM sia nello stato previsto e collegherà i listener di eventi in un processo chiamato `idratazione`. 
- Una volta che i componenti sono completamente idratati, possono reagire ai cambiamenti delle loro proprietà proprio come qualsiasi componente Svelte appena creato.

---

# Routing

Pagine back-end

- Spesso una pagina ha la necessità di caricare dei dati prima di essere renderizzata
- Questi dati provengono molto spesso da un DB situato nel back-end della nostra applicazione (Data Tier)
- Pertanto sveltekit mette a disposizione un semplice metodo per eseguire del codice JS lato back-end
- Per far ciò dobbiamo creare nella directory della route un file chiamato `+page.js` o `+page.server.js` 

```bash
routes
├── pcto
│   ├── aziende
│   │   ├── +page.server.js -> implementa il back-end di /pcto/aziende
│   │   └── +page.svelte
│   ├── presenze
│   │   ├── +page.server.js
│   │   └── +page.svelte
│       
├── programmazione
│   ├── classe
│   │   ├── +page.server.js
│   │   └── +page.svelte

```

---

# Routing

Pagine back-end

- Quindi essendo il file `+page.js` e `+page.server.js` eseguito lato backend ha accesso a tutte le risorse del server che non sono ovviamente disponibili lato client
- Quindi nel back-end possiamo interagire con tutti i tipi di DB (SQL, NoSQL, ...)
- Possiamo eseguire operazioni di sistema (accesso al filesystem, ...)
- Questa sezione dell'applicazione coincide concettualemnte con lo script PHP che viene eseguito lato server
- Tuttavia il funzionamento è molto diverso. Come vedremo *+page.server.js* non renderizza nessun HTML ma fornisce solo i dati alla pagina
- Questo permette di ottenere le stesse funzionalità classiche di PHP ma in maniera molto più efficiente e veloce fornendo all'utente un'esperienza moderna e prorpia di una webapp (riduzione della latenza e del numero di round trip verso il server)

---

# Routing

Pagine back-end

**Ma come mai abbiamo due file diversi lato back-end?**
- La ragione è semplice

- `+page.js` viene eseguito in queste considizoni:
  - se **ssr == true** --> esguito sul back-end 
  - se **csr == true** --> eseguito sul front-end

- `+page.server.js` viene SEMPRE eseguito lato back-end indipendentemente dal valore di *ssr* e *csr*


- Proviamo ora a verificare il processo di idratazione e i concetti fin qui esposti


---

# SSR e CSR

Esercitazione_01

- Crea lo scaffolding di una nuova applicazione sveltekit chiamata SvelteForm
- Ora modifichiamo la pagina principale in modo che visualizzi una lista si utenti

<img src="/media/form_00.png" width="600" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# SSR e CSR

Esercitazione_01

+page.svelte
```html

<script>
    export let data; // riceve i dati forniti dal backend durante il load della pagina
</script>

<h1>Welcome to SvelteKit FORM Example</h1>

<ul> <!-- Visualizza una lista di utenti ricevuti dal back end-->
{#each data.utenti as utente} 
    <li>{utente}</li>
{/each}
</ul>
```

---

# SSR e CSR

Esercitazione_01

- Ora crea la pagina back-end

+page.js

```html
export const csr = true; // csr attivo
export const ssr = true; //ssr attivo

export function load({ params }) {
    console.log("ESECUIONE FUNZIONE LOAD:", Date.now());
    
    // creo la lista degli utenti. Qui potrei accedere al DB
    let utenti = [
        'Mario',
        'Luca',
        'Gianni',
        'Pino'
    ];

    // restituiamo la lista degli utenti
    return { utenti }
}
```

---

# SSR e CSR

Esercitazione_01

- Ora ricarica la home page della tua applicazione
- Controlla la console della pagina
- Controlla la console del server


<img src="/media/form_01.png" width="500" style="margin:auto;position:relative; left: -220px; top: 20px;">
<img src="/media/form_02.png" width="400" style="margin:auto;position:relative; left: 250px; top: -85px;">

- Come vedi la funzione **load** è stata eseguita prima sul backend e dopo circa 300ms sul front-end
- Questo è corretto siccome sia ssr che csr sono impostate a true 

---

# SSR e CSR

Esercitazione_01

- Ora se guardi il docice della pagina (Ctrl + U)

```html
    ...
    <body data-sveltekit-preload-data="hover">
		<div style="display: contents">  
        <h1 data-svelte-h="svelte-1ka9k7y">Welcome to SvelteKit FORM Example</h1> 
        <ul>
            <li>Mario</li>
                <li>Luca</li>
                <li>Gianni</li>
                <li>Pino</li>
            </ul> 
			<script>
				{
					__sveltekit_dev = {
						base: new URL(".", location).pathname.slice(0, -1),
						env: {}
					};
                ...
			</script>
```

---

# SSR e CSR

Esercitazione_01

- Come è facile notare abbiamo la lista degli utenti renderizzata in HTML, grazie al fatto che ssr = true
- Abbiamo anche il codice JS che aggiorna il DOM in funzione dello stato del componente, siccome csr = true

<br>

- Ora modifica il codice in modo che **csr -> false e ssr -> true**
- Ricarica la pagina ed osserva come è cambiato il comportamento

<img src="/media/form_03.png" width="450" style="margin:auto;position:relative; left: -220px; top: 20px;">
<img src="/media/form_04.png" width="350" style="margin:auto;position:relative; left: 250px; top: -85px;">

- Come vedi la funzione load è stata eseguita server side (ssr = true) ma NON è stata eseguita lato clienti (csr = false)
---

# SSR e CSR

Esercitazione_01

- Se osserviamo dinuovo il codice della pagina ricevuta dal browser

```html
    ...
    <body data-sveltekit-preload-data="hover">
		<div style="display: contents">  
        <h1 data-svelte-h="svelte-1ka9k7y">Welcome to SvelteKit FORM Example</h1> 
        <ul>
            <li>Mario</li>
            <li>Luca</li>
            <li>Gianni</li>
            <li>Pino</li>
        </ul>
        ....
```

- Come vedi c'è un rendering HTML completo, ma è ASSENTE la parte JS in quanto csr = false
- Questo è estremamente simile al modo in cui funziona PHP
- In questo caso la pagina non è stata idratata e ogni modifica dello stato richiede un nuovo rendering lato server e quindi un nuovo round trip 

---

# SSR e CSR

Esercitazione_01

- Ora modifica il codice in modo che **csr -> true e ssr -> false**
- Ricarica la pagina ed osserva come è cambiato il comportamento

<img src="/media/form_05.png" width="450" style="margin:auto;position:relative; left: -220px; top: 20px;">
<img src="/media/form_06.png" width="400" style="margin:auto;position:relative; left: 250px; top: -85px;">

- Come vedi la funzione load NON è stata eseguita server side (ssr = false) ma  è stata eseguita lato clienti (csr = true)


---

# SSR e CSR

Esercitazione_01

- Se osserviamo dinuovo il codice della pagina ricevuta dal browser

```html
    ...
		<div style="display: contents">
			<script>
				{
					const element = document.currentScript.parentElement;
					Promise.all([
						import("/node_modules/@sveltejs/kit/src/runtime/client/start.js"),
						import("/@fs/home/antonio/WORK/ITI_Agnelli/.../SvelteForm/.../generated/client/app.js")
					]).then(([kit, app]) => {
						kit.start(app, element);
					});
				}
			</script>
    ...
```

- Come vedi NON è presente nessun rendering HTML, ma la pagina è generata dinamicamente da JS in quanto ssr = false e csr = true
- Quindi HTML è minimo e carica in modo molto veloce e in aggiunta la pagina può essere aggiornata senza fare una nuova richiesta al server

---

# SSR e CSR

Esercitazione_01

- Quindi in quest'esercitazione abbiamo capito a fondo il modo di funzionare di sveltekit in funzione delle variabile ssr e csr
- Ovviamente l'opzione ssr = false e csr = false NON è possibile in quanto non genera nulla
- Pertanto in funzione dell'esigenze della mia applicazione, io come sviluppatore ho il controllo totale

Esempi:

- il blog profmancusoa per esempio usa ssr = false e csr = true in quanto è un sito statico 
- SARP usa ssr = true e csr = true in quanto accede ad un DB per la gestione dei dati, ma grazie a csr = true le pagine front-end sono molto veloci e responsive (no round trip al server)

<br>
<Banner padding="20px">
Ciò dimostra una grande flessibilità di sveltekit e conferma che è adatto a tutte le situazioni e che permette lo sviluppo full-stack (back-end e front-end) utilizzando un solo framework e un solo linguaggio JS
</Banner>

---

# Form e Action

Esercitazione_02

- In quest'esercitazione vediamo come gestire nel back-end  i dati inviati da un form nel front-end
- Siccome questo scenario richiede SEMPRE un processamento back-end useremo il file `+page.server.js`
- Quindi iniziamo con il rinominare `+page.js` in `+page.server.js`
- Se ricarichiamo la pagina vediamo che la funzione load viene sempre eseguita nel back-end e mai nel front-end (esattamente quello che vogliamo)
- Ora modifica *+page.server.js* in questo modo

<img src="/media/form_07.png" width="350" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# Form e Action

Esercitazione_02

<div style="width:50%;">

- Ora modifichiamo il front-end in modo che visualizzi la lista di utenti presenti nel DB e che offra anche la possibilità di aggiungere nuovi utenti
- Quindi come si vede ci sono due parti:
  - il form per inviare i dati di un nuovo utente al back-end
  - il ciclo che visualizza i dati ricevuti dalla funzione load del back-end

</div>

<img src="/media/form_08.png" width="420" style="margin:auto;position:relative; left: 250px; top: -360px;">

---

# Form e Action

Esercitazione_02

<img src="/media/form_10.png" width="600" style="margin:auto;position:relative; left: 0px; top: 20px;">


---

# Form e Action

Esercitazione_02

- Se ora ricarichiamo la pagina e premiamo il pulsante *Invia* otteniamo un errore 405

<img src="/media/form_09.png" width="500" style="margin:auto;position:relative; left: 0px; top: 0px;">

- Questo è dovuto al fatto che il form è stato inviato tramite il metodo HTTP POST al back-end
- Ma lato back-end non abbiamo processato il form
- Vediamo come porre rimedio
  
---

# Form e Action

Esercitazione_02

- Come scritto nell'errore precedente, non è definita una action per la gestione del form
- Sveltekit implementa un sofisticato meccanismo di action per la gestione degli eventi nel back-end

<br>
<Banner padding="30px">
In SvelteKit una action è un metodo nel back-end per gestire le richieste di tipo POST provenienti dal front-end
</Banner>

<br>

- Quindi ora concentrimoci sullo scrivere la action `Default` per la gestione del form
- Quel che vogliamo fare è prelevare i dati inviati dal front-end ed aggiungere il nuovo utente al DB

---

# Form e Action

Esercitazione_02

- Modifichiamo il back-end aggiungendo il codice che definisce la ***Default action***

<img src="/media/form_11.png" width="500" style="margin:auto;position:relative; left: 0px; top: 5px;">

<br>

- Ogni action riceve in input la `request` proveniente dal front-end
- il metodo `formData()` dell'oggetto request, permette di accedere ai dati inviati dal form tramite HTTP POST (quindi li legge dal body della richiesta)
  
---

# Form e Action

Esercitazione_02

- Ora se compiliamo il form e premiamo Inviato non ptterremo più l'errore 405
- Lato front-end verrà visualizzata la stessa pagina, siccome nulla è cambiato
- Lato back-end preleviamo i valori del form e li stampiamo sulla console

<img src="/media/form_12.png" width="500" style="margin:auto;position:relative; left: 0px; top: 0px;">

<br>

- Come si può notare al termine dell'action, la pagina viene ricaricata (round trip)
- Quindi ora non ci resta che aggiungere i dati ricevuto al DB
- In questo modo al reload della pagina, il nuovo utente verrà correttamente visualizzato
 
---

# Form e Action

Esercitazione_02

<div style="width:45%;">

- Modifica ora il codice back-end in questo modo
- Come si vede accedo ai singoli campi del form con il metodo `get(<chiave>)`
- dove &lt;chiave&gt; coincide con il nome assegnato al singolo field del form
  
*PS: nel codice non è presente nessun tipo di validazione per mantenere il codice compatto*

</div>

<img src="/media/form_13.png" width="450" style="margin:auto;position:relative; left: 200px; top: -200px;">


---

# Form e Action

Esercitazione_02

- Ora dopo aver premuto il tasto Invia la pagina viene ricaricata e il nuovo utente correttamente visualizzato

<img src="/media/form_14.png" width="450" style="margin:auto;position:relative; left: 0px; top: 10px;">


---

# Form Errors

Esercitazione_03

- Come detto nella precedente esercitazione un'action riceve un oggetto *request*
- Tuttavia un action ha anche la possibilità di restituire una risposta al front-end
- L'oggetto restituito sarà accessibile nel front-end attraverso la variabile `form`
- In quest'esercitazione vediamo come gestire gli errori lato back-end
- In pratica quel che dobbiamo fare è una volta ricevuti i dati del form, vare una validazione
- In caso positivo procediamo con l'inserimento dell'utente nel DB
- In caso di errore non eseguiamo l'operazione di add e segnaliamo al front-end
- Vediamo come fare


---

# Form Errors

Esercitazione_03

<div style="width:50%;">

Modifica il codice del back-end in questo modo
- Se il form mi fornisce tutti i campi aggiorno il DB
- In caso contrario restituisco un errore
- Nell'oggetto restituito includo anche il valore dei campi ricevuti per migliorare l'esperienza utente
- form_error indica che c'è un errore nel form inviato
- form_vals: contiene i campi originali del form
</div>
<img src="/media/form_15.png" width="450" style="margin:auto;position:relative; left: 210px; top: -310px;">


---

# Form Errors

Esercitazione_03

Modifica il codice del front-end in questo  modo

<img src="/media/form_16.png" width="250" style="margin:auto;position:relative; left: -360px; top: -0px;">
<img src="/media/form_17.png" width="450" style="margin:auto;position:relative; left: 0px; top: -215px;">
<img src="/media/form_18.png" width="250" style="margin:auto;position:relative; left: 360px; top: -650px;">


---

# Form Errors

Esercitazione_03

**JS**
- Nello script abbiamo utilizzato la variabile *error* per semplicità. Contiene lo stato di errore del form `form.form_error`
- Pertanto se quando viene caricata la pagina, c'è un errore nel form leggiamo i valori di `form.form_vals` e li assegnamo alle tre variabili omonime

**HTML**
- Nel form abbiamo aggiunto, sotto ogni *input* un messaggio di errore, che deve essere visualizzato solo se c'è un errore e se il campo ha una lunghezza nulla
- Notare che abbiamo usato il meccanismo del *binding* di svelte per associare i campi del form alle variabili nome, cognome e età

---

# Form Errors

Esercitazione_03

<img src="/media/form_19.gif" width="600" style="margin:auto;position:relative; left: 0px; top: 0px;">

- Da notare che la validazione avviene anche lato client grazie al fatto che la pagina è dinamica ed idratata

---

# Form Errors

Esercitazione_03

- Consegnare tutta l'applicazione SvelteForm su github
- Assolutamente vietato fare il push della directory node_modules
- Ricorda di aggiungerla al file `.gitignore`

