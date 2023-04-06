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

#https://www.cisco.com/c/en/us/support/docs/routers/1700-series-modular-access-routers/71462-rtr-l2l-ipsec-split.html
---  


# SISTEMI & RETI

Linux Containers e Docker

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>


--- 

# Linux Containers

Intro

- **Linux Containers (LXC)** è un metodo di virtualizzazione a livello di sistema operativo per l'esecuzione di più sistemi Linux isolati (`container`) su un singolo host di controllo (host LXC)
- LXC non è una macchina virtuale, ma piuttosto un ambiente virtuale che ha la propria CPU, memoria, blocco I/O, spazio di rete, ecc e il meccanismo di controllo delle risorse
- Tutto questo è fornito dalle funzionalità di **namespace** e **cgroups** nel kernel Linux sull'host LXC

<br>
<img src="/media/container_00.webp" style="width:300px;margin:auto;"/>


--- 

# Linux Containers

Intro

<img src="/media/container_01.png" style="width:800px;margin:auto;"/>

   
--- 

# Linux Containers

Intro

<img src="/media/container_00a.webp" style="width:500px;margin:auto;position:relative;top: -3rem;"/>

I container Linux sono basati sue due fondamentali feature del kernel
- `namespaces` e `cgroups`


--- 

# Linux Containers

Intro

``namespaces``: permette di partizionare le risorse di sistema e quindi di isolare i processi tra di loro

<div style="width: 70%;">

1. **User namespace**: nomi utenti e gruppi separati pe rogni processo e accesso root ad un solo set di processi
2. **PID namespace**: PID separati tra processi di diversi container e non accessibili tra container
3. **Network namespace**: ogni container ha uno stack di rete indipendente dagli altri
4. **Mount namespace**: ogno container ha un filesystem indipendente dagli altri
5. **IPC namespace**: IPC dedicate ad unb singolo container e non in comunicazione con gli altri
6. **Unix Time Sharin namespace**: host e domainname differenti per container
</div>

<img src="/media/container_02.png" style="width:350px;position:relative; top: -20rem;left: 37rem;"/>

---

# Linux Containers

Intro

<div style="width: 70%;">

`cgroups`: Un **control group (cgroup)** è una feature che controlla e limita l'accesso ad una risorsa (CPU, memoria, disk I/O, network, ...) per uno o più processi

1. **Resource Limit**: permette di limitare l'uso di una risorsa da parte di un processo
2. **Prioritization**: permette di prioritizzare l'accesso ad una risorsa in esaurimento
3. **Accounting**: tiene traccia dell'uso delle risorse a supporto della prioritizzazione
4. **Control**: controllo l'assegnazione e la gestione delle risorse

</div>

<img src="/media/container_03.png" style="width:300px;position:relative; top: -23rem;left: 37rem;"/>
<img src="/media/container_04.png" style="width:300px;position:relative; top: -22rem;left: 37rem;"/>

---

# Linux Containers

Intro

<img src="/media/container_05.png" style="width:900px;margin:auto;"/>

--- 

# Linux Containers

Intro

- Ci sono due tipologie principali di container:
  1. **Application Container**: sono contenitori che eseguono un singolo processo per contenitore. Eseguono carichi di lavoro stateless in modo da poter aumentare e diminuire secondo necessità: creare nuovi container ed eliminarli in qualsiasi momento. Di solito, non è necessario preoccuparsi del ciclo di vita di quei contenitori, poiché sono pensati per essere effimeri.
  2. **System Container**: eseguono un sistema operativo completo e sono più vicini al modello di una macchina virtuale. Vengono gestiti esattamente come una macchina virtuale o fisica. Ciò significa che puoi installare pacchetti al loro interno, puoi gestire servizi, definire politiche di backup, monitoraggio e tutti gli altri aspetti come faresti normalmente con una macchina virtuale. Questi contenitori sono solitamente molto duraturi.


<img src="/media/container_06.png" style="width:350px;margin:auto;position:relative;top:-2.5rem;"/>

--- 

# Linux Containers

Intro

