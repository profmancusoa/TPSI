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
as: 2023/2024
version: '1.1.0'

---  

# TPSI 5

API & RESTful Web Sercices

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>


---

# API

Intro 

- Questa presentazione fornisce una panoramica dei servizi Web e delle **RESTful API** e dei loro vantaggi nello sviluppo Web moderno. 
- Illustra i concetti e i principi chiave dei servizi Web e delle API RESTful, inclusi i metodi HTTP, l'identificazione delle risorse e la loro rappresentazione. 


<img src="/media/rest_00.png" width="250" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# API

Intro 

- `API` è l'acronimo di `Application Programming Interface`
- Un'API è un insieme di regole, protocolli e strumenti che consentono a diverse applicazioni software di comunicare tra loro, in breve è un mezzo di comunicazione tra due componenti software. 
- In altre parole, è un'interfaccia che definisce come le diverse componenti del software possono interagire e scambiare informazioni tra loro.
 
 <img src="/media/rest_01.png" width="550" style="margin:auto;position:relative; left: 0px; top: 20px;">


---

# API

Intro 

- Un'API astrae il funzionamento interno e la complessità di un programma software e consente all'utente di quell'API (un altro software) di concentrarsi esclusivamente sugli input e sugli output necessari per utilizzarlo.
- Quando creano software, gli sviluppatori raramente scrivono software da zero e fanno uso di altre librerie di terze parti che espongono un API.
- Lo scopo principale di un'API è fornire i dati richiesti da un'applicazione. 
- Diciamo che stai costruendo un'applicazione meteo che visualizza la temperatura. 
- Invece di costruire tu stesso la tecnologia per rilevare la temperatura, accedi all'API fornita dall'istituto meteorologico

---

# API

Intro 

 <img src="/media/rest_02.png" width="700" style="margin:auto;position:relative; left: 0px; top: -30px;">


---

# API

Intro 

- Le API fungono da ponte di comunicazione tra le diverse applicazioni, consentendo loro di condividere dati, funzionalità e risorse in modo sicuro e **strutturato**. 
- Le API possono essere utilizzate per consentire l'integrazione tra applicazioni diverse, consentire l'accesso a servizi o funzionalità di terze parti, o semplicemente per consentire la comunicazione tra diverse parti di un'applicazione stessa.


 <img src="/media/rest_03.png" width="500" style="margin:auto;position:relative; left: 0px; top: -30px;">

---

# API

Intro 

- Le API definiscono:
  - **le operazioni** che possono essere eseguite (metodi) 
  - **i dati** che possono essere trasmessi tra il client (l'applicazione che richiede l'accesso) e il server (l'applicazione o il servizio che fornisce l'accesso). 
- Queste operazioni vengono definite attraverso protocolli di comunicazione standard come HTTP (Hypertext Transfer Protocol) per le API Web.


---

# API

Intro 

Le API possono essere implementate in vari modi. Alcuni dei tipi comuni di API includono:
- `API Web`: Sono le API che utilizzano il protocollo HTTP per consentire la comunicazione tra client e server attraverso Internet. Le API Web possono essere basate su diversi standard, come REST (Representational State Transfer) o SOAP (Simple Object Access Protocol).
- `API di libreria`: Sono le API che forniscono un insieme di funzioni o procedure predefinite all'interno di una libreria di codice.
- `API di sistema operativo`: Sono le API fornite dai sistemi operativi per consentire alle applicazioni di accedere alle funzionalità del sistema, come la gestione dei file, la rete o l'interfaccia utente.

<Banner fg="yellow" bg="green" padding="25px">
Le API sono ampiamente utilizzate nello sviluppo software per migliorare l'efficienza, favorire la riutilizzabilità del codice e consentire l'integrazione tra diverse applicazioni o servizi. Fornire un'API ben progettata può semplificare lo sviluppo di applicazioni di terze parti e promuovere l'interoperabilità tra sistemi diversi.
</Banner>


---

# REST Web Services

Intro

- In Informatica un `Web service` (servizio web), secondo la definizione data dal World Wide Web Consortium (W3C), è un sistema software progettato per supportare l'interoperabilità tra diversi elaboratori su una medesima rete oppure in un contesto distribuito.

<img src="/media/rest_04.png" width="400" style="margin:auto;position:relative; left: 0px; top: 20px;">


---

