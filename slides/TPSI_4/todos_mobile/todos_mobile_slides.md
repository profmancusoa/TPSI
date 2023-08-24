---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: /cover.png
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
#highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
aspectRatio: '16_/9'
routerMode: 'hash'
as: 2023/2024
version: '1.0.1'

---  


# ToDoS Mobile

Sviluppo di un'app Mobile con Svelte e Framework7

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>



---

# ToDoS Mobile

Svelte e Framework7

- Dall'avvento degli smartphone, lo sviluppo di applicazioni mobili ha preso sempre più piede

<br>
<Banner padding=20px>
Un'applicazione mobile o (mobile app) è un'applicazione software progettata e realizzata per poter essere usata da smartphone, tablet e dispositivi mobili in genere.
</Banner>
<br>

- In effetti, oggi, qualsiasi prodotto e applicazione web ha una versione mobile
- Ormai l'uso dello smartphone è così pervasivo che risulta difficile poter immaginare di non fornire una versione mobile del proprio prodotto agli utenti (vedi GTT)

<img src="/media/mobile_01.png" width="450" style="margin:auto;position:relative; left: 0px; top: 10px;">

---

# ToDoS Mobile

Svelte e Framework7

- Lo sviluppo mobile, ha origini circa a metà degli anni 90 dello scorso secolo
- Tuttavia il numero di app era limitatissimo, sopratutto per la mancanza di HW adeguato
- Con l'avvento degli smartphone (iPhone nel 2007 e Android nel 2008) lo sviluppo subisce un'impennata esponenziale
  
<img src="/media/mobile_02.png" width="380" style="margin:auto;position:relative; left: 0px; top: -30px;">


---

# ToDoS Mobile

Svelte e Framework7

- Nel 2008 nascono App Store e Android Market (poi Google Play Store)
- Questo ha fornito agli sviluppatore un luogo dove distribuire le proprie applicazioni
- Questo ha reso lo sviluppo di app mobili mainstream ed oggi imprescindibile in qualsiasi strategia di prodotto
  
<img src="/media/mobile_03.png" width="380" style="margin:auto;position:relative; left: 0px; top: -30px;">


---

# ToDoS Mobile

Svelte e Framework7

<img src="/media/mobile_04.png" width="450" style="margin:auto;position:relative; left: -250px; top: 50px;">
<img src="/media/mobile_05.png" width="450" style="margin:auto;position:relative; left: 250px; top: -250px;">

---

# ToDoS Mobile

Svelte e Framework7

- Quindi lo sviluppo Mobile si estende su due piattaforme completamente diverse
- Da un lato iOS con il suo ecosistema proprietario (Xcode) e linguaggi (prima ObjectiveC, poi Swift)
- Dall'altro Android (Java poi Kotlin) con Android Studio

<img src="/media/mobile_06.png" width="400" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# ToDoS Mobile

Svelte e Framework7

- La necessità di sviluppare la propria applicazione per due ambienti completamente e linguaggi completamente diversi nel corso del tempo si è rivelata un problema
  - maggior costo di sviluppo
  - necessità di avere due team paralleli 
  - maggior tempo di sviluppo complessivo
  - maggior costo di manutenzione 
- Nello stesso periodo dell'evoluzione delle piattaforme mobili, anche le tecnologie Web hanno fatto passi da gigante
- Oggi, per i problemi evidenziate, lo sviluppo di applicazione mobili è fortemente orientato verso l'utilizzo di tecnologie web e il progressivo abbandono delle tecnologie native

---

# ToDoS Mobile

Svelte e Framework7

- Quindi possiamo riassumere i tipi di applicazioni mobili oggi in uso:
  - `Web App`: applicazioni puramente basate su tecnologie Web (HTML, CSS e JS) che sono cross-platform e hanno le caratteristiche di un normale sito web
  - `Native App`: applicazioni native per una specifica piattaforma
  - `Progressive Web App`: applicazioni ibride, sviluppate in tecnologia Web ma che si comportano come un'applicazione nativa
  
