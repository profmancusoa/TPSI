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
version: '1.0.0'
---  

# JavaScript

No brain no pain!

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>


---
layout: two-cols
---
https://javascript.info/

- js intro e full stack
- backend JS
- sintassi
- strict mode
- commenti
- console.log
- variabili var let const e scope
- operatori
- data types
- funzioni e arrow functions
- conditional
- loops
- stringhe e operatori stringhe
- array e operatori array
- objects e json 

::right::

- frontend JS
- sezione `<script>` 
- interagire con il dom innerhtml, etc
- eventi e asyncrhonoous programming
- svelte js intro e installazione


--- #slide 1

# Developer Survey 2021

https://insights.stackoverflow.com/survey/2021


<img src="/media/js00.png" class="mx-auto w-160" />


--- #slide 2
 
# JavaScript

Most commonly used programming language

<img src="/media/js01.png" class="mx-auto w-105" />


--- #slide 3
preload: false
---

# JavaScript

I linguaggi più utilizzati nel mondo dello sviluppo software

<img src="/media/js02.png" class="mx-auto w-130" />

<arrow v-click="1" x1="800" y1="420" x2="700" y2="150" color="#0000ff" width="3" arrowSize="1" />

--- #slide N
 
# Hello JS World!

Il tag \<script\>

- Uno programma JavaScript è inserito in una pagina HTML, tramite il tag `<script>...</script>`
- Il tag **\<script\>** può essere inserito ovunque nella pagina, ma normalmente viene inserito nella sezione \<head\>
- Spesso, per ragioni di performance viene inserito al fondo della pagina, alla fine della sezione \<body\>

```html {all|6-8}
<!DOCTYPE html>
<html lang="it">
  <head>
      <meta charset="UTF-8" />
      <title>Hello JS World</title>
      <script>
        alert("Hello JS World!!");
      </script>
  </head>
  <body>
    My HTML page with JS code!
  </body>
</html>
```

--- #slide N
 
# Hello JS World!

Il tag \<script\>

- Il codice JavaScript contenuto nel tag \<script\> viene eseguito automaticamento al caricamento della pagina HTML.

![js03](/media/js03.png)


--- #slide N
 
# Hello JS World!

Il tag \<script\>

- Tuttavia questa non è una pratica corretta.
- Esattamente come per lo stile CSS è buona norma seprarare il codice HTML dal programma JavaScript
- Pertanto, il modo corretto di includere un programma JavaScript in una pagina HTML, è di usare un file esterno ***.js***

```html {all|6-7}
<!DOCTYPE html>
<html lang="it">
  <head>
      <meta charset="UTF-8" />
      <title>Hello JS World</title>
      <script src="/path/to/script.js"></script> <!-- link relativo -->
      <script src="http://URL/to/script.js"></script> <!-- link assoluto -->
  </head>
  <body>
    My HTML page with JS code!
  </body>
</html>
```

--- #slide N
 
# Hello JS World!

Il tag \<script\>

- E' possibile ovviamente referenziare lo scipt JS tramite una URL valida
  
  ```<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js"></script>```

- Nel caso sia necessario, per pagine medio/complesse, si possono includere più script JS diversi

```html {all|6-8}
<!DOCTYPE html>
<html lang="it">
  <head>
      <meta charset="UTF-8" />
      <title>Hello JS World</title>
      <script src="https://url/to/script1/script1.js"></script>
      <script src="https://url/to/script2/script2.js"></script>
      <script src="https://url/to/script3/script3.js"></script>
  </head>
  <body>
    My HTML page with JS code!
  </body>
</html>
```


--- #slide N
 
# Esercizio js_01

Hello JS World!

1. Creare una pagina web basata sul codice delle slide precedenti e salvarla come *|cognome|_esercizio_js_01a.html*
2. Verificare l'esecuzione dello script JS all'avvio della pagina
3. Provare a modificare il codice JS
4. Creare una pagina web, che esegue il codice JS da file esterno e e salvarlo come *|cognome|_esercizio_js_01b.html* e *|cognome|_esercizio_js_01b.js*
5. Fornire il link github ai file con nome *|cognome|_esercizio_js_01a.html, |cognome|_esercizio_js_01b.html e |cognome|_esercizio_js_01b.js* 

--- #slide N
 
# Browser Developer Tools

