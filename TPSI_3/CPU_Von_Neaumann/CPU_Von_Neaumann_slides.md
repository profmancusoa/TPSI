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

<style>
  .centro {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 50%;
    position: absolute;
    margin: auto;
    top: 0%;
    left: 45%;
    right: 0%;
    bottom: 0%;
  }
</style>


# Il simulatore della macchina di Von Neumann 

Descrizione ed Uso

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

--- #slide 1

# Introduzione

Studio di una CPU

- Le moderne CPU implementano l'architettura di Von Neumann 
- Pertanto è utile poter studiare e verificare il funzionamento interno:
  - Dinamica dell'esecuzione di un programma
  - Comprensione del valore assunto dai principali registri
  - Operazione della ALU
  - Stato dell'Accumulatore e del Program Counter
- Tuttavia studiare il funzionamento di una CPU attuale (Intel Core Series) è estremamente complicato e richiederebbe una serie di conoscenze e competenze che esulano dal corso di TPSI dell'Istituto Tecnico
- Per tale motivo l'uso di un simulatore, è particolarmente importante in questo contesto

--- #slide 1

# Macchina di Von Neumann

Simulatore

- Il simulatore di Von Neumann è un'applicazione Web ed è disponibile qui: [https://mancusoa74.github.io/TPSI/vnsimulator.html](https://mancusoa74.github.io/TPSI/vnsimulator.html)

<br />
<center>
<img src="/media/vn01.png" width="650" />
</center>

--- #slide 1

# Macchina di Von Neumann

Simulatore

- Il simulatore della macchina di Von Neumann, architetturalmente equivalente ad una CPU moderna, permette l'esecuzione di un programma scritto in **assembler di Von Neumann**
- Il simulatore permette di osservare, ogni singolo passo del funzionamento della CPU, durante l'esecuzione di un'istruzione assembler.
- Il simulatore permette di vedere lo stato a run-time dei principali registri della CPU.
- L’animazione dell’esecuzione delle singole istruzioni del programma ha un valore didattico insuperabile per veicolare la comprensione del funzionamento di base della macchina di Von Neumann e quindi della CPU dei computer moderni.
- Per tali motivi lo studio del funzionamento della CPU di Von Neumann, è relativamente semplice. 
- Pertanto permette la comprensione del funzionamento base di una CPU moderna, senza appesantire il processo di dettagli tecnici poco utili all'apprendimento.
  
--- #slide 1

# Macchina di Von Neumann

Simulatore

<img src="/media/vn02.png" class="centro" />

- La parte sinistra del simulatore contiene la CPU con tutti i principali registri:
  - IR o Instruction Register
  - PC o Program Counter
  - ACC o Accumulatore

- La parte destra del simulatore contiene la <br />memoria RAM
  - La parte in alto contiene la parte <br />di programma
  - La parte più bassa contiene i dati

--- #slide 1

# Macchina di Von Neumann

Simulatore

<img src="/media/vn03.png" class="centro" />

- La barra in alto a destra contiene il menù di gestione dei programmi:
  - **Nuovo**: Permette di creare un nuovo <br />programma
  - **Apri**: Permette di caricare un programma <br />dall'HDD nel il simulatore
  - **Salva**: Permette di salvare su HDD <br />un programma sviluppato nel simulatore
    - il file salvato è in formato ```.vnsp```

--- #slide 1

# Macchina di Von Neumann

Simulatore

<img src="/media/vn04.png" class="centro" />

- La barra in basso a sinistra, mette a disposizione i comandi di controllo del flusso del programma:
  - **Avvia**: Avvia il programma a partire dalla locazione di memoria specificata nel registro **PC**
  - **Passo**: Permette di eseguire il programma passo-passo, un istruzione alla volta
  - **Pausa**: Permette di mettere in pausa l'esecuzione del programma
  - **Stop**: Arresta l'esecuzione del programma

--- #slide 1

# Macchina di Von Neumann

Simulatore

<img src="/media/vn05.png" class="centro" />

- La barra in basso a destra, mette a disposizione:
  - **Titolo**: il nome del programma e del file durante l'operazione di salvataggio
  - **Intervallo**: imposta la velocità di esecuzione delle istruzioni
    - più il valore è basso è più è veloce la CPU
    - più il valore è alto e più le istruzioni <br />sono eseguite lentamente

- Il parametro **Intervallo** è molto utile per rallentare lo svolgimento del programma e comprendere a fondo il funzionamento della CPU.

--- #slide 1

# Macchina di Von Neumann

Esempio di funzionamento

<img src="/media/vn06.png" class="centro" />

- Realizziamo un programma in **assembler di <br />Von Neumann** che somma due numeri <br />interi contenuti nelle locazioni **100** e **101**
- Le istruzioni sono:
  - LOD 100
  - ADD 101
  - HLT

- Le locazioni di memoria sono:
  - 100 = 10
  - 101 = 5

--- #slide 1

# Macchina di Von Neumann

Esempio di funzionamento

<img src="/media/vn07.png" class="centro" />

- Premi il tasto **Passo** in modo che venga <br />eseguita la prima istruzione
- Al termine noterai che:
  - il PC ha assunto valore 1
  - il valore 10, contenuto in 100, è ora presente <br />nell'accumulatore

--- #slide 1

# Macchina di Von Neumann

Esempio di funzionamento

<img src="/media/vn08.png" class="centro" />

- Premi il tasto **Passo** in modo che venga <br />eseguita la seconda istruzione
- Al termine noterai che:
  - il PC ha assunto valore 2
  - l'accumulatore contiene il valore 15 <br />(cioè la somma tra 10 e 5)

--- #slide 1

# Macchina di Von Neumann

Esempio di funzionamento

<img src="/media/vn09.png" class="centro" />

- Premi il tasto **Passo** in modo che venga <br />eseguita la terza istruzione
- Al termine noterai che:
  - il PC ha assunto valore 3
  - l'accumulatore contiene il valore 15 <br />(cioè la somma tra 10 e 5)
  - il programma termina (Halt o HLT)

- Prova ora a impostare il PC a 0 e a <br />premere il tasto **Avvia** e regola <br />l'intervallo ad un valore per te ottimale
- Il programma verrà eseguito fino <br />all'istruzione HLT
  