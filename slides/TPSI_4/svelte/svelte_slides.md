---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://source.unsplash.com/collection/94734566/1920x1080
background: /cover.webp
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
#highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
aspectRatio: '16_/9'
routerMode: 'hash'
as: 2023/2024
version: '1.2.1'

---  

<!-- https://reteinformaticalavoro.it/blog/framework-cosa-sono-e-quali-dominano-le-classifiche/#:~:text=In%20informatica%2C%20un%20framework%20%C3%A8,in%20modo%20semplice%20e%20veloce.

https://www.okupter.com/blog/svelte-vs-sveltekit-the-difference

https://www.okupter.com/blog/sveltekit-full-stack-framework -->



# Svelte e SvelteKit

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

Framework JS

- L'uso di un framework non è indispensabile: si tratta più che altro di uno dei tanti strumenti che lo sviluppatore ha a sua disposizione per programmare meglio e più velocemente. 
- Proprio per queste sue caratteristiche, sono diventati sempre più fondamentali per lo sviluppo di siti web e app.
- I framework consentono di:
  - ottimizzare tempi, costi e benefici;
  - evitare al programmatore di riscrivere codice già scritto in precedenza per compiti simili;
  - organizzare e trovare rapidamente i file necessari;
  - concentrarsi sul problema da risolvere, senza dover implementare funzionalità che qualcun altro ha già provveduto a creare.

---

# Web Components

OOP per il Web

- Lo sviluppo Web moderno è incentrato sul concetto di `componente`

<div style="background-color:green;color:yellow;padding: 10px;line-height: 40px;margin:10px;">

*Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.* (source MDN)

</div>

- Un componente è un elemento atomico e auto sufficiente,  di un'applicazione Web. 
- In altre parole un componente è un "mattoncino", ben definito, che viene utilizzato all'interno di un'applicazione più ampia
- Da ciò ne consegue che una  moderna applicazione web è composta da uno o più componenti indipendenti che interagiscono tra loro per fornire il layout e la funzionalità desiderata

---

# Web Components

OOP per il Web

- Un elemento di input può essere un componente.
- Un form può essere un componente. 
- Una pagina intera può essere un componente.

<img src="/media/svelte_03.png" style="position: relative; left: 450px;top:-150px;" width="500" />

---

# Web Components

OOP per il Web

<img src="/media/svelte_006.png" class="mx-auto" width="600" />

---

# SvelteKit

Svelte ~ SvelteKit

- Svelte è un framework **che propone un approccio radicalmente nuovo alla creazione di applicazioni Web**.
- Svelte è un modo per scrivere componenti dell'interfaccia utente, come una barra di navigazione, una sezione dei commenti o un modulo di contatto
- Se hai già esperienza con React, Vue, Angular o altri framework frontend rimarrai   piacevolmente sorpreso da Svelte.
- Lavorando con Svelte tutto sembra molto più simile al JavaScript-vanilla rispetto che a lavorare con altri framework.
- In generale la maggior parte delle cose che sono complicate con altri framework sono molto semplici e leggeri con Svelte.

<div style="background-color:green;color:yellow;padding: 10px;line-height: 40px;">
Svelte è stato recentemente votato come il <h2>framework web più amato dagli sviluppatori</h2> 
</div>

[https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks](https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks)

---

# SvelteKit

Introduzione

<img src="/media/svelte_00.png" class="mx-auto" width="750" />


---

# SvelteKit

Svelte vs Others

- Mentre i framework tradizionali come React e Vue fanno la maggior parte del loro lavoro nel browser, Svelte sposta il lavoro in una fase di compilazione che si verifica quando crei la tua app, in modo da non dover far scaricare l'intero framework a tutti i tuoi visitatori del sito. 
- Di conseguenza, la fruizione dell'esperienza è più fluida, consuma meno larghezza di banda e tutto risulta più veloce e leggero.
- Al momento della distribuzione, Svelte scompare e tutto ciò che ottieni è puro JavaScript Vanilla (molto veloce!).
- In altre parole `Svelte è un compilatore` che trasforma il codice della tua applicazione Web in puro JavaScript, raggiungendo così massime prestazioni


---

# SvelteKit

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

# SvelteKit

Svelte vs Others

- React utilizza un concetto noto come Virtual DOM (VDOM), in cui una rappresentazione virtuale dell'interfaccia utente viene mantenuta in memoria e sincronizzata con il DOM reale attraverso un processo chiamato **riconciliazione**. 
- Il processo di riconciliazione troverà la differenza (diffing) tra il Virtual DOM (un oggetto in memoria, dove inviamo gli ultimi aggiornamenti all'interfaccia utente) e il vero DOM (DOM che contiene l'interfaccia utente precedentemente renderizzata). 
- Utilizzando specifici algoritmi, il framework decide come aggiornare l'interfaccia utente. 
- Ovviamente questo processo, non è efficiente e veloce
- Per raggiungere questo obiettivo, React introduce un overhead (la libreria), che verrà eseguito nel motore JS del browser per monitorare e aggiornare il DOM in base alle varie interazioni dell'utente.

---

# SvelteKit

Svelte vs Others

<img src="/media/svelte_01.png" class="mx-auto w-160" />

---

# SvelteKit

Svelte vs Others

- Svelte è solamente un compilatore, che converte la tua applicazione in codice JavaScript durante la fase di sviluppo e build. 
- Ciò significa che non inietterà alcun codice aggiuntivo (no librerie aggiuntive) da eseguire nel browser quando l'applicazione è in esecuzione per aggiornare il DOM.
- Questo approccio è generalmente più veloce dell'approccio basato su Virtual DOM.

<img src="/media/svelte_003.png" class="mx-auto" width="480" style="margin-top:20px" />

---

# SvelteKit

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

# SvelteKit

Fullstack Framework

- `SvelteKit` è un framework per lo sviluppo rapido di applicazioni Web robuste e performanti che utilizza Svelte. 
- Se provieni da React, SvelteKit è simile a Next. Se vieni da Vue, SvelteKit è simile a Nuxt
- Sveltekit è il framework che permette agli sviluppatori di creare e gestire la user experience della loro applicazione. 
- Fornisce un ambiente unificato per lavorare con componenti, dati, routing, back-end, front-end e altro ancora.
- SvelteKit e Svelte sono **totalmente allineati** al paradigma e modello di sviluppo per componenti caratteristico del web moderno.

---

# SvelteKit

Fullstack Framework

- SvelteKit è un framework per app che risolve i difficili molti problemi comuni ad applicazioni pronte per la produzione:
  - Routing (navigazione tra le pagine)
  - Server-side rendering (supporto al back-end)
  - Data fetching ()
  - Service workers 
  - Supporto TypeScript (la versione di JavaScript con steroidi) 
  - Prerendering (per applicazioni statiche. vedi blog profmancusoa)
  - Single-page apps (SPA: approccio moderno che sostituisce lo sviluppo desktop)
  - Supporto per diversi hosting providers molto comuni su Internet (vercel, netlify, ...) 


---

# SvelteKit

Svelte vs SvelteKit

**SVELTE**

 - Un linguaggio di programmazione che si basa su HTML, CSS e JS
 - Svelte permette la creazione di  **componenti** web. 
 - Un componente è un blocco di codice autonomo riutilizzabile che incapsula HTML, CSS e JavaScript scritti in un file **.svelte**. 
 
**SVELTE KIT**

- Sveltekit è il framework, basato su Svelte, che permette agli sviluppatori di creare e gestire applicazioni full stack che combinano insieme componenti Svelte. 
- Fornisce un ambiente unificato per lavorare con componenti, dati, routing e altro ancora.
- Sveltekit è un `full stack framework` ricco di funzionalità e permette lo sviluppo di un applicazione web completa di back-end e front-end