&nbsp;

- L'esecuzione dello script può generare errori che però non sono visualizzati nella pagina HTML
- I moderni browser, offrono una serie di strumenti denominati ***Developer Tools***
- I tool di sviluppo più evoluti sono quelli di Chrome e Firefox
- Per accedere ai tool di sviluppo in Chrome basta premere <kbd>F12</kbd> o <kbd>CTRL + SHIFT + I</kbd>

![js04](/media/js04.png)

--- #slide N
 
 # Browser Developer Tools

https://developer.chrome.com/docs/devtools/

- **Elements**: Fornisce accesso al codice HTML e agli stili CSS. Utilissimo per fare il debugging di problematiche legate allo stile della pagina
- **Console**: Console JavaScript. Permette l'accesso al codice JS della pagina ed è utilissima per il debug
- **Sources**: Fornisce una panoramica sull'origina di tutte le risorse caricate dalla pagina
- **Network**: Permette di comprendere in modo dettagliato le operazioni di rete del browser
- **Performance**: Permette di registrare una sessione di navigazione ed analizzare in dettaglio le performance del browser e l'uso delle risorse
- **Memory**: Fornisce una visione dettagliata della memoria del browser durante l'esecuzione del codice JS
- **Application**: Fornisce accesso alle risorse dell'applicazione web (es: local storage, cookies, ...)
- **Security**: Offre una panoramica sugli aspetti di sicurezza della pagina (es: certificati SSL, ...)
- **Lighthouse**: Permette di iodentifficare e risolvere potenziali problemi lagati alla pagina web ottimizzandone le prestazioni
  
--- #slide N
 
# JS Console

REPL

- Per accedere direttamente alla console JS di Google Chrome basta premere  <kbd>CTRL + SHIFT + J</kbd>
- La console JS, oltre ad essere uno strumento di debugging è anche un **REPL**
- **REPL**: Read Evaluate Print Loop (https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)
- Pertanto la console/REPL JS permette di eseguire direttamente del codice JS generico, permette di interagire con la pagina HTML
- Il REPL JS è un ottimo strumento per apprendere JavaScript direttamente nel browser
- Un metodo alternativo è usare **node.js** sul proprio PC

![js05](/media/js05.png)


--- #slide N

# JS Console

REPL

- Quando inseriamo una linea di codice nella console JS e premiamo <kbd>Enter</kbd> questo viene immediatamente eseguito
- Per inserire più linee è necessario premere <kbd>SHIFT + Enter</kbd> e solo alla fine, per eseguire tutto il blocco  premere <kbd>Enter</kbd>

![js06](/media/js06.png)

--- #slide N
 
# Esercizio js_02

JS REPL

1. Aprire la console JS
2. Eseguire lo script dell'esercizio js_01 direttamente dalla console JS

--- #slide N
 
# JS Back-End

Node.js

- Esiste un terzo modo per eseguire uno script JS
- Nel corso degli anni JS ha abbracciato diversi domini di esecuzione e si è spostato anche dal lato dello sviluppo back-end
- Oggi JS può essere eseguito su qualsiasi piattaforma:
  - schede embedded per mondo IoT (arduino e simili)
  - Web browser
  - Smart Phone
  - Lato server nel cloud e non

- Lo sviluppo JS lato back-end è reso possibile grazie a `Node.js`
- Node.js è un runtime JavaScript costruito sul motore JavaScript V8 di Chrome.
- Node.js permette l'esecuzione di applicazione back-end scritte in JS

--- #slide N
 
# JS Back-End

Node.js

- Node.js è
  - **Single Threaded**: c'è un solo thread di esecuzione (in contrapposizione del modello threaded di altri web server e application engine) 
  - **Non-Blocking I/O**: Il thread di esecuzione **NON** si ferma/blocca in attesa del completamento di operazioni di I/O (rete, disco, ...)
  - **Asynchronous**: L'esecuzione del codice è asincrona e basata su call back e non sequenziale. Le operazioni I/O sono eseguite in maniera asincrona rispetto al thread principale.

- Importante notare che Node.js  non è adatto a problemi CPU intensive, in quanto è single-threaded.
- **Pertanto risulta evidente che Node.js fornisce le migliori performance per applicazioni I/O intensive (rete)**
- Node.js è è un runtime JavaScript guidato da eventi asincroni (richieste HTTP) e progettato per creare applicazioni di rete scalabili.

