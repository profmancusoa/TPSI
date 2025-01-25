---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
#background: https://source.unsplash.com/collection/94734566/1920x1080
background: /cover.webp
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
#highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
aspectRatio: '16_/9'
routerMode: 'hash'
materia: TPSI 3
as: 2024/2025
version: '1.1.3'

---  

# TPSI 3

Git & GitHub

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>


---

&nbsp;

<Cover fs="90px">
    Il ciclo di vita del software
</Cover>


---

# Sviluppo Software

Il ciclo di vita 

- Lo sviluppo software è un'attività complessa che richiede un'accorta gestione delle varie fasi
- Lo sviluppo di un'applicazione non un processo lineare (come lo scolpire di una statua), ma è un processo **iterativo**

- Nell'ambito dello sviluppo e dell'ingegneria del software si parla di `ciclo di vita del software`

<br>
<Banner padding="30px" mt=20px>
Il ciclo di vita del software (Software Development Life Cycle o SDLC) è un processo strutturato che descrive le varie fasi di realizzazione di un software e che aiuta a organizzare e guidare il processo di sviluppo del software, consentendo di gestire in modo efficace tutte le attività coinvolte
</Banner>
<br>

---

# Sviluppo Software

Il ciclo di vita

<img src="/media/git_00.png" width="700" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# Sviluppo Software

Il ciclo di vita 

Le principali fasi del ciclo di vita del software sono:

1. `Analisi dei requisiti`: In questa fase iniziale, vengono raccolti i requisiti del software in base alle esigenze degli utenti e dei clienti. Gli analisti del sistema o gli sviluppatori collaborano con gli stakeholder per comprendere i requisiti funzionali e non funzionali del software.

2. `Progettazione`: Durante questa fase, vengono progettate l'architettura e la struttura del software. Vengono definite le componenti principali del sistema, le interazioni tra di esse e le specifiche tecniche dettagliate. Questo passaggio può includere la creazione di diagrammi di flusso, diagrammi di classe e altri modelli che descrivono la struttura del software.


3. `Sviluppo`: Qui avviene l'effettiva implementazione del software sulla base delle specifiche e del design definiti. Gli sviluppatori scrivono il codice sorgente utilizzando i linguaggi di programmazione appropriati e seguendo le pratiche di sviluppo migliori. Questa fase può anche includere attività di testing unitario per verificare che il codice funzioni correttamente.

---

# Sviluppo Software

Il ciclo di vita

4. `Testing`: Durante questa fase, il software viene sottoposto a un'ampia serie di test per identificare errori, bug e problemi di prestazioni. Ciò può includere test di unità, test di integrazione, test di sistema e test di accettazione, tra gli altri. L'obiettivo è garantire che il software funzioni correttamente e risponda ai requisiti specificati.

5. `Rilascio e distribuzione`: Una volta superati i test e risolti eventuali bug o problemi, il software viene preparato per il rilascio. Vengono create le distribuzioni e i pacchetti di installazione, e il software viene messo a disposizione degli utenti finali o degli ambienti di produzione.

6. `Manutenzione`: Dopo il rilascio, il software può richiedere attività di manutenzione per gestire bug, implementare miglioramenti o aggiornamenti. Questa fase può includere la correzione degli errori, l'aggiunta di nuove funzionalità, l'ottimizzazione delle prestazioni e l'adeguamento alle nuove esigenze degli utenti.

---

# Sviluppo Software

Il ciclo di vita

- Per i fornitori di software, le modifiche che non cambiano il prodotto ma aumentano le funzionalità e risolvono i problemi vengono chiamate **nuove versioni software**. 

<br>
<Banner padding="20px">
Gli aggiornamenti fanno parte del ciclo di vita di qualunque software. 
</Banner>
<br>

- Nel tempo vengono rilasciate nuove funzionalità, gli sviluppatori risolvono i bug e la durata del software si evolve con la creazione di entusiasmanti aggiornamenti e nuove versioni. 

<br>
<Banner padding="20px">
Il versioning del software è dunque una parte fondamentale della produzione. 
</Banner>
<br>

