---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://source.unsplash.com/collection/94734566/1920x1080
background: /cover.jpg
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
#highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
aspectRatio: '16_/9'
routerMode: 'hash'
as: 2024/2025
version: '1.1.0'

---  


# SvelteKit

Static Web Site e GitHub Pages

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

---

# SvelteKit

Static Web Site

- Come abbiamo visto SvelteKit è uno stupefacente framework **full stack**
- Ci permette di realizzare applicazioni
  - solo back-end
  - solo front-end
  - back-end e front-end (full stack)
- Le applicazioni che includono un back-end hanno bisogno di *node.js* pertanto devono essere eseguite su un server che dispone di node
- Tuttavia spesso, seguendo il nuovo paradigma `serverless` la nostra applicazione Web o sito, avrà solo un front-end
- In questo scenario non è necessario un server per eseguire l'applicazione
- E' sufficiente pubblicare il sito su un normale web server (tramite uno degli infiniti servizi disponibili - vedi GitHub Pages)

---

# SvelteKit

Static Web Site

- Per default SvelteKit crea un sito full-stack e quindi abbiamo bisogno di modificare questo comportamento per generare un sito completamente statico
- Esempio importante è [https://prof.mancusoa.it/](https://prof.mancusoa.it/)
- Questo blog è realizzato in SvelteKit e generato staticamente
- Infatti lo pubblico su github pages e non ho bisogno di un server node.js e del relativo servizio di hosting che può essere costoso
- Chiaramente siccome il sito sarà statico dobbiamo assicurarci di abilitare il pre-render in quanto le pagine NON possono essere di tipo SSR, ma necessariamente di tipo CSR
- Vediamo come creare un sito statico con SvelteKit e come publiccarlo su GitHub Pages
---

# SvelteKit

Esercitazione 01

- Crea sul tuo GitHub un repo  di nome `mystaticsvelte`
- Fai il clone sul tuo PC
- Crea un nuovo progetto svelte con

```bash
$ npm create svelte@latest mystaticsvelte                     
Need to install the following packages:
create-svelte@6.3.7
Ok to proceed? (y) 
```

<img src="/media/static_02.png" width="500" style="margin:auto;position:relative; left: 300px; top: -250px;">

---

# SvelteKit

Static Web Site

<img src="/media/static_03.png" width="500" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# SvelteKit

Static Web Site

- Ora è necessario installare il modulo per il rendering statico, che si chiama ***adapter-static***

```bash
# npm i -D @sveltejs/adapter-static
```

- Dopo di ciò edita il file ***svelte.config.js*** in questo modo

```js
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
            pages: 'docs',
            assets: 'docs',
            fallback: undefined,
            precompress: false,
            strict: true
        })
	}
};
export default config;
```

---

# SvelteKit

Static Web Site

- Aggiungiamo al nostro progetto il file  `+layout.js` nella directory `src/routes`

<br>

```js
export const prerender = true;
```

<br>

- Questo garantisce che le pagine sono tutte di tipo CSR e per ogni pagina avviene un pre-rendering
- Nota che in questo scenario la funzione *load* può ancora essere utilizzata per effettuare delle funzioni server side, ma ciò p possibile solo durante la compilazione del sito (***build phase***) e non durante il **run-time** del sito
- Ottimo esempio di questo meccanismo è il mio blog dove durante il pre-rendering trasformo gli articoli scritti in markdown in HTML

---

# SvelteKit

Static Web Site

- Siccome GitHub Pages usa jekyll (il primo esempio importante di static web site generator scritto in ruby) i file e directory che iniziano con _(underscore) vengono ignorati
- Per evitare questo comportamento, basta aggiungere il file vuoto **.nojekyll** nella directory *docs*
- In questo modo saremo sicuri che il nostro sito o app generate con sveltekit venga servito correttamente (altrimenti ci sono degli errori 404)

Per evitare di dover creare il file *.nojekyll* tutte le volte a mano, modifichiamo il file *package.json* nel seguente modo

```js
...
"scripts": {
		"dev": "vite dev",
		"build": "vite build && touch docs/.nojekyll",
		"preview": "vite preview"
	},
...
```

---

# SvelteKit

Static Web Site

- Uno volta terminato lo sviluppo, basta fare il build del sito così

```bash
# npm run build
...
...
Run npm run preview to preview your production build locally.

> Using @sveltejs/adapter-static
  Wrote site to "docs"
  ✔ done
✓ built in 4.40s
```

---

# SvelteKit

Static Web Site

- Ora il tuo sito statico è disponibile nella directory `docs`

<br>

 ```bash
totale 16K
drwxrwxr-x 3 antonio antonio 4,0K lug 11 19:17 _app
-rw-rw-r-- 1 antonio antonio 1,6K lug 11 19:17 favicon.png
-rw-rw-r-- 1 antonio antonio 3,1K lug 11 19:17 index.html 
-rw-rw-r-- 1 antonio antonio 3,1K lug 11 19:17 .nojekyll 
 ```

<br>

- Come si vede c'è il file *index.html* che è la root del sito e tutte le altre pagine e risorse sono statiche
- Il contenuto di questa cartella può essere trasferito sul tuo hosting per andare direttamente online

---

# SvelteKit

Static Web Site

- Ora fai il push del progetto su github

<img src="/media/static_04.png" width="600" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# SvelteKit

Static Web Site

- Ora è necessario configurare GitHub Pages in modo che pubblichi il nostro sito statico

<img src="/media/static_05.png" width="600" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# SvelteKit

Static Web Site

- Ora basta attendere la pubblicazione del sito (qualche minuto)


<img src="/media/static_06.png" width="700" style="margin:auto;position:relative; left: 0px; top: 0px;">



---

# SvelteKit

Static Web Site

- Ora possiamo visitare il nostro sito pubblicato su github pages


<img src="/media/static_07.png" width="700" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# SvelteKit

Static Web Site

- Ed ecco il sito è disponibile su Internet per essere consultato da tutti


<img src="/media/static_08.png" width="700" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# SvelteKit

Static Web Site

- In questo modo ad ogni modifica del sito dobbiamo farne il `build` e fare il push sia del progetto che della directory *docs*
- Possiamo utilizzare una funzionalità di GitHub che si chiama `GitHub Actions`
  - Sono una funzionalità di GitHub che consente di automatizzare, personalizzare e orchestrare flussi di lavoro per lo sviluppo software direttamente all'interno di un repository GitHub
  - Sono un potente strumento di Continuous Integration (CI) e Continuous Delivery/Deployment (CD), che permette agli sviluppatori di automatizzare attività relative al progetto e al repository


---

# SvelteKit

Static Web Site

- Aggoungiamo un `GitHub Action` che avrà il compito ad ogni push di:
  - fare il pull del repository
  - fare il build del progetto (npm run build)
  - pubblicare il sito su GitHub Pages


<img src="/media/static_09.png" width="600" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# SvelteKit

Static Web Site

- Crea il file `/.github/workflows/deploy.yml` con questo contenuto

```yml
name: Deploy mystaticsite

on:
  push:
    branches:
      - main
permissions:
  contents: write

jobs:
  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 18
```

---

# SvelteKit

Static Web Site

```yml
      - name: Install dependencies
        run: npm i
      - name: Build website
        run: npm run build
      - name: Deploy pages
        uses: crazy-max/ghaction-github-pages@v2
        with:
          build_dir: docs
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

<br>

- Fate il push di questo file

---

# SvelteKit

Static Web Site

- Ora configuriamo GitHub Pages nel seguente modo


<img src="/media/static_10.png" width="700" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# SvelteKit

Static Web Site

- Da ora in poi ad ogni push del vostro sito l'Action farà il buil del sito per noi e lo pubblicherà online

<img src="/media/static_08.png" width="700" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

<img src="/media/hh04.webp" style="position:relative;top:-20px;">