--- #slide N
 
# JS Back-End

Node.js

![/media/js07.png](/media/js07.png)

--- #slide N
 
# JS Back-End

Node.js

- Importante notare che Node.js è scritto per un sistema operativo e non per un browser
- Pertanto non tutte le API sono disponibili
 
  <br />ES:<br />
  ```js
  alert("CIAO");
  ```
- Non può essere eseguito in Node.js e genera un errore
  <br />
  
  ```js
  Uncaught ReferenceError: alert is not defined
  ```

- Nota che Node.js svolge anche la funzione di REPL


--- #slide N
 
# Esercizio js_03

Node.js

Dato il seguente script JS

```js
var a =5;
var b = 7;
console.log(a+b);
```

1. Eseguire lo script nel REPL di Node.js, invocando `node` da console e inserendo le istruzioni su linee diverse
2. Creare un file |cognome|_esercizio_js_03.js contenente lo script sopra
3. Eseguire lo script da console
   
   ```bash
   node |cognome|_esercizio_js_03.js
   ```
4. Fornire il link github al file con nome *|cognome|_esercizio_js_03.js* 

--- #slide N
 
# Struttura del codice

Statements

- Un programma JavaScript, esattamente come in C/C++ e Java, è composto da una serie di ```statements```
- Uno **statement** è un costrutto sintattico o un comando/istruzione che esegue una specifica azione
- Per esempio abbiamo visto, nelle slide precedenti, lo statement **alert("Hello JS World!!");**
- Un programma JS è composto da uno o più statement
- Gli statement possono essere separati dal carattere ```;```

<br/>

```js
alert("Hello ");alert("JS ");alert("World!!");
```
<br/>


- Normalmente gli statement si scrivono su linee separate, per aumentare la leggibilità del codice

<br/>

```js
alert("Hello ");
alert("JS ");
alert("World!!");
```

--- #slide N
 
# Struttura del codice

Semicolons

- JavaScript permette di sostituire il terminatore di statement ```;```  con un  ```EOL``` (End of Line - Ritorno a Capo)
- Pertanto, tranne casi specifici, il carattere ```;``` può essere omesso

<br/>

```js
alert("Hello ")
alert("JS ")
alert("World!!")
```

<br/>

- In questo caso, l'interprete JavaScript riconosce il ritorno a capo come terminatore dello statement (;)
- Questo processo si chiama ***automatic semicolon insertion***
- Per esempio in C/C++ e Java ciò **NON** è permesso

--- #slide N
 
# Struttura del codice

Semicolons

- Tuttavia ci sono delle eccezzioni
- Non sempre un ritorno a capo viene automaticamente sostitutio da un **;**

<br/>

```js
alert(5 +
2);
```

<br/>

- In questo scenario, lo EOL dopo il +, **NON** viene sostituito con **;** ma solo come un normale ritorno a capo
- L'interprete comprende che terminando lo statement dopo il +, l'esperessione non sarebbe  valida ***5 + ????***
- Pertanto non sostituendo EOL con ; l'espressione risulta completa e l'interprete è in grado di eseguire correttamente lo statement.
- Da ciò ne consegue che, **i parametri di una funzione, possono essere forniti su più linee**.
- Ciò è vero anche in C/C++ e Java
- NOTA: L'interprete JS non è **SEMPRE** in grado di effettuare l'automatic semicolon insertion
<div style="background-color:green;color:white;padding:0px;">
  <p>Il mio stile, che deriva dal C, prevede quindi di inserire sempre <b>;</b> alla fine di ogni statement</p>
</div> 

--- #slide N
 
# Struttura del codice

Commenti

- In modo analogo a qualsiasi altro linguaggio di programmazione, una parte del codice **MOLTO** importante sono i *commenti*.
- Per codici non banali, è necessario aggiungere commenti che descrivono il funzionamento del codice e la motivazione di alcune scelte implementative.

Ci sono due tipi di commenti:
- **singola linea**: il commento inizia e finisce su un'unica linea
  
```js
// Questo è un commento su singola linea
alert("Commento singola linea"); //Anche questo è un commento valido
```

  - **multi linea**: il commento occupa 2 o più linee

```js
/*Questo è un
commento
multi linea*/
alert("Commento multi linea"); //Anche questo è un commento valido

```

