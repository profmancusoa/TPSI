---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://source.unsplash.com/collection/94734566/1920x1080
background: /media/todo_00.png
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
#highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
aspectRatio: '16_/9'
routerMode: 'hash'
as: 2023/2024
version: '1.1.0'

---  


# ToDoS Web App

Sviluppo di una Web App con Svelte

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

---

# ToDoS Web App

Svelte Front-End

- In questa serie di esercitazioni vogliamo sviluppare un'applicazione Web per la gestione di una semplice ToDo List
- Svilupperemo il front-end con SvelteKit
- Metteremo in pratica le nostre conoscenze e competenze, acquisite fin qui, di HTML, CSS e Svelte
- Dovremo usare un minimo di JavaScript, ma non preoccupiamoci se non capiamo tutti i dettagli
- L'obiettivo è sviluppare la parte front-end dell'applicazione
- In futuro trasformeremo questa applicazione per collegarla ad un back-end rendendola quindi completamente funzionante 

<img src="/media/todo_00.png" width="150" style="margin:auto;position:relative; left: 0px; top: -20px;">

---

# ToDoS Web App

Svelte Front-End

- Iniziamo a vedere come funziona l'app finale

<img src="/media/todo_01.gif" width="800" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# ToDoS Web App

Analisi e Progettazione

- Analizziamo ora la UI dell'applicazione

<img src="/media/todo_02.png" width="900" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Web App

Analisi e Progettazione

- Proviamo ora a scomporre l'applicazione in componenti (ricorda lo sviluppo moderno si basa sui web components, paradigma che Svelte sposa appieno)
- Nella home page (componente globale) vediamo
  - barra del titolo
  - ToDo List
- La barra del titolo potrebbe essere un componente a se stante, ma per semplicità implementiamo il tutto come un componente separato (ToDo List)
- In questo modo la home page diventa semplicissima

---

# ToDoS Web App

Analisi e Progettazione

- Analizziamo ora la struttura del componente ToDo List che è composta nel seguente modo
  1. Titolo dell'applicazione
  2. ToDo List

- Il titolo dell'applicazione è banale quindi non necessità di nessun'altra suddivisione
- Mentre la Todo List ha una struttura ben precisa
- Analizzandola bene vediamo che è una griglia (tabella) composta 5 colonne e da 1 riga per ogni task

---

# ToDoS Web App

Analisi e Progettazione

<img src="/media/todo_03.png" width="900" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Web App

Analisi e Progettazione

- Ogni riga della griglia è composta da una cella e quindi possiamo creare un componente **Cell** dedicato
- La prima riga, che è l'header della tabella, in ogni cella contiene un'icona.
- Anche l'icona può essere un componente **Icon** separato

<img src="/media/todo_04.png" width="900" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Web App

Analisi e Progettazione

- Le altre righe, oltre all'header, rappresentado un item della ToDo List o meglio un ToDo Item
- Quindi anche il ToDo Item può essere implementato come un componente separato **ToDo Item** anch'esso composto da *Cell*

<img src="/media/todo_05.png" width="900" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Web App

Analisi e Progettazione

- Infine abbiamo visto che quando l'utente preme sul pulsante della priorità cambia il suo valore e il colore
- Quindi anche questo elemento è perfetto per essere implementato come un componente separato **Priority**

<img src="/media/todo_06.png" width="900" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Web App

Analisi e Progettazione

- Infine è importante notare che alcune Icone sono attive, infatti quando l'utente fa click con il mouse queste eseguono una determinata azione
  - Aggiunta di un nuovo ToDo Item
  - Rimozione di un ToDo Item esistente

<img src="/media/todo_07.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# ToDoS Web App

Esercitazione_01

- Bene ora che abbiamo analizzato e progettato l'applicazione, quanto meno il front-end, passiamo all'implementazione
- Creare un progetto skeleton SvelteKit che si chiama `todos-web`
- Consegnare su github (non fare il commit della directory *node_modules*)

---

# ToDoS Web App

Implementazione Skeleton

- Iniziamo ad implementare lo skeleton dell'applicazione
- In altre parole implementiamo la struttura base dell'applicazione, con tutte le sue parti ed i suoi componenti
- Ogni componente inizialmente conterrà solo una stringa identificativa e lo evidenzieremo con i suoi bordi
- Una completata questa prima fase, poi andremo a svilupapre in dettaglio componente per componente
- Quanto qui descritto rientra nella metodogia di progettazione  e sviluppo `Top-Down`
  
