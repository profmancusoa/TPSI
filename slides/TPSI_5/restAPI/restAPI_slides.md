---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
#background: https://source.unsplash.com/collection/94734566/1920x1080
background: /assets/intro01.jpg
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
#highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
aspectRatio: '16_/9'
routerMode: 'hash'
materia: TPSI 5
as: 2022/2023
version: '1.0.0'

# https://devopscell.com/api/rest/json/nodejs/docker/2017/09/27/api-rest-json-server-nodejs-docker.html

---  

# TPSI 5

RESTful Web Sercices

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

---

# REST Web Services

Intro

- In informatica un Web service (servizio web), secondo la definizione data dal World Wide Web Consortium (W3C), è un sistema software progettato per supportare l'interoperabilità tra diversi elaboratori su una medesima rete oppure in un contesto distribuito.

<img src="/media/rest_01.png" width="400" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# REST Web Services

Intro

- Un Web Service è:
  - un servizio offerto da un dispositivo elettronico a un altro dispositivo elettronico che comunicano tramite Internet
  - un server in esecuzione su un dispositivo informatico, in ascolto di richieste su una particolare porta che serve documenti Web (HTTP, JSON, XML, immagini)


<img src="/media/rest_01.png" width="350" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# REST Web Services

Intro

- L'uso del termine "Web" in Web Service non va frainteso.
- I servizi Web non utilizzano un'interfaccia utente, ma sono piuttosto un servizio da macchina a macchina in esecuzione su Internet che utilizza i protocolli del Web (HTTP/HTTPS e altri).


<img src="/media/rest_02.png" width="600" style="margin:auto;position:relative; left: 0px; top: 20px;">


---

# REST Web Services

Intro

- In pratica, un servizio Web fornisce comunemente un'interfaccia basata sul Web orientata agli oggetti a un server database, utilizzato ad esempio da un altro server Web o da un'app mobile, che fornisce un'interfaccia GUI all'utente finale. 
- Molte organizzazioni che forniscono dati in pagine HTML formattate forniranno anche tali dati sul proprio server come XML o JSON tramite un servizio Web per consentire la diffusione. 
- Un'altra applicazione offerta all'utente finale può essere un mashup, in cui un server Web utilizza diversi servizi Web su macchine diverse e compila il contenuto in un'unica interfaccia utente.

<img src="/media/rest_03.png" width="450" style="margin:auto;position:relative; left: 0px; top: 20px;">


---

# REST Web Services

Intro

- I Web Services sono lo strumento perfetto per l'implementazione dell'architettura a microservizi
  
<img src="/media/rest_04.png" width="600" style="margin:auto;position:relative; left: 0px; top: 20px;">


---

# REST Web Services

Intro

- Il concetto di web service non è nuovo nel mondo dell'informatica
- Il suo genitore architetturale è l'**RPC** o **Remote Procedure Call**
- Le RPC sono un metodo, risalente agli anni 70, che permettono ad un programma in esecuzione su un host, di invocare una funzione che gira su un host separato e connesso via rete all'host richiedente. Questa rete oggi giorno è Internet
- Il web service è concettualemente uguale ma adotta le moderne tecnologie e protocolli del web



<img src="/media/rest_05.png" width="300" style="margin:auto;position:relative; left: 0px; top: 20px;">


---

# REST Web Services

Intro

- Esempi di Web Service sono
  - Asynchronous JavaScript And XML o AJAX
  - XML-RPC
  - JSON-RPC
  - JSON-WSP
  - SOAP WS
  - **RESTfull Web Services**

---

# REST Web Services

Architettura RESTfull

`REST (Representational State Transfer)`

- I **RESTful web services** sono un approccio per creare servizi web basati sull'architettura REST. 
  

<img src="/media/rest_06.png" width="600" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# REST Web Services

Architettura RESTfull

- REST è un insieme di principi architetturali pensati per la progettazione di sistemi scalabili e mantenibili. 
- Vediamo una breve introduzione ai concetti chiave dei RESTful web services.
- L'architettura REST è stata introdotta da Roy Fielding nel 2000 e si basa sui seguenti principi:
  - **Stateless**: Ogni richiesta del client al server deve contenere tutte le informazioni necessarie per comprendere e processare la richiesta. Il server non memorizza informazioni sullo stato del client tra le richieste successive.

  - **Client-Server**: Il sistema è diviso in due parti: il client, che gestisce l'interfaccia utente, e il server, che gestisce le risorse e le funzionalità del backend. Questa separazione consente di sviluppare e migliorare indipendentemente le parti del sistema.