--- #slide N
 
# Struttura del codice

Commenti

- I commenti nested non sono supportati

```js
/* Commento dentro un altro   
   /*  commento non valido*/
*/

```
<br />
<br />

- In VS Code è possibile inserire un commento, selezionando il codice e  premendo i tasi `CTRL + SHIFT + /`

<br />
<br />

- Ricorda che è una buona pratica di programmazione commentare in modo intelligente il codice
- La ***leggibilità*** del codice è un parametro molto importante. I commenti aumentano la comprensione e la capacità di leggere e comprender eil codice sorgente.
- I commenti del codice, sono l'equivalente della parafrasi in Italiano
- E' più facile leggere la divina commedia con la parafrasi o solo con i versi originali?
- Ecco per il codice sorgente è esattamente la stessa cosa.

--- #slide N
 
# Variabili

Tipizzazione

- Una variabile è un concetto astratto che non dipende dal linguaggio di programmazione.
- ***Una variabile è concettualmente un contenitore identificabile per un dato/valore.***
- In JavaScript le variabili implementano esattamente questo concetto, in modo del tutto analogo a C/C++ e Java.
- La differenza principale deriva dal fatto che C/C++ e Java sono linguaggi `fortemente tipizzati`
- Al contrario JavaScript è un linguaggio `debolmente tipizzato`.

- In un linguaggio ***fortemente tipizzato***, il programmatore è obbligato a specificare il tipo di ogni variabile e le assegnazioni posso avvenire solo tra tipi corenti.

```c
int num;

num = 4; // assegnazione valida
num = "ciao"; // errore - assegnazione invalida
```

--- #slide N
 
# Variabili

Tipizzazione

- In modo opposto, in un linguaggio ***debolmente tipizzato***, il programmatore ***NON*** assegna un tipo alle variabili.
- Pertanto una variabile può contenere un qualsiasi tipo di dato che può cambiare a runtime
- I linguaggi di programmazione con questa caratteristica, come JS, sono anche chiama **dynamically typed**. 
- Infatti esistono i tipi di dati, ma alle variabili non è assegnato un tipo predeterminato.

<br />


```js
var num;

num = 4; // assegnazione valida
num = "ciao"; // anche quest'assegnazione è valida

```
<br />

- Questa caratteristica, tipica dei linguaggi interpretati, fornisce grande flessibilità al programmatore.
- Tuttavia ha anche alcuni difetti, soprattutto per chi è alle prime armi o per grossi progetti.

--- #slide N
 
# Variabili

Dichiarazione e Definizione

- In JavaScript, tradizionalmente  una variabile può essere definita tramite la keyword `var`
- Dalla specifica del 2015 chiamata ECMA6 o ES6 una variabile si può anche definire tramite la keyword `let`
- *Vedermo in futuro la differenza principale tra le due modalità di dichiarazione*
  
<br />

```js
var numero; // dichiara una variabile di nome numero
let testo; // dichiara una variabile di nome testo

numero = 10; // assegna il valore int 10 alla variabile numero
testo = "ciao"; // Assegna la stringa "ciao" alla variabile testo

var numero = 20; // Dichiara ed assegna 20 alla variabile numero
let testo = "javascript"; // Dichiara ed assegna "javascript" alla variabile testo

let numero = 10, testo ="ciao";  // Definizione multipla di variabili su singola linea
// tuttavia per aumentare la leggibilità del codice 
// è una buona pratica dichiarare/definire una variabile per linea

```

--- #slide N
 
# Variabili

Regole sintattiche

<div style="background-color:green;color:white;padding: 10px;">
In JavaScript il nome di una variabile è determinata dalle seguenti regole:
<ol>
  <li>il nome può contenere solo lettere, numeri, i simboli $ e _</li>
  <li>il primo carattere non può essere un numero</li>
  <li>il nome non può essere una keyword riservata</li>
</ol>
</div>  

<br />

```js
// Dichiarazioni valide
let utente;
let nomeUtente; //camelCase
let nome_utente; //snake case (https://en.wikipedia.org/wiki/Naming_convention_(programming))
let NomeUtente; // pascal case
let $;
let _;

// Dichiarazioni non valide
let 1utente; // viola regola 2
let user-name; // viola regola 1
let uten*te; // viola regola 1
let 1_user; // viola regola 2
```

