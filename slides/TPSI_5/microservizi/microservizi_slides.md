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
materia: "RETI"
as: "2022/2023"
version: '1.0.0'

---  


# SISTEMI & RETI

Microservizi

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>


--- 

# Microservizi

Introduzione

- I container Docker sono un meccanismo molto potente  e flessibile che sta alla base del  modernissimo paradigma di sviluppo a `microservizi`
- I ***microservizi*** sono un approccio per sviluppare e organizzare l’architettura dei software come insieme di servizi indipendenti di piccole dimensioni che comunicano tra loro tramite API ben definite. 
- Questi servizi sono controllati da piccoli team autonomi.
- Ciò in contrapposizione ad un modello più tradizionale di tipo **monolitico**
- Le architetture dei microservizi permettono di scalare e sviluppare le applicazioni in modo più rapido e semplice, permettendo di promuovere l’innovazione e accelerare il time-to-market di nuove funzionalità.

<img src="/media/microservizi_00.png" style="width:300px;margin:auto;"/>

--- 

# Microservizi

Introduzione


<img src="/media/microservizi_01.png" style="width:700px;margin:auto;"/>

--- 

# Microservizi

Introduzione

**Architettura monolitica vs. architettura di microservizi**

- Nelle architetture monolitiche tutti i processi sono strettamente collegati tra loro e vengono eseguiti come un singolo servizio. 
- Ciò significa che se un processo dell’applicazione sperimenta un picco nella richiesta, è necessario ridimensionare l'intera architettura. 
- Aggiungere o migliorare una funzionalità dell’applicazione monolitica diventa più complesso, in quanto sarà necessario aumentare la base di codice. 
- Tale complessità limita la sperimentazione e rende più difficile implementare nuove idee. 
- Le architetture monolitiche rappresentano un ulteriore rischio per la disponibilità dell’applicazione, poiché la presenza di numerosi processi dipendenti e strettamente collegati aumenta l’impatto di un errore in un singolo processo.


--- 

# Microservizi

Introduzione

**Architettura monolitica vs. architettura di microservizi**

- Con un’architettura basata su microservizi, un’applicazione è realizzata da componenti indipendenti che eseguono ciascun processo applicativo come un servizio (filosofia Unix) 
- Tali servizi comunicano attraverso un’interfaccia ben definita che utilizza API REST. 
- I servizi sono realizzati per le funzioni aziendali e ogni servizio esegue una sola funzione.(filosofia Unix) 
- Poiché eseguito in modo indipendente, ciascun servizio può essere aggiornato, distribuito e ridimensionato per rispondere alla richiesta di funzioni specifiche di un’applicazione.

--- 

# Microservizi

Introduzione

I microservizi sono:

**Autonomi**

- Ciascun servizio nell’architettura basata su microservizi può essere sviluppato, distribuito, eseguito e ridimensionato senza influenzare il funzionamento degli altri componenti. 
- I servizi non devono condividere alcun codice o implementazione con gli altri. 
- Qualsiasi comunicazione tra i componenti individuali avviene attraverso API ben definite.


**Specializzati**

- Ciascun servizio è progettato per una serie di capacità e si concentra sulla risoluzione di un problema specifico. 
- Se, nel tempo, gli sviluppatori aggiungono del codice aggiuntivo a un servizio rendendolo più complesso, il servizio può essere scomposto in servizi più piccoli.


--- 

# Microservizi

Introduzione

I principali vantaggi dei microservizi sono:

**Agilità**

- I microservizi promuovono le organizzazioni di team indipendenti di dimensioni ridotte che diventano proprietari del servizio che gestiscono. 
- I team agiscono in contesti ridotti e ben delineati così che possano lavorare in modo più indipendente e rapido. 
- Ciò riduce i tempi del ciclo di sviluppo.

**Scalabilità e flessibilità**

- I microservizi ti consentono di scalare ciascun servizio in modo indipendente per rispondere alla richiesta delle funzionalità che la tua applicazione supporta. (**scalabilità orizzontale vs verticale**)
- Ciò permette ai team di ridimensionare in modo corretto l’infrastruttura in base alle necessità e di scalare l’applicazione in modo preciso in caso in cui il servizio sperimenti un amento di richieste.