---

# REST Web Services

Architettura RESTfull

- **Cacheable**: Le risposte del server possono essere memorizzate nella cache dal client per migliorare le prestazioni. Il server deve specificare se una risposta può essere memorizzata nella cache o meno.

- **Layered System**: L'architettura può essere suddivisa in livelli gerarchici, con ogni livello che fornisce una serie di funzionalità. Questo permette una maggiore flessibilità e facilita l'evoluzione del sistema.
  
- **Uniform Interface**: Il sistema espone un'interfaccia uniforme per interagire con le risorse. Questo rende più facile capire e utilizzare il sistema e promuove la standardizzazione.


---

# REST Web Services

RESTfull

- I RESTful web services utilizzano il protocollo HTTP per implementare l'architettura REST. 
- Le **risorse** sono identificate attraverso gli URI (Uniform Resource Identifiers) e vengono manipolate tramite i metodi standard HTTP:
    - **GET**: Recupera una risorsa o un insieme di risorse.
    
    - **POST**: Crea una nuova risorsa.
    
    - **PUT**: Aggiorna una risorsa esistente.
    
    - **DELETE**: Elimina una risorsa.


<img src="/media/rest_07.png" width="500" style="margin:auto;position:relative; left: 200px; top: -120px;">

---

# REST Web Services

RESTfull

- Ogni RESTful Web Service per una risorsa deve offrire al minimo le funzionalità **CRUD**
  - `C`reate: crea una nuova risorsa (es: nuovo studente)
  
  - `R`ead: legge o preleva una o più risorse disponibili (lista di studenti)
  
  - `U`pdate: aggiorna le caratteristiche e attributi di una risorsa esistente (cambio di numero di telefono)
  
  - `D`elete: rimuove una risorsa dal web service (rimozione studente dopo il diploma)

<br><br>

- Queste funzionalità si sposano perfettamente con i verbi del protocollo HTTP
  
---

# REST Web Services

RESTfull


<img src="/media/rest_08.png" width="800" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# REST Web Services

RESTfull

- Le risorse vengono solitamente rappresentate in formati come JSON o XML (nel 2023 JSON). 
- I RESTful web services comunicano lo stato delle risorse e delle operazioni attraverso i codici di stato HTTP (ad esempio, 200 OK, 404 Not Found, 500 Internal Server Error)

<br>

<img src="/media/rest_09.png" width="500" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# REST Web Services

RESTfull

- I RESTful web services offrono numerosi vantaggi, tra cui:
  - **Scalabilità**: Grazie al loro design stateless, i RESTful web services possono essere facilmente scalati per gestire un gran numero di richieste.
  - **Mantenibilità**: L'uso di un'interfaccia uniforme e la separazione tra client e server rendono i RESTful web services facili da mantenere e far evolvere nel tempo.
  - **Interoperabilità**: I RESTful web services possono essere utilizzati da qualsiasi client che supporti il protocollo HTTP, il che li rende altamente interoperabili.
  - **Performance**: La possibilità di memorizzare nella cache le risposte del server può migliorare le prestazioni complessive del sistema.

- In sintesi, i RESTful web services sono un metodo popolare e efficace per creare servizi web scalabili e mantenibili basati sull'architettura REST. Utilizzano il protocollo HTTP per manipolare le risorse e comunicare lo stato delle operazioni, offrendo vantaggi in termini di scalabilità, mantenibilità, interoperabilità e performance.

---

# REST Web Services

Esercitazione 01

- In questa esercitazione creeremo un RESTful web service di test utilizzando docker e json-server
- In questo modo ogni studente potra far girare il web service sul proprio computer
- Una volta che il web service sarà pronto lo utilizzeremo con un client REST


---

# REST Web Services

Esercitazione 01

- Creaimo una nuoiva immagine docker pe ril nostro container json-sever
- Per fare ciò in una directory vuota (*/tmp/json-server*) creaimo il seguente **Dockerfile**