--- #slide N
 
# Variabili

Regole sintattiche

 ```js
 // Dichiarazioni non valide
 let class; // viola la regola 3
 let else; // viola la regola 3
 let catch; // viola la regola 3
 let this; // viola la regola 3
 ```

<br />

- Una lista di tutte le keyword riservate si può trovare qui: [JS Keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords)

- Importante notare che il nome delle variabili in JS è ***case sensitive***.

```js

let apple;
let Apple;

// Sono due variabili diverse
```

--- #slide N
 
# Costanti

- La specifica ES6 ha introdotto anche la keyword `const` per dichiarare una costante, cioè una variabile che non può essere riassegnata, e pertanto che mantiene costante il valore assegnato.
  
<br />

```js
let numero =5;
numero =6; // riassegnazione valida

cont numero =5;
numero = 6; //genera un errore: Uncaught TypeError: Assignment to constant variable.
```

<br />

- Una pratica comunemente adottata (fortemente consigliata) in JavaScript è quella di usare le costanti per nominare dei valori difficili da ricordare.
- Questo aumenta chairamente la leggibilità del codice.
- Normalmente questo tipo di costanti viene nominato usando caratteri tutti maiuscoli e separati da underscore.

```js
const ROSSO = "#F00";
const VERDE = "#0F0";
const BLU = "#00F";

```

--- #slide N
 
# Variabili

Best Practice

- I nomi assegnati alle variabili, sicuramente poco importanti per l'interprete o compilatore, al contrario sono molto importanti per i programmatori.
- Infatti da esse si può subito comprendere se il codice è stato scritto da un principiante o da uno sviluppatore professionista.
- Al fine di aumentare la leggibilità del codice è di `fondamentale` importanza assegnare i nomi alle variabili in modo che:
  - il significato sia ovvio
  - descriva la semantica del dato che memorizza
  - sia univoca
  - sia facilmente leggibile e comprensibile da un umano
  - non rappresenti abbreviazioni o contrazioni (es: a,b, c)
  - sia concisa ma descrittiva (es: dato, valore: hanno poco significato)
  
--- 

# JavaScript e DOM

modifichiamo una pagina HTML in JS

- Prima di continuare con l'apprendimento di JS vediamo come interagire con una pagina HTML
- Come abbiamo visto in precedenza, quando il browser carica una pagina viene creato un albero degli oggetti chiamato **DOM**
- ***JavaScript può accedere e leggere o modificare qualsiasi oggetto del DOM***
- Questo è un meccanismo molto potente che permette di "dare vita" alle pagine HTML trasformandole da semplice pagine da consultare ad applicazione web interattive.
- Questo è il paradigma in uso ormai da molti anni ed estremizzato con le Progressive Web App ai nostri giorni.

<br>
<div style="background-color:green; color:white;padding: 20px; font-weight:bold;box-shadow:8px 8px 10px #888888;border-radius:10px;">
Progressive Web App (PWA) è un termine, coniato in origine da Google, che si riferisce ad applicazioni web che vengono sviluppate e caricate come normali pagine web, ma che si comportano in modo simile alle applicazioni native quando utilizzate su un dispositivo mobile (smartphone)
</div>
--- 

# JavaScript e DOM

modifichiamo una pagina HTML in JS

- Un metodo molto importante dell'oggeto DOM *Document* è `getElementById(<id_componente>)`
- Questo è uno dei metodi più utilizzati nella manipolazione del DOM in vanilla JS
- Il metodo restituisce **l'oggetto HTML** cha un attributo **id** pari a *<id_componente>*.

<br>

```html
...
<p class="paragrafo" id="par1">
...
```

<br>

- Se non ci sono elementi con l'id specificato, il metodo restituisce `null`
- Si ricorda che è nuona prassi assegnare un id univoco ad un oggetto HTML. In caso ciò non sia rispettato, getElementById restituisce il primo oggetto in ordine di apparizione nel codice sorgente.

--- 

# JavaScript e DOM

modifichiamo una pagina HTML in JS

- Esistono anche dei metodi simili che permettono di selezionare oggetti del DOM in base a:
  - `getElementsByClassName(classname)`: il metodo restituisce una collezionedi oggetti HTML che hanno la classe css specificata
  - `getElementsByName(object name)`: il metodo restituisce una collezione di oggetti HTML che hanno il nome specificato