- Il controllo delle versioni, noto anche come **controllo del codice sorgente**, è la pratica di monitorare e gestire le modifiche al codice del software.

---

&nbsp;

<Cover fs="90px">
    Version Control
</Cover>


---

# Sviluppo Software

Version Control Software 

- Data l'importanza di questo processo nello sviluppo del software, i team di sviluppo usano dei sistemi che semplificano e supportano la gestione del codice
- Tali sistemi chiamati `Version Control Software (VCS)` oppure `Source Code Management (SCM)` supportano il team di sviluppo nella gestione delle revisioni del codice, nella gestione degli errori ed in generale di tutti i processi legati allo sviluppo stesso


- Un sistema di versioning del codice è uno strumento software progettato per tenere traccia delle modifiche apportate al codice sorgente di un progetto nel corso del tempo. 
- Consente agli sviluppatori di registrare e gestire le diverse versioni del codice, fornendo un registro storico completo delle modifiche effettuate.

---

# Sviluppo Software

Version Control Software 

- Oltre a tracciare le modifiche, un sistema di versioning del codice offre funzionalità come:
  -  il ripristino delle versioni precedenti
  -  la gestione dei conflitti tra le modifiche apportate da più sviluppatori
  -  il supporto per il lavoro in remoto e la possibilità di lavorare con repository remoti. 
  -  collaborare con altri sviluppatori, consentendo loro di clonare, modificare e condividere il codice tra team di sviluppo.

- I sistemi di versioning del codice più comuni includono Git, Subversion (SVN), Mercurial e Perforce


---

# Sviluppo Software

Version Control Software 

Un sistema di versioning del codice risolve diversi problemi che possono sorgere durante lo sviluppo del software. Ecco alcuni dei principali problemi che un sistema di versioning del codice aiuta a risolvere:

- `Tracciare le modifiche`: 
  - Un sistema di versioning del codice tiene traccia di tutte le modifiche apportate al codice nel tempo. 
  - Questo permette agli sviluppatori di visualizzare e confrontare le diverse versioni del codice, facilitando l'individuazione di quando e da chi sono state apportate modifiche specifiche. 
  - Inoltre, consente di comprendere l'evoluzione del codice nel tempo.
- `Collaborazione`: 
  - Quando più persone lavorano su un progetto di sviluppo software, il sistema di versioning del codice facilita la collaborazione. 
  - Gli sviluppatori possono lavorare in parallelo su diverse funzionalità o correzioni di bug utilizzando branch separati. 
  - In seguito, il sistema di versioning consente di integrare facilmente le modifiche in un'unica versione consolidata del codice.

---

# Sviluppo Software

Version Control Software 

- `Documentazione delle modifiche`: 
  - Un sistema di versioning del codice fornisce una documentazione strutturata delle modifiche apportate al codice nel tempo. 
  - Questo può essere utile per capire perché determinate decisioni sono state prese o per comprendere come il codice si è evoluto nel corso del progetto.
- `Recupero dei dati`: 
  - Nel caso si verifichino problemi con il codice o il repository, un sistema di versioning del codice può aiutare a recuperare i dati persi o danneggiati. 
  - Poiché tutte le versioni del codice sono registrate, è possibile recuperare facilmente una versione precedente o ripristinare il repository in caso di perdita di dati.

Questi sono solo alcuni dei problemi che un sistema di versioning del codice aiuta a risolvere. In generale, fornisce una struttura organizzativa, controllo delle modifiche e un'ampia tracciabilità che migliorano la gestione e la qualità del codice durante il processo di sviluppo del software.
 
---

&nbsp;

<Cover fs="90px">
    GIT - GitHub
</Cover>


---

# Git & GitHub

Allenarsi con Git

Qui una serie di link a risorse esterne molto utili per mettere a frutto quanto si apprenderà durante il corso.
Per apprendere correttamente ed efficaciemente git e github è necessario fare tante prove ed esercizi.

<Banner padding=20px>
Useremo git & github per tutto il triennio
</Banner>