- Il più noto gestore di container per application container si chiama `Docker` [https://www.docker.com/](https://www.docker.com/) 
- Il più noto orchestratore di container si chiama `Kubernetes` [https://kubernetes.io/](https://kubernetes.io/)`
- I container sono il modello alla base del paradigma `microservices`
- I container e i microservices sono alla base del modello di sviluppo e deployment chiamato `cloud native`


<img src="/media/container_07.png" style="width:350px;margin:auto;"/>

--- 

# Linux Containers

Docker

- Docker è un progetto della community open source, ma il termine è anche il nome dell'azienda principale che lo sostiene, Docker Inc. 
- Inoltre si usa con riferimento agli strumenti che l'azienda supporta formalmente. 
- Il fatto che le tecnologie e l'azienda condividano lo stesso nome può creare confusione.
- Con Docker, puoi trattare i container come macchine virtuali modulari estremamente leggere. 
- Questi container offrono un'ottima flessibilità di creazione, distribuzione, copia e spostamento da un ambiente all'altro, al fine di ottimizzare le app per il cloud.

--- 

# Linux Containers

Docker

- Docker offre un modello di deployment basato su immagini, che semplifica la condivisione di un'applicazione, o di una serie di servizi, con tutte le relative dipendenze tra i vari ambienti. 
- Inoltre Docker automatizza il deployment dell'applicazione, o della serie di processi che compongono un'app, all'interno dell'ambiente containerizzato.
- Questi strumenti basati sui container Linux, rendono Docker unico e intuitivo e offrono agli utenti la possibilità di eseguire deployment rapidi e semplificano il controllo sulle versioni e sulla loro distribuzione.


<img src="/media/container_08.png" style="width:550px;margin:auto;"/>


--- 

# Linux Containers

Docker

<div style="width: 60%;">

I vatanggi principali nell'uso di Docker sono

**Modularità** 
- L'approccio Docker alla containerizzazione si concentra sulla capacità di "smontare" una parte di un'applicazione per aggiornarla o ripararla, senza dover "smontare" l'intera app. 
- Oltre a questo approccio basato sui microservizi, puoi condividere i processi tra più app proprio come avviene con la Service-Oriented Architecture (SOA).

</div>

<img src="/media/container_09.png" style="width:350px;position:relative; top:-15rem;left: 33rem;"/>
 
--- 

# Linux Containers

Docker

<div style="width: 60%;">

I vatanggi principali nell'uso di Docker sono

**Livelli e controllo della versione delle Docker images**
- Ogni file immagine Docker è composto da più livelli combinati in una singola immagine.  
- Le modifiche intermedie vengono condivise tra le immagini, migliorando ulteriormente la velocità, la dimensione e l'efficienza.

</div>

<img src="/media/container_10.png" style="width:350px;position:relative; top:-15rem;left: 33rem;"/>
 
--- 

# Linux Containers

Docker

<div style="width: 100%;">

I vatanggi principali nell'uso di Docker sono

**Rollback**
- Probabilmente l'aspetto più interessante della creazione di livelli è il rollback. 
- Ogni immagine presenta dei livelli. 
- Non ti piace l'attuale iterazione di un'immagine? Puoi ripristinarla alla versione precedente. 
- Ciò facilita lo sviluppo agile e aiuta a ottenere l'integrazione e il deployment continui (CI/CD).

</div>

--- 

# Linux Containers

Docker

<div style="width: 60%;">

I vatanggi principali nell'uso di Docker sono

**Deployment rapido**
- In passato, la configurazione, l'esecuzione e il provisioning di un nuovo hardware richiedevano giorni, con un impegno gravoso in termini economici e di risorse. 
- I container basati su Docker possono ridurre il tempo di deployment a pochi secondi. 
- Creando un container per ciascun processo, puoi condividere rapidamente tali processi con nuove app. 
- Non essendo necessario l'avvio del sistema operativo per aggiungere o spostare un container, i tempi di deployment si riducono notevolmente.

</div>

<img src="/media/container_11.png" style="width:350px;position:relative; top:-25rem;left: 33rem;"/>
<img src="/media/container_12.png" style="width:350px;position:relative; top:-20rem;left: 33rem;"/>

--- 

# Linux Containers

Docker


<div style="width: 55%;">

I componenti principali di Docker sono
  1. **Docker Client**: CLI o API per interagire con il backend di Docker
  2. **Docker Daemon**: Motori di gestione dei container
  3. **Docker Image**: immagine base, a livelli, da cui far partire uno o più container identici
  4. **Docker Container**: un'istanza a runtime di un'immagine
  5. **Docker Volumes**: meccanismo di persistenza dei dati di un container
  6. **Docker Network**: i container sono i solati e comunicano **SOLO** in rete
  7. **Docker Registry**: repository centralizzato delle imamgini Docker

</div>

<img src="/media/container_13.png" style="width:450px;position:relative; top:-20rem;left: 29rem;"/>

--- 

# Linux Containers

Esercitazione #1: Installazione di Docker

Vediamo i passi pe rinstallare *Docker Community Edition* su Ubuntu e sue derivate

#### 1. Installazione dipendenze base

````bash
 sudo apt update
 sudo apt install  ca-certificates  curl  gnupg  lsb-release
 ````

<br>

#### 2. Download e installazione chiave GPG per il repository

````bash
 curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
 ````

<br>

#### 3. Aggiunta del repository Docker

````bash
 echo  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu   $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```` 

--- 

# Linux Containers

Esercitazione #1: Installazione di Docker

#### 4. Aggiorniamo la lista dei pacchetti disponibili

````bash
 sudo apt update
````

<br>


#### 5. Installiamo Dokcer CE

````bash
sudo apt install docker-ce docker-ce-cli containerd.io -y
````

<br>


#### 6. Verifichiamo che Docker stia girando correttamente

````bash
sudo systemctl status docker
````

<br>


--- 

# Linux Containers

Esercitazione #1: Installazione di Docker

#### 7. Aggiungiamo il nostro utente al gruppo docker

````bash
sudo usermod -aG docker $USER
````

<br>


#### 8. Rendiamo effettivo l'aggiunta del gruppo

````bash
newgrp docker
````

<br>

--- 

# Linux Containers

Esercitazione #1: Installazione di Docker

#### 9. Verifichiamo che tutto funzioni correttamente

````bash
docker run hello-world

Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
2db29710123e: Pull complete 
Digest: sha256:aa0cc8055b82dc2509bed2e19b275c8f463506616377219d9642221ab53cf9fe
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 ........
````
<br>


--- 

# Linux Containers

Esercitazione #2: Il primo container - WebServer NGINX

Installiamo il più popolare Web Server: NGINX

- Per installare un webserver già configurato e pronto all'uso basta eseguire il seguente comando

````bash
docker run --name WebServer -d nginx
````

````bash
antonio@pop-os:~$ docker run --name WebServer -d nginx
Unable to find image 'nginx:latest' locally

latest: Pulling from library/nginx
8740c948ffd4: Pull complete 
d2c0556a17c5: Pull complete 
c8b9881f2c6a: Pull complete 
693c3ffa8f43: Pull complete 
8316c5e80e6d: Pull complete 
b2fe3577faa4: Pull complete 
Digest: sha256:b8f2383a95879e1ae064940d9a200f67a6c79e710ed82ac42263397367e7cc4e
Status: Downloaded newer image for nginx:latest
117eb4e4b12c2e601073ea29000952b05822abe153c57cb7c6290b1fb8223437
````


--- 

# Linux Containers

Esercitazione #2: Il primo container - WebServer NGINX

- Ok NGIX è pronto all'uso. Verifichiamo se il container sta girando correttamente

````bash
docker ps -a

CONTAINER ID   IMAGE     COMMAND                  CREATED              STATUS              PORTS     NAMES
117eb4e4b12c   nginx     "/docker-entrypoint.…"   About a minute ago   Up About a minute   80/tcp    WebServer

````

- Ok è stato creato un container con **ID 117eb4e4b12c** di nome **WebServer** a partire dall'immagine **nginx**
- Il web server è in ascolto sulla porta 80
- Proviamo ora ad accedere usando l'indirizzo assegnato al container

<img src="/media/container_14.png" style="width:250px;margin:auto;"/>


--- 

# Linux Containers

Esercitazione #2: Il primo container - WebServer NGINX

- Non possiamo accedere al web server in quanto è completamente isolato
- NGIX è in ascolto sulla porta 80 ma all'interno del namespace associato al container
- Quindi in virtù del completo isolamento del container non è possibile accedere da fuori (host)
- Quindi è necessario creare un port forwarding tra una porta dell'host e la porta 80 del container

--- 

# Linux Containers

Esercitazione #2: Il primo container - WebServer NGINX

- Iniziamo a fermare e rimuovere il container

````bash
antonio@pop-os:~$ docker ps -a
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS     NAMES
117eb4e4b12c   nginx     "/docker-entrypoint.…"   8 minutes ago   Up 8 minutes   80/tcp    WebServer

antonio@pop-os:~$ docker stop 117eb4e4b12c
117eb4e4b12c

antonio@pop-os:~$ docker ps -a
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS                     PORTS     NAMES
117eb4e4b12c   nginx     "/docker-entrypoint.…"   8 minutes ago   Exited (0) 5 seconds ago             WebServer

antonio@pop-os:~$ docker rm 117eb4e4b12c
117eb4e4b12c

antonio@pop-os:~$ docker ps -a
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
antonio@pop-os:~$ 
````

--- 

# Linux Containers

Esercitazione #2: Il primo container - WebServer NGINX

- Ora facciamo il run del container ma creando il port forwarding con il flag **-p**

````bash
docker run --name WebServer -d -p 8080:80 nginx

antonio@pop-os:~$ docker run --name WebServer -d -p 8080:80 nginx
c564447947284575e77edcf7c67dda13987ebd3ae2843f3912e00445aa2f7b79

antonio@pop-os:~$ docker ps -a
STATUS         PORTS                                   NAMES
Up 5 seconds   0.0.0.0:8080->80/tcp, :::8080->80/tcp   WebServer
antonio@pop-os:~$ 
````
<br>

- abbiamo mappato (fatto il port forwarding) la porta 8080 dell'host sulla porta 80 del container

--- 

# Linux Containers

Esercitazione #2: Il primo container - WebServer NGINX

- Ora se proviamo ad aprire la pagina web all'indirizzo del container sulla porta 8080 accediamo alla home page

<br>

<img src="/media/container_15.png" style="width:800px;margin:auto;"/>

--- 

# Linux Containers

Esercitazione #2: Il primo container - WebServer NGINX

- Ora vogliamo modificare la pagina web all'interno del container
- Per fare ciò possiamo accedere alla console del container
- A questo punto siamo catapultati dentro un sistema Linux completamente separato dal nostro host
- Data la facilità nel crearew nuovi container possiamo fare tutte le modifiche senza aver paura di combinare guai :)

````bash
antonio@pop-os:~$ docker ps -a
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                                   NAMES
c56444794728   nginx     "/docker-entrypoint.…"   5 minutes ago   Up 5 minutes   0.0.0.0:8080->80/tcp, :::8080->80/tcp   WebServer

antonio@pop-os:~$ docker exec -it WebServer bash

root@c56444794728:/#  <Questa è la console del container>
````

--- 

# Linux Containers

Esercitazione #2: Il primo container - WebServer NGINX

- Ma dove trovo la pagina html nel container???
- Vado a vedere la documentRoot nella configurazione di NGINX

````bash
root@c56444794728:~# cd /etc/nginx/
root@c56444794728:/etc/nginx# ls -la
total 48
drwxr-xr-x 1 root root 4096 Jan 11 06:31 .
drwxr-xr-x 1 root root 4096 Jan 29 15:03 ..
drwxr-xr-x 1 root root 4096 Jan 29 15:03 conf.d
-rw-r--r-- 1 root root 1007 Dec 13 15:53 fastcgi_params

root@c56444794728:/etc/nginx# cd conf.d/  
root@c56444794728:/etc/nginx/conf.d# ls -la
total 20
drwxr-xr-x 1 root root 4096 Jan 29 15:03 .
drwxr-xr-x 1 root root 4096 Jan 11 06:31 ..
-rw-r--r-- 1 root root 1093 Jan 29 15:03 default.conf
````

--- 

# Linux Containers

Esercitazione #2: Il primo container - WebServer NGINX


````bash
root@c56444794728:/etc/nginx/conf.d# more default.conf 
server {
    listen       80;
    listen  [::]:80;
    server_name  localhost;

    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    #error_page  404              /404.html;
````

<br>

- eccola: la home del webserver è in /usr/share/nginx/html

--- 

# Linux Containers

Esercitazione #2: Il primo container - WebServer NGINX

- Siccome nel container non c'è nessun editor install VIM

````bash
apt update
apt install vim
````

- ora posso editare la pagina html

````bash
vi /usr/share/nginx/html/index.html
````

<br>

<img src="/media/container_16.png" style="width:600px;margin:auto;"/>


--- 

# Linux Containers

Esercitazione #2: Il primo container - WebServer NGINX

- Tuttavia vorrei utilizzare gli strumenti del mio desktop per sviluppare su questo container. Come posso fare?
- Bene possiamo distruggere e ricereare il container condividendo una directory con il container
- Quello che dobbiamo fare è mappare una nostra directory locale sulla DocumetRoot del webserver
- In questo modo potremo sviluppare il nostro sito web utilizzando gli strumenti (editor) del nostro desktop

<br>

````bash
antonio@pop-os:~$ docker ps -a
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                                   NAMES
c56444794728   nginx     "/docker-entrypoint.…"   19 minutes ago   Up 19 minutes   0.0.0.0:8080->80/tcp, :::8080->80/tcp   WebServer

antonio@pop-os:~$ docker stop WebServer
antonio@pop-os:~$ docker rm WebServer

antonio@pop-os:~$ docker ps -a
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
antonio@pop-os:~$ 
````

--- 

# Linux Containers

Esercitazione #2: Il primo container - WebServer NGINX

- Creiamo nuovamente il container mappando la porta 80 e mappando una directory locale

````bash
mkdir -p ~/tmp/docker_html
docker run --name WebServer -d -p 8080:80 -v ~/tmp/docker_html/:/usr/share/nginx/html nginx

antonio@pop-os:~/tmp$ docker run --name WebServer -d -p 8080:80 -v ~/tmp/docker_html/:/usr/share/nginx/html nginx
df722cf473eb38cea7ba152b0408ed381cb9fcef65babb0c466399a8e99347ab

antonio@pop-os:~/tmp$ docker ps -a
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                                   NAMES
df722cf473eb   nginx     "/docker-entrypoint.…"   5 seconds ago   Up 4 seconds   0.0.0.0:8080->80/tcp, :::8080->80/tcp   WebServer
antonio@pop-os:~/tmp$ 
````

--- 

# Linux Containers

Esercitazione #2: Il primo container - WebServer NGINX

- Ora andate in tmp/dokcer_html nella vostra home
- code index.html e editate la pagina
- Se provate ad accedere vedrete la vostra nuova pagina

<br>

<img src="/media/container_17.png" style="width:700px;margin:auto;"/>

--- 

# Linux Containers

Esercitazione #2: Il primo container - WebServer NGINX

- In questo modo avete separato il container dai dati
- Se fermate questo container e ne fate partire uno nuovo,  montando lo stesso volume
- Immediatamente avremo la pagina web che abbiamo creato prima


<br><br>

# Esercizio_docker_1
- fermare e cancellare il container attuale
- creare un nuovo container in modo da accedere allo stesso file

--- 

# Linux Containers

Docker

- Per vedere le immagini docker presenti nel nostro sistema, basta eseguire il comando

````bash
docker images o docker images

antonio@pop-os:~/tmp/docker_html$ docker images
REPOSITORY    TAG       IMAGE ID       CREATED         SIZE
nginx         latest    a99a39d070bf   2 weeks ago     142MB
hello-world   latest    feb5d9fea6a5   16 months ago   13.3kB

antonio@pop-os:~/tmp/docker_html$ docker image ls
REPOSITORY    TAG       IMAGE ID       CREATED         SIZE
nginx         latest    a99a39d070bf   2 weeks ago     142MB
hello-world   latest    feb5d9fea6a5   16 months ago   13.3kB
````

--- 

# Linux Containers

Docker

- Se vogliamo rimuovere un'immagine non più utilizzata, basta eseguire

````bash
antonio@pop-os:~/tmp/docker_html$ docker image rm feb5d9fea6a5

Untagged: hello-world:latest
Untagged: hello-world@sha256:aa0cc8055b82dc2509bed2e19b275c8f463506616377219d9642221ab53cf9fe
Deleted: sha256:feb5d9fea6a5e9606aa995e879d862b825965ba48de054caab5ef356dc6b3412
Deleted: sha256:e07ee1baac5fae6a26f30cabfe54a36d3402f96afda318fe0a96cec4ca393359

antonio@pop-os:~/tmp/docker_html$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
nginx        latest    a99a39d070bf   2 weeks ago   142MB
````

--- 

# Linux Containers

Esercitazione #3: Server LAMP

- Proviamo ora ad installare il classico e tradizionale ambiente LAMP

````bash
antonio@pop-os:~$ docker ps -a
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

mkdir -p ~/tmp/docker/app
docker run --name LAMP -d -p "80:80" -v ~/tmp/docker/app:/app mattrayner/lamp:latest-1804

antonio@pop-os:~$ docker run --name LAMP -d -p "80:80" -v ~/tmp/docker/app:/app mattrayner/lamp:latest-1804
Unable to find image 'mattrayner/lamp:latest-1804' locally
c64513b74145: Pull complete 
01b8b12bad90: Pull complete 
....
Status: Downloaded newer image for mattrayner/lamp:latest-1804
Updating for PHP 8.0
Replacing CLI php.ini values
Editing APACHE_RUN_GROUP environment variable
Editing phpmyadmin config
Setting up MySQL directories
Allowing Apache/PHP to write to the app
````

--- 

# Linux Containers

Esercitazione #3: Server LAMP

````bash
antonio@pop-os:~$ docker ps -a

CONTAINER ID   IMAGE                         COMMAND     CREATED         STATUS         PORTS                                         NAMES
17146a575842   mattrayner/lamp:latest-1804   "/run.sh"   3 seconds ago   Up 3 seconds   0.0.0.0:80->80/tcp, :::80->80/tcp, 3306/tcp   LAMP
antonio@pop-os:~$ 
````

- Accediamo alla console di amministrazione **http://192.168.122.84/phpmyadmin/** (il tuo indirizzo è diverso)


<img src="/media/container_18.png" style="width:250px;margin:auto;"/>


--- 

# Linux Containers

Esercitazione #3: Server LAMP

- Per vedere le credenziali del DB possiamo consulate il log del docker

````bash
antonio@pop-os:~$ docker ps -a
CONTAINER ID   IMAGE                         COMMAND     CREATED         STATUS         PORTS                                         NAMES
17146a575842   mattrayner/lamp:latest-1804   "/run.sh"   5 minutes ago   Up 5 minutes   0.0.0.0:80->80/tcp, :::80->80/tcp, 3306/tcp   LAMP

antonio@pop-os:~$ docker logs LAMP
Updating for PHP 8.0
Replacing CLI php.ini values
....
Editing MySQL config
=> An empty or uninitialized MySQL volume is detected in /var/lib/mysql
=> Installing MySQL ...
=> Done!
========================================================================
You can now connect to this MySQL Server with Amqt3P4cvJpR

    mysql -uadmin -pAmqt3P4cvJpR -h<host> -P<port>

````

--- 

# Linux Containers

Esercitazione #3: Server LAMP

- Accediamo ora con le credenziali (et voilà!!! un server LAMP in pochi secondi)

<img src="/media/container_19.png" style="width:800px;margin:auto;"/>

- Per rendere persistente il DB MYSQL è necessario mappare una directory su **/var/lib/mysql**

--- 

# Linux Containers

Esercitazione #3: Server LAMP

- Creiamo un app PHP, editando il file index.html in ~/tmp/docker/app

````php
<html>
<head>
<title>PHP Test</title>
</head>
<body>
<?php echo '<p>Hello World</p>'; ?>
</body>
</html>
````

<br>

- Ora se accediamo alla home vediamo la nostra app php in azione

--- 

# Linux Containers

Esercitazione #3: Server LAMP


<img src="/media/container_20.png" style="width:600px;margin:auto;"/>



