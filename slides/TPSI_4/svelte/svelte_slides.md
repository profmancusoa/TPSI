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
version: '1.1.2'

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

Framework pro vs cons

- L'uso di un frameowrk non è indispensabile: si tratta più che altro di uno dei tanti strumenti che lo sviluppatore ha a sua disposizione per programmare meglio e più velocemente. 
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
- Una pagina intera può essere è un componente.

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

- SvelteKit è un framework per app che risolve i difficili molti problemi comunini ad applicazioni pronte per la produzione:
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

# SvelteKit

Svelte Components

```html
<h1>My name is John Doe!</h1>
```

- Questo è un componente Svelte valido
- Include solo la parte di contenuto
- Non ha nessuno stuile e nessuna logica di controllo


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
- Utilizzeremo il progetto base per provare a analizzare e comprendere le principali carattristiche:
  - del linguaggio Svelte e delle principali funzionalità
  - dello sviluppo per componenti
  - delle funzioni più importanti di SvelteKit

- Di seguito i link alla documentazione e tutoria di Svelte e SvelteKit
  - [Svelte tutorial](https://svelte.dev/tutorial/basics)
  - [Tutorial Interattivo Svelte](https://learn.svelte.dev/tutorial/welcome-to-svelte)
  - [Introduzione a SvelteKit](https://kit.svelte.dev/docs/introduction)

***Questi link sono il riferimento per gli studenti e vi suggerisco di studiarli e di utilizzarli per tutto il tempo necessario ad apprendere Svlete e SvelteKit***

---

# SvelteKit

Hello World: Creare un Progetto SvelteKit

- Per sviluppare con Svelte e SvelteKit è necessario:
  - nodejs (almeno versione 18) ---> [Come installare nodejs su Linux](http://cedws)
  - npm
  - git
- Assicurati che siano instllati sul tuo sistema eseguendo i seguenti comandi:

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

- Spostati nella tua directory di lavoro (es: ~/tmp)
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

- Adesso un progetto base realizzato con SvelteKit è stato creato nella directory **hello-word-svelte-kit**
- Per terminare la creazione del progetto eseguire i seguenti comandi

```bash
> cd hello-word-svelte-kit  commento: mi sposto nella directory hello-word-svelte-kit
> npm i  commento: installo le dipendenze del progetto

added 42 packages, and audited 43 packages in 10s

3 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

```

- Se non si sono verificatri errori, il progetto è pronto per l'esecuzione


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

- Viene automaticamente aperta una fienstra del browser che punta al seguente indirizzo: [http://localhost:5173/](http://localhost:5173/)

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


---

# SvelteKit

Hello World: Esercitazione_02

- provare a modificare la home page del progetto in modo che appaia come in figura

<img src="/media/svelte_011.png" class="mx-auto" width="450" />

---

# SvelteKit

Hello World: Esercitazione_03

- provare a modificare il layout del progetto in modo che appaia come in figura
  
<img src="/media/svelte_012.png" class="mx-auto" width="550" />


---

# SvelteKit

Hello World: Esercitazione_04

- provare a modificare la pagina about in modo che appaia come in figura
  
<img src="/media/svelte_013.png" class="mx-auto" width="600" />


---

# SvelteKit

Hello World: Esercitazione_05

- provare a modificare il componente counter in modo che si incrementi o decrementi di due unità alla pressione dei pulsati + o -
  
<img src="/media/svelte_014.png" class="mx-auto" width="500" />

---

# SvelteKit

Hello World: Esercitazione_06

- Aggiungere all'applicazione il componente visto alle slide #28 e successive
- Visualizzarlo sia sulla pagina home che sulla pagina about

<img src="/media/svelte_015.png" class="mx-auto" width="500" />

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