<img src="/media/mobile_07.png" width="350" style="margin:auto;position:relative; left: 0px; top: -40px;">

---

# ToDoS Mobile

Svelte e Framework7

- Le ***Progressive Web App*** (*PWA*) sono applicazioni
  - veloci
  - flessibili
  - multi-piattaforma partendo da un'unica code base
  - con funzionalità molto simile ad un'app nativa (*cordova, phonegap, capacitor*)
  - installabili sul telefono
  - distribuibili sui classici Store 

- Tutte queste caratteristiche fanno delle PWA un'ottimo metodo di sviluppo di applicazioni mobili, molto in voga al momento e con una forte espansione
  

---

# ToDoS Mobile

Svelte e Framework7

- Esempi di applicazioni PWA note
  
<img src="/media/mobile_08.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# ToDoS Mobile

Svelte e Framework7

- Nel corso del tempo si sono affermati molti ambienti di sviluppo e framework per applicazioni mobile ibride e PWA
  
<img src="/media/mobile_09.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# ToDoS Mobile

Svelte e Framework7

- Noi ci concentreremo su `Framework7`
- **Framework7**  è un framework gratuito e open source per sviluppare app mobili, desktop o Web con aspetto nativo. 
- È anche uno strumento i prototipazione indispensabile per mostrare il prototipo dell'app funzionante il prima possibile in caso di necessità.
- Framewok7 fornisce un set straordinario di componenti UI pronti all'uso ed estendibili a piacimento
- Permette di creare app Web, app Web progressive (PWA) e app iOS e Android con aspetto nativo.
- Può essere usato con qualsiasi framework (Vue, React, **Svelte** e anche JS vanilla)

---

# ToDoS Mobile

Svelte e Framework7