<br>

```js
var paragrafi = document.getElementsByName("paragrafo");


var elements = docuemtn.getElementsByClassName("w3-bar");
HTMLCollection(2) [div.w3-bar.w3-card-2.notranslate, div.w3-bar.w3-left]
  0: div.w3-bar.w3-card-2.notranslate
  1: div.w3-bar.w3-left
  length: 2
  [[Prototype]]: HTMLCollection

```

--- 

# JavaScript e DOM

modifichiamo una pagina HTML in JS

- Una volta ottenuto l'oggetto HTML possiamo manipolarne qualsiasi suo aspetto in JS

<div class="grid grid-flow-col auto-cols-max gap-4">
<div>

```html
<p id="par1">
  Questo è un paragrafo di testo in una pagina HTML
</p>
<button onClick="cambia_stile">Premi qui!</button>
```
<br>

```js
function cambia_stile(){
  var el = document.getElementById("par1"); 
  el.style.color = "white";
  el.style.background = "green";
  el.style.padding = "10px";
  el.innerHTML="Questo è un paragrafo che non 
  esiste <br> nella pagina HTML, è stato 
  inserito dinamicamente <br>da JavaScript.";
}
```

</div>

<div>
<p id="par1">Questo è un paragrafo di testo in una pagina HTML</p>
<button  style="border: 1px solid black; border-radius: 5px; background-color:lightgray; padding: 5px;" onclick="var el=document.getElementById('par1'); el.style.color='white';el.style.background='green';el.style.padding='10px';el.innerHTML='Questo è un paragrafo che non esiste <br> nella pagina HTML, è stato inserito dinamicamente <br>da JavaScript.'">Premi qui!</button>
</div>
</div>

--- 

# JavaScript e DOM

modifichiamo una pagina HTML in JS

- Vediamo altri esempi:

<div class="grid grid-flow-col auto-cols-max gap-4">
<div>

```html
<h1 id="t1">Titolo 1</h1>
<h1 id="t2">Titolo 2</h1>
<h1 id="t3">Titolo 3</h1>
<h1 id="t4">Titolo 4</h1>
<button onClick="cambia_DOM">Premi qui!</button>
```
<br>

```js
function cambia_DOM(){
  var obj_t1 = document.getElementById("t1");
  var obj_t2 = document.getElementById("t2");
  var obj_t3 = document.getElementById("t3");
  var obj_t4 = document.getElementById("t1"); 
  
  obj_t1.innerHTML = "TITOLO UNO";
  obj_t2.style.color = "#88ccaa";
  obj_t3.innerHTML = "TITOLO TRE";
  obj_t4.style.text-decoration = "underline";
}
```

</div>

<div>
<h1 id="t1">Titolo 1</h1>
<h1 id="t2">Titolo 2</h1>
<h1 id="t3">Titolo 3</h1>
<h1 id="t4">Titolo 4</h1>

<button  style="border: 1px solid black; border-radius: 5px; background-color:lightgray; padding: 5px;" onclick='var obj_t1 = document.getElementById("t1");var obj_t2 = document.getElementById("t2");var obj_t3 = document.getElementById("t3");var obj_t4 = document.getElementById("t4");obj_t1.innerHTML = "TITOLO UNO";obj_t2.style.color = "#FF0000";obj_t3.innerHTML = "TITOLO TRE";obj_t4.style.textDecoration = "underline";'>Premi qui!</button>
</div>
</div>

--- 

# JavaScript e DOM

modifichiamo una pagina HTML in JS

- Vediamo altri esempi:

<div class="grid grid-flow-col auto-cols-max gap-4">
<div>

```html
<h1 class="titolo_pari">Titolo Pari</h1>
<h1 class="titolo_disp">Titolo Dispari</h1>
<h1 class="titolo_pari">Titolo Pari</h1>
<h1 class="titolo_disp">Titolo Dispari</h1>
<button onClick="cambia_DOM">Premi qui!</button>
```
<br>

```js
function cambia_DOM(){
  var pari = document.getElementsByClassName("titolo_pari");
  var disp = document.getElementsByClassName("titolo_disp");
  for(var i = 0; i < pari.length; i++) {
    var el = pari[i];
    el.style.backgroundColor = "red";
  }
  for(var j = 0; j < disp.length; j++) {
    var el = disp[j];
    el.style.backgroundColor = "green";
  }
}
```

