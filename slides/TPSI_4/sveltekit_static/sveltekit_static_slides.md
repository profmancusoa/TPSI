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


# SvelteKit

Static Web Site

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

---

# SvelteKit

Static Web Site

- Come abbiamo visto SvelteKit è uno stupefacente framework **full stack*
- Ci permette di realizzare applicazioni
  - solo back-end
  - solo front-end
  - back-end e front-end (full stack)
- Le applicazioni che includono un back-end hanno bisogno di *node.js* pertanto devono essere eseguite su un server che disponde di node
- Tuttavia spesso, e seguento il nuovo paradigma *serverless* la nostra applicazione Web o sito, avrà solo un front-end
- In questo scenario non è necessario un server per eseguire l'applicazione
- E' sufficiente pubblicare il sito su un normale web server (tramite uno degli infiniti servizi disponibili - vedi GitHub Pages)

---

# SvelteKit

Static Web Site

- Per default SvelteKit crea un sito full-stack e quindi abbiamo bisogno di modificare questo comportamento per generare un sito completamente statico
- Esempio importante è [https://profmancusoa.github.io/](https://profmancusoa.github.io/)
- Questo blog è realizzato in SvelteKit e generato staticamente
- Infatti lo pubblico su github pages e non ho bisogno di un server node.js e del relativo servizio di hosting che può essere costoso
- Chiaramete siccome il sito sarà statico dobbiamo assicurarci di abilitare il pre-render in quanto le pagine NON possono essere di tipo SSR, ma necessariamente di tipo CSR

---

# SvelteKit

Static Web Site

- Aggiungiamo al nostro file *+layout.svelte*, o se non presente al file *+page.server.js*

<br>

```js
export const prerender = true;
```

<br>

- Questo garantisce che le pagine sono tutte di tipo CSR e per ogni pagina avviene un pre-rendering
- Nota che in questo scenario la funzione *load* può ancora essere utilizzata per effettuare delle funzioni server side, ma ciò p possibile solo durante la compilazione del sito (***build phase***) e non durante il ***run-time** del sito
- Ottimo esempio di questo meccanismo è il mio blog dove durante il pre-rendering trasformo gli articoli scritti in markdown in HTML

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
            pages: 'build-static',
            assets: 'build-static',
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

- Ora uno volta terminato lo sviluppo, basta fare il build del sito così

```bash
# npm run build
...
...
Run npm run preview to preview your production build locally.

> Using @sveltejs/adapter-static
  Wrote site to "build-static"
  ✔ done
✓ built in 4.40s
```

---

# SvelteKit

Static Web Site

- Ora il tuo sito statico è disponibile nella directory `build-static`

 ```bash
totale 16K
drwxrwxr-x 3 antonio antonio 4,0K lug 11 19:17 _app
-rw-rw-r-- 1 antonio antonio   71 lug 11 19:17 __data.json
-rw-rw-r-- 1 antonio antonio 1,6K lug 11 19:17 favicon.png
-rw-rw-r-- 1 antonio antonio 3,1K lug 11 19:17 index.html 
 ```

- Come si vede c'è il file *index.html* che è la root del sito e tutte le altre pagine e risorse sono statiche
- Il contenuto di questa cartella può essere trasferito sul tuo hosting per andare direttamente online
- Se usi Github Pages basta fare il push della directory e dopo pochi istanti il tuo sito sarà online

---

# SvelteKit

Esercitazione_01

- Creare un semplice sito in svelteKit, o usare uno già preparato in passato
- Fare il build statico
- Pubblicarlo su Github Pages
- Consegnare via email, il link pubblico al sito

<img src="/media/static_01.png" width="350" style="margin:auto;position:relative; left: 0px; top: 20px;">