# REST Web Services

Intro

- Un Web Service è:
  - un servizio offerto da un computer a un altro dispositivo che comunicano tramite Internet
  - un modo per consentire a diverse applicazioni o sistemi di comunicare tra loro attraverso la rete.
  - un servizio in esecuzione su server, in ascolto di richieste su una particolare porta che serve documenti Web (HTTP, JSON, XML, immagini)
  - consente lo scambio di dati e l'esecuzione di operazioni su server remoti tramite protocolli di comunicazione standard come HTTP. 

<img src="/media/rest_04.png" width="300" style="margin:auto;position:relative; left: 100px; top: -20px;">

---

# REST Web Services

Intro

- Quindi come si può notare da queste prime definizioni, Web Service e API hanno molto in comune
- Infatti un Web Service espone ed implementa un API utilizzando Internet e i protocolli ad essa correlati
- L'implementazione più diffusa di un Web Service è tramite un `RESTful API`
  

<img src="/media/rest_05.png" width="600" style="margin:auto;position:relative; left: 0px; top: 40px;">


---

# REST Web Services

Intro

- L'uso del termine "Web" in Web Service non va frainteso.
- I servizi Web `NON` utilizzano un'interfaccia utente, ma sono piuttosto un servizio da macchina a macchina (Machine To Machine - MTM) in esecuzione su Internet che utilizza i protocolli del Web (HTTP/HTTPS e altri).


<img src="/media/rest_06.png" width="600" style="margin:auto;position:relative; left: 0px; top: 20px;">


---

# REST Web Services

Intro

- In pratica, un servizio Web fornisce comunemente un'interfaccia basata sul Web orientata agli oggetti a un server database, utilizzato ad esempio da un altro server Web o da un'app mobile, che fornisce un'interfaccia GUI all'utente finale. 
- Molte organizzazioni che forniscono dati in pagine HTML formattate forniranno anche tali dati sul proprio server come XML o JSON tramite un servizio Web per consentire la diffusione. 
- Un'altra applicazione offerta all'utente finale può essere un mashup, in cui un server Web utilizza diversi servizi Web su macchine diverse e compila il contenuto in un'unica interfaccia utente.

<img src="/media/rest_07.png" width="450" style="margin:auto;position:relative; left: 0px; top: 20px;">


---

# REST Web Services

Intro

- I Web Services sono lo strumento perfetto per l'implementazione dell'architettura a microservizi
  
<img src="/media/rest_08.png" width="600" style="margin:auto;position:relative; left: 0px; top: 20px;">


---

# REST Web Services

Intro

- Il concetto di web service non è nuovo nel mondo dell'informatica
- Il suo genitore architetturale è l'**RPC** o **Remote Procedure Call**
- Le RPC sono un metodo, risalente agli anni 70, che permettono ad un programma in esecuzione su un host, di invocare una funzione che gira su un host separato e connesso via rete all'host richiedente. Questa rete oggi giorno è Internet
- Il web service è concettualemente uguale ma adotta le moderne tecnologie e protocolli del web



<img src="/media/rest_09.png" width="300" style="margin:auto;position:relative; left: 0px; top: 20px;">


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
  

<img src="/media/rest_010.png" width="600" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# REST Web Services

Architettura RESTfull

<Banner padding="20px">
REST è un insieme di principi architetturali pensati per la progettazione di sistemi scalabili e mantenibili. 
</Banner>
<br>

- Le API RESTful (Representational State Transfer) sono un tipo di servizi Web che seguono i principi dell'architettura REST
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

Principi chiave dei servizi Web e delle API RESTful:

- `Metodi HTTP`: I metodi HTTP (come GET, POST, PUT e DELETE) definiscono le operazioni che possono essere eseguite sulle risorse. Ad esempio, il metodo GET viene utilizzato per recuperare le informazioni su una risorsa, mentre il metodo POST viene utilizzato per creare una nuova risorsa sul server.
- `Identificazione delle risorse`: Ogni risorsa all'interno di un servizio Web ha un identificatore unico chiamato URL (Uniform Resource Locator) che rappresenta la sua posizione sul server. Gli URL sono utilizzati per identificare e accedere alle risorse tramite le API RESTful.
- `Rappresentazione`: Le risorse possono essere rappresentate in diversi formati, come JSON (JavaScript Object Notation) o XML (eXtensible Markup Language), per consentire la trasmissione dei dati tra il client e il server. La scelta del formato di rappresentazione dipende dalle esigenze dell'applicazione e delle tecnologie coinvolte.
  