</div>

<div>
<h1 class="titolo_pari">Titolo Pari</h1>
<h1 class="titolo_disp">Titolo Dispari</h1>
<h1 class="titolo_pari">Titolo Pari</h1>
<h1 class="titolo_disp">Titolo Dispari</h1>

<button  style="border: 1px solid black; border-radius: 5px; background-color:lightgray; padding: 5px;" onclick='var pari = document.getElementsByClassName("titolo_pari");var disp = document.getElementsByClassName("titolo_disp");for(var i = 0; i < pari.length; i++) {var el = pari[i];el.style.backgroundColor = "red";}for(var j = 0; j < disp.length; j++) {var el = disp[j];el.style.backgroundColor = "green";}
'>Premi qui!</button>
</div>
</div>


--- #slide N
 
# Esercizio js_04

modifichiamo una pagina HTML in JS

Dato il seguente script JS

1. Dato il file [esercizio_js_04.html](../support/esercizio_js_04.html) rinominarlo in |cognome|_esercizio_js_04.html
2. Aggiungere il file |cognome|_esercizio_js_04.js e definire una funzione chiamata ***modifica_stile*** in modo che:
   - tutti i titoli di primo livello abbiano un colore di foreground rosso
   - tutti i titoli di secondo livello abbiano un colore di foreground blue su sfondo giallo
   - tutti i titoli di secondo livello abbiano la dimensione del font pari a 40px 
   - tutti i titoli di secondo livello siano scritti solo in maiuscolo (usa il metodo `.toUpperCase()`)
   - il primo ed il quarto paragrafo abbiano un colore del testo (foreground) rosso
   - il secondo, quinto e ottavo paragrafo abbiano uno sfondo verde leggero
   - il terzo paragrafo sia scritto tutto in maiuscolo ed lo sfondo si un blue leggero
   - il sesto paragrafo sia scritto tutto in maiuscolo
   - il settimo paragrafo abbia uno stile del font *italico*
3. Fornire il link github al file con nome *|cognome|_esercizio_js_04.html*  e *|cognome|_esercizio_js_04.js*

--- #slide N
 
# Data Types

Tipi di dato

- Java Script definisce 8 tipi di dato
  1. **Number**
  2. **BigInt**
  3. **String**
  4. **Boolean**
  5. **null**
  6. **undefined**
  7. **object**
  8. **symbol**

--- #slide N
 
# Data Types

Number

- Rappresenta sia numeri interi che decimali (floating point) nel formato IEEE-754 a 64 bit

<br />

```js
let intero = 12833; // definizione valida
let decimale = 19.34; // definizione valida
```
<br />

- JavaScript è intelligente e riesce a gestire tipi diversi in maniera flessibile

<br />

```js
let n1 = 10; // definizione valida
let n2 = 10.3; // definizione valida
let n3 = 10.0;

> n1 == n2
false
> n2 == n3
false
> n1 == n3
true
```

--- #slide N
 
# Data Types

Number

- JavaScript definisce alcuni `special numeric value`:
  - `Infinity`: rappresenta il concetto di infinito. E' un valore speciale maggiore di qualsiasi altro Number. 
  - `-Infinity`: viceversa rappresenta il concetto di - infinito.E' un valore speciale minore di qualsiasi altro Number
  - `NaN`: **Not a Number** rappresenta un errore computazionale, il risultato di un'operazione  matematica incorretta o indefinita.

<br />

```js
> 1/0
Infinity
> console.log(Infinity)
Infinity
> console.log(-Infinity)
-Infinity
> "ciao" / 2
NaN
> 5 * "ciao"
NaN
```

--- #slide N
 
# Data Types

Number

- JavaScript ci permette di rappresentare i numeri in modi diversi

```js
> let bilion1 = 1000000000
> let bilion2 = 1_000_000_000
> let bilion3 = 1e9
> bilion1 == bilion2
true
> bilion2 == bilion3
true
> bilion1 == bilion3
true

> let nano1 = 0.000000001
> let nano2 = 1e-9
> let nano3 = 0.000_000_001
> nano1 == nano2
true
> nano2 == nano3
true
> nano1 == nano3
true
```

--- #slide N
 