```bash
FROM debian:11-slim

ENV tmp_dir /api

RUN mkdir /api
RUN apt-get update \
  && apt-get install -y curl \
  && curl -sL https://deb.nodesource.com/setup_18.x | bash - \
  && apt-get install -y nodejs
RUN npm install -g json-server

RUN echo '{"students":[{"id":1,"nome":"Marco","cognome":"Garabello","classe":"5INFO","telefono":"3345678987","media":9.4},{"id":2,"nome":"Dario","cognome":"Ruggieri","classe":"5INFO","telefono":"3246476879","media":9.5},{"id":3,"nome":"Alex","cognome":"Chindris","classe":"5INFO","telefono":"3445643216","media":8}]}' > /api/students.json

ENTRYPOINT ["json-server", "--port", "8080", "--host", "0.0.0.0"]
CMD ["/api/students.json"]
```

---

# REST Web Services

Esercitazione 01

- Ora facciamo il build dell'immagine con i seguenti comandi

```bash
# cd /tmp/json-server
# docker build -t json-server-img .


Sending build context to Docker daemon  483.8kB
Step 1/8 : FROM debian:11-slim
 ---> d0cf0e3d07c6
Step 2/8 : ENV tmp_dir /api
 ---> Running in 926bd53cce1e
 ...
 ...
Removing intermediate container 216244175c64
 ---> 8335df7ccd21
Successfully built 8335df7ccd21

Successfully tagged json-server-img:latest  <<<<< se vedi questa linea significa che tutto è andato a buon fine
```

---

# REST Web Services

Esercitazione 01

- Ora se verifichiamo la lista delle immagini docker presenti nel nostro sistema
- Dovremmo vederne una nuova chiamata *json-server-img*

<br>

```bash
docker image ls                         
REPOSITORY                      TAG                IMAGE ID       CREATED              SIZE
json-server-img                 latest             8335df7ccd21   About a minute ago   337MB
debian                          11-slim            d0cf0e3d07c6   43 hours ago         80.5MB
...
....
```

<br>

- Questa è l'immagine che abbiamo creato pronta per eseere istanziata in un nuovo container


---

# REST Web Services

Esercitazione 01

- Ora eseguiamo il nostro container a partire dall'immagine appena creata, tramite il seguente comando

```bash
# docker run --rm -it -d --name jsonserver -p 8080:8080 json-server-img
```

<br>

- ed ecco in pochi ms il nostro container json-server pronto per l'uso

<br><br>

 ```bash
 CONTAINER ID   IMAGE             PORTS                                       NAMES
eeb596969f7c   json-server-img    0.0.0.0:8080->8080/tcp, :::8080->8080/tcp   jsonserver

 ```

<br>

- Magia di docker :)
  

---

# REST Web Services

Esercitazione 01

- Verifichiamo che il web service sia raggiungibile aprendo il browser su *http://localhost:8080*

<br>

<img src="/media/rest_10.png" width="800" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# REST Web Services

Esercitazione 02

- In questa esercitazione installeremo **Thunder Client for VS Code**
- Thunder Client for VS Code è un REST API client integrato direttamente in VS Code
- Questo ci permetterà di lavorare e testare il nostro web service creato nell'esercitazione #1

<img src="/media/rest_11.png" width="800" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# REST Web Services

Esercitazione 02

- Nella sezione *Extensions* o *Estensioni* di VS Code ricerca **vscode-thunder-client**
- Poi premi **install**
- Ultimata l'installazione una nuova icona comparirà nella tool bar di VS Code

<img src="/media/rest_12.png" width="400" style="margin:auto;position:relative; left: -250px; top: 20px;">

<img src="/media/rest_13.png" width="100" style="margin:auto;position:relative; left: 300px; top: -300px;">

---

# REST Web Services

Esercitazione 02

- Facendo click sull'icona facciamo partire *thunder-client*
- Se tutto è andato bene vedrai un'interfaccia simile a questa

<img src="/media/rest_14.png" width="400" style="margin:auto;position:relative; left: 280px; top: -150px;">

---

# REST Web Services

Esercitazione 03

- cxc

---

# REST Web Services

Esercitazione 03

- cxc

---

# REST Web Services

Esercitazione 03

- cxc

---

# REST Web Services

Esercitazione 03

- cxc

---

# REST Web Services

Esercitazione 03

- cxc

---

# REST Web Services

Esercitazione 03

- cxc




---

&nbsp;
<center>
<img src="/media/nosql_27.jpg" width="800" />
</center>