<br>

- Il sito di reiferimento per [Git](https://git-scm.com/) contiene tutta la documentazione e le risorse necessarie per apprendere al meglio l'uso di git
- Sul sito di [Atlassian](https://www.atlassian.com/git) puoi trovare ottimi tutorial e informazioni che spiegano l'uso di git 

<br>
<div class="grid grid-cols-2 grid-rows-1 gap-4" style="padding: 0px; margin-left:0%;">
<div>

  - [OhMyGit!!](https://ohmygit.org)
  - [Learn Git Branching](https://learngitbranching.js.org/?locale=it_IT)
  - [GitHub Minesweeper](https://profy.dev/project/github-minesweeper)
  - [The Odin Project](https://www.theodinproject.com/lessons/foundations-git-basics)
</div>
<div>

  - [Learn Git with Bitbucket Cloud](https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud)
  - [Git Immersion](https://gitimmersion.com/)
  - [Idiot proof git](https://softwaredoug.com/blog/2022/11/09/idiot-proof-git-aliases.html)
  - [The Perfect Commit](https://simonwillison.net/2022/Oct/29/the-perfect-commit/)
</div>
</div>

---

# Git & GitHub

Materiale Aggiuntivo

<br>

<div class="grid grid-cols-2 grid-rows-1 gap-4" style="padding: 0px; margin-left:0%;">
 <div>

- [Git dalla A alla Z](/support/3/git/pdf/git_a_z.pdf) 
- [Git Basic](/support/3/git/pdf/git_basic.pdf) 
- [GitandGithub](/support/3/git/pdf/GitandGithub.pdf)
- [Git Cheatsheet 1](/support/3/git/pdf/git_cheatsheet_01.pdf)
- [Git Cheatsheet 2](/support/3/git/pdf/git_cheatsheet_01.pdf)
- [Git Cheatsheet 3](/support/3/git/pdf/git_cheatsheet_01.pdf)
- [Git Cheatsheet 4](/support/3/git/pdf/git_cheatsheet_01.pdf)

 
</div>

 <div>

- [Beginning_Git_and_GitHub.epub](/support/3/git/epub/Beginning_Git_and_GitHub_A_Comprehensive_Guide_to_Vand_Teamwork_for_the_New_Developer_Mariot_Tsitoara.epub)
- [Beginning_Git_and_GitHub_A_Comprehensive](/support/3/git/epub/Beginning_Git_and_GitHub_A_Comprehensive_Mariot_Tsitoara.epub)
- [Git_Essentials.epub](/support/3/git/epub/Git_Essentials_Second_Edition_Ferdinando_Santacroce.epub)
- [Git_Guida_per_imparare.epub](/support/3/git/epub/Git_Guida_per_imparare_a_gestire_distribuire_e_versionare_codice.epub)
- [GitHub_Essentials_Achilleas_Pipinellis.epub](/support/3/git/epub/GitHub_Essentials_Achilleas_Pipinellis.epub) 
- [GitHub_For_Dummies_Phil_Haack.epub](/support/3/git/epub/GitHub_For_Dummies_Phil_Haack.epub)
- [Git_Pocket_Guide_Richard_Silverman.epub](/support/3/git/epub/Git_Pocket_Guide_Richard_Silverman.epub)
- [Learn_Git_in_a_Month_of_Lunches_Rick_Umali.epub](/support/3/git/epub/Learn_Git_in_a_Month_of_Lunches_Rick_Umali.epub)
- [Practical_Git.epub](/support/3/git/epub/Practical_Git_Confident_Git_Through_Practice_Johan_Abildskov.epub)
</div>
</div>

---

# Git

SCM 

<Banner padding="30px">
Git è il sistema di versioning del codice più popolare ed è ampiamente utilizzato nell'industria dello sviluppo software.
</Banner>

<img src="/media/git_01.png" width="400" style="margin:auto;position:relative; left: 0px; top: 50px;">


---

# Git

SCM 

- Git è un progetto open source maturo e gestito attivamente che è stato originariamente sviluppato nel 2005 da Linus Torvalds, il famoso creatore del kernel del sistema operativo Linux. 
- Un numero impressionante di progetti software si affida a Git per il controllo delle versioni, inclusi i progetti commerciali e open source. 
- Gli sviluppatori che hanno usato Git rappresentano una fetta importante del pool di talenti dello sviluppo software presenti nel mondo del lavoro e questo strumento funziona bene su un'ampia gamma di sistemi operativi e IDE (Integrated Development Environment).

<img src="/media/git_02.png" width="350" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# Github

- Per capire esattamente cos'è GitHub, devi conoscere due principi collegati:
  - Controllo della versione
  - Git

<br>
<Banner padding="30px" mt=30px>
 GitHub è un sito Web e un servizio cloud che aiuta gli sviluppatori a archiviare e gestire il proprio codice, nonché a tenere traccia e controllare le modifiche al proprio codice. 
</Banner>


---

# Github

- GitHub è una società a scopo di lucro (ora M$) che offre un `servizio di hosting di repository Git basato su cloud` 
- In sostanza, rende molto più facile per gli individui e i team utilizzare Git per il controllo della versione e la collaborazione.
- L'interfaccia di GitHub è abbastanza user-friendly in modo che anche i programmatori alle prime armi possano trarre vantaggio da Git. 
- GitHub è così intuitivo, tuttavia, che alcune persone usano GitHub persino per gestire altri tipi di progetti, come scrivere libri.
- Inoltre, chiunque può registrarsi e ospitare `gratuitamente` un repository di codice pubblico (o privato), il che rende GitHub particolarmente popolare tra i progetti open source.

---

# Git e GitHub

- Git e Github sono complementari ed insieme permettono con facilità di sviluppare software in team geograficamente distribuiti
- Per tale motivo Git e Github sono strumenti diffusissimi nel mondo aziendale e pertanto imparare ad usare questi strumenti è di `FONDAMENTALE` importanza per un giovane sviluppatore

<img src="/media/git_03.png" width="500" style="margin:auto;position:relative; left: 0px; top: 50px;">


---

# Git & GitHub

Basics

- Iniziamo introducendo la terminologia ed i concetti  che stanno alla base di `Git`
- Git è un sistema distribuito e pertanto il suo funzionamento non è limitato solo al tuo PC ma è appunto distribuito su tutti i computer degli sviluppatori che fanno parte del team

**REPOSITORY**

- Un repository Git è un luogo in cui vengono conservate tutte le versioni del codice sorgente del progetto, insieme alla cronologia completa delle modifiche apportate nel tempo.
- Un repository Git può essere considerato come una sorta di "database" che tiene traccia delle modifiche apportate ai file nel progetto.

<img src="/media/git_04.png" width="300" style="margin:auto;position:relative; left: 0px; top: -20px;">


---

# Git & GitHub

Basics

- Siccome Git è un sistema distribuito abbiamo
  - **LOCAL REPOSITORY**: il tuo repository git presente sul tuo PC che contiene una copia del repository centrale (uno per ogni sviluppatore)
  - **REMOTE REPOSITORY**: il repository centrale a cui tutti gli svilupaptori fanno riferimento (uno solo per progetto)

<img src="/media/git_03.png" width="500" style="margin:auto;position:relative; left: 0px; top: -20px;">



---

# Git & GitHub

Basics

- Più in dettaglio il local repository è composto da:
  - **WORKING DIRECTORY**: corrisponde alla cartella del progetto sul tuo computer in locale.
  - **STAGING AREA**: Quest'area è un intermediario tra la directory di lavoro e il repository. Ospita tutti i file modificati che vuoi vedere inclusi nella prossima versione del tuo codice.
  - **REPOSITORY**: il "database" che tiene traccia delle modifiche apportate ai file di progetto nella working directory


<img src="/media/git_05.png" width="500" style="margin:auto;position:relative; left: 0px; top: -20px;">

---

# Git & GitHub

Basics

- Come visto il repostiory locale è composto da 3 componenti: working directory, staging area e git repository
- Nonostante git sia un sistema molto evoluto, non esegue mai nessuna operazione senza lo specifico comando dell'utente
- Pertanto per poter muovere un file dalla working directory al repository è necessario esegui due comandi
  - **add**: dato un file modificato nel working directory, lo aggiunge allo staging area di git
  - **commit**: muove un file dallo staging al repository git, creando un nuovo commit e quindi salvando una nuova traccia delle modifiche del software

<img src="/media/git_06.png" width="300" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# Git & GitHub

Basics

- I comandi add e commit sono locali, hanno un effetto solo sul reporitory locale
- Infatti se eseguiti non apportano nessuna modifica al repository remoto
- Addirittura essendo i sistemi disconnessi, le operazioni di add e commit non sono nemmeno notificate al repository centrale
- Pertanto per poter condividere il lavoro fatto sul nostro repository locale, è necessario propagare tali modifiche al repository centrale
- In questo modo tutti gli sviluppatori potranno beneficiare del nostro lavoro. In modo analogo noi potremo beneficiare del loro lavoro


---

# Git & GitHub

Basics

- Per fare ciò utilizziamo due comandi:
  - **PUSH**: invia e sincronizza lo stato del repository remoto con quello del nostro repository locale
  - **PULL**: preleva e sincronizza lo stato del repository locale con quelle del repository centrale

<img src="/media/git_07.png" width="500" style="margin:auto;position:relative; left: 0px; top: 20px;">


---

# Git & GitHub

Basics

- In questo modo git e github formano un connubbio molto potente, versatile e molto utile
- Attraverso l'uso di git per la gestione dei repositopry locali e i servizi offerti da github per la gestione del repository centrale si realizza con facilità un sistema di gestione del codice distribuito

- Come già detto git e github sono i sistemi maggiormente utilizzati nell'industria del software per la gestione del versioning del codice

<img src="/media/git_08.png" width="420" style="margin:auto;position:relative; left: 0px; top: -40px;">


---

# Git & GitHub

Account Github

- Github è un servizio che offre un piano gratuito e viene utilizzato da milioni di sviluppatori per fare l'hosting dei loro repository e progetti sia pubblici che privati
- Per utilizzare Github è necessario avere un account
- Nelle prossime slide vedremo i passi principali per ottenere un account Github gratuito

- Oggi quando un'azienda è interessata ad una persona, i primi servizi che consulta sono Linkedin e Github. In tale modo è possibile farsi un'idea del possibile collaboratore. Qual'è la sua rete dui relzioni e quali sono i progetti che ha già sviluppato


<Banner padding="30px" mt=40px>
Pertanto è importantissimo sviluppare e curare bene il proprio profilo Linkedin e il proprio account GitHub
</Banner>

---


&nbsp; 

<img src="/media/git.gif" width="440" style="margin:auto;position:relative; left: 0px; top: -80px;">


---

# Git & GitHub

Esercitazione_01: creiamo un Account Github

- Andare su [GitHub](https://github.com/) e fare click su signup

<br>
<img src="/media/git_09.png" width="800" style="margin:auto;position:relative; left: 0px; top: 10px;">

<br>

- Seguire le istruzioni a video e lo schermo del professore


---

# Git & GitHub

Esercitazione_02: creiamo un nuovo repository remoto su Github

- Una volta terminata la registrazione su Github, crea un nuovo repository

<img src="/media/git_10.png" width="800" style="margin:auto;position:relative; left: 0px; top: 10px;">

<br><br>

- Seguire le istruzioni a video e il realtime del professore

---

# Git & GitHub

Esercitazione_03: Personal Access Token

- Per poter accedere a GitHub via web è necessario l'uso di una password (scelta durante la creazione dell'account)
- Tuttavia molte delle operazioni git verranno effettuate dalla linea di comando 
- In questo caso, per ragioni di sicurezza, GitHub richiede l'uso di un `Personal Access Token`
- In pratica un *Personal Access Token* è una password che può essere utilizzata dalla linea di comando o da programmi che usano le API di GitHub (es: GitKraken)
- Vediamo come creare un ***PAT***

---

# Git & GitHub

Esercitazione_03: Personal Access Token

- Dalla vostra home di GitHub

<img src="/media/git_12.png" width="600" style="margin:auto;position:relative; left: -180px; top: 10px;">

<img src="/media/git_13.png" width="200" style="margin:auto;position:relative; left: 280px; top: -210px;">


---

# Git & GitHub

Esercitazione_03: Personal Access Token

- Andate al fondo e selezionate *Developer Settings*

<img src="/media/git_14.png" width="550" style="margin:auto;position:relative; left: 0px; top: 20px;">


---

# Git & GitHub

Esercitazione_03: Personal Access Token

<img src="/media/git_15.png" width="800" style="margin:auto;position:relative; left: 0px; top: 20px;">


---

# Git & GitHub

Esercitazione_03: Personal Access Token


<img src="/media/git_16.png" width="460" style="margin:auto;position:relative; left: 0px; top: -20px;">


---

# Git & GitHub

Esercitazione_03: Personal Access Token


<img src="/media/git_17.png" width="460" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# Git & GitHub

Esercitazione_03: Personal Access Token


<img src="/media/git_18.png" width="600" style="margin:auto;position:relative; left: 0px; top: 0px;">

<br>

<!-- **IMPORTANTE**: 

`fare una copia del PAT appena generato, NON SARA' PIU' POSSIBILE VISUALIZZARLO` -->

<Banner padding=20px>
<mark>IMPORTANTE</mark><br><br>
fare una copia del PAT appena generato, <mark>NON SARA' PIU' POSSIBILE VISUALIZZARLO</mark>
</Banner>

---

# Git & GitHub

Esercitazione_04: Installazione di git

- git spesso è già presente sul tuo sistema
- Tuttavia installarlo da linea di comando è semplicissimo, basta infatti eseguire il seguente comando

<br>
```bash
# sudo apt install git
```

oppure 

```bash
# sudo dnf install git
```

<br>

- Al termine verifica la versione installata eseguedo

<br>
```bash
# git --version
#
# git version 2.34.1
```

<br>
- Se vedi un output simile a questo hai installato git con successo e ora sei pronto per lavorare


---

# Git & GitHub

Esercitazione_05: Configurazione di Git

- Git è un programma che può essere configurato in ogni suo aspetto
- Iniziamo con la configurazione base che ci permette di lavorare senza difficoltà
- Vogliamo configurare il nome utente, l'email e il PAT di accesso
- Per fre ciò useremo i seguenti comandi da linea di comando

<br>

```bash
# git config --global user.name 'Cognome-Nome' #configura nome utente

# git config --global user.email cognome.nome@istitutoagnelli.it # configura email

# git config --global credential.helper store  # al primo inserimento memorizza il PAT per usi futuri
```

<br>

- In questo modo nell'uso futuro di git non dovremo sempre inserire le credenziali, ma git lo farà per noi
- Verifica che tutto sia apposto con il seguente comando

```bash
# git config --global -l  # visualizza la configurazione globale di git
```
---

# Git & GitHub

Esercitazione_06: Clone di un repository remoto

- Ora vogliamo **CLONARE** il nostro repository appena creato su Github in locale
- Per fare ciò dobbiamo utilizzare il comando **clone**

<img src="/media/git_11.png" width="800" style="margin:auto;position:relative; left: 0px; top: 10px;">


---

# Git & GitHub

Esercitazione_06: Clone di un repository remoto

- Apri un terminale, vai nella tua directory di lavoro ed esegui

```bash
# git clone https://github.com/profmancusoa/IlMioRepository.git

Clone in 'IlMioRepository' in corso...
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Ricezione degli oggetti: 100% (3/3), fatto.
```

<br>

- Il link al tuo repository lo hai copiate al punto due del passo precedente. 
- Ovviamente è diverso dal mio

- Con questi semplici passaggi hai ottenuto una copia speculare (CLONE) del repository rmeoto su cui vuoi lavorare
- Git ha creato per te un repository locale e la working directory chiamata *IlMioRepository*

---

# Git & GitHub

Esercitazione_06: Clone di un repository remoto

```bash
# cd IlMioRepository
#
# ls -la
totale 252
drwxrwxr-x   3 antonio antonio   4096 giu 25 18:12 .
drwxrwxr-x 206 antonio antonio 241664 giu 25 18:12 ..
drwxrwxr-x   8 antonio antonio   4096 giu 25 18:12 .git
-rw-rw-r--   1 antonio antonio     37 giu 25 18:12 README.md
```

<br>

- Come vedi è presente il solo file README.md
- E' anche presente una directory chiamata ***.git*** che `NON VA MAI` rimossa o modificata
- In .git, git tiene traccia di tutte le informazioni necessarie alla gestione del repository

---

# Git & GitHub

Esercitazione_07: Modifica locale

- In quest'esercitazione cosa fare al termine di una sessione di lavoro nella propria workign diretory
- Creiamo un nuovo file chiamato *programma.c*

```bash
# cd ~/tmp/IlMioRepository # mi sposto nella mia working directory
# touch programma.c  # creo il file programma.c
# code programma.c # scrivo il programma

--- programma.c

#include <stdio.h>

int main() {
    printf("Hello da programma.c");

    return 0;
}

```

---

# Git & GitHub

Esercitazione_07: Modifica locale

- Al termine della scrittura del programma verifico lo stato del repository attraverso il comando `git status`

```bash
# git status

Sul branch main
Il tuo branch è aggiornato rispetto a 'origin/main'.

File non tracciati:
  (usa "git add <file>..." per includere l'elemento fra quelli di cui verrà eseguito il commit)
	programma.c

non è stato aggiunto nulla al commit ma sono presenti file non tracciati usa "git add" per tracciarli
```

- Come possiamo leggere ***git status*** ci dice che
  - il nostro ramo principale di sviluppo `main` in locale è aggiornato rispetto al repository centrale `origin/main`
  - è presente un file nella working directory `non tracciato da git` di nome *programma.c*

---

# Git & GitHub

Esercitazione_07: Modifica locale

- Quindi ciò significa che la stagoing area è vuota
- Ora, come visto in precedenza dobbiamo eseguire due operazioni
  - aggiungere *programma.c* alla staging area tramite il comando `git add <nome file>`
  - sincronizzare la staging area con il repository tramite il comando `git commit...`

```bash
# git add programma.c
# git status
Sul branch main
Il tuo branch è aggiornato rispetto a 'origin/main'.

Modifiche di cui verrà eseguito il commit:
  (usa "git restore --staged <file>..." per rimuovere gli elementi dall'area di staging)
	nuovo file:             programma.c

```

<br>

- ora *git status* ci dice che c'è un nuovo file nella staging area e verrà preso in carico nel prossimo ***committ***


---

# Git & GitHub

Esercitazione_07: Modifica locale

```bash
# git commit -m 'commit iniziale del programma'

[main 4d00f87] commit iniziale del programma
 1 file changed, 7 insertions(+)
 create mode 100644 programma.c
```

<br>

- nota l'uso del flag `-m` per sepcificare un messaggio di commit

<br>
<Banner padding="20px">
Il messaggio di commit VA SEMPRE indicato
</Banner>

<br>

- ora il file *programma.c* è stato aggiunto nel repository
  
---

# Git & GitHub

Esercitazione_07: Modifica locale

- Se verifichiamo lo stato del repository ora otterremo

```bash
# git status
Sul branch main
Il tuo branch è avanti rispetto a 'origin/main' di 1 commit.
  (usa "git push" per pubblicare i tuoi commit locali)

non c'è nulla di cui eseguire il commit, l'albero di lavoro è pulito
```
<br>

- non ci sono file modificati nella workign directory
- la staging area è vuota
- il tuo repository locale è avanti di 1 commit rispetto al repository centrale 
- Ciò soignifica che se ora vai su GitHub `NON` vedrai le modifiche appena apportate


---

# Git & GitHub

Esercitazione_08: Aggiorniamo il repository remoto

- Come detto le modifiche locali non appaiono ancora sul repository remoto
- Infatti su GitHub (remoto) il file *programma.c* non è presente


<img src="/media/git_19.png" width="800" style="margin:auto;position:relative; left: 0px; top: 10px;">


---

# Git & GitHub

Esercitazione_08: Aggiorniamo il repository remoto

- Per sincronizzare il repository remoto con il contenuto del repository locale dobbiamo usare il comando `git push`

<br>

```bash
# git push

Enumerazione degli oggetti in corso: 4, fatto.
Conteggio degli oggetti in corso: 100% (4/4), fatto.
Compressione delta in corso, uso fino a 8 thread
Compressione oggetti in corso: 100% (3/3), fatto.
Scrittura degli oggetti in corso: 100% (3/3), 370 byte | 370.00 KiB/s, fatto.
3 oggetti totali (0 delta), 0 riutilizzati (0 delta), 0 riutilizzati nel file pack
To https://github.com/profmancusoa/IlMioRepository.git
   d80e577..4d00f87  main -> main

```

---

# Git & GitHub

Esercitazione_08: Aggiorniamo il repository remoto

- Ora aggiornando la pagina di GitHub vedremo che il repository remoto è esattamente uguale al repository locle

<img src="/media/git_20.png" width="700" style="margin:auto;position:relative; left: 0px; top: 10px;">



---

# Git & GitHub

<img src="/media/git_07.png" width="700" style="margin:auto;position:relative; left: 100px; top: 20px;">


---

# Git & GitHub

Esercitazione_09: Lavoriamo in coppia sul repository

- Suddividersi in coppie di sviluppatore. 
- Chiamiamo ***A*** il primo sviluppatore
- Chiamiamo ***B*** il secondo sviluppatore
- A è lo sviluppatore che ha già creato il repository su GitHub
- B è lo sviluppatore che è invitato da A a lavorare sullo stesso repository

---

# Git & GitHub

Esercitazione_09: Lavoriamo in coppia sul repository


<img src="/media/git_21.png" width="700" style="margin:auto;position:relative; left: 100px; top: 20px;">


---

# Git & GitHub

Esercitazione_09: Lavoriamo in coppia sul repository

- A invita B a collaborare sul proprio repository
- B dovrà accettare l'invito ricevuto via email
- Ora B può fare il clone del repository condiviso
- Ora A effettua delle modifiche locali creando un file che si chiama *programma2.c*
- A fa il commit e il push delle sue modifiche nel repository remoto
- A questo punto B NON vede ancora le  modifiche apportate, ciò è normale
- B deve aggiornare il suo repository locale con il contenuto del repository remoto
- Per fare ciò deve eseguire il comando `git pull`

```bash
# git pull
```

- Ora i repository locali di A e B saranno sincronizzati con il repository remoto
- E per la proprietà transitiva anche i repository di A e B sono sincronizzati tra loro

---

# Git & GitHub

Esercitazione_09: Lavoriamo in coppia sul repository

- Invertire i ruoli
- B modifica il repository locale e poi quello remoto
- A sincronizza il suo repository locale con quello remoto

<br>
<Banner padding="40px" mt=20px>
Quanto visto finora è alla base dell'uso di Git in qualsiasi ambiente professionale.<br>
Come visto Git permette a svilupaptori indipendenti di lavorare e collaborare su uno stesso progetto o repository indipendentemente dalla loro posizione geografica.

</Banner>
 
---

# Git & GitHub

Esercitazione_10: oh my Git

- Esercitiamoci con git tramite un bel videogioco chiamato `oh my Git`
- Scarica ed installa [oh my Git](https://ohmygit.org/)


<img src="/media/git_22.png" width="700" style="margin:auto;position:relative; left: 0px; top: 10px;">


--- 

<img src="/media/hh02.webp" style="position:relative;top:-20px;">