<br>
<Banner padding="30px">
Nel modello top-down si formula inizialmente una visione generale del sistema ovvero se ne descrive la finalità principale senza scendere nel dettaglio delle sue parti o componenti (TOP). 

Ogni componente del sistema successivamente viene rifinito iterativamente (DOWN) (decomposizione e specializzazione) aggiungendo, ad ogni iterazione, maggiori dettagli della progettazione, finchè il sistema implementa tutte le funzionalità
</Banner>

---

# ToDoS Web App

Implementazione Skeleton

- Applichiamo il modello Top-Down al nostro progetto di sviluppo
- Definiamo lo scheletro della home page, che conterrà solo il contenitore principale del componente ToDo List

<img src="/media/todo_08.png" width="350" style="margin:auto;position:relative; left: -250px; top: 0px;">
<img src="/media/todo_09.png" width="450" style="margin:auto;position:relative; left: 200px; top: -320px;">

---

# ToDoS Web App

Implementazione Skeleton

<div style="width: 50%">

- Come evidenziato nella fase di analisi e progettazione, nel contenitore principale è contenuto un unico componente chiamato ToDo List
- Quindi creiamo il componente, ricordandoci che è formato dal titolo e dalla todo list, e modifichiamo il codice come segue


```bash
src
├── app.html
├── components
│   └── todo_list.svelte --> componente Todo List
└── routes
    └── +page.svelte
```
</div>

<img src="/media/todo_11.png" width="280" style="margin:auto;position:relative; left: 200px; top: -440px;">
<img src="/media/todo_10.png" width="400" style="margin:auto;position:relative; left: 260px; top: -430px;">


---

# ToDoS Web App

Implementazione Skeleton

- La nostra app inizia a prendere forma

<img src="/media/todo_12.png" width="530" style="margin:auto;position:relative; left: 0px; top: 10px;">

---

# ToDoS Web App

Implementazione Skeleton

<div style="width: 50%">

- Ora dall'analisi risulta che la ToDo List è una tabella. Il modo migliore per implementarla è usare CSS Grid
- Quindi creiamo una griglia 5 x N 
- Ricordiamoci che la prima linea è l'header della tabella
- Mentre le altre righe sono composte da ToDo Items
- Modifichiamo il componente ToDo List come segue
</div>

<img src="/media/todo_13.png" width="320" style="margin:auto;position:relative; left: 200px; top: -350px;">

---

# ToDoS Web App

Esercitazione_02

- Implementare tutto il codice che realizza il primo livello dello skeleton della nostra applicazione
- Consegnare su github (non fare il commit della directory *node_modules*)

<img src="/media/todo_14.png" width="500" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# ToDoS Web App

Implementazione Skeleton

- A questo punto, seguendo un approccio Top-Down, abbiamo implementato lo skeleton dei componenti principali
- Ora è il momento di passare alla successiva iterazione
- Nell'header della tabella abbiamo visto che sono presenti delle icone
- Come identificato in fase di analisi possiamo implementare un componente separato chiamato *Icon*

<img src="/media/todo_15.png" width="250" style="margin:auto;position:relative; left: -150px; top: 10px;">
<img src="/media/todo_16.png" width="260" style="margin:auto;position:relative; left: 150px; top: -230px;">

---

# ToDoS Web App

Esercitazione_03

- Implementare il componente Icon e modificare il componente todo_list in modo da farne uso
- Consegnare su github (non fare il commit della directory *node_modules*)

<img src="/media/todo_17.png" width="500" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# ToDoS Web App

Implementazione Skeleton

- Nell'analisi avevamo determinato che gli elementi della griglia sono dei componenti ***ToDo Item***
- Ed ogni ToDo Item è composto da 5 (n. colonne) celle implementate da un componente di nome ***Cell***
- Pertanto implementiamo questi due nuovi componenti e modifichiamo ToDo List

<img src="/media/todo_18.png" width="250" style="margin:auto;position:relative; left: -300px; top: 20px;">
<img src="/media/todo_19.png" width="250" style="margin:auto;position:relative; left: 0px; top: -210px;">
<img src="/media/todo_20.png" width="250" style="margin:auto;position:relative; left: 300px; top: -430px;">

---

# ToDoS Web App

Esercitazione_04

- Implementare tutto il codice del componente Cell, ToDo Item e modificare ToDo List
- Consegnare su github (non fare il commit della directory *node_modules*)

<img src="/media/todo_21.png" width="500" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# ToDoS Web App