---

# REST Web Services

RESTfull

- REST è un'architettura software basata sul protocollo HTTP e sfrutta i suoi metodi per consentire l'accesso e la manipolazione delle risorse sul server
- Le API RESTful utilizzano gli `endpoint` URL per identificare le risorse e i diversi metodi HTTP (come GET, POST, PUT, DELETE) per interagire con tali risorse.
- Le **risorse** sono identificate attraverso gli `URI (Uniform Resource Identifiers)` e vengono manipolate tramite i metodi standard HTTP:
    - **GET**: Recupera una risorsa o un insieme di risorse.
    
    - **POST**: Crea una nuova risorsa.
    
    - **PUT**: Aggiorna una risorsa esistente.
    
    - **DELETE**: Elimina una risorsa.


<img src="/media/rest_011.png" width="500" style="margin:auto;position:relative; left: 200px; top: -150px;">

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

<img src="/media/rest_012.png" width="800" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# REST Web Services

RESTfull

- Le risorse vengono solitamente rappresentate in formati come JSON o XML (nel 2023 JSON). 
- I RESTful web services comunicano lo stato delle risorse e delle operazioni attraverso i codici di stato HTTP (ad esempio, 200 OK, 404 Not Found, 500 Internal Server Error)

<br>

<img src="/media/rest_013.png" width="500" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# REST Web Services

RESTfull

- I RESTful web services offrono numerosi vantaggi, tra cui:
  - **Scalabilità**: Grazie al loro design stateless, i RESTful web services possono essere facilmente scalati per gestire un gran numero di richieste.
  - **Mantenibilità**: L'uso di un'interfaccia uniforme e la separazione tra client e server rendono i RESTful web services facili da mantenere e far evolvere nel tempo.
  - **Interoperabilità**: I RESTful web services possono essere utilizzati da qualsiasi client che supporti il protocollo HTTP, il che li rende altamente interoperabili.
  - **Performance**: La possibilità di memorizzare nella cache le risposte del server può migliorare le prestazioni complessive del sistema.

---

# REST Web Services

RESTfull

Casi d'uso reali dei servizi Web e delle API RESTful:
- **Integrazione tra sistemi**: Le API RESTful sono ampiamente utilizzate per integrare diversi sistemi e applicazioni. Ad esempio, un'applicazione web può utilizzare un servizio Web esterno per recuperare dati in tempo reale da un'altra fonte, come informazioni sui voli da un provider di servizi di viaggio.
- **Sviluppo di applicazioni mobili**: Le API RESTful sono molto utili nello sviluppo di applicazioni mobili, in quanto consentono alle app di comunicare con i server per ottenere e inviare dati. Ad esempio, un'applicazione di social media può utilizzare un'API RESTful per caricare foto, inviare messaggi o ottenere informazioni sui contatti dell'utente.
- **Microservizi e architetture scalabili**: Le API RESTful sono un componente chiave delle architetture basate su microservizi, in cui le diverse funzionalità dell'applicazione sono suddivise in servizi autonomi. Le API RESTful consentono


---

# REST Web Services

RESTfull

<Banner padding="30px">
In sintesi, i RESTful web services sono un metodo popolare e efficace per creare servizi web scalabili e mantenibili basati sull'architettura REST. Utilizzano il protocollo HTTP per manipolare le risorse e comunicare lo stato delle operazioni, offrendo vantaggi in termini di scalabilità, mantenibilità, interoperabilità e performance.
</Banner>

---

# REST Web Services

Esercitazione 01

- In questa esercitazione creeremo un RESTful web service di test utilizzando docker e json-server
- In questo modo ogni studente potra far girare il web service sul proprio computer
- Una volta che il web service sarà pronto lo utilizzeremo con un client REST
- La risorsa creata si chiama ***students*** ed ha il seguente schema

<br>

```json
{
    "id": <number>,
    "nome": <string>,
    "cognome": <string>,
    "classe": <string>,
    "telefono": <string>,
    "media":  <number>
  },
```

- json-server ci permette di ottenere un RESTful web service in modo facilissimo
- useremo un client REST per fare le query a questo web service seguendo il paradigma RESTful

---