--- 

# Microservizi

Introduzione

I principali vantaggi dei microservizi sono:

**Semplicità di distribuzione**

- I microservizi supportano l’integrazione continua e la distribuzione continua (CI/CD), così da poter provare nuove idee in modo più semplice e ripristinare impostazioni precedenti quando qualcosa non funziona. 
- Gli errori, dunque, influiscono di meno sul costo delle operazioni, permettendoti di sperimentare, aggiornare il codice in modo più semplice e accelerare il time-to-market delle nuove funzionalità.

**Libertà tecnologica**

- Le architetture basate su microservizi non applicano un unico approccio all’intera applicazione. 
- I team hanno la libertà di scegliere gli strumenti migliori per risolvere i loro problemi specifici. 
- Di conseguenza, i team che costruiscono i microservizi possono scegliere il miglior strumento per ciascun lavoro.

--- 

# Microservizi

Introduzione

I principali vantaggi dei microservizi sono:

**Codice riutilizzabile**

- Dividere il software in moduli piccoli e ben definiti permette ai team di utilizzare funzioni per più scopi. 
- Un servizio scritto per una certa funzione può essere utilizzato come blocco costruttivo per un’altra. 
- Ciò permette all’applicazione di effettuare il bootstrap in modo indipendente, poiché gli sviluppatori possono creare nuove capacità senza dover scrivere del codice da zero.

**Resilienza**

- L’indipendenza dei servizi aumenta la resilienza di un’applicazione in caso di errori. 
- In un’architettura monolitica, un errore in un unico componente potrebbe avere ripercussioni sull’intera applicazione. 
- Con i microservizi, le applicazioni possono gestire completamente gli errori di un servizio isolando la funzionalità senza bloccare l’intera applicazione.

--- 

# Microservizi

Introduzione

- Tuttavia i microservizi presentano anche dei problemi e degli svantaggi
- I microservizi rendono il tuo sistema un sistema distribuito
- Nel campo dell'informatica è noto che i sistemi distribuiti sono molto complessi
- Le piattaforme di gestione dei microservizi sono quindi complesse e possono essere costose da mantenere e gestire
- Richiedono pesonale specializzato e con skill elevati 
- Monitorare lo stato di un'applicazione risulta complesso in quanto non esiste uno stato complessivo, ma i singoli stati dei vari microservizi
- Correlare gli stati può risultare complesso per sistemi grande (migliaia di microservizi)

--- 

# Microservizi

Introduzione

- Esistono varie piattaforme per i microservizi
- La più nota e capostipite è `Kubernetes o K8s` di Google e poi rilasciata con licenza Open Source
  - Kubernetes è una piattaforma per automatizzare il deployment, la scalabilità e la gestione dei container che compongono l'applicazione
  - Anche i maggiori cloud provider offrono soluzioni per la gesgtione dei microservizi
- Amazon mette a disposizione `Amazon Elastic Container Service`
  - Amazon ECS è un servizio di gestione di container altamente scalabile ad elevate prestazioni che supporta i container Docker e consente di eseguire applicazioni su un cluster gestito di istanze Amazon EC2 in modo semplice.
  

<img src="/media/microservizi_02.png" style="width:150px;margin:auto;"/>
<img src="/media/microservizi_03.jpg" style="width:200px;position:relative; top: -8rem;left: 35rem;"/>

--- 

# Microservizi

Introduzione

- Microsfot mette a dispozizione `Azure Kubernetes Service (AKS)`
  - Il servizio Azure Kubernetes (AKS) offre il modo più rapido per iniziare a sviluppare e distribuire app native del cloud in Azure. 

- RedHat mette a disposizione `Red Hat Openshift`
  - Red Hat OpenShift® è una piattaforma unificata pensata per sviluppare, distribuire ed eseguire applicazioni su larga scala. 
  - Lavora in modo più intelligente e rapido con un set completo di servizi per portare app sul mercato nell'infrastruttura di tua scelta.


<img src="/media/microservizi_04.png" style="width:250px;margin:auto;"/>
<img src="/media/microservizi_05.png" style="width:100px;position:relative; top: -7rem;left: 40rem;"/>

