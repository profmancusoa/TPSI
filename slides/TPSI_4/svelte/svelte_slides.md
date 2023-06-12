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
version: '1.1.1'
---  

<!-- https://reteinformaticalavoro.it/blog/framework-cosa-sono-e-quali-dominano-le-classifiche/#:~:text=In%20informatica%2C%20un%20framework%20%C3%A8,in%20modo%20semplice%20e%20veloce.

https://www.okupter.com/blog/svelte-vs-sveltekit-the-difference

https://www.okupter.com/blog/sveltekit-full-stack-framework -->



# Svelte

CYBERNETICALLY ENHANCED WEB APPS

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

---

# Introduzione

Vanilla Software


- Un software `Vanilla` è un programma per computer (e per altri sistemi informatici come hardware o algoritmi) che non viene alterato rispetto alla propria forma originale.
- Il termine deriva dal tradizionale gusto di gelato, la vaniglia.
- In altre parole con il termine **Vanilla** si intende un linguaggio, un kernel, un programma non modificato ma utilizzato nella sua forma base
- Ciò si applica anche ai linguaggi di programmazione

---

# Introduzione

Vanilla Software

<div style="float: left; width: 50%;">

- Vanilla JavaScript (o VanillaJS) si riferisce all'uso di JavaScript puro, senza alcun componente aggiuntivo come librerie o framework. 
- È una specie di battuta tra informatici per indicare le potenzialità attuali del puro e semplice JavaScript.
- Agli albori del Web era normale programmare in vanillaJS
  
</div>

<img src="/media/svelte_000.png" class="mx-auto" width="400" />

---

# Introduzione

Librerie JS

- Una libreria NON è un'unità eseguibile indipendentemente, ma un modulo aggiuntivo richiesto da un programma.
- In altre parole, le librerie sono raccolte di classi e funzioni, motivo per cui a volte vengono anche chiamate librerie di componenti o di classi. 
- Il programma principale utilizza una o più funzioni, messe a disposizione dalla libreria.

<img src="/media/svelte_001.png" class="mx-auto" style="margin-top:2rem;" width="500" />

---

# Introduzione

Librerie JS

- Una libreria JavaScript è una libreria di codice JavaScript pre-scritto che consente uno sviluppo più semplice di applicazioni basate su JavaScript
- Ci sono centinaia di librerie JS per qualsiasi funzionalità possa venire in mente allo sviluppatore
- Una delle più note librerie che ha dominato il web per molti anni si chiama `jQuery`
- **jQuery** è una libreria JavaScript veloce, piccola e ricca di funzionalità. 
- Rende funzionalità complesse come l'attraversamento e la manipolazione di documenti HTML, la gestione degli eventi, l'animazione e Ajax molto più semplici che in vanillaJS
- Con una combinazione di versatilità ed estensibilità, jQuery ha cambiato il modo in cui milioni di persone scrivono JavaScript.

---

# Introduzione

Framework JS

- Man mano che l'importanza dello sviluppo Web cresceva, e con essa l'importanza di JS, l'uso di VanillaJS o di semplici librerie non era più sufficiente
- Pertanto hanno iniziato a proliferare una moltitudine di `Framework JS` che offrono paradigmi differenti e adatti a risolvere la maggioranza delle problematiche dello sviluppo web

<div style="background-color:green;color:yellow;padding: 10px;line-height: 40px; margin: 10px;">

In informatica, **un framework** è un sistema che consente di estendere le funzionalità del linguaggio di programmazione su cui è basato, fornendo allo sviluppatore una struttura coerente ed efficace al fine di effettuare azioni e comandi in modo semplice e veloce

</div>

- **Un framework** è un tipo speciale di libreria che non contiene funzioni "finite" come una normale libreria. 
- In sostanza, si può definire un framework come un insieme di funzioni e tool già “pronti all’uso”, ovvero che si possono utilizzare senza doverli progettare da zero ogni volta. 
  
---

# Introduzione

Framework JS