# REST Web Services

Esercitazione 01

- Creaimo una nuoiva immagine docker per il nostro container json-sever
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
- Dovremmo vederne una nuova chiamata ***json-server-img***

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

<br>

 ```bash
 CONTAINER ID   IMAGE             PORTS                                       NAMES
eeb596969f7c   json-server-img    0.0.0.0:8080->8080/tcp, :::8080->8080/tcp   jsonserver

 ```

<br>

- Magia di docker :)
  
<img src="/media/rest_19.png" width="250" style="margin:auto;position:relative; left: 0px; top: -20px;">


---

# REST Web Services

Esercitazione 01

- Verifichiamo che il web service sia raggiungibile aprendo il browser su *http://localhost:8080*

<br>

<img src="/media/rest_14.png" width="800" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# REST Web Services

Esercitazione 02

- In questa esercitazione installeremo **Thunder Client for VS Code**
- Thunder Client for VS Code è un REST API client integrato direttamente in VS Code
- Questo ci permetterà di lavorare e testare il nostro web service creato nell'esercitazione #1

<img src="/media/rest_15.png" width="800" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# REST Web Services

Esercitazione 02

- Nella sezione *Extensions* o *Estensioni* di VS Code ricerca **vscode-thunder-client**
- Poi premi **install**
- Ultimata l'installazione una nuova icona comparirà nella tool bar di VS Code

<img src="/media/rest_16.png" width="400" style="margin:auto;position:relative; left: -250px; top: 20px;">

<img src="/media/rest_17.png" width="100" style="margin:auto;position:relative; left: 300px; top: -300px;">

---

# REST Web Services

Esercitazione 02

- Facendo click sull'icona facciamo partire *thunder-client*
- Se tutto è andato bene vedrai un'interfaccia simile a questa

<img src="/media/rest_18.png" width="400" style="margin:auto;position:relative; left: 280px; top: -150px;">

---

# REST Web Services

Esercitazione 03 : cRud (Read) delle risorse

- Ora leggiamo (Read) le risorse tramite una richiesta HTTP di tipo GET
1. Per far ciò creiamo una nuova richiesta, facendo click su *New Request*

<img src="/media/rest_20.png" width="800" style="margin:auto;position:relative; left: 0px; top: 20px;">


---

# REST Web Services

Esercitazione 03 : cRud (Read) delle risorse

<div style="width:50%;">

- Si apre una finestra in cui è possibile inserire la URL (endpoint) su cui eseguire la query
- Il metodo da selezionare deve essere `GET`
2. Inseriamo la sequente URL

```bash
http://localhost:8080/students
```

3. Premi il pulsante **Send**

- Questo invierà una richiesta HTTP GET all'endpoint students
- Il RESTful Web Service eseguirà la query e ci restituirà tutti gli studenti presenti 
- Notare il codice di ritorno [HTTP 200 OK](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200)

</div>

<img src="/media/rest_21.png" width="550" style="margin:auto;position:relative; left: 320px; top: -470px;">


---

# REST Web Services

Esercitazione 03 : cRud (Read) delle risorse

<div style="width:50%;">

- Quindi GET su una risorsa ci restituisce TUTTI gli elementi della risorsa presenti
- Se invece vogliamo accedere ad uno specifico elemento, dobbiamo fare la query fornendo l'id della risorsa stessa
- In questo modo il web service restiuirà solo la risorsa richiesta se presente o errore (404) in caso non sia presente
- L'URL da utilizzare è

```bash
http://localhost:8080/students/2
```
</div>

<img src="/media/rest_22.png" width="500" style="margin:auto;position:relative; left: 320px; top: -380px;">


---

# REST Web Services

Esercitazione 03 : cRud (Read) delle risorse

- Proviamo ora con la seguente URL

```bash
http://localhost:8080/students/4
```


<img src="/media/rest_23.png" width="500" style="margin:auto;position:relative; left: 0px; top: 20px;">

<br>

  - Come ci aspettavamo abbiamo ottenuto un [HTTP 404 NOT FOUND](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404)
 

---

# REST Web Services

Esercitazione 04 : Crud (Create) di una risorsa

- Ora passiamo alla creazione di una nuova risorsa studente
- In altre parole chiederemo al Web service di aggiungere un nuovo studente al suo DB
- Per far ciò dobbiamo usare il metodo `POST`
- Perciò creiamo una nuova richiesta in questo modo