# Data Types

Number

- Anche i numeri da informatici (esadecimale e binario) possono essere rappresentati facilmente

```js
> let h1 = 0xab
> let h2 = 0xAB
> h1 == h2
true

> let b1 = 0b11111111
> let o1 = 0o377
> let d1 = 255
> b1 == o1
true
> o1 == d1
true
> b1 == d1
true
```

--- #slide N
 
# Data Types

Number

- JavaScript mette a disposizione il metodo `toString(base)` che restituisce una stringa del numero in base &nbsp;`<base>`

```js
let n = 255
> n.toString(2)
'11111111'
> n.toString(16)
'ff'
> n.toString(8)
'377' // facile, no? :)

> 255.toString(2)
Uncaught SyntaxError: Invalid or unexpected token

255..toString(2) 
'11111111'

> (255).toString(2) //nota il .. o () per applicare il metodo ad un numero e non una variabile
'11111111'

```

--- #slide N
 
# Data Types

Number

- JavaScript mette a disposizione 4 metodi per arrotondare un numero:
  - **Math.floor**: restituisce il numero intero più grande minore o uguale al numero da arrotondare
  - **Math.ceil**:  restituisce il numero arrotondato al numero intero più grande maggiore del numero dato

<br />

```js
//floor 
> Math.floor(3.6)
3
> Math.floor(-3.6)
-4

//ceil
> Math.ceil(3.6)
4
> Math.ceil(-3.6)
-3
```

--- #slide N
 
# Data Types

Number

- JavaScript mette a disposizione 4 metodi per arrotondare un numero:
  - **Math.round**: arrotonda il numero all'intero più vicino
  - **Math.trunc**:  restituisce la parte intera del numero dato

<br />

```js
//round
> Math.round(3.6)
4
> Math.round(3.3)
3
> Math.round(-3.6)
-4
> Math.round(-3.3)
-3
//trunc
> Math.trunc(3.6)
3
> Math.trunc(-3.6)
-3
```

--- #slide N
 
# Data Types

Number

- Riassumiamo i metodi di arrotondamento

<br />

|      | Math.floor | Math.ceil | Math.round | Math.trunc |
| ---- | ---------- | --------- | ---------- | ---------- |
| 3.1  | 3          | 4         | 3          | 3          |
| 3.6  | 3          | 4         | 4          | 3          |
| -1.1 | -2         | -1        | -1         | -1         |
| -1.6 | -2         | -1        | -2         | -1         |


--- #slide N
 
# Data Types

Number

- JavaScript mette a disposizione il metodo `toFixed(cifre)` che permette di arrotondare un numero ad un numero specifico di cifre

<br />

```js
> let d1 = 124.4533442;

> d1.toFixed(3)
'124.453'
> d1.toFixed(2)
'124.45'
> d1.toFixed(1)
'124.5'
> d1.toFixed(0)
'124'

```

--- #slide N
 
# Data Types

BigInt

- Il tipo *Number* può rappresentare numeri nel range [da - 2<sup>53</sup> a 2<sup>53</sup>]
- Normalmente questo è un range sufficiente per la maggior parte delle situazioni
- Se serve rappresentare numeri al difuori di questo range, si può ricorrere al tipo `BigInt`
- **BigInt** può avere una lunghezza arbitraria aggiungendo `n` al termine del numero intero

<br />

```js
var large = 1234567890098765432112345678900987654321n;

> large + 1
Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
> 
> 
> large + 1n
1234567890098765432112345678900987654322n

```

--- #slide N
 
# Data Types

String

- 

--- #slide N
 
# Data Types

Boolean

- 

--- #slide N
 
# Data Types

null

- 

--- #slide N
 
# Data Types

undefined

- 

--- #slide N
 
# Data Types

Object

- 

--- #slide N
 
# Data Types

Symbols

- 

--- #slide N
 
# Data Types

Tipi di dato

- 

--- #slide N
 
# Data Types

Tipi di dato

- 


--- #slide N
 
# Title

subtitle

cosntent

--- #slide N
 
# Title

subtitle

cosntent

--- #slide N
 
# Title

subtitle

cosntent

--- #slide N
 
# Title

subtitle

cosntentxxx



<svg id="svg-filter">
    <filter id="svg-blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10"></feGaussianBlur>
    </filter>
</svg>