Implementazione Componenti

- Bene la nostra applicazione prende sempre più forma. A questo punto abbiamo terminato la seconda iterazione
- E' ora di continuare a specializzare i componenti (BOTTOM) aggiungendo dettagli e funzionalità
- Ora vogliamo fornire la capacità al component *Icon* di visualizzare una qualiasi icona fornita come parametro
- Utilizziamo il set di [icone gratuito](https://fonts.google.com/icons?icon.set=Material+Icons) messo a disposizione da google

<img src="/media/todo_22.png" width="550" style="margin:auto;position:relative; left: 0px; top: 10px;">

---

# ToDoS Web App

Implementazione Componenti

<img src="/media/todo_23.png" width="450" style="margin:auto;position:relative; left: -200px; top: 0px;">
<img src="/media/todo_24.png" width="400" style="margin:auto;position:relative; left: 250px; top: -400px;">

---

# ToDoS Web App

Esercitazione_05

- Implementare tutto il codice del componente Icon e modificare ToDo List
- Consegnare su github (non fare il commit della directory *node_modules*)

<img src="/media/todo_25.png" width="500" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# ToDoS Web App

Implementazione Componenti

- Ora cerchiamo di specializzare il componente *Cell*
- Dobbiamo fare in modo di poter passare un contenuto al *Cell*. Per questo usiamo il meccanismo dello ***slot*** di Svelte
- Modifichiamo anche *ToDo Item* in modo da usare il componente *Cell* appena aggiornato

<img src="/media/todo_26.png" width="280" style="margin:auto;position:relative; left: -250px; top: 0px;">
<img src="/media/todo_27.png" width="210" style="margin:auto;position:relative; left: 250px; top: -280px;">

---

# ToDoS Web App

Esercitazione_06

- Implementare le modifiche a *Cell* e *ToDo item* 
- Consegnare su github (non fare il commit della directory *node_modules*)

<img src="/media/todo_28.png" width="500" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# ToDoS Web App

Implementazione Componenti

- Ora è il momento di implementare l'ultimo componente e cioè quello che permette di gestire e visualizzare la priorità del ToDo
- Quindi creiamo il componente *Priority* in questo modo e poi aggiorniamo *ToDo Item*

<img src="/media/todo_29.png" width="200" style="margin:auto;position:relative; left: -250px; top: 0px;">
<img src="/media/todo_30.png" width="290" style="margin:auto;position:relative; left: 300px; top: -330px;">

---

# ToDoS Web App

Esercitazione_07

- Implementare il componente *Priority*  a *ToDo item* 
- Consegnare su github (non fare il commit della directory *node_modules*)

<img src="/media/todo_31.png" width="500" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# ToDoS Web App

Implementazione Componenti

- Man mano che procediamo Top-Down, aggiungendo sempre più dettagli nell'implementazione la nostra applicazione assume sempre più la forma finale
- Tuttavia non abbiamo ancora terminato, dobbiamo completare la UI e poi aggiungere la logica di funzionamento in JS
- A questo punto abbiamo implementato la forma base di tutti i componenti inc ui abbiamo suddiviso l'applicazione
- Ora dobbiamo trasformare e modificare ogni componente in modo che compia il suo dovere per dar vita all'applicazione finale

<img src="/media/todo_32.png" width="350" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# ToDoS Web App

Implementazione Componenti

- Come possiamo vedere dalla UI, il nostro ToDo Item è composto da:
  - **id**: identificatore univoco numerico (assegnato dal sistema)
  - **task**: descrizione testuale del todo item
  - **done**: booleano che indica se il task è svolto (true) o ancora da svolgere (false)
  - **priority**: valore numerico che indica la priorità (1 max - 3 min)  
- Possiamo rappresentare l'oggetto in JS in questo modo

<br>
```js
{
    id: 1,
    task: "Studiare TPSI",
    done: false,
    priority: 1
}
```

<br>

- Questo ci è utile nelle fasi successive
  
---

# ToDoS Web App

Implementazione Componenti

- Modifichiamo *ToDo Item* in  modo che visualizzi l'oggetto ToDo, definito prima, passato come parametro 
- Per far questo usiamo il meccanismo dei *props* di Svelte

<img src="/media/todo_33.png" width="280" style="margin:auto;position:relative; left: -250px; top: 0px;">
<img src="/media/todo_34.png" width="200" style="margin:auto;position:relative; left: 200px; top: -390px;">

---

# ToDoS Web App

Esercitazione_07

- Implementare le modifiche al componente *ToDo item* e *ToDo List* 
- Consegnare su github (non fare il commit della directory *node_modules*)

<img src="/media/todo_35.png" width="500" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# ToDoS Web App

Implementazione Componenti

- Ora per fare in modo che quando l'utente fa click sul pulsante `+` venga aggiunto un nuovo ToDo Item dobbiamo apportare alcune modifiche importanti
- Per prima cosa dobbiamo modificare il componente *Icon* per gestire i click del mouse e implementare l'handler corretto

<br>
<Banner padding="20px">
Un handler è una funzione JS che gestisce il verificarsi di un evento.

Questo meccanismo è tipico della programmazione asincrona e particorlemnte utilizzanto in ambito UI
</Banner>

<br>

- Chiaramente vogliamo fare in modo che l'handler del click su un'icona sia definito dal chiamante (ToDo List) in modo da mantenere il componente *Icon* generico ed adatto a tutti i casi

---

# ToDoS Web App

Implementazione Componenti

<img src="/media/todo_36.png" width="400" style="margin:auto;position:relative; left: -200px; top: 20px;">
<img src="/media/todo_37.png" width="280" style="margin:auto;position:relative; left: 220px; top: -320px;">

---

# ToDoS Web App

Esercitazione_08

- Implementare le modifiche al componente *Icon* e *ToDo List* 
- Consegnare su github (non fare il commit della directory *node_modules*)

<img src="/media/todo_38.gif" width="500" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# ToDoS Web App

Implementazione Componenti

<div style="width:50%">

- Ok adesso possiamo aggiungere quanto ToDo Item vogliamo
- Iniziamo a creare le funzionalità di modifica di un ToDo Item
- La prima cosa che vogliamo fare è che quando facciamo click sull'icona di cambio stato (da incompleto -> a completo) e viceversa questo venga visualizzato
- Pertanto ciò che dobbiamo fare è scriver eun handler per quest'icona che aggiorna il campo *done* dell'oggetto ToDo 

</div>
<img src="/media/todo_38.png" width="400" style="margin:auto;position:relative; left: 250px; top: -350px;">

---

# ToDoS Web App

Esercitazione_09

- Implementare le modifiche al componente *ToDo Item* 
- Consegnare su github (non fare il commit della directory *node_modules*)
- Sembra una magia....ma questa è la potenza di Svelte

<img src="/media/todo_39.gif" width="450" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Web App

Implementazione Componenti

- Al momento quando creiamo il nuovo task non abbiamo modo di scrivere la descrizione dell'attività
- Quindi andiamo nuovamente a modificare *ToDo Item* per aggiungere questa funzionalità

<img src="/media/todo_40.png" width="330" style="margin:auto;position:relative; left: -250px; top: 10px;">
<img src="/media/todo_41.png" width="330" style="margin:auto;position:relative; left: 250px; top: -310px;">

---

# ToDoS Web App

Esercitazione_10

- Implementare le modifiche al componente *ToDo Item* 
- Consegnare su github (non fare il commit della directory *node_modules*)
- Sembra una magia....ma questa è la potenza di Svelte

<img src="/media/todo_42.gif" width="450" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Web App

Implementazione Componenti

- Ora dedichiamo un pò di tempo al componente *Priority*, non è banale
- Riceve la priorità iniziale come un props e permette all'utente di variare la priorità tra tre livelli
- Infatti quando l'utente fà click sul pulsante priorità questa varia ciclicamente il suo valore

<img src="/media/todo_43.png" width="300" style="margin:auto;position:relative; left: -250px; top: 20px;">
<img src="/media/todo_44.png" width="220" style="margin:auto;position:relative; left: 200px; top: -300px;">

---

# ToDoS Web App

Esercitazione_11

- Implementare le modifiche al componente *Priority* 
- Consegnare su github (non fare il commit della directory *node_modules*)
- Sembra una magia....ma questa è la potenza di Svelte

<img src="/media/todo_45.gif" width="450" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Web App

Implementazione Componenti

- Indine dobbiamo implementare la funzionalità di cancellazione di un ToDo e quindi implementare l'handler per l'icona del cestino
- In questo caso facciamo attenzione, perchè l'item non può cancellare se stesso
- Quindi lo implementiamo nel seguente modo: alla pressione del bidoncino, viene generato un evento che viene gestito da *ToDo List* il quale si occupa di cancellare l'item identificato da uno specifico id dalla lista (array *todos*)
- Per inviare e generare l'evento dobbiamo il *dispatcher* di Svelte
- Vediamo come

---

# ToDoS Web App

Implementazione Componenti

<img src="/media/todo_45.png" width="450" style="margin:auto;position:relative; left: -250px; top: 20px;">
<img src="/media/todo_46.png" width="450" style="margin:auto;position:relative; left: 250px; top: -350px;">

---

# ToDoS Web App

Esercitazione_12

- Implementare le modifiche al componente *ToDo Item* e *ToDo List* 
- Consegnare su github (non fare il commit della directory *node_modules*)
- Un'altra magia di Svelte
  
<img src="/media/todo_47.gif" width="500" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# ToDoS Web App

Implementazione Componenti

- Bene, dopo alcune iterazione Top-Down la nostra applicazione inizia a funzionare ed è sempre più simile alla versione finale
- Importante notare la tecnica ed il metodo usato
- Non sviluppo tutte le funzionalità in un colpo solo, aumentando di molto la probabilità che non funzioni nulla correttamente
- Ma al contrario, parto da un livello generico per ogni componente e aggiungo via via funzionalità, alle volte solo modifiche della UI, alle volte solo modifiche del codice JS
- Così facendo riesco a gestire tranquillamente la complessità e mi accorgo subito se qualcosa non funziona

<br>
<Banner padding="25px">
L'obiettivo è NON accumulare errori che poi richiedono tempi lunghissimi di risoluzione, rendendo il processo di sviluppo poco efficiente e frustrante
</Banner>

---

# ToDoS Web App

Implementazione Componenti

- Bene continuiamo con il processo iterativo Top-Down
- Nell'analisi dell'app abbiamo notato che le icone hanno un colore diverso, quindi è necessario modificare il componente *Icon* in modo che accetti un colore come proprietà in input (svelte props)
- Qui usiamo "un trucco" molto interessante, per utilizzare una variabile JS del componente all'interno del CSS. 
- *color* è una props passata dall'utente (green di default) che viene usata direttamente nel CSS per impostare il colore dell'icona al valore voluto
- Dobbiamo anche modificare *ToDo Item* in modo da visualizzare lo stato in rosso quando *done = false* e in verde quando *done = true*
- Vogliamo anche visualizzare l'icona del cestino in rosso

---

# ToDoS Web App

Implementazione Componenti

<img src="/media/todo_47.png" width="450" style="margin:auto;position:relative; left: -250px; top: 30px;">
<img src="/media/todo_48.png" width="450" style="margin:auto;position:relative; left: 250px; top: -200px;">

---

# ToDoS Web App

Esercitazione_13

- Implementare le modifiche al componente *ToDo Item* e *Icon* 
- Consegnare su github (non fare il commit della directory *node_modules*)
  
<img src="/media/todo_49.gif" width="500" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Web App

Implementazione Componenti

- Continuaiamo a rifinire la UI del front-end. Ora concentriamoci sul titolo
- Usiamo un font, scelto tra gli innumerevoli messi a disposizione da [google](https://fonts.google.com/) (esattamente come per le icone)

<img src="/media/todo_50.png" width="600" style="margin:auto;position:relative; left: 0px; top: 10px;">

---

# ToDoS Web App

Implementazione Componenti

<img src="/media/todo_51.png" width="450" style="margin:auto;position:relative; left: -250px; top: 50px;">
<img src="/media/todo_52.png" width="500" style="margin:auto;position:relative; left: 230px; top: -260px;">

---

# ToDoS Web App

Implementazione Componenti

- Ora mettiamo apposto l'header aggiungendo un pò di CSS
- Da notare che l'ultima cella a destra non ha il bordo laterale, quindi dobbiamo tenere conto di quest'aspetto

<img src="/media/todo_53.png" width="420" style="margin:auto;position:relative; left: -250px; top: 0px;">
<img src="/media/todo_54.png" width="500" style="margin:auto;position:relative; left: 230px; top: -270px;">

---

# ToDoS Web App

Implementazione Componenti

- C'è ancora un'imperfezione nelle celle del *ToDo Item* in quanto quella finale a destra ha ancora il bordo laterale. 
- Andiamo a rimuoverlo passando al componente *Cell* una prop che indica se è l'ultima della riga o no
  
<img src="/media/todo_55.png" width="350" style="margin:auto;position:relative; left: -250px; top: 0px;">
<img src="/media/todo_56.png" width="500" style="margin:auto;position:relative; left: 200px; top: -250px;">

---

# ToDoS Web App

Esercitazione_14

- Implementare le modifiche al componente *Cell*, *ToDo Item* e *ToDo List* 
- Consegnare su github (non fare il commit della directory *node_modules*)
  
<img src="/media/todo_57.png" width="800" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Web App

Implementazione Componenti

- Quando l'utente completa un task vogliamo che il testo venga visualizzato con una barra e il componente della priorità diventi grigio
- Quindi dobbiamo modificare il componente *Priority* in modo che accetti una props *disabled* che indica se il componente è attivo (colorato) oppure disabilitato (grigio). Questa props andrà poi legata allo stato del todo

<img src="/media/todo_58.png" width="430" style="margin:auto;position:relative; left: -250px; top: 0px;">
<img src="/media/todo_59.png" width="400" style="margin:auto;position:relative; left: 200px; top: -295px;">

---

# ToDoS Web App

Esercitazione_15

- Implementare le modifiche al componente *Priority* e *ToDo Item* 
- Consegnare su github (non fare il commit della directory *node_modules*)
  
<img src="/media/todo_60.gif" width="800" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Web App

Svelte Front-End

- Mettiamo apposto ancora qualche dettaglio. Quando un task è completato NON deve essere possibile modificarne la priorità, quindi dobbiamo agire sul componente *Priority*

<img src="/media/todo_60.png" width="400" style="margin:auto;position:relative; left: 0px; top: 30px;">

---

# ToDoS Web App

Svelte Front-End

- C'è ancora il bordo dello skeleton del contenitore principale, quindi cambiamo la home page

<img src="/media/todo_61.png" width="400" style="margin:auto;position:relative; left: 0px; top: 30px;">

---

# ToDoS Web App

Esercitazione_16

- Bene, dopo alcune iterazioni Top-Down, il front-end della nostra applicazione è completamente funzionante
- Implementare le modifiche al componente *Priority* e home page
- Consegnare su github (non fare il commit della directory *node_modules*)
  
<img src="/media/todo_62.png" width="750" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# ToDoS Web App

Local Storage

- La nostra applicazione ToDo è completamente funzionante, tuttavia abbastanza inutile in quanto la ToDo List esiste solo finchè la finestra o tab del browser è aperta
- In altre parole al momento la ToDo List è volatile e se chiudiamo il browser alla prossima riaperturà sarà vuota
- Questo è normale in quanto da nessuna parte del codice abbiamo salvato i dati
- Tuttavia è importante notare che il browser non ha accesso diretto al file system e quindi per poter salvare i dati della nostra applicazione dobbiamo utilizzare `Web Storage API` che consente il salvataggio permanente dei dati della nostra applicazione
- In questo modo alla chiusura del browser i dati non saranno persi e alla succissiva riapertura la nostra ToDo List sarà ancora presente
- In questo modo la nostra applicazione diventa completamente funzionale ed utile

---

# ToDoS Web App

Local Storage

- L'`API Web Storage` fornisce meccanismi mediante i quali il browser può memorizzare coppie `chiave/valore`, in modo semplice ed intuitivo

<img src="/media/todo_63.png" width="500" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# ToDoS Web App

Local Storage

- Web Storage fornisce due meccanismi:
  1. `sessionStorage`: 
     - mantiene un'area di archiviazione separata per ogni origine (URL) che è disponibile per la durata della sessione della pagina (fintanto che il browser è aperto, inclusi i ricaricamenti e i ripristini della pagina).
     - Memorizza i dati solo per una sessione, il che significa che i dati vengono archiviati fino alla chiusura del browser (o della scheda).
     - I dati non vengono mai trasferiti al server.
     - Il limite di archiviazione è al massimo 5 MB. 

---

# ToDoS Web App

Local Storage

2. `localStorage`:
   - fa la stessa cosa, ma persiste anche quando il browser viene chiuso e riaperto.
   - Memorizza i dati senza data di scadenza e viene cancellato solo tramite JavaScript o cancellando la cache del browser / i dati archiviati localmente.
   - Il limite di archiviazione è al massimo 5 MB.


**Il `localStorage` è la soluzione perfetta per la nostra applicazione ToDoS**

---

# ToDoS Web App

Local Storage

<img src="/media/todo_64.png" width="700" style="margin:auto;position:relative; left: 0px; top: -80px;">

---

# ToDoS Web App

Local Storage

*localStorage* ha un'API molto semplice

- `setItem(<key>, <value>)`: aggiunge una coppia key-value al localStorage

- `getItem(<key>)`: preleva il valore associate alla key presente nel localStorage

- `key(<idx>)`: restituisce la chiave con indice &lt;idx&gt;

- `length`: restituisce il numero di chiavi presenti nel localStorage 

<br>

`IMPORTANTE: localStorage può solo memorizzare valori stringa`

---

# ToDoS Web App

Local Storage

- Proviamo ad usare le API di localStroage
- Per fare ciò apri una nuova tab di chrome e con CTRL + SHIFT + J vai in modalità developer
- Oragnizza le finestre come in figura in modo da vedere la *console* e *application*

<img src="/media/todo_65.png" width="900" style="margin:auto;position:relative; left: 0px; top: 10px;">


---

# ToDoS Web App

Local Storage

Nella console proviamo a inserire delle coppie chiave-valore

```js
localStorage.setItem('nome', 'Mario')
localStorage.setItem('cognome', 'Rossi')
localStorage.setItem('eta', '18')
```

<img src="/media/todo_66.png" width="900" style="margin:auto;position:relative; left: 0px; top: 10px;">


---

# ToDoS Web App

Local Storage

Sempre dalla console proviamo a prelevare un valore associato ad una chiave

```js
localStorage.getItem('nome')
'Mario'
localStorage.getItem('cognome')
'Rossi'
localStorage.getItem('eta')
'18'
localStorage.getItem('altezza')
null
```

<br>

- Notare che siccome la chiave *altezza* non è presente nel localStorage, viene restiutito *null*


---

# ToDoS Web App

Local Storage

Vediamo come ottenere tutti i valori associati alle chiavi nel localStorage

```js
for(let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    console.log(key, localStorage.getItem(key));
}

eta 18
cognome Rossi
nome Mario
```

---

# ToDoS Web App

Local Storage

- Quindi come visto queste semplici operazioni possono essere utilizzate nella nostra app ToDoS per memorizzare e recuperare i ToDo Item
- Ma un ToDo Item è un oggetto, mentre localStorage memorizza solo stringhe. Che fare?
- Dobbiamo convertire da oggetto -> stringa quando scriviamo nel localStorage
- Dobbiamo convertire da stringa -> oggetto qualdo leggiamo dal localStorage
- Il metodo `JSON.stringify(<oggetto>)` è perfetto per scrivere
- Il metodo `JSON.parse(<string>)` è perfetto per leggere

---

# ToDoS Web App

Local Storage

```js
todo  = { id: 1,
          task: 'Studiare TPSI',
          done: true,
          priority: 1
        }
localStorage.setItem('todo1', JSON.stringify(todo));
```
<img src="/media/todo_67.png" width="900" style="margin:auto;position:relative; left: 0px; top: 10px;">

---

# ToDoS Web App

Local Storage

```js
const todo_obj = JSON.parse(localStorage.getItem('todo1'));
console.log(todo_obj)

{id: 1, task: 'Studiare TPSI', done: true, priority: 1}
```
<br>

- Bene, con questa conoscenza del localStorage abbiamo tutti gli elementi per completare l'applicazione ToDoS dotandola di uno storage permanente e rendendola effettivamente utile ed utilizzabile per avere sempre sott'occhio la nostra lista di attività da svolgere

<img src="/media/todo_68.png" width="300" style="margin:auto;position:relative; left: 0px; top: 10px;">

---

# ToDoS Web App

Esercitazione_17

- Provare ad usare, dalla console del browser,i metodi spiegati per manipolare il localStorage

---

# ToDoS Web App

Local Storage

- La prima cosa da fare è aggiungere il codice che si occupa di leggere tutto i ToDo memorizzati nel localStorage all'avvio della nostra applicazione
- Quindi dobbiamo modificare *ToDo List* e aggiungere il codice al momento del caricamento del componente
- Per fare ciò utilizziamo un metodo standard di Svelte che si chiama `onMount` che viene appunto richiamato quando il componente viene montato nella pagina al prilo load
- In questo metodo leggeremo tutte le chiavi del localStorage (i nostri ToDo Item) e popoleremo l'array todos così verrà automaticamente visualizzato

---

# ToDoS Web App

Local Storage

<img src="/media/todo_69.png" width="500" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Web App

Local Storage

- Ora se ricarichiamo la pagina, vederemo la ToDo List vuota
- Ciò è normale perchè il localStorage è vuoto e quindi non ci sono ToDo Item da aggiungere alla ToDo List
- Aggiungiamo il codice per aggiungere un nuovo ToDo al localStorage

<img src="/media/todo_70.png" width="410" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# ToDoS Web App

Esercitazione_18

- Implementare le modifiche al componente *ToDo List* per aggiungere il supporto al localStorage
- Consegnare su github (non fare il commit della directory *node_modules*)
  
<img src="/media/todo_71.gif" width="700" style="margin:auto;position:relative; left: 0px; top: 10px;">

---

# ToDoS Web App

Local Storage

<div style="width:50%">

- Bene l'aggiunta funziona. Ora dobbiamo aggiungere la capacità di aggiornare il localStorage quando viene aggiornato un ToDo Item  
</div>

<img src="/media/todo_72.png" width="450" style="margin:auto;position:relative; left: 250px; top: -190px;">

---

# ToDoS Web App

Local Storage

<img src="/media/todo_73.png" width="450" style="margin:auto;position:relative; left: 0px; top: -20px;">


---

# ToDoS Web App

Local Storage

- Ora se modifichiamo un ToDo Item vedremo che anche il localStorage sarà aggiornato
- Tuttavia la priorità non è funzionante

<img src="/media/todo_74.gif" width="700" style="margin:auto;position:relative; left: 0px; top: 10px;">

---

# ToDoS Web App

Local Storage

- Questo perchè quando lo stato del componente *Priority* cambia, questo non viene visto dal componente *ToDo Item* che a sua volta non genera un evento *update* per la *ToDo List*

<img src="/media/todo_74.png" width="700" style="margin:auto;position:relative; left: 0px; top: 20px;">


---

# ToDoS Web App

Esercitazione_19

- Implementare le modifiche al componente *ToDo Item* e *ToDo list*
- Consegnare su github (non fare il commit della directory *node_modules*)
  
<img src="/media/todo_75.gif" width="900" style="margin:auto;position:relative; left: 0px; top: 10px;">

---

# ToDoS Web App

Local Storage

- Infine aggiungiamo la cancellazione dal localStorage
  
<img src="/media/todo_76.png" width="450" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# ToDoS Web App

Esercitazione_20

- Implementare le modifiche al componente *ToDo list*
- Consegnare su github (non fare il commit della directory *node_modules*)
  
<img src="/media/todo_77.gif" width="800" style="margin:auto;position:relative; left: 0px; top: 10px;">


---

# ToDoS Web App

Local Storage

- Ora l'applicazione è quasi completa e se chiudo il browser e lo riapro vedrò nuovamente i miei ToDO Item precedentemente memorizzati
- Tuttavia c'è un problema. Se creo dei todo, per esempio id:1, id:2, id:3
- Poi chiudo il browser e lo riapro, il prossimo ToDo che creo avrà id:1
- Questo perchè abbiamo inizializzato la variabile *last_id* = 0 e quindi ripartiamo sempre dall'inizio
- Dobbiamo modificare il codice in modo che *last_id* venga inizializzato effettivamente con l'ultimo (il più grande id presente nel localStorage)
- Vediamo come

---

# ToDoS Web App

Local Storage

<img src="/media/todo_77.png" width="500" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# ToDoS Web App

Local Storage

- Bene ora il problema della duplicazione id è risolto
- Concludiamo la nostra applicazione agigungendo una piccola animazione che fa apparire e scomparire i ToDo con un effetto di *fade*
- In svelte è semplicissimo, vediamo come

<img src="/media/todo_78.png" width="400" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# ToDoS Web App

Esercitazione_21

- Implementare le modifiche al componente *ToDo list* e *Cell* per completare l'applicazione
- Consegnare su github (non fare il commit della directory *node_modules*)


<img src="/media/todo_79.gif" width="700" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# ToDoS Web App

- Molto bene, siamo arrivati al termine dello sviluppo dell'applicazione ToDoS
- Ora abbiamo un'applicazione perfettamente funzionante e grazie al localStorage anche utilizzabile in modo reale
- Ricorda l'approccio Top-Down come un importante metodologia di progettazione e di sviluppo

<img src="/media/todo_68.png" width="400" style="margin:auto;position:relative; left: 0px; top: 30px;">

---

# ToDoS Web App

Esercitazione_22

- Pubblicare su github pages la tua applicazione ToDoS in modo che la puoi utilizzare tutti i giorni
- Consegnare via email il link pubblico che permette di accedere all'app