---

# SvelteKit

Web App Architecture

<img src="/media/svelte_005.png" class="mx-auto" width="900" />


---

# SvelteKit

Svelte Components

- Un componente web è assimilabile al concetto di Oggetto nella programmazione OOP
- Come un oggetto incapsula dati e metodi, un componente Web incapsula tutto ciò che è necessario per eseguire il rendering della sua interfaccia utente e per gestire la sua logica di funzionamento.  
- Ogni componente Svelte è dichiarato in un file `.svelte`, che contiene:
  - il contenuto (markup) in HTML
  - la presentazione o stile (CSS)
  - il comportamento (JavaScript)

<br>
<div style="background-color:green;color:yellow;padding: 10px; line-height:25px">
Questo raggruppamento (senza un ordine particolare) permette un modo efficiente di definire una parte dell'interfaccia utente perché non è necessario cercare gli elementi che influiscono sullo stesso elemento in vari file.
</div>

---

# SvelteKit

Svelte Components

- Ecco la struttura di un componente Svelte

<br>

<img src="/media/svelte_007.png" class="mx-auto" width="700" />


---

# SvelteKit

Esempio di componente Svelte
 
<img src="/media/svelte_008.png" class="mx-auto" width="350" />


---

# SvelteKit

Svelte Components

<br><br>

<img src="/media/svelte_04.png" class="mx-auto" />


---

# SvelteKit

Svelte Components

- Questo componente, per quanto semplice, contiene tutti gli elementi di un componente web (HTML/CSS/JS)
- Nel tag `<script>` è presente il codice JS di gestione del componente
- Il markup HTML non è inserito in un tag particolare e pertanto tutto ciò che non è parte del tag `<script>` e `<style>` è considerato contenuto del componente.
- Il tag `<style>` definisce il CSS del componente

<br>
<div style="background-color:green;color:yellow;padding: 10px;line-height: 40px;">
Sia il codice JS e lo stile CSS sono confinati solo all'interno di questo componente e non possono influire o essere influenzati da altri componenti parte dell'applicazione complessiva.
</div>
<br>

- Se un altro componente ha un tag h1, lo stile non sarà modificato. 
- Questo è molto utile quando riutilizzi componenti che hai già scritto per altre applicazioni o quando includi librerie Open Source pubblicate da altre persone.

---

# SvelteKit

Svelte Components

```html
<h1>My name is John Doe!</h1>
```

- Questo è un componente Svelte valido
- Include solo la parte di contenuto
- Non ha nessuno stile e nessuna logica di controllo


---

# SvelteKit

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

# SvelteKit

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

# SvelteKit

Hello World

- Vediamo i semplici passi per creare un progetto base SvelteKit
- Utilizzeremo il progetto base per provare a analizzare e comprendere le principali caratteristiche:
  - del linguaggio Svelte e delle principali funzionalità
  - dello sviluppo per componenti
  - delle funzioni più importanti di SvelteKit