<img src="/media/rest_24.png" width="600" style="margin:auto;position:relative; left: 0px; top: 20px;">

  
---

# REST Web Services

Esercitazione 04 : Crud (Create) di una risorsa

- Quindi l'endpoint (URL) è lòo stesso della GET, ma il metodo è POST
- Quindi è necessario fornire il body che contiene l'oggetto o risorsa che vogliamo aggiungere al web service (studente)
- Il formato della risorsa può essere JSON, XML, ... Noi utilizziamo solo il moderno formato **JSON**

- Come si vede il Web service ha creato correttamente la nuova risorsa e restituito [HTTP 201 CREATED](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201)

<img src="/media/rest_25.png" width="400" style="margin:auto;position:relative; left: 0px; top: -10px;">

---

# REST Web Services

Esercitazione 04 : Crud (Create) di una risorsa

- Se ora eseguimo nuovamente un GET vedremo che gli studenti sono 4 e non più 3 come all'inizio
- Questo ci conferma definitivamente che la nuova risorsa (studente) è stato correttamente aggiunto al web service


<img src="/media/rest_26.png" width="550" style="margin:auto;position:relative; left: 0px; top: -30px;">


---

# REST Web Services

Esercitazione 05 : crUd (Update) di una risorsa

- Ora, siccome abbiamo sbagliato il numero di telefono dello studente appena creato, dobbiamo fare un update
- Dobbiamo quindi chiedere al web service di aggiornare le informazioni dello studente con id = 4
- Creiamo una nuova richiesta nel seguente modo

<img src="/media/rest_27.png" width="800" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# REST Web Services

Esercitazione 05 : crUd (Update) di una risorsa

<div style="width:50%;">

- Se ora eseguimo nuovamente un GET vedremo che il numero di telefono è stato aggiornato 
- Questo ci conferma definitivamente che la nuova risorsa (studente) è stato correttamente modificato dal web service

</div>

<img src="/media/rest_29.png" width="430" style="margin:auto;position:relative; left: 300px; top: -270px;">


---

# REST Web Services

Esercitazione 05 : crUd (Update) di una risorsa

- Se invece facciamo l'update di una risorsa inesistente
- Il Web service ci risponde con un 404

<img src="/media/rest_28.png" width="800" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# REST Web Services

Esercitazione 05 : crUd (Update) di una risorsa

- Con il metodo PUT abbiamo fatto l'update di tutto l'oggetto (studente)
- Infatti nella richiesta abbiamo passato come body il JSON completo di tutto l'oggetto anche se solo il numero di telefono è stato modificato
- Per poter passare solo le informazioni da modificare è necessario usare il metodo **PATCH**, in questo modo


<img src="/media/rest_30.png" width="800" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# REST Web Services

Esercitazione 05 : crUd (Update) di una risorsa

- Ora verifico (GET) che l'aggiornamento parziale sia avvenuto con successo

<img src="/media/rest_31.png" width="400" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# REST Web Services

Esercitazione 06 : cruD (Delete) di una risorsa

- Infine vogliamo rimuovere una risorsa (studente) dal Web service
- Dobbiamo quindi usare il metodo HTTP DELETE passando ovviamente l'id della risorsa da rimuovere
- Creiamo una nuova richiesta in questo modo

<img src="/media/rest_32.png" width="800" style="margin:auto;position:relative; left: 0px; top: 20px;">


---

# REST Web Services

Esercitazione 06 : cruD (Delete) di una risorsa

- Ora verifico (GET) che la cancellazione è avvenuta con successo

<img src="/media/rest_33.png" width="350" style="margin:auto;position:relative; left: 0px; top: 0px;">



---

# REST Web Services

Esercitazione 06 : cruD (Delete) di una risorsa

- Ovviamente se chiediamo la cancellazione di una risorsa inesistente otterremo un 404

<img src="/media/rest_34.png" width="800" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# REST Web Services

Conclusioni

- Abbiamo visto come creare in modo semplicissimo un RESTful web service e come interrogarlo tramite i metodi HTTP
- Abbiamo verificato la perfetta aderenza dei verbi/metodi HTTP e le operazioni CRUD
- In conlcusione abbiamo imparato ad usare un RESTful web service, strumento importantissimo nel  moderno sviluppo software web e non solo