- I framework sono piuttosto impalcature/scheletri/template di programmi che forniscono il progetto, le linee guida e l'organizzazione del codice ma non l'unità finita.
- Il framework, quindi, fornisce il progetto e il framework di base e mostra anche ciò che è ancora necessario al programmatore in termini di personalizzazione. 
- Il framework fornisce il flusso di un'applicazione software e comunica allo sviluppatore ciò di cui ha bisogno e chiama il codice fornito dallo sviluppatore come richiesto


---

# Introduzione

Framework JS

<img src="/media/svelte_004.png" class="mx-auto" style="margin-top:0rem;" width="800" />


---

# Introduzione

Framework JS

- I principali [framework](https://en.wikipedia.org/wiki/Software_framework) degli ultimi anni sono

<img src="/media/svelte_002.png" class="mx-auto" style="margin-top:0rem;" width="600" />

---

# Introduzione

Framework pro vs cons

- L'uso di un frameowrk non è indispensabile: si tratta più che altro di uno dei tanti strumenti che lo sviluppatore ha a sua disposizione per programmare meglio e più velocemente. 
- Proprio per queste sue caratteristiche, sono diventati sempre più fondamentali per lo sviluppo di siti web e app.
- I framework consentono di:
  - ottimizzare tempi, costi e benefici;
  - evitare al programmatore di riscrivere codice già scritto in precedenza per compiti simili;
  - organizzare e trovare rapidamente i file necessari;
  - concentrarsi sul problema da risolvere, senza dover implementare funzionalità che qualcun altro ha già provveduto a creare.

---

# Svelte

Introduzione

- Svelte è un framework **che propone un approccio radicalmente nuovo alla creazione di applicazioni Web**.
- Se hai già esperienza con React, Vue, Angular o altri framework frontend rimarrai   piacevolmente sorpreso da Svelte.
- Lavorando con Svelte tutto sembra molto più simile al JavaScript-vanilla rispetto che a lavorare con altri framework.
- In generale la maggior parte delle cose che sono complicate con altri framework sono molto semplici e leggeri con Svelte.

<div style="background-color:green;color:yellow;padding: 10px;line-height: 40px;">
Svelte è stato recentemente votato come il <h2>framework web più amato dagli sviluppatori</h2> 
</div>

[https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks](https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks)


---

# Svelte

Svelte vs Others

- Mentre i framework tradizionali come React e Vue fanno la maggior parte del loro lavoro nel browser, Svelte sposta il lavoro in una fase di compilazione che si verifica quando crei la tua app, in modo da non dover far scaricare l'intero framework a tutti i tuoi visitatori del sito. 
- Di conseguenza, la fruizione dell'esperienza è più fluida, consuma meno larghezza di banda e tutto risulta più veloce e leggero.
- Al momento della distribuzione, Svelte scompare e tutto ciò che ottieni è puro JavaScript Vanilla (molto veloce!).
- In altre parole `Svelte è un compilatore` che trasforma il codice della tua applicazione Web in puro JavaScript, raggiungendo così massime prestazioni

---

# Svelte

Introduzione

<img src="/media/svelte_00.png" class="mx-auto" width="750" />

---

# Svelte

Svelte vs Others

- Molti framework Web utilizzano il concetto di `Virtual DOM`
- Il Virtual DOM `VDOM` è una rappresentazione ideale della UI di una pagina che è mantenuta in memoria
- Il VDOM è sincronizzato periodicamente con il DOM reale da una libreria (Reacts, Vue, Angular)
- Svelte, in modo innovativo, anzichè utilizzare la tecnica del `virtual DOM diffing`, genera codice JS che aggiorna direttamente il DOM quando cambia lo stato della tua app.

<br>
<div style="background-color:green;color:yellow;padding: 10px;line-height: 40px;">
La principale differenza tra Svelte e gli altri framework Web è che Svelte è un compilatore che converte la tua applicazione Web in JavaScript-vanilla durante la fase di build. Al contrario gli altri framework usano un virtual DOM interpretato dall'applicazione Web durante il runtime sul browser.
</div> 

---

# Svelte

Svelte vs Others

- React utilizza un concetto noto come Virtual DOM (VDOM), in cui una rappresentazione virtuale dell'interfaccia utente viene mantenuta in memoria e sincronizzata con il DOM reale attraverso un processo chiamato **riconciliazione**. 
- Il processo di riconciliazione troverà la differenza (diffing) tra il Virtual DOM (un oggetto in memoria, dove inviamo gli ultimi aggiornamenti all'interfaccia utente) e il vero DOM (DOM che contiene l'interfaccia utente precedentemente renderizzata). 
- Utilizzando specifici algoritmi, il framework decide come aggiornare l'interfaccia utente. 
- Ovviamente questo processo, non è efficiente e veloce
- Per raggiungere questo obiettivo, React introduce un overhead (la libreria), che verrà eseguito nel motore JS del browser per monitorare e aggiornare il DOM in base alle varie interazioni dell'utente.

---

# Svelte

Svelte vs Others

<img src="/media/svelte_01.png" class="mx-auto w-160" />

---

# Svelte

Svelte vs Others

- Svelte è solamente un compilatore, che converte la tua applicazione in codice JavaScript durante la fase di sviluppo e build. 
- Ciò significa che non inietterà alcun codice aggiuntivo (no librerie aggiuntive) da eseguire nel browser quando l'applicazione è in esecuzione per aggiornare il DOM.
- Questo approccio è generalmente più veloce dell'approccio basato su Virtual DOM.

<img src="/media/svelte_003.png" class="mx-auto" width="480" style="margin-top:20px" />

---

# Svelte

Svelte vs Others

**PRO**

- Tempo di compilazione velocissimo rispetto a React o altri framework e dimensione del pacchetto generato è più piccola rispetto a React
- Tempi di caricamento e rendering della Web app più veloci rispetto a React o altri framework.
- Più facile da capire rispetto a altri framework poiché Svelte è semplice JavaScript, HTML e CSS.
- Permette di scrivere meno codice rispetto ad altri framework
- Nativamente **reactive** e perfettamente adatto alle moderne Web app

**CONTRO**

- Svelte è un framework ancora nuovo e giovane con un supporto limitato da parte della community, quindi non ha il supporto per un'ampia gamma di plugin e integrazioni come per esempio React
- Alcuni sviluppatori potrebbero non preferire l'uso di sintassi speciali come #if e #each all'interno dei loro modelli e preferirebbero invece utilizzare JavaScript puro, come consentito da React.

---

# Svelte

Svelte vs SvelteKit

**SVELTE**

 - Un linguaggio di programmazione che si basa su HTML, CSS e JS
 - In Svelte, un'applicazione è composta da uno o più **componenti**. 
 - Un componente è un blocco di codice autonomo riutilizzabile che incapsula HTML, CSS e JavaScript scritti in un file **.svelte**. 
 
**SVELTE KIT**

- Sveltekit è il framework, basato su Svelte, che permette agli sviluppatori di creare e gestire la user experience della loro applicazione. 
- Fornisce un ambiente unificato per lavorare con componenti, dati, routing e altro ancora.
- Sveltekit è un `full stack framework` ricco di funzionalità e permette lo sviluppo di un applicazione web completa di back-end e front-end

---

# Svelte

Svelte vs SvelteKit

<img src="/media/svelte_005.png" class="mx-auto" width="900" />


---

# Svelte

Web Components

- Lo sviluppo Web moderno è incentrato sul concetto di `componente` e Svelte è **totalmente allineato** con questo paradigma.

<div style="background-color:green;color:yellow;padding: 10px;line-height: 40px;margin:10px;">

*Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.* (source MDN)

</div>

- Un componente è un elemento atomico e auto sufficiente,  di un'applicazione Web. 
- In altre parole un componente è un "mattoncino", ben definito, che viene utilizzato all'interno di un'applicazione più ampia
- Da ciò ne consegue che una  moderna applicazione web è composta da uno o più componenti indipendenti che interagiscono tra loro per fornire il layout e la funzionalità desiderata

---

# Svelte

Web Components

- Un elemento di input può essere un componente.
- Un form può essere un componente. 
- Una pagina intera può essere è un componente.

<img src="/media/svelte_03.png" style="position: relative; left: 450px;top:-150px;" width="500" />

---

# Svelte

Web Components

<img src="/media/svelte_006.png" class="mx-auto" width="600" />

---

# Svelte

Svelte Components

- Un componente web è assimilabile al concetto di Oggetto nella programmazione OOP
- Come un oggetto incapusala dati e metodi, un componente Web incapsula tutto ciò che è necessario per eseguire il rendering della sua interfaccia utente e per gestire la sua logica di funzionamento.  
- Ogni componente Svelte è dichiarato in un file `.svelte`, che contiene:
  - il contenuto (markup) in HTML
  - la presentazione o stile (CSS)
  - il comportamento (JavaScript)

<br>
<div style="background-color:green;color:yellow;padding: 10px; line-height:25px">
Questo raggruppamento (senza un ordine particolare) permette un modo efficiente di definire una parte dell'interfaccia utente perché non è necessario cercare gli elementi che influiscono sullo stesso elemento in vari file.
</div>

---

# Svelte

Svelte Components

- Ecco la struttura di un componente Svelte

<br>

<img src="/media/svelte_007.png" class="mx-auto" width="700" />


---

# Svelte

Esempio di componente Svelte
 
<img src="/media/svelte_008.png" class="mx-auto" width="350" />


---

# Svelte

Svelte Components

<br><br>

<img src="/media/svelte_04.png" class="mx-auto" />


---

# Svelte

Svelte Components

- Questo componente, per quanto semplice, contiene tutti gli elementi di un componente web (HTML/CSS/JS)
- Nel tag `<script>` è presente il codice JS di gestione del componente
- Il markup HTML non è inserito in un tag particolare e pertanto tutto ciò che non è parte del tag `<script>` e `<style>` è cosiderato contenuto del componente.
- Il tag `<style>` definisce il CSS del componente

<br>
<div style="background-color:green;color:yellow;padding: 10px;line-height: 40px;">
Sia il codice JS e lo stile CSS sono confinati solo all'interno di questo componente e non possono influire o essere influenzati da altri componenti parte dell'applicazione complessiva.
</div>
<br>

- Se un altro componente ha un tag h1, lo stile non sarà modificato. 
- Questo è molto utile quando riutilizzi componenti che hai già scritto per altre applicazioni o quando includi librerie Open Source pubblicate da altre persone.

---

# Svelte

Svelte Components

```html
<h1>My name is John Doe!</h1>
```

- Questo è un componente Svelte valido
- Include solo la parte di contenuto
- Non ha nessuno stuile e nessuna logica di controllo


---

# Svelte

Svelte Components

```html
<h1>My name is John Doe!</h1>

<style>
	h1 {
		width: 30%;
		border: 20px solid green;
		border-radius: 20px;
		color: red;
		text-align: center;
		margin: 30px auto;
		padding: 20px;
	}
</style>
```

- Questo è un componente Svelte valido
- Include la parte di contenuto e di stile

---

# Svelte

Svelte Components

```html
<script>
	let name = 'John Doe';
</script>
```

- Questo è un componente Svelte valido.
- Non ha nessuno contenuto e non verrà visualizzato.
- Anche se apparentemente non ha senso, lo ha in quanto posso avere componenti che svolgono solo funzioni utilizzate da altri componenti.

Esempio: 
- un componente che fornisce accesso ad un DB nosql non ha nessuna parte di UI, ma è di grande utilità all'interno della mia applicazione.


---

# Svelte

Svelte Hello World

- Creiamo la nostra prima Web app con Svelte
- Per usare Svelte dobbiamo avere installato **node.js** e **git**
- Un modo molto facile per fare lo [**scaffolding**](https://en.wikipedia.org/wiki/Scaffold_(programming)) di un'applicazione base è utilizzare il tool **npx** installato assieme a node.js

```bash
npx degit sveltejs/template hello-world
```

- Questo comando scarica una copia del codice base di un'applicazione Svelte dal repo github [https://github.com/sveltejs/template](https://github.com/sveltejs/template)
- Il codice dell'app sarà ora disponibile nella directory **hello-world**
- Per compilare e lanciare l'applicazione Svelte esegui

```bash
cd hello-world
npm install
npm run dev
```

- Questo installerà tutte le dipendenze e lancerà l'applicazione sulla porta 8080


---

# Svelte

Svelte Hello World

<img src="/media/svelte_05.png" class="mx-auto w-100" />


---

# Svelte

Svelte Hello World

<img src="/media/svelte_06.png" class="mx-auto w-150" />


---

# Svelte

Svelte Hello World

- Per rendere l'applicazione disponibile su un IP e porta specifici

```bash
HOST=<IP address> PORT=<port>  npm run dev
```
<br>
<img src="/media/svelte_07.png" class="mx-auto w-140" />

---

# Svelte

Svelte Hello World

- Per rendere l'applicazione disponibile su un IP e porta specifici

```bash
export HOST=<IP address> 
export PORT=<port>  
npm run dev
```
<br>
<img src="/media/svelte_07.png" class="mx-auto w-120" />


---

# Svelte

Svelte Hello World

- Analizziamo il progetto generato
  
```bash
.
├── package.json
├── package-lock.json
├── public <---- Contiene i file statici parte dell'applicazione
│   ├── build 
│   │   ├── bundle.css <--- CSS autogenerato dalla compilazione dei componenti
│   │   ├── bundle.js  <--- Applicazione Web in JS autogenerata dalla compilazione
│   │   └── bundle.js.map
│   ├── favicon.png
│   ├── global.css  <---- CSS globale che si applica a tutta l'applicazione ed ai suoi componenti
│   └── index.html  <---- La pagina Web dell'applicazione
├── README.md
├── rollup.config.js
├── scripts
│   └── setupTypeScript.js
└── src
    ├── App.svelte  <---- L'unico componente Svelte dell'applicazione
    └── main.js <--- Il main dell'applicazione JS

```

---

# Svelte

Svelte Hello World

- Analizziamo la pagina web dell'applicazione (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset='utf-8'>
	<meta name='viewport' content='width=device-width,initial-scale=1'>
	<title>Svelte app</title>
	<link rel='icon' type='image/png' href='/favicon.png'>
	<link rel='stylesheet' href='/global.css'>
	<link rel='stylesheet' href='/build/bundle.css'>
	<script defer src='/build/bundle.js'></script>
</head>
<body>
</body>
</html>
```
- Come si vede un'applicazione Svelte non ha nessun contenuto HTML esplicitamente scritto
- Un'applicazione Svelte è completamente scritta in JavaScript vanilla
- Il compilatore Svelte genera l'applicazione finale

---

# Svelte

Svelte Hello World

- Analizziamo il main dell'applicazione JS (main.js)

```js
import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
```
- Il main si limita ad instanziare il singolo componente chiamato `App`
- Nella proprietà `target` è dove avviene la magia
- Questa linea installa il componente nel body della pagina web (a conferma che tutto il contenuto è generato in JS)
- La proprietà `props` definisce una variabile da passare al componente principale

---

# Svelte

Svelte Hello World

- Analizziamo il componente Svelte dell'applicazione (App.svelte)
  
```html
<script>
	export let name;
</script>
<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>
<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>
```

---

# Svelte

Svelte Hello World

- Il componente utilizza una variabuile esterna, definita nel main nella sezione *props*
- Svelte definisce una sua grammatica e sintassi che può essere inserita direttamente nel HTML per renderlo dinamico
- Per esempio la variabile *name* viene utilizzata direttamente nel HTML tramite la sintassi `{name}`
- Pertanto Svelte permette di utilizzare variabili definite nel codice JS direttamente nella sezione HTML del contenuto
- Questo è un metodo usato praticamente da tutti i framework e risulta molto versatile e potente

---

# Svelte

Svelte Hello World

- Analizziamo l'output della fase di build (bundle.css e bundle.js)

```css
main.svelte-1tky8bj{text-align:center;padding:1em;max-width:240px;margin:0 auto}h1.svelte-1tky8bj{color:#ff3e00;text-transform:upper
case;font-size:4em;font-weight:100}@media(min-width: 640px){main.svelte-1tky8bj{max-width:none}}
```

- CSS autogenerato 
- Difficilmente leggibile

<br>
<div style="background-color:green;color:yellow;padding: 10px;line-height: 40px;">
Non va <mark>MAI</mark> modificato in quanto ad ogni nuova compilazione viene sovrascritto
</div>

---

# Svelte

Svelte Hello World

- Analizziamo l'output della fase di build (bundle.css e bundle.js)

```js
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' +
 (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTag
Name('head')[0].appendChild(r) })(self.document);
var app = (function () {
    'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
```

- JS autogenerato 
- Di difficle comprensione

<div style="background-color:green;color:yellow;padding: 10px;line-height: 10px;">
Non va <mark>MAI</mark> modificato in quanto ad ogni nuova compilazione viene sovrascritto
</div>

---

# Svelte

Svelte Hello World

- Vediamo la versione finale pronta per essere pubblicata

```js
var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEa
ch(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}f
unction u(t,n){t.appendChild(n)}function s(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function i(
t){return document.createTextNode(t)}function l(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let f
;function d(t){f=t}const p=[],h=[],$=[],m=[],g=Promise.resolve();let b=!1;function y(t){$.push(t)}const _=new Set;let x=0;function v
(){const t=f;do{for(;x<p.length;){const t=p[x];x++,d(t),k(t.$$)}for(d(null),p.length=0,x=0;h.length;)h.pop()();for(let t=0;t<$.lengt
h;t+=1){const n=$[t];_.has(n)||(_.add(n),n())}$.length=0}while(p.length);for(;m.length;)m.pop()();b=!1,_.clear(),d(t)}function k(t){
if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.fo
rEach(y)}}const w=new Set;function E(t,n){-1===t.$$.dirty[0]&&(p.push(t),b||(b=!0,g.then(v)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|
=1<<n%31}function j(c,u,a,i,l,p,h,$=[-1]){const m=f;d(c);const g=c.$$={fragment:null,ctx:null,props:p,update:t,not_equal:l,bound:e()
,on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u.context||(m?m.$$.context:[])),callbac
ks:e(),dirty:$,skip_bound:!1,root:u.target||m.$$.root};h&&h(g.root);let b=!1;if(g.ctx=a?a(c,u.props||{},((t,n,...e)=>{const o=e.leng
th?e[0]:n;return g.ctx&&l(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),b&&E(c,t)),n})):[],g.update(),b=!0,o(g.bef
ore_update),g.fragment=!!i&&i(g.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);g.fragme
nt&&g.fragment.l(t),t.forEach(s)}else g.fragment&&g.fragment.c();u.intro&&((_=c.$$.fragment)&&_.i&&(w.delete(_),_.i(x))),function(t,
e,c,u){const{fragment:s,on_mount:a,on_destroy:i,after_update:l}=t.$$;s&&s.m(e,c),u||y((()=>{const e=a.map(n).filter(r);i?i.push(...e
):o(e),t.$$.on_mount=[]})),l.forEach(y)}(c,u.target,u.anchor,u.customElement),v()}var _,x;d(m)}function A(n){let e,o,r,c,f,d,p;retur
```

---

# Svelte

Esercizio svelte_01

- Installare Svelte e generare un applicazione chiamata |cognome|_svelte_01
- Lanciare l'applicazione generata
- Analizzare i file più importanti
- Modificare il file App.svelte e verificare i cambiamenti in realtime nel browser
- *Consgenare tutta la directory |cognome|_svelte_01 ad escusione della sub-directory node_modules*

---

# Svelte

Applicazioni Multi-Component

- Come abbiamo visto nello scaffolding introdotto l'intera applicazione Web è composta da un singolo componente (App.svelte)
- Questo è più che adatto per semplici pagine Web o `Single Page Application` (SPA)
- Tuttavia una buona pratica è suddividere l'applicazione web in una serie di componente che interagiscono tra loro
- In altre parole l'applicazione sarà composta da una composizione (composition) di componenti differenti
- Per fare questo è necessario avewre la possibilità di includere un componente dentro un'altro componente
- In Svelte questo è banalissimo
- Vediamo un esempio nella slide successiva

---

# Svelte

Applicazioni Multi-Component

<img src="/media/svelte_08.png" class="mx-auto w-190" />

---

# Svelte

Applicazioni Multi-Component

- Main App (App.svelte)

```html
	import Bar from './Bar.svelte'
	import Content from './Content.svelte'
```

<br>

- Importa (`import`) un componente <br> all'interno del componente App.svelte

<img src="/media/svelte_09.png" class="centro" />

<br>

```html
<Bar />
<Content />
```

<br>

- Instanzia ed usa il componente importanto <br> nel componente principale
  
- Il CSS del componente principale non è modificato <br> dai componenti importati


---

# Svelte

Applicazioni Multi-Component

- Barra dei menu (Bar.svelte)

- Lo stile del componente Bar è totalmente <br> isolato ed indipendente dal componente principale <br> e dal componente Content
- Questo meccanismo di segregazione e incapsulamento <br> permette di scrive e manutenere più facilmente <br> la mia applicazione web
- Infatti un bug nel componente Bar non impatta <br> altre parti della mia applicazione
- Una modifica nel componente Bar non impatta <br> altre parti della mia applicazione
- Posso assegnare lo sviluppo di componenti diversi <br> a sviluppatori diversi

<!-- <img src="/media/svelte_10.png" class="mx-auto w-80" /> -->
<img src="/media/svelte_10.png" class="centro" />

---

# Svelte

Applicazioni Multi-Component

- Area contenuto (Content.svelte)

- Ogni componente è quindi atomico e completo
- Ogni componente può essere riutilizzato in <br> altre applicazioni web
- A tutti gli effetti i Web components sono <br> assimilabili al paradigma OOP 
 
 <br><br><br>
<div style="background-color:green;color:yellow;padding: 10px;line-height: 30px;">
In Svelte i componenti sono indicati con un tag con la lettera maiuscola
<br>
&lt;Widget /&gt;
<br>
&lt;Counter /&gt;
</div>


<img src="/media/svelte_11.png" class="centro" />

---

# Svelte

Esercizio svelte_02

- Modificare l'esercizio 1 ed implementare l'applicazione multi-component vista a lezione
- *Consgenare tutta la directory |cognome|_svelte_02 ad escusione della sub-directory node_modules*

---

# Svelte

Stateful component

- Uno dei problemi tradizionali dello sviluppo di app web è la gestione dello stato
- Questo problema è intrinseco in quanto il protcollo HTTP è **stateless** o senza stato
- Svelte risolve brillantemente questo problema permettendo di immagazzinare lo stato del componente direttamente all'interno del componente stesso
- Pertanto un componente Svelte è assimilabile a tutti gli effetti ad un oggetto in base alla definizione OOP
- Un componente svelte implementa il meccanismo del `encapsulation`

---

# Svelte

Stateful component

- Ogni componente, oltre a definire il markup, la logica CSS e JavaScript, può ospitare il proprio stato.
- Lo stato è un qualsiasi dato necessario per il corretto funzionamento del componente stesso e dell'applicazione
- Ad esempio, se un campo di input di un modulo contiene la stringa "test", ci sarà una variabile da qualche parte che contiene questo valore. 
- Questo è lo stato del campo di input.
- Il campo è selezionato? Una variabile da qualche parte registrerà questo fatto. E così via.
- Lo stato è ospitato nella sezione `<script>` del componente 

```html
<script>
	let count = 0; // stato di un contatore
</script>
```

---

# Svelte

Stateful component

- Ma come si aggiorna lo statro di un componente?
- Altri framework come Vue o React, rendono questa operazione poco intuitiva
- Al contrario una cosa grandiosa di Svelte è che non è necessario fare nulla di speciale per aggiornare lo stato di un componente.
- Basta solo un'operazione di assegnazione in qualsiasi parte del componente 

```html
<script>
	let count = 0;

	function incrementa() {
		count++;
	}
</script>
``` 

---

# Svelte

Stateful component

- Vediamo un esempio completo

<img src="/media/svelte_12.png" class="centro" />

- Anche in questo caso l'applicazione è solo <br> un contenitore per i componenti che implementano <br> la UI e le funzionalità desiderate	
  
---

# Svelte

Stateful component

<img src="/media/svelte_13.png" class="centro" />

- Ad ogni pressione del bottone viene invocata <br> una funzione (metodo) interno del componente
- Il metodo incrementa la variabile di <br> stato del contatore
- Come detto in precedenza, lo stato di <br> un componente Svelte si modifica con <br> una semplice assegnazione
- Più intuitivo di così non è proprio possibile :)

<br>
<div style="background-color:green;color:yellow;padding: 20px;width:50%;">
Per modificare lo stato di un componente è SEMPRE necessario effettuare un'operazione di assegnamento
</div>

---

# Svelte

Stateful component

<img src="/media/svelte_14.png" class="mx-auto w-300" />


---

# Svelte

Esercizio svelte_03

- Implementare l'applicazione ed il componente Contatore visti a lezione
- Aggiungere anche la funzionalità di decremento del contatore
- *Consgenare tutta la directory |cognome|_svelte_03 ad escusione della sub-directory node_modules*

---

# Svelte

todoS WebApp

- Sviluppiamo una SPA WebApp che permette di gestire una ToDo List personale
- Lo scopo è di capire ed applicare vari concetti introdotti da Svelte

SPECIFICA di todoS

- L'applicazione todoS permette la gestione di una todo list personale
- L'utente deve essere in grado di:
  - inserire nuovi todo
  - modificare todo esistenit
  - eliminare todo esistenti
  - per ogni todo è possibile specificare un titolo ed una prioprità a scelta tra:
    - HIGH
    - MED
    - LOW

---

# Svelte

todoS WebApp

- x


---

# Svelte

todoS WebApp

- x


---

# Svelte

todoS WebApp

- x


---

# Svelte

todoS WebApp

- x


---

# Svelte

todoS WebApp

- x


---

# Svelte

todoS WebApp

- x


---

# Svelte

todoS WebApp

- x

---

# Svelte

todoS WebApp

- x


---

# Svelte

todoS WebApp

- x


---

# Svelte

todoS WebApp

- x


---

# Svelte

todoS WebApp

- x

---



---

BACKUP SLIDE


---

# xxxxxxx

yyyy

- aa
- bb



---

# xxxxxxx

yyyy

- aa
- bb



---

 
# xxxxxxx

yyyy

- aaa
- bb
- cc





---

 
#  xxxxxxx

yyyy

- aaa
- bb
- cc


<div style="background-color:green;color:yellow;padding: 10px;">
xxxxxxxxxx
</div>  

---

#  xxxxxxx

yyyy

- aaa
- bb
- cc
  
<br />
<center>
</center>

---

 
# ercizio js_05

xxxxx


1. Dato il file [empty.html](../support/empty.html) rinominarlo in |cognome|_esercizio_js_05.html ed aggiungere il riferimento al file |cognome|_esercizio_js_05.js
2. Creare una pagina HTML e il relativo codice JS in modo che:
   - Vengano richiesti all'utente il nome e la media dei voti di uno studente
   - Alla pressione di un bottone il nome e la media inseriti vengano aggiunti ad una linea di una tabella
   - Alla pressione di un secondo bottone, tutte le linee pari vengano colorate di blue e tutte le linee dispari di rosso
3. Fornire il link github al file con nome *|cognome|_esercizio_js_05.html*  e *|cognome|_esercizio_js_05.js*