- Di seguito i link alla documentazione e tutoria di Svelte e SvelteKit
  - [Svelte tutorial](https://svelte.dev/tutorial/basics)
  - [Tutorial Interattivo Svelte](https://learn.svelte.dev/tutorial/welcome-to-svelte)
  - [Introduzione a SvelteKit](https://kit.svelte.dev/docs/introduction)

***Questi link sono il riferimento per gli studenti e vi suggerisco di studiarli e di utilizzarli per tutto il tempo necessario ad apprendere Svelte e SvelteKit***

---

# SvelteKit

Hello World: Creare un Progetto SvelteKit

- Per sviluppare con Svelte e SvelteKit è necessario:
  - nodejs (almeno versione 18) ---> [Come installare nodejs su Linux](http://cedws)
  - npm
  - git
- Assicurati che siano installati sul tuo sistema eseguendo i seguenti comandi:

```bash
> node --version
v19.2.0

> npm --version 
9.1.3

> git --version          
git version 2.34.1
```

---

# SvelteKit

Hello World: Creare un Progetto SvelteKit

- Spostati nella tua directory di lavoro (es: cd ~/tmp)
- Da qui crea lo [**scaffolding**](https://en.wikipedia.org/wiki/Scaffold_(programming)) di un'applicazione base seguendo le semplici istruzioni a video
  
```bash
> npm create svelte@latest hello-word-svelte-kit

create-svelte version 4.2.0

┌  Welcome to SvelteKit!
│
◆  Which Svelte app template?
│  ● SvelteKit demo app (A demo app showcasing some of the features of SvelteKit)
│  ○ Skeleton project
│  ○ Library project
└
◆  Add type checking with TypeScript?
│  ○ Yes, using JavaScript with JSDoc comments
│  ○ Yes, using TypeScript syntax
│  ● No
└
```

---

# SvelteKit

Hello World: Creare un Progetto SvelteKit

```bash
◆  Select additional options (use arrow keys/space bar)
│  ◻ Add ESLint for code linting
│  ◻ Add Prettier for code formatting
│  ◻ Add Playwright for browser testing
│  ◻ Add Vitest for unit testing
└

└  Your project is ready!

Install community-maintained integrations:
  https://github.com/svelte-add/svelte-add

Next steps:
  1: cd hello-word-svelte-kit
  2: npm install (or pnpm install, etc)
  3: git init && git add -A && git commit -m "Initial commit" (optional)
  4: npm run dev -- --open

To close the dev server, hit Ctrl-C
```

---

# SvelteKit

Hello World: Creare un Progetto SvelteKit

- Ora nella directory **hello-word-svelte-kit** è presente un progetto base realizzato con SvelteKit
- Per portare a termine la creazione del progetto eseguire i seguenti comandi

```bash
> cd hello-word-svelte-kit  # mi sposto nella directory hello-word-svelte-kit
> npm i  # installo le dipendenze del progetto

added 42 packages, and audited 43 packages in 10s

3 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

- Se non si sono verificatri errori, il progetto è pronto per l'esecuzione

<img src="/media/svelte_0000.png" class="mx-auto" width="100" />


---

# SvelteKit

Hello World: Eseguiamo il progetto

- Per eseguire il progetto, all'interno della directory di progetto (hello-word-svelte-kit), eseguire il seguente comando

```bash
> npm run dev -- --open

> hello-word-svelte-kit@0.0.1 dev
> vite dev --open


Forced re-optimization of dependencies

  VITE v4.3.9  ready in 1136 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

- Viene automaticamente aperta una finestra del browser che punta al seguente indirizzo: [http://localhost:5173/](http://localhost:5173/)

---

# SvelteKit

Hello World: Eseguiamo il progetto

<img src="/media/svelte_009.png" class="mx-auto" width="500" />

---

# SvelteKit

Hello World: Eseguiamo il progetto

<img src="/media/svelte_010.png" class="mx-auto" width="450" />

---

# SvelteKit

Hello World: Analisi del progetto base

- Quest'applicazione ci permette di comprendere alcuni concetti molto importanti:
  1. **Ogni pagina dell'applicazione è un componente Svelte**
  2. **Il routing è implementato la gerarchia di directory nel filesystem**
  3. **Ogni pagina è una directory all'interno di src/routes**
  4. **La home page è un componente Svelte all'interno di src/routes**
  5. **Una pagina(componente) può includere uno o più componenti esterni**

---

# SvelteKit

Hello World: Analisi del progetto base

- Analizziamo il progetto generato

```bash
src
├── app.html --> La pagina Web dell'applicazione
└── routes --> entry point del sistema di routing filesystem based
    ├── about
    │   └── +page.svelte --> la pagina About (componente svelte)
    ├── Counter.svelte --> il componente contatore presente solo nella home
    ├── Header.svelte --> il componente Header presente in tutte le pagine
    ├── +layout.svelte --> il layout comune a tutte le pagine del progetto
    ├── +page.svelte --> la home page (componente svelte)
    ├── styles.css --> CSS globale che si applica a tutta l'applicazione ed ai suoi componenti
    └── sverdle
        ├── game.js --> la logica del gioco (JS vanilla)
        ├── +page.server.js --> il back-end di sverdle (JS vanilla)
        └── +page.svelte --> la pagina sverdle (componente svelte)
```


---

# SvelteKit

Hello World: Analisi del progetto base

- Da questa prima analisi possiamo dedurre che:
  - Ogni pagina è composta da:
    - una directory all'interno di src/router. Il nome della directory coincide con la URL della pagina (quindi niente spazi, ma usiamo _)
    - un file nominato **+page-svelte** che è un componente completo ed indipendente che include HTML, CSS e JS  
  - Ogni componente che non è una pagina è formato da un file chiamato ***<nome_componente>.svelte***
  - Il routing tra pagine viene gestito automaticamente da SvelteKit se si rispetta la convenzione descritta sopra

- **Segue ora un'analisi live a cura del professore (`necessario prendere appunti`)**

---

# SvelteKit

Hello World: Esercitazione_01

- Creare ed installare il progetto base SvelteKit come spiegato sopra
- Eseguire l'applicazione
- Consegnare su github il progetto appena creato
- IMPORTANTE: non fare il push della directory ***node_modules***


---

# SvelteKit

Hello World: Esercitazione_02

- provare a modificare la home page del progetto in modo che appaia come in figura

<img src="/media/svelte_011.png" class="mx-auto" width="400" />

- Consegnare su github il progetto modificato


---

# SvelteKit

Hello World: Esercitazione_03

- provare a modificare il layout del progetto in modo che appaia come in figura
  
<br><br>
<img src="/media/svelte_012.png" class="mx-auto" width="650" />

- Consegnare su github il progetto modificato


---

# SvelteKit

Hello World: Esercitazione_04

- provare a modificare la pagina about in modo che appaia come in figura
  
<img src="/media/svelte_013.png" class="mx-auto" width="550" />

- Consegnare su github il progetto modificato


---

# SvelteKit

Hello World: Esercitazione_05

- provare a modificare il componente counter in modo che si incrementi o decrementi di due unità alla pressione dei pulsati + o -

<br>  
<img src="/media/svelte_014.png" class="mx-auto" width="500" />

- Consegnare su github il progetto modificato


---

# SvelteKit

Creiamo un componente

- Vediamo ora come creare un nostro componente e utilizzarlo nelle pagine della nostra applicazione
- Realizzeremo il componente introdotto alla slide #28 e successive
- Lo visualizzeremo sia sulla pagina home che sulla pagina about

<img src="/media/svelte_015.png" class="mx-auto" width="450" />

---

# SvelteKit

Creiamo un componente

- Per una corretta organizzazione del codice metteremo i nostri componenti nella directory lib
- Il nostro componente si chiama **Banner** 
- Quindi dobbiamo creare una directory *components* in src/lib e al suo interno creare un file *banner.svelte*
  
```bash
> cd src/lib
> mkdir components
> touch components/banner.svelte


├── app.html
├── lib
│   ├── components
│   │   └── banner.svelte

```

- Ora editiamo il file banner.svelte ed utilizziamo il codice di slide #28
  

---

# SvelteKit

Creiamo un componente

- Il componente **banner** è ora disponibile per essere utilizzato
- Per fare ciò dobbiamo ***importarlo*** nella pagina in cui vogliamo utilizzarlo
- Partiamo modificando la home e quindi editiamo il file *src/routes/+page.svelte*

```html
<script>
    import Counter from './Counter.svelte';
    ......
    import Banner from '../lib/components/banner.svelte'; // aggiungi questa linea
</script>
```

- Ora abbiamo a disposizione un nuovo tag HTML che si chiama **&lt;Banner&gt;**
- Questo è un componente Web e possiamo usarlo come qualsiasi altro tag html
- Come anticipato il paradigma dei web component offre infinite possibilità

---

# SvelteKit

Creiamo un componente

- Ora usiamo il componente nella home page

```html
<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		alla tua nuova <br />applicazione SvelteKit
	</h1>

	<h2>
		prova a editare il file <strong>src/routes/+page.svelte</strong>
	</h2>

	<Banner /> <!-- Utilizza Banner al posto di Counter-->
</section>
```

---

# SvelteKit

Creiamo un componente

- Ora facciamo partire l'applicazione e verifichiamo che tutto sia corretto

<br>
<img src="/media/svelte_015.png" class="mx-auto" width="500" />
 
---

# SvelteKit

Hello World: Esercitazione_06

- provare a modificare la pagina about aggiungendo il componente Banner 

<br>  
<img src="/media/svelte_016.png" class="mx-auto" width="550" />

- Consegnare su github il progetto modificato


---

# SvelteKit

Creiamo un componente

- Quindi una volta definito il componente, esso sarà riutilizzabile in qualsiasi pagina e sezione del nostro sito
- Ma ancor meglio potrà essere utilizzato anche in altri siti e pagine
- Quindi i componenti web ci permettono di implementare importanti proprietà dello sviluppo software, quali
  - incapsulamento
  - isolamento
  - riutilizzabilità del codice
- Per questi motivi lo sviluppo component base è oggi alla base di tutti i principali framework di sviluppo per il mondo web (web, mobile, games, web app, desktop app)

---

# SvelteKit

Variable Substitution

- Analizziamo più in dettaglio il componente Banner

```html
<script>
    let name = 'John Doe';
</script>

<h1>My name is {name}!</h1>
```

- Nella sezione JS del componente abbiamo solo definito una variabile di nome *name* ed assegnato un valore string
- Nella sezione HTML del componente abbiamo utilizzato la variabile all'interno di normale codice HTML tramite `{}`

<div style="background-color:green;color:yellow;padding: 10px;line-height: 30px;">

In svelte il costrutto {< var name >} rappresenta una sostituzione di variabili

</div>

- Pertanto quando il componente sarà compilato ogni occorrenza di `{< var name>}` sarà sostituito con il valore attribuito alla variabile *var name* 

---

# SvelteKit

Hello World: Esercitazione_07

- Provare a modificare il componente Banner in modo che visualizzi il proprio nome e cognome
- Verificare che il banner appaia modificato in tutte le pagine 

<br>  
<img src="/media/svelte_017.png" class="mx-auto" width="450" />

- Consegnare su github il progetto modificato


---

# SvelteKit

Code Execution

- In molti casi sostituire una variabile non è sufficiente, ma si rende necessario l'esecuzione di un codice JS
- Anche in questa situazione il costrutto `{}` viene in nostro aiuto
- Infatti svelte durante la compilazione, esegue il codice JS contenuto in `{}` e sostituisce il suo output nel codice HTML
- Vediamo un esempio

```html
<script>
    let name = 'John Doe';
</script>

<h1>My name is {name.toLocaleUpperCase()}!</h1>
```

- Quando questo codice viene compilato, viene prima richiamato il metodo *toUpperCase* sulla variabile(oggetto) name
- Successivamente il risultato di questa esecuzione viene sostituito *verbatim* nel codice HTML

---

# SvelteKit

Code Execution

<img src="/media/svelte_018.png" class="mx-auto" width="500" />


---

# SvelteKit

Code Execution

- Ovviamente non siamo limitati ai metodi degli oggetti standard di JS
- Ma possiamo anche richiamare nostre funzioni
- Per esempio vediamo come richiamare una funzione che prende il nostro nome e lo stampa al contrario tutto maiuscolo

```html
<script>
    let name = 'Antonio Mancuso';

    function reverse_string(str) {
        return str.split('').reverse().join('').toUpperCase();
    }
</script>

<h1>My name is {reverse_string(name)}!</h1>
```


---

# SvelteKit

Code Execution

- Quando questo codice viene compilato, viene prima richiamato la nostra funzione *reverse_string* 
- Successivamente il risultato di questa esecuzione viene sostitutito *verbatim* nel codice HTML

<br>
<img src="/media/svelte_019.png" class="mx-auto" width="400" />


---

# SvelteKit

- Come abbiamo visto con semplici esempi, il meccanismo dei componenti di Svelte è molto versatile
- Permette la definizione di componenti indipendenti rendendo più facile lo sviluppo e riducendo gli errori
- Il meccanismo della sostituzione delle variabili e del code execution sono molto utili nello sviluppo di applicazioni web moderne
- Svelte rende tutto ciò semplicissimo e più semplice rispetto ad altri framework
- Per questo e altri motivi è un framework in veloce ascesa nel panorama dello sviluppo web

- Ora vediamo come creare un progetto Svelte da zero, senza scaffolding
- Questo ci permetterà di comprendere altri meccanismi e come è realmente organizzata un'applicazione sveltekit

---

# SvelteKit

Creazione Web App: scaffolding del progetto

- Creiamo un nuovo progetto chiamato WebApp

```bash
> npm create svelte@latest WebApp

create-svelte version 4.2.0

┌  Welcome to SvelteKit!
│
◆  Which Svelte app template?
│  ○ SvelteKit demo app
│  ● Skeleton project (Barebones scaffolding for your new SvelteKit app)
│  ○ Library project
└
◇  Add type checking with TypeScript?
│  No
│
◇  Select additional options (use arrow keys/space bar)
│  none
│
└  Your project is ready!
```

---

# SvelteKit

Creazione Web App: scaffolding del progetto

- Questa volta è stato solo creato il minimo indispensabile

<br><br>
<img src="/media/svelte_020.png" class="mx-auto" width="400" />

- Creeremo uno scheletro di una semplice Web App senza spendere troppo tempo sull'aspetto estetico (HTML e CSS sono dati per scontato in questa lezione)
- L'obiettivo è comprendere il funzionamento e l'organizzazione di un'app sveltekit

---

# SvelteKit

Creazione Web App: scaffolding del progetto

- Iniziamo con la creazione del `layout` della pagina
- Il ***layout*** della pagina è il contenitore principale della nostra applicazione
- Esso sarà sempre visualizzato in ciascuna pagina del sito
- Il vantaggio principale è che in questo modo il layout sarà scritto una sola volta ed utilizzato per tutte le pagine
- Questo meccanismo implementa il principio [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (Don't Repeat Yourself) molto importante nello sviluppo del software
- Creiamo quindi un file chiamato `+layout.svelte` in ***src/routes***

```bash
src
├── app.html
└── routes
    ├── +layout.svelte <--- layout
    └── +page.svelte   <--- home page
```

- Inseriamo il codice HTML e CSS
  
---

# SvelteKit

Creazione Web App: il layout

<img src="/media/svelte_021.png" class="mx-auto" width="400" />

---

# SvelteKit

Creazione Web App: il layout


<img src="/media/svelte_022.png" class="mx-auto" width="400" style="position: relative; left: -200px;"/>
<img src="/media/svelte_023.png" class="mx-auto" width="360" style="position: relative; left: 200px;top: -500px;"/>


---

# SvelteKit

Creazione Web App: il layout

<img src="/media/svelte_024.png" class="mx-auto" width="600" />


---

# SvelteKit

Creazione Web App: il layout

- Abbiamo definito il layout della nostra applicazione, composto da:
  - header
  - navbar
  - main content area (article)
  - footer

- Le pagine che andremo a sviluppare verranno visualizzate nel main content area 

---

# SvelteKit

Creazione Web App: il layout

- Importante notare che nello style del layout abbiamo modificato lo stile globale del body
- Per far ciò abbiamo usato il costrutto `:global(<selettore>)`

<br>
<img src="/media/svelte_025.png" class="mx-auto" width="400" />

- Ciò è necessario in quanto lo style del componente (layout è un componente) è **scoped**
- In altre parole lo stile di un componente è confinato al solo componente stesso e non può modificare lo stile di altri componenti
- L'uso di *:global* ci permette di fare un'eccezione a questa regola

<br>
<Banner bg="green" fg="yellow">
Si suggerisce di non abusare di questa possibilità in quanto rende il codice meno leggibile e meno comprensibile
</Banner>


---

# SvelteKit

Component Slot

- Come si vede al momento la nostra app non visualizza la home page nella main content area
- Questo perché al momento il componente layout NON include nessuna altro componente (home page)
- Per poter risolvere questo problema dobbiamo ricorrere ad un concetto di Svelte chiamato `Component Slots`
- In pratica in modo analogo ai tag HTML che possono avere un contenuto

```html
<div>
	<p>Io sono figlio di div</p>
</div>
``` 

- Anche un componente Svelte può avere un contenuto (o figlio) tramite il costrutto `<slot />`
- In altre parole all'interno di un componente Svelte possiamo decidere dove visualizzare il contenuto del "figlio" usando `<slot />` 

---

# SvelteKit

Component Slot

- Modifichiamo +layout.svelte aggiungendo lo slot nella sezione article

```html
... 
   <article>
      <slot />
   </article>
...
```

- In questo modo nella sezione article comparirà il contenuto del componente correntemente in utilizzo (home page o +page.svelte in src/routes)

---

# SvelteKit

Component Slot

<img src="/media/svelte_026.png" class="mx-auto" width="650" />


---

# SvelteKit

Hello World: Esercitazione_08

- Provare a modificare la home page in modo che appaia come in figura

<br>  
<img src="/media/svelte_027.png" class="mx-auto" width="580" />

- Consegnare su github il progetto modificato


---

# SvelteKit

Pagina Chi Sono

- Adesso creiamo la pagina "Chi Sono"
- In questa pagina faremo una breve introduzione di noi stessi
- E' importante che nella descrizione di noi stessi includiamo cognome, nome ed età (questo ci sarà utile dopo)
- Quindi per creare la pagina "Chi Sono" creiamo una directory in modo da ottenere questo risultato


```bash
src
├── app.html
└── routes
    ├── chi_sono     <---------- routes corrispondente alla pagina
    │   └── +page.svelte  <------ componente o pagina HTML
    ├── +layout.svelte
    └── +page.svelte
```

---

# SvelteKit

Pagina Chi Sono

+page.svelte

<br>  
<img src="/media/svelte_029.png" class="mx-auto" width="600" />


---

# SvelteKit

Pagina Chi Sono

- Ora dobbiamo collegare la nuova pagina "Chi Sono" con la barra di navigazione
- Basta modificare il link in questo modo

<br>
<img src="/media/svelte_030.png" class="mx-auto" width="600" />
<br>

- In tal modo quando clicchiamo sul link Chi Sono la pagina omonima verrà visualizzata nella main content area


---

# SvelteKit

Pagina Chi Sono

<img src="/media/svelte_028.png" class="mx-auto" width="650" />


---

# SvelteKit

Il componente WhoAmI

- Ora trasformiamo la pagina "Chi Sono" in modo che visualizzi un solo componente chiamato ***WhoAmI***
- Quindi creiamo un nuovo componente ***WhoAmI***

```bash
src
├── app.html
├── lib
│   └── components
│       └── who_am_i.svelte <--- componente WhoAmI
└── routes
    ├── chi_sono
    │   └── +page.svelte
    ├── +layout.svelte
    └── +page.svelte
```


---

# SvelteKit

Il componente WhoAmI

who_am_i.svelte


<img src="/media/svelte_031.png" class="mx-auto" width="600" />
<br>

- Ora modifichiamo la pagina Chi Sono in modo che visualizzi il componente

<br>
<img src="/media/svelte_032.png" class="mx-auto" width="600" />



---

# SvelteKit

Il componente WhoAmI

<img src="/media/svelte_033.png" class="mx-auto" width="550" />


---

# SvelteKit

Props

- Ora tramite un meccanismo di Svelte che si chiama `Props` (Properties) vogliamo rendere il componente parametrico
- In altre parole vogliamo fare in modo che nome, cognome e età non siano scritti direttamente nel componente WhoAmI
- Al contrario vogliamo che questi siano dei parametri che vengono passati dal chiamante (la pagina Chi Sono)

<br>
<Banner bg="green" fg="yellow">Tramite le Props di Svelte possiamo quindi creare dei componenti parametrici e quindi più facilmente riutilizzabili in altre pagine o altre applicazioni web</Banner>

---

# SvelteKit

Props

- In Svelte, all'interno di un componente per dichiarare un parametro o `proprietà` si utilizza la keyword `export`
- Questa keyword preceduta alla dichiarazione di una variabile, indica al compilatore che il valore della variabile viene fornito dall'esterno del componente
- In altre parole dice a Svelte che questa variabile viene passata dal chiamante (a tutti gli effetti rendendo la variabile export come un parametro di una funzione in C)

Esempio

```js
export let nome;  //dichiara la variabile nome come parametro fornito dal chiamante
export let cognome = "Rossi"; //variabile esterna con valore di default Rossi
export let eta; //dichiara la variabile nome come parametro fornito dal chiamante
```

<br>

- Il meccanismo delle `Props` di Svelte è molto potente e di facile utilizzo

---

# SvelteKit

Props

- Pertanto riscriviamo il componente WhoAmI utilizzando le ***Props***

<br>
<img src="/media/svelte_034.png" class="mx-auto" width="700" />

<br>

- Abbiamo usato il *variable substitution di svelte* per utilizzare i parametri all'interno del corpo HTML del componente

---

# SvelteKit

Props

<img src="/media/svelte_035.png" class="mx-auto" width="750" />

<br>
<Banner bg="green" fg="yellow">
Siccome non abbiamo modificato il chiamante, vengono utilizzati i valori di default per le props del componente
</Banner>

---

# SvelteKit

Props

- Modifichiamo ora il chiamante e cioè la pagina Chi Sono in modo da passare dei parametri corretti al componente WhoAmI
  
<br>
<img src="/media/svelte_036.png" class="mx-auto" width="750" />

---

# SvelteKit

Props

<img src="/media/svelte_037.png" class="mx-auto" width="750" />

---

# SvelteKit

Props

- Cosa succede se chiamo due volte il componente WhoAmI dalla pagina Chi Sono?
- Quello che ci aspettiamo: vengono visualizzati due componenti ognuno con i propri parametri

<br>
<img src="/media/svelte_038.png" class="mx-auto" width="700" />

---

# SvelteKit

Props

<img src="/media/svelte_039.png" class="mx-auto" width="600" />


---

# SvelteKit

Dynamic Attributes

- Come abbiamo visti le props e variabili contenute in un componente possono essere utilizzate per generare del contenuto dinamico
- Tuttavia possono anche essere utilizzate come attributi dei tag HTML
- In questo caso Svelte parla di `Dynamic Attributes`
- Per esempio per definire il src di un immagine in modo dinamico si può fare così

```html
<img src={url} >
```
  
- In questo modo la sorgente dell'immagine non sarà statica ma dipenderà dal valore della variabile url
- Ovviamente cambiando il valore della variabile l'immagine verrà automaticamente aggiornata in modo dinamico


---

# SvelteKit

Dynamic Attributes

- Per comprendere meglio i ***Dynamic Attributes*** modifichiamo il componente WhoAmI aggiungendo la nostra foto

<img src="/media/svelte_040.png" class="mx-auto" width="700" />

---

# SvelteKit

Dynamic Attributes

- Possiamo usare come dynamic attribute una variabile esterna

<img src="/media/svelte_041.png" class="mx-auto" width="700" />


---

# SvelteKit

Dynamic Attributes


<img src="/media/svelte_042.png" class="mx-auto" width="550" />


---

# SvelteKit

Dynamic Attributes: shorthand

- Prima abbiamo scritto

```html
<img src={url} >
```

- Immaginando che la variabile si chiami src, scriveremo

```html
<img src={src} >
```

- Questo risulta abbastanza ridondante, pertanto Svelte ci semplifica la vita mettendo a disposizione degli ***shorthand*** o delle scorciatoie
- Quindi in questo caso potremmo scrivere

```html
<img {src} >
```

- Pertanto le due notazioni sono perfettamente equivalenti e sortiscono lo stesso effetto

```html
<img src={src} > vs <img {src} >
```

---

# SvelteKit

Dynamic Attributes: Esercitazione_09

- Modificare il componente WhoAmI in modo da passare la larghezza dell'immagine come parametro
- Utilizzare lo shorthand per il dynamic attribute

- Consegnare su github il progetto modificato


---

# SvelteKit

Bindings

- Come visto i dati e le props si propagano dall'alto al basso, dal componente chiamante verso il componente figlio
- Tuttavia spesso in un applicazione web è utile che questa propagazione possa avvenire nel verso opposto

<br>
<Banner fg="yellow" bg="green">
Il binding permette la propagazione del valore di una variabile di un componente al componente chiamante o padre
</Banner>

<br>

- Uno scenario classico è fare il binding della props di un input text ad una variabile del componente chiamante
- In questo modo sarà facilissimo ed immediato accedere al valore dell'input text (pensate quanto è macchinoso in vanilla JS)


---

# SvelteKit

Binding: Esercitazione_10

- Per comprendere il meccanismo del binding abbiamo bisogno di una nuova pagina nella nostra app
- Creare una nuova pagina chiamata **Input**
- Creare il relativo menu nella barra nav e linkare la pagina

<br>
<img src="/media/svelte_043.png" class="mx-auto" width="650" />

- Consegnare su github il progetto modificato


---

# SvelteKit

Bindings

- Ora modifichiamo la pagina input aggiungendo un input text box e creando un binding con una variabile

<br>
<img src="/media/svelte_044.png" class="mx-auto" width="400" />

---

# SvelteKit

Bindings

<img src="/media/svelte_045.png" class="mx-auto" width="600" />

- Come si vede le variabili sono sostituite dal valore *undefined*
- Questo succede perché abbiamo creato il binding tra il contenuto dei input text (undefined) e le variabili nome, cognome e eta
- Compilando i campi la pagina si aggiornerà in modo automatico e dinamico
- Anche in questo caso realizzare la stessa cosa in vanilla JS sarebbe molto più laborioso

---

# SvelteKit

Bindings

<img src="/media/svelte_046.gif" class="mx-auto" width="700" />

---

# SvelteKit

Bindings

<div style="width:50%;">

- Vediamo un altro esempio dell'uso del binding
- Modificare la pagina Input nel seguente modo
- In questo caso creiamo un binding tra la checkbox e la variabile *confermato*
- Poi settiamo tramite dynamic attributes l'attribute *disabled* del pulsante
- Pertanto il pulsante diventa attivo solo se l'utente ha confermato selezionando la checkbox

</div>

<img src="/media/svelte_047.png" class="mx-auto" width="450" style="position:relative;top: -300px;right:-250px;"/>


---

# SvelteKit

Bindings

<img src="/media/svelte_048.gif" class="mx-auto" width="700" />

---

# SvelteKit

Binding: Esercitazione_11

- Modificare la pagina *Input* in modo che venga aggiunto un nuovo input text per leggere in input la residenza
- Utilizzare il meccanismo del binding

<br>
<img src="/media/svelte_049.png" class="mx-auto" width="750" />

- Consegnare su github il progetto modificato


---

# SvelteKit

La pagina e il component Counter

- Realizziamo ora la pagina Counter e linkiamola alla nav bar (si lascia come esercizio agli studenti)

<br>
<img src="/media/svelte_050.png" class="mx-auto" width="800" />


---

# Svelte

Stateful component

- Uno dei problemi tradizionali dello sviluppo di app web è la gestione dello stato
- Questo problema è intrinseco in quanto il protocollo HTTP è **stateless** o senza stato
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
	let counter = 0; // stato di un contatore
</script>
```

---

# Svelte

Stateful component

- Ma come si aggiorna lo stato di un componente?
- Altri framework come Vue o React, rendono questa operazione poco intuitiva
- Al contrario una cosa grandiosa di Svelte è che non è necessario fare nulla di speciale per aggiornare lo stato di un componente.

```html
<script>
	let counter = 0;

	function incrementa() {
		counter++;
	}
</script>
``` 
<br>

- In altre parole in Svelte, per aggiornare lo stato di un componente, basta solo un'operazione di assegnazione in qualsiasi parte del componente 


---

# SvelteKit

La pagina e il component Counter

- Ora realizziamo un componente chiamato *Counter* (*counter.svelte*)
- Questo componente permette di incrementare/decrementare un contatore 
- Il valore iniziale è una props esterna con default (zero) 0 

<br>
<img src="/media/svelte_051.png" class="mx-auto" width="500" />

---

# SvelteKit

La pagina e il component Counter


<img src="/media/svelte_054.png" class="mx-auto" width="600" />

---

# SvelteKit

La pagina e il component Counter

**counter.svelte (script)**

<img src="/media/svelte_052.png" class="mx-auto" width="700" />

- Utilizziamo icone e font di google (sono molto utili)
- Da notare l'uso della sezione `<svelte:head>`

---

# SvelteKit

La pagina e il component Counter

**counter.svelte (html)**

<img src="/media/svelte_053.png" class="mx-auto" width="600" />

---

# SvelteKit

La pagina e il component Counter

**counter.svelte (css)**

<img src="/media/svelte_055.png" class="mx-auto" width="300" style="position: relative; top: -10px; right: 100px;"/>
<img src="/media/svelte_056.png" class="mx-auto" width="300" style="position: relative; top: -350px; right: -250px;"/>

---

# SvelteKit

La pagina e il component Counter

<img src="/media/svelte_057.png" class="mx-auto" width="800" />


---

# SvelteKit

DOM Events

- A questo punto il nostro componente **Counter** viene visualizzato correttamente
- E se il chiamante passa un valore iniziale per *counter* questo viene visualizzato correttamente 
- Tuttavia se interagiamo con il componente, premiamo il pulsante `+` o il pulsante `-` non succede nulla
- Ciò è normale perché quando premiamo su uno dei pulsanti **VIENE** generato un evento, ma **NON** viene gestito dal nostro componente
- Quindi in pratica l'evento viene perso e pertanto nessuna operazione particolare viene eseguita
- Quindi **E' NECESSARIO** gestire gli eventi del DOM e del nostro componente
- Svelte rende questa gestione estremamente facile e intuitiva e molto più facile e veloce rispetto a vanillaJS o altri tipi di framework

---

# SvelteKit

DOM Events

- Ogni componente HTML emette degli eventi (mouse click, keyboard press, resize, load, ...)
- Per poter gestire questi eventi è necessario specificare due elementi
  1. `event handler`: una funzione che gestisce l'evento e che viene invocata solo al verificarsi dell'evento stesso
  2. `event hook`: "un posto" a cui agganciare/collegare l'event handler

<br>
<img src="/media/svelte_058.png" class="mx-auto" width="350" />

---

# SvelteKit

DOM Events

<img src="/media/svelte_058.png" class="mx-auto" width="350" />

<br>

- Quando l'utente fa click sul pulsante, viene invocata ed eseguita la funzione *button_handler*
- In questo semplicissimo modo Svelte permette una facile gestioni degli eventi DOM
- Svelte permette anche di utilizzare un `inline handler`

<br>

```js
<button on:click={() => counter++}>Premi Qui</button>
```


---

# SvelteKit

DOM Events

<div style="width:50%;">

- Aggiungiamo ora un event handler per il pulsante + ed uno per il pulsante -
- Modifichiamo counter.svelte nel seguente modo

</div>

<img src="/media/svelte_059.png" class="mx-auto" width="450" style="position:relative; left:250px;top:-170px;"/>


---

# SvelteKit

DOM Events

- Bene in questo modo quando l'utente clicca sul pulsante + il contatore si incrementa e viceversa quando preme - si decrementa di un'unità
- Da notare che il valore del contatore viene aggiornato automaticamente senza la necessità di nessuna operazione da parte dello sviluppatore (in vanilla JS sarebbe stato molto più laborioso ottenere lo stesso effetto)
- Quindi gli handler agiscono solo sullo stato del componente (il valore della variabile counter) e non si occupano della parte di visualizzazione che è a carico di Svelte

---

# SvelteKit

DOM Events

<img src="/media/svelte_060.gif" class="mx-auto" width="700" />


---

# SvelteKit

Component Bindings

- In molti casi è necessario propagare il valore dello stato del componente al componente chiamante
- Come possiamo fare in modo che il valore della variabile counter venga condiviso con il componente chiamante (pagina)?
- Per realizzare quanto descritto possiamo utilizzare il concetto di `Component Binding`
- In modo analogo al binding dei valori dei tag HTML, possiamo creare, nel chiamante, un binding alle props del componente
- Nel nostro caso la props counter è esposta al chiamante (*extern*) e quindi possiamo fare un binding a tale variabile
- Pertanto ogni volta che la variabile counter cambierà anche la variabile con cui abbiamo fatto il binding cambierà

---

# SvelteKit

Component Bindings

- Modifichiamo la pagina counter nel seguente modo

<br>
<img src="/media/svelte_061.png" class="mx-auto" width="700" />


---

# SvelteKit

Component Bindings

- Come si vede dall'esempio il binding di props dei nostri componenti si implementa nel seguente modo

```html
<Componente bind:props={variabile_locale}>
```

dove:
- `props`: è la proprietà del componente a cui vogliamo fare il binding
- `variabile_locale`: è la variabile, locale al chiamante, che vogliamo "collegare" (bind) alla props del componente

<br>

<Banner fg="yellow" bg="green">
Importante notare che il bind è bidirezionale
</Banner>

<br>

- Perciò se cambio il valore di *variabile_locale* cambierà anche il valore di *props*
- E viceversa: se cambia il valore di *props* cambia il valore di *variabile_locale*

---

# SvelteKit

Component Bindings

<img src="/media/svelte_062.gif" class="mx-auto" width="700" />

---

# SvelteKit

DOM Events: Esercitazione_12

- Creare un nuovo componente chiamato DoubeClounter (double_counter.svelte)
- Questo componente funziona in modo simile a Counter, ma quando l'utente preme + il suo valore aumenta di due unità, mentre quando preme - il suo valore viene decrementato di 3 unità
- Aggiungere il componente alla pagina counter
- Tramite il component binding visualizzare nella pagina counter anche il valore del componente DoubleCounter

- Consegnare su github il progetto modificato


---

# SvelteKit

Logic Statements

- Come sappiamo HTML non è un linguaggio di programmazione quindi non ha costrutti logici o iterativi
- Tuttavia spesso è necessario visualizzare un blocco di HTML in modo condizionale, in funzione di uno stato o variabile
- Anche in questo scenario, Svelte ci viene in aiuto in maniera semplice ed elegante attraverso il concetto di `logic blocks`
- Il funzionamento è molto semplice, svelte mette a disposizione il seguente costrutto

```html
{#if <condizione>}
    ....
    <blocco HTML>
    ....
{:else}
    ....
    <blocco HTML alternativo>
    ....
{/if}
```

---

# SvelteKit

Logic Statements

- Pertanto se la condizione è vera viene visualizzato il *&lt;blocco HTML&gt;* altrimenti viene visualizzato il *&lt;blocco HTML alternativo&gt;*
- In questo modo abbiamo aggiunto al puro HTML una delle capacità proprie di un linguaggio di programmazione
- Ma vediamo un esempio modificando la pagina Counter in modo che se il contatore è &lt; 5 visualizzi la scritta in HML con colore rosso e in caso contrario con colore verde


---

# SvelteKit

Logic Statements

- Modifichiamo la pagina counter nel seguente modo

<br>
<img src="/media/svelte_063.png" class="mx-auto" width="450" />

---

# SvelteKit

Logic Statements

- Come vedremo in seguite ci sono modi più efficienti per raggiungere lo stesso risultato
- Ma quest'esempio è perfetto per capire l'uso dei blocchi condizionali in Svelte

<br>

<img src="/media/svelte_064.gif" class="mx-auto" width="600" />


---

# SvelteKit

Each block

- Un'altro costrutto molto utile, proveniente dai linguaggi di programmazione, ed assente in HTML è il `ciclo`
- Spesso in HTML è necessario replicare codice per ottenere una lista di elementi (pensa ad una foto gallery, ad una lista non ordinata,...)
- Anche in questo scenario Svelte ci viene in aiuto.
- Se abbiamo la necessità di iterare una lista (array) di elementi, possiamo usare `Each block`

```html
{#each <array> as elemento}
    ...
    blocco HTML in cui uso {elemento}
    ...
{/each}
```

- In questo modo il blocco HTML sarà ripetuto tante volte quanti sono gli elementi dell'array o in altre parole sarà ripetuto un numero di volte pari alla lunghezza dell'array
- Questo rende la generazione di strutture HTML dinamiche molto semplice


---

# SvelteKit

Each block

- Vediamo un esempio che visualizza una lista di elementi nella pagina Counter
- Modifica la pagina counter nel seguente modo

<br>
<img src="/media/svelte_065.png" class="mx-auto" width="420" />

---

# SvelteKit

Each block

<img src="/media/svelte_066.png" class="mx-auto" width="650" />


---

# SvelteKit

Each block

- Spesso è utile accedere all'indice dell'iterazione
- Per fare ciò basta modificare il costruttore nel seguente modo

```html
{#each <array> as elemento, indice}
    ...
    blocco HTML in cui uso {elemento} e {indice}
    ...
{/each}
```

- Quindi modifichiamo la pagina in questo modo

<br>
<img src="/media/svelte_067.png" class="mx-auto" width="450" />0

---

# SvelteKit

Each block

<img src="/media/svelte_068.png" class="mx-auto" width="650" />


---

# SvelteKit

Advances Styling

- Nell'esempio del blocco condizionale abbiamo cambiato il colore della scritta, in funzione del valore di contatore, replicando l'HTML
- Questo metodo ha parecchi svantaggi, primo tra tutti la difficile manutenibilità. Se devo modificare qualcosa devo modificarlo in almeno due punti diversi sprecando tempo e essendo soggetto a potenziali errori
- Pertanto come anticipato, vediamo attraverso il concetto di `Advanced Styling` come risolvere questo problema in modo elegante
- Svelte ci permette di specificare qualsiasi attributo di un tag HTML con JS
- Pertanto nel nostro esempio quel che dobbiamo fare è cambiare la classe da rosso a verde solo in particolari condizioni. Modifichiamo la pagina counter nel seguente modo

<br>
<img src="/media/svelte_069.png" class="mx-auto" width="350" />


---

# SvelteKit

Advances Styling

- Quindi se il valore di contatore è &lt; 5 la classe assume il valore rosso, in caso contrario assume il valore verde
- Quindi abbiamo ottenuto lo stesso effetto di prima ma senza duplicare codice, rendendo la nostra app più compatta, più leggibile e più facile da mantenere
- Ci sono altre situazione in cui un elemento deve essere decorato con una classe in particolari condizioni
- In questo caso possiamo scrivere un codice simile a questo

```html
<h2 class={contatore < 5 ? 'rosso' : ''}>
    Il valore del contatore vale: {contatore}
</h2>
```

- il tag h2 assume la classe rosso se contatore è minore di 5 altrimenti non viene assegnata nessuna classe CSS

---

# SvelteKit

Advances Styling

- Questo è un caso così comune che Svelte ci fornisce un modo più compatto di scrivere questo codice
  
```html
<h2 class:rosso={contatore < 5}>
    Il valore del contatore vale: {contatore}
</h2>
```

- class:rosso è il nome della classe che vogliamo assegnare

- Così facendo otteniamo lo stesso risultato di prima ma in modo più compatto
- Spesso il nome della classe coincide con il nome della variabile da cui dipende. In questi casi è possibile scrivere il codice in modo ancora più compatto

```html
<h2 class:sottolineato>
    Il valore del contatore vale: {contatore}
</h2>
```

- se sottolineato == true allora viene applicata la classe sottolineato

---

# SvelteKit

Advances Styling

<img src="/media/svelte_070.png" class="mx-auto" width="450" style="position: relative; top:-80px;" />


---

# SvelteKit

Advances Styling

<img src="/media/svelte_071.png" class="mx-auto" width="700" />


---

# SvelteKit

Reactivity

- Come abbiamo visto negli esempi precedenti al centro di Svelte c'è un potente sistema di reattività per mantenere il DOM sincronizzato con lo stato dell'applicazione, ad esempio in risposta a un evento 
- Ovviamente questo processo non avviene in automatico, e Svelte "instrumenta" il codice in modo che al variare del valore della variabile il DOM venga aggiornato in modo coerente
- La reattività di Svelte non solo mantiene il DOM sincronizzato con le variabili della tua applicazione, come visto.
- Svelte può anche mantenere le variabili sincronizzate tra loro utilizzando dichiarazioni reattive. Questo meccanismo è molto potente e permette di scrivere codice in maniera facile che in vanilla JS sarebbe piuttosto tedioso
- Vediamo un esempio, modificando la pagina counter nel seguente modo

---

# SvelteKit

Reactivity

<img src="/media/svelte_072.png" class="mx-auto" width="500" />


---

# SvelteKit

Reactivity

- Questo costrutto non è comune e quindi non preoccuparti se non ti risulta subito chiaro.
- Il costrutto `$:`, introduce un blocco di JavaScript valido, che Svelte interpreta nel senso di "riesegui questo codice ogni volta che uno dei valori di riferimento cambia". 
- Pertanto siccome il valore di *doppio* dipende dal valore di *contatore*, ogni volta che *contatore* cambierà l'espressione verrà nuovamente calcolata (contatore * 2) e il risultato assegnato a *doppio*
- In questo modo possiamo correlare 2 o più variabili senza dover scrivere del codice condizionale
- Questa è una soluzione elegante e **UNICA di SVELTE**. 
- Non è presente nello stesso modo in nessun altro framework JS
- In generale il costrutto reattivo assume la seguente forma

```html
$: {
    ....
    codice JS
    ...
}
```

---

# SvelteKit

Reactivity


<img src="/media/svelte_073.gif" class="mx-auto" width="650" />

---

# SvelteKit

Reactivity: Esercitazione_13

- Modificare la pagina counter in modo che utilizzando la reattività, il valore della variabile sottolineato diventi true il valore di DoubleCounter è pari e diventi false quando tale valore è dispari

- Consegnare su github il progetto modificato


---

# SvelteKit

Component Events

- Come visto in precedenza, con Svelte è facilissimo gestire gli eventi del DOM
- Chiaramente sarebbe molto utile avere la stessa possibilità per i componenti sviluppati da noi
- Svelte ci viene incontro per risolvere questo problema con il meccanismo del `Component Events`
- In altre parole possiamo fare in modo che i nostri componenti emettano degli eventi e che il chiamante si registri su questi eventi e li gestisca tramite un handler, esattamente come per gli eventi standard del DOM
- In altre parole, esattamente come un componente HTML standard, anche i nostri componenti diventano *emettitori* di eventi
- Questo è un meccanismo molto importante e Svelte lo rende semplicissimo
- Vediamo....

---

# SvelteKit

Component Events

- Vogliamo modificare il componente Counter in modo che ogni volta l'utente preme il tasto + venga emesso l'evento *plus* e ogni volta che preme - vengo emesso l'evento *minus*
- Il chiamante, la pagina counter, si registrerà su questi eventi e fornirà un handler per ciascuno di essi
- Per prima cosa dobbiamo fare in modo che il nostro componente sia in grado di generare eventi. Per questo usiamo il metodo ***createEventDispatcher***
- Il metodo *createEventDispatcher* deve essere chiamato durante l'inizializzazione del componente cioè all'inizio della sua sezione script
- Successivamente potremo generare ed emettere un evento tramite il metodo

```html
dispatch('<nome_evento>', {
			<oggetto o valore da trasportare nell'evento>
		});
```

- Quindi una volta eseguito il metodo *dispatch*, l'evento sarà generato e gestito dall'handler specificato dal chiamante, esattamente come per un componente standard HTML

---

# SvelteKit

Component Events

<div style="width:40%;">

- Iniziamo a  modificare il componente Counter in questo modo

</div>

<br>
<img src="/media/svelte_074.png" class="mx-auto" width="430" style="position:relative; top:-180px; left: 200px;"/>


---

# SvelteKit

Component Events

- Ora aggiungiamo il dispatcher alla pagina counter per gestire l'evento generato

<br>
<img src="/media/svelte_075.png" class="mx-auto" width="550" />


---

# SvelteKit

Component Events

<img src="/media/svelte_076.gif" class="mx-auto" width="800" />

---

# SvelteKit

Component Events

- Importante notare e ricordare che gli eventi dei componenti custom, al contrario dei componenti standard, vengono propagati solo al chiamante
- Quindi se abbiamo una gerarchia di componenti uno incluso nell'altro (come una matriosca), se vogliamo che l'evento generato dal componente più interno venga propagato fino al primo componente dovremo fare in modo che ogni componente intermedia faccia il forwarding dell'evento ricevuto

<br>
<img src="/media/svelte_077.png" class="mx-auto" width="250" />

---

# SvelteKit

Component Events: Esercitazione_14

- Aggiungere la generazione di due eventi distinti al componente DoubleCounter
- Intercettare e gestire nel componente chiamante i due eventi emessi da DoubleCounter

- Consegnare su github il progetto modificato


---

# SvelteKit

Stores

- Siccome i componenti Web implementano il concetto di incapsulamento, proprio della OOP, lo stato di un componente rimane invisibile agli altri componenti
- Abbiamo visto tramite il *Component Binding* e il *Component Events* come è possible condividere tale stato tra componenti gerarchicamente correlati
- Ma con questi metodi è impossibile condivider elo stato di un componente con un altro componente o pagina non correlato
- Per esempio,nel nostro caso, come visualizziamo il valore del contatore nella pagina About?
- Questo meccanismo è estremamente utile nello sviluppo di un'applicazione web di media complessità, sarà quasi certamente sicuro che ci saranno più componenti che devono condividere uno stato comune
- Svelte ci corre in aiuto con il meccanismo dello `Store`

---

# SvelteKit

Stores

<Banner bg="green" fg="yellow">

Uno <b>Store</b> in Svelte è un oggetto che permette di condividere un valore tra componenti non gerarchicamente correlati

</Banner> 

<br>

- Iniziamo creando lo store per contenere il valore del contatore e condividerlo tra componenti e pagine diverse

```bash
src/lib
├── components
│   ├── counter.svelte
│   └── who_am_i.svelte
└── js
    └── store.js
```

---

# SvelteKit

Stores

- Ecco il semplicissimo codice dello store

<br><br>

- Ora modifichiamo il componente Counter in modo che ogni volta che counter cambia venga aggiornato lo store

<img src="/media/svelte_078.png" class="mx-auto" width="250" style="position:relative; top:-200px; left: 50px;" />
<img src="/media/svelte_079.png" class="mx-auto" width="300" style="position:relative; top:-100px; left: 50px;" />


---

# SvelteKit

Stores

- Quindi ogni volta che l'utente preme + o -, il valore di counter cambia e viene anche aggiornato lo store
- In questo modo lo stato di Counter può essere condiviso con altre pagine o componenti
- Per dimostrare il funzionamento creiamo la pagina About che visualizza il valore dello store, o in altre parole lo stato interno del componente Counter

```bash
src/routes
├── about
│   └── +page.svelte
├── chi_sono
│   └── +page.svelte
├── counter
│   └── +page.svelte
├── input
│   └── +page.svelte
├── +layout.svelte
└── +page.svelte
```

- Non dimenticarti di linkare la pagina About alla navbar
  
---

# SvelteKit

Stores

- Ecco il codice della pagina About

<br>
<img src="/media/svelte_080.png" class="mx-auto" width="600" />

<br>

- Da notare che per accedere allo store sia in lettura che scrittura, è necessario anteporre il simbolo `$` in modo da differenziarlo da una normale variabile
- Quindi ora se l'utente interagisce con il componente Counter e poi passa alla pagina about vedrà visualizzato lo stato interno del componente che è memorizzato nello store

---

# SvelteKit

Stores

<img src="/media/svelte_081.gif" class="mx-auto" width="600" />


---

# SvelteKit

Stores: Esercitazione_15

- Modificare il codice dell'applicazione in modo che nella pagina About venga visualizzato anche il valore del componente DoubleCounter
  
- Consegnare su github il progetto modificato



---

# SvelteKit

Conclusioni

- In queste lezioni abbiamo introdotto il modernissimo framework SvelteKit che si basa sul linguaggio e compilatore Svelte
- Svelte è uno strumento formidabile per lo sviluppo di applicazioni Web
- Svelte rende immediate molte operazioni che in vanilla JS sarebbero alquanto complesse
- SvelteKit si distingue dagli altri framework per velocità, compattezza e modernità
- In queste lezioni abbiamo trattato gli aspetti base di Svelte. Ci sono ovviamente altri aspetti più avanzati che esulano dai nostri scopi

<br>
<Banner fg="yellow" bg="green">
Svelte e SvelteKit sono strumenti utilissimi e potentissimi e sono la base per lo sviluppo FullStack di moderne applicazioni Web
</Banner>