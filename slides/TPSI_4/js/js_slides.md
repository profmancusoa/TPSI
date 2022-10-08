---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
#highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
aspectRatio: "16_/9"
routerMode: "hash"
materia: "TPSI"
as: "2022/2023"
version: "1.0.12"
---

# JavaScript

No brain no pain!

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

---

# TOC

&nbsp;


<div class="grid grid-cols-2 grid-rows-1 gap-4" style="padding: 0px; margin-left:0%;">
<div>

1. [Introduzione](#/4)
2. [Struttura del codice](#/22)
3. [Variabili](#/27)
4. [Costanti](#/38)
5. [JS e DOM](#/40)
6. [Data Types](#/66)
7. [Operatori Logici](#/80)
8. [Operatori di Base](#/90)
9. [Confronti](#/104)
10. [Conditional Branching](#/109)
11. [Switch](#/114)
12. [Cicli](#/118)
</div>
<div>

13. [Funzioni](#/126)
14. [Oggetti](#/159)
15. [Array](#/188)
16. [Map](#/267)
17. [Set](#/279)
18. [Destructuring](#/294)
19. [JSON](#/310)
20. [](#/x)
21. [](#/x)
22. [](#/x)
23. [](#/x)
24. [](#/x)
</div>

</div>
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
- Pertanto, il modo corretto di includere un programma JavaScript in una pagina HTML, è di usare un file esterno **_.js_**

```html {all|6-7}
<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="UTF-8" />
    <title>Hello JS World</title>
    <script src="/path/to/script.js"></script>
    <!-- link relativo -->
    <script src="http://URL/to/script.js"></script>
    <!-- link assoluto -->
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

  `<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js"></script>`

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

1. Creare una pagina web basata sul codice delle slide precedenti e salvarla come _|cognome|\_esercizio_js_01a.html_
2. Verificare l'esecuzione dello script JS all'avvio della pagina
3. Provare a modificare il codice JS
4. Creare una pagina web, che esegue il codice JS da file esterno e e salvarlo come _|cognome|\_esercizio_js_01b.html_ e _|cognome|\_esercizio_js_01b.js_
5. Fornire il link github ai file con nome _|cognome|\_esercizio_js_01a.html, |cognome|\_esercizio_js_01b.html e |cognome|\_esercizio_js_01b.js_

--- #slide N

# Browser Developer Tools

&nbsp;

- L'esecuzione dello script può generare errori che però non sono visualizzati nella pagina HTML
- I moderni browser, offrono una serie di strumenti denominati **_Developer Tools_**
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

- Per accedere direttamente alla console JS di Google Chrome basta premere <kbd>CTRL + SHIFT + J</kbd>
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
- Per inserire più linee è necessario premere <kbd>SHIFT + Enter</kbd> e solo alla fine, per eseguire tutto il blocco premere <kbd>Enter</kbd>

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

- Importante notare che Node.js non è adatto a problemi CPU intensive, in quanto è single-threaded.
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
var a = 5;
var b = 7;
console.log(a + b);
```

1. Eseguire lo script nel REPL di Node.js, invocando `node` da console e inserendo le istruzioni su linee diverse
2. Creare un file |cognome|\_esercizio_js_03.js contenente lo script sopra
3. Eseguire lo script da console

   ```bash
   node |cognome|_esercizio_js_03.js
   ```

4. Fornire il link github al file con nome _|cognome|\_esercizio_js_03.js_

--- #slide N

# Struttura del codice

Statements

- Un programma JavaScript, esattamente come in C/C++ e Java, è composto da una serie di `statements`
- Uno **statement** è un costrutto sintattico o un comando/istruzione che esegue una specifica azione
- Per esempio abbiamo visto, nelle slide precedenti, lo statement **alert("Hello JS World!!");**
- Un programma JS è composto da uno o più statement
- Gli statement possono essere separati dal carattere `;`

<br/>

```js
alert("Hello ");
alert("JS ");
alert("World!!");
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

- JavaScript permette di sostituire il terminatore di statement `;` con un `EOL` (End of Line - Ritorno a Capo)
- Pertanto, tranne casi specifici, il carattere `;` può essere omesso

<br/>

```js
alert("Hello ");
alert("JS ");
alert("World!!");
```

<br/>

- In questo caso, l'interprete JavaScript riconosce il ritorno a capo come terminatore dello statement (;)
- Questo processo si chiama **_automatic semicolon insertion_**
- Per esempio in C/C++ e Java ciò **NON** è permesso

--- #slide N

# Struttura del codice

Semicolons

- Tuttavia ci sono delle eccezzioni
- Non sempre un ritorno a capo viene automaticamente sostitutio da un **;**

<br/>

```js
alert(5 + 2);
```

<br/>

- In questo scenario, lo EOL dopo il +, **NON** viene sostituito con **;** ma solo come un normale ritorno a capo
- L'interprete comprende che terminando lo statement dopo il +, l'esperessione non sarebbe valida **_5 + ????_**
- Pertanto non sostituendo EOL con ; l'espressione risulta completa e l'interprete è in grado di eseguire correttamente lo statement.
- Da ciò ne consegue che, **i parametri di una funzione, possono essere forniti su più linee**.
- Ciò è vero anche in C/C++ e Java
- NOTA: L'interprete JS non è **SEMPRE** in grado di effettuare l'automatic semicolon insertion
<div style="background-color:green;color:yellow;padding:0px;">
  <p>Il mio stile, che deriva dal C, prevede quindi di inserire sempre <b>;</b> alla fine di ogni statement</p>
</div>

--- #slide N

# Struttura del codice

Commenti

- In modo analogo a qualsiasi altro linguaggio di programmazione, una parte del codice **MOLTO** importante sono i _commenti_.
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

- In VS Code è possibile inserire un commento, selezionando il codice e premendo i tasi `CTRL + SHIFT + /`

<br />
<br />

- Ricorda che è una buona pratica di programmazione commentare in modo intelligente il codice
- La **_leggibilità_** del codice è un parametro molto importante. I commenti aumentano la comprensione e la capacità di leggere e comprender eil codice sorgente.
- I commenti del codice, sono l'equivalente della parafrasi in Italiano
- E' più facile leggere la divina commedia con la parafrasi o solo con i versi originali?
- Ecco per il codice sorgente è esattamente la stessa cosa.

--- #slide N

# Variabili

Tipizzazione

- Una variabile è un concetto astratto che non dipende dal linguaggio di programmazione.
- **_Una variabile è concettualmente un contenitore identificabile per un dato/valore._**
- In JavaScript le variabili implementano esattamente questo concetto, in modo del tutto analogo a C/C++ e Java.
- La differenza principale deriva dal fatto che C/C++ e Java sono linguaggi `fortemente tipizzati`
- Al contrario JavaScript è un linguaggio `debolmente tipizzato`.

- In un linguaggio **_fortemente tipizzato_**, il programmatore è obbligato a specificare il tipo di ogni variabile e le assegnazioni posso avvenire solo tra tipi corenti.

```c
int num;

num = 4; // assegnazione valida
num = "ciao"; // errore - assegnazione invalida
```

--- #slide N

# Variabili

Tipizzazione

- In modo opposto, in un linguaggio **_debolmente tipizzato_**, il programmatore **_NON_** assegna un tipo alle variabili.
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

- In JavaScript, tradizionalmente una variabile può essere definita tramite la keyword `var`
- Dalla specifica del 2015 chiamata ECMA6 o ES6 una variabile si può anche definire tramite la keyword `let`

<br />

```js
var numero; // dichiara una variabile di nome numero
let testo; // dichiara una variabile di nome testo

numero = 10; // assegna il valore int 10 alla variabile numero
testo = "ciao"; // Assegna la stringa "ciao" alla variabile testo

var numero = 20; // Dichiara ed assegna 20 alla variabile numero
let testo = "javascript"; // Dichiara ed assegna "javascript" alla variabile testo

let numero = 10,
  testo = "ciao"; // Definizione multipla di variabili su singola linea
// tuttavia per aumentare la leggibilità del codice
// è una buona pratica dichiarare/definire una variabile per linea
```

--- #slide N

# Variabili

Regole sintattiche

<div style="background-color:green;color:yellow;padding: 10px;">
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

- Importante notare che il nome delle variabili in JS è **_case sensitive_**.

```js
let apple;
let Apple;

// Sono due variabili diverse
```

--- #slide N

# Variabili

var vs let

- Come visto una variabile può essere dichiarata con `var` o con `let`
- Apparentemente non c'è nessuna differenza
- Si fa notare che `var` fino al 2015 era l'unico modo di dichiarare una variabile in JS
- Normalmente in JS moderno `var` non viene più utilizzato
- Tuttavia siccome è ancora ampiamente diffuso in vecchi script è importante analizzare meglio le differenze

--- #slide N

# Variabili

var vs let

- le variabili dichiarate con `var` non hanno uno `scope`
- In altre parole in qualsiasi parte del programma siano dichiarate diventano globali

```js
var a = 10;

console.log(`valore di a ${a}`);

if (a == 10) {
  var b = 20;
}

console.log(`b è diventata globale, infatti a + b = ${a+b}`);

//output
alore di a 10
b è diventata globale, infatti a + b = 30
```

- Come si vede la dichiarazione di b nello scope dell'if ha assunto carattere globale, appunto ignorando lo scope

--- #slide N

# Variabili

var vs let

```js
var a = 10;
var b = 5;

console.log(`valore di a ${a}`);

if (a == 10) {
  var b = 20;
}

console.log(`b è diventata globale, infatti a + b = ${a+b}`);

//output
alore di a 10
b è diventata globale, infatti a + b = 30
```

- In questo caso l'effetto è deleterio, la variabile globale b (con valore 5) è stata sovrascritta dentro l'if
- Questo comportamento può generare errori difficilmente debuggabili e far perdere molto tempo

--- #slide N

# Variabili

var vs let

```js
var i = 10;
console.log(`il quadrato di i vale ${i * i}`);

for(var i = 0; i < 3; i++) {
  console.log("ciclo");
}

console.log(`il quadrato di i vale ${i * i}`);

//output

il quadrato di i vale 100
ciclo
ciclo
ciclo
il quadrato di i vale 9

```

--- #slide N

# Variabili

var vs let

- L'introduzione di `let` risolve questo tipo di problematiche
- Le variabili dichiarate con `let` hanno validità **SOLO** all'interno dello scope in cui sono definite
- Questo evita le problematiche viste prima e riduce o elimina la tipologia di bug introdotti da **var**

```js
var i = 10;
console.log(`il quadrato di i vale ${i * i}`);

for(let i = 0; i < 3; i++) {
  console.log("ciclo");
}

console.log(`il quadrato di i vale ${i * i}`);

//output
il quadrato di i vale 100
ciclo
ciclo
ciclo
il quadrato di i vale 100

```

--- #slide N

# Variabili

var vs let

```js
var a = 10;
var b = 5;

console.log(`valore di a ${a}`);

if (a == 10) {
  let b = 20;
}

console.log(`b è diventata globale, infatti a + b = ${a+b}`);

//output
alore di a 10
b è diventata globale, infatti a + b = 15
```

<br />

<div style="background-color:green;color:yellow;padding: 10px;">
Dichiarare e definire SEMPRE le variabili usando <mark>let</mark>
</div>

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
- **_JavaScript può accedere e leggere o modificare qualsiasi oggetto del DOM_**
- Questo è un meccanismo molto potente che permette di "dare vita" alle pagine HTML trasformandole da semplice pagine da consultare ad applicazione web interattive.
- Questo è il paradigma in uso ormai da molti anni ed estremizzato con le Progressive Web App ai nostri giorni.

<br>
<div style="background-color:green; color:yellow;padding: 20px; font-weight:bold;box-shadow:8px 8px 10px #888888;border-radius:10px;">
Progressive Web App (PWA) è un termine, coniato in origine da Google, che si riferisce ad applicazioni web che vengono sviluppate e caricate come normali pagine web, ma che si comportano in modo simile alle applicazioni native quando utilizzate su un dispositivo mobile (smartphone)
</div>
---

# JavaScript e DOM

modifichiamo una pagina HTML in JS

- Un metodo molto importante dell'oggeto DOM _Document_ è `getElementById(<id_componente>)`
- Questo è uno dei metodi più utilizzati nella manipolazione del DOM in vanilla JS
- Il metodo restituisce **l'oggetto HTML** cha un attributo **id** pari a _<id_componente>_.

<br>

```html
...
<p class="paragrafo" id="par1">...</p>
```

<br>

- Se non ci sono elementi con l'id specificato, il metodo restituisce `null`
- Si ricorda che è buona prassi assegnare un id univoco ad un oggetto HTML. In caso ciò non sia rispettato, getElementById restituisce il primo oggetto in ordine di apparizione nel codice sorgente.

---

# JavaScript e DOM

modifichiamo una pagina HTML in JS

- Esistono anche dei metodi simili che permettono di selezionare oggetti del DOM in base a:
  - `getElementsByClassName(classname)`: il metodo restituisce una collezionedi oggetti HTML che hanno la classe css specificata
  - `getElementsByName(object name)`: il metodo restituisce una collezione di oggetti HTML che hanno il nome specificato

<br>

```js
let paragrafo = document.getElementsByName("paragrafo");
NodeList [p#par1]0: p#par1length: 1[[Prototype]]: NodeList

let elements = docuement.getElementsByClassName("w3-bar");
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
<p id="par1">Questo è un paragrafo di testo in una pagina HTML</p>
<button onClick="cambia_stile">Premi qui!</button>
```

<br>

```js
function cambia_stile(){
  let el = document.getElementById("par1");
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
<button  style="border: 1px solid black; border-radius: 5px; background-color:lightgray; padding: 5px;" onclick="let el=document.getElementById('par1'); el.style.color='white';el.style.background='green';el.style.padding='10px';el.innerHTML='Questo è un paragrafo che non esiste <br> nella pagina HTML, è stato inserito dinamicamente <br>da JavaScript.'">Premi qui!</button>
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
  let obj_t1 = document.getElementById("t1");
  let obj_t2 = document.getElementById("t2");
  let obj_t3 = document.getElementById("t3");
  let obj_t4 = document.getElementById("t1");

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

<button  style="border: 1px solid black; border-radius: 5px; background-color:lightgray; padding: 5px;" onclick='let obj_t1 = document.getElementById("t1");let obj_t2 = document.getElementById("t2");let obj_t3 = document.getElementById("t3");let obj_t4 = document.getElementById("t4");obj_t1.innerHTML = "TITOLO UNO";obj_t2.style.color = "#FF0000";obj_t3.innerHTML = "TITOLO TRE";obj_t4.style.textDecoration = "underline";'>Premi qui!</button>

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
function cambia_DOM() {
  let pari = document.getElementsByClassName("titolo_pari");
  let disp = document.getElementsByClassName("titolo_disp");
  for (let i = 0; i < pari.length; i++) {
    let el = pari[i];
    el.style.backgroundColor = "red";
  }
  for (let j = 0; j < disp.length; j++) {
    let el = disp[j];
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

<button  style="border: 1px solid black; border-radius: 5px; background-color:lightgray; padding: 5px;" onclick='let pari = document.getElementsByClassName("titolo_pari");let disp = document.getElementsByClassName("titolo_disp");for(let i = 0; i < pari.length; i++) {let el = pari[i];el.style.backgroundColor = "red";}for(let j = 0; j < disp.length; j++) {let el = disp[j];el.style.backgroundColor = "green";}
'>Premi qui!</button>

</div>
</div>

--- #slide N

# Esercizio js_04

modifichiamo una pagina HTML in JS

Dato il seguente script JS

1. Dato il file [esercizio_js_04.html](../support/esercizio_js_04.html) rinominarlo in |cognome|\_esercizio_js_04.html
2. Aggiungere il file |cognome|\_esercizio*js_04.js e definire una funzione chiamata \*\*\_modifica_stile*\*\* in modo che:
   - tutti i titoli di primo livello abbiano un colore di foreground rosso
   - tutti i titoli di secondo livello abbiano un colore di foreground blue su sfondo giallo
   - tutti i titoli di secondo livello abbiano la dimensione del font pari a 40px
   - tutti i titoli di secondo livello siano scritti solo in maiuscolo (usa il metodo `.toUpperCase()`)
   - il primo ed il quarto paragrafo abbiano un colore del testo (foreground) rosso
   - il secondo, quinto e ottavo paragrafo abbiano uno sfondo verde leggero
   - il terzo paragrafo sia scritto tutto in maiuscolo ed lo sfondo si un blue leggero
   - il sesto paragrafo sia scritto tutto in maiuscolo
   - il settimo paragrafo abbia uno stile del font _italico_
3. Fornire il link github al file con nome _|cognome|\_esercizio_js_04.html_ e _|cognome|\_esercizio_js_04.js_

--- #slide N

# Creiamo un elemento

Creare oggetti HTML in JS

- L'oggetto _document_ del DOM mette a disposizione vari metodi
- Uno molto utile è `createElement("<element tag>"`
- Questo metodo crea un oggetto o elemento HTML identificato dal suo tag

Esempio:

```js
let h1 = document.createElement("h1"); //crea un oggetto h1

let h1_1 = document.createElement("h1"); //crea un'altro oggetto h1

let p = document.createElement("p"); //crea un oggetto di tipo p
```

<br />

- Da notare che il metodo _createElement_ crea l'oggetto ma non lo aggiunge al DOM
- Importante ricordarsi che questo metodo crea un oggetto vuoto esattamente come se in html scrivessimo

```html
<h1></h1>
```

--- #slide N

# Creiamo un elemento

Creare oggetti HTML in JS

- Pertanto per aggiungere un contenuto all'oggetto appena creato possiamo usare le proprietà o attributi:
  - **_innerTexT_**: imposta il contenuto testuale dell'oggetto
  - **_innerHTML_**: imposta il contenuto dell'oggetto considerando la sintassi HTML

Esempio:

```js
h1.innerText = "Titolo 1";
h1_1.innerHTML = "<u>Titolo 1_1</u>";
p.innerText = "Questo è un paragrafo";
```

--- #slide N

# Aggiungiamo un elemento

Aggiungere oggetti HTML al DOM in JS

- Per aggiungere un nuovo elemento al DOM dobbiamo utilizzare il metodo `append` dell'oggetto body
- Questo perchè sappiamo dall'HTML che tutti gli elementi sono _figli_ di body
- Pertanto per aggiungere un nuovo elemento facciamo l'append in questo modo

<br />

```js
const body = document.body; //creo una referenza all'oggetto body

body.append(h1); //aggiunge l'oggetto h1 al body del documento
body.append(h1_1); //aggiunge l'elemento h1_1 al body del documento
body.append(p); //aggiunge l'elemento p al body del documento
```

--- #slide N

# Aggiungiamo un elemento

<img src="/media/js08.png" width="600" style="margin:auto;"/>

--- #slide N

# Rimuoviamo un elemento

Rimuovere oggetti HTML dal DOM in JS

- Per rimuovere un nuovo elemento dal DOM utilizziamo il metodo `remove()`
- In questo modo l'oggetto che invoca il metodo, viene rimosso dal DOM e pertanto non più visualizzato
- Nota che l'oggetto non viene distrutto e può essere riaggiunto in seguito

```js
h1.remove(); //rimuove l'oggetto h1 dal body del documento
h1_1.remove(); //rimuove l'elemento h1_1 dal body del documento
p.remove(); //rimuove l'elemento p dal body del documento
```

--- #slide N

# Aggiunta di elementi nested

Creiamo una lista in JS

- Il metodo visto per la creazione i vusalizzazione di elementi HTML in modo dinamico è utilissimo nella creazioni di Web App
- Immaginiamo di voler visualizzare la lista degli studenti di una classe provenienti da un DataBase
- Il contenuto della lista non è noto quando scriviamo il markup della pagina HTML
- Pertanto creeremo la lista in modo dinamico a runtime tramite JavaScript
- Questo metodo è alla base dello sviluppo delle applicazioni Web e PWA

--- #slide N

# Aggiunta di elementi nested

Creiamo una lista in JS

```html
<body>
  <h1>Pagina Vuota</h1>
  <input id="cognome" type="text" placeholder="Cognome Studente" />
  <button onclick="add_studente()">Aggiungi uno studente</button>
  <ul id="lista"></ul>
</body>
```

<br />

```js
function add_studente() {
  const ul = document.getElementById("lista");
  const cognome_str = document.getElementById("cognome").value;
  const li = document.createElement("li");
  li.innerText = cognome_str;
  ul.append(li);
}
```

- Vedi esempio [empty_list.html](../support/empty_list.html)

---

# Interagiamo con l'utente

alert

- Spesso è utile fornire un feedback all'utente ed assicurarsi che venga recepito
- In questi casi si può utilizzare la funzione `alert("messaggio")` per visualizzare una **finestra modale** che mette tutta la pagina in attesa della pressione del tasto **_OK_**

```js
alert("Assicurati di leggere le condizioni contrattuali");
```

<br />
<img src="/media/js11.png"  style="margin:auto;"/>

- La pagina rimane "bloccata" fino a che l'utente premte il pulsante OK
- In questo modo siamo sicuri che se l'utente procede nella consultazione della pagina ha volontariamente premuto il pulsante OK e pertanto si assume che abbia letto il messaggio.

---

# Interagiamo con l'utente

prompt

- La funzione `prompt("Messaggio", ["Valore di default"])` visualizza una finestra modale con una stringa ("Messaggio") e un input field. In questo caso ci sono due bottoni **OK** e **Cancel**
- La funzione restituisce:
  - **null** in caso il pulsante Cancel/Annulla è premuto
  - **"Valore di default"** in caso in cui l'utente non inserisce nessun input e preme OK
  - **<valore inserito dall'utente>** in caso in cui l'utente inserisce un input e preme ok
- Pertanto normalmente la funzione prompt si usa in un'assegnazione

```js
let risultato = prompt("Come ti chiami?", "Pinco Pallo");

console.log(risultato);

Mario // utente ha inserito Mario e premuto OK
Pinco Pallo // utente ha solo premuto OK
null // utente a premuto Cancel/Annulla o il tasto ESC
```

---

# Interagiamo con l'utente

prompt

```js
let risultato = prompt("Come ti chiami?", "Pinco Pallo");
if (risultato) {
  alert(`L'utente si chiama ${risultato}`);
} else {
  alert("L'utente non ha inserito il suo nome");
}
```

<br />
<div  style="display: flex; justify-content: center;">
<img src="/media/js12.png" width="350" style="float:left"/>
<img src="/media/js13.png" width="450" />
</div>
---

# Interagiamo con l'utente

confirm

- La funzione `confirm("Messaggio")` visualizza una finestra modale con il messaggio e due bottoni **OK** e **Cancel/Annulla**
- La funzione resitutisce un valore boolean in base al tasto premuto **_OK->true e Cancel -> false_**

```js
let conferma = confirm("Hai letto le condizioni contrattuali?");
console.log(conferma);

// true se l'utente preme OK
// false se l'utente preme Cancel o Annulla
```

<br />
<img src="/media/js14.png" width="450" style="margin: auto;"/>

--- #slide N

# Esercizio js_05

Aggiungiamo elementi dinamici

1. Dato il file [empty.html](../support/empty.html) rinominarlo in |cognome|\_esercizio_js_05.html ed aggiungere il riferimento al file |cognome|\_esercizio_js_05.js
2. Creare una pagina HTML e il relativo codice JS in modo che:
   - Vengano richiesti all'utente il nome e la media dei voti di uno studente
   - Alla pressione di un bottone il nome e la media inseriti vengano aggiunti ad una linea di una tabella
   - Alla pressione di un secondo bottone, tutte le linee pari vengano colorate di blue e tutte le linee dispari di rosso
3. Fornire il link github al file con nome _|cognome|\_esercizio_js_05.html_ e _|cognome|\_esercizio_js_05.js_

--- #slide N

# Modifichiamo la classe di un elemento

CSS dinamico in JS

- Oltre a modificare il testo e il contenuto di un elemento HTML può essere utile modificare il suo stile in modo dinamico
- Per far ciò in modo agevole, il metodo pi+ utilizzato e l'aggiunta o la rimozione di una o più classi CSS ad un elemento
- In tal modo da JS si può facilmente variare l'aspetto di un elemento in funzione di specifici stati della logica della pagina
- Ogni elemento HTML ha una proprietà chiamta `classList` che fornisce la lista delle classi CSS applicate all'elemento stesso

```js
ul.classList
DOMTokenList(3) ['bordo', 'rosso', 'verde', value: 'bordo rosso verde']
0: "bordo"
1: "rosso"
2: "verde"
length: 3
value: "bordo rosso verde"
```

--- #slide N

# Modifichiamo la classe di un elemento

CSS dinamico in JS

- L'oggetto restituito da _classList_ mette a disposizione tre metodi molto utili:
  - `add("<classe>")`: aggiunge una classe alla lista delle classi CSS applicate all'elemento
  - `remove("<classe>")`: rimuove una classe dalla lista delle classi CSS applicate all'elemento
  - `toggle("<classe>")`: se la classe è presente la rimuove, mentre se non è presente l'aggiunge

```js
ul.classList
DOMTokenList [value: '']

ul.classList.add("verde")
ul.classList.toggle("bordo")
DOMTokenList(2) ['verde', 'bordo', value: 'verde bordo']

ul.classList.toggle("bordo")
DOMTokenList ['verde', value: 'verde']

ul.classList.remove("verde")
DOMTokenList [value: '']

```

- Vedi esempio [empty_list_class.html](../support/empty_list_class.html)

--- #slide N

# Esercizio js_06

Aggiungiamo elementi dinamici

1. Partendo dai file |cognome|\_esercizio_js_05.html e |cognome|\_esercizio_js_05.js modificarli in modo che:
   - Sia presente un bottone "Grassetto" che se premuto faccia diventare tutti gli elementi della lista in grassetto
   - Sia presente un bottone "Blue" che se premuto faccia diventare tutti gli elementi della lista di colore Blue
   - Sia presente un bottone "Bordo" che se premuto faccia comparire un bordo attorno alla lista in caso non sia presente e rimuova tale bordo in caso sia già presente
   - Ogni modificazione allo style deve avvenire tramite una o più classi CSS
2. Fornire il link github al file con nome _|cognome|\_esercizio_js_06.html_ e _|cognome|\_esercizio_js_06.js_

--- #slide N

# Esercizio js_07

Rubrica JS

<img src="/media/js14_a.png" style="margin: auto;"/>

--- #slide N

# Esercizio js_07

Rubrica JS

Partendo dai template [rubrica_js_template.html](../support/rubrica_js_template.html) e [rubrica_js_template.css](../support/rubrica_js_template.css), si richiede di realizzare una web app (in Js vanilla) che implementa una rubrica telefonica con le seguenti funzionalità:

1. L'utente può inserire un nuovo contatto in rubrica (pulsante 2) se tutti i campi sono forniti, altrimenti deve visualizzare un messaggio di allerta con testo appropriato
2. L'utente può rimuovere un contatto presente in rubrica premendo il pulsante 3
3. L'utente può cercare un contatto in rubrica per cognome o numero di telefono tramite pulsante 1.
4. Il contatto ricercato viene visualizzato nella parte superiore dell'interfaccia in modo che sia possibile modificarne i suoi campi e successivamente aggiornare la rubrica tramite il pulsante 2
5. Consegnare su github i file dell'applicazione rispettivamente nominati _|cognome|\_esercizio_js_07.html_, _|cognome|\_esercizio_js_07.css_ e _|cognome|\_esercizio_js_07.js_

--- #slide N

# Esercizio js_08

ToDo JS

<img src="/media/js14_b.png" style="margin: auto;"/>

--- #slide N

# Esercizio js_08

ToDo JS

Si richiede di realizzare una web app (in Js vanilla) che implementa una ToDo list con le seguenti funzionalità:

1. L'utente può inserire un nuovo ToDO item e selezionare la priorità tra 3 livelli (Bassa, Media, Alta) se tutti i campi sono forniti, altrimenti deve visualizzare un messaggio di allerta con testo appropriato
2. L'utente inserisce un nuovo ToDo item premendo l'icona 1
3. Una volta inserito un nuovo ToDO Item, viene visualizzato in modo che la priorità sia rappresentata da un'icona diversa per i 3 livelli di priorità (vedi figura)
4. L'utente può marcare il ToDo Item come completo/attivo tramite click sull'icona 2. In caso di item completato il testo del ToDo Item deve essere barrato (vedi figura). In caso di item attivo il testo deve essere senza barra
5. L'utente può rimuovere un ToDo item completo o no premendo l'icona 3
6. Consegnare su github i file dell'applicazione rispettivamente nominati _|cognome|\_esercizio_js_08.html_, _|cognome|\_esercizio_js_08.css_ e _|cognome|\_esercizio_js_08.js_

---

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
  8. **Date**

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
  - `NaN`: **Not a Number** rappresenta un errore computazionale, il risultato di un'operazione matematica incorretta o indefinita.

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
  - **Math.ceil**: restituisce il numero arrotondato al numero intero più grande maggiore del numero dato

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
  - **Math.trunc**: restituisce la parte intera del numero dato

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

- Il tipo _Number_ può rappresentare numeri nel range [da - 2<sup>53</sup> a 2<sup>53</sup>]
- Normalmente questo è un range sufficiente per la maggior parte delle situazioni
- Se serve rappresentare numeri al difuori di questo range, si può ricorrere al tipo `BigInt`
- **BigInt** può avere una lunghezza arbitraria aggiungendo `n` al termine del numero intero

<br />

```js
let large = 1234567890098765432112345678900987654321n;

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

- Una stringa è una successione di caratteri ascii. Tuttavia il tipo **_carattere_** non esiste.
- In JS una stringa può essere racchiusa tra:

  - "stringa": Doble quotes o virgolette
  - 'string': Single quote o apici
  - \`stringa con dentro un altra ${stringa}\`: Backticks

- Single e Double quotes non hanno nessuna reale differenza e possono essere utilizzati in modo intercambiabile, ma non mixati insieme
- "stringa" è valido
- 'stringa' è valido
- "stringa' **non** è valido

--- #slide N

# Data Types

String

- Il Backtick serve per includere una stringa una variabile che verrà poi sostuituita con il suo valore a run-time

<br />

```js
let nome = "Mario";
let cognome = "Rossi";
console.log(`Il sig. ${nome} ${cognome} è presente`);
//stampa Il sig. Mario Rossi è presente

let altezza = 160;
console.log(`Il sig. ${nome} ${cognome} è alto ${altezza} cm`);
//stampa Il sig. Mario Rossi è alto 160 cm

let b = 10;
let h = 20;
console.log(`Il rettangolo ha area pari a ${b * h} cm2`);
// stampa Il rettangolo ha area pari a 200 cm2
```

--- #slide N

# Data Types

Boolean

- Il tipo boolean rappresenta uno stato logico è può assumere solo due valori:
  - `true` : vero
  - `false` : falso

<br />

```js
let isOpen = false;
let isClosed = true;
let isBigger = 5 > 2; // true
let isEqual = 3 == 2; //false
```

--- #slide N

# Operatori Logici

I 4 operatori booleani

- `||` : OR logico
- `&&` : AND logic
- `!` : NOT logico
- `??`: Nullish coalescing operator

- funzionano esattamente come in C/C++ e Java

```js
true || true -> true
true || false -> true
false || true -> true
false || false -> false
true && true -> true
true && false -> false
false && true -> false
false && false -> false
!true -> false
!false -> true
```

--- #slide N

# Operatori Logici

I 4 operatori booleani

- Tuttavia in JS gli operatori logici non si applicano solo a valori Booleani
- Funzionano con qualsiasi tipo e sono molto potenti

```js
1 || 0 -> 1
0 || 1 -> 1
0 || 3 -> 3
"ciao" || 1  -> ciao
"" || 1  -> 1

"ciao" || "mario" || "rossi" -> "ciao"
"" || "mario" || "rossi" -> "mario"
"" || "" || "rossi" -> "rossi"
```

Quindi spesso l'operatore || viene spesso usato per trovare il primo valore vero o impostare un default

```js
let nome = ""; let cognome = "";
let utente = nome || cognome || "anonimo"; --> anonimo

let nome = "";let cognome = "Rossi";
let utente = nome || cognome || "anonimo"; --> Rossi
```

--- #slide N

# Operatori Logici

I 4 operatori booleani

- Importante notare che viene applicato il principio di `short-circuit evaluation`
- In altre parole un espressione con l'operatore ||, partendo da sinistra valuta tutte le espressioni finchè ne trova una vera
- Non appena trova un espressione vera la valutazione viene interrotta

```js
prompt("Come ti chiami?") || alert("Non hai inserito nessun nome");
```

- Se l'utente al prompt inserisce una stringa (il suo nome) allora l'espressione dopo || non viene valutata e quindi l'alert non visdualizzato
- Se l'utente non inserisce una stringa, il risultato del prompt è falso pertanto l'espressione dopo || viene valutata e quindi eseguita

Il codice è equivalente a:

```js
if (prompt("Come ti chiami?") == false) {
  alert("Non hai inserito nessun nome");
}
```

--- #slide N

# Operatori Logici

I 4 operatori booleani

- Anche l'operatore && si applica a tutti i tipi e non solo quelli booleani
- Pertanto questo operatore trova il primo valore falso
- Infatti le esperesisoni vengono valutate da sinistra a destra fino a che ne trova una falsa. A questo punto le successive espressioni non sono valutatre
- Se sono tutte vere restiusce il valore dell'ultima espressione

```js
1 && 0 -> 0
1 && 6 -> 6
1 && 6 && 0 -> 0
11 && 0 && 6 -> 0

let nome = "Mario";
let cognome = "Rossi";
let utente = nome && cognome && nome + cognome;

if (nome && cognome) {
  utente = nome + cognome;
}
```

--- #slide N

# Operatori Logici

I 4 operatori booleani

- Importante notare che l'operatore **&&** ha una priorità superiore all'operatore **||**

```js
a && b || c && dd -> (a && b) || (c && d)

a && b && c && dd -> ((a && b) && c) && d

a || b && c || d -> (a || (b && c)) || d
```

<br />

- Bisogna fare sempre molta attenzione alla precedenza degli operatori, specie in espressioni complesse

- Esiste un uso di && per compattare il codice ma in genere riduce la leggibilità del codice

```js
let x = 1;

x > 0 && alert("il valore è maggiore di zero");

if (x > 0) alert("il valore è maggiore di zero");
```

--- #slide N

# Operatori Logici

I 4 operatori booleani

- L'operatore **!** ha la precedenza maggiore di tutti
- Pertanto la precedenza degli operatori è: `!` -> `&&` -> `||`

```js
!a && b -> (!a) && b

a && b || !c -> (a && b) || (!c)
```

--- #slide N

# Operatori Logici

I 4 operatori booleani

- L'operatore **??** chiamato _Nullish coalescing operator_ verifica se il primo operando è definito (esiste ed ha un valore valido)
- In caso positivo restituisce la prima espressiome altrimenti la seconda

```js
a ?? b -> restituisce a se è valida e definita altrimenti b
"ciao" ?? false -> "ciao"
undefined ?? "errore" -> "errore"

let user;
alert(user ?? "utente invalido") -> "utente invalido"
user = "Mario Rossi";
alert(user ?? "utente invalido") -> "Mario Rossi"

let result = a ?? b;

let result;
if (a ! = null && a ! = undefined) //no spazio tra ! e =
  reult = a;
else
  result = b;
```

--- #slide N

# Esercizio js_09

Operatori Booleani

1. Creare una pagina HTML con il relativo Javascript, usando **prompt() e alert()**, che richieda delle credenziali di login Username e Password in base alla seguente logica:

<img src="/media/js09.png" width="400" style="margin: auto;"/>
<br />

1. Fornire il link github al file con nome _|cognome|\_esercizio_js_09.html_ e _|cognome|\_esercizio_js_09.js_

--- #slide N

# Data Types

null

- JS definisce un valore speciale chiamato `null`

<br />

```js
let age = null; // la variabile age ha un valore non noto
```

<br />

- In JavaScript `null` non è un puntatore nullo come in C o altri linguaggi
- `null` è un valore speciale che definisce il valore di una variabile come "niente", "vuoto" o ancor meglio **_valore non noto_**

--- #slide N

# Data Types

undefined

- In modo simile a null, JS definisce un valore speciale chiamato `undefined`
- Un valore **_undefined_** significa che la variabile ha un **_valore non assegnato_**

<br />

```js
let age; // la variabile ha un valore non definito
```

---

# Date

Data e Orario

- Un oggetto di tipo **Date** memorizza una data, un orario e fornisce i metodi per manipolare queste informazioni

```js
let data_ora = new Date(); // crea un oggeto Date che contiene la data e l'ora attuale

console.log(data_ora);
> 2022-08-26T15:30:40.155Z

let unix_date = new Date(0); // crea una data a partire da Unix time o Epoch Time
console.log(unix_date);
> 1970-01-01T00:00:00.000Z
```
<br>

- Come si vede lo `Unix time` 0 corrisponde al 01/01/1970, l'inizio dei tempi :) e si misura in millisecondi

```js
let now = new Date(1661528026000);
console.log(now);
> 2022-08-26T15:33:46.000Z
```

---

# Date

Data e Orario

- Ci sono molti overload del costruttore

```js
let oggi = new Date("2022-08-26");
console.log(oggi);
> 2022-08-26T00:00:00.000Z // l'ora è mezzanotte, l'inizio del giorno

let oggi_ora = new Date(2022, 8, 26, 17, 38, 45, 21); //YYYY, M, D, HH, MM, SS, ms
console.log(oggi_ora);
> 2022-09-26T15:38:45.021Z

let now = Date.now(); // determina solo data e ora attuale in millisecondi
console.log(now)
> 1661529999411
```

---

# Date

Data e Orario

- Dato un oggetto ci sono anche molti metodi utili per accedere alle sue proprietà

```js
let data_ora = new Date();
console.log(data_ora); //2022-08-26T15:43:51.504Z

console.log("YYYY:", data_ora.getFullYear()); // YYYY: 2022
 
console.log("MM:", data_ora.getMonth()); // MM: 7 (Gennaio = 0 - Dicembre = 11)

console.log("DD:", data_ora.getDay()); // DD: 5 giorno della settimana (Domenica = 0 - Sabato = 6)

console.log("DD:", data_ora.getDate()); // DD: 26

console.log("HH:", data_ora.getHours()); // HH: 17

console.log("MM:", data_ora.getMinutes()); // MM: 43

console.log("SS:", data_ora.getSeconds()); // SS: 51

console.log("ms:", data_ora.getMilliseconds()); // ms: 504
```

---

# Date

Data e Orario

- Ci sono anche gli equivalenti metodi setter

```js
let data_ora = new Date();

console.log(data_ora); //2022-08-26T15:51:49.140Z

data_ora.setFullYear(2023); // 2023-08-26T15:51:49.140Z

data_ora.setMonth(9) // 2023-10-26T15:51:49.140Z

data_ora.setDate(11); // 2023-10-11T15:51:49.140Z

data_ora.setHours(13); // 2023-10-11T15:51:49.140Z // timezone UTC vs CET

data_ora.setMinutes(27); // 2023-10-11T15:27:49.140Z

data_ora.setSeconds(54); // 2023-10-11T15:27:54.140Z

data_ora.setMilliseconds(342); // 2023-10-11T15:27:54.342Z
```

---

# Date

Data e Orario

- Possiamo anche fare delle operazioni con le date

```js
let data1 = new Date("2022-08-26");
let data2 = new Date("2022-09-12");

// calcoliamo la differenza tra due date
console.log("I giorni mancanti all'inizio della scuola sono:", ((data2 - data1) / (24 * 60 *60 * 1000 )));

> I giorni mancanti all'inizio della scuola sono: 17

// aggiungiamo un numero di giorni ad una data
console.log(data1)
> 2022-08-26T00:00:00.000Z

data1.setDate(data1.getDate() + 3);

console.log(data1)
> 2022-08-29T00:00:00.000Z
```


--- #slide N

# Operatori Base

operatore unario

- Un operatori si dice **_unario_** quando viene applicato ad un singolo operando

```js
let x = 1;

x = -x; // - è un operatore unario che inverte il segno del suo operando

let y = 3;

let z = y - x; // - è l'operazione di sottrazione ed ha 2 operandi y e x
```

--- #slide N

# Operatori Base

operatore unario

- Tuttavia l'operatore **_+_** ha anche una versiona unaria

```js
let x = 1;
let y = -3;

console.log(+1); // 1 nessun effetto
console.log(+y); // -3 nessun effetto

let str1 = "5";
let str2 = "4";
console.log(+str1 + +str2); // 9
console.log(Number(str1) + Number(str2)); // 9
```

- Pertanto l'operatore unario + converte il suo operando in numero

```js
console.log(+true); // 1
console.log(+undefined); // NaN
```

--- #slide N

# Operatori Base

Operatori matematici

- Gli operatori matematici binari sono i seguenti:
  - `+`: addizione
  - `-`: sottrazione
  - `*`: moltiplicazione
  - `/`: divisione (non intera)
  - `%`: resto della divisione intera
  - `**`: elevamento a potenza

```js
6 / 4; // 1.5

5 % 2; // 1
8 % 3; // 2
6 % 3; // 0

2 ** 3; // 8

36 ** (1 / 2); // 6
```

--- #slide N

# Operatori Base

Precedenze

- Gli operatori hanno una precedenza
- Gli operatori matematici rispettano la precedenza convenzionale
- La tabella completa delle precedenze è disponibile qui

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

- Come si può vedere + unitario ha precedenza sul + binario

--- #slide N

# Operatori Base

operatori di assegnazione

- L'operatore `=` è l'operatore di assegnazione
- Genericamente l'espresisone di assegnazione si rappresenta così

```js
let left-value = right-value;
```

dove **left-value** rappresenta una variabile a cui viene assegnato il valore dell'espressione **right-value**

- Siccome **=** è un operatore(a differenza di altri linguaggi (C/C++)) l'assegnazione restituisce un valore che coincide con il right-value dell'espressione

- Pertanto l'assegnazione

```js
let left-value = right-value;
```

- assegna right-value alla variabile left-value e restituisce right-value

--- #slide N

# Operatori Base

operatori di assegnazione

```js
let a = 10;
let b = 20;
let str = "dieci";

let b = (c = d = 1);
// 1 viene assegnato a d che restituisce 1 che viene assegnato a c
// che restitutisce 1 che viene assegnato a b

let c = 4 + (a = b - 3); // 21
// ad a viene assegnato il valore b - 3 (17) che viene sommato a 4

console.log(a); // 17

console.log(b); // 20

console.log(c); // 21
```

--- #slide N

# Operatori Base

modify-in-place operator

```js
let n = 4;
n = n + 2; // 6
n = n * 2; // 12

let n = 4;
n += 2; // 6 (n = n + 2)
n *= 2; // 12 (n = n * 2)
n -= 3; // 9 (n = n - 3)
n /= 3; // 3 (n = n / 3)
```

--- #slide N

# Operatori Base

increment/decrement operators prefisso e postfisso

- Esattamente come in C/C++ gli operatori unari **++** e **--** hanno due forme:
  - **prefissa**: l'operatore in forma prefissa prima viene applicato e poi restrituisce il nuovo valore calcolato
  - **postfissa**: l'operatore in forma postfissa restituisce l'operando passato e poi calcola il nuovo valore

FORMA PREFISSA

```js
let n = (m = 2);
n = n + 1;
m = m - 1;
console.log(n); // 3
console.log(m); //1

//lo stesso codice può essere scritto usando l'operatore in forma prefissa

let n = (m = 2);
console.log(++n); // 3 l'operatore ++ prefisso prima incrementa il valore e poi lo restituisce
console.log(--m); // 1 l'operatore -- prefisso prima decrementa il valore e poi lo restituisce
```

--- #slide N

# Operatori Base

increment/decrement operators prefisso e postfisso

- Esattamente come in C/C++ gli operatori unari **++** e **--** hanno due forme:
  - **prefissa**: l'operatore in forma prefissa prima viene applicato e poi restrituisce il nuovo valore calcolato
  - **postfissa**: l'operatore in forma postfissa restituisce l'operando passato e poi calcola il nuovo valore

FORMA POSTFISSA

```js
let n = (m = 2);
console.log(n); // 2
n = n + 1;

console.log(m); // 2
m = m - 1;

//lo stesso codice può essere scritto usando l'operatore in forma postfissa

let n = (m = 2);
console.log(n++); // 2 l'operatore ++ postfisso restituisce il valore prima di incrementarlo
console.log(m--); // 2 l'operatore -- postfisso restituisce il valore prima di decrementarlo
```

--- #slide N

# Data Types

Operatore typeof

- L'operatore `typeof(arg)` resitutisce il tipo associato all'argomento _arg_.
- E' utile per verificare il tipo di una variabile ed agire di conseguenza o semplicemente fare una verifica sul tipo usato.

```js
typeof undefined; // "undefined"

typeof 0; // "number"

typeof 2.34; // "number"

typeof 10n; // "bigint"

typeof true; // "boolean"

typeof "foo"; // "string"

let user = { nome: "Mario", cognome: "Rossi" };

typeof user; //"object"
```

--- #slide N

# Data Types

Conversione o Casting

- Nella maggioranza dei casi i tipi vengono convertiti automaticamente in JS
- Per esempio la funzione alert converte il suo parametro in una stringa per poterlo visualizzare correttamente

```js
alert("hello world!"); // no casting questa è già una string
alert(10); //converte 10 in "10" per poterlo visualizzare
alert(11+4); //valuta l'espressione e il risultato viene convertito in stringa.
Cosa viene visualizzato?

// ci sono anche alcune doppie conversioni
alert("12" / "4") // "3"

//e alcune eccezioni

alert("12" + "4") // "124"

```

<br />
<div style="background-color: green;color: yellow;padding: 10px;">
NOTA: l'operatore + è l'operatore di concatenazione di stringhe
</div>
--- #slide N
 
# Data Types

Conversione o Casting

- Se invece vogliamo o abbiamo la necessità di convertire a stringa usiamo la funzione `String(<valore>)` che restituisce una rappresentazione di valore come stringa

```js
String(11 + 4); // "15"

String(true); // "true"

String(NaN); // "NaN"
```

--- #slide N

# Data Types

Conversione o Casting

- Possiamo anche convertire un valore in numero tramite la funzione `Number(<valore>)`

```js
Number("3"); // 3

Number("     6      "); // 6

Number("3" + "2"); // 32

Number("3" / "2"); // 1.5

// casi notevoli

Number(undefined); // NaN

Number(null); // 0

Number(true); // 1

Number(false); // 0

Number(""); // 0
```

--- #slide N

# Data Types

Conversione o Casting

- Possiamo anche convertire un valore in boolean tramite la funzione `Boolean(<valore>)`

```js
Boolean(1); // true

Boolean(0); // false

Boolean("ciao"); // true

Boolean(""); // false

Boolean(null); // false

Boolean(undefined); // false

Boolean(NaN); // false
```

---

# Confronti

operatori di confronto

- In JavaScript, sono presenti i comuni operatori di confronto con un comportamento identico al C/C++ e molto altri linguaggi
- Questi operatori sono utilizzati per creare delle espressioni logiche che resitutisco un valore **Boolean**
- Pertanto un'espressione di confronto può resitutire o **True** o **False**

```js
let a = 10;
let b = 7;
let c = 2;

console.log(a > b); // true
console.log(a > = b); // true
console.log(b < a); // true
console.log(b < = a); // true
console.log(a == b); // false
console.log(a ! = c); // true
```

<div style="background-color:green;color:yellow;padding:10px;margin-top:20px;">
NOTA: per ragioni grafiche è presente uno spazio, ma in JavaScrip va rimosso 
<mark>a  >= b</mark> e non a >&nbsp;&nbsp;= b
</div>

---

# Confronti

operatori di confronto

```js
let a = 10;
let b = 7;
let c = 2;

let d = a == b; // d vale false
let d = (a == b); // d vale false

let d = a ! = b; // d vale true
let d = (a ! = b); // d vale true

console.log(a < b + 4);  // true
console.log(a < (b + 4));  // true
```

<br />

- L'operatore di uguaglianza <mark>==</mark> e disuguaglianza <mark>!=</mark> si scrivono come in C/C++
- In particolare in JavaScript **==** si chiama `Regular equality check`, per identificare che fà un confronto di uguaglianza regolare o convenzionale

---

# Confronti

operatori di confronto

```js
console.log("2" > 1); // true

console.log("04" < 2); // false

console.log(true == 1); // true

console.log(false == 0); // true

console.log(true > 5); //false

console.log("02" < "03"); //true
```

<br />

- Quindi risulta evidente che JavaScript quando usa l'operatore <mark>==</mark> effettua una conversione dei tipi per essere sicuro di confrontare numeri

---

# Confronti

operatori di confronto

```js
let a = 0;
let b = "0";

console.log(a == b); // true

console.log(Boolean(a) == Boolean(b)); // false
```

<br />
<div style="background-color:green;color:yellow;padding:10px;margin-top:20px;">
E' molto importante ricordarsi questa regola e il funzionamento dell'operatore <mark> Regular equality check</mark>
</div>

---

# Confronti

operatori di confronto

- JavaScript definisce anche un'altro operatore di uguaglianza <span style="background-color: rgb(248,248,248);padding: 1px 5px 1px 5px; border-radius: 6px; border: 1px solid black;">===</span> chiamato `Strict equality check`
- Questo operatore non esiste in altri linguaggi come il C/C++
- Questo operatore al contrario di **==** effettua un controllo di uguaglianza sui suo i operandi <mark>SENZA</mark> effettuare una conversione di tipo
- E' anche definito l'operatore di disuguaglianza strict <span style="background-color: rgb(248,248,248);padding: 1px 5px 1px 5px; border-radius: 6px; border: 1px solid black;">!==</span>

```js
let a = 0;
let b = "0";

console.log(a == b); // true  "0" è convertito in numero

console.log(a === b); // false i due operandi sono di tipo diverso

console.log(a == false); // true

console.log(a === false); // false
```

<br />

- Questo ci permette di differenziare 0 da false

---

# Conditional Branching

if...else if...else...?

- Spesso abbiamo la necessità di eseguire un blocco di codice al verificarsi di una specifica condizione
- Come, nella quasi totalità dei linguaggi di programmazione, possiamo utilizzare lo statement `if`
- `if (<condizione>)` valuta l'espressione booleana e se è True esegue il blocco di codice seguente

```js
if (n == 3) {
  n = n + 7 / 2;
  console.log(n);
}

let anni = prompt("Quanti anni hai?", "");
if ((anni = 16)) {
  console.log("Probabilmente sei uno studente!!");
}

//forma contratta
if (anni == 16) console.log("Probabilmente sei uno studente!!");
```

<div style="background-color:green;color:yellow;padding:10px;margin-top:20px;">
La forma non contratta aumenta la leggibilità del codice
</div>

---

# Conditional Branching

if...else if...else...?

- In caso in cui vogliamo eseguire blocchi mutuamente esclusivi al verificarsi o meno di una condizione possiamo usare lo statement `if...else`

```js
let anni = prompt("Quanti anni hai?", "");

if (anni < 25) {
  console.log("Probabilmente sei uno studente!!");
} else {
  console.log("Probabilmente sei un lavoratore o un disoccupato");
}
```

- In questo caso se la variabile anni assume valore inferiore a 25 viene eseguito solamente il blocco di codice immediatamente successivo
- In caso contrario viene eseguito solamente il blocco di codice successivo ad **else**
<div style="background-color:green;color:yellow;padding:10px;margin-top:20px;">
I due blocchi di codice vengono SEMPRE eseguiti in modo mutuamente esclusivo
</div>

---

# Conditional Branching

if...else if...else...?

- Esistono casi in cui vogliamo valutare una serie di espressioni
- In questo scenario utilizziamo lo statement `if...else if...else`

```js
let anni = prompt("Quanti anni hai?", "");

if (anni < 25) {
  console.log("Probabilmente sei uno studente!!");
} else if (anni > 24 && anni < 55) {
  console.log("Probabilmente sei un lavoratore o un disoccupato");
} else if (anni > 54 && anni < 67) {
  console.log("Probabilmente hai molta esperienza nel tuo lavoro");
} else {
  console.log("Probabilmente sei un pensionato");
}
```

- In questo caso ci sono 4 blocchi mutuamente esclusivi di codice
- Solo un blocco di codice viene eseguito in funzione del valore della variabile anni, quindi in funzione di quale espressione assume valore True

---

# Conditional Branching

if...else if...else...?

- In certi casi viene utilizzato lo statement if...else per assegnare delle variabili
- In taluni, ed altri casi, è possibile utilizzare l'operatore `?` (question mark operator)
- Permette di esprimere un costrutto if...else in maniera molto compatta

`condizione ? valore-True : valore-False;`

- L'operatore `?` valuta la condizione.
- In caso sia valutata a True restituisce **valore-True**.
- In caso contrario restituisce **valore-False**

```js
let anni = prompt("Quanti anni hai?", "");

let studente = anni < 25 ? True : False;

let professione = anni < 25 ? "Studente" : "Lavoratore";
```

---

# Conditional Branching

if...else if...else...?

- Ovviamente l'operatore `?` può essere usato in sequenza

```js
let anni = prompt("Quanti anni hai?", "");

if (anni < 25) {
  console.log("Probabilmente sei uno studente!!");
} else if (anni > 24 && anni < 67) {
  console.log("Probabilmente sei un lavoratore o un disoccupato");
} else {
  console.log("Probabilmente sei un pensionato");
}

let occupazione =
  anni < 25 ? "Studente" : anni > 24 && anni < 67 ? "Lavoratore" : "Pensionato";
```

<div style="background-color:green;color:yellow;padding:10px;margin-top:20px;">
L'operatore <mark>?</mark> in alcuni casi può migliorare la leggibilità e compattezza del codice.<br /><br />
In altri casi può rendere il codice poco leggibile e incomprensibile.<br /><br />
Utilizzarlo con parsimonia solo quando è vantaggioso.
</div>

---

# Switch

if multipli

- Come abbiamo visto tramite il costrutto `if...else if...else` possiamo valutare il verificarsi di una serie di condizione esclusive
- Tuttavia quando il numero di queste condizione è maggiore di 2 o 3, il codice risulta pesante da leggere e poco elegante o poco espressivo
- In taluni scenari possiamo usare lo statement `switch` che permette di raggiungere lo stesso obiettivo in modo più elegante

---

# Switch

if multipli

```js
switch (<valore>) {
  case <primo valore>:
    //blocco di codice eseguito se <valore> === <primo valore>
    [break];
  case <secondo valore>:
    //blocco di codice eseguito se <valore> === <secondo valore>
    [break];
  case <terzo valore>:
    //blocco di codice eseguito se <valore> === <terzo valore>
    [break];
  default:
    //blocco di codice eseguito se <valore> !== <primo|secondo|terzo valore>
}
```

- Lo statement `break` è opzionale e serve a segnare la fine del blocco di codice eseguito per un particolare caso dello switch
- Se break viene omesso, l'esecuzione continua con il blocco di codice successivo
- `default` è opzionale e se presente deve essere l'ULTIMO statement dello switch

---

# Switch

if multipli

```js
let anni = prompt("Quanti anni hai?", "");

switch (Number(anni)) {
  case 25:
    console.log("Forse sei uno studente");
    console.log("o forse sei un neolaureato");
    break;
  case 35:
    console.log("Se nel pieno dell'attività lavorativa");
    break;
  case 67:
  case 68:
    console.log("Sei pensionato");
    break;
  default:
    console.log("Non riesco a capire cosa fai");
}
```

---

# Switch

if multipli

- Sia switch che case accettano una qualsiasi esperessione.
- La cosa importante che vengano valutate allo stesso tipo in quanto switch usa uno Strick equity check

```js
let a = 10;
let b = 5 * 2;

switch (++a) {
  case b:
    console.log("a è uguale a b");
    console.log(a);
    console.log(b);
    break;
  case b + 1:
    console.log("a è uguale a b + 1");
    console.log(a);
    console.log(b);
    break;
  default:
    console.log("non conosco il valore di a");
}
```

---

# Cicli

repeat yourself

- In JS i cicli base sono esattamente uguali a quelli del C/C++
- I 3 cicli principali sono

  1.  `while`
  2.  `do...while`
  3.  `for`

- Ci sono anche altri tipi di cicli che analizzeremo in seguito

---

# Cicli

repeat yourself

- Il ciclo **while** assume la seguente forma:

```js
while (condizione) {
  blocco codice
}
```

- `blocco codice` viene eseguito fintantochè la `condizione` risulta vera
- Pertanto se condizione all'inizio è falsa il ciclo non viene mai eseguito

```js
let a = 5;
while (a > 0) {
  console.log(`il numero è ${a--}`);
}

> il numero è 5
> il numero è 4
> il numero è 3
> il numero è 2
> il numero è 1
```

---

# Cicli

repeat yourself

- Il ciclo **do...while** assume la seguente forma:

```js
do {
  blocco codice
} while (condizione);
```

- `blocco codice` viene eseguito fintantochè la `condizione` risulta vera
- Pertanto il ciclo viene eseguito **SEMPRE ALMENO** 1 volta

```js
let a = 5;
do {
  console.log(`il numero è ${a--}`);
} while (a > 0);

> il numero è 5
> il numero è 4
> il numero è 3
> il numero è 2
> il numero è 1
```

---

# Cicli

repeat yourself

- Il ciclo **for** assume la seguente forma:

```js
for (begin; condition; step) {
  blocco codice
}
```

- lo statement `begin` viene eseguito **una sola volta** all'inizio del ciclo e setta la condizione iniziale
- `condition` viene valutato prima di ogni iterazione. Se **true** l'iterazione avviene, se **false** il ciclo termina
- `step` incrementa la variabile di controllo dopo l'esecuzione dell'iterazione corrente
- Pertanto il ciclo viene eseguito finchè la `condition` è vera e può **NON ESSERE MAI** eseguito

```js
for(let a = 5; a > 0; a--) {
  console.log(`il numero è ${a}`);
}
> il numero è 5
> il numero è 4
> il numero è 3
> il numero è 2
> il numero è 1
```

---

# Cicli

repeat yourself

- Le componenti `begin` e `step` del ciclo **for** sono opzionali
- Pertanto i seguenti cicli for sono validi

```js
let i = 0;
for (; i < 3; i++) console.log(i);

let i = 0;
for (; i < 3; ) {
  console.log(i);
  i++;
}
```

- Se rimuoviamo anche la `condition` otteniamo un ciclo infinito

```js
for (;;) {
  console.log("loop");
}
```

---

# Cicli

repeat yourself

- Spesso è necessario avere la possibilità di interrompere un ciclo prima che la condizione d'uscita diventi falsa
- Per esempio immaginiamo di voler eseguire la somma dei numeri inseriti dall'utente e di visualizzarla quando l'utente smette di inserire numeri o inserisce zero

```js
let sum = 0;

while (true) {
  let value = +prompt("Inserisci un numero", "");
  if (!value) break;
  sum += value;
}
alert("Somma dei numeri inseriti pari a: " + sum);
```

- Quindi la parola chiave `break` quando invocata interrompe immediatamente il ciclo in corso e passa il controllo alla linea di codice successiva al ciclo stesso.
- Un ciclo while infinito con **break** è molto utile quando la condizione di uscita non può essere evrificata ne all'inizio ne alla fine del ciclo

---

# Cicli

repeat yourself

- Ci sono casi in cui è necessario interrompere l'iterazione corrente, senza uscire dal ciclo, e saltare subito all'iterazione successvia
- Per esempio per stampare i numeri pari compresi nell'intervallo 1-10 possiamo avvalerci della keyword `continue`

<br>

```js
for (let i = 1; i <= 10; i++) {
  if (i % 2) continue;
  console.log(i);
}
> 2
> 4
> 6
> 8
> 10
```

<br>

- **continue** ci permette di ridurre il livello di nesting rendendo il codice più leggibile e manutenibile

---

# Cicli

repeat yourself

- Come visto tramite la parola `break` possiamo uscire da un ciclo
- Ma come possiamo uscire da più cicli nested tra di loro?
- Per fare ciò utilizziamo una `label` in questo modo

```js
uscita: for (let r = 0; r < 3; r++) {
  for (let c = 0; c < 3; c++) {
    let cella = prompt(`Valore della cella [${r},${c}]`);
    if (!cella) break uscita;
    console.log(`Cella [${r},${c}] = ${cella}`);
  }
}
alert("Hai interrotto l'inserimento");
```

- In caso in cui l'utente non inserisce nulla il flusso del programma salta all'istruzione successiva alla label indicata (**uscita**). Pertanto alert viene eseguito.
- Importante notare che questo meccanismo **NON** permette un salto incodizionato ovunque nel codice ma può essere solo chiamato dall'interno di un ciclo

---

# Funzioni

don't repeat yourself

- Le funzioni sono i "mattoni" del codice sorgente di un programma
- Una funzione è un blocco univoco di codice che può essere richiamato in una o più parti del codice
- Le funzioni permettono di suddividere il programma in blocchi autonomi e di rispettare il principio [DRY](https://it.wikipedia.org/wiki/Don%27t_repeat_yourself)
- Una funzione dovrebbe assolvere ad un unico compito
- Una funzione in JS può essere definita tramite la seguente sintassi chiamata `function declaration`:

```js
function <nome funzione>() {
  codice funzione
}
```

- La keyword `function` apre la definizione di una funzione
- Segue il nome della funzione (spesso si adotta una convenzione come [snake_case](https://it.wikipedia.org/wiki/Snake_case), [camel_case](https://it.wikipedia.org/wiki/Notazione_a_cammello) o altro)
- Il blocco di codice che implementa la funzione è racchiuso tra {}

```js
function show_message() {
  alert("Messaggio da ripetere");
}
```

---

# Funzioni

don't repeat yourself

- Le variabili dichiarate in una funzione sono `locali` e pertanto visibili solo all'interno della funzione stessa
- Ovviamente una funzione ha accesso a tutte le variabili esterne o globali

```js
function funzione() {
    let internal = "io sono interna";
    global = "sono modificata dalla funzione";
    console.log(internal);
}
let global = "io sono globale";
console.log(global);
> io sono globale

funzione();
> io sono interna

console.log(internal);
> Uncaught ReferenceError: internal is not defined

console.log(global);
> sono modificata dalla funzione
```

---

# Funzioni

don't repeat yourself

- Tuttavia se una variabile locale ha lo stesso nome di una globale, quest'ultima viene **oscurata** in quanto la variabile locale ha precedenza

```js
function funzione() {
    let internal = "io sono interna";
    let global = "anche io sono interna";
    console.log(internal);
    console.log(global);
}

let global = "io sono globale";
console.log(global);
> io sono globale

funzione();
> io sono interna
> anche io sono interna

console.log(global);
> io sono globale
```

---

# Funzioni

don't repeat yourself

- Spesso è necessario fornire uno o più parametri ad una funzione

```js
function <nome funzione>(<par 1>, <par 2>, ..., <par N>) {
  codice funzione
}
```

- I patrametri sono racchiusi tra le () e separati da una virgola

```js
function modify_parameters(param1, param2) {
  console.log(`Ecco i parametri ${param1}, ${param2} passati alla funzione`);
}

modify_parameters(10, 20);

//output
Ecco i parametri 10, 20 passati alla funzione
```

---

# Funzioni

don't repeat yourself

<div style="background-color:green;color:yellow;padding:10px;margin-top:20px;">
In JS esiste solo il passaggio per valore dei parametri
</div>

<br />

```js
function modify_parameters(param1, param2) {
  console.log(`Ecco i parametri ${param1}, ${param2} originali`);
  param1 = param1 + 20;
  param2 = param2 + 20;
  console.log(`Ecco i parametri ${param1}, ${param2} alla fine della funzione`);
}

let p1 = 10;
let p2 = 11;

console.log(`Ecco le variabili prima della chiamata a funzione ${p1}, ${p2}`);
modify_parameters(p1, p2);
console.log(`Ecco le variabili dopo la chiamata a funzione ${p1}, ${p2}`);
```

---

# Funzioni

don't repeat yourself

```js
//output
Ecco le variabili prima della chiamata a funzione 10, 11

Ecco i parametri 10, 11 originali

Ecco i parametri 30, 31 alla fine della funzione

Ecco le variabili dopo la chiamata a funzione 10, 11
```

<br />

- Come si vede i parametri attuali non sono modificati dalla funzione, a conferma del passaggio per valore

---

# Funzioni

don't repeat yourself

- I parametri di una funzione possono essere anche degli oggetti
- In tal caso viene passato per valore un _reference_ (in C/C++ un puntatore) all'oggetto
- Pertanto è possibile modificare gli attributi dell'oggetto
- In ogni caso il passaggio del parametro è sempre per valore

```js
function capitalize(par1) {
  par1.nome = par1.nome.toUpperCase();
}
let utente = {
  nome: "Antonio",
  eta: 48
}
console.log(utente);
capitalize(utente);
console.log(utente);

//output
{nome: 'Antonio', eta: 48}
{nome: 'ANTONIO', eta: 48}
```

---

# Funzioni

don't repeat yourself

- Se un parametro di una funzione, non viene passato durante la chiamata, questo assume il valore di **undefined**

```js
function merge(nome, cognome) {
  console.log(`ciao ${nome} ${cognome}`);
}

merge("Antonio", "Mancuso");
> ciao Antonio Mancuso

merge("Antonio");
> ciao Antonio undefined

```

---

# Funzioni

don't repeat yourself

- Per ovviare a questo problema. possiamo specificare un valore di **deafult** per i parametri di una funzione
- In tal modo se il parametro non viene passato, assumerà il valore di default e non undefined

```js
function merge(nome, cognome = "Mancuso") {
  console.log(`ciao ${nome} ${cognome}`);
}

merge("Antonio", "Mancuso");
> ciao Antonio Mancuso

merge("Antonio");
> ciao Antonio Mancuso

```

---

# Funzioni

don't repeat yourself

- Importante notare che il parametro di default non deve essere necessariamente un tipo base, ma può essere un espressione qualsiasi, purchè sia valida in JS

```js
function merge(nome, cognome = "Mancuso".toUpperCase()) {
  console.log(`ciao ${nome} ${cognome}`);
}

merge("Antonio", "Mancuso");
> ciao Antonio Mancuso

merge("Antonio");
> ciao Antonio MANCUSO

```

---

# Funzioni

don't repeat yourself

- Siccome un parametro di default può essere una qualsiasi espressione, ne consegue che può anche essere una funzione

```js
function get_from_db() {
  console.log("cerco il cognome di default nel DB");
  return "MaNcUsO";
}

function merge(nome, cognome = get_from_db()) {
  console.log(`ciao ${nome} ${cognome}`);
}

merge("Antonio", "Mancuso");
> ciao Antonio Mancuso

merge("Antonio");
> ciao Antonio MaNcUsO
```

---

# Funzioni

don't repeat yourself

- Un altro modo di definire un parametro di default o alternativo è tramite l'uso dell'operatore ||

```js
function merge(nome, cognome) {
  cognome = cognome || "MancUSO";

  console.log(`ciao ${nome} ${cognome}`);
}

merge("Antonio", "Mancuso");
> ciao Antonio Mancuso

merge("Antonio");
> ciao Antonio MancUSO
```

---

# Funzioni

don't repeat yourself

- Esattamente come in C/C++ una funzione restituisce **sempre** un valore
- Una funzione che non resitutisce esplicitamente un valore restituisce **undefined**

```js
function somma(a, b) {
  let s = a + b;
}

let sum  = somma(10, 5);
console.log(sum);

> undefined
```

---

# Funzioni

don't repeat yourself

- Una funzione può restituire un valore esplicito, al chiamante, tramite la keyword `return`
- La keyword `return` può apparire in qualunque punto della funzione

```js
function somma(a, b) {
  return a + b;
}

let sum = somma(10, 5);
console.log(sum);
> 15

function confronto(a, b) {
  if (a > b)
    return "maggiore";
  else
    return "minore";
}

console.log(confronto(10, 20));
> minore

```

---

# Funzioni

don't repeat yourself

- Se `return` viene invocato senza argomento esso resituirà **undefined**

```js
function confronto(a, b) {
  if (a > b)
    return "maggiore";
  else
    return;
}

console.log(confronto(20, 10));
> maggiore

console.log(confronto(10, 20));
> undefined
```

---

# Funzioni

don't repeat yourself

- Il valore restituito da una funzione può essere qualsiasi espressione valida JS

```js
function record(nome, cognome, eta) {
  return {
    nome: nome,
    cognome: cognome,
    eta: eta
  }
}

let utente = record("Antonio", "Mancuso", "47");
console.log(utente);

> {nome: 'Antonio', cognome: 'Mancuso', eta: '47'}
  cognome: "Mancuso"
  eta: "47"
  nome: "Antonio"

```

---

# Funzioni

don't repeat yourself

- Pertanto una funzione può restituire un oggetto o addirittura un'altra funzione

```js
function operazione(operator) {
  function somma(a, b) { return a + b; }

  function diff(a, b) { return a - b; }

  if (operator == "+")
    return somma;
  else if (operator == "-")
    return diff;
}

let res = operazione("+")(5, 3);
console.log(res);
> 8

let res = operazione("-")(5, 3);
console.log(res);
> 2

```

---

# Funzioni

don't repeat yourself

- In JS esistono sintassi alternative per definire una funzione
- Per esempio si può definire una funzione tramite un assegnamento (o **_binding_**)
- Questa sintassi prende il nome di `function expression`

```js
const somma = function(a, b) {
  return a + b;
};

console.log(somma(5,3));

> 8
```

- In questo caso la funzione è di tipo `anonymous` in quanto non viene specificato un nome
- La funzione anonima viene assegnata alla variabile somma
- In C questa funzionalità si ottiene tramite complessi puntatori a funzione, mentre in JS è una semplice assegnazione

---

# Funzioni

don't repeat yourself

- In JS le <mark>funzioni anonime sono usate molto spesso</mark>, soprattutto come parametri di altre funzioni
- La funzione `setTimeout(<function>, timeout)` chiama la funzione **function** ogni **timeout** millisecondi

```js
function tick() {
  console.log("tick");
}

setInterval(tick, 1000);
```

<br />

- Vediamo un modo più veloce e pratico di usare setInterval usando una funzione anonima

```js
setInterval(function () {
  console.log("tick");
}, 1000);
```

---

# Funzioni

don't repeat yourself

- In JS una funzione non è uno speciale costrutto
- La sintassi `function expression` ci permette di assegnare una funzione ad una variabile
- Da ciò possiamo desumere che una funzione in JS è un valore
- Tuttavia anche una funzione dichiarata con la sintassi `function declaration` può essere assegnata ad una variabile

```js
function somma(a, b) {
  return a + b;
}
let sum = somma;
console.log(sum(2, 4));
> 6

console.log(sum);
>ƒ somma(a, b) {
>  return a + b;
>}
```

---

# Funzioni

don't repeat yourself

- Un'importante differenza tra **function declaration** e **function expression** è lo scope e validità della funzione
- Per una **function declaration** la funzione può essere richiamata in un punto qualsiasi del codice, anche prima della sua definizione

```js
console.log(somma(3, 5));

function somma(a, b) {
  return a + b;
}

console.log(somma(6, 1));
> 8
> 7
```

- Come si vede la prima linea è eseguita correttamente anche se la dichiarazione della funzione somma avviene dopo nel codice
- Questo perchè le funzioni dichiarate in questo modo hanno scope globale e l'interprete JS le valuta prima dell'esecuzione delle altre linee di codice

---

# Funzioni

don't repeat yourself

- Per una **function expression** la funzione può essere richiamata solo dopo che l'assegnazione è avvenuta
- Pertanto se si richiama la funzione prima che essa sia definita l'interprete genera un errore

```js
console.log(somma(3, 5));

let somma = function(a, b) {
  return a + b;
}

console.log(somma(6, 1));

> Uncaught SyntaxError: Identifier 'somma' has already been declared

```

- Infatti la funzione somma è definitia solo alla linea 3, pertanto la linea 1 non può essere eseguita correttamente

---

# Funzioni

don't repeat yourself

```js
function prodotto(a ,b) {
  return a * b;
}

let mul = prodotto;

console.log(prodotto(2, 3));
>6

console.log(mul(2, 3));
>6
```

<br />

- Pertanto un'aspetto molto importante da ricordare è

<div style="background-color: green;color: yellow; padding: 10px; margin:10px;">
In JS una funzione è sempre un valore &lt;right-value&gt;
</div>

---

# Funzioni

don't repeat yourself

- Considerando il fatto che una funzione è sempre un valore, possiamo dedurre la possibilità di passare una funzione come parametro di un'altra funzione

```js
function buttonAction1() {
  console.log("Pulsante premuto");
}

function onButtonClick(button, action) {
  console.log("Il bottone è stato premuto, ora eseguiamo la sua azione");
  action();
}

onButtonClick(null, buttonAction1);

> Il bottone è stato premuto, ora eseguiamo la sua azione
> Pulsante premuto

```

---

# Funzioni

don't repeat yourself

```js
function buttonAction1() {
  console.log("Pulsante premuto");
}

function buttonAction2() {
  console.log("The button has been pressed");
}


function onButtonClick(button, action) {
  console.log("Il bottone è stato premuto, ora eseguiamo la sua azione");
  action();
}

onButtonClick(null, buttonAction2);

> Il bottone è stato premuto, ora eseguiamo la sua azione
> The button has been pressed

```

---

# Funzioni

don't repeat yourself

- Considerando gli esempi precedenti, le funzioni buttonAction1() e buttonAction2() prendono il nome di `callback functions`
- In quanto queste funzioni sono richiamate da un'altra funzione
- Le callback in JS sono usate spessissimo ed in molti casi

<img src="/media/js15.png" class="mx-auto w-160" />

- Per esempio una callback può essere passata ad una funzione di libreria che la invocherà al momento opportuno

---

# Funzioni

don't repeat yourself

- Vediamo un esempio.

```js
function alert_saluti(name) {
  alert("Hello " + name);
}

function console_saluti(name) {
  console.log("Hello " + name);
}

function processUserInput(callback) {
  var name = prompt("Per favore inserisci il tuo nome.");
  callback(name);
}

processUserInput(alert_saluti);
processUserInput(console_saluti);
```

- Come si vede possiamo cambiare il comportamento di processUserInput senza modificarne il codice
- Le `callback` sono all abase della programmazione ad eventi asincrona tipica di JS

---

# Funzioni

don't repeat yourself

- Un'altro scenario che si incontra spesso, specie nei framework e librerie JS, è l'esecuzione di una funzione anonima

```js
let c = 20;

(function(a, b) {
  let c = 10;
  console.log(a + b + c);
})(5, 3);

>18
```

<br />

- Questo tipo di funzioni si chiama `self-invoked function`
- _Lo scopo principale di questo tipo di funzioni è di eseguire del codice una sola volta, senza "sporcare" lo scope globale_
- Ogni variabile dichiarata nella funzione rimane locale alla funzione

---

# Funzioni

don't repeat yourself

- ES6 ha aggiunto un terzo modo di definire una funzione, e specificatamente ha definito le `arrow function`
- Queste funzioni sono caratterizzate dall'uso di un segno **arrow** `=>`, da qui il loro nome
- Lo scopo delle arrow function è di rendere ancora più compatta la notazione usata per esprimere un anonymous function

```js
let message = function () {
  console.log("messaggio anonimo");
};

message();
> messaggio anonimo
```

- la keyword function è evidentemente superflua

```js
let message = () => console.log("messaggio anonimo");

message();
> messaggio anonimo
```

---

# Funzioni

don't repeat yourself

- In modo analogo anche una funzione con parametri può essere espressa come `arrow function`

```js
let somma = function(a, b) {
  console.log(a + b);
};
somma(5, 3);
> 8


let somma = (a, b) => console.log(a + b);
somma(5, 3);
> 8
```

- arrow **=>** vine dopo i parametri e prima del body della funzione
- Pertanto può essere facilmente letta in questo modo: questi input/parametri generano un risultato attraverso questo blocco di codice (body della funzione)

---

# Funzioni

don't repeat yourself

- Quando la funzione ha un solo parametro, le parentesi possono essere omesse

```js
let positivo = (n) => n > 0 ? true: false;
console.log(positivo(4));
> true

let positivo = n => n > 0 ? true: false;
console.log(positivo(4));
> true
```

---

# Funzioni

don't repeat yourself

- Quando la funzione ha più linee si esprime così

```js
let multiline = (a, b) => {
  console.log("Eseguo la somma di a e b");
  return a + b;
}

console.log(multiline(4, 5));
> Eseguo la somma di a e b
> 9

let log = () => {
  console.log("log line1");
  console.log("log line2");
}

log();
> log line 1
> log line 2
```

---

# Funzioni

don't repeat yourself

- Vediamo come invocare la funzione setInterval attraverso una arrow function

```js
setInterval(function () {
  console.log("tick");
}, 1000);

setInterval(() => console.log("tick"), 1000);
```

- Si può facilemente notare l'uso delle arrow function rende la notazione snella e più compatta

<br />

<div style="background-color: green;color: yellow; padding: 10px; margin:10px;">
Le arrow function sono utilizzate spessissimo in JavaScript moderno
</div>

--- #slide N

# JS Objects

- Tutti i tipi incontrati fino ad ora, sono chiamati tipi **primitivi** in qunto esprimono un solo valore (intero, decimale, stringa, booleano)
- Un tipo **_Oggetto_** al contrario rappresenta un tipo di dato aggregato, una collezione di informazioni più o meno complessa (molto simile alle struct del C)
- Un oggeto in JS è un _array associativo o dizionario_, detto **_Object Literals_**

<img src="/media/js10a.png" width="200" style="float: right;" />

- Un oggetto si crea con `{...}`
- Dentro le parentesi si specifica una serie di attributi nella forma `key:value`
- Dove **key** o **property value** è una stringa e **value** può assumere qualsiasi valore (int, string, array, object)

```js
let utente = {
  "nome": "Mario",
  "cognome": "Rossi",
  "anni": 20
}
{nome: 'Mario', cognome: 'Rossi', anni: 20}
```

--- #slide N

# JS Objects

- Siccome l'attributo key è sempre una stringa le virgolette " possono essere omesse in quanto implicite
- Pertanto l'oggetto utente può anche essere definito in questo modo

<br>

```js
let utente = {
  nome: "Mario",
  cognome: "Rossi",
  anni: 20
}
{nome: 'Mario', cognome: 'Rossi', anni: 20}
```

<br>

- Siccome il valore _value_ può essere di qualsiasi tipo, se è una stringa deve essere racchiuso tra "virgolette" o 'apici'

--- #slide N

# JS Objects

- Per accedere alle proprietà o attributi dell'oggetto si una la notazione con il `.` o **_dot notation_**

<br />

```js
console.log(utente.nome); -> Mario
console.log(utente.cognome); -> Rossi

utente.nome = "Pino";

```

<br />

- Possiamo aggiungere o rimuovere proprità anche dopo la definizione dell'oggetto

```js
utente.altezza = 170; //eta non esiste e viene creata

{nome: 'Mario', cognome: 'Rossi', eta: 30, altezza: 170}

delete utente.cognome; //rimuove la proprità cognome

{nome: 'Mario', eta: 30, altezza: 170}

```

--- #slide N

# JS Objects

- Pertanto possiamo definire un oggetto vuoto

<br>

```js
let utente = {};
```

<br>

- e sucecssivamente aggiungere le proprietà dell'oggetto sia con la dot notation che con le []

<br>

```js
utente.nome = "Mario";
utente["cognome"] = "Rossi";
utente.altezza = 170;
```

--- #slide N

# JS Objects

- Per accedere alle proprietà dell'oggetto si può anche usare la notazione con le parentesi `[<key> ]`

sia con "virgolette"

```js
console.log(utente["nome"]); -> Mario
console.log(utente["cognome"]); -> Rossi

utente["nome"] = "Pino";
utente["eta"] = 45;
```

che con 'apici'

```js
console.log(utente['nome']); -> Mario
console.log(utente['cognome']); -> Rossi

utente['nome'] = "Pino";
utente['eta'] = 45;
```

--- #slide N

# JS Objects

- In Javascript se si accede ad una proprietà non esistente verrà restituito il valore **unidefined** (Questo è diverso dal C++ o Java)
- Quindi risulta spesso utile verificare la presenza di una chiave o proprietà in un oggetto
- La verifica se una chiave è presente o meno nell'oggetto si può fare con l'operatore `in`

<br>

```js
let utente = {
  nome: "Mario",
  cognome: "Rossi"
}

"nome" in utente -> true
"genere" in utente -> false
```

--- #slide N

# JS Objects

- Per accedere a tutte le chiavi di un oggetto si può usare il metodo **_keys_** dell'oggetto **_Object_**, passando l'oggetto da enumerare come parametro

<br>

```js
let utente = {
  nome: "Mario",
  cognome: "Rossi",
};

Object.keys(utente);
(2)[("nome", "cognome")];

utente.altezza = 170;

Object.keys(utente);
(3)[("nome", "cognome", "altezza")];
```

<br>

- Restituisce un array con tuttle le chiavi dell'oggetto

--- #slide N

# JS Objects

- Un altro metodo per accedere a tutte le chiavi di un oggetto è quello di usare un particolare ciclo denominato `for..in` loop
- Questo loop ha la seguente forma

```js
for(key in object) {
  esegui il blocco di docice per ogni chiave o proprietà dell'oggetto object
}
```

<br>

```js
let utente = {
  nome: "Mario",
  cognome: "Rossi"
}

for(let chiave in utente) {
    console.log(`la chiave ${chiave} ha valore ${utente[chiave]}`);
}
la chiave nome ha valore Mario
la chiave cognome ha valore Rossi
```

--- #slide N

# JS Objects

- Dalla teoria OOP sappiamo che un oggetto incapsula dati e metodi
- Da JS sappiamo che una funzione è un _right-value_ che può essere assegnato
- Pertanto è possibile assegnare una funzione (function declaration) ad una _key_ di un object literal
- In questo modo possiamo specificare i metodi per un oggetto JS

```js
let utente = {
 nome: "Mario",
 cognome: "Rossi"
}

utente.speak = function () {
   console.log("Ciao io sono un utente");
}

{ nome: 'Mario', cognome: 'Rossi', speak: [Function (anonymous)] }

utente.speak();
Ciao io sono un utente
```

--- #slide N

# JS Objects

- E' anche possibile creare un metodo di un oggetto tramite una function expression

<br>

```js
let utente = {
 nome: "Mario",
 cognome: "Rossi"
}

const speak = function () {
   console.log("Ciao io sono un utente");
}

utente.speak = speak;

{ nome: 'Mario', cognome: 'Rossi', speak: [Function (anonymous)] }

utente.speak();
Ciao io sono un utente
```

--- #slide N

# JS Objects

- E' anche possibile creare un metodo di un oggetto tramite una arrow function

<br>

```js
let utente = {
 nome: "Mario",
 cognome: "Rossi"
}

utente.speak = () => console.log("Ciao io sono un utente");


{ nome: 'Mario', cognome: 'Rossi', speak: [Function (anonymous)] }

utente.speak();
Ciao io sono un utente
```

--- #slide N

# JS Objects

- Possiamo anche specificare il metodo direttamente nell'object literals

<br>

```js
let utente = {
 nome: "Mario",
 cognome: "Rossi",
 speak: function() {
   console.log("Ciao io sono un utente");
 }
}

{ nome: 'Mario', cognome: 'Rossi', speak: [Function (anonymous)] }

utente.speak();
Ciao io sono un utente
```

--- #slide N

# JS Objects

- JS permette anche una scorciatoia nella definizione dei metodi di un oggetto

<br>

```js
let utente = {
 nome: "Mario",
 cognome: "Rossi",
 speak() {
   console.log("Ciao io sono un utente");
 }
}

{ nome: 'Mario', cognome: 'Rossi', speak: [Function (anonymous)] }

utente.speak();
Ciao io sono un utente
```

<br>

- Insomma, come sempre JS offre molti modi diversi di raggiungere lo stesso risultato

--- #slide N

# JS Objects

- Siccome un oggetto incapsula dati e metodi è necessario poter accedere ai dati dell'oggetto da dentro i metodi dell'oggetto
- Per esempio se volessimo che il metodo speak salutasse con il nome ed il cognome, sarebbe necessario accedere aglia ttributi _nome_ e _cognome_
- Per far ciò utilizziamo la keywork `this`, che permette di accedere l'oggetto stesso

```js
let utente = {
 nome: "Mario",
 cognome: "Rossi",
 speak() {
   console.log(`Ciao io sono l'utente ${this.nome} ${this.cognome}`);
 }
}

{ nome: 'Mario', cognome: 'Rossi', speak: [Function (anonymous)] }

utente.speak();
Ciao io sono l'utente Mario Rossi
```

--- #slide N

# JS Objects

- Vediamo il caso in cui un metodo è condiviso tra più oggetti

```js

let speak = function () { console.log(`Ciao io sono l'utente ${this.nome} ${this.cognome}`); }

let utente1 = {
  nome: "Mario",
  cognome: "Rossi",
  speak: speak
}
let utente2 = {
  nome: "Giuseppe",
  cognome: "Verdi",
  speak: speak
}

> utente1.speak()
Ciao io sono l'utente Mario Rossi

> utente2.speak()
Ciao io sono l'utente Giuseppe Verdi
```

--- #slide N

# JS Objects

- Come si vede dall'output quando il metodo speak viene invocato sull'oggetto utente1 stampa i valori assegnati alle properità nome e cognome (Mario Rossi)
- In modo analogo quando il metodo speak viene invocato sull'oggetto utente2 stampa i valori assegnati alle properità nome e cognome (Giuseppe Verdi)
- Questo perchè nel modo speak abbiamo referenziato gli attributi nome e cognome tramite la keywork _this_
- Pertanto _this.nome_ significa prendi il valore dell'attributo nome come definito nell'oggetto ocrrente (utente1 o utente2)
- Questo è uno dei principi cardini della OOP e in JS il suo funzionamento è molto simile ad altri linguaggi come Java/C++

--- #slide N

# JS Objects

- Nell'esempio precedente abbiamo visto che possiamo creare più oggetti (utente1 e utente2) definendo due object literals identici
- Per ottimizziare il codice e rispettare il principio _DRY_ abbiamo condiviso un unico metodo speak tra i due oggetti
- Tuttavia non è ancora ottimale dover ridefinire l'object literal per ogni oggetto utente che si vuole creare (pensiamo a 1000 utenti)
- Per risolvere questo problema JS mette a disposizione il concetto di `costruttore`
- Il costruttore di un oggetto permette di condividere in modo metodi e attributi tra oggetti diversi

--- #slide N

# JS Objects

- Il `costruttore` è una funzione che crea un oggetto ed assegna attributi e metodi
- Una volta definito il costruttore è possibile _costruire_ o instanziare un numero qualsiasi di oggetti identici (nella struttura e non nei dati)

<br>

```js
let Utente = function (nome, cognome) {
  (this.nome = nome),
    (this.cognome = cognome),
    (this.speak = function () {
      console.log(`Ciao io sono l'utente ${this.nome} ${this.cognome}`);
    });
};
```

<br>

- In questo modo abbiamo definito il costruttore dell'oggetto Utente
- In JS per convenzione il nome del costruttore inizia con una lettera Maiuscola

--- #slide N

# JS Objects

- Ora che abbiamo il costruttore, passiamo all'instanziazione di oggetti tramite la keywotd `new`

<br>

```js
let utente1 = new Utente("Mario", "Rossi");
let utente2 = new Utente("Giuseppe", "Verdi");
```

<br>

- Questi due oggetti hanno esattamente la stessa struttura, due attributi ed un metodo, ma ovviamente durante l'instanziazione abbiamo assegnato valori differenti

<br>

```js
>utente1.speak()
Ciao io sono l'utente Mario Rossi

>utente2.speak()
Ciao io sono l'utente Giuseppe Verdi
```

--- #slide N

# JS Objects

- Un'importante caratteristica della OOP è la possibilità di estendere oggetti esistenti con metodi propri
- In JS per aggiungere un metodo ad un costruttore esistente si utilizza la keywork `prototype`
- Tutti i costruttori anno la proprietà _prototype_ a cui è possibile aggiungere nuovi metodi
- Vediamo come aggiungere un metodo che rende nome e cognome tutti maiuscoli

```js
const upper = function () {
    this.nome = this.nome.toUpperCase();
    this.cognome = this.cognome.toUpperCase();
}

Utente.prototype.maiuscolo = upper;

> utente1.speak()
Ciao io sono l'utente Mario Rossi

> utente1.maiuscolo()
> utente1.speak()
Ciao io sono l'utente MARIO ROSSI
```

--- #slide N

# JS Objects

- OOP definisce il concetto di `classe` come un template per creare successivamente oggetti tutti aventi le stesse priprietà
- Quindi il _costruttore_ e il _prototype_ di JS sono qualcosa di molto simile
- Tuttavia JS mette a disposizione anche il concetto e la keyword `class` per creare delle classi da cui si instanzieranno degli oggetti simili
- La sintassi è la seguente:

<br>

```js
class MyClass {
  constructor() { ... }
  metodo1() { ... }
  metodo2() { ... }
  .....
  metodoN() { ... }
}
```

--- #slide N

# JS Objects

- Vediamo come implementare l'esempio precedente con una classe

```js
class Utente {
  constructor(nome, cognome) {
    this.nome = nome;
    this.cognome = cognome;
  }

  speak() {
    console.log(`Ciao io sono l'utente ${this.nome} ${this.cognome}`);
  }

  maiuscolo() {
    this.nome = this.nome.toUpperCase();
    this.cognome = this.cognome.toUpperCase();
  }
}
```

--- #slide N

# JS Objects

- Ora instanziamo i due oggetti utente1 e utente2 come negli esempi precedenti

<br>

```js
let utente1 = new Utente("Mario", "Rossi");
let utente2 = new Utente("Giuseppe", "Verdi");

> utente1.speak()
Ciao io sono l'utente Mario Rossi

> utente1.maiuscolo()
> utente1.speak()
Ciao io sono l'utente MARIO ROSSI

> utente2.speak()
Ciao io sono l'utente Giuseppe Verdi

> utente2.maiuscolo()
> utente2.speak()
Ciao io sono l'utente GIUSEPPE VERDI
```

--- #slide N

# JS Objects

- Quindi il costrutto della classe è un modo elegante ed in linea con i principi OOP per creare un costruttore, degli attributi e dei metodi
- In effetti quello che avviene all'interno del motore JS quando definiamo una classe è esattamente quanto visto prima con _costruttore_ e _prototype_

<img src="/media/js16.png" class="mx-auto my-8 w-150" />

--- #slide N

# Esercizio js_10

JS Objects

- Per svolgere l'esercizio 10 è necessario utilizzare un form
- Vediamo qui il classico modo di processare il form client-side e non server-side

<br>

```html
<form id="<id form>">
  .....
  <input type="submit" value="Submit" onclick="process_form()" />
</form>
```

<br>

- collego un _event handler_ chiamato process_form all'evento click sul pulsante submit del form

--- #slide N

# Esercizio js_10

JS Objects

- Ora inibisco il normale funzionamento del form per gestirlo client-side e non server-side
- Aggiungo un event handler all'inizio del file .js

<br>

```js
// aggiunge un handler all'evento DOMContentLoaded
// che viene generato quando la pagina HTML ha terminato il suo caricamento
document.addEventListener("DOMContentLoaded", function() {

    // ricata l'oggetto DOM del form
    let form_utente = document.getElementById(<id form>);

    //aggiunge un handler all'evento submit del form
    //in modo da inibire il normale funzionamento (invio del form verso il server)
    form_utente.addEventListener("submit", function(event) {
        event.preventDefault();
    });
});
```

--- #slide N

# Esercizio js_10

JS Objects

- Infine definisco l'event_handler per il processamento del form

<br>

```js
//processa il form quando l'utente preme submit
function process_form() {
  console.log("process form");
  form = document.forms[< form><];
  console.log(form.elements[<id elemento form>].value);
}
```

<br>

- In questo modo quando l'utente preme il pulsante submit del form, il form stesso non sarà inviato al server **_event.preventDefault()_**
- Nell'handler di processamento del form posso accedere ai vari campi del form <br> **_form.elements[&lt;id elemento form&gt;].value_**
- Questo è il classico modo di processare un form lato client-side grazie a JS

--- #slide N

# Esercizio js_10

JS Objects

1. Creare una pagina HTML e JS contenente un form di registrazione utente
2. Il form deve contener ei seguenti campi
   1. nome
   2. cognome
   3. età
   4. colore dei capelli
3. Alla pressione del pulsante submit, il codice deve:
   - Creare un oggetto vuoto di nome **User** con i relativi attributi valorizzati con i valori inseriti nel form
   - Definire un metodo dell'oggetto chiamato **descrivi**
   - Scandire dinamicamente tutte le proprietà dell'oggetto ed aggiungere dinamicamente alla pagina HTML un tag **p** con il valore della proprietà letta

--- #slide N

# Esercizio js_10

JS Objects

- Invocare il metodo _descrivi_ che deve stampare su console il segunete messaggio: "ciao io sono l'utente &lt;nome&gt; &lt;cognome&gt; di anni &lt;età&gt; e con i capelli color &lt;colore dei capelli&gt;", dove i valori tra &lt;&gt; sono sostituiti con le proprietà dell'oggetto
- Rimuovere le proprietà **età** e **colore dei capelli** dall'oggetto e con un ciclo aggiungere dinamicamente alla pagina HTML un tag **p** con il valore della proprietà rimanenti

4. Fornire il link github al file con nome _|cognome|\_esercizio_js_10.html_ e _|cognome|\_esercizio_js_10.js_

---

# Stringhe

Introduzione

- In JavaScript, i dati di tipo testuale vengono memorizzati in stringhe
- **NON** esiste un tipo separato per i caratteri singoli
- Il formato utilizzato per le stringhe è sempre UTF-16, non viene influenzato dalla codifica della pagina.
- Come abbiamo visto in precedenza apice (') e doppio apice o virgolette (") sono equivalenti
- Il backtick (`) è molto versatile ed è stato introdotto in JS in un momento successivo
- Per definire una stringa multi linea è necessario usare il backtick (`)

```js
let str = `Questa è una stringa che
si estende
su
più linee
`
console.log(str)
> Questa è una stringa che
> si estende
> su
> più linee
```

---

# Stringhe

Caratteri Speciali

- Come in altri linguaggi JS definisce una serie di caratteri speciali
  - `\n` : a capo su una nuova linea
  - `\t`: introduce un tab
  - `\' o \" o \{backtick}`: introduce il carattere **'** o **"** o **`** 
  - `\\` : introduce il carattere **\\**
  - `\u{codice}` : stampa il carattere UTF-16 corrispondente a {codice} 

```js
console.log("Una linea molto \n lunga la mandiamo a capo");
> Una linea molto 
 lunga la mandiamo a capo

console.log("linea con \t tab")
> linea con 	 tab

console.log("C:\\Windows") // C:\Windows

console.log("\u{1F60D}"); 😍
```

---

# Stringhe

Lunghezza di una stringa

- La lunghezza di una stringa si determina attraverso la proprietà `length`
- Pertanto in JS la lunghezza non è un metodo ma una proprietà quindi va invocata senza ()

```js
let str = "Nel mezzo del cammin di nostra vita";

console.log(str.length);
> 35

console.log(str.length());
> Uncaught TypeError: str.length is not a function
```

---

# Stringhe

I principlai metodi

Qui la lista dei principlai metodi delle stringhe che studieremo (ci sono 55 metodi in totale):



<div class="grid grid-cols-3 grid-rows-9 gap-4" style="padding: 20px; margin-left:15%;">
<div style="font-weight:bolder;">charAt()</div>
<div style="font-weight:bolder;">charCodeAt()</div>
<div style="font-weight:bolder;">indexOf()</div>
<div style="font-weight:bolder;">lastIndexOf()</div>
<div style="font-weight:bolder;">startsWith()</div>
<div style="font-weight:bolder;">endsWith()</div>
<div style="font-weight:bolder;">includes()</div>
<div style="font-weight:bolder;"><mark>search()</mark></div>
<div style="font-weight:bolder;"><mark>match()</mark></div>
<div style="font-weight:bolder;"><mark>matchAll()</mark></div>
<div style="font-weight:bolder;">concat()</div>
<div style="font-weight:bolder;">repeat()</div>
<div style="font-weight:bolder;">replace()</div>
<div style="font-weight:bolder;">replaceAll()</div>
<div style="font-weight:bolder;">slice()</div>
<div style="font-weight:bolder;">split()</div>
<div style="font-weight:bolder;">substr()</div>
<div style="font-weight:bolder;">substring()</div>
<div style="font-weight:bolder;">toLowerCase()</div>
<div style="font-weight:bolder;">toUpperCase()</div>
<div style="font-weight:bolder;">trim()</div>

</div>


---

# Stringhe

accedere ad uno specifico carattere: charAt()

`charAt(indice)` 

***restituisce il carattere ad uno specifico indice***

```js
let str = "Ciao Mondo!";

console.log(str.charAt(0));  // C
console.log(str.charAt(1));  // i
console.log(str.charAt(6));  // o
console.log(str.charAt(56)); // ''


// Possiamo anche accedere direttamente usando la notazione degli array
console.log(str[0]); // C
console.log(str[1]); // i
console.log(str[6]); // o
console.log(str[6]); // undefined
```

---

# Stringhe

codice UTF-16 di uno specifico carattere: charCodeAt()

`charCodeAt(indice)` 

***restituisce il codice UTF-16 del carattere ad uno specifico indice***

```js
let str = "Ciao Mondo!";

console.log(str.charCodeAt(0));  // 67
console.log(str.charCodeAt(1));  // 105
console.log(str.charCodeAt(6));  // 111
console.log(str.charCodeAt(56)); // Nan
```

---

# Stringhe

trova la prima occorrezzan di una stringa o carattere: indexOf()

`indexOf(stringa)` 

***viene utilizzato per ottenere l'indice della prima occorrenza di un valore specificato in una stringa***

```js
let str = "Nel mezzo del cammin di nostra vita.... La vita non era più possibile";

str.indexOf("vita") // 31
str.indexOf("Vita") // -1 
str.indexOf("v") // 31
```

- Restituisce -1 in caso non sia trovata l'occorrenza

---

# Stringhe

trova l'ultima occorrezzan di una stringa o carattere: lastIndexOf()

`lastIndexOf(stringa)` 

***viene utilizzato per ottenere l'indice dell'ultima occorrenza di un valore specificato in una stringa***

```js
let str = "Nel mezzo del cammin di nostra vita.... La vita non era più possibile";

str.lastIndexOf("vita") // 43
str.lastIndexOf("Vita") // -1 
str.lastIndexOf("v") // 43
```

- Restituisce -1 in caso non sia trovata l'occorrenza

---

# Stringhe

verifica l'inizio di una stringa: startsWith()

`startsWith(stringa)` 

***determina se una stringa inizia con una determinata sottostringa o meno. Se inizia con la stringa desiderata, restituisce true altrimenti restituisce false.***

```js
let str = "Nel mezzo del cammin di nostra vita.... La vita non era più possibile";

str.startsWith("Nel") // true
str.startsWith("N") // true
str.startsWith("mezzo") // fals
```

---

# Stringhe

verifica la fine di una stringa: endsWith()

`endsWith(stringa)` 

***determina se una stringa finisce con una determinata sottostringa o meno. Se finisce con la stringa desiderata, restituisce true altrimenti restituisce false.***

```js
let str = "Nel mezzo del cammin di nostra vita.... La vita non era più possibile";

str.endsWith("vita") // false
str.endsWith("possibile") // true
str.endsWith("le") // true
str.endsWith("e") // true
str.endsWith("lE") // false
```

---

# Stringhe

strinag contiene stringa: includes()

`includes(stringa)` 

***viene utilizzato determina se una determinata sottostringa è presente o meno nella stringa chiamante.In caso affermativo restituisce true altrimenti restituisce false***

```js
let str = "Nel mezzo del cammin di nostra vita.... La vita non era più possibile";

str.includes("cammin") // true
str.includes("vita") // true
str.includes("Vita") // false
str.includes("L") // true
str.includes("....") // true
```

---

# Stringhe

desc: search()

`search(regex)` 

***viene utilizzato per determinare se un modello esiste o meno all'interno della stringa chiamante, se esiste, il metodo restituisce il valore di indice della prima corrispondenza all'interno della stringa.***

- Metodo avanzato che richiede la conoscenze delle ***regula expressions***
- Questo metodo esula dalla conoscenze di livello scuola superiore
- In modo analogo i metodi match() e matchAll() non sono trattati

---

# Stringhe

concatenazione di stringhe: concat()

`concat(item1, item2, ..., itemN)` 

***concatena le stringhe passate come argomento con la stringa chiamante***

```js
let str = "ciao ";
let str2 = "mondo";

console.log(str.concat("io ", "mi chiamo ", "Mario"));
> ciao io mi chiamo Mario

console.log(str.concat(str2));
> ciao mondo
```

---

# Stringhe

ripetizione di stringhe: repeat()

`repeat(n)` 

***viene utilizzato per creare una nuova stringa ripetendo e concatenando la stringa esistente per il numero di volte specificato. Il metodo restituisce una nuova stringa contenente copie della stringa su cui viene chiamato il metodo.***

```js
let str = "*";

str.repeat(10) // ********** 
str.repeat(0) // ''
str.repeat(Infinity) // Uncaught RangeError: Invalid count value: Infinity
```

---

# Stringhe

sostituzione di stringhe: replace()

`replace(src, dest)` 

***rimpiazza la prima occorrenza della sottostringa src, se presente, con la stringa dest***

```js
let str = "Nel mezzo del cammin di nostra vita.... La vita non era più possibile";

str.replace("vita", "VITA")
> 'Nel mezzo del cammin di nostra VITA.... La vita non era più possibile'

str.replace("zz", "XX")
> 'Nel meXXo del cammin di nostra vita.... La vita non era più possibile'

str.replace("VITA", "XXXX")
> 'Nel mezzo del cammin di nostra vita.... La vita non era più possibile'
```

---

# Stringhe

sostituzione di stringhe: replaceAll()

`replaceAll(src, dest)` 

***rimpiazza tutte le occorrenze della sottostringa src, se presente, con la stringa dest***

```js
let str = "Nel mezzo del cammin di nostra vita.... La vita non era più possibile";

str.replaceAll("vita", "VITA")
> 'Nel mezzo del cammin di nostra VITA.... La VITA non era più possibile'

str.replaceAll("vi", "VI")
> 'Nel mezzo del cammin di nostra VIta.... La VIta non era più possibile'

str.replaceAll("VITA", "XXXX")
> 'Nel mezzo del cammin di nostra vita.... La vita non era più possibile'
```

---

# Stringhe

estrazione di una stringa: slice()

`slice(start, end)` 

***estrae la sottostringa inclusa tra l'indice start(incluso) e end(non incluso) e la restituisce come nuova stringa, senza modificare la stringa originale.***

```js
let str = "Nel mezzo del cammin di nostra vita.... La vita non era più possibile";

str.slice(0, 5) // 'Nel m'
str.slice(2, 5) //'l m'
str.slice(4) // 'mezzo del cammin di nostra vita.... La vita non era più possibile'
str.slice(4,) //'mezzo del cammin di nostra vita.... La vita non era più possibile'
str.slice(-1) //'e'
str.slice(-9) // 'possibile'
str.slice(0) // 'Nel mezzo del cammin di nostra vita.... La vita non era più possibile'
str.slice(10,0) // ''
```

---

# Stringhe

suddividere una stringa: split()

`split(char)` 

***suddivide una stringa in sottostringhe separate da char. Restituisce un array di stringhe***

```js
let str = "Nel mezzo del cammin di nostra vita.... La vita non era più possibile";

str.split(' ')
> ['Nel', 'mezzo', 'del', 'cammin', 'di', 'nostra', 'vita....', 'La', 'vita', 'non', 'era', 'più', 'possibile']

str.split('....')
> ['Nel mezzo del cammin di nostra vita', ' La vita non era più possibile']

str.split('')
> ['N', 'e', 'l', ' ', 'm', 'e', 'z', 'z', 'o', ' ', 'd', 'e', 'l', ' ', 'c', 'a', 'm', 'm', 'i', 'n', ' ', 'd', 'i', ' ', 'n', 'o', 's', 't', 'r', 'a', ' ', 'v', 'i', 't', 'a', '.', '.', '.', '.', ' ', 'L', 'a', ' ', 'v', 'i', 't', 'a', ' ', 'n', 'o', 'n', ' ', 'e', 'r', 'a', ' ', 'p', 'i', 'ù', ' ', 'p', 'o', 's', 's', 'i', 'b', 'i', 'l', 'e']
```

---

# Stringhe

estrazione di sottostringhe: substr()

`substr(start, end)` 

***estrae una sottostringa a partire dall'indice start fino all'indice end***

```js
let str = "Nel mezzo del cammin di nostra vita.... La vita non era più possibile";

str.substr(0, 5) // 'Nel m'
str.substr(2, 5) //'l m'
str.substr(4) // 'mezzo del cammin di nostra vita.... La vita non era più possibile'
str.substr(4,) //'mezzo del cammin di nostra vita.... La vita non era più possibile'
str.substr(-1) //'e'
str.substr(-9) // 'possibile'
str.substr(0) // 'Nel mezzo del cammin di nostra vita.... La vita non era più possibile'
str.slice(10,0) // ''
```
---

# Stringhe

estrazione di sottostringhe: substring()

`metodo(item1, item2, ..., itemN)` 

***estrae una sottostringa a partire dall'indice start fino all'indice end***


```js
let str = "Nel mezzo del cammin di nostra vita.... La vita non era più possibile";

str.substring(0, 5) // 'Nel m'
str.substring(2, 5) //'l m'
str.substring(4) // 'mezzo del cammin di nostra vita.... La vita non era più possibile'
str.substring(4,) //'mezzo del cammin di nostra vita.... La vita non era più possibile'
str.substring(-1) //'e'
str.substring(-9) // 'possibile'
str.substring(0) // 'Nel mezzo del cammin di nostra vita.... La vita non era più possibile'
str.substring(10,0) // 'Nel mezzo '
```

---

# Stringhe

tutto minuscolo: toLowerCase()

`toLowerCase()` 

***converte una stringa tutto in minuscolo e restituisce una nuova stringa senza modificare la stringa originale***

```js
let str = "Nel mezzo del cammin di nostra vita.... La vita non era più possibile";

str.toLowerCase()
> 'nel mezzo del cammin di nostra vita.... la vita non era più possibile'
```

---

# Stringhe

TUTTO MAIUSCOLO: toUpperCase()

`toUpperCase())` 

***converte una stringa tutto in maiuscolo e restituisce una nuova stringa senza modificare la stringa originale***

```js
let str = "Nel mezzo del cammin di nostra vita.... La vita non era più possibile";

str.toUpperCase()
> 'NEL MEZZO DEL CAMMIN DI NOSTRA VITA.... LA VITA NON ERA PIÙ POSSIBILE'
```


---

# Stringhe

togliamo gli spazi: trim()

`trim()` 

***rimuove gli spazi alle due estremità di una stringa e restituisce una nuova stringa senza modificare la stringa originale***

```js
let str = "    Nel mezzo del cammin di nostra vita.... La vita non era più possibile   ";

str.trim()
> 'Nel mezzo del cammin di nostra vita.... La vita non era più possibile'
```

--- 

# Esercizio js_10a

Stringhe

1. Scrivere una funzione (abbreviatione) in JS che ricevuta in input una stringa nel fomato "nome cognome" restituisca la sua abbreviazione nel formato "nome prima lettera del cognome."
2. Inoltre la prima lettera del nome e del cognome deve essere in maiuscolo
   

```js
IN: Antonio Mancuso

OUT: Antonio M.
```

3. Fornire il link github al file con nome _|cognome|\_esercizio_js_10a.js_


--- 

# Esercizio js_10b

Stringhe

1. Scrivere una funzione (protect_email) in JS che ricevuta in input una stringa rappresentante un indirizzo email restituisca una stringa in cui la parte di user name dell'indirizzo sia parzialmente offuscato per ragioni di sicurezza

```js
IN: antonio.mancuso@istitutoagnelli.it

OUT: antonio...@istitutoagnelli.it
```

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_10b.js_

--- 

# Esercizio js_10c

Stringhe

1. Scrivere una funzione (untokenize) in JS che ricevuta in input una stringa restituisca una stringa in cui tutti gli spazi sono rimpiazzati dal carattere meno (-)

```js
IN: Nel mezzo del cammin di nostra vita

OUT: Nel-mezzo-del-cammin-di-nostra-vita
```

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_10c.js_

--- 

# Esercizio js_10d

Stringhe

1. Scrivere una funzione (capitalize) in JS che ricevuta in input una stringa restituisca una stringa in cui la prima lettera è magliuscol

```js
IN: ciamo mondo!!!

OUT: Ciamo mondo!!!
```

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_10d.js_

--- 

# Esercizio js_10e

Stringhe

1. Scrivere una funzione (capitalize_all) in JS che ricevuta in input una stringa restituisca una stringa in cui tutti i primi caratteri di ogni parola siano maiuscoli

```js
IN: ciamo mondo la terra gira!!!

OUT: Ciamo Mondo La Terra Gira!!!
```

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_10e.js_


--- 

# Esercizio js_10f

Stringhe

1. Scrivere una funzione (upper_case) in JS che ricevuta in input una stringa restituisca una stringa con tutti i caratteri maiuscoli senza usare il metodo toUpperCase()

```js
IN: ciamo mondo!!!

OUT: CIAO MONDO!!!
```

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_10f.js_

--- 

# Esercizio js_10g

Stringhe

1. Scrivere una funzione (invert_case) in JS che ricevuta in input una stringa con caratteri minuscoli e maiuscoli, restituisca una stringa in cui tutti i caratteri minuscoli sono maiuscoli e viceversa

```js
IN: Ciao Mondo!!!

OUT: cIAO mONDO!!!
```

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_10g.js_

--- 

# Esercizio js_10h

Stringhe

1. Scrivere una funzione (tronca) in JS che ricevuta in input una stringa di lunghezza arbitraria ed una lunghezza L, restituisca la stringa iniziale troncata alla lunghezza L ed aggiunga un ellipsis ... al fondo della stringa

```js
IN: Ciao Mondo la terra gira!!!, 10

OUT: Ciao Mondo...
```

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_10h.js_

---

# Array

Definizione

- Generalmente un array videne definito come una struttura dati che permette di rappresentare una collezione di valori (omogenei)

<br>
<div  style="margin-left: 25%;">
<img src="/media/js18.png" width="350" style="display:inline;"/> Array di interi <br>
<img src="/media/js19.png" width="350" style="display:inline;"/> Array di float <br>
<img src="/media/js20.png" width="350" style="display:inline;"/> Array di stringhe <br>
<img src="/media/js21.png" width="350" style="display:inline;"/> Array di frutti <br>
<img src="/media/js22.png" width="350" style="display:inline;"/> Array di macchine <br>
</div>

---

# Array

Definizione

- In JS, al contrario di molti altri linguaggi (C/C++), un array può essere una collezione **_NON_** omogenea di valori. Questa flessibilità è di grande utilità in molti casi. Pertanto si può avere un array di interi, un array di stringhe, un array di interi e stringe, un array di oggetti diversi...

<br>
<div  style="margin-left: 25%;">
<img src="/media/js23.png" width="350" style="display:inline;"/> Array di interi e stringhe <br>
<img src="/media/js24.png" width="350" style="display:inline;"/> Array di interi e frutti <br>
<img src="/media/js25.png" width="350" style="display:inline;"/> Array di frutti e macchine <br>
<img src="/media/js26.png" width="350" style="display:inline;"/> Array di frutti, macchine e stringhe <br>
</div>

---

# Array

Definizione

<div style="background-color:green;color:yellow; padding:10px;">
  Nello sviluppo JS gli array sono una struttura dati fondamentale
</div>
<br>

- Gli array sono usati spesissimo e permetteno di risolvere una vasta serie di problemi
- Per esempio:
  - il risultato fornito dall'invocazione di un API REST è spesso un array
  - l'esecuzione di una query SQL restituisce un array
- Pertanto una parte fondamentale nello studio del JS riguarda l'apprendimento dell'uso degli array
- In seguito studieremo l'uso degli array e analizzeremo i suoi `principali metodi` che permettono manipolazioni anche sofisticate ed utili in tantissime situazioni
- Vedremo come questi metodi aiutono lo sviluppatore a risolvere problematiche classiche che in altri linguaggio (C/C++) sono lasciate allo sviluppatore o a librerie esterne in quanto non parte del linguaggio base

---

# Array

I principlai metodi

Qui la lista dei principlai metodi degli array che studieremo (ci sono 39 metodi in totale):

<div class="grid grid-cols-3 grid-rows-9 gap-4" style="padding: 20px; margin-left:15%;">
<div style="font-weight:bolder;">at()</div>
<div style="font-weight:bolder;">concat()</div>
<div style="font-weight:bolder;">every()</div>
<div style="font-weight:bolder;">fill()</div>
<div style="font-weight:bolder;">filter()</div>
<div style="font-weight:bolder;">find()</div>
<div style="font-weight:bolder;">findIndex()</div>
<div style="font-weight:bolder;">flat()</div>
<div style="font-weight:bolder;">forEach()</div>
<div style="font-weight:bolder;">from()</div>
<div style="font-weight:bolder;">includes()</div>
<div style="font-weight:bolder;">indexOf()</div> 
<div style="font-weight:bolder;">join()</div>
<div style="font-weight:bolder;">lastIndexOf()</div>
<div style="font-weight:bolder;">map()</div>
<div style="font-weight:bolder;">pop()</div>
<div style="font-weight:bolder;">push()</div>
<div style="font-weight:bolder;">reduce()</div>
<div style="font-weight:bolder;">reverse()</div>
<div style="font-weight:bolder;">shift()</div>
<div style="font-weight:bolder;">slice()</div>
<div style="font-weight:bolder;">some()</div>
<div style="font-weight:bolder;">sort()</div>
<div style="font-weight:bolder;">splice()</div>
<div style="font-weight:bolder;">unshift()</div>
</div>

---

# Array

Dichiarazione

- Vediamo come si dichiara un array in JS

<br>

```js
let frutti = []; // dichiara un array vuoto
let frutti = new Array(); // dichiara un array vuoto
let frutti = Array(); // dichiara una rray vuoto
let frutti = Array(5); // dichiara un array composto da 5 elementi vuoti

let matrice = [[], [], []]; // dichiara un array di array o matrice
let matrice = Array(Array(3), Array(3), Array(3)); // 
let matrice = Array(3).fill(Array(3)); //Stile js
```

<br>

- Come si può notare ci sono vari modi per dichiarare un array.
- Alcuni sono più in stile JS altri sono più simili ad altri linguaggi, ma tutti validi
---

# Array

Dichiarazione

- Comune è anche l'assegnazione di valori all'array durante la dichiarazione

<br>

```js
let frutti = ["mele", "pere", "ciliegie"]; //array omogeneo di stringhe
let numeri = [1, 2, 5, 9, 3]; //array omogeneo di numeri
let frutti_numeri = [1, "mele", 2, "pere", 5, "ciliegie"]; //array non omogeneo di stringhe e numeri
let frutti = Array("mele", "pere", "ciliegie"); //array omogeneo di stringhe
let matrice = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
]; // matrice 3x3 di tutti 1
let matrice = Array(5).fill([0,0,0,0,0]); // matrice 5x5 di tutti 0
```

<br>

- Anche in questo caso ci sono modi alternativi per raggiungere lo stesso risultato

---

# Array

Accesso

- **In JS l'accesso agli elementi di un array avviene per indice**
- `Gli array partono dall'indice 0`

<br>
<img src="/media/js27.png" width="450" style="display:inline;"/>
<br>

```js
let frutti_numeri = [1, "mela", 2, "uva", 5, "fragola"];

> console.log(frutti_numeri[0]);
1

> console.log(frutti_numeri[3]);
uva

> console.log(frutti_numeri[5]);
fragola

```

---

# Array

Modifica di un array

- Gli elementi di un array possono essere modificati con una semplice assegnazione

<br>

```js
let frutti_numeri = [1, "mele", 2, "pere", 5, "ciliegie"];

console.log(frutti_numeri)
[ 1, 'mele', 2, 'pere', 5, 'ciliegie' ]

frutti_numeri[0] = "nespole";
frutti_numeri[1] = 18;

> console.log(frutti_numeri)
[ 'nespole', 18, 2, 'pere', 5, 'ciliegie' ]
```

---

# Array

Lunghezza di un array

- Per conoscere la lunghezza di un array si può utilizzare la proprietà `length` dell'oggetto Array

<br>

```js
let frutti_numeri = [1, "mele", 2, "pere", 5, "ciliegie"];

> console.log(`L'array contiene ${frutti_numeri.length} elementi`);
L'array contiene 6 elementi
```

<br>

- Nota la stringa è racchiusa tra backtick <mark>`</mark> e non virgolette **"**
- In questo modo posso inserire nella stringa una variabile o un metodo

<br>

```js
> console.log(`Gli elementi dell'array sono [${frutti_numeri}]`);
Gli elementi dell'array sono [1,mele,2,pere,5,ciliegie]
```

---

# Array

Shallow copy

- copia di un array per referenza
- l'oggetto copia è una referenza all'oggetto copiato e pertanto ne condivide il contenuto

```js
let numeri = [1, 2, 3, 4, 5];
let numeri_copia = numeri; // shallow copy

console.log("Numeri:", numeri);
> Numeri: [ 1, 2, 3, 4, 5 ]
console.log("Numeri copia:", numeri_copia);
> Numeri copia: [ 1, 2, 3, 4, 5 ]

numeri[0] = 10;

console.log("Numeri:", numeri);
> Numeri: [ 10, 2, 3, 4, 5 ]
console.log("Numeri copia:", numeri_copia);
> Numeri copia: [ 10, 2, 3, 4, 5 ]
```

---

# Array

Deep copy

- copia di un array per valore
- l'oggetto copia non è una referenza all'oggetto copiato e pertanto il contenuto è una copia effettiva e separata dai valori copiati

```js
let numeri = [1, 2, 3, 4, 5];

let numeri_copia = JSON.parse(JSON.stringify(numeri)); // deep copy

console.log("Numeri:", numeri);
> Numeri: [ 1, 2, 3, 4, 5 ]
console.log("Numeri copia:", numeri_copia);
> Numeri copia: [ 1, 2, 3, 4, 5 ]

numeri[0] = 10;

console.log("Numeri:", numeri);
> Numeri: [ 10, 2, 3, 4, 5 ]
console.log("Numeri copia:", numeri_copia);
> Numeri copia: [ 1, 2, 3, 4, 5 ]
```

---

# Array

Deep copy:  ... spread operator

- L'operatore di spread `...` espande il contenuto di un array al posto di un argomento

<br>

```js
let numeri = [1, 2, 3, 4, 5];

// deep copy con spread oeprator
let numeri_copia = [...numeri]; // ...numeri diventa 1,2,3,4,5

console.log("Numeri:", numeri);
> Numeri: [ 1, 2, 3, 4, 5 ]
console.log("Numeri copia:", numeri_copia);
> Numeri copia: [ 1, 2, 3, 4, 5 ]

numeri[0] = 10;

console.log("Numeri:", numeri);
> Numeri: [ 10, 2, 3, 4, 5 ]
console.log("Numeri copia:", numeri_copia);
> Numeri copia: [ 1, 2, 3, 4, 5 ]
```



---

# Array

Aggiungere elementi

- L'aggiunta di nuovi elementi all'array avviene tramite una semplice assegnazione

<br>

```js
let frutti_numeri = [1, "mele", 2, "pere", 5, "ciliegie"];

console.log(frutti_numeri)
[ 1, 'mele', 2, 'pere', 5, 'ciliegie' ]

frutti_numeri[6] = "nespole";
frutti_numeri[7] = "fragole";
frutti_numeri[8] = 32;


> console.log(frutti_numeri)
[ 1, 'mele', 2, 'pere', 5, 'ciliegie', 'nespole', 'fragole', 32 ]
```

---

# Array

Aggiungere elementi: push()

`push(item1, item2, ..., itemN)` 

***aggiunge uno o più elementi in coda ad un array e restituisce la nuova lunghezza dell'array.***

```js
let parola = ["h", "e", "l", "l", "o"];

console.log(parola);
["h", "e", "l", "l", "o"];

parola.push(" "); //aggiungo in coda il carattere spazio
parila.push("w"); //aggiungo in coda il carattere w

console.log(parola);
["h", "e", "l", "l", "o", " ", "w"];

parola.push("o", "r", "l", "d"); //aggiungo in coda i caratteri o - r - l - d
console.log(parola);
["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"];
```

---

# Array

Rimuovere elementi: pop()

`pop()` 

***rimuove l'ultimo elemento da un array e restituisce quell'elemento. Questo metodo modifica la lunghezza dell'array.***


```js
let parola = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"];
parola.pop(); //rimuovo l'ultimo elemento dell'array - d
parola.pop(); //rimuovo l'ultimo elemento dell'array - l
parola.pop(); //rimuovo l'ultimo elemento dell'array - r

console.log(parola);
["h", "e", "l", "l", "o", " ", "w", "o"];

let carattere = parola.pop(); //prelevo l'ultimo elemento dell'array
console.log(carattere);
o;

console.log(parola);
["h", "e", "l", "l", "o", " ", "w"];
```

---

# Array

Lo stack: push() e pop()

- Quindi i metodi push() e pop() degli array JS permettono di realizzare con immediatezza un'importante struttura dati chiamta `stack`

<img src="/media/js28.png" width="400" style="display:inline; position:relative; top: -10px;"/>
<img src="/media/js29.png" width="400" style="display:inline; position:relative; top: 10px;"/>

<img src="/media/js34.webp" width="400" style="display:inline; position:relative;left: 25%;top:-20px;"/>

---

# Array

La coda FIFO

- Un'altra struttura dati fondamentale nei sistemi IT è la `coda FIFO`
- Al contrario dello _stack_, in cui l'ultimo elemento inserito è il primo ad uscire (LIFO), nella **coda FIFO** l'ultimo elemento inserito è l'ultimo ad uscire, o meglio il primo ad entrare è il primo ad uscire

<div  style="display: flex; justify-content: center;">
<img src="/media/js31.png" width="300"  />
</div>

- JS ci mette a disposizione un metodo che ci permette facilemnte di implementare una coda FIFO

---

# Array

Rimuovere elementi: shift()

`shift()`

***rimuove il primo elemento da un array e restituisce l'elemento rimosso. Questo metodo modifica la lunghezza dell'array.***

- Quindi per implementare una coda FIFO usiamo il metodo _push()_ per aggiungere un elemento al fondo della coda e il metodo _shift()_ per prelevare l'elemento all'inizio della coda

```js
let coda = ["mario", "giovanna", "elena", "marco"];
coda.push("ultimo");
["mario", "giovanna", "elena", "marco", "ultimo"];

coda.shift();
["giovanna", "elena", "marco", "ultimo"];

coda.shift();
["elena", "marco", "ultimo"];
```

---

# Array

Aggiungere elementi: unshift()

`unshift(item1, item2, ..., itemN)`

***aggiunge uno o più elementi all'inizio di un array e restituisce la nuova lunghezza dell'array.***

```js
let coda = ["mario", "giovanna", "elena", "marco"];

coda.unshift("primo");
["primo", "mario", "giovanna", "elena", "marco"];

coda.unshift("primissimo", "primino")[
  ("primissimo", "primino", "primo", "mario", "giovanna", "elena", "marco")
];
```

<br>

- Possiamo quindi osservare che
  - **shift()** è il complementare di **pop()**
  - **unshift()** è il complementare di **push()**

<div  style="display: flex; justify-content: center;">
<img src="/media/js33.png" width="300" style="position:relative; top: -100px; left: 200px;" />
</div>


---

# Array

Aggiungere e rimuovere elementi

- Possiamo quindi osservare che:
  - **shift()** è il complementare di **pop()**
  - **unshift()** è il complementare di **push()**

- In genere, i metodi pop() e push() sono più veloci rispetto ai metodi shift() e unshift() 

<br>

<div  style="display: flex; justify-content: center;">
<img src="/media/js33.png" width="400" style="position:relative;" />
</div>

---

# Array 

unshift() vs push()

<div class="grid grid-cols-2 grid-rows-2 gap-4" style="padding: 0px; margin-left:0%;">
<div>
```js
(function () {
    a = [];
    console.log("unshift di 100.000 elmenti...");
    start = new Date();
    console.log("Inizio ciclo:", start);
    for (var i = 0; i < 100000; i++) 
        a.unshift(1);
    end = new Date();
    console.log("Fine   ciclo:", end);
    console.log(`Tempo totale di esecuzione: 
                ${end - start} ms`);
})();


unshift di 100.000 elmenti...
Inizio ciclo: 2022-08-23T14:35:42.105Z
Fine   ciclo: 2022-08-23T14:35:44.477Z
Tempo totale di esecuzione: 2372 ms
```
</div>

<div>
```js
(function () {
    a = [];
    console.log("push di 100.000 elmenti...");
    start = new Date();
    console.log("Inizio ciclo:", start);
    for (var i = 0; i < 100000; i++) 
        a.push(1);
    end = new Date();
    console.log("Fine   ciclo:", end);
    console.log(`Tempo totale di esecuzione: 
                ${end - start} ms`);
})();


push di 100.000 elmenti...
Inizio ciclo: 2022-08-23T14:35:44.477Z
Fine   ciclo: 2022-08-23T14:35:44.487Z
Tempo totale di esecuzione: 10 ms
```
</div>
</div>

---

# Array 

shift() vs pop()

<div class="grid grid-cols-2 grid-rows-2 gap-4" style="padding: 0px; margin-left:0%;">
<div>
```js
(function () {
    a = Array(100000).fill(1);
    console.log("shift di 100.000 elmenti...");
    start = new Date();
    console.log("Inizio ciclo:", start);
    for (var i = 0; i < 100000; i++) 
        a.shift(1);
    end = new Date();
    console.log("Fine   ciclo:", end);
    console.log(`Tempo totale di esecuzione: 
                ${end - start} ms`);
})();


shift di 100.000 elmenti...
Inizio ciclo: 2022-08-23T14:43:10.010Z
Fine   ciclo: 2022-08-23T14:43:12.553Z
Tempo totale di esecuzione: 2543 ms
```
</div>

<div>
```js
(function () {
    a = Array(100000).fill(1);
    console.log("pop di 100.000 elmenti...");
    start = new Date();
    console.log("Inizio ciclo:", start);
    for (var i = 0; i < 100000; i++) 
        a.pop(1);
    end = new Date();
    console.log("Fine   ciclo:", end);
    console.log(`Tempo totale di esecuzione: 
                ${end - start} ms`);
})();


pop di 100.000 elmenti...
Inizio ciclo: 2022-08-23T14:43:12.556Z
Fine   ciclo: 2022-08-23T14:43:12.560Z
Tempo totale di esecuzione: 4 ms
```
</div>
</div>

---

# Array

Accesso a specifici elementi: at()

`at(indice)`

***Il metodo, dato un indice in un array, restituisce l'elemento dell'array alla posizione spcificata.***


<br>

```js
let frutti_numeri = [1, "mele", 2, "pere", 5, "ciliegie"];

>console.log(frutti_numeri.at(0));
1
>console.log(frutti_numeri.at(1));
mele

>console.log(frutti_numeri[frutti_numeri.length - 1]); //accede all'ultimo elemento dell'array
ciliegie
```

---

# Array

Accesso a specifici elementi: at()

- Pertanto, fino ad ora, il metodo _at()_ è uguale all'accesso per indice all'array
- Tuttavia questo è vero solo per indici positivi.
- Ma cosa succede se l'indice di accesso è negativo?

```js
let frutti_numeri = [1, "mele", 2, "pere", 5, "ciliegie"];

>console.log(frutti_numeri[-1]);
undefine

>console.log(frutti_numeri.at(-1)); // accede all'ultimo elemento dell'array
ciliegie
```

<br>

- Pertanto per indici positivi .at() è uguale ad array[i]
- Per indici negativi .at() parte a contare dall fondo dell'array
- Quindi _.at(-1)_ restituisce l'ultimo elemento dell'array
- Quindi _.at(-2)_ restituisce il penultimoe elemento dell'array

<img src="/media/js30.png" width="380" style="float:right; position: relative; bottom: 140px;"/>

---

# Array

Iterazione di un Array: C style

- Una tipica operazione che si vuole effettuare su un Array è la sua `iterazione`, cioè la scansione di tutti i suoi elementi e l'eventuale esecuzione di un operazione per ogni elemento
- Un modo per iterare tutti gli elementi di un array (in stile C/C++ ma poco orientato allo stile JS) è:

<br>

```js
let frutti_numeri = [1, "mele", 2, "pere", 5, "ciliegie"];

for(let i = 0; i < frutti_numeri.length; i++)
    console.log(`L'elemento [${i}] dell'array contiene ${frutti_numeri[i]}`);

L'elemento [0] dell'array contiene 1
L'elemento [1] dell'array contiene mele
L'elemento [2] dell'array contiene 2
L'elemento [3] dell'array contiene pere
L'elemento [4] dell'array contiene 5
L'elemento [5] dell'array contiene ciliegie
```

---

# Array

Iterazione di un Array: forEach()

`forEach(function(item, index))`

***itera l'array eseguendo una funzione per ogni elemento, senza la necessità di conoscerne la sua dimensione.***

- In generale forEach() è applicabile a qualsiasi oggetto o struttura dati iterabile

<br>

```js
let frutti_numeri = [1, "mele", 2, "pere", 5, "ciliegie"];

frutti_numeri.forEach(item => console.log(`L'elemento N dell'array contiene ${item}`));

L'elemento N dell'array contiene 1
L'elemento N dell'array contiene mele
L'elemento N dell'array contiene 2
L'elemento N dell'array contiene pere
L'elemento N dell'array contiene 5
L'elemento N dell'array contiene ciliegie
```

---

# Array

Iterazione di un Array: forEach()

- Ma come conosciamo anche l'indice dell'elemento nell'array?
- Facile, basta includerlo nei parametri della arrow function

<br>

```js
let frutti_numeri = [1, "mele", 2, "pere", 5, "ciliegie"];

frutti_numeri.forEach((item,i) => console.log(`L'elemento [${i}] dell'array contiene ${item}`));

L'elemento [0] dell'array contiene 1
L'elemento [1] dell'array contiene mele
L'elemento [2] dell'array contiene 2
L'elemento [3] dell'array contiene pere
L'elemento [4] dell'array contiene 5
L'elemento [5] dell'array contiene ciliegie
```

- Quindi per ogni elemento dell'array abbiamo eseguito una funzione anonima (arrow function) che stampa sulla console
- Ovviamente la funzione può essere complessa a piacere

---

# Array

Iterazione di un Array: forEach()

- Ovviamente avremmo anche potuto usare una funzione esplicita, poco in stile JS ma assolutamente valido

```js
function stampa_elemento(item, i) {
    console.log(`L'elemento [${i}] dell'array contiene ${item}`);
}
let frutti_numeri = [1, "mele", 2, "pere", 5, "ciliegie"];

frutti_numeri.forEach(stampa_elemento);

L'elemento [0] dell'array contiene 1
L'elemento [1] dell'array contiene mele
L'elemento [2] dell'array contiene 2
L'elemento [3] dell'array contiene pere
L'elemento [4] dell'array contiene 5
L'elemento [5] dell'array contiene ciliegie
```

- Come linea guida:
  - Se la funzione da eseguire per ogni elemento è breve allora usiamo una funzione anonima
  - Se è più lunga allora possiamo usare una funzione esplicita (magari contenuta in un file seprato)

---

# Array

Iterazione di un Array: for..of

- Un altro tipo di ciclo di iterazione è `for..of`

<br>

```js
let frutti_numeri = [1, "mele", 2, "pere", 5, "ciliegie"];

for (const item of frutti_numeri)
    console.log(`L'elemento N dell'array contiene ${item}`);

L'elemento N dell'array contiene 1
L'elemento N dell'array contiene mele
L'elemento N dell'array contiene 2
L'elemento N dell'array contiene pere
L'elemento N dell'array contiene 5
L'elemento N dell'array contiene ciliegie
```

---

# Array

Iterazione di un Array: for..of

- Ma come conosciamo anche l'indice dell'elemento nell'array?
- tramite il metodo **entries()** che restituisce un nuovo iteratore che contiene coppie chiave/valore

<br>

```js
let frutti_numeri = [1, "mele", 2, "pere", 5, "ciliegie"];

for (const [i, item] of frutti_numeri.entries())
    console.log(`L'elemento [${i}] dell'array contiene ${item}`);

L'elemento [0] dell'array contiene 1
L'elemento [1] dell'array contiene mele
L'elemento [2] dell'array contiene 2
L'elemento [3] dell'array contiene pere
L'elemento [4] dell'array contiene 5
L'elemento [5] dell'array contiene ciliegie

```

---

# Array

Test di tutti gli elementi di un array: every()

`every(function(element, index)` 

***verifica se tutti gli elementi nell'array superano il test implementato dalla funzione fornita. Restituisce true se tutti gli elementi dell'array superano il test.***

```js
// tutti gli elementi dell'array sono pari?
let numeri = [1, 2, 5, 11, 4, 6]; 

let pari = numeri.every((value) => value % 2 == 0);
console.log("Tutti i numeri sono pari?", pari);
> Tutti i numeri sono pari? false

// tutti gli elementi dell'array sono maggiori di 5?
let numeri = [6, 9, 11, 43, 22, 19];

let maggiori_di_5 = numeri.every((item) => item > 5);
console.log("Tutti i numeri sono > di 5:", maggiori_di_5);
> Tutti i numeri sono > di 5: true
```

---

# Array

Test di al meno un elemento di un array: some()


`some(function(item, index))`

***verifica se almeno un elemento nell'array supera il test implementato dalla funzione fornita. Restituisce true se almeno un elemento dell'array supera il test.***

```js
// c'è almeno un numero pari?
let numeri = [1, 2, 5, 11, 4, 6];

let pari = numeri.some((value) => value % 2 == 0);
console.log("C'è almeno un numero pari?", pari);
> C'è almeno un numero pari? true

// c'è almeno un elemento minore di 5?
let numeri = [6, 9, 11, 43, 22, 19];

let minore_di_5 = numeri.some((item) => item < 5);
console.log("C'è almeno un numero < di 5:", minore_di_5);
> C'è almeno un numero < di 5: false
```

---

# Array

Rideurre le dimensioni di un array: flat()

`flat(depth=1)`

***crea una nuova matrice con tutti gli elementi della sottomatrice concatenati in essa in modo ricorsivo fino alla profondità specificata***

<br>

```js
let numeri = [1, 2, [3, [4, 5, [6, 7, 8]]]];

console.log("Array flat(1) = ", numeri.flat());
> Array flat(1) =  [ 1, 2, 3, [ 4, 5, [ 6, 7, 8 ] ] ]

console.log("Array flat(2) = ", numeri.flat(2));
> Array flat(2) =  [ 1, 2, 3, 4, 5, [ 6, 7, 8 ] ]

console.log("Array flat(3) = ", numeri.flat(3));
> Array flat(3) =  [1, 2, 3, 4,5, 6, 7, 8]
```


---

# Array

Trovare l'indice di un elemento: findIndex()

`findIndex(function(item, index))`

***restituisce l'indice del primo elemento in un array che soddisfa la funzione di test fornita. In caso contrario restituisce -1***

```js
let numeri = [1, 3, 4, 6, 7, 9];

let indice_n6 = numeri.findIndex((item) => item == 6);
console.log("Indice del numero 6:", indice_n6);
Indice del numero 6: 3

let indice_maggiore_6 = numeri.findIndex((item) => item > 6);
console.log("Indice del numero > 6:", indice_maggiore_6);
Indice del numero > 6: 4

let indice_uguale_0 = numeri.findIndex((item) => item == 0);
console.log("Indice del numero 0:", indice_uguale_0);
Indice del numero 0: -1
```

---

# Array

Trovare un elemento in un array: find()

`find(function(item, index))`

***restituisce il primo elemento in un array che soddisfa la funzione di test fornita. In caso contrario restituisce undefined***

```js
let studenti = [
  { nome: "Marco", classe: 4, eta: 17 },
  { nome: "Alex", classe: 2, eta: 15 },
  { nome: "William", classe: 4, eta: 18 }
];  
let Studente = studenti.find((studente) => studente.nome == "Alex");
console.log(
  `Lo studente ${Studente.nome} frequenta la classe ${Studente.classe} ed ha ${Studente.eta} anni`
);
> Lo studente Alex frequenta la classe 2 ed ha 15 anni

let minore_di_16 = studenti.find((studente) => studente.eta < 16);
console.log(`Lo studente ${minore_di_16.nome} ha meno di 16 anni`);
Lo studente Alex ha meno di 16 anni
```

---

# Array

Cercare un elemento in un array: indexOf() e lastIndexOf()

`indexOf(item) e lastIndexOf(item)`

***indexOf() restituisce il primo indice in cui è possibile trovare un determinato elemento nell'array, oppure -1 se non è presente.***

***lastIndexOf() restituisce l'ultimo indice in cui è possibile trovare un determinato elemento nell'array, oppure -1 se non è presente.***

```js
let numeri = [1, 3, 4, 6, 7, 4];

console.log("L'elemento 4 ha indice:", numeri.indexOf(4));
> L'elemento 4 ha indice: 2
console.log("L'elemento 7 ha indice:", numeri.indexOf(7));
> L'elemento 7 ha indice: 4
console.log("L'elemento 10 ha indice:", numeri.indexOf(10));
> L'elemento 10 ha indice: -1

console.log("L'elemento 4 ha indice:", numeri.lastIndexOf(4));
> L'elemento 4 ha indice: 5
```

---

# Array

Filtrare un array: filter()

`filter(function(element, index))`

***crea una copia shallow di una porzione di un dato array, filtrata solo per gli elementi che superano il test implementato dalla funzione fornita.***

<br>

```js
let numeri = [1, 2, 5, 11, 4, 6];

let maggiori_di_4 = numeri.filter((value) => value > 4);
console.log(maggiori_di_4);
> [ 5, 11, 6 ]

let pari = numeri.filter((value) => value %2 == 0);
console.log(pari);
> [2, 4, 6]
```

---

# Array

Filtrare un array: filter()

```js
let studenti = [
  { nome: "Marco", classe: 4, eta: 17 },
  { nome: "Alex", classe: 2, eta: 15 },
  { nome: "William", classe: 4, eta: 18 },
  { nome: "Gino", classe: 1, eta: 14 },
];

let studenti_4 = studenti.filter((studente) => studente.classe == 4);
console.log(studenti_4);
> [
>  { nome: "Marco", classe: 4, eta: 17 },
>  { nome: "William", classe: 4, eta: 18 },
> ];

let studenti_4_maggiorenni = studenti.filter(
  (studente) => studente.classe == 4 && studente.eta > 17
);
console.log(studenti_4_maggiorenni);
> [ { nome: 'William', classe: 4, eta: 18 } ]
```

---

# Array

Conversione in un array: from()

`from(arraye, mapFn)`

***crea una nuova istanza Array shallow copy da un oggetto iterabile o simile a un array e applica una funzione di mapping per ogni elemento***

<br>

```js
let stringa = "hello world!!";

let arrayl = Array.from(stringa);
console.log(arrayl);
> [ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!', '!' ]

let arrayu = Array.from(stringa, (carattere) => carattere.toUpperCase());
console.log(arrayu);
> [ 'H', 'E', 'L', 'L', 'O', ' ', 'W', 'O', 'R', 'L', 'D', '!', '!' ]
```

---

# Array

Da array a stringa: join()

`join(separatore)`

***crea e restituisce una nuova stringa concatenando tutti gli elementi dell'array, separati da virgole o da un separatore specificato. Se l'array ha un solo elemento, quell'elemento verrà restituito senza utilizzare il separatore***

```js
let nome = ["A", "n", "t", "o", "n", "i", "o"];

console.log("Nome:", nome.join());
> Nome: A,n,t,o,n,i,o

console.log("Nome:", nome.join("-"));
> Nome: A-n-t-o-n-i-o

console.log("Nome:", nome.join(" "));
> Nome: A n t o n i o

console.log("Nome:", nome.join(""));
> Nome: Antonio
```

---

# Array

Invertire un array: reverse()

`reverse()`

***inverte un array sul posto. Il primo elemento dell'array diventa l'ultimo e l'ultimo elemento dell'array diventa il primo***

<br>

```js
let numeri = [1, 2, 3, 4, 5];

console.log("Numeri decrescenti:", numeri.reverse());
> Numeri decrescenti: [ 5, 4, 3, 2, 1 ]

console.log("Numeri originali:", numeri); // array originale modificato
> Numeri originali: [ 5, 4, 3, 2, 1 ]
```

---

# Array

Invertire un array: reverse()

`reverse()`

<br>

```js
let nome = "Antonio";
let nome_array = Array.from(nome);
console.log(nome_array);
> [ 'A', 'n', 't', 'o', 'n', 'i', 'o' ]

console.log("Array al contrario:", nome_array.reverse());
> Array al contrario: [ 'o', 'i', 'n', 'o', 't', 'n', 'A' ]

console.log("Nome al contrario:", nome_array.join(""));
> Nome al contrario: oinotnA

//Oppure in una sola linea
console.log("Nome al contrario:", Array.from(nome).reverse().join(''));
> Nome al contrario: oinotnA

```

---

# Array

Verificare se un elemento fa parte di un array: includes()

`includes(searchElement)`

***determina se un array include un certo elemento tra le sue voci, restituendo true o false a seconda dei casi***

<br>

```js
let numeri = [1, 2, 3, 4, 5];

console.log("Numeri contine 3?", numeri.includes(3));
> Numeri contine 3? true

console.log("Numeri contine 1?", numeri.includes(1));
> Numeri contine 1? true

console.log("Numeri contine 8?", numeri.includes(8));
> Numeri contine 8? false
```
---

# Array

Sostituire valori in un array: fill()

`fill(valore, inizio, fine)`

***cambia tutti gli elementi in un array in un valore statico, da un indice iniziale (predefinito 0) a un indice finale (predefinito array.length). Restituisce l'array modificato***

<br>

```js
let numeri = [1, 2, 3, 4, 5];

console.log("Array di tutti 6:", numeri.fill(6));
> Array di tutti 6: [ 6, 6, 6, 6, 6 ]

let cinque_zero = Array(5).fill(0);

console.log("Array di cinque zero:", cinque_zero);
> Array di cinque zero: [ 0, 0, 0, 0, 0 ]
```

---

# Array

Concatenare array: concat()

`concat(array)`

***viene utilizzato per unire due o più array. Questo metodo non modifica gli array esistenti, ma restituisce invece un nuovo array***

<br>

```js
let num_pari = [2, 4, 6, 8];
let num_dispari = [1, 3, 5, 7, 9];
let num_pari_dispari = num_pari.concat(num_dispari);

console.log("Numeri pari:", num_pari);
> Numeri pari: [ 2, 4, 6, 8 ]

console.log("Numeri dispari:", num_dispari);
> Numeri dispari: [ 1, 3, 5, 7, 9 ]

console.log("Numeri pari e dispari:", num_pari_dispari);
>Numeri pari e dispari: [ 2, 4, 6, 8, 1, 3, 5, 7, 9 ]
```


---

# Array

Ordinare un array: sort()

`sort(function compareFn(a, b))`

***ordina gli elementi di un array in posizione e restituisce il riferimento allo stesso array ordinato. L'ordinamento predefinito è crescente, basato sulla conversione degli elementi in stringhe. E' possibile specificare una specifica funzione comparatrice per ordinamenti custom***

<br>

```js
let numeri = [3, 5, 1, 7, 2, 9];

console.log("Numeri disordinati;", numeri);
> Numeri disordinati; [ 3, 5, 1, 7, 2, 9 ]

numeri.sort();

console.log("Numeri ordinati;", numeri);
> Numeri ordinati; [ 1, 2, 3, 5, 7, 9 ]
```

---

# Array

Ordinare un array: sort()

`sort(function compareFn(a, b))`

<br>

```js
let mesi = ["Marzo", "Giugno", "Gennaio", "Dicembre", "Aprile"];

console.log("Mesi dell'anno:", mesi.sort());
> Mesi dell'anno: [ 'Aprile', 'Dicembre', 'Gennaio', 'Giugno', 'Marzo' ]
```

<br>

- L'ordinamento avviene in ordine crescente delle stringhe, quindi D viene prima di G, perciò Dicembre viene prima di Gennaio
   
---

# Array

Ordinare un array: sort()

`sort(function compareFn(a, b))`

- Come descritto inizialmente è possibile specificare una funzione comparatrice per implementare ordinamenti ad hoc.
- La funzione ha questa struttura

```js
function confronta(a, b) {
    if (a è minore di b in base ad un criterio) {
      return <valore minore di 0>;
    }
    if (a è maggiore di b in base ad un criterio) {
      return <valore maggiore di 0>
    }

    if (a è uguale a b in base a dun criterio) {
        return 0;
    }
}
```
 
---

# Array

Ordinare un array: sort()

`sort(function compareFn(a, b))`

```js
let numeri = [3, 5, 1, 7, 2, 9];

console.log("Numeri disordinati;", numeri);
> Numeri disordinati; [ 3, 5, 1, 7, 2, 9 ]

numeri.sort((a, b) => {
  return a - b; // ordine crescente
});

console.log("Numeri ordinati;", numeri);
> Numeri ordinati; [ 1, 2, 3, 5, 7, 9 ]

numeri.sort((a, b) => {
  return b - a; // ordinamento descrescente
});

console.log("Numeri ordinati;", numeri);
> Numeri ordinati; [ 9, 7, 5, 3, 2, 1 ]
```

---

# Array

Ordinare un array: sort()

`sort(function compareFn(a, b))`

```js
let studenti = [
  { nome: "Marco", classe: 1, eta: 17 },
  { nome: "Alex", classe: 3, eta: 15 },
  { nome: "William", classe: 4, eta: 18 },
  { nome: "Gino", classe: 4, eta: 14 },
];

let studenti_per_eta = studenti.sort((s1, s2) => s1.eta - s2.eta);

console.log("Studenti ordinati per età:", studenti_per_eta);
> Studenti ordinati per età: [
>     { nome: 'Gino', classe: 4, eta: 14 },
>     { nome: 'Alex', classe: 3, eta: 15 },
>     { nome: 'Marco', classe: 1, eta: 17 },
>     { nome: 'William', classe: 4, eta: 18 }
> ]
```

---

# Array

Ordinare un array: sort()

`sort(function compareFn(a, b))`

```js
let studenti = [
  { nome: "Marco", classe: 1, eta: 17 },
  { nome: "Alex", classe: 3, eta: 15 },
  { nome: "William", classe: 4, eta: 18 },
  { nome: "Gino", classe: 4, eta: 14 },
];

let studenti_per_classe = studenti.sort((s1, s2) => s1.classe - s2.classe);

console.log("Studenti ordinati per classe:", studenti_per_classe);
> Studenti ordinati per classe: [
>     { nome: 'Marco', classe: 1, eta: 17 },
>     { nome: 'Alex', classe: 3, eta: 15 },
>     { nome: 'Gino', classe: 4, eta: 14 },
>     { nome: 'William', classe: 4, eta: 18 }
> ]
```

---

# Array

Affettare un array: slice()

`slice(inizio, fine)`

***restituisce una copia shallow di una porzione di un array in un nuovo oggetto array selezionato dall'indice inizio fino all'indice fine (non incluso). L'array originale non verrà modificato***

```js
let numeri = [1, 3, 5, 7, 9, 11];
let numeri_copia = numeri.slice(); // metodo preferito in JS per un deep copy

console.log("Numeri:", numeri);
> Numeri: [ 1, 3, 5, 7, 9, 11 ]

console.log("Numeri copia:", numeri_copia);
> Numeri copia: [ 1, 3, 5, 7, 9, 11 ]

console.log("Numeri dall'indice 3 alla fine:", numeri.slice(3));
> Numeri dall'indice 3 alla fine: [ 7, 9, 11 ]

console.log("Numeri dall'indice 1 al 4 escludo:", numeri.slice(1, 4));
> Numeri dall'indice 1 al 4 escludo: [ 3, 5, 7 ]
```

------ 

# Esercizio js_11

Array

1. Scrivere una funzione che dato un array in input, restituisca un array con gli elementi in ordine inverso, senza usare la funzione reverse

```js
IN: [1,2,3]

OUT: [3,2,1]
```

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_11.js_

***cambia il contenuto di un array rimuovendo o sostituendo elementi esistenti e/o aggiungendo nuovi elementi sul posto. Restituisce un array con gli elementi rimossi.***

```js
let numeri = [1, 3, 5, 7, 9, 11];
let rimosso = numeri.splice(3); // rimuove gli elementi da indice 3 alla fine

console.log("Array tagliato dall'indice 3 fino alla fine:", numeri);
> Array tagliato dall'indice 3 fino alla fine: [ 1, 3, 5 ]

console.log("Parte di array rimosso:", rimosso);
> Parte di array rimosso: [ 7, 9, 11 ]
```

---

# Array

Manipolare in loco un array: splice()

`splice(start, deleteCount, item1, ... , itemN)`

```js
let numeri = [1, 3, 5, 7, 9, 11];
let rimosso = numeri.splice(3, 2); // rimuove 2 elementi a partire dall'indice 3

console.log("Array tagliato dall'indice 3 per 2 elementi:", numeri);
> Array tagliato dall'indice 3 per 2 elementi: [ 1, 3, 5, 11 ]

console.log("Parte di array rimosso:", rimosso);
> Parte di array rimosso: [ 7, 9 ]

let numeri = [1, 4, 5, 7, 9, 11];

// rimuove 0 elementi a partire dall'incice 1 ed inserisce gli elementi 2 e 3
numeri.splice(1, 0, 2, 3); 

console.log("Array tagliato dall'indice 3 fino alla fine:", numeri);
> Array tagliato dall'indice 3 fino alla fine: [ 1, 2, 3,  4, 5, 7, 9, 11 ]
```

---

# Array

Mappare un array: map()

`map(function(item, index))`

***crea un nuovo array popolato con i risultati della chiamata di una funzione eseguita per ogni elemento dell'array***

```js
let numeri = [1, 3, 5, 7, 9, 11];
let numeri_doppi = numeri.map((numero) => numero * 2);

console.log("Numeri:", numeri);
> Numeri: [1, 3, 5, 7, 9, 11]

console.log("Numeri doppi:", numeri_doppi);
> Numeri doppi: [2, 6, 10, 14, 18, 22]
```

---

# Array

Mappare un array: map()

`map(function(item, index))`

<br>

```js
let magazzino = [
  { prodtto: "laptop", valore: 1000, qty: 5 },
  { prodtto: "PC", valore: 2000, qty: 3 },
  { prodtto: "mouse", valore: 100, qty: 10 },
];

//calcolare il valore di ogni prodotto a magazzino (valore * qty)
let valore_prodotti = magazzino.map((item) => item.valore * item.qty);

console.log("Valore dei prodotti a magazzino:", valore_prodotti);
> Valore dei prodotti a magazzino: [ 5000, 6000, 1000 ]
```

---

# Array

Ridurre un array: reduce()

`reduce(function(accumulatore, currentValue), initialValue)`

***esegue una funzione "riduttore" su ciascun elemento dell'array, passando il valore restituito dal calcolo sull'elemento precedente. 
Il risultato finale dell'esecuzione del riduttore su tutti gli elementi dell'array è un valore singolo***

<br>

```js
let numeri = [1, 2, 3, 4];

//calcola la somma di tutti gli elementi dell'array
let somma = numeri.reduce((acc, current) => acc + current, 0); // acc = acc + current

console.log("La somma dei numeri è:", somma);
> La somma dei numeri è: 10
```

---

# Array

Ridurre un array: reduce()

`reduce(function(accumulatore, currentValue), initialValue)`

<br>

```js
let numeri = [1, 2, 3, 4];

//calcola la somma dei quadrati dei valori dell'array
let quadrati = numeri.reduce((acc, current) => acc + Math.pow(current, 2), 0); // acc = acc + current^2

console.log("La somma dei quadrati è:", quadrati);
> La somma dei quadrati è: 30
```

---

# Array

Ridurre un array: reduce()

`reduce(function(accumulatore, currentValue), initialValue)`

<br>

```js
let magazzino = [
  { prodtto: "laptop", valore: 1000, qty: 5 },
  { prodtto: "PC", valore: 2000, qty: 3 },
  { prodtto: "mouse", valore: 100, qty: 10 },
];

//calcola il valore complessivo del magazzino
let totale_magazzino = magazzino.reduce((acc, current) => {
  return acc + current.valore * current.qty;
}, 0);

console.log("Valore totale del magazzino:", totale_magazzino);
> Valore totale del magazzino: 12000
```

--- 

# Esercizio js_11

Array

1. Scrivere una funzione che dato un array in input, restituisca un array con gli elementi in ordine inverso, senza usare la funzione reverse

```js
IN: [1,2,3]

OUT: [3,2,1]
```

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_11.js_

--- 

# Esercizio js_12

Array

1. Scrivere una funzione che dati due array in input, restituiscea un boolean che indica se gli array sono uguali o meno

```js
IN: [1,2,3 ], [1,2,3]

OUT: true
```

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_12.js_


--- 

# Esercizio js_13

Array

1. Scrivere una funzione che forniti un numero N ed un carattere C, restiuisca un array di linghezza N composto da caratteri C

```js
IN: (3, 'a')

OUT ['a', 'a', 'a']
```

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_13.js_


--- 

# Esercizio js_14

Array

1. Scrivere una funzione che dato un array e due indici N e M, sposti l'elemento in posizione N alla posizione M

```js
IN [10, 20, 30, 40, 50], 0, 2

OUT [20, 30, 10, 40, 50]
```

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_14.js_


--- 

# Esercizio js_15

Array

1. Scrivere una funzione che fornito un array numerico ed un numero N, restituisca un array in cui non è presente il numero N

```js
IN: [1,2,3,4], 3

OUT: [1,2,4]
```

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_15.js_


--- 

# Esercizio js_16

Array

1. Scrivere una funzione ordini in ordine descrecente di titolo questo array
   
```js
  var library = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];
```

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_16.js_


--- 

# Esercizio js_17

Array

1. Scrivere una funzione che dato una stringa di lettere maiuscole e minuscole, restituisca un array composto solo dai caratteri maiuscoli della stringa
   
```js
  IN "ccHEewLtfL2Oq sWrdsOgtvfdcRwLffDff"
  
  OUTPUT ['H','E','L','L','O','W','O','R','L','D']
``` 

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_17.js_


--- 

# Esercizio js_18

Array

1. Scrivere una funzione che ricevuto un array di numeri, restituisca il prodotto dei quadrati

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_18.js_


--- 

# Esercizio js_19

Array

1. Scrivere una funzione che dato un array ed un numero N, restituisca un array composto solo dai primi N elementi

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_19.js_


--- 

# Esercizio js_20

Array

1. Scrivere una funzione che dato un array ed un numero N, restituisca un array composto solo dagli ultimi N elementi
2. Fornire il link github al file con nome _|cognome|\_esercizio_js_20.js_

--- 

# Esercizio js_21

Array

1. Scrivere una funzione che dato un array di 100 elementi e un numero N, restituisca un array riempito con numeri interi casuali da 1 a 50 ed azzeri tutti gli elementi che sono multipli di N.

```js
IN [1, 5, 8, 10, 19, 20, ....., 50], N=5

OUT [1, 0, 8, 0, 19, 0, ....., 0]

```

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_21.js_

--- 

# Esercizio js_22

Array

1. Scrivere una funzione che dato un array di interi positivi, restituisca un array in cui gli elementi originali sono organizzati così: prima tutto i numeri primi poi gli altri numeri
   
```js
IN [1, 4, 7, 3, 11, 12, 20]

OUT [7, 3, 11, 1, 4, 12, 20]

```

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_22.js_
   
--- 

# Esercizio js_23

Array

1. Scrivere una funzione, che dato come parametro una stringa che rappresenta un numero binario di lunghezz aarbitraria, ne calcoli il suo valore espresso in decimale

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_23.js_

--- 

# Esercizio js_24

Array

1. Usando Math.floor(Math.random() * N): numero random tra 0 e N
2. Scrivere una funzione che restituisce un array di caratteri casuali di lunghezza 7 scelti tra tra lettere minuscole e cifre decimali 
3. Fornire il link github al file con nome _|cognome|\_esercizio_js_24.js_


--- 

# Esercizio js_25

Array

1. Scrivere una funzione, che dati come parametri un array di lunghezza N ed un indice M, restituisca un nuovo array in cui i sotto array 0-M e M+1-N-1 siano inveritti. 
   
```js
IN [1,2,3,4,5,6,7] , 3 

OUT [5,6,7, 1,2,3]
```

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_25.js_

--- 

# Esercizio js_26

Array

1. Scrivere una funzione che dato un numero N, generi un array di N numeri casuali e stampi sia l'array ottenuto che quello invertito.

```js
IN N = 5

OUT [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]

```

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_26.js_

--- 

# Esercizio js_27

Array

1. Scrivere una funzione che dato un array restituisca un array in cui gli elementi duplicati sono rimossi.

```js
IN N = [1, 2, 3, 1, 2, 4]

OUT [1, 2, 3, 4]
```

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_27.js_


--- 

# Esercizio js_28

Array

1. Scrivere una funzione che ricevuto il seguente array di oggetti calcoli l'età media degli studenti.
   
```js
let studenti = [
  { nome: "Marco", classe: 4, eta: 17 },
  { nome: "Alex", classe: 2, eta: 15 },
  { nome: "William", classe: 4, eta: 18 }
]; 
```

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_28.js_

--- 

# Esercizio js_29

Array

1. Scrivere una funzione che ricevuto il seguente array di oggetti, restituisca un array di nomi.
   
```js
let studenti = [
  { nome: "Marco", classe: 4, eta: 17 },
  { nome: "Alex", classe: 2, eta: 15 },
  { nome: "William", classe: 4, eta: 18 }
]; 
```

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_29.js_

--- 

# Esercizio js_30

Array

1. Scrivere una funzione che ricevuto un array e due numeri N e M, restituisca un array contenenti solo valori >= N e <=M

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_30.js_

---

# Map

Oggetti generici o Array associativo

- Una mappa `Map` è un oggetto in JS chè molto simile agli oggetti literals visti in precedenza
- Pertanto un **Map** è una collezione di coppie chiave-valore (key-value)
- Le caratteristiche e differenze principali, con quest'ultimi, sono:
  - la chiave (key) può essere di qualsiasi tipo e non solo string come negli object literals
  - l'oggetto non si manipola tramite `[]` ma attraverso appositi metodi
  - le chiavi sono ordinate rispetto all'ordine di inserimento

```js
let mappa = new Map(); // definisce un oggetto Map vuoto

console.log(mappa);
>Map(0) {}

let mappa =  new Map([[1, 'rosso'],[2, 'verde'], [3, 'blu']]);

console.log(mappa);
> Map(3) { 1 => 'rosso', 2 => 'verde', 3 => 'blu' }
```


---

# Map

Aggiungere elementi: set()

`set(key, value)`

***aggiunge una nuova coppia key-value (se la chiave non è presente)***

```js
let mappa =  new Map();

mappa.set(1, 'rosso')
mappa.set(2, 'verde')
mappa.set(3, 'blu')
console.log(mappa);
> Map(3) { 1 => 'rosso', 2 => 'verde', 3 => 'blu' }

mappa.set('R', 'rosso');
console.log(mappa);
> Map(4) { 1 => 'rosso', 2 => 'verde', 3 => 'blu', 'R' => 'rosso' }

let mario = {nome: 'Mario'};
mappa.set(mario, 'Bros'); // la chiave può essere un oggetto
console.log(mappa);
> Map(5) { 1 => 'rosso', 2 => 'verde', 3 => 'blu', 'R' => 'rosso', { nome: 'Mario' } => 'Bros' }
```

---

# Map

Prelevare un valore:get()

`get(key)`

**restituisce un valore associate ad una chiave(key). Se la chiave non esiste restituisce undefined**

```js
let valore = mappa.get(2);
console.log(valore);
> verde

console.log(mappa.get('R'))
> rosso

console.log(mappa.get(mario))
> Bros



```

---

# Map

Verificare la presenza di una chiave: has()

`has(key)`

*restituisce un booleano in funzione della presenza o meno della chiave*

```js
let mappa =  new Map([[1, 'rosso'],[2, 'verde'], [3, 'blu']]);

console.log("La chiave 1 è presente nella mappa:", mappa.has(1));
> La chiave 1 è presente nella mappa: true

console.log("La chiave 3 è presente nella mappa:", mappa.has(1));
> La chiave 3 è presente nella mappa: true

console.log("La chiave R è presente nella mappa:", mappa.has('R'));
> La chiave R è presente nella mappa: false
```

---

# Map

Cancellare una coppia chiave-valore: delete(key)

`delete(key)`

**se la chiave è presente la rimuove e restituisce true, altrimenti false**

```js
let mappa =  new Map([[1, 'rosso'],[2, 'verde'], [3, 'blu']]);

console.log(mappa);
> Map(3) { 1 => 'rosso', 2 => 'verde', 3 => 'blu' }

mappa.delete(1);
console.log(mappa);
> Map(3) { 2 => 'verde', 3 => 'blu' }

let res = mappa.delete(4);
console.log(mappa);
> Map(3) { 2 => 'verde', 3 => 'blu' }

console.log(res)
> false
```

---

# Map

Cancellare una mappa intera: clear()

`clear()`

**rimuove tutte le chiavi presenti nella mappa**

```js
let mappa =  new Map([[1, 'rosso'],[2, 'verde'], [3, 'blu']]);

console.log(mappa);
> Map(3) { 1 => 'rosso', 2 => 'verde', 3 => 'blu' }

mappa.clear();
console.log(mappa);
> Map(0) {}
```

---

# Map

La dimensione di una mappa: size

`size`

**restituisce il numero di coppie chiave-valore presenti nella mappa**


```js
let mappa =  new Map([[1, 'rosso'],[2, 'verde'], [3, 'blu']]);

console.log("Dimensione mappa:", mappa.size);
> 3
```

---

# Map

Iterare una mappa: forEach()

- con forEach si possono iterare tutti i valori di una mappa

```js
let mappa =  new Map([[1, 'rosso'],[2, 'verde'], [3, 'blu']]);

mappa.forEach(item => console.log("Valore:", item))
> Valore: rosso
> Valore: verde
> Valore: blu
```

---

# Map

Iterare una mappa: for..of

- con for..of si possono iterare tutti gli elementi di una mappa

```js
let mappa =  new Map([[1, 'rosso'],[2, 'verde'], [3, 'blu']]);

for(let kv of mappa)
    console.log("Chiave-Valore:", kv);

> Chiave-Valore: [ 1, 'rosso' ]
> Chiave-Valore: [ 2, 'verde' ]
> Chiave-Valore: [ 3, 'blu' ]


for(let [k, v] of mappa)
    console.log(`Chiave: ${k} - Valore: ${v}`);

> Chiave: 1 - Valore: rosso
> Chiave: 2 - Valore: verde
> Chiave: 3 - Valore: blu

```

---

# Map

Iterare una mappa: keys()

`keys()`

**restituisce un oggetto iteratore che contiene tutte le chiavi della mappa**

```js
let mappa =  new Map([[1, 'rosso'],[2, 'verde'], [3, 'blu']]);

for(let chiave of mappa.keys())
    console.log("Key:", chiave);
> Key: 1
> Key: 2
> Key: 3
```

---

# Map

Iterare una mappa: values()

`values()`

**restituisce un oggetto iteratore che contiene tutti i valori della mappa**

```js
let mappa =  new Map([[1, 'rosso'],[2, 'verde'], [3, 'blu']]);

for(let valore of mappa.values())
    console.log("Value:", valore);

> Value: rosso
> Value: verde
> Value: blu
```


---

# Map

Iterare una mappa: entires()

`entires()`

**restituisce un oggetto iteratore che contiene tutte le coppie chiave-valore della mappa**

```js
let mappa =  new Map([[1, 'rosso'],[2, 'verde'], [3, 'blu']]);

for(let [k,v] of mappa.entries())
    console.log(`Key: ${k} - Value: ${v}`);

> Key: 1 - Value: rosso
> Key: 2 - Value: verde
> Key: 3 - Value: blu
```

---

# Set

Insiemi di dati

- Un `Set`, come un array è una collezione di dati omogenea e non
- Il `Set` è struttura dati che permette di memorizzare un insieme di dati univoci.
- Come gli array l'ordine di inserimento dei valori viene preservato durante l'iterazione

```js
let insieme = new Set();

console.log(insieme);
> Set(0) {}


let insieme = new Set([1, 2, 3, 4]);
console.log(insieme);
> Set(4) { 1, 2, 3, 4 }


let insieme = new Set([1, 2, 1, 2]);
console.log(insieme);
> Set(4) { 1, 2 }
```


---

# Set

Aggiungere elementi: add()

`add(value)`

**aggiunge un elemento al Set se non già presente e restiuisce il set aggiornato**

```js
let insieme = new Set([1, 2, 3, 4]);

insieme.add(5);
insieme.add(1);

console.log(insieme);
>Set(5) { 1, 2, 3, 4, 5 }

insieme.add("hello world");
console.log(insieme);
> Set(6) { 1, 2, 3, 4, 5, 'hello world' }
```

---

# Set

Verificare la presenza di una chiave: has()

`has(element)`

*restituisce un booleano in funzione della presenza o meno dell'elemento*

```js
let insieme = new Set([1, 2, 3, 4]);

console.log("L'elemento 1 è presente nel set:", insieme.has(1));
> L'elemento 1 è presente nel set: true

console.log("L'elemento 3 è presente nel set:", insieme.has(3));
> L'elemento 3 è presente nel set: true

console.log("L'elemento 8 è presente nel set:", insieme.has(8));
> L'elemento 8 è presente nel set: false
```

---

# Set

Rimuovere elementi: delete()

`delete(value)`

**se il valore è presente lo rimuove e restituisce true, altrimenti false**


```js
let insieme = new Set([1, 2, 3, 4]);

insieme.delete(1);
console.log(insieme);
> Set(3) { 2, 3, 4 }

insieme.delete(7);
console.log(insieme);
> Set(3) { 2, 3, 4 }
```

---

# Set

Cancellare un intero set: clear()

`clear()`

**rimuove tutti gli elementi del set**

```js
let insieme = new Set([1, 2, 3, 4]);

insieme.clear();

console.log(insieme);
> Set(0) {}
```

---

# Set

La dimensione di un set: size

`size`

**restituisce il numero di elementi presenti nel set**


```js
let insieme = new Set([1, 2, 3, 4]);

console.log("Dimensioni set:", insieme.size);
> Dimensioni set: 4
```

---

# Set

Iterare un set: forEach()

- con forEach si possono iterare tutti gli elementi di un set

```js
let insieme = new Set([1, 2, 3, 4]);

insieme.forEach(item => console.log("Elemento:", item))
> Elemento: 1
> Elemento: 2
> Elemento: 3
> Elemento: 4
```

---

# Set

Iterare una mappa: for..of

- con for..of si possono iterare tutti gli elementi di un set

```js
let insieme = new Set([1, 2, 3, 4]);

for(let item of insieme)
    console.log("Elemento:", item)
> Elemento: 1
> Elemento: 2
> Elemento: 3
> Elemento: 4
```

---

# Set

Iterare un set: keys(), values(), entries()

**questi metodi sono mantenuti per compatibilità con le mappe e per fornire unìinterfaccia omogenea**

```js
let insieme = new Set([1, 2, 3, 4]);

for(let item of insieme.keys()) console.log("Elemento:", item)
> Elemento: 1
> Elemento: 2
> Elemento: 3
> Elemento: 4

for(let item of insieme.values()) console.log("Elemento:", item)
> Elemento: 1
> Elemento: 2
> Elemento: 3
> Elemento: 4

for(let item of insieme.entries()) console.log("Elemento:", item)
> Elemento: [ 1, 1 ]
> Elemento: [ 2, 2 ]
> Elemento: [ 3, 3 ]
> Elemento: [ 4, 4 ]
```

--- 

# Esercizio js_31

Array, Map, Set

1. Scrivere una funzione che ricevuto un array restituisca un array composto solo da valori unici in cui gli elementi duplicati sono rimossi

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_31.js_

--- 

# Esercizio js_32

Array, Map, Set

1. Scrivere una funzione che ricevuto un array di stringhe, restituisca un array siano presenti parole non anagrammi di altre parole

```js
IN: ['omar', 'sette', 'roma', 'teste', 'mora', 'colazione', 'locazione']

OUT: [ 'mora', 'teste', 'locazione' ]
```

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_32.js_


--- 

# Esercizio js_33

Array, Map, Set

1. Scrivere una funzione che ricevuta un testo in una stringa, stampi il numero di occorrenze per ogni parola

```js
IN: "JavaScript è un linguaggio molto bello. JavaScript è un linguaggio di alto livello"

OUT: 

La parola "JavaScript" ha frequenza: 2
La parola "è" ha frequenza: 2
La parola "un" ha frequenza: 2
La parola "linguaggio" ha frequenza: 2
La parola "molto" ha frequenza: 1
La parola "bello." ha frequenza: 1
La parola "di" ha frequenza: 1
La parola "alto" ha frequenza: 1
La parola "livello" ha frequenza: 1
```

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_33.js_

--- 

# Esercizio js_34

Array, Map, Set

1. Scrivere una funzione che ricevuti due numeri N e M, restituisca un array contenente N numeri casuali univoci compresi tra 1 e M ordinati in senso decrescente

```js
IN: 3,100

OUT:  [ 52, 49, 42 ]

```

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_34.js_

--- 

# Esercizio js_35

Array, Map, Set

1. Scrivere una funzione che ricevuta una stringa restituisca una stringa in cui i caratteri duplicati sono eliminati. In altre parole deve restituire una stringa di caratteri univoci o con occorrenza 1

```js
IN: "supercalifragilistichespiralidoso"

OUT:  "supercalifgthdo"

```

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_35.js_

--- 

# Esercizio js_36

Array, Map, Set

1. Scrivere una funzione che ricevuta una stringa restituisca una mappa delle occorrenze delle vocali

```js
IN: "supercalifragilistichespiralidoso"

OUT:  Map(5) { 'a' => 3, 'e' => 2, 'i' => 6, 'o' => 2, 'u' => 1 }

```

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_36.js_


---

# Destructuring

Destructuring assignment

- La sintassi dell'assegnazione di destrutturazione (Destructuring assignment) è un'espressione JavaScript che consente di "spacchettare" array e oggetti ed assegnarli a variabili distinte.
- Ci sono situazioni in cui non ho bisogno di tutti i valori di un array, o di tutte le chiavi di un oggetto, ma voglio accedere ad un sottoinsieme


```js
let studenti = {
    nome: "Mario",
    cognome: "Rossi",
    classe: 4,
    eta: 18,
    genere: "M",
    media: 8.3,
}

let { nome, cognome } = studenti;

console.log(`Nome: ${nome} - Cognome: ${cognome}`);
> Nome: Mario - Cognome: Rossi
```

---

# Destructuring

Destructuring assignment

- Senza destucturing dovremmo accedere alle proprietà dell'oggetto anzichè usare delle variabili apposite

```js
let studenti = {
    nome: "Mario",
    cognome: "Rossi",
    classe: 4,
    eta: 18,
    genere: "M",
    media: 8.3,
}

let nome =  studenti.nome;
let cognome = studenti.cognome;

console.log(`Nome: ${nome} - Cognome: ${cognome}`);
> Nome: Mario - Cognome: Rossi
```
---

# Destructuring

Destructuring assignment

```js
let studenti = {
    nome: "Mario",
    cognome: "Rossi",
    classe: 4,
    eta: 18,
    genere: "M",
    media: 8.3,
}

//l'assegnazione di destructuring
let { nome, cognome } = studenti;

// è equivalente alle due assegnazioni separata
let nome =  studenti.nome;
let cognome = studenti.cognome;


```

---

# Destructuring

Destructuring assignment

```js
let numeri = [1, 2, 3, 4 , 5];
let [x, y] = numeri;

console.log(x)
console.log(y)
> 1
> 2

//...rest property
let [primo, ...altri] = numeri;

console.log(primo);
console.log(altri);
> 1
> [ 2, 3, 4, 5 ]

let [primo,,,,ultimo] = numeri;console.log(primo);
console.log(ultimo);
> 1
> 5
```

---

# Destructuring

Destructuring assignment

- Proviamo a fare lo swap di due variabili in modo classico

```js
let a = 10;
let b = 20;
let temp;

console.log(`a=${a} - b=${b}`);
temp = a;
a = b;
b = temp;
console.log(`a=${a} - b=${b}`);

> a=10 - b=20
> a=20 - b=10
```

- Ma come possiamo fare lo swap di due variabili senza usare una variabile temporanea?

---

# Destructuring

Destructuring assignment

- Anche in questo caso il destructuring ci viene in aiuto

```js
let a = 10;
let b = 20;

console.log(`a=${a} - b=${b}`);
[a, b] = [b, a]; // magia di JS
console.log(`a=${a} - b=${b}`);

> a=10 - b=20
> a=20 - b=10
```

```js
// forse così è più chiaro
let array = [b, a];
[a, b] = [array[0], array[1]];

console.log(`a=${a} - b=${b}`);
> a=10 - b=20
> a=20 - b=10
```
---

# Destructuring

Destructuring assignment

- Vediamo altri casi in cui è utile il destructuring, per esempio per filtrare valori restituiti da una funzione

```js
function voti() {
  return {
    media: 7.5,
    min: 6,
    max: 9,
  };
}

// prendiamo solo il voto min e max
let { min, max } = voti();

console.log(min);
console.log(max);

> 6
> 9
```

---

# Destructuring

Destructuring assignment

- Anche se la funzione restituisce un array possiamo usare il destructuring

```js
function voti() {
  return [7, 8, 9];
}

// prendiamo solo il primo ed ultimo voto
let [primo, , ultimo] = voti();

console.log(primo);
console.log(ultimo);

> 7
> 9
```

---

# Destructuring

Destructuring assignment

- Possiamo anche cambiare nome alle variabili

```js
let options = {
    title: "Rettangolo",
    width: 100,
    height: 200
  };
  
  // { proprietà oggetto: variabile di assegnazione }
  let {width: larghezza, height: altezza, title} = options;

  console.log(larghezza);
  console.log(altezza);

  > 100
  > 200
```

---

# Destructuring

Destructuring assignment

- Possiamo anche assegnar eun valore di default alle variabili
 
```js
let options = {
    title: "Rettangolo",  
};
  
  // { sourceProperty: targetVariable = valore di default }
  let {width: larghezza = 100, height: altezza = 200, title} = options;

  console.log(title);
  console.log(larghezza);
  console.log(altezza);

  > Rettangolo
  > 100
  > 200
```

---

# Destructuring

Destructuring assignment

- L'object destructuring di JavaScript si rivela utile anche nella gestione degli argomenti delle funzioni


```js

function visualizza_studente(studente) {
    console.log(`Lo studente si chiama ${studente.nome} ${studente.cognome}`);
}

let studente = {
    nome: "Mario",
    cognome: "Rossi",
    classe: 4,
    voti: [7, 8, 7]
}

visualizza_studente(studente);

> Lo studente si chiama Mario Rossi
```
---

# Destructuring

Destructuring assignment

- Con l'object destructuring possiamo evitare di accedere ogni volta alle proprietà dell'oggetto e averle invece come variabili all'interno dello scope della funzione

```js
function visualizza_studente({nome, cognome}) {
    console.log(`Lo studente si chiama ${nome} ${cognome}`);
}

let studente = {
    nome: "Mario",
    cognome: "Rossi",
    classe: 4,
    voti: [7, 8, 7]
}

visualizza_studente(studente);

> Lo studente si chiama Mario Rossi
```

- Questo approccio si rivela essere molto pratico soprattutto con oggetti complessi.

--- 

# Esercizio js_37

Destructuring

1. Dato il seguente oggetto

```js
let utente = {
    nome: "Jon",
    role: "user"
}
```

2. Scrivere il destructuring assignment in modo che:
   - la variabile nome contenga il valore della proprietà nome
   - la variabile role contenga il valore della proprietà role
   - la variabile is_admin contenga il valore della proprietà isAdim (false se non presente) 


3. Fornire il link github al file con nome _|cognome|\_esercizio_js_37.js_

--- 

# Esercizio js_38

Destructuring

1. Dato il seguente codeice

```js
let item = ["Egg", 0.25, 12];

let name = item[0];
let price = item[1];
let quantity = item[2];

console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
```

2. Riscriverlo con il destructuring in modo da non dover assegnare le singole variabili

3. Fornire il link github al file con nome _|cognome|\_esercizio_js_38.js_

--- 

# Esercizio js_39

Destructuring

1. Dato il seguente codeice

```js
let numbers = [3, 5, 4, 2, 6, 1];

let [one, two, three, four, five, six] = numbers;

console.log(`One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`);
```

1. Riscriverlo in modo da assegnare il valore giusto alle singole variabili

2. Fornire il link github al file con nome _|cognome|\_esercizio_js_39.js_

--- 

# Esercizio js_40

Destructuring

1. Dato il seguente codeice

```js
const students = ['Christina', 'Jon', 'Alexandare'];


console.log(lastName);
```

2. Riscriverlo in modo da ottenre il nome dell'ultimo studente

3. Fornire il link github al file con nome _|cognome|\_esercizio_js_40.js_

---

# JSON

Formato dati

- JSON significaJavaScript Object Notation
  - E'  un semplice formato **testuale** per lo scambio e lo storage di dati
  - Per le persone è facile da leggere e scrivere, mentre per le macchine risulta facile da generare e analizzarne la sintassi.
  - Diventato estremamente popolare con l'avvento del web 2.0 (AJAX)
  - Universalmente adottato anche al difuori del mondo web data la sua semplicità ed immediatezza
  - E' "auto-descrittivo" e facile da comprendere
  
- Per tutti questi ed altri motivi, oggi JSON è uno dei formati di rappresentazione dei dati più popolare
- Ha rimpiazzato il vecchi XML praticamente ovunque, tranne che in Java cove XML per ragioni storiche rimane ancora molto utilizzato

---

# JSON

Formato dati 

- Un oggetto JSON è così composto:
  - Un insieme di coppie nome/valore. In diversi linguaggi, questo è realizzato come un oggetto, un record, uno struct, un dizionario, una tabella hash, un elenco di chiavi o un array associativo.

```js
// oggetto JSON
{
	"name": "Mario",
	"surname": "Rossi",
	"active": true,
	"favoriteNumber": 42,
	"birthday": {
		"day": 1,
		"month": 1,
		"year": 2000
	},
	"languages": [ "it", "en" ]
}
```

- **E' immediato notare che un oggetto JSON corrisponde esattamente con un oggetto Java Script**

---

# JSON

JSON come formato universale di trasporto dati

- Come menzionato prima, JSON è diventato estremamente popolare con l'avvendo della tecnica AJAX per uno sviluppo web moderno in cui il browser (client) preleva i datoidal server tramite HTTP
- Il formato dati utilizzato da AJAX è JSON
- Pertanto un oggetto file/oggetto JSON è identico ad un oggetto JS, ma il primo è in formato testuale
- Quindi quando il server vuole inviare un oggetto al client `deve convertirlo in JSON`
- Quando il client riceve il JSON per elaborarlo `deve convertirlo in oggetto JS`

- Queste operazioni sono supportate da JS e sono semplicissime e supportate da due metodo specifici
  - `JSON.stringify`: converte un oggetto JS in JSON
  - `JSON.parse`: converte un JSON in oggetto JS


---

# JSON

Da oggetto a JSON: stringify()

```js
let studente_obj = {
    nome: 'Mario',
    cognome: 'Rossi',
    classe: 4,
}

console.log(typeof(studente_obj));
> object
console.log(studente_obj)
> { nome: 'Mario', cognome: 'Rossi', classe: 4 }

let studente_str = JSON.stringify(studente_obj);
console.log(typeof(studente_str));
> string
console.log(studente_str)
> {"nome":"Mario","cognome":"Rossi","classe":4}
```
<br>

- Quindi ora la stringa studente_str è facilemente trasmissibile via HTTP (protocollo testuale)

---

# JSON

Da oggetto a JSON: stringify()

- Quindi il metodo JSON.stringify(oggetto) converte l'oggetto in una stringa 
- La stringa risultate si dice JSON-encoded
- Questa operazione di conversionie si chiama `serializzazione`
  
- Importante notare le principali differenze tra oggetto literal e JSON
  - JSON usa **sempre** le doppie virgolette **'Mario'** diventa **"Mario"**
  - Anche per le proprietà dell'oggetto vengono sempre usate le doppie virgolette, pertanto **nome** diventa **"nome"**

---

# JSON

Da oggetto a JSON: stringify()

- Importante notare che è un formato solo per i dati, pertanto qualsiasi altra proprietà di un ogegtto JS non verrà serializzata

<br>

```js
let studente_obj = {
    nome: 'Mario',
    cognome: 'Rossi',
    classe: 4,
    media: () => console.log("calcola la media")
}

console.log(JSON.stringify(studente_obj)) 
> {"nome":"Mario","cognome":"Rossi","classe":4}
```
<br>

- Come si può notare, il metodo media() **NON** viene serializzato

---

# JSON

Da oggetto a JSON: stringify()

- ma se volessi evitare di seriazlizzare altre proprietà?
- Basta passare il parametro `replacer` al metodo stringify

<br>

```js
let studente_obj = {
    nome: 'Mario',
    cognome: 'Rossi',
    classe: 4,
    media: () => console.log("calcola la media")
}

console.log(JSON.stringify(studente_obj, ['nome','classe'])) 
> {"nome":"Mario", "classe":4}
```

<br>

- quindi il parametro replacer consiste in una lista (array) di proprietà dell'oggetto che vogliamo serializzare

---

# JSON

Da oggetto a JSON: stringify()
  
```js
let studente_obj = {
    nome: 'Mario',
    cognome: 'Rossi',
    classe: 4,
    eta: 18,
    peso: 65,
    altezza: 181,
    telefono: '3339090990',
    media: () => console.log("calcola la media")
}

console.log(JSON.stringify(studente_obj, ['nome', 'cognome', 'classe', 'peso', 'altezza', 'telefono'])) 
> {"nome":"Mario","cognome":"Rossi","classe":4,"peso":65,"altezza":181,"telefono":"3339090990"}
```

- quindi replacer deve contenere tutte le chiavi che voglio serializzare. Ma se sono decine cosa faccio? le scrivo tutte?
- Beh no! anzichè passare una lista come replacer, passiamo una funzione di mapping che indica quali sono le chiavi da considerare o da scartare

---

# JSON

Da oggetto a JSON: stringify()
  
```js
let studente_obj = {
    nome: 'Mario',
    cognome: 'Rossi',
    classe: 4,
    eta: 18,
    peso: 65,
    altezza: 181,
    telefono: '3339090990',
    media: () => console.log("calcola la media")
}

console.log(JSON.stringify(studente_obj, (k,v) => k == 'eta' ? undefined : v)) 
> {"nome":"Mario","cognome":"Rossi","classe":4,"peso":65,"altezza":181,"telefono":"3339090990"}

```
<br>

- estremamente versatile e compatto grazie all'uso delle arrow function
- quindi la funzione che passiamo come replacer, restituisce undefined per le chiavi da filtrare e il valore della chiave per quelle da serializzare
---

# JSON

Da JSON a oggetto: parse()

- L'operazione inversa, cioè fare il parsing di un JSON in oggetto JS si realizza tramite il metodo **parse()**
- Questa operazione prende il none di `deserializzazione`

<br>

```js
let json_str = '{"nome":"Mario","cognome":"Rossi","classe":4}';

console.log(typeof(json_str));
> string 

let studente_obj =JSON.parse(json_str);

console.log(typeof(studente_obj))
> object

console.log(studente_obj.nome);
> Mario
```

---

# JSON

Da JSON a oggetto: parse()

- Importante notare che il formato JSON **NON supporta i commenti** pertanto non vengono ne serializati ne deserializzati, in quest'ultimo caso producono un errore

```js
let studente_obj = {
    nome: 'Mario', //commento
    cognome: 'Rossi',
    classe: 4,
    media: () => console.log("calcola la media")
}

console.log(JSON.stringify(studente_obj));
> {"nome":"Mario","cognome":"Rossi","classe":4} //il commento è sparito

let json_str = '{"nome":"Mario" //commento ,"cognome":"Rossi","classe":4}';
console.log(JSON.parse(json_str));

> {"nome":"Mario" //commento ,"cognome":"Rossi","classe":4}
> SyntaxError: Unexpected token / in JSON at position 16
```

---

# JSON

Da JSON a oggetto: parse()

- come per il metodo stringify, anche il metodo parse accetta un parametro aggiuntivo
- Nello specifico accetta una funzione che permette di modificare i valori da deserializzare

<br>

```js
let json_str = '{"nome":"Mario","cognome":"Rossi","classe":4}';

let studente_obj =JSON.parse(json_str, (k,v) => typeof(v) == 'string' ? v.toUpperCase() : v)

console.log(studente_obj)
> {nome: 'MARIO', cognome: 'ROSSI', classe: 4}
```

<br>

- come si vede durante la deserializzazione delle stringhe le abbiamo convertite in upper case
  
---

# JS Object Oriented Programming

OOP 

<div style="background-color:green;color:yellow;padding:2.3rem;line-height: 3rem; font-size:1.9rem;">
Nella programmazione orientata agli oggetti, una classe è un costrutto di un linguaggio di programmazione usato come modello per creare oggetti. Il modello comprende attributi e metodi che saranno condivisi da tutti gli oggetti creati (istanze) a partire dalla classe stessa. <br> Un “oggetto” è, di fatto, l’istanza di una classe.
</div>

---

# JS Object Oriented Programming

OOP 

- Come abbiamo visto in precedenza in JS ci sono vari modi per creare un oggetto 
  - Object Literals
  - Map
  - JSON deserialization

- Nel JavaScript moderno c’è un costrutto `class` più avanzato, che introduce nuove possibilità molto utili per la programmazione ad oggetti.

---

# JS Object Oriented Programming

Classe: sintassi

- Per creare una nuova classe si usa la seguente sintassi

<br>

```js
class MiaClasse {
    filed1 = 10;          //class field o member variables
    field2 = "nome";      // attributo della classe
    constructor() { ... } //costruttore dell'oggetto 
    metodo1() { ... }     //Gli altri metodi implementano
    metodo2() { ... }     // i vari comportamenti dell'oggetto
    ...
    metodoN() { ... }
}
``` 

<br>

- Il metodo `constructor()` viene chiamato automaticamente da new e quindi viene utilizzato per inizializzare l’oggetto 

---

# JS Object Oriented Programming

Classe: dichiarazione ed uso

```js
class Studente {
    istituto = "Agnelli";
    constructor(nome, classe) {
        this.nome = nome;
        this.classe = classe;
    }
    Saluta() {
        console.log(`Ciao sono lo studente ${this.nome} della classe ${this.classe} dell'istituto ${this.istituto}`);
    }
}

let mario = new Studente("Mario", 4);  //con new instanziamo un oggetto della classe Studente
mario.Saluta(); //invochiamo il metodo Saluta dell'oggetto mario
> Ciao sono lo studente Mario della classe 4 dell'istituto Agnelli
```

<br>

<div style="background-color:green;color:yellow;padding: 1rem;">
<b>Importante</b>: al contrario degli object literal, i metodi della classe NON sono separati dalla virgola
</div>

---

# JS Object Oriented Programming

Classe: dichiarazione ed uso

- Come visto nell'esempio precedente quando creiamo un nuovo oggetto tramite `new`, un metodo speciale chiamato `constructor` viene invocato automaticamente
- Infatti il costruttore ha assegnato i parametri 'Mario' e 4 alle proprietà dell'oggetto nome e classe

```js
class Studente {
    istituto = "Agnelli";
    constructor(nome, classe) {
        this.nome = nome;
        this.classe = classe;
    }
    Saluta() {
        console.log(`Ciao sono lo studente ${this.nome} della classe ${this.classe} dell'istituto ${this.istituto}`);
    }
}

let mario = new Studente("Mario", 4);
> Inizializzo l'oggetto con i parametri passati che assegnamo agli attributi nome e classe
```

---

# JS Object Oriented Programming

this 

<div style="width: 55%;">

- Come visto nell'esempio precedente, una situazione molto frequente è quella di dover accedere agli attributi dell'oggetto, per esempio *nome*, *classe* e *istituto*
- Quindi quando in un metodo di una classe vogliamo accedere agli attributi, dobbiamo essere sicuro di accedere a quelli dell'oggetto specifico che vuole effettuare l'operazione
- Per tale motivo, in un metodo possiamo far riferimento all'oggetto stesso tramite la keyword `this`
- Pertanto **this** rappresenta l'oggetto specifico, tra tutti quelli instanziati, che sta eseguendo l'operazione

</div>

<img src="/media/js36.png" width="400" style="display:inline; position:relative; top: -350px;right:-500px;"/>


---

# JS Object Oriented Programming

this 

```js
class Studente {
    istituto = "Agnelli";
    constructor(nome, classe) {
        this.nome = nome;
        this.classe = classe;
    }
    Saluta() {
        console.log(`Ciao sono lo studente ${this.nome} della classe ${this.classe} dell'istituto ${this.istituto}`);
    }
}

let mario = new Studente("Mario", 4);
mario.Saluta();
```

- Quandi quando l'oggetto *mario* invoca il metodo *Saluta*, *this.nome* significa:
  -  acceddi allla proprietà *nome* dell'oggetto *mario* e di nessun'altro oggetto eventualemnte istanziato dalla stessa classe


---

# JS Object Oriented Programming

Getter e Setter 

- In OOP `Getter` e `Setter` sono particolari metodi che vengono richiamati quando si accede ad una proprietà dell'oggetto
- Per ogni variabile di istanza, un metodo `getter` restituisce il suo valore mentre un metodo `setter` imposta o aggiorna il suo valore
- In altre parole:
  - quando leggiamo una proprietà viene invocato il metodo ***getter*** che restituisce la proprietà stessa
  - quando scriviamo una proprità viene invocato il metodo ***setter*** che aggiorna il valore della proprietà stessa
- Ciò è estremamente flessibile in quanto ora è possibile manipolare la proprietà in modo trasparente senza dover aggiungere altri metodo specifici

<img src="/media/js34.png" width="400" style="display:inline; position:relative; top: 10px;"/>
<img src="/media/js35.png" width="400" style="display:inline; position:relative; top: 10px;right:-50px;"/>

---

# JS Object Oriented Programming

Getter e Setter 

```js
class Studente {
    constructor(nome, classe) {
        this.nome = nome; //chiama il setter della properità nome
        this.classe = classe;
    }
    get nome() {
        return this._nome.toUpperCase();
    }
    set nome(valore) {
        this._nome = "**".concat(valore).concat("**");
    }
    Saluta() {
        console.log(`Ciao sono lo studente ${this.nome} della classe ${this.classe}`);
    }
}

let mario = new Studente("Mario", 4);
console.log(mario.nome);

> **MARIO**
```

---

# JS Object Oriented Programming

Getter e Setter 

- quindi `get prop()` definisce il getter per la proprietà **prop**
- mentre `set prop()` definisce il setter per la proprietà **prop**
- Importante notare che NON è possibile avere contemporaneamente un getter e un setter associati a una proprietà e fare in modo che quella proprietà contenga effettivamente un valore
- In questo scenario si genera un erroere in quanto getter e setter vengono richiamati ricorsivamente

---

# JS Object Oriented Programming

Getter e Setter 


```js
class Studente {
    constructor(nome, classe) {
        this.nome = nome; //chiama il setter della properità nome
        this.classe = classe;
    }
    get nome() { 
        return this.nome.toUpperCase(); 
    }    
    set nome(valore) {
        this.nome = "**".concat(valore).concat("**"); 
    }
}

let mario = new Studente("Mario", 4);

Uncaught RangeError: Maximum call stack size exceeded
    at set nome [as nome] (<anonymous>:7:33)
    at set nome [as nome] (<anonymous>:7:33)
    at set nome [as nome] (<anonymous>:7:33)
    ...
```

---

# JS Object Oriented Programming

Pseudo Proprietà 

- I metodi get e set permettono la creazione di `pseudo proprietà`
- In altre parole in JS è possibile creare una proprietà di un oggetto che non è suo attributo diretto
- Vediamo con un esempio (la classe quadrato)

```js
class Quadrato {
    constructor(l) {
        this.lato = l; //lato è un attributo della classe Qaudrato
    }

    set lato(val) { this._lato = val; }

    //non esiste un attributo dell'oggetto chiamato area
    // questa è una pseudo proprietà
    get area() { return this._lato ** 2; } 
}

q = new Quadrato(5);
console.log(q.area);  // lo invoco come una proprietà e non come un metodo
> 25
```

--- 

# Esercizio js_41

OOP

- scrivere un programma in JS che:
1. implementi la classe Quadrato
3. fornisca il getter e setter per le sue proprietà
4. richieda all'utente la lunghezza del lato
5. sia in grado di calcolare il suo perimetro
6. sia in grado di calcolare la sua area
7. scrivere il main che instanzi un oggetto della classe Quadrato e stampi sulla console il perimetro e in un alert l'area dello stesso
8. Fornire il link github al file con nome _|cognome|\_esercizio_js_41.js_


---

# JS Object Oriented Programming

Method Chaining

- Spesso in JS vediamo codice come questo

<br>

```js
let str = "Ciao Mondo!!"

console.log(str.replace(' ', '_').replaceAll('!', '').toUpperCase())

> CIAO_MONDO
```
<br>

- Come si vede sull'oggetto str viene invocata una catena, una sequenza di metodi
- Questo meccanismo prende il nome di `method chaining`
- Ma come è possibile? 
- Come è possibile replicare questo comportamento nelle mie classi?

---

# JS Object Oriented Programming

Method Chaining

- Creaimo una classe che rappresenta la tartaruga del logo, composta da 4 metodi che permettonodi muoversi nelle quattro direzioni cardinali per una data distanza

```js
class tartaruga {
    nord(dist) { console.log(`vado a nord di ${dist} metri`); }
    sud(dist) { console.log(`vado a sud di ${dist} metri`); }
    est(dist) { console.log(`vado a est di ${dist} metri`); }
    ovest(dist) { console.log(`vado a ovest di ${dist} metri`); }
}

tarta = new tartaruga()
tarta.nord(10); //vado a nord di 10 metri
tarta.est(10);  //vado a est di 10 metri
tarta.sud(10);  //vado a sud di 10 metri
tarta.ovest(10);//vado a ovest di 10 metri

//method chaining
tarta.nord(10).est(10).sud(10).ovest(10)
> vado a nord di 10 metri
> Uncaught TypeError: Cannot read properties of undefined (reading 'est')
```

---

# JS Object Oriented Programming

Method Chaining

```js
class tartaruga {
    nord(dist) { console.log(`vado a nord di ${dist} metri`); return this; }
    sud(dist) { console.log(`vado a sud di ${dist} metri`); return this; }
    est(dist) { console.log(`vado a est di ${dist} metri`); return this; }
    ovest(dist) { console.log(`vado a ovest di ${dist} metri`); return this; }
}

tarta = new tartaruga()

tarta.nord(10); //vado a nord di 10 metri
tarta.est(10);  //vado a est di 10 metri
tarta.sud(10);  //vado a sud di 10 metri
tarta.ovest(10);//vado a ovest di 10 metri

//method chaining
tarta.nord(10).est(10).sud(10).ovest(10)
> vado a nord di 10 metri
> vado a est di 10 metri
> vado a sud di 10 metri
> vado a ovest di 10 metri
```

---

# JS Object Oriented Programming

Method Chaining

- Quindi per implementare il `method chaining` è necessario che i metodi restituiscano l'oggetto stesso o in altre parole **this**
- In questo modo la prima chiamata *tarta.nord(10)*  viene valutata e:
  - stampa il messaggio
  - restituisce un oggetto di tipo tartaruga
- Ora su questo oeggetto *(tarta.nord(10))* chiamo il metodo *est(10)* che viene valutato e:
  - stampa il messaggio
  - restituisce un oggetto di tipo tartaruga
- e così via per i metodi successivi

<div style="background: green; color:yellow;padding: 1.5rem;margin-top:1rem;">  
Questo paradigma viene utilizzato molto di frequente nella programmazione in JS
</div>


--- 

# Esercizio js_42

OOP

- scrivere un programma in JS che:
1. implementi una classe Calcolatrice che fornisce le 4 operazioni aritmetiche base
2. in aggiunta questa classe permette l'esecuzione di espressioni del tipo:
    - 5 + 3 - 2 + 4 * 5 - 2 / 2 (non ci sono precedenze)
3.  scrivere il main che utilizzando la classe Calcolatrice, stampi sulla console le seguenti espressioni ed il risultato di ciascuna:
    - 6 - 2 * 5 + 8 / 4  = ?
    - 11 * 3 + 5 - 5 / 11 = ?
    - 29 + 2 - 7 / 3 / 2 + 1 * 2 = ?
4.  Fornire il link github al file con nome _|cognome|\_esercizio_js_42.js_


---

# JS Object Oriented Programming

Inheritance e Overriding

- Uno dei principi fondamentali del paradigma OOP è `l'ereditarietà` di una classe
- Tramite il meccanismo ***dell'ereditarietà*** è possibile estendere il comportamento di una classe
- In altre parole una nuova classe (`sottoclasse`) può ereditare il comportamento da una classe esistente (`superclasse`) ed estenderlo
- A volte la **superclasse** è anche detta classe **madre** o **padre**
- Mentre la **sottoclasse** è detta classe **figlia** o classe **derivata**

<img src="/media/js37.png" width="300" style="margin:auto;margin-top: 2rem;"/>

---

# JS Object Oriented Programming

Inheritance e Overriding 

- In JS una classe per ereditare il comportamento e gli attributi da una classe madre, si utilizza la keyword `extends`
- Pertanto la forma generale è

```js
class <sottoclasse> extends <superclasse>
```

o

```js
class <classe figlia> extends <classe madre>
```

ESEMPIO:

```js
class Cane extends Animale

class Gatto extends Animale

class Ornitorinco extends Animale

```

---

# JS Object Oriented Programming

Inheritance e Overriding 

```js
class Mammifero {
    genere = "genere";
    nome = "nome";
    _verso = "verso";

    verso() {
        console.log(`ciao, io sono un mammifero del genere ${this.genere}, mi chiamo ${this.nome} e per comunicare emetto un ${this._verso}`);
    }
}

let mammifero =  new Mammifero();
mammifero.verso();

> ciao, io sono un mammifero del genere genere, mi chiamo nome e per comunicare emetto un verso
```

---

# JS Object Oriented Programming

Inheritance e Overriding 

```js
class Cane extends Mammifero {
    constructor(nome) {
        super(); // chiamo il costruttore della superclasse in quanto un cane è un mammifero
        this.genere = "canis";
        this._verso = "abbaio";
        this.nome = nome;
    }
}

let cane = new Cane("Birillo");
cane.verso();

> ciao, io sono un mammifero del genere canis, mi chiamo Birillo e per comunicare emetto un abbaio

```
<br>

- La keyword `super` permette di accedere alla superclasse o classe madre

---

# JS Object Oriented Programming

Inheritance e Overriding 

```js
class Gatto extends Mammifero {
    constructor(nome) {
        super(); // chiamo il costruttore della superclasse in quanto un gatto è un mammifero
        this.genere = "felis";
        this._verso = "miagolo";
        this.nome = nome;
    }
}

let gatto = new Gatto("Tom");
gatto.verso();

> ciao, io sono un mammifero del genere felis, mi chiamo Tom e per comunicare emetto un miagolo

```

- Le classi Cane e Gatto, entrambe estendono la superclasse Mammifero e ne ereditano tutti gli attributi e metodi
- Nei costruttori abbiamo assegnato valori specifici alle proprietà
- Il metodo verso è quello ereditato dalla classe madre

---

# JS Object Oriented Programming

Inheritance e Overriding

- Nella programmazione ad oggetti, come visto, l'ereditarietà è un meccanismo molto potente
- Tuttavia solo ereditare il comportamento di una classe madre può risultare inutile
- Quindi un concetto chiave associato all'ereditarietà è il concetto di `Overriding`
- Nella OOP `Override` è l'operazione di riscrittura di un metodo ereditato da una classe madre

<img src="/media/js38.png" width="400" style="margin:auto;margin-top: 2rem;"/>


---

# JS Object Oriented Programming

Inheritance e Overriding

```js
class Cane extends Mammifero {
    constructor(nome) {
        super(); // chiamo il costruttore della superclasse in quanto un cane è un mammifero
        this.genere = "canis";
        this._verso = "abbaio";
        this.nome = nome;
    }

    verso() {
        console.log("bau bau bau!!!");
    }
}

let cane = new Cane("Birillo");
cane.verso();

> bau bau bau!!!
```

- il metodo verso() ora ha un comportamento totalemnte diverso dal metodo verso della superclasse
  
---

# JS Object Oriented Programming

Inheritance e Overriding

```js
class Gatto extends Mammifero {
    constructor(nome) {
        super(); // chiamo il costruttore della superclasse in quanto un gatto è un mammifero
        this.genere = "felis";
        this._verso = "miagolo";
        this.nome = nome;
    }

    verso() {
        console.log("miao miao miao!!!");
    }
}

let gatto = new Gatto("Tom");
gatto.verso();

> miao miao miao!!!
```

- anche in questo caso, il metodo verso() ha un comportamento totalemnte diverso dal metodo verso della superclasse e da quello della classe derivata Cane
  
---

# JS Object Oriented Programming

Inheritance e Overriding

```js
class Cane extends Mammifero {
    constructor(nome) {
        super(); // chiamo il costruttore della superclasse in quanto un cane è un mammifero
        this.genere = "canis";
        this._verso = "abbaio";
        this.nome = nome;
    }

    verso() {
        super.verso(); // chiamo il metodo verso della superclasse
        console.log("bau bau bau!!!"); //ed estendo con un comportamento specifico
    }
}
let cane = new Cane("Birillo");
cane.verso();

> ciao, io sono un mammifero del genere canis, mi chiamo Birillo e per comunicare emetto un abbaio
> bau bau bau!!!
```

- il metodo verso() aggiunge un comportamento rispetto al metodo ereditato
  
---

# JS Object Oriented Programming

Inheritance e Overriding

```js
class Gatto extends Mammifero {
    constructor(nome) {
        super(); // chiamo il costruttore della superclasse in quanto un gatto è un mammifero
        this.genere = "felis";
        this._verso = "miagolo";
        this.nome = nome;
    }

    verso() {
        super.verso(); // chiamo il metodo verso della superclasse
        console.log("miao miao miao!!!");//ed estendo con un comportamento specifico
    }
}
let gatto = new Gatto("Tom");
gatto.verso();

> ciao, io sono un mammifero del genere felis, mi chiamo Tom e per comunicare emetto un miagolo
> miao miao miao!!!
```

- anche inq uesto caso il metodo verso() aggiunge un comportamento rispetto al metodo ereditato


---

# JS Object Oriented Programming

Inheritance e Overriding

- Ovviamente si può anche estendere una classe o un tipo predefinito

```js
class Numero extends Number {
    constructor(n) {
        super(n);
    }
    arrotonda() {
        return Math.round(this.valueOf());
    }
}

console.log(`Il numero N vale ${N.arrotonda()}`);

> Il numero N vale 11

```

- Numero ha tutte le proprietà e metodi di Number, ma ora fornisce anche un metodo che arrotonda il valore del numero
  

---

# JS Object Oriented Programming

Inheritance e Overriding

```js
class Vettore extends Array {
  vuoto() {
    return this.length == 0;
  }
}

let voti = new Vettore();

console.log(voti.vuoto());
> true

voti.push(5);
voti.push(7);

console.log(voti.vuoto());
> false



```


--- 

# Esercizio js_43

OOP

- scrivere un programma in JS che:
1. implementi una classe Poligono che definisce le properietà principlai di un poligono regolare (lunghezza e numero lati) e che implementi i metodi Perimetro e Area per il calcolo e la stampa rispettivamente del perimetro e dell'area del poligono
2.  scrivere il main che utilizzando la classe Poligono, calcoli e stampi perimetro e area per:
    - Triangolo equilatero di lato 15cm
    - Quadrato di lato 10cm
    - Pentagono di lato 21cm
    - Esagono di lato 18cm
    - Ettagono di lato 9cm
    - Ottagono di lato 12cm
3.  Fornire il link github al file con nome _|cognome|\_esercizio_js_43.js_

---

# JS Object Oriented Programming

Visibilità di metodi e attributi 

- Uno dei concetti più importanti della programmazione ad oggetti è `l’incapsulamento`, ovvero la delimitazione delle interfacce interne da quelle esterne.
- Per comprenderla, usciamo dal mondo dello sviluppo e guardiamo al mondo reale.
- Solitamente, i dispositivi che utilizziamo sono piuttosto complessi. Poter delimitare la loro interfaccia interna da quella esterna, ci consente di utilizzarli senza grossi problemi.
- Per esempio un computer:
  - il suo uso avviene facilemente attraverso tastiera, mouse e display (le interfacce esterne di I/O)
  - tuttavia il suo funzionamento interno (incapsulato) è piuttosto complesso
  - ci sono decine di interfacce interne che rendono possibile la comunicazione tra CPU e Memoria, tra GPU e display, tra tasiera e OS
  - tuttavia l'utente vede ed usa solo le interfacce esterne, mentre ignora la presenza ed il funzionamento di quelle interne
- Questo è il principio di `incapsulamento` nel mondo fisico. Ciò è utile anche nel mondo del software
  
---

# JS Object Oriented Programming

Visibilità di metodi e attributi 

- Pertanto nella programmazione OOP, le proprietà ed i metodi sono divisi in due gruppi:
  - ***Interfaccia interna privata***: metodi e proprietà, accessibili dagli altri metodi della classe, ma non dall’esterno.
  - ***Interfaccia esterna pubblica***: metodi e proprietà, accessibili anche dall’esterno della classe.

- Nell'esempio precedente:
  - il computer visualizza i risultati generati tramite l'interfaccia pubblica chiamata Display
  - il computer adatta lo scambio di informazioni tra CPU e momoria RAM attraverso un'interfaccia interna, privata e NON accessibile dal'esterno chiamata Cache
  

---

# JS Object Oriented Programming

Visibilità di metodi e attributi 

- Originariamente JS non forniva nessun modo per determinare lo stato di visibilità di metodi e proprietà
- In altre parole tutti i metodi e attibuti erano **Public**
- Tuttavia con l'uso di getter e setter è possibile "simulare" un attributo privato

```js
class Studente {
    _classe = 1;

    constructor(classe) {
        this._classe = classe;
    }
    get classe() {
        return this._classe;
    }
    set classe(val) {
        this._classe = val;
    }
}
```

- La proprietà _classe viene considerata privata in quanto la classe mette a disposizione un getter e setter per la proprietà classe
  
---

# JS Object Oriented Programming

Visibilità di metodi e attributi 

- In modo analogo per i metodi

```js
class Studente {
    _classe = 3;

    _promosso() {
        this._classe += 1;
    }

    promosso() {
        this._promosso();
    }
}
```

- il metodo _promosso viene considerato privato in quanto viene esposto il metodo promosso()
- tuttavia sia _classe che _promosso sono in realtà accessibili dall'esterno
  
---

# JS Object Oriented Programming

Visibilità di metodi e attributi 

- Recentemente la specifica ECMA script 6 ha introdotto uno specifico delimitatore `#` per indicare un metodo o un attributo **privato**
- Pertanto tutti i metodi e attributi identificati da `#` NON sono accessibili dall'esterno della classe, ma solamente dal suo interno, e quindi **privati**

```js
class Studente {
    #classe = 1; //attributo privato
    constructor(classe) { this.#classe = classe; }
    getClasse() { return this.#classe; }
}

let studente = new Studente(4);

console.log(studente.getClasse());
> 4

console.log(studente.#classe);
> Uncaught SyntaxError: Private field '#classe' must be declared in an enclosing class
```

---

# JS Object Oriented Programming

Visibilità di metodi e attributi 

- In modo analogo per i metodi

```js
class Studente {
    #classe = 1;
    constructor(classe) { this.#classe = classe; }
    getClasse() { return this.#classe; }
    #promosso() { this.#classe += 1; } //metodo privato
    promosso() { this.#promosso(); }
}

let studente = new Studente(4);
studente.promosso();

console.log(studente.getClasse());
> 5

studente.#promosso();
> Uncaught SyntaxError: Private field '#promosso' must be declared in an enclosing class

```

- #classe e #promosso sono ora effettivamente privati e inaccessibili dall'esterno
  
---

# JS Object Oriented Programming

Confronto di oggetti 

- Può essere utile verificare se un oggetto è di uno specifico tipo, o meglio se un oggetto è un'istanza di una determinata classe
- JS mette a disposizione la keywork `instanceof` che serve proprio a questo scopo

```js
class Studente {}

class Docente {}

let mario = new Studente();
let marco = new Docente();

mario instanceof Studente; // true
mario instanceof Docente; // false

marco instanceof Studente; // false
marco instanceof Docente; // true
```

---

# JS Object Oriented Programming

Confronto di oggetti 

```js
class Studente {
    constructor(nome, classe) { 
        this.nome = nome;
        this.classe = classe;
    }
}

let mario = new Studente("Mario", 4);
let marco = new Studente("Marco", 4);

mario == marco //false
mario != marco // true

let mariolino = new Studente("Mario", 4);

mario == mariolino // false
```

- siccome gli oggetti sono in realtà delle referenze, è chairo che mario e mariolino sono due referenze  diverse che puntano a due oggetti uguali

---

# JS Object Oriented Programming

Confronto di oggetti 

- In JS non c'è un modo nativo per confrontare due oggetti
- Un metodo spesso utilizzato è il seguente

```js
JSON.stringify(mariolino) == JSON.stringify(marco) // false

JSON.stringify(mariolino) == JSON.stringify(mariolino) // true

```

- questo diventa quindi un confronto di stringhe
- questo metodo va usato con cautela in quanto può generare falsi positivi

---

# Esercizio js_44

Confronto di oggetti 

- date le classi 

```js
class Studente {
    constructor(nome, classe) { 
        this.nome = nome;
        this.classe = classe;
    }
}

class Docente {
    constructor(nome, classe) { 
        this.nome = nome;
        this.classe = classe;
    }
}
```

- scrivere un programma in JS che:
1. implementi una funzione confrontaOBJ che confronta due oggetti e restituisce true se sono uguali e false in caso contrario

---

# Esercizio js_44

Confronto di oggetti 

2. scrivere un main che definisce i due seguenti oggetti

```js
let studente = new Studente("Mario", 4);

let docente = new Docente("Mario", 4);
```

- e li confronta utilizzando la funzione confrontaOBJ

3.  Fornire il link github al file con nome _|cognome|\_esercizio_js_44.js_


---

# JS Object Oriented Programming

OOP 

---

# JS Object Oriented Programming

OOP 

---

# JS Object Oriented Programming

OOP 




---

# xxxx

- x

---

# xxxx

- stringhe e operatori stringhe
- try...catch
- promises
- modules
- 


---

# xxxx

- x