- Un vasto set di applicazioni è stato sviluppato con Framework7. [App Showcase](https://framework7.io/showcase/)
  
<img src="/media/mobile_10.png" width="700" style="margin:auto;position:relative; left: 0px; top: 10px;">


---

# ToDoS Mobile

Svelte e Framework7

<div style="width:50%">

- Il nostro obiettivo è sviluppare un'applicazione mobile per iOS e Android, che potrà essere installata sul proprio dispositivo
- L'applicazione si chiama `ToDoS Mobile` e funziona esattamente uguale a ToDoS Web e permette di gestire la propria todo list
- Anche in questo caso svilupperemo l'applicazione usando HTML, CSS, JS e  Svelte
  
</div>

<img src="/media/mobile_11.png" width="400" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# ToDoS Mobile

Svelte e Framework7

- Per prima cosa dobbiamo installare **Framework7**

```bash
# npm i framework7-cli
#
# npx framework7 -V         
8.0.4
```

<br>

- Ora nella tua directory di lavoro, crea la directory `todos-mobile`
- Entra nella directory ed esegui il seguente comando per avviare il wizard di creazione dello skeleton dell'app

<br>

```bash
# framework7 create --ui
```
<br>

- Si aprirà il browser in automatico

---

# ToDoS Mobile

Svelte e Framework7

<img src="/media/mobile_12.png" width="550" style="margin:auto;position:relative; left: 0px; top:-10px;">


---

# ToDoS Mobile

Svelte e Framework7

<img src="/media/mobile_13.png" width="600" style="margin:auto;position:relative; left: 0px; top:-10px;">

---

# ToDoS Mobile

Svelte e Framework7

<img src="/media/mobile_14.png" width="550" style="margin:auto;position:relative; left: 0px; top:-10px;">


---

# ToDoS Mobile

Svelte e Framework7

- Infine premi `Create App` e attendi qualche istante
  
<img src="/media/mobile_15.png" width="500" style="margin:auto;position:relative; left: -230px; top: 50px;">
<img src="/media/mobile_16.png" width="400" style="margin:auto;position:relative; left: 250px; top: -240px;">

---

# ToDoS Mobile

Svelte e Framework7

- Il wizard ha creato lo scheletro di un'applicazione con le caratteristiche richieste

<br>

```bash
drwxrwxr-x 2 antonio antonio   4096 lug 13 16:08 assets-src
drwxrwxr-x 2 antonio antonio   4096 lug 13 16:07 build
-rw-rw-r-- 1 antonio antonio    358 lug 13 16:07 framework7.json
-rw-rw-r-- 1 antonio antonio    408 lug 13 16:08 .gitignore
-rw-rw-r-- 1 antonio antonio   1088 lug 13 16:08 package.json
-rw-rw-r-- 1 antonio antonio 360123 lug 13 16:08 package-lock.json
-rw-rw-r-- 1 antonio antonio     70 lug 13 16:08 postcss.config.js
drwxrwxr-x 3 antonio antonio   4096 lug 13 16:07 public
-rw-rw-r-- 1 antonio antonio   2034 lug 13 16:08 README.md
drwxrwxr-x 8 antonio antonio   4096 lug 13 16:08 src
-rw-rw-r-- 1 antonio antonio    666 lug 13 16:08 vite.config.js
-rw-rw-r-- 1 antonio antonio    270 lug 13 16:08 workbox-config.js
drwxrwxr-x 2 antonio antonio   4096 lug 13 16:07 www
```

- Installa le dipendenze con

```bash
# npm i
```

---

# ToDoS Mobile

Svelte e Framework7

<div style="width: 50%">

- Per eseguire l'applicazione in dev mode, esegui

```bash
# npm run start
```

</div>

<img src="/media/mobile_17.png" width="400" style="margin:auto;position:relative; left: 250px; top: -180px;">


---

# ToDoS Mobile

Svelte e Framework7

- Siccome abbiamo creato una PWA, possiamo accedere all'app via web e installarla come un'applicazione nativa che funziona anche off-line
- Per far ciò però abbiamo bisogno di accedere all'app con HTTPS. 
- Il metodo più veloce è utilizzare uno strumento che si chiama [ngrok](https://ngrok.com/)
- Crea un account gratuito e scarica ngrok
  
<img src="/media/mobile_18.png" width="600" style="margin:auto;position:relative; left: 0px; top: 10px;">

---

# ToDoS Mobile

Svelte e Framework7

- Ora facciamo il build di produzione della nostra app

```bash
# npm run build

✓ 331 modules transformed.
../www/assets/manifest-9ed803ea.json                    0.82 kB │ gzip:   0.26 kB
../www/index.html                                       1.52 kB │ gzip:   0.79 kB
../www/assets/Framework7Icons-Regular-a42aa071.woff2  107.42 kB
../www/assets/index-4a194747.css                      533.35 kB │ gzip:  77.60 kB
../www/assets/index-7b03936a.js                       803.97 kB │ gzip: 220.94 kB

(!) Some chunks are larger than 500 kBs after minification. Consider:
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
✓ built in 14.01s
The service worker files were written to:
  • /home/antonio/WORK/ITI_Agnelli/Materie/TPSI/code/todos-mobile/www/service-worker.js
  • /home/antonio/WORK/ITI_Agnelli/Materie/TPSI/code/todos-mobile/www/service-worker.js.map
  • /home/antonio/WORK/ITI_Agnelli/Materie/TPSI/code/todos-mobile/www/workbox-2b403519.js
  • /home/antonio/WORK/ITI_Agnelli/Materie/TPSI/code/todos-mobile/www/workbox-2b403519.js.map
The service worker will precache 15 URLs, totaling 2.24 MB.
```

---

# ToDoS Mobile

Svelte e Framework7


- Ora dobbiamo poter accedere dal nostro cellulare all'applicazione. Per fare ciò vai nella directory www, che contiene il build, ed esegui

```bash
# python -m http.server
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

- Ora per rendere l'app, servita dal web server, accessibile pubblicamente via HTTP usiamo ngrok in questo modo

```bash
# ngrok http 8000

Session Status           online                                                                
Web Interface            http://127.0.0.1:4040
Forwarding               https://d902-37-160-68-137.ngrok-free.app -> http://localhost:8000
Connections              ttl     opn     rt1     rt5     p50     p90
                         0       0       0.00    0.00    0.00    0.00
```

---

# ToDoS Mobile

Svelte e Framework7

- Come si può vedere, ngrok ha reso disponibile il nostro web server che è in ascolto sulla porta locale 8000, all'indirizzo pubblico *https://d902-37-160-68-137.ngrok-free.app*
- Ovviamente nel tuo caso l'indirizzo sarà diverso
- Ora non resta che aprire quest'indirizzo dallo smartphone (io lo apro in chrome e poi genero un QR code così è più facile)
  
<img src="/media/mobile_19.png" width="800" style="margin:auto;position:relative; left: 0px; top: 0px;">

<br>

- Da notare che in quanto PWA è presente l'icona di installazione dell'app
  
---

# ToDoS Mobile

Svelte e Framework7

<div style="width:50%">

- Ora inquadro il QR code con lo smartphone e l'app viene caricata
- Se non avviene in automatico, dipende dalla versione di Android, premo *Installa app* 

</div>

<img src="/media/mobile_20.jpg" width="250" style="margin:auto;position:relative; left: 200px; top: -230px;">

---

# ToDoS Mobile

Svelte e Framework7
  
<img src="/media/mobile_21.jpg" width="200" style="margin:auto;position:relative; left: -350px; top: 0px;">
<img src="/media/mobile_22.jpg" width="200" style="margin:auto;position:relative; left: -120px; top: -450px;">
<img src="/media/mobile_23.jpg" width="190" style="margin:auto;position:relative; left: 120px; top: -900px;">
<img src="/media/mobile_24.jpg" width="190" style="margin:auto;position:relative; left: 340px; top: -1320px;">

---

# ToDoS Mobile

Svelte e Framework7

- Ok l'app è installata come applicazione nativa. Questo è il bello delle PWA
- Ora l'applicazione funziona anche in mancanza di rete, proprio come un'app nativa
- Per vedere gli aggiornamenti, basta ripetere il build e la pubblicazione
- Non è necessario reinstallare l'app, dopo alcuni minuti e aperture l'app viene automaticamente aggiornata

<img src="/media/mobile_25.png" width="400" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Mobile

Esercitazione_01

- Creare lo skeleton dell'applicazione *ToDoS Mobile*
- Eseguirla sul browser
- Fare il build ed installarla sul proprio smartphone (Android o iOS) 
- Consegnare su github (non fare il commit della directory *node_modules*)


---

# ToDoS Mobile

Svelte e Framework7

- Bene ora siamo pronti per passare allo sviluppo vero e proprio di *ToDoS Mobile*
- Seguiremo un'approccio Top-Down simile a quanto fatto per lo sviluppo di *ToDoS Web*
- Durante lo sviluppo faremo uso della [documentazione di framework7 per Svelte](https://framework7.io/svelte/)

<img src="/media/mobile_26.png" width="400" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# ToDoS Mobile

Svelte e Framework7

- Iniziamo rimuovendo il file *src/js/store.js*
- Poi modifichiamo il file *src/components/app.svelte* commentando la linea 19 e 31
  
<img src="/media/mobile_27.png" width="350" style="margin:auto;position:relative; left: 0px; top: 10px;">


---

# ToDoS Mobile

Svelte e Framework7

- Ora aggiungiamo due nuovi componenti chiamati *todo_list.svelte* e *todo_item.svelte*

```bash
src/
├── assets
├── components
│   ├── app.svelte
│   ├── todo_item.svelte --> singolo ToDo Item
│   └── todo_list.svelte --> l'intera ToDo List che contiene i ToDo Item
```

<img src="/media/mobile_28.png" width="200" style="margin:auto;position:relative; left: -250px; top: 40px;">
<img src="/media/mobile_29.png" width="350" style="margin:auto;position:relative; left: 150px; top: -100px;">

---

# ToDoS Mobile

Svelte e Framework7

- Ora importiamo la *ToDo List* <br> nella home page *src/pages/home.svelte*
- Il browser si aggiorna automaticamente
  
<img src="/media/mobile_30.png" width="450" style="margin:auto;position:relative; left: 200px; top: -195px;">

---

# ToDoS Mobile

Esercitazione_02

- Aggiungere i componenti *ToDo List* e *ToDo Item* e modificare la home page 
- Verificare la corretta implementazione dell'app via browser o smartphone 
- Consegnare su github (non fare il commit della directory *node_modules*)
  
<img src="/media/mobile_31.png" width="240" style="margin:auto;position:relative; left: 350px; top: -200px;">

---

# ToDoS Mobile

Svelte e Framework7

- Ora mettiamo apposto la *top bar*, in modo da aggiungere il pulsante per aggiungere un nuovo *ToDo Item*
- Ripuliamo anche un pochino la home page da elementi non utili
  
<img src="/media/mobile_32.png" width="400" style="margin:auto;position:relative; left: 0px; top: 10px;">

---

# ToDoS Mobile

Esercitazione_03

- Aggiornare il codice per la top bar 
- Verificare la corretta implementazione dell'app via browser o smartphone 
- Consegnare su github (non fare il commit della directory *node_modules*)

<img src="/media/mobile_33.png" width="250" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Mobile

Svelte e Framework7

- Ok la prima iterazione Top-Down è completa. 
- Ora possiamo iniziare con le iterazioni per aggiungere dettagli ai vari componenti
- Cominciamo da *ToDo Item* accettando come *prop* l'oggetto todo così da poter accedere ai vari elementi
- Modificheremo anche *ToDo List* in modo da avere un'array di todo iniziale per lo sviluppo
- Come per *ToDoS Web*, l'oggetto ToDo è

<br>

```js
{
    id: 1,
    task: 'Studiare F7',
    done: false,
    priority: 1
}
```

<br>

- Per la *ToDo List* usiamo il componente di F7 *List*
- Per il *ToDo Item* usiamo il componente di F7 *ListItem*

---

# ToDoS Mobile

Svelte e Framework7

<img src="/media/mobile_35.png" width="400" style="margin:auto;position:relative; left: -200px; top: 0px;">
<img src="/media/mobile_34.png" width="320" style="margin:auto;position:relative; left: 200px; top: -300px;">


---

# ToDoS Mobile

Esercitazione_03

- Modificare *ToDo Item* e *ToDo List* 
- Verificare la corretta implementazione dell'app via browser o smartphone 
- Consegnare su github (non fare il commit della directory *node_modules*)

<img src="/media/mobile_36.png" width="300" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Mobile

Svelte e Framework7

- Ogni ToDo Item ha un livello di priorità  (1- ALTA, 2- MEDIA, 3- BASSA), quindi risulta ottimale rappresentare i livelli con un icona
- Framework7 mette a disposizione un [vasto set di icone](https://framework7.io/icons/) che possiamo utilizzare nelle nostre applicazioni
- Useremo le seguenti icone per rappresentare i tre livelli di priorità
  - **BASSA**:  *arrowtriangle_down_square_fill*  di colore verde
  
  - **MEDIA**: *arrowtriangle_left_square_fill* di colore giallo
  
  - **ALTA**: *arrowtriangle_up_square_fill* di colore rosso

- Quindi andiamo a sviluppare il componente *Priority* che poi utilizzeremo in *ToDo Item*

---

# ToDoS Mobile

Svelte e Framework7

<img src="/media/mobile_38.png" width="400" style="margin:auto;position:relative; left: -200px; top: 0px;">  
<img src="/media/mobile_37.png" width="400" style="margin:auto;position:relative; left: 250px; top: -350px;">

---

# ToDoS Mobile

Esercitazione_04

- Implementare il componente *Priority* e modificare  *ToDo Item* (si può cambiare icona in base alle proprie preferenze)
- Verificare la corretta implementazione dell'app via browser o smartphone 
- Consegnare su github (non fare il commit della directory *node_modules*)

<img src="/media/mobile_39.png" width="280" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Mobile

Svelte e Framework7

- Bene, ora dobbiamo fornire all'utente la possibilità di impostare la priorità per ogni singolo ToDo
- In ToDo Web è possibile modificare la priorità facendo click sul pulsante della priorità
- Questo approccio non è necessariamente il migliore in ambito mobile
- Un'interfaccia utilizzata in molte app (gmail, ...) permette di fare lo swipe verso destra o sinistra dell'elemento e visualizzare dei bottoni di scelta
- Per impostare la priorità del ToDo useremo esattamente quest'interfaccia messa a disposizione da framework7 con il componente *Swipeout*
  
<img src="/media/mobile_40.png" width="350" style="margin:auto;position:relative; left: 0px; top: -40px;">

---

# ToDoS Mobile

Svelte e Framework7

- In particolare, leggendo la documentazione, si vede che il componente *ListItem* ha una proprietà *swipeout* che permette di indicare se l'item deve avere un'interfaccia swipeout
- In questo caso (swipeout = true) dovremo allora definire quali sono le azioni dello swipeout tramite il componente *SwipoutActions* e definire i pulsanti d'azione tramite il componente *SwipeoutButton*

<br>

<Banner padding=20px>
Come anticipato è fondamentale leggere sempre bene la documentazione di Framework7 ed in generale di qualsiasi framework o libreria che utilizziamo
</Banner>

<img src="/media/mobile_41.png" width="280" style="margin:auto;position:relative; left: 0px; top: 10px;">

---

# ToDoS Mobile

Svelte e Framework7

<img src="/media/mobile_42.png" width="550" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# ToDoS Mobile

Esercitazione_05

- Implementare lo swipeout per la priorità
- Verificare la corretta implementazione dell'app via browser o smartphone 
- Consegnare su github (non fare il commit della directory *node_modules*)

<img src="/media/mobile_43.png" width="280" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Mobile

Svelte e Framework7

- Bene la nostra applicazione mobile inizia a prendere forma
- Ora implementiamo, sempre tramite uno swipeout, ma questa volta a destra, i comandi di cambio stato del ToDo e della cancellazione
- Quindi in questo modo, solo con una mano e con lo swipe a destra o a sinistra potremo controllare tutti gli aspetti della nostra applicazione
- Questo ci permette di ottenere un'applicazione mobile di facile utilizzo ed in linea con gli standard per il mondo degli smartphone
  
---

# ToDoS Mobile

Svelte e Framework7

<img src="/media/mobile_44.png" width="550" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# ToDoS Mobile

Esercitazione_06

- Implementare lo swipeout per lo stato e la cancellazione
- Verificare la corretta implementazione dell'app via browser o smartphone 
- Consegnare su github (non fare il commit della directory *node_modules*)

<img src="/media/mobile_45.png" width="280" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Mobile

Svelte e Framework7

- Continuiamo con le iterazioni Top-Down
- Ora vogliamo fare in modo che quando l'utente preme, nella top bar, sull'icona venga aggiunto un nuovo ToDo
- Questa funzionalità richiede un pò di attenzione, siccome in Svelte gli eventi si propagano dal basso all'alto, da componente figlio a componente padre
- Nel nostro caso il pulsante di aggiunta fa parte della todo bar nella home page (componente padre) e deve essere intercettato dal componente figlio *ToDo List*
- In pratica quel che vogliamo fare è che l'handler del pulsante nella top bar sia eseguito da *ToDo List* e non da home
  

---

# ToDoS Mobile

Svelte e Framework7

- Abbiamo visto che in un componente possiamo esportare (*export*) una prop (proprietà)
- Tuttavia non ci sono limitazioni particolari, e quindi possiamo anche esportare una funzione
- Quindi esattamente come la prop che è visibile al chiamate (componente padre), anche la funzione esportata sarà visibile al componente padre
- Quindi nel nostro caso se definiamo ed esportiamo, all'interno di *ToDo List* una funzione che aggiunge un nuovo ToDo Item, questa sarà visibile dalla home, e quindi potra essere richiamata
- Se questa funzione la leghiamo all'handler del pulsante nella top-bar abbiamo raggiunto la funzionalità che ci serve
- Nel chiamante utilizzeremo un particolare tipo di binding, che permetterà di ottenere una referenza all'intero componente e non solo ad un valore
- Vediamo come
  
---

# ToDoS Mobile

Svelte e Framework7

<img src="/media/mobile_46.png" width="550" style="margin:auto;position:relative; left: -200px; top: 0px;">
<img src="/media/mobile_47.png" width="350" style="margin:auto;position:relative; left: 280px; top: -370px;">

---

# ToDoS Mobile

Esercitazione_07

- Implementare le modifiche a home e *ToDo List*
- Verificare la corretta implementazione dell'app via browser o smartphone 
- Consegnare su github (non fare il commit della directory *node_modules*)

<img src="/media/mobile_48.gif" width="240" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Mobile

Svelte e Framework7

- Ora tutti i componenti dell'applicazione sono stati creati. Continuiamo a raffinarli finché raggiungeremo la versione finale della nostra applicazione
- Dobbiamo fornire la possibilità all'utente di modificare un ToDo
- Iniziamo con il testo del task. Useremo la stessa tecnica usata per ToDo Web
  
<img src="/media/mobile_49.png" width="430" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# ToDoS Mobile

Esercitazione_08

- Implementare le modifiche *ToDo Item*
- Verificare la corretta implementazione dell'app via browser o smartphone 
- Consegnare su github (non fare il commit della directory *node_modules*)

<img src="/media/mobile_50.gif" width="240" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Mobile

Svelte e Framework7

<div style="width:40%">

- Molto bene, tutto procede senza intoppi.
- Ora vogliamo implementare il cambio di priorità con lo swipeout che abbiamo implementato precedentemente
- Dobbiamo scrivere un'handler per i tre pulsanti che sono utilizzati nello swipeout
- Possiamo sfruttare l'evento *onClick* del componente *SwipeoutButton*
- Vediamo come

</div>  
<img src="/media/mobile_50.png" width="550" style="margin:auto;position:relative; left: 200px; top: -300px;">

---

# ToDoS Mobile

Svelte e Framework7

- Tuttavia se cambiamo la priorità tramite lo swipeout, l'icona non cambia
- Questo perché nella prima implementazione del componente *Priority* non abbiamo tenuto conto della reattività
- Riscriviamolo semplificandolo e rendendolo reattivo agli aggiornamenti della prop *priority*
     
<img src="/media/mobile_51.png" width="550" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# ToDoS Mobile

Esercitazione_09

- Implementare le modifiche *ToDo Item* e *Priority*
- Verificare la corretta implementazione dell'app via browser o smartphone 
- Consegnare su github (non fare il commit della directory *node_modules*)

<img src="/media/mobile_52.gif" width="240" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Mobile

Svelte e Framework7

<div style="width:40%">

- Ora vogliamo implementare il cambio di stato, quindi dobbiamo scrivere l'handler per il *SwipeoutButton* appropriato
- Vogliamo anche fare in modo che il pulsante si aggiorni correttamente con il cambio di stato
- Vogliamo anche che quando il ToDo è completato (done = true) il testo appaia con una linea barrata
- Vediamo come
</div>  
<img src="/media/mobile_53.png" width="550" style="margin:auto;position:relative; left: 200px; top: -380px;">

---

# ToDoS Mobile

Esercitazione_10

- Implementare le modifiche *ToDo Item*
- Verificare la corretta implementazione dell'app via browser o smartphone 
- Consegnare su github (non fare il commit della directory *node_modules*)

<img src="/media/mobile_54.gif" width="240" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Mobile

Svelte e Framework7

- Molto bene, ora non ci resta che implementare l'azione *Delete*
- Anche in questo caso, come per ToDo Web, l'item non può cancellare se stesso, ma deve inviare un evento al componente padre (*ToDo List*) che provvederà a rimuoverlo
- Scriveremo il codice in modo da generare un evento variabile in base al fatto se l'item deve essere cancellato o solo aggiornato
- Questo ci sarà utile nella fase successiva quando aggiungeremo il supporto al local storage
- Vediamo come

---

# ToDoS Mobile

Svelte e Framework7

<img src="/media/mobile_55.png" width="350" style="margin:auto;position:relative; left: -300px; top: 20px;">
<img src="/media/mobile_56.png" width="600" style="margin:auto;position:relative; left: 180px; top: -250px;">

---

# ToDoS Mobile

Svelte e Framework7
  
<img src="/media/mobile_57.png" width="530" style="margin:auto;position:relative; left: 100px; top: -100px;">

---

# ToDoS Mobile

Esercitazione_11

- Implementare le modifiche *ToDo Item* e *ToDo List*
- Verificare la corretta implementazione dell'app via browser o smartphone 
- Consegnare su github (non fare il commit della directory *node_modules*)

<img src="/media/mobile_58.gif" width="240" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Mobile

Svelte e Framework7

- OK ora l'applicazione è completa a livello funzionale, ma manca ancora il salvataggio dei ToDo nel localStorage
- Procediamo aggiungendo anche questa funzionalità
- In questo modo l'applicazione sarà perfettamente funzionante e utile in quanto potremo usarla per gestire la propria ToDo List
- Modifichiamo il codice in maniera molto simile a quanto abbiamo fatto per ToDo Web
- Vediamo come

<img src="/media/mobile_59.png" width="390" style="margin:auto;position:relative; left: 0px; top: -35px;">

---

# ToDoS Mobile

Svelte e Framework7

<img src="/media/mobile_60.png" width="380" style="margin:auto;position:relative; left: -200px; top: -10px;">
<img src="/media/mobile_61.png" width="400" style="margin:auto;position:relative; left: 250px; top: -440px;">

---

# ToDoS Mobile

Esercitazione_12

- Implementare le modifiche *ToDo Item* e *ToDo List*
- Verificare la corretta implementazione dell'app via browser o smartphone 
- Consegnare su github (non fare il commit della directory *node_modules*)

<img src="/media/mobile_62.gif" width="800" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Mobile

Svelte e Framework7

- Molto bene, abbiamo terminato con lo sviluppo della nostra applicazione *ToDoS Mobile*
- Come visto lo sviluppo è stato molto simile alla versione Web
- Proprio perché abbiamo usato lo stesso insieme di tecnologie (HTML, CSS, JS e Svelte)
- La maggioranza del codice non è cambiata e con un accorto refactoring è possibile utilizzare la stessa base di codice JS per entrambe le applicazioni
- Questo, come menzionato all'inizio, comporta enormi vantaggi in termini di riduzione di costo e tempi di sviluppo
  
<img src="/media/mobile_63.png" width="300" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# ToDoS Mobile

Esercitazione_13

- Fare il build e pubblicare la propria applicazione con indirizzo pubblico (usa ngrok)
- Consegnare via email il link pubblico in modo che il docente possa installare l'app sul proprio smartphone


---

# ToDoS Mobile

Svelte e Framework7

<div style="width:50%">

- Un'ottimo modo per rendere la nostra applicazione pubblica in modo permanente è utilizzare GitHub Pages
- Per pubblicare l'app su GitHub Pages è necessaria una modifica al file *src/manifest.json*
- Supponendo che l'URL di pubblicazione su GitHub Pages sia

```bash
https://mario_rossi.github.io/todos
```
</div>

<img src="/media/mobile_64.png" width="360" style="margin:auto;position:relative; left: 250px; top: -350px;">

---

# ToDoS Mobile

Esercitazione_14

- Fare il build e pubblicare la propria applicazione con indirizzo pubblico su GitHub Pages
- Consegnare via email il link pubblico in modo che il docente possa installare l'app sul proprio smartphone
