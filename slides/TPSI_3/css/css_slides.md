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
version: '1.6.4'
---  
<!-- https://css-tricks.com/snippets/css/complete-guide-grid/#top-of-site -->
<!-- https://gridbyexample.com/examples/ -->

# Cascading Style Sheets

Anche l'occhio vuole la sua parte

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>


---

# CSS

Cascading Style Sheets - Fogli di Stile

Un documento o pagina HTML è composto da tre parti principali:
### Struttura 
La sua componente logica e semantica: indica come suddividere il contenuto in elementi, eventualmente suddivisi in sottoelementi e così via in una sorta di gerarchia ad albero. Ad esempio, questo documento ha un titolo e una successione di sezioni/paragrafi aperte a loro volta da un titolo.

### Contenuto
Generalmente costituito dalle parole e risorse, di diversa natuera, che compongono il documento (testo, immagine, audio e video).

### Stile
Descrizione sul come visualizzare il documento su un particolare dispositivo o supporto. Un documento stampato su carta avrà uno stile diverso rispetto allo stesso documento formattato per una piattaforma mobile. Lo stile quindi influisce su come un documento HTML viene visualizzato su dispositivi e condizioni diverse.


---

# CSS

Cascading Style Sheets - Fogli di Stile

- *C*ascading *S*tyle *S*heets (CSS) è un semplice meccanismo ed un linguaggio per definire lo stile (fonts, colors, spacing) e descrivere l'aspetto e il layout di un documento HTML.
- La prima versione viene introdotta dal W3C nel 1996.  Oggiamo siamo alla versione 3 - CSS3
- CSS descrive come i vari elementi HTML devono essere visualizzati (colore, dimensione, font, bordo, ...) ==> **no descrizione semantica**.

<div grid="~ cols-3 gap-12">
  <v-click>
  <div>
    <br />
    <h1>Titolo</h1>
    <h1 style="color: red;">Titolo</h1>
    <h1 style="color: green; background: yellow;">Titolo</h1>
    <h1 style="color: gray;border: 4px dotted black;">Titolo</h1>
  </div>
  </v-click>
  <v-click>
  <div class="col-span-2">

  ```html

  <h1>Titolo</h1>


  <h1 style="color:red;">Titolo</h1>


  <h1 style="color:green; background:yellow;">Titolo</h1>


  <h1 style="color:gray;border:4px dotted;">Titolo</h1>
  ```
  </div>
  </v-click>
<div></div>
</div>


---

# CSS

Cascading Style Sheets - Fogli di Stile

- Il nome *cascading* deriva dallo schema di priorità con cui viene scelto quale stile applicare ad un dato elemento (stile viene applicato dall'alto al basso).
- CSS è progettato per separare il contenuto dalla presentazione [[Separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns)]. 
- In altre parole **HTML** descrive la semantica di una pagina, mentre **CSS** descrive lo stile grafico e come deve apparire.
- Questa separazione fornisce molti vantaggi, tra cui la possibilità di riusare lo stesso markup e visualizzarlo in modo diversi su dispositivi diversi.
- Normalmente lo stile di una pagina si definisce in un file esterno `.css`
- Permette anche di automentare la *manutenibilità* di un sito web, di separare il sito in aree funzionali diverse e di permettere la cooperazione tra diverse professionalità all'interno del gruppo di lavoro.


---

# CSS

Il [sito web](https://www.w3schools.com/) del consorzio W3C, offre una preziosa fonte di informazioni per apprendere le tecnologie del web.

### HTML
- [https://www.w3schools.com/html/default.asp](https://www.w3schools.com/html/default.asp)
- [https://www.w3schools.com/tags/default.asp](https://www.w3schools.com/tags/default.asp)
- [https://htmlreference.io/](https://htmlreference.io/)

### CSS

- [https://www.w3schools.com/css/default.asp](https://www.w3schools.com/css/default.asp)
- [https://www.w3schools.com/cssref/default.asp](https://www.w3schools.com/cssref/default.asp)
- [https://cssreference.io/](https://cssreference.io/)

### Java Script

- [https://www.w3schools.com/js/default.asp](https://www.w3schools.com/js/default.asp)
- [https://www.w3schools.com/jsref/default.asp](https://www.w3schools.com/jsref/default.asp)
- [https://devdocs.io/javascript/](https://devdocs.io/javascript/)
- [https://javascript.info/](https://javascript.info/)

---

# CSS

Allenarsi con HTML e CSS

Qui una serie di link a risorse esterne molto utili per mettere a frutto quando si apprenderà durante il corso

Per apprendere correttamente ed efficaciemente il CSS è necessario fare tanto esercizio sviluppando pagine di complessità crescente in modo da capire come usare i vari tag ed imparare a risolvere i problemi che si presentano durante la realizzazione di una pagina web

- [Learn Basic CSS by Building a Cafe Menu](https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-basic-css-by-building-a-cafe-menu)
- [Learn CSS Colors by Building a Set of Colored Markers](https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-css-colors-by-building-a-set-of-colored-markers)
- [Learn the CSS Box Model by Building a Rothko Painting](https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-the-css-box-model-by-building-a-rothko-painting)
- [Learn CSS Flexbox by Building a Photo Gallery](https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-css-flexbox-by-building-a-photo-gallery)
- [Learn Typography by Building a Nutrition Label](https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-typography-by-building-a-nutrition-label)
- [Learn Accessibility by Building a Quiz](https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-accessibility-by-building-a-quiz)
- [Learn More About CSS Pseudo Selectors by Building A Balance Sheet](https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-more-about-css-pseudo-selectors-by-building-a-balance-sheet)
- [Learn Intermediate CSS by Building a Picasso Painting](https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-intermediate-css-by-building-a-picasso-painting)
    
---

# CSS

Allenarsi con HTML e CSS

- [Learn Responsive Web Design by Building a Piano](https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-responsive-web-design-by-building-a-piano)
- [Learn CSS Variables by Building a City Skyline](https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-css-variables-by-building-a-city-skyline)
- [Learn CSS Grid by Building a Magazine](https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-css-grid-by-building-a-magazine)
- [Learn CSS Transforms by Building a Penguin](https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-css-transforms-by-building-a-penguin)
- [Learn CSS Animations by Building a Ferris Wheel](https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-css-animation-by-building-a-ferris-wheel)
- [CSS Battle](https://cssbattle.dev/)
- [Frontend Practice](https://www.frontendpractice.com/)
- [Codewell](https://www.codewell.cc/)
- [Frontend Mentor](https://www.frontendmentor.io/)
- [Dev Challenges](https://devchallenges.io/)
- [Codepen Challenges](https://codepen.io/challenges)
- [100 Days Challenge](https://100dayscss.com/)
- [Learn CSS](https://www.codecademy.com/learn/learn-css)

---
layout: section
---
<h1 class="sezione">Regole, dichiarazioni e sintassi CSS</h1>


---

# CSS

Regole e Sintassi

- Un foglio di stile CSS (file .css) definisce una serie <u>**regole**</u> da applicare ad una pagina HTML
- Una regola di stile è composta da **2** parti:
  - <u>*Selettore*</u>: seleziona o punta ad uno o più elementi o tag HTML.
  - <u>*Blocco dichiarazione*</u>: contiene una o più dichiarazioni separate da un punto e virgola `;` e racchiuse tra `{}`
- Ogni *dichiarazione* descrive una **proprietà CSS** in base a:
  - <u>*nome*</u>: nome della proprietà CSS del tag HTML 
  - <u>*valore*</u>: valore assegnato alla proprietà

<v-click>
<center>

![css_01.jpg](/media/css_01.jpg)

</center>
</v-click>

---

# CSS

Regole e Sintassi

- I commenti per il CSS sono quelli del C tradizionale `/*` e `*/`

<br />

```css
/* questo è un commento su una sola linea */
h1 { color: red; }



/* questo è un 
commento 
su più linee */
p1 { color: green; }
```

---
layout: section
---
<h1 class="sezione">Priorità Cascade CSS</h1>


---

# CSS

Cascade Style

- Ci sono **3** modi per specificare lo stile di una pagina/elemento HTML:
  1. **Inline**
  2. **Internal**
  3. **External**

### Inline

- Uno stile *inline* normalmente si usa per alterare la visualizzazione di un singolo elemento all'interno di una pagina HTML.
- Per specificare uno stile *inline* basta inserire la <u>*dichiarazione CSS*</u> dentro l'attributo ***style*** del tag per cui si vuole definire lo stile.

<div grid="~ cols-2 gap-4">
  <v-click>
  <div>

  ```html
  <h1 style="color:red;">Titolo rosso</h1>
  ```

  <br />
  <h1 style="color:red;">Titolo rosso</h1>
  </div>
  </v-click>
  
  <v-click>
  <div>
  
  ```html
  <h1 style="border:1px solid;">Titolo boerdo</h1>
  ```
  <br />
  <h1 style="border:1px solid;">Titolo bordo</h1>
  </div>
  </v-click>
</div>

---

# CSS

Cascade Style

### Inline

- Specificare lo stile inline come attributo del tag, presenta vari svantaggi:
  - Rende il codice HTML più difficoltoso da leggere
  - Non rispetta il principio [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (Don't Repeat Yourself)
  - Proliferazione e duplicazione degli stili in una pagina di medio/alta complessità
  - **Viola** il principio di suddivisione della struttura/semantica di una pagina dallo stile di presentazione

<div grid="~ cols-2 gap-4">
  <v-click>
  <div>

  ```html
  <h1 style="color:red;">Titolo1 in rosso</h1>
  <h1 style="color:red;">Titolo2 in rosso</h1>

  ```

  <br />
  <h1 style="color:red;">Titolo1 in rosso</h1>
  <h1 style="color:red;">Titolo2 Titolo in rosso</h1>

  </div>
  </v-click>
  
  <v-click>
  <div>
  
  ```html
  <h1 style="color:red;">Titolo3 in rosso</h1>
  <h1 style="color:red;">Titolo4 in rosso</h1>
  ```
  <br />
  <h1 style="color:red;">Titolo3 in rosso</h1>
  <h1 style="color:red;">Titolo4 in rosso</h1>
  </div>
  </v-click>
</div>

---

# Esercizio css_01

CSS Inline

1. Editare il file *|cognome|_esercizio_html_02.html* e salvarlo come *|cognome|_esercizio_css_01.html*
2. Definire lo stile inline per 4 tag `h2` e impostare il colore a rosso
3. Fornire il link github al file con nome |cognome|_esercizio_css_01.html



---

# CSS

Cascade Style

### Internal

- Per ovviare ai problemi degli stili *inline* è possibile specificare lo stile degli elementi di una pagina, all'interno (*internal*) della sezione `<style>` nell'header della pagina HTML. 
- All'interno della sezione `<style>` saranno prersenti le ***regole CSS*** da applicare a **TUTTA** la pagina.
- Normalmente lo stile *internal* si usa quando una pagina ha un unico stile.

<div grid="~ cols-2 gap-4">
  <v-click>
  <div>
 
```html
<head>
    <title>Internal CSS</title>
    <style>
      h1 {color: red;} <!-- Regola CSS -->
    </style>
</head>
<html>
  <h1>Titolo in rosso</h1>
  <h1>Ancora un Titolo in rosso</h1>
  <h1>Ultimo Titolo in rosso</h1>
</html>
```

  <br />

  </div>
  </v-click>
  
  <v-click>
  <div>
  
  <h1 style="color:red;">Titolo in rosso</h1>
  <h1 style="color:red;">Ancora un Titolo in rosso</h1>
  <h1 style="color:red;">Ultimo Titolo in rosso</h1>
  <br />
  </div>
  </v-click>
</div>


---

# Esercizio css_02

CSS Internal

1. Editare il file *|cognome|_esercizio_css_01.html* e salvarlo come *|cognome|_esercizio_css_02.html*
2. Definire uno stile internal per i tag `h2` e impostare il colore a blue
3. Rispondere alle seguenti domande:
   - Tutti i tag h2 sono diventati blue?
   -  Perchè? 
4. Fornire il link github al file con nome |cognome|_esercizio_css_02.html



---

# CSS

Cascade Style

### External

- Specificare lo style embedded nella pagina HTML, presenta alcuni svantaggi:
  - Rende il codice HTML più difficoltoso da leggere
  - Aumenta la dimensione della pagina html
  - Lo stile si applica ad una singola pagina web e deve essere replicato per altre pagien di un sito
- Per ovviare a questi problemi, è possibile specificare lo stile di una o più pagine (sito) attraverso un file `.css` esterno (*external style sheet*)
- In questo modo si ottiene la massima flessibilità e per modificare lo stile di un elemento per **TUTTO** il sito basta fare una singola modifica.


---

# CSS

Cascade Style

### External

- Quindi è possibile specificare lo stile come file esterno, utilizzanod il tag `<link>` all'interno della sezione `<head>` della pagina HTML.
- Nello specifico bisogna indicare quale file `.css` caricare in questo modo:

<br />

```html
<link rel="stylesheet" href="path/to/file.css" type="text/css" />
```     
dove:
- **rel="stylesheet"**: indica che il contenuto del file modificherà la parte di stile della pagina
- **href="path/to/file.css"**: indica la posizione del file .css (percorso relativo o assoluto)
- **type="text/css"**: indica che il file è di tipo style sheet (CSS)


---

# CSS

Cascade Style

### External

<div grid="~ cols-3 gap-4">
  <div grid="col-span-2">

index.html 
```html
<!DOCTYPE html>
<html lang="it">
<head>
    <link rel="stylesheet" href="stile.css" type="text/css" />
    <title>External CSS</title>
</head>
<html>
  <h1>Titolo in rosso</h1>
  <h1>Ancora un Titolo in rosso</h1>
  <h1>Ancora un Titolo in rosso</h1>
  <h1>Ultimo Titolo in rosso</h1>
</html>
```
  </div>
  <div>

stile.css
  ```html
  h1 {color: red;}
  ``` 
  <h1 style="color:red;font-size: 24px;">Titolo in rosso</h1>
  <h1 style="color:red;font-size: 24px;">Ancora un Titolo in rosso</h1>
  <h1 style="color:red;font-size: 24px;">Ancora un Titolo in rosso</h1>
  <h1 style="color:red;font-size: 24px;">Ultimo Titolo in rosso</h1>
  </div>
</div>


---

# Esercizio css_03

CSS External

1. Editare il file *|cognome|_esercizio_css_02.html* e salvarlo come *|cognome|_esercizio_css_03.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_03.css*
3. Definire uno stile external per i tag `h1` e `h2` e impostare il colore a verde
4. Rispondere alle seguenti domande:
   - Tutti i tag h1 e h2 sono diventati verdi?
   -  Perchè? 
5. Fornire il link github al file con nome |cognome|_esercizio_css_03.html
6. Fornire il link github al file con nome |cognome|_esercizio_css_03.css



---

# CSS

Priorità degli stili 

Come visto nelle lezioni e esercizi precedenti, lo stile di un elemento può essere definito in 3 posizioni diverse:
1. inline come attributo del tag
2. internal nella pagina
3. external in un file .css

Quindi, se per un elemento sono definiti 3 stili, **quale si applica?** 
- Gli stili si applicano in *cascata* (Cascade) secondo una priorità dal livello più basso verso il livello più alto: 
  - se è solo presente uno stile external questo viene applicato
  - se è presente uno stile exgternal e uno stile internal, quello internal viene applicato
  - se sono presenti tutti e tre i livelli di stile, quello inline viene applicato

<div style="border: 1px solid black;margin: 15px; padding:15px; background: green; color: yellow;">
In altre parole viene applicato lo stile più vicino al tag.
</div>

---

# Esercizio css_04

CSS External

1. Editare il file *|cognome|_esercizio_css_03.html* e salvarlo come *|cognome|_esercizio_css_04.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_04.css*
3. Rimuovere tutti gli stili inline ed internal
4. Inserire tutti gli stilo solo come external
5. Rispondere alle seguenti domande:
   - Tutti i tag h1 e h2 sono diventati verdi?
   -  Perchè? 
6. Fornire il link github al file con nome |cognome|_esercizio_css_04.html
7. Fornire il link github al file con nome |cognome|_esercizio_css_04.css




---
layout: section
---
<h1 class="sezione">I Selettori</h1>


---

# CSS

Selettori

- Come visto in precedenza, una regola CSS inizia sempre con un ***selettore***.
- Un selettore, "cerca" o seleziona uno o più tag HTML a cui applicare la regola CSS e quindi variarne lo stile.
- I selettori CSS possono essere divisi in **5** categorie:
  1. <u>***selettori Simple***</u> : selezionano un tag in base al nome, ad un ID o una classe
  2. <u>***selettori Combinator***</u> : selezionano elementi basandosi su specifiche relazioni tra essi
  3. <u>***selettori Pseudo-Class***</u> : selezionano tag in funzione di stati specifici
  4. <u>***selettori Pseudo-Elements***</u> : seleziona solo una parte di un tag
  5. <u>***selettori Attribute***</u> : seleziona tag in base a specifici attributi


---
layout: section
---
<h1 class="sezione">Selettori Simple</h1>


---

# CSS

Selettori Simple

### element selector

- Il selettore ***element*** seleziona tag HTML in base al nome

Regola CSS: `<nome tag> { dichiarazione CSS}`

<br />

```html
p { /* seleziona tutti i tag <p> */
    color: green;
    text-align: center; 
}
h1 { color: red;} /* seleziona tutti i tag <h1> */
```
<div grid="~ cols-2 gap-4">
<div>
<v-click>

```html

<h1>Titolo rosso</h1>
<h2>Sottotitolo senza stile</h2>
<p>
  Questo è un paragrafo con uno stile.
</p>
```
</v-click>
</div>
<div>
<v-click>
<br />
<h1 style="color: red;">Titolo rosso</h1>
<h2>Sottotitolo senza stile</h2>
<p style="color:green;text-align:center;">
Questo è un paragrafo a cui è stato applicato uno stile.
</p>
</v-click>
</div>
</div>

---

# Esercizio css_05

CSS element selector

1. Editare il file *|cognome|_esercizio_css_04.html* e salvarlo come *|cognome|_esercizio_css_05.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_05.css*
3. Definire lo stile esterno in modo che:
   - tutti i tag `h1` siano Rossi
   - tutti i tag `h2` siano Verdi
   - tutti i tag `p` siano Blue
4. Fornire il link github al file con nome |cognome|_esercizio_css_05.html
5. Fornire il link github al file con nome |cognome|_esercizio_css_05.css




---

# CSS

Selettori Simple

### id selector

- Seleziona un tag con uno specifico valore per l'attributo *id*
- Il valore dell'attributo *id* per un tag deve essere **univoco** all'interno di una pagina e non può iniziare con un numero.
- Pertanto questo tipo di selettore è molto utile per selezionare un singolo elemento all'interno di una pagina.

Regola CSS: `#<valore id> { dichiarazione CSS}`

<div grid="~ cols-3 gap-4">
<div>
<v-click>

```html
p { 
    color: green;
    text-align: left; 
}<!--seleziona tutti i tag p-->
#pr1 { 
  color: blue;
  text-align: right; 
}<!--seleziona il tag con
 id=prg1--> 
```
</v-click>
</div>

<div>
<v-click>

```html
<p>Parag element selector</p>

<p>Parag element selector</p>

<p id="pr1">Parag id select</p>

<p>Parag element selector</p>
```
</v-click>
</div>

<div>
<v-click>
<p style="color:green;text-align:left;">Parag element selector</p>
<p style="color:green;text-align:left;">Parag element selector</p>
<p style="color:blue;text-align:right;">Parag id select</p>
<p style="color:green;text-align:left;">Parag element selector</p>
</v-click>
</div>
</div>


---

# CSS

Selettori Simple

### id selector

<div class="grid grid-flow-col auto-cols-max gap-16">
<div>

```html
<!-- seleziona tutti i tag <p> -->
p { 
    color: chartreuse;
    text-align: left; 
}
<!-- seleziona il tag con id=prg1--> 
#pr1 { 
  color: blue;
}
<!-- seleziona il tag con id=prg2--> 
#pr2 { 
  color: red; 
}
<!-- seleziona il tag con id=prg3--> 
#pr3 { 
 color: green; 
}
```
</div>

<div>

```html
<p>Paragrafo iniziale</p>

<p id="pr1">Paragrafo #1</p>

<p id="pr2">Paragrafo #2</p>

<p id="pr3">Paragrafo #3</p>

<p>Paragrafo finale</p>
```
</div>

<div>
<v-click>
<p style="color:chartreuse;">Paragrafo iniziale</p>
<p style="color:blue;">Paragrafo #1</p>
<p style="color:red;">Paragrafo #2</p>
<p style="color:green;">Paragrafo #3</p>
<p style="color:chartreuse;">Paragrafo finale</p>
</v-click>
</div>
</div>

---

# Esercizio css_06

CSS id selector

1. Editare il file *|cognome|_esercizio_css_05.html* e salvarlo come *|cognome|_esercizio_css_06.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_06.css*
3. Usando gli id selector, definire lo stile esterno in modo che:
   - tutti i tag `h1` siano Blue
   - i tag `h2` numero 1,3,5 (partendo dall'alto) siano Rossi
   - i tag `h2` numero 2,4,6 (partendo dall'alto) siano Verdi
   - i tag `p` numero 1,3,5 (partendo dall'alto) siano Grigi
   - i tag `p` numero 2,4,6 (partendo dall'alto) siano Arancioni
4. Fornire il link github al file con nome |cognome|_esercizio_css_06.html
5. Fornire il link github al file con nome |cognome|_esercizio_css_06.css




---

# CSS

Selettori Simple

### class selector

- Seleziona un tag con uno specifico valore per l'attributo *class*
- Il valore dell'attributo *class* può essere assegnato ad uno o più tag all'interno di una pagina e non può iniziare con un numero.
- Pertanto questo tipo di selettore è molto utile per selezionare una serie specifica di elementi all'interno di una pagina.

Regola CSS: `.<valore class> { dichiarazione CSS}`

<div class="grid grid-flow-col auto-cols-max gap-4">
<div>
<v-click>

```html
<!-- seleziona tutti i tag con class=rosso -->
.rosso { 
  color: red;
} 
```
</v-click>
</div>

<div>
<v-click>

```html
<p>Paragrafo semplice</p>

<p class="rosso">Paragrafo rosso</p>

<p>Paragrafo semplice</p>
```
</v-click>
</div>

<div>
<v-click>
<p>Paragrafo semplice</p>
<p style="color:red;">Paragrafo rosso</p>
<p>Paragrafo semplice</p>
</v-click>
</div>
</div>

---

# CSS

Selettori Simple

### class selector

<div class="grid grid-flow-col auto-cols-max gap-4">
<div>

```html
<!-- seleziona tutti 
i tag <p> -->
p { 
    color: blue;
}

<!-- seleziona tutti 
i tag con class=rosso -->
.rosso { 
  color: red;
}

<!-- seleziona tutti 
i tag con class=verde-->
.verde {
  color: green;
}
```
</div>

<div>

```html
<p>Paragrafo iniziale</p>

<p class="rosso">Paragrafo rosso</p>

<p class="verde">Paragrafo verde</p>

<h2 class="verde">Sottotitolo verde</h2>

<p class="rosso">Paragrafo rosso</p>

<p>Paragrafo finale</p>
```
</div>

<div>
<v-click>
<p style="color:blue;">Paragrafo iniziale</p>

<p style="color:red;">Paragrafo rosso</p>

<p style="color:green;">Paragrafo verde</p>

<h2 style="color:green;">Sottotitolo verde</h2>

<p style="color:red;">Paragrafo rosso</p>

<p style="color:blue;">Paragrafo finale</p>
</v-click>
</div>
</div>

---

# Esercizio css_07

CSS class selector

1. Editare il file *|cognome|_esercizio_css_06.html* e salvarlo come *|cognome|_esercizio_css_07.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_07.css*
3. Usando i class selector, definire lo stile esterno in modo che:
   - tutti i tag `h1` siano Blue
   - i tag `h2` numero 1,3,5 (partendo dall'alto) siano Verdi
   - i tag `h2` numero 2,4,6 (partendo dall'alto) siano Rossi
   - i tag `p` numero 1,3,5 (partendo dall'alto) siano Arancioni
   - i tag `p` numero 2,4,6 (partendo dall'alto) siano Grigi
4. Fornire il link github al file con nome |cognome|_esercizio_css_07.html
5. Fornire il link github al file con nome |cognome|_esercizio_css_07.css




---

# CSS

Selettori Simple

### grouping selector

- Seleziona una serie di tag in base al loro nome.
- In altre parole è un *element selector* multiplo che permette di applicare una stessa regola CSS a più tag contemporaneamente.
- Questo selettore è molto utile per applicare uno stile comune a più tag in una pagina. Semplifica notevolmente la manutenzione

Regola CSS: `<nome tag1>, <nome tag2>, .... <nome tagN> { dichiarazione CSS}`

---

# CSS

Selettori Simple

### grouping selector

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

```html

<!-- applica la regola CSS a tutti i tag 
<p> <h1> e <h2> --> 
p, h1, h2 {
  color: red;
}

<!-- applica la regola CSS a tutti i tag 
<h1> e <h2> --> 
h1,h2 {
  text-decoration: underline;
  text-decoration-color:blue;
}
```
</div>

<div>
<v-click>

```html

<h1>Titolo</h1>
<p>Paragrafo rosso</p>

<p>Paragrafo rosso</p>

<h2>Sottotitolo</h2>

<p>Paragrafo rosso</p>

<p>Paragrafo rosso</p>

<h3>Sotto sotto titolo</h3>

<h2>Sottotitolo</h2>
```
</v-click>
</div>

<div>
<v-click>
<h1 style="color:red;text-decoration: underline;text-decoration-color:blue;">Titolo</h1>

<p style="color:red;">Paragrafo rosso</p>

<p style="color:red;">Paragrafo rosso</p>

<h2 style="color:red;text-decoration: underline;text-decoration-color:blue;">Sottotitolo</h2>

<p style="color:red;">Paragrafo rosso</p>

<p style="color:red;">Paragrafo rosso</p>

<h3>Sotto sotto titolo</h3>

<h2 style="color:red;text-decoration: underline;text-decoration-color:blue;">Sottotitolo</h2>

</v-click>
</div>
</div>


---

# Esercizio css_08

CSS simple selector

1. Editare il file *|cognome|_esercizio_css_07.html* e salvarlo come *|cognome|_esercizio_css_08.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_08.css*
3. definire lo stile per tutti gli heading h1, he e h3 con colore rosso e sottolineatura grigia
4. definire lo stile per tutti i paragrafi con colore blue e allineamento del testo a sinistra
5. definire lo stile per il terzo heading h2 con colore verde
6. definire lo stile per il settimo paragrafo con colore rosso e allineamento del testo a destra
7. definire lo stile per tutti i tag `<hr>` pari con colore nero e spessore 10px (contando dal primo tag hr)
8. definire lo stile per tutti i tag `<hr>` dispari con colore rosso e spessore 3px (contando dal primo tag hr)
9. Fornire il link github al file con nome |cognome|_esercizio_css_08.html
10. Fornire il link github al file con nome |cognome|_esercizio_css_08.css



---
layout: section
---
<h1 class="sezione">Selettori Combinator</h1>


---

# Document Object Model

DOM

- Ogni tag e elemento HTML è un **oggetto**
- Quando una pagina web è caricata, il browser crea una rappresentazione ad albero dei suoi elementi.
- Questo albero si chiama ***Document Object Model*** o ***DOM***.

`il DOM è una rappresentazione ad albero degli oggetti della pagina HTML`


<center>
<img src="/media/css_02.jpg" width="500" />
</center>


---

# Document Object Model

DOM

- Il DOM si manipola atraverso l'oggetto più di alto livello **Document**
- `html` è il Root element del DOM
- La manipolazione del DOM da parte di JavaScript è alla base del moderno paradigma di sviluppo web, infatti:
  - JS può navigare nel DOM ed accedere a tutti gli oggetti
  - JS può manipolare tutti i tag ed attributi HTML di una pagina
  - JS può aggiungere o rimuovere elementi HTML ad una pagina
  - JS può modificare tutti gli stili di una pagina
  - JS può gestire tutti gli eventi di una pagina

---

# Document Object Model

DOM

- Per accedere al DOM di una pagina attraverso Chrome basta selezionare la pagine e dal menù contestuale (right-click) selezionare **Ispeziona**

<br>
<center>
<img src="/media/css_02a.png" width="500" />
</center>


---

# Document Object Model

DOM

<center>
<img src="/media/css_02b.png" width="600" />
</center>


---

# Document Object Model

DOM

- In questa finestra è possibile navigare tutto il DOM della pagina
- E' possibile vederne l'oragnizzazione gerarchica 
- E' possibile modificare qualsiasi oggetto vedendo immediatamente il risultato

<br>
<table>
<tr>
<td><img src="/media/css_02c.png" width="500" /></td>
<td><img src="/media/css_02d.png" width="500" /></td>
</tr>
</table>

---

# Document Object Model

DOM


<br>
<table>
<tr>
<td><img src="/media/css_02e.png" width="500" /></td>
<td><img src="/media/css_02f.png" width="500" /></td>
</tr>
</table>

---

# Document Object Model

DOM

- Un altro strumento che può essere utile è [Live DOM Viewer](http://software.hixie.ch/utilities/js/live-dom-viewer/)

<center>
<img src="/media/css_02g.png" width="600" />
</center>

---

# Esercizio css_09

DOM

1. Analizzare il DOM della pagina  *|cognome|_esercizio_css_08.html* con:
   - Google Chrome Developer Tools
   - Live DOM Viewer
  


---

# CSS

Selettori Combinator

### child selector

- Seleziona tutti i tag che sono **"figli diretti"** di uno specifico tag.
  
Regola CSS: `<nome tag padre> > <nome tag figlio> { dichiarazione CSS}`

<div class="grid grid-flow-col auto-cols-max gap-4">
<div>

```html
<!-- seleziona tutti i tag <p> 
  figli di un <div> -->

div > p {
  background-color: yellow;
}
```

</div>
<div>
<v-click>

```html
<h2>Sottotitolo</h2>
<p>Paragrafo singolo</p>

<div>
  <!-- questo <p> è figlio di <div> -->
  <p>Paragrafo figlio di div</p>
  <span>
    <!-- questo <p> è figlio di <span> -->
    <p>Paragrafo parente di div</p>
  </span>
  <p>Paragrafo figlio di div</p>
</div>

<p>Paragrafo singolo</p>
```

</v-click>
</div>
<div>
<v-click>


<h2>Sottotitolo</h2>
<p>Paragrafo singolo</p>

<div>
  <!-- questo <p> è figlio di <div> -->
  <p style="background-color: yellow;">Paragrafo figlio di div</p>
  <span>
    <!-- questo <p> è figlio di <span> -->
    <p>Paragrafo parente di div</p>
  </span>
  <p style="background-color: yellow;">Paragrafo figlio di div</p>
</div>

<p>Paragrafo singolo</p>

</v-click>
</div>
</div>

---

# CSS

Selettori Combinator

### child selector

<div grid="~ cols-2 gap-4">
<div>

```html
<h2>Sottotitolo</h2>
<p>Paragrafo singolo</p>

<div>
  <!-- questo <p> è figlio di <div> -->
  <p>Paragrafo figlio di div</p>
  <span>
    <!-- questo <p> è figlio di <span> -->
    <p>Paragrafo parente di div</p>
  </span>
  <p>Paragrafo figlio di div</p>
</div>

<p>Paragrafo singolo</p>
```
</div>

<div>
<v-click>

<center>
<img src="/media/css_03.drawio.svg" width="300" />
</center>

</v-click>
</div>
</div>

---

# Esercizio css_10

CSS child selector

1. Dato il file [esercizio_css_10.html](https://profmancusoa.github.io/TPSI/support/esercizio_css_10.html)
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_10.css*
3. Definire lo stile per tutti i tag span figli diretti di h1 in modo che siano di colore blue
4. Definire lo stile per tutti i tag span figli diretti di h2 in modo che siano di colore rossi
5. Definire lo stile per tutti i tag span figli diretti di un paragrafo in modo che siano di colore viola
6. Definire lo stile per tutti i tag span nipoti di div e figli di p in modo che siano di colore verde scuro
7. Fornire il link github al file con nome |cognome|_esercizio_css_10.html
8. Fornire il link github al file con nome |cognome|_esercizio_css_10.css

---

# CSS

Selettori Combinator

### descendant selector

- Seleziona tutti i tag che sono **"discendenti"** di uno specifico tag.
  
Regola CSS: `<nome tag padre> <nome tag discendente> { dichiarazione CSS}`

<div class="grid grid-flow-col auto-cols-max gap-4">
<div>

```html
<!-- seleziona tutti i tag <p> 
  discendenti di un <div> -->

div  p {
  background-color: yellow;
}
```

</div>
<div>
<v-click>

```html
<h2>Sottotitolo</h2>
<p>Paragrafo singolo</p>
<div>
  <!-- questo <p> è figlio di <div> -->
  <p>Paragrafo figlio di div</p>
  <span>
    <!-- questo <p> è figlio di <span> 
      e discendente di <div>-->
    <p>Paragrafo parente di div</p>
  </span>
  <p>Paragrafo figlio di div</p>
</div>
<p>Paragrafo singolo</p>
```

</v-click>
</div>
<div>
<v-click>


<h2>Sottotitolo</h2>
<p>Paragrafo singolo</p>

<div>
  <p style="background-color: yellow;">Paragrafo figlio di div</p>
  <span>
    <p style="background-color: yellow;">Paragrafo parente di div</p>
  </span>
  <p style="background-color: yellow;">Paragrafo figlio di div</p>
</div>

<p>Paragrafo singolo</p>

</v-click>
</div>
</div>

---

# CSS

Selettori Combinator

### descendant selector

<div grid="~ cols-2 gap-4">
<div>

```html
<h2>Sottotitolo</h2>
<p>Paragrafo singolo</p>

<div>
  <!-- questo <p> è figlio di <div> -->
  <p>Paragrafo figlio di div</p>
  <span>
    <!-- questo <p> è figlio di <span> 
      e discendente di <div>-->
    <p>Paragrafo parente di div</p>
  </span>
  <p>Paragrafo figlio di div</p>
</div>

<p>Paragrafo singolo</p>
```
</div>

<div>
<v-click>

<center>
<img src="/media/css_04.drawio.svg" width="300" />
</center>

</v-click>
</div>
</div>


---

# Esercizio css_11

CSS descendant selector


1. Dato il file [esercizio_css_11.html](https://profmancusoa.github.io/TPSI/support/esercizio_css_11.html)
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_11.css*
3. definire lo stile per tutti i tag `<mark>` che sono figli di `<p>` con colore verde
4. definire lo stile per tutti i tag `<b>` che sono figli di `<p>` con colore giallo e sfondo nero
5. definire lo stile per tutti i tag `<em>` che sono discendenti di `<div>` con rosso su sfondo giallo
6. definire lo stile per tutti i tag `<span>` che sono discendenti di `<div>` con sfondo giallo e colore nero
7.  Fornire il link github al file con nome |cognome|_esercizio_css_11.html
8.  Fornire il link github al file con nome |cognome|_esercizio_css_11.css


---
layout: section
---
<h1 class="sezione">Selettori Pseudo-Class</h1>


---

# CSS

Selettori Pseudo-Class

- Un selettore ***Pseudo Class*** è utilizzato per applicare una regola CSS in funzione dello stato di un tag.
- Per esempio, può essere usato per:
  - Definire lo stile di un elemento quando l'utente ci passa sopra con il mouse (*mouse hover*)
  - Definire stili diversi per un link già visitato
  - Definire lo stile per un elemento che ha ricevuto il focus (*mouse e tastiera associati all'elemento*)

Regola CSS: `<selettore>:<pseudo classe> { dichiarazione CSS}`

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

```html
a:link { color: blue; } <!-- unvisited link -->

a:visited { color: green; } <!-- visited link -->

a:hover { color: red; background: yellow;} <!-- mouse over link -->

a:active { color: grey; } <!--  selected link -->
```
</div>
<div>
<a href="https://www.linux.it/linux" target="_blank">Link ad una risorsa esterna</a>
</div>
</div>

<style>
  a:link { color: blue; } 
  a:visited { color: green;}
  a:hover { color: red; background: yellow;}
  a:active { color: grey; }
</style>


---

# CSS

Selettori Pseudo-Class


### pseudo class

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

```html
div:hover {
  background-color: blue;
  color:white;
  border: 5px dashed red;
}
```
</div>
<div>
<div id="id1">
 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I
</div>
</div>
</div>

<br /><br />
<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

```html
input:focus {
  background: #D3D3D3;
  color: blue;
}
```
</div>
<div>
<form>
  <label for="fname">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nome:&nbsp;&nbsp;</label>
  <input type="text" id="fname" name="fname" placeholder="Inserisci il tuo nome"><br /><br />
  <label for="lname">Cognome:&nbsp;&nbsp;</label>
  <input type="text" id="lname" name="lname" placeholder="Inserisci il tuo cognome"><br><br>
</form> 
</div>
</div>

<style>
div #id1 {
  width: 400px;
  height: 150px;
  padding: 10px;
  background-color: gray;
  color:yellow;
  border: 0px solid black;
}

div:hover #id1 {
  background-color: blue;
  color:white;
  border: 5px dashed red;
}

input {
  border: 1px solid grey;
}

input:focus {
  background: #D3D3D3;
  color: blue;
}

</style>


---

# CSS

Selettori Pseudo-Class

### first child

- La pseudo classe `first-child` seleziona solo il primo dei tag "figlii" di un altro elemento
 
 Regola CSS: `<selettore>:first-child { dichiarazione CSS}`

<div grid="~ cols-3 gap-4">
<div>

```html
h1 {
  color: red;
}

h1:first-child { 
  color: yellow; 
  background: grey;
} 
```
</div>
<div>

```html
<h1>Primo titolo</h1>

<h1>Secondo titolo</h1>

<h1>Terzo titolo</h1>

<h1>Quarto titolo</h1>

<h1>Quitno titolo</h1>
```
</div>
<div>
<v-click>

<h4>Primo titolo</h4><br />
<h4>Secondo titolo</h4><br />
<h4>Terzo titolo</h4><br />
<h4>Quarto titolo</h4><br />
<h4>Quitno titolo</h4><br />
</v-click>
</div>
</div>

<style>
  h4 {color: red;}
  h4:first-child { color: yellow; background: grey;}
</style>


---

# Esercizio css_12

CSS pseudo-class selector

1. Editare il file *|cognome|_esercizio_html_11.html* e salvarlo come *|cognome|_esercizio_css_12.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_12.css*
3. definire lo stile per tutte le ancore in modo che i link normalmente siano di colore blu, quando visitati di colore rosso con sfondo giallo, e quando l'utente ci passa sopra con il mouse siano di colore verde
4. definire lo stile per il primo titolo di livello 1 in modo che siano sottolineati e di colore blue
5. definire lo stile per il primo titolo di livello 2 in modo che siano di colore verde
6. definire lo stile per il primo paragrafo in modo che siano colore rosso ed il testo sia allineato a sinistra
7. Fornire il link github al file con nome |cognome|_esercizio_css_12.html
8. Fornire il link github al file con nome |cognome|_esercizio_css_12.css


---

# CSS

Selettori Pseudo-Class

### nth-child

- La pseudo classe `nth-child` seleziona una serie di elementi fratelli  in funzione della loro posizione
 
Regola CSS: `<selettore>:nth-child(parametro) { dichiarazione CSS}`

dove parametro può essere:

- **odd**: seleziona gli elementi con posizione dispari
- **even**: seleziona gli elementi con posizione pari
- **An+B**: 
  - A: definisce lo step
  - B: definisce l'offset iniziale
  - n: è un intero progressivo che parte da 0 
  
---

# CSS

Selettori Pseudo-Class

### nth-child

<div grid="~ cols-3 gap-4">
<div>

```html
li:nth-child(even) {
    color: red;
    background-color: yellow;
}
```
</div>
<div>

```html
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
    <li>item 5</li>
    <li>item 6</li>
    <li>item 7</li>
    <li>item 8</li>
    <li>item 9</li>
    <li>item 10</li>
</ul>
```
</div>

<div>
<v-click>

<ul>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
<li>item 4</li>
<li>item 5</li>
<li>item 6</li>
<li>item 7</li>
<li>item 8</li>
<li>item 9</li>
<li>item 10</li>
</ul>

</v-click>
</div>
</div>

<style>
  li:nth-child(even) {
    color: red;
    background-color: yellow;
  }
</style>

---

# CSS

Selettori Pseudo-Class

### nth-child

<div grid="~ cols-3 gap-4">
<div>

```html
li:nth-child(odd) {
    color: red;
    background-color: yellow;
}
```
</div>
<div>

```html
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
    <li>item 5</li>
    <li>item 6</li>
    <li>item 7</li>
    <li>item 8</li>
    <li>item 9</li>
    <li>item 10</li>
</ul>
```
</div>

<div>
<v-click>

<ul>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
<li>item 4</li>
<li>item 5</li>
<li>item 6</li>
<li>item 7</li>
<li>item 8</li>
<li>item 9</li>
<li>item 10</li>
</ul>

</v-click>
</div>
</div>

<style>
  li:nth-child(odd) {
    color: red;
    background-color: yellow;
  }
</style>

---

# CSS

Selettori Pseudo-Class

### nth-child

<div grid="~ cols-3 gap-4">
<div>

```html
li:nth-child(2n+5) {
    color: red;
    background-color: yellow;
}
```
</div>
<div>

```html
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
    <li>item 5</li>
    <li>item 6</li>
    <li>item 7</li>
    <li>item 8</li>
    <li>item 9</li>
    <li>item 10</li>
</ul>
```
</div>

<div>
<v-click>

<ul>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
<li>item 4</li>
<li>item 5</li>
<li>item 6</li>
<li>item 7</li>
<li>item 8</li>
<li>item 9</li>
<li>item 10</li>
</ul>

</v-click>
</div>
</div>

<style>
  li:nth-child(2n+5) {
    color: red;
    background-color: yellow;
  }
</style>

---

# CSS

Selettori Pseudo-Class

### nth-child

<div grid="~ cols-3 gap-4">
<div>

```html
li:nth-child(2n+1) {
    color: red;
    background-color: yellow;
}
```
</div>
<div>

```html
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
    <li>item 5</li>
    <li>item 6</li>
    <li>item 7</li>
    <li>item 8</li>
    <li>item 9</li>
    <li>item 10</li>
</ul>
```
</div>

<div>
<v-click>

<ul>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
<li>item 4</li>
<li>item 5</li>
<li>item 6</li>
<li>item 7</li>
<li>item 8</li>
<li>item 9</li>
<li>item 10</li>
</ul>

</v-click>
</div>
</div>

<style>
  li:nth-child(2n+1) {
    color: red;
    background-color: yellow;
  }
</style>

---

# CSS

Selettori Pseudo-Class

### nth-child

<div grid="~ cols-3 gap-4">
<div>

```html
li:nth-child(2n) {
    color: red;
    background-color: yellow;
}
```
</div>
<div>

```html
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
    <li>item 5</li>
    <li>item 6</li>
    <li>item 7</li>
    <li>item 8</li>
    <li>item 9</li>
    <li>item 10</li>
</ul>
```
</div>

<div>
<v-click>

<ul>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
<li>item 4</li>
<li>item 5</li>
<li>item 6</li>
<li>item 7</li>
<li>item 8</li>
<li>item 9</li>
<li>item 10</li>
</ul>

</v-click>
</div>
</div>

<style>
  li:nth-child(2n) {
    color: red;
    background-color: yellow;
  }
</style>

---

# Esercizio css_12a

CSS pseudo-class selector

1. Creare un file *|cognome|_esercizio_html_12a.html* e inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_12a.css*
2. Creare una scacchiera 8x8 in cui 
   1. in ogni cella viene scritta la coordinata in forma righa,colonna (partendo da zero)
   2. colorare le celle esattamente come in una scacchiera per scacchi
3. Fornire il link github al file con nome |cognome|_esercizio_css_12a.html
4. Fornire il link github al file con nome |cognome|_esercizio_css_12a.css


---
layout: section
---
<h1 class="sezione"><span style="color: green;">Un Web a Colori</span></h1>


---

# CSS

Colori

- In CSS ci sono vari modi per specificare un colore in una proprietà:
  1.  Specificando il nome di uno dei [140 colori supportati](https://www.w3schools.com/colors/colors_names.asp) (Red, LightGray, Orange, ...) 
  2.  Usando un valore ***RGB*** (Red Green Blue) nella forma `rgb(240, 124, 22)`
  3.  Usando un valore ***HEX*** nel forma `#RRGGBB` - ***#F1A3C4***
  4.  Usando un valore ***HSL*** nella forma `hsl(5,  30%, 54%)`

- Inoltre è possibile anche specificare un parametro di trasparenza (***alpha***) compreso tra 0 e 1
  
  5. Usando un valore ***RGBA*** (Red Green Blue Alpga) nella forma `rgba(240, 124, 22, 0.5)`
  6. Usando un valore ***HSLA*** nella forma `hsla(5,  30%, 54%, 0.81)`

---

# CSS

Colori

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

```css
#id1 { background-color: red; }


#id2 { background-color: #56d3f8; }



#id3 { background-color: rgb(23, 182, 85); }



#id4 { background-color: rgba(23, 182, 85, 0.5); }



#id5 { background-color: hsl(249, 73%, 40%); }



#id6 { background-color: hsla(249, 73%, 40%, 0.75); }
```
</div>
<div>
<div id="id1">red</div><br />
<div id="id2">#56d3f8</div><br />
<div id="id3">rgb(23, 182, 85)</div><br />
<div id="id4">rgba(23, 182, 85, 0.5)</div><br />
<div id="id5">hsl(249, 73%, 40%);</div><br />
<div id="id6">hsla(249, 73%, 40%, 0.75)</div><br />
</div>
</div>

<style>
  #id1 { background-color: red; width:250px; height:50px; color:white; text-align:center; line-height: 50px; }
  #id2 { background-color: #56d3f8; width:250px; height:50px; color:white; text-align:center; line-height: 50px; }
  #id3 { background-color: rgb(23, 182, 85); width:250px; height:50px; color:white; text-align:center; line-height: 50px; }
  #id4 { background-color: rgba(23,182, 85, 0.5); width:250px; height:50px; color:white; text-align:center; line-height: 50px; }
  #id5 { background-color: hsl(249, 73%, 40%); width:250px; height:50px; color:white; text-align:center; line-height: 50px; }
  #id6 { background-color: hsla(249, 73%, 40%, 0.75); width:250px; height:50px; color:white; text-align:center; line-height: 50px; }
</style>

---

# CSS

Colori

- Un problema principale (almeno per gli informatici :) ) è l'accostamento dei colori
- Un sito risulta gradevole se i colori sono armoniosi e scelti secondo regole precise
- Fortunatamente per realizzare le nostre pagine Web possiamo ricorrete ad una moltitudine di strumenti disponibili sul web in forma gratuita
- Questi strumenti prendono il nome di `palette generator` o `web palette generator`
- Facendo una ricerca su google  si trovano circa 6.700.000 risultati
- Pertanto ognuno utilizzi il tool a lui più congegnale
- Alcuni interessanti sono:
  - [https://coolors.co/](https://coolors.co/)
  - [https://color.adobe.com/it/create/color-wheel](https://color.adobe.com/it/create/color-wheel)
  - [http://colormind.io/](http://colormind.io/)
  - [https://palettegenerator.com/](https://palettegenerator.com/)
  - [https://www.designbombs.com/best-online-color-palette-generators/](https://www.designbombs.com/best-online-color-palette-generators/)

---

# Esercizio css_13

Colori

1. Creare un nuovo file e nominarlo *|cognome|_esercizio_css_13.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_13.css*
3. Creare una scacchiera 4 righe x 3 colonne
4. Con l'aiuto di un tool di palette generation:
   1. colorare lo sfondo di 2 celle specificando il nome del colore
   2. colorare lo sfondo di 2 celle specificando il codice HEX del colore
   3. colorare lo sfondo di 2 celle usando la funzione rgb
   4. colorare lo sfondo di 2 celle usando la funzione rgba ed impostare la trasparenza 
   5. colorare lo sfondo di 2 celle usando la funzione hls
   6. colorare lo sfondo di 2 celle usando la funzione hlsa ed impostare la trasparenza
5. Fornire il link github al file con nome |cognome|_esercizio_css_13.html
6. Fornire il link github al file con nome |cognome|_esercizio_css_13.css


---
layout: section
---
<h1 class="sezione">Larghezza e Altezza degli elementi Web</h1>


---

# CSS

Larghezza ed Altezza

- Due proprietà molto importanti sono
  - ***width***: definisce la larghezza di un elemento HTML all'interno della pagina
  - ***height***: definisce l'altezza di un elemento HTML all'interno della pagina
- Queste misure possono essere espresse in due modi:
  1. ***valore aasoluto*** : specificando il valore in pixel (px)
  2. ***valore relativo*** : specificando un valore percentuale (%) rispetto all'elemento padre 
- Per default *width* e *height* sono impostate ad `auto` e pertanto il browser calcola le dimensioni minime per visualizzare l'elemento.


---

# CSS

Larghezza ed Altezza

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

```html
<div class="parent"></div>

<div class="parent">
  <div id="child1">
    <div id="child2"></div>
  </div>
</div>

```
</div>
<div>

```css
  .parent {
    background-color: red;
    border: 1px solid;
    width: 300px;
    height: 100px;
  }

  #child1 {
    background-color: green;
    border: 1px solid;
    width: 50%;
    height: 50%;
  }

  #child2 {
    background-color: yellow;
    border: 1px solid;
    width: 50%;
    height: 50%;
  }
```
</div>
<div>

<div class="parent"></div><br /><br /><br /><br />

<div class="parent">
  <div id="child1">
    <div id="child2"></div>
  </div>
</div>

</div>
</div>

<style>
  .parent {
    background-color: red;
    border: 1px solid;
    width: 300px;
    height: 100px;
  }
  #child1 {
    background-color: green;
    border: 1px solid;
    width: 50%;
    height: 50%;
  }
  #child2 {
    background-color: yellow;
    border: 1px solid;
    width: 50%;
    height: 50%;
  }
</style>

---

# Esercizio css_14

Colori

1. Creare un nuovo file e nominarlo *|cognome|_esercizio_css_14.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_14.css*
3. Creare un rettangolo con sfondo rosso con larghezza 400px ed altezza 200px
4. Creare quattro rettangoli con sfondo viola con larghezza rispettivamente pari a 1/4, 2/4, 3/4 e 4/4 della larghezza della pagine e altezza pari a 150 px
5. Creare quattro rettangoli con sfondo verde e trasparenza al 65% con larghezza rispettivamente pari a 1/8, 3/6, 5/8 e 2/9 della larghezza della pagine e altezza pari a 221 px
6.  Fornire il link github al file con nome |cognome|_esercizio_css_14.html
7.  Fornire il link github al file con nome |cognome|_esercizio_css_14.css

---
layout: section
---
<h1 class="sezione"><div style="color: rgb(178,28,128); background-image: linear-gradient(to right top, #9198a3, #7f91b9, #7588ce, #797bde, #8a69e7);">Lo sfondo degli elementi</div></h1>



---

# CSS

Background

- CSS definisce varie proprietà per definire il background di un elemento HTML:
  - ***background-color*** : speficica il colore dello sfondo
  - ***background-image*** : imposta un immagine come sfondo di un elemento
  - ***background-repeat*** :  definisce il verso di ripetizione dell'immagine di sfondo
  - ***background-attachment*** : specifica se l'immagine si sfondo rimarrà fissa o farà scroll
  - ***background-position*** : definisce la posizione dell'immagine di sfondo


---

# CSS

background-image

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

```html
<div class="bg1">
</div>






<p class="bg2">
  Questo è un 
  paragrafo con 
  del testo
</p>



<div id="bg3">
</div>
```
</div>
<div>

```css
  .bg1 {
    background-image:url("/media/css_05.png");
    color: white;
    width: 250px;
    height: 100px;
  }

  .bg2 {
    background-image:url("/media/css_06.jpg");
  }

  #bg3 {
    background-image:url("/media/css_07.jpg");
    color: white;
    width: 250px;
    height: 100px;
  }

```
</div>
<div>

<div class="bg1"></div><br /><br />
<p class="bg2">Questo è un paragrafo con del testo</p><br /><br />
<div id="bg3"></div>
</div>
</div>

<style>
  .bg1 {
    background-image: url("/media/css_05.png");
    color: white;
    width: 250px;
    height: 100px;
  }

  .bg2 {
    background-image: url("/media/css_06.jpg");
  }

  #bg3 {
    background-image: url("/media/css_07.jpg");
    color: white;
    width: 250px;
    height: 100px;
  }
</style>


---

# CSS

background-repeat

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

```html
<div class="bg1">
</div>


<div class="bg2">
</div>



<div class="bg3">
</div>




<div class="bg4">
</div>
```
</div>
<div>

```css
  .bg1, .bg2, .bg3, .bg4 {
    background-image: url("/media/css_08.jpg");
    width: 250px;
    height: 90px;
    border: 1px solid black;
  }

  .bg1 { background-repeat: repeat; }
  
  .bg2 { background-repeat: no-repeat; }
  
  .bg3 { background-repeat: repeat-x; }
  
  .bg4 { background-repeat: repeat-y; }
```
</div>
<div>

<div class="bg1"></div><br />
<div class="bg2"></div><br />
<div class="bg3"></div><br />
<div class="bg4"></div><br />
</div>
</div>

<style>
  .bg1, .bg2, .bg3, .bg4 {
    background-image: url("/media/css_08.jpg");
    width: 250px;
    height: 90px;
    border: 1px solid black;
  }

  .bg1 {
    background-repeat: repeat;
  }

  .bg2 {
    background-repeat: no-repeat;
  }

  .bg3 {
    background-repeat: repeat-x;
  }

  .bg4 {
    background-repeat: repeat-y;
  }
</style>


---

# Esercizio css_15

background-repeat

1. Creare ed editare i file *|cognome|_esercizio_css_15.html* e *|cognome|_esercizio_css_15.css*.
2. Creare una pagina contenente: 
   1. 2xDIV con un immagine di background con path relativo e con dimesioni assolute
   2. 2xDIV con un immagine di background con path assoluto e con dimesioni relative
   3. 2xDIV con un immagine di background che usi la proprietà del background repeat
   4. 2xDIV con un immagine di background che usi la proprietà del background no-repeat
   5. 2xDIV con un immagine di background che usi la proprietà del background repeat-x
   6. 2xDIV con un immagine di background che usi la proprietà del background repeat-y
3.  Fornire il link github al file con nome |cognome|_esercizio_css_15.html
4.  Fornire il link github al file con nome |cognome|_esercizio_css_15.css


---
layout: section
---
<h1 class="sezione">Attorno al contenuto: Box Model</h1>


---

# CSS

Box model

- Ogni elemento HTML può essere considerato come una "scatola" `box`, che è composta da vari elementi che complessivamente prendono il nome di `box model`.
- Il *box model* è composto da:
<center>
<img src="/media/css_09.jpg" width="650" />
</center>

  - ***content*** : il contenuto della scatola, dove testo e immagini sono visualizzate.
  - ***padding*** : area **trasparente** attorno al contenuto e prima del margine.
  - ***border*** : bordo **(in)visibile** attorno al padding.
  - ***margin*** : area **trasparente** attorno al bordo.

---

# CSS

Box model

- Conoscere le proprietà del *box model* è molto importante durante il design ed il layout di una pagina web.

<div class="grid grid-flow-col auto-cols-max gap-8">

<div> <!-- col 1 -->
<h3>border</h3>
<div class="parent">
<pre>
.parent1 {
  width: 200px;
  height: 100px;
  border: 1px dashed;
}
</pre>
</div>
<div class="parent">
  <div id="child1">
    <pre>
#child1 {
  width: 80%;
  height: 80%;
  border: 1px solid;
}
    </pre>
  </div>
</div>
<div class="parent"></div>
</div>

<v-click>
<div><!-- col 2 -->
<h3>child padding</h3>
<div class="parent">
<pre>
.parent2 {
  width: 200px;
  height: 100px;
  border: 1px dashed;
}
</pre>
</div>
<div class="parent">
<div id="child2">
    <pre>
#child2 {
  width: 80%;
  height: 80%;
  border: 1px solid;
  padding: 10px;
}
    </pre>
  </div>
</div>
<div class="parent"></div>
</div>
</v-click>

<v-click>
<div><!-- col 3 -->
<h3>father padding</h3>
<div class="parent3">
<pre>
.parent3 {
  width: 200px;
  height: 100px;
  border: 1px dashed;
  padding: 10px;
}
</pre>
</div>
<div class="parent3">
<div id="child3">
    <pre>
#child3 {
  width: 80%;
  height: 80%;
  border: 1px solid;
  padding: 10px;
}
    </pre>
  </div>
</div>
<div class="parent3"></div>
</div>
</v-click>

<v-click>
<div><!-- col 4 -->
<h3>margin</h3>
<div class="parent4">
<pre>
.parent4 {
  width: 200px;
  height: 100px;
  border: 1px dashed;
  padding: 10px;
  margin: 10px;
}
</pre>
</div>
<div class="parent4">
<div id="child3">
    <pre>
#child4 {
  width: 80%;
  height: 80%;
  border: 1px solid;
  padding: 10px;
}
    </pre>
  </div>
</div>
<div class="parent4"></div>
</div>
</v-click>
</div>

<style>
  .parent {
    font-size: 10px;
    width: 200px;
    height: 100px;
    border: 1px dashed;
  }

  .parent3 {
    font-size: 10px;
    width: 200px;
    height: 100px;
    border: 1px dashed;
    padding: 10px;
  }

  .parent4 {
    font-size: 10px;
    width: 200px;
    height: 100px;
    border: 1px dashed;
    padding: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
  }
  
  #child1 {
    font-size: 8px;
    width: 80%;
    height: 80%;
    border: 1px solid;
  }

   #child2 {
    font-size: 8px;
    width: 80%;
    height: 80%;
    border: 1px solid;
    padding: 10px;
  }

  #child3 {
    font-size: 8px;
    width: 80%;
    height: 80%;
    border: 1px solid;
    padding: 10px;
  }
  

</style>


---

# CSS

Box model - sizing

- Il box model ci permette di definire bordi attorno agli elementi e di calcolare le dimensioni di un elemento e lo spazio tra elementi.
- E' importante considerare che quando si specifica una proprietà *width* e/o *height*, si sta definendo la larghezza e/o altezza ***SOLO*** della componente *content* del box model.
- Pertanto per calcolare la dimensione complessiva dell'elemento HTML sarà necessario anche tenere in considerazione ***padding***, ***border*** e ***margin***.  


---

# CSS

Box model - sizing

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>
<h3>Calcolo dimensione elemento HTML</h3>
<center>
<div id="div1">Immagine larga 150px</div>
<img id="tux1" src="/media/css_10.jpg"  alt="tux">
<div id="div2">
<pre>
#div {
  width: 150px;
  padding: 10px;
  border: 5px solid;
  margin: 0;
}
</pre>
</div>
<div id="div3">
<pre>
total_width = width + 2*padding + 2*border + 2*margin

total_width =  150 + 20 + 10 + 0 = 180px

</pre>
</div>
</center>
</div>

<v-click>
<div>
<h3>&nbsp;</h3>
<center>
<div id="div1">Immagine larga 150px</div>
<img id="tux1" src="/media/css_10.jpg" alt="tux">
<div id="div4">
<pre>
#div {
  width: 120px;
  padding: 10px;
  border: 5px solid;
  margin: 0;
}
</pre>
</div>
<div id="div3">
<pre>
total_width = width + 2*padding + 2*border + 2*margin

total_width = 120 + 20 + 10 + 0 = 150px

</pre>
</div>
</center>
</div>
</v-click>
</div>

<style>
  #tux1 {  
    border:1px solid;
    width: 150px;
  }
  #div1 {
  margin-top:20px;
  font-size: 14px;
}
#div2 {
  text-align: left;
  box-sizing: content-box;
  font-size: 10px;
  width: 150px;
  padding: 10px;
  border: 5px solid;
  margin: 0;
}
#div3 {
  text-align: left;
  font-size:14px;
  margin-top: 10px;
  border:0px solid gray;
}
#div4 {
  text-align: left;
  box-sizing: content-box;
  font-size: 10px;
  width: 120px;
  padding: 10px;
  border: 5px solid;
  margin: 0;
}
</style>

---

# Esercizio css_16

Box model

1. Creare ed editare i file *|cognome|_esercizio_css_16.html* e *|cognome|_esercizio_css_16.css*.
2. Creare una foto gallery statica e centrata nella pagina, così formata:
   1. 1 riga per 4 colonne
   2. ogni cella deve contenere al centro un immagine di dimensione width pari a 250px
   3. ogni immagine deve avere una didascalia nel bordo inferiore con bordo rosso di spessore 5px
   4. nella didascalia deve esserci un breve titolo dell'immagine con padding pari a 8px
3.  Fornire il link github al file con nome |cognome|_esercizio_css_16.html
4.  Fornire il link github al file con nome |cognome|_esercizio_css_16.css


---

# CSS

Box model - sizing

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

- In CSS è possibile specificare il padding, border e margin per ognuno dei 4 lati:
  1. ***top***: lato superiore (***border-top*** - ***padding-top*** - ***margin-top***)
  2. ***bottom***: lato inferiore (***border-bottom*** - ***padding-bottom*** - ***margin-bottom***)
  3. ***left***: lato sinistro (***border-left*** - ***padding-left*** - ***margin-left***)
  4. ***right***: lato destro (***border-right*** - ***padding-right*** - ***margin-right***)
   
</div>

<div>
<div id="div1">
</div>
</div>
</div>

<br />
<center>
<img src="/media/css_11.jpg" width="700" />
</center>

<style>
  #div1 {
    width: 200px;
    height: 100px;
    border-top:3px solid red;
    border-bottom:5px dotted blue;
    border-left:8px solid green;
    border-right:3px dashed black;
  }
</style>

---

# CSS

Box model - sizing

- Generalizziamo ora la formula per calcolare le dimensioni effettive di un elemento HTML

### total width

<br />

```html
Total width = width+left padding+right padding+left border+right border+left margin+right margin
```
<br /><br />

### total height

<br />

```html
Total height = height + top padding+bottom padding+top border+bottom border+top margin+bottom margin
```

---

# Esercizio css_17

CSS box model

<!-- risultato esercizio: 100,250,353 -->

1. Data la seguente pagina html: [esercizio_css_17.html](/TPSI/support/esercizio_css_17.html) e relativo css:  [esercizio_css_17.css](/TPSI/support/esercizio_css_17.css)
2. Editare il file e determinare il valore corretto per la proprietà **width** della regola CSS *#div1*,*#div2* e *#div3* in modo che:
   1. il componente **div1** abbia dimensione complessiva pari a **200px**
   2. il componente **div2** abbia dimensione complessiva pari a **300px**
   3. il componente **div3** abbia dimensione complessiva pari a **408px**
3. Fornire il link github al file con nome |cognome|_esercizio_css_17.html
4. Fornire il link github al file con nome |cognome|_esercizio_css_17.css



---
layout: section
---
<h1 class="sezione">I bordi di un elemento</h1>

---

# CSS

Borders

- La proprietà CSS `border-style` permette di specificare lo stiledel bordo di un elemento.

### border style

<center>
<img src="/media/css_12.jpg" width="550" />
</center>


---

# CSS

Borders

- La proprietà CSS `border-width` permette di specificare lo spessore di un elemento.

### border width

<center>
<img src="/media/css_13.jpg" width="300" />
</center>


---

# CSS

Borders

- La proprietà CSS `border-color` permette di specificare il colore di un elemento.

### border color

<center>
<img src="/media/css_14.jpg" width="300" />
</center>


---

# CSS

Borders

- La proprietà CSS `border-radius` permette di specificare la rotondità di un bordo di un elemento.

### border radius

<center>
<img src="/media/css_15.jpg" width="300" />
</center>


---

# CSS

Borders

### border shorthand

- CSS ci permette di scrivere le dichiarazioni CSS in modo più compatto, tramite la forma nominata `shorthand`
- Le 3 proprietà viste prime ***border-style***, ***border-width***, ***border-color*** possono essere scritte in modo compatto in questo modo

`Dichiarazione CSS - border: <width> <style> <color>;`

<center>
<img src="/media/css_16.jpg" width="290" />
</center>

---

# Esercizio css_18

CSS borders

1. Editare il file *|cognome|_esercizio_html_07.html* e salvarlo come *|cognome|_esercizio_css_18.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_18.css*
3. Dichiarare lo stile della pagina in modo che tutti i titoli di primo livello abbiano un bordo inferiore solido, spesso 5px e di colore blue ed un bordo sinistro spesso 7px di colore nero 
4. Dichiarare lo stile della pagina in modo che tutti i titoli di secondo livello abbiano un bordo superiore trattegiato, spesso 2px di colore verde
5. Dichiarare lo stile della pagina in modo che tutti i paragrafi abbiano un bordo un bordo inferiore tratteggiato spesso 3px di colore grigio e i bordi laterali di color verde 
6. Fornire il link github al file con nome |cognome|_esercizio_css_18.html
7.  Fornire il link github al file con nome |cognome|_esercizio_css_18.css



---
layout: section
---
<h1 class="sezione">Formattazione del Testo</h1>


---

# CSS

Text Formatting

- CSS mette a disposizione delle proprietà per definire la formattazione del testo:
  - ***color*** : specifica il colore del testo
  - ***text-align*** : specifica l'allineamento e la giustificazione del testo all'interno di un contenitore
  - ***text-decoration*** : permette di decorare il testo in vari modi (sottolineato, ...)
  - ***text-transform*** : permette di applicare delle trasformazioni al testo (uppercase, lowercase, ...)
  - ***line-height*** : permette di specificare lo spazio tra due linee di testo
  - ***text-shadow*** : permette di aggiungere un'ombra ad un testo 


---

# CSS

color

`{ color: red; }`
<p id="id1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

`{ color: #3feb00; }`
<p id="id2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

`{ color: rgba(45, 0, 224, 1); }`
<p id="id3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

`{ color: hsla(10, 100%, 44%, 1); }`
<p id="id4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>


<style>
#id1 { color: red; border:1px solid;}
#id2 { color: #3feb00; border:1px solid;}
#id3 { color: rgba(45, 0, 224, 1); border:1px solid;}
#id4 { color: hsla(10, 100%, 44%, 1); border:1px solid;}
</style>

---

# CSS

text-align

`{ text-align: left; }`
<p id="id1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

`{ text-align: center; }`
<p id="id2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

`{ text-align: right; }`
<p id="id3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

`{ text-align: justify; }`
<p id="id4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>


<style>
#id1 { text-align: left; border:1px solid;}
#id2 { text-align: center; border:1px solid;}
#id3 { text-align: right; border:1px solid;}
#id4 { text-align: justify; border:1px solid;}
</style>


---

# CSS

text-decoration

`{ text-decoration: none; }`
<p id="id1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

`{  text-decoration: overline; }`
<p id="id2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

`{ text-decoration: line-through; }`
<p id="id3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

`{ text-decoration: underline; }`
<p id="id4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>


<style>
#id1 { text-decoration: none; border:1px solid;}
#id2 {  text-decoration: overline; border:1px solid;}
#id3 { text-decoration: line-through;border:1px solid;}
#id4 { text-decoration: underline; border:1px solid;}
</style>


---

# CSS

text-trasnform

`{ text-transform: uppercase; }`
<p id="id1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

`{  text-transform: lowercase; }`
<p id="id2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

`{ text-transform: capitalize; }`
<p id="id3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>


<style>
#id1 { text-transform: uppercase; border:1px solid;}
#id2 {  text-transform: lowercase; border:1px solid;}
#id3 { text-transform: capitalize;;border:1px solid;}
</style>



---

# CSS

line-height

`{ line-height: 0.8; }`
<p id="id1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

`{  line-height: 1.6; }`
<p id="id2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

`{ line-height: 2.4; }`
<p id="id3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>


<style>
#id1 { line-height: 0.8; border:1px solid;}
#id2 {  line-height: 1.6; border:1px solid;}
#id3 { line-height: 2.4; border:1px solid;}
</style>


---

# CSS

text-shadow

`{   text-shadow: 2px 2px; }`
<p id="id1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

`{  text-shadow: 4px 0px red; }`
<p id="id2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

`{  text-shadow: 2px 2px 5px red; }`
<p id="id3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>


<style>
#id1 {   text-shadow: 2px 2px; border:1px solid;}
#id2 {  text-shadow: 4px 0px red; border:1px solid;}
#id3 {  text-shadow: 2px 2px 5px red;border:1px solid;}
</style>

---

# Esercizio css_19

Text formatting

1. Editare il file *|cognome|_esercizio_html_07.html* e salvarlo come *|cognome|_esercizio_css_19.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_19.css*
3. Dichiarare gli stili necessari affinchè:
   1. tutti i titoli di primo livello siano upper case e di colore blue
   2. tutti i titoli di secondo livello inizino con una lettera maiuscola e di colore rosso e siano sottolineati
   3. tutti i paragrafi siano giustificati tranne il 3zo paragrafo che deve avere un allineamento a destra
   4. una frase o citazione importante del testo, deve possedere un effetto di ombreggiatura a piacere
4. Fornire il link github al file con nome |cognome|_esercizio_css_19.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_19.css

---
layout: section
---
<h1 class="sezione">Font ed Icone</h1>


---

# CSS

Font

- In CSS è possibile cambiare il font del testo.
- Usare un font che è facile da leggere è importante.
- Ci sono 5 famiglie di font generici, ognuno con specifici font utilizzabili:
  1.  ***Serif***  : 
  2.  ***Sans-serif*** 
  3.  ***Monospace*** 
  4.  ***Cursive*** 
  5.  ***Fantasy***

- Per specificare il font si usa la proprietà `font-family:<font name>`

---

# CSS

Font

<center>
<img src="/media/css_17.jpg" width="500" />
</center>


---

# CSS

Font Fall Back

- Specificando un font con la proprietà `font-family` non si può avere la certezza che questo venga visualizzato correttamente.
- Questo perchè se il font non è installato o non è trovato, non può essere visulizzato
- Quindi il browser, in questo caso, visualizzerà un font di ***fall-back***
- Per questo motivo è sempre **UNA BUONA REGOLA** specificare più di un font, in modo che se il primo non è disponibile, il browser proverà a visualizzare il successivo e così via.

```html
{ font-family: "Times New Roman", Times, serif; }
```

- Questa descrizone CSS, specifica di usare il font "Times New Roman" se disponibile. In caso contrario indica al browser di provare a dutilizzare il font "Times" e come ultima spiaggia qualsiasi font disponibile della famiglia "serif".


---

# CSS

Font Web Safe

- I font **web safe** sono font che sono universalmente disponibili su tutti i sistemi operativi e browser più comuni
- Pertanto l'uso di questo font massimizza la probabilità che la pagina venga visualizzata come inizialmente pensata dall'autore
- Qui una lista di font **web-safe** :
  - ***Arial (sans-serif)*** :<span style="font-family:Arial;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
  - ***Verdana (sans-serif)*** :<span style="font-family:Verdana;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
  - ***Helvetica (sans-serif)*** :<span style="font-family:Helvetica;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
  - ***Tahoma (sans-serif)*** :<span style="font-family:Tahoma;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
  - ***Times New Roman (serif)*** :<span style="font-family:'Times New Roman';">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
  - ***Georgia (serif)*** :<span style="font-family:Georgia;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
  - ***Garamond (serif)*** :<span style="font-family:Garamond;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
  - ***Courier New (monospace)*** :<span style="font-family:'Courier New';font-size:13px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
 

---

# CSS

Font Style

- La proprietà `font-style: <style>` permette di variare alcune caratteristiche di visualizzazione del font

`{ font-style:normal; }`
<p style="font-style:normal;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

`{ font-style:italic; }`
<p style="font-style:italic;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

`{ font-style:oblique; }`
<p style="font-style:oblique;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>


---

# CSS

Font Weight

- La proprietà `font-weight: <weight>` permette di variare alcune caratteristiche di visualizzazione del font

`{ font-weight: normal; }`
<p style="font-weight: normal;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

`{ font-weight: bold;}`
<p style="font-weight: bold;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>


---

# CSS

Font Size

- La proprietà `font-size: <size>` permette di variare le dimensioni del font
- La dimensione può essere specificata in valore assoluto o relativo

### dimensione assoluta
`{ font-size: 30px; }`
<p style="font-size: 30px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

`{ font-size: 10px; }`
<p style="font-size: 10px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

- L'utente non può cambiare la dimensione del font tramite le impostazioni del browser


---

# CSS

Font Size

### valore relativo

- Imposta la dimensione del font relativamente 

`{ font-size: 1em; }`
<p style="font-size: 1em;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

`{ font-size: 2em; }`
<p style="font-size: 2em;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

`{ font-size: 0.5em; }`
<p style="font-size: 0.5em;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

- **1em** equivale alla dimensione del font attuale per la pagina (default 16px)
- L'utente può adattare la dimensione del font tramite le impostazioni del browser


---

# CSS

Google Font

- Google mette a disposizione gratuitamente oltre [1000 font](https://fonts.google.com/) 
- Per utilizzarli basta inserire un tag *link* nella sezione *head* della pagina HTML

```html
<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=<nome font>">
</head>

oppure nel caso di più font

<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=<font1>|<font2>|<fontN>">
</head>
```

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia|Audiowide">

`{ font-family: Sofia, sans-serif; }`
<p style="font-family: Sofia, sans-serif;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

`{ font-family: Audiowide, sans-serif; }`
<p style="font-family: Audiowide, sans-serif;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>


---

# CSS

Google Font


<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Modak|Hanalei|Barriecito|Margarine">

`{ font-family: 'Modak', cursive; }`
<p style="font-family: 'Modak', cursive;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
<br>

`{ font-family: 'Hanalei', cursive; }`
<p style="font-family: 'Hanalei', cursive;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
<br>

`{ font-family: 'Barriecito', cursive; }`
<p style="font-family: 'Barriecito', cursive;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
<br>

`{ font-family: 'Margarine', cursive; }`
<p style="font-family: 'Margarine', cursive;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>


---

# CSS

Google Icon

- Google mette a disposizione gratuita molte centinaia di [icone](https://fonts.google.com/icons) 
- Per utilizzarli basta inserire un tag *link* nella sezione *head* della pagina HTML

```html
<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>
```
<br>

- Per inserire un'icona basta usare il tag `<span>` in questo modo:

```html
<span class="material-icons"><nome dell'icona></span>
```
<br>

<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

`<span class="material-icons">favorite</span>`
<span class="material-icons" style="color:red;">&nbsp;&nbsp;&nbsp;favorite</span>

`<span class="material-icons">thumb_up</span>`
<span class="material-icons" style="color:blue;">&nbsp;&nbsp;&nbsp;thumb_up</span>

`<span class="material-icons">emoji_emotions</span>`
<span class="material-icons" style="color:yellow;">&nbsp;&nbsp;&nbsp;emoji_emotions</span>


---

# CSS

List

- CSS permette di definire lo stile anche per le liste tramite la proprietà `list-style-type:<type>`

- Per le liste *unordered* i possibili tipi sono:
  - ***circle***
  - ***square***

- Per le liste *ordered* i possibili tipi sono:
  - ***upper-roman***
  - ***lower-alpha***
  
---

# CSS

List

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

```html
<p>Unordered lists:</p>
<ul class="cerchio">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>


<p>Unordered lists quadrato:</p>
<ul class="quadrato">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>
```
</div>
<div>

```css
ul.cercho {
  list-style-type: circle;
}

ul.quadrato {
  list-style-type: square;
}
```
</div>
<div>

<p>Unordered lists cerchio:</p>
<ul class="cerchio">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>

<p>Unordered lists quadrato:</p>
<ul class="quadrato">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>

</div>
</div>

<style>
ul.cerchio {
  list-style-type: circle;
}
ul.quadrato {
  list-style-type: square;
}
</style>

---

# CSS

List

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

```html
<p>Ordered lists romano:</p>
<ol class="roman">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ol>

<p>Ordered lists alpha:</p>
<ol class="alpha">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ol>
```
</div>
<div>

```css
ol.roman {
  list-style-type: upper-roman;
}

ol.alpha {
  list-style-type: lower-alpha;
}
```
</div>
<div>

<p>Ordered lists romano:</p>
<ol class="roman">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ol>

<p>Ordered lists alpha:</p>
<ol class="alpha">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ol>

</div>
</div>

<style>
ol.roman {
  list-style-type: upper-roman;
}

ol.alpha {
  list-style-type: lower-alpha;
}
</style>

---

# CSS

List

- Possiamo anche usare un'icome come elemento di una lista
  
<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

```html

<p>Unordered lists con icona:</p>
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
  <li>Fanta</li>
  <li>Sprite</li>
</ul>
```
</div>
<div>

```css
ul {
  list-style-type: none;
}
  
li:before {
  content: 'done_outline';
  font-family: 'Material Icons';
  color: red;
  vertical-align: -10%;
  padding-right: 10px;
}
```
</div>
<div>

<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

<p>Unordered lists con icona:</p>
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
  <li>Fanta</li>
  <li>Sprite</li>
</ul>


</div>
</div>

<style>
ul{
    list-style-type: none;
}
  
li:before{
  content: 'done_outline';
  font-family: 'Material Icons';
  color: red;
  vertical-align: -10%;
  padding-right: 10px;
}
</style>

---

# Esercizio css_20

CSS text formatting

1. Editare il file *|cognome|_esercizio_html_07.html* e salvarlo come *|cognome|_esercizio_css_20.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_20.css*
3. Dichiarare gli stili necessari affinchè:
   1. i primi tre titoli di primo livelli abbiano 3 font differenti scelti tra quelli forniti da google (oltre 1000)
   2. nel testo compaiano, laddove appropriato, delle icone selezionate tra le migliaia messe a disposizione da google
   3. nel testo compaia una lista unordered con stile *circle*
   4. nel testo compaina una lista ordered con stile  con numeri romani
   5. nel testo compaina una lista unordered che abbiamo come bullet item un'icona fornita da google 
4.  Fornire il link github al file con nome |cognome|_esercizio_css_20.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_20.css

---
layout: section
---
<h1 class="sezione">Elementi nascosti e elementi fantasma</h1>


---

# CSS

Display e Visibility

- Ogni elemento HTMLha un valore di **display** predefito che determina il modo in cui l'elemto viene visualizzato.
- Pertanto una proprietà CSS molto importante è `dislay: <display value>`
- Questa proprietà, appunto, modifica il valore di display di un tag HTML
- Tramite questa proprietà si può decidere se l'elemento viene visualizzato o meno e come.
- I valori che `display` può assumere sono
  - ***inline***: elemento posizionato sulla linea corrente `<span>`
  - ***block***: elemento posizionato su una nuova linea  `<div>`
  - ***none***: l'elemento HTML <u>non è visualizzato e rimosso dal DOM</u>, pertanto lo spazio **NON** è occupato
- La proprietà `visibility: hidden | visible` in modo analogo a `display: none` rende l'elemento invisibile, <u>senza rimuoverlo dal DOM</u>, perciò  lo spazio **RIMANE** occupato.
- Normalmente queste proprietà sono manipolate da JavaScript fornendo così uno strumento utile alla creazione di applicazioni dinamiche.

---

# CSS

Display e Visibility

<div class="grid grid-flow-col auto-cols-max gap-8">

<div> <!-- col1 -->

```html
<div class="blocchi">Block1</div>
<div class="blocchi">Block2</div>
<div class="blocchi">Block3</div>
<div class="blocchi rimosso">Block4</div>
<div class="linea">Line1</div>
<div class="linea">Line2</div>
<div class="linea">Line3</div>
<div class="blocchi invisibile">Block5</div>
<div class="blocchi">Block6</div>
```
</div>

<div> <!-- col2 -->

```css
  .blocchi {
    border:1px solid black; 
    width:200px;
    height:50px;
    margin-bottom: 10px;
  }

  .linea {
    display: inline;
    border:1px solid black; 
    width:200px; /*ignorato*/
    height:50px;/*ignorato*/
  }

  .rimosso {display: none;}
  
  .invisibile {
    visibility: hidden;
  }
```
</div>

<div> <!-- col3 -->
<div class="blocchi">Block1</div>
<div class="blocchi">Block2</div>
<div class="blocchi">Block3</div>
<div class="blocchi rimosso">Block4</div>
<div class="linea">Line1</div>
<div class="linea">Line2</div>
<div class="linea">Line3</div>
<div class="blocchi invisibile">Block5</div>
<div class="blocchi">Block6</div>

</div>

</div>

<style>
  .blocchi {
    border:1px solid black; 
    width:200px;
    height:50px;
    margin-bottom: 10px;
  }

  .linea {
    display: inline;
    border:1px solid black; 
    width:200px; /*ignorato*/
    height:50px;/*ignorato*/
  }

  .rimosso {display: none;}

  .invisibile {visibility: hidden;}
</style>

---

# CSS

Display e Visibility

- Il tag `<li>` ha un valore di display di default pari a *block*.
- Per esempio modificare il valore di display a *inline* è molto utile per generare delle barre di navigazione orizzontale.

<div class="grid grid-flow-col auto-cols-max gap-8">

<div> <!-- col1 -->

```html
<h3>Lista:</h3>
<ul>
  <li>Menu 1</li>
  <li>Menu 2</li>
  <li>Menu 3</li>
</ul>

<h3>Barra Menu:</h3>
<ul class="menu">
  <li>Menu 1</li>
  <li>Menu 2</li>
  <li>Menu 3</li>
</ul>
```
</div>

<div> <!-- col2 -->

```css
  .menu li {
    display: inline;
    border: 1px solid;
    margin: 0;
    padding: 5px;
  }
```
</div>

<div> <!-- col3 -->
<h3>Lista:</h3>
<ul>
  <li>Menu 1</li>
  <li>Menu 2</li>
  <li>Menu 3</li>
</ul>

<h3>Barra Menu:</h3>
<ul class="menu">
  <li>Menu 1</li>
  <li>Menu 2</li>
  <li>Menu 3</li>
</ul>

</div>

</div>

<style>
  .menu li {
    display: inline;
    border: 1px solid;
    margin: 0;
    padding: 5px;
  }
</style>

---
layout: section
---
<h1 class="sezione">Elementi galleggianti</h1>


---

# CSS

Layout - Float

- La proprietà CSS `float: <float value>` è utilizzata per posizionare e formattare il contenuto di una pagina web (es: posizionare un immagine a sinistra del testo).
- I possibili valori sono:
  - ***left***: l'elemento si posiziona più possibile a sinistra rispetto al suo elemento padre (contenitore)
  - ***right***: l'elemento si posiziona più possibile a sinistra rispetto al suo contenitore
  - ***inherit***: l'elemento eredita il valore per float dal suo contenitore
  - ***none***: **(default)** l'elemento non si sposta e viene posizionato in linea con il testo 
- In pratica immaginiamo che gli elementi HTML galleggiano ("float") e si possono spostare a destra, sinistra o rimanere fermi.


---

# CSS

Layout - Float

### float none

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html

<p>
  <img id="imgnone" src="/media/css_18.jpg" />
  L’oratorio e la parrocchia 
  San Giovanni Bosco, espressioni 
  ......
  nella Diocesi e nella città di Torino.
</p>
```
</div>

<div> <!-- col2 -->

```css

 #imgnone { 
    width: 100px;
    float: none;
    margin: 10px;
  }  
```
</div>

<div> <!-- col3 -->

<p style="width: 320px;"> 
  <img id="imgnone" src="/media/css_18.jpg" />
  L’oratorio e la parrocchia 
  San Giovanni Bosco, espressioni 
  ......
  nella Diocesi e nella città di Torino.
</p>

</div>

</div>

<style>
  #imgnone { 
    width: 100px;
    float: none;
    margin: 10px;
  }  
</style>


---

# CSS

Layout - Float

### float left

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html

<p>
  <img id="imgnone" src="/media/css_18.jpg" />
  L’oratorio e la parrocchia 
  San Giovanni Bosco, espressioni 
  ......
  nella Diocesi e nella città di Torino.
</p>
```
</div>

<div> <!-- col2 -->

```css

 #imgnone { 
    width: 100px;
    float: left;
    margin: 10px;
  }  
```
</div>

<div> <!-- col3 -->

<p style="width: 320px;"> 
  <img id="imgnone" src="/media/css_18.jpg" />
  L’oratorio e la parrocchia 
  San Giovanni Bosco, espressioni 
  ......
  nella Diocesi e nella città di Torino.
</p>

</div>

</div>

<style>
  #imgnone { 
    width: 100px;
    float: left;
    margin: 10px;
  }  
</style>

---

# CSS

Layout - Float

### float right

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html

<p>
  <img id="imgnone" src="/media/css_18.jpg" />
  L’oratorio e la parrocchia 
  San Giovanni Bosco, espressioni 
  ......
  nella Diocesi e nella città di Torino.
</p>
```
</div>

<div> <!-- col2 -->

```css

 #imgnone { 
    width: 100px;
    float: right;
    margin: 10px;
  }  
```
</div>

<div> <!-- col3 -->

<p style="width: 320px;"> 
  <img id="imgnone" src="/media/css_18.jpg" />
  L’oratorio e la parrocchia 
  San Giovanni Bosco, espressioni 
  ......
  nella Diocesi e nella città di Torino.
</p>

</div>

</div>

<style>
  #imgnone { 
    width: 100px;
    float: right;
    margin: 10px;
  }  
</style>


---

# CSS

Layout - Float

### div float

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html

<div class="affonda">no float</div>
<div class="affonda">no float</div>
<div class="affonda">no float</div>

<div class="galleggia">float left</div>
<div class="galleggia">float left</div>
<div class="galleggia">float left</div>

```
</div>

<div> <!-- col2 -->

```css
  .affonda {
    float: none;
    border:1px solid;
    width: 100px;
    height:30px;
    background-color: red;
    padding: 5px;
  }

  .galleggia {
    float: left;
    border:1px solid;
    width: 100px;
    height:30px;
    background-color: green;
    padding: 5px;
  }
```
</div>

<div> <!-- col3 -->

<div class="affonda">no float</div>
<div class="affonda">no float</div>
<div class="affonda">no float</div>
<div class="galleggia">float left</div>
<div class="galleggia">float left</div>
<div class="galleggia">float left</div>

</div>

</div>

<style>
  .affonda {
    float: none;
    border:1px solid;
    width: 100px;
    height:30px;
    background-color: red;
    padding: 5px;
  }

  .galleggia {
    float: left;
    border:1px solid;
    width: 100px;
    height:30px;
    background-color: green;
    padding: 5px;
  }
</style>

---

# Esercizio css_21

Barra Navigazione orizzontale

1. Creare un file e salvarlo come *|cognome|_esercizio_css_21.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_21.css*
3. Creare in HTML e CSS una barra di navigazione orizzontale con le seguenti caratteristiche:
   1. Deve includere le seguenti voci: `Home, ATS, Servizi, Contatti, About`
   2. Si deve usare solo una lista
   3. La barra di navigazione deve avere un colore di sfondo
   4. Al passaggio con il mouse su ogni singola voce, il colore di sfondo deve cambiare in modo congruo
4.  Fornire il link github al file con nome |cognome|_esercizio_css_21.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_21.css

<br />
<center>
<img src="/media/css_19.jpg" width="500">
</center>

---

# Esercizio css_22

Barra Navigazione orizzontale

1. Creare un file e salvarlo come *|cognome|_esercizio_css_22.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_22.css*
3. Creare in HTML e CSS una barra di navigazione orizzontale con le seguenti caratteristiche:
   1. Deve includere le seguenti voci: `Home, ATS, Servizi, Contatti, About`
   2. NON si può usare una lista
   3. La barra di navigazione deve avere un colore di sfondo
   4. Al passaggio con il mouse su ogni singola voce, il colore di sfondo deve cambiare in modo congruo
4.  Fornire il link github al file con nome |cognome|_esercizio_css_22.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_22.css

<br />
<center>
<img src="/media/css_19.jpg" width="500">
</center>

---

# Esercizio css_22a

Scacchiera

1. Creare un file e salvarlo come *|cognome|_esercizio_css_22a.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_22a.css*
3. Creare in HTML e CSS (NON E' POSSIBILE UTILIZZARE UNA TABELLA)
4. Creare una scacchiera 8x8 in cui 
   1. in ogni cella viene scritta la coordinata in forma righa,colonna (partendo da zero)
   2. colorare le celle esattamente come in una scacchiera per scacchi
3. Fornire il link github al file con nome |cognome|_esercizio_css_22a.html
4. Fornire il link github al file con nome |cognome|_esercizio_css_22a.css

---

# Esercizio css_22b

Float

1. Creare un file e salvarlo come *|cognome|_esercizio_css_22b.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_22b.css*
3. Creare in HTML e CSS (NON E' POSSIBILE UTILIZZARE UNA TABELLA) il layout sotto raffigurato
4. Fornire il link github al file con nome |cognome|_esercizio_css_22b.html
5. Fornire il link github al file con nome |cognome|_esercizio_css_22b.css

<br>
<center>
<img src="/media/css_37.png" width="500">
</center>

---

# Esercizio css_22c

Float

1. Creare un file e salvarlo come *|cognome|_esercizio_css_22c.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_22c.css*
3. Creare in HTML e CSS (NON E' POSSIBILE UTILIZZARE UNA TABELLA) il layout sotto raffigurato
4. Fornire il link github al file con nome |cognome|_esercizio_css_22c.html
5. Fornire il link github al file con nome |cognome|_esercizio_css_22c.css

<br>
<center>
<img src="/media/css_38.png" width="500">
</center>

---

# Esercizio css_22d

Float

1. Creare un file e salvarlo come *|cognome|_esercizio_css_22d.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_22d.css*
3. Creare in HTML e CSS (NON E' POSSIBILE UTILIZZARE UNA TABELLA) il layout sotto raffigurato
4. Fornire il link github al file con nome |cognome|_esercizio_css_22d.html
5. Fornire il link github al file con nome |cognome|_esercizio_css_22d.css

<br>
<center>
<img src="/media/css_39.png" width="500">
</center>

---
layout: section
---
<h1 class="sezione">Elementi allineati</h1>

---

# CSS

Layout - Align

- Nello sviluppo di una pagina web risulta molto utile poter allineare i vari elementi
- Per esempio è utile allineare il testo orizzontalmente o verticalmente, centrarlo, etc...
- Risulta spesso necessario allineare una o più immagini
- In modo analogo è utile allineare anche altri tipi di tag per poter ottenere il layout desiderato ed essere sicuri che appaia allo stesso modo su ogni browser
- Per far ciò CSS non mette a disposizione un'unica ma caso per caso è necessario usare tecniche specifiche.



---

# CSS

Layout - Align del testo

<div class="grid grid-flow-col auto-cols-max gap-8">

<div> <!-- col1 -->

```html

<div class="centerhv">
  <p>Testo allineato 
    orizzontalmente e 
    verticalmente
  </p>
</div>

```
</div>

<div> <!-- col2 -->

```css

.centerhv {
  border: 3px solid green;
  width: 400px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
```
</div>

<div> <!-- col3 -->

<div class="centerhv">
  <p>Testo allineato orizzontalmente e verticalmente</p>
</div>

</div>

</div>

<style>

.centerhv {
  border: 3px solid green;
  width: 400px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  padding: 20px 0;
}


</style>



---

# CSS

Layout - Align di un div

<div class="grid grid-flow-col auto-cols-max gap-8">

<div> <!-- col1 -->

```html

<div class="parent">
  <div class="child">
    <p>Testo allineato 
      orizzontalmente e 
      verticalmente
    </p>
  </div>
</div>

```
</div>

<div> <!-- col2 -->

```css

.parent {
  border: 3px solid green;
  width: 400px;
  height: 300px;
   text-align: center;
}

.child {
  border: 3px solid blue;
  width: 50%;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px; 
}
```
</div>

<div> <!-- col3 -->

<div class="parent">
  <div class="child">
    <p>Testo allineato orizzontalmente e verticalmente</p>
  </div>
</div>

</div>

</div>

<style>

.parent {
  border: 3px solid green;
  width: 400px;
  height: 300px;
   text-align: center;
}

.child {
  border: 3px solid blue;
  width: 50%;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px; 
}


</style>


---

# CSS

Layout - Align di un img

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html

<h3>Immagine centrata</h3><br />
<div id="parent">
  <img id="img1" src="/media/css_18.jpg" />
</div>


```
</div>

<div> <!-- col2 -->

```css

#parent {
  border: 3px solid green;
  width: 250px;
  padding: 10px;
}
#img1 {
  width: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
```
</div>

<div> <!-- col3 -->

<h3>Immagine centrata</h3><br />
<div id="parent">
  <img id="img1" src="/media/css_18.jpg" />
</div>

</div>

</div>

<style>

#parent {
  border: 3px solid green;
  width: 250px;
  padding: 10px;
}
#img1 {
  width: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>

---

# Esercizio css_23

Foto Gallery

1. Creare un file e salvarlo come *|cognome|_esercizio_css_23.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_23.css*
3. Creare in HTML (solo markup) e CSS(tutti gli stili) una foto gallery con le seguenti caratteristiche
   1. centrata rispetto alla pagina con bordo di 20px blu chiaro
   2. contiene 5 colonne
   3. ogni colonna contiene un immagine con larghezza pari a 150px
   4. ogni colonna contiene al fondo una didascalia centrata e con carattere in bold
   5. ogni colonna ha un bordo di 1px
   6. le colonne sono distanziate di 5px
   7. per uniformità usare la seguente immagine [TUX](https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1717px-Tux.svg.png)
4.  Fornire il link github al file con nome |cognome|_esercizio_css_23.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_23.css

---

# Esercizio css_23

Foto Gallery

<center>
<img src="/media/css_23.png" width="500">
</center>

---

# Esercizio css_23a

Foto Gallery

1. Creare un file e salvarlo come *|cognome|_esercizio_css_23a.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_23a.css*
3. Creare in HTML (solo markup) e CSS(tutti gli stili) una foto gallery con le seguenti caratteristiche
   1. centrata rispetto alla pagina con bordo di 20px blu chiaro
   2. contiene 5 colonne
   3. ogni colonna contiene un immagine con larghezza pari a 150px
   4. ogni colonna contiene al fondo una didascalia centrata e con carattere in bold
   5. ogni colonna ha un bordo di 1px
   6. le colonne sono distanziate di 5px
   7. per uniformità usare la seguente immagine [TUX](https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1717px-Tux.svg.png)
   8. non si può utilizzare una tabella ma bisogna usare i DIV
4.  Fornire il link github al file con nome |cognome|_esercizio_css_23a.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_23a.css


---
layout: section
---
<h1 class="sezione">La posizione degli elementi</h1>


---

# CSS

Layout - Position

- CSS permette di specificare la posizione di un elemento rispetto alla pagina o rispetto al suo contenitore tramite la proprietà `position: <value>`
- Ci sono 5 possibili valori per questa proprietà:
  1. ***static*** : *(default)* l'elemento non è posizionato in nessun modo speciale, ma nella posizione in cui appare nel markup 
  2. ***relative*** : l'elemento è posizionato relativamente alla sua posizione di default
  3. ***fixed*** :  l'elemento è fisso rispetto al viewport, quindi rimarrà fermo anche se la pagine farà uno scroll
  4. ***absolute*** : l'elemento è posizionato in maniera assoluta rispetto al suo contenitore o in assenza al body
  5. ***sticky*** : l'elemento è posizionato in funzione della posizione di scroll


---

# CSS

Layout - Position - Static e Relative

- Per posizionare un elemento in modo relativo si usano le proprietà `top - bottom - right - left`

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html

<div id="parent">
  <div id="child">
    <p>Elemento posizionato 
      in modo relativo</p>
  </div>
</div>


```
</div>

<div> <!-- col2 -->

```css

#parent {
  border: 3px solid green;
  width: 400px;
  height: 150px;
}

#child {
  border: 3px solid blue;
  width: 200px;
  position: relative;
  left: 50px;
  top: 10px;
}
```
</div>

<div> <!-- col3 -->


<div id="parent">
  <div id="child">
    <p>Elemento posizionato in modo relativo</p>
  </div>
</div>

</div>

</div>

<style>

#parent0 {
  border: 3px solid green;
  width: 400px;
  height: 150px;
}

#child0 {
  border: 3px solid blue;
  width: 200px;
}

#parent {
  border: 3px solid green;
  width: 400px;
  height: 150px;
}

#child {
  border: 3px solid blue;
  width: 200px;
  position: relative;
  left: 50px;
  top: 10px;
}

</style>


---

# CSS

Layout - Position - Fixed

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html

<div id="parent">
  <div id="child">
    <p>Elemento posizionato 
      in modo fixed</p>
  </div>
</div>
```
</div>

<div> <!-- col2 -->

```css
#parent {
  border: 3px solid green;
  width: 400px;
  height: 150px;
}

#child {
  border: 3px solid blue;
  width: 200px;
  position: fixed;
  bottom: 200px;
  right: 50px;
}
```
</div>

<div> <!-- col3 -->

<img src="/media/css_45.png" width=400>

</div>

</div>

---

# CSS

Layout - Position - Absolute

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html

<div id="parent">
  <div id="child">
    <p>Elemento posizionato 
      in modo absolute</p>
  </div>
</div>
```
</div>

<div> <!-- col2 -->

```css
#parent {
  border: 3px solid green;
  width: 400px;
  height: 150px;
  position: relative;
}

#child {
  border: 3px solid blue;
  width: 200px;
  position: absolute;
  bottom: 20px;
  right: 60px;
}
```
</div>

<div> <!-- col3 -->


<div id="parent">
  <div id="child">
    <p>Elemento posizionato in modo absolute</p>
  </div>
</div>

</div>

</div>

<style>


#parent {
  border: 3px solid green;
  width: 400px;
  height: 150px;
  position: relative;
}

#child {
  border: 3px solid blue;
  width: 200px;
  position: absolute;
  bottom: 20px;
  right: 60px;
}

</style>

---

# CSS

Layout - Position - Sticky

*Aprire la seguente pagina* [sticky](../support/position_sticky_css_slide.html)

```html
<div class="sticky">I am sticky e non mi muovo!</div>
<div class="scrolldiv">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, .... </p>
</div>
```

```css
div.sticky {
  position: sticky;
  top: 0;
  padding: 10px;
  background-color: #0ca00c;
  border: 2px solid #0a7c0d;
  color: white;
  font-size: 20px;
}
.scrolldiv {
    padding-bottom:2000px;
}
```

---

# Esercizio css_24

Position

1. Creare un file e salvarlo come *|cognome|_esercizio_css_24.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_24.css*
3. Creare in HTML e CSS il posizionamento di una stringa su di un immagine, in modo che la stringa sia posizionata nell'angolo in alto a sinistra
4.  Fornire il link github al file con nome |cognome|_esercizio_css_24.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_24.css

<br />
<center>
<img src="/media/css_20.jpg" width="500">
</center>

---

# Esercizio css_25

Position

1. Creare un file e salvarlo come *|cognome|_esercizio_css_25.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_25.css*
3. Creare in HTML e CSS quanto raffigurato sotto (L'immagine può essere diversa)
4.  Fornire il link github al file con nome |cognome|_esercizio_css_25.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_25.css

<br />
<center>
<img src="/media/css_40.png" width="200">
</center>

---
layout: section
---
<h1 class="sezione">Flexbox Layout</h1>


---

# Flexbox

Introduzione

- Flexbox rivoluziona il modo di strutturare i layout di applicazioni Web e Mobili
- Il modulo **Flexbox Layout (Flexible Box)** mira a fornire un modo più efficiente per disporre, allineare e distribuire lo spazio tra gli elementi in un contenitore, anche quando la loro dimensione è sconosciuta e/o dinamica ( da qui la parola “flex”).
- L'idea principale di Flexbox è quella di dare al contenitore la possibilità di modificare la larghezza, l'altezza e l'ordine dei suoi oggetti per riempire al meglio lo spazio disponibile 
- Obiettivo primario è quello di adattarsi a tutti i tipi di dispositivi di visualizzazione
- Un contenitore Flexbox espande gli elementi per riempire lo spazio libero disponibile o li restringe per evitare overflow
- Strumento utile per lo sviluppo di layout Flexbox è [flexyboxes](https://the-echoplex.net/flexyboxes/)


---

# Flexbox

Introduzione

- Flexbox è stato pensato per rendere semplice e immediata la gestione di box all'interno di un elemento contenitore
- Permette di risolvere problematiche come:
  -  la centratura degli elementi
  -  la loro disposizione sull'asse orizzontale o su quello verticale
  -  il dimensionamento relativo degli oggetti contenuti in un contenitore flessibile
  -  l'indipendenza della posizione degli elementi presenti sulla pagina
- Una descrizione dettagliata dei principali problemi che Flexbox risolve è presente al seguente indirizzo [solved-by-flexbox](https://philipwalton.github.io/solved-by-flexbox/)

---

# Flexbox

Definizioni

<img src="/media/css_25.png" width="500" style="margin:auto;">

Il sistema è fondato su due elementi costitutivi:
- un elemento contenitore (**flex container**): che contiene i box flessibili e viene creato usando il valore flex per la proprietà display  `display: flex`
- item del contenitore (**flex items**): sono gli elementi figli dell'elemento contenitore che assumono come loro caratteristica fondamentale quella della *flessibilità*
- su questi elementi **non** hanno effetto le proprietà float, clear e vertical-align

---

# Flexbox

Definizioni

- Per il flex container, si possono individuare 2 assi principali:
  - **main axis**: asse principale (orizzontale in caso di layout a colonne e verticale in caso di layout a righe)
  - **cross axis**: asse perpendicolare all'asse principale

<br>

<img src="/media/css_25.png" width="500" style="margin:auto;">

- In modo analogo esistono due dimensioni:
  - **main size**: dimensione del contenitore lungo l'asse principale
  - **cross size**: dimensione del contenitore lungo l'asse perpedicolare al principale


---

# Flexbox

Proprietà

- Le proprietà che compongono il modulo flexbox possono pertanto essere suddivise in due gruppi: 
    1. quelle che si applicano ai flex container
    2. quelle che si applicano ai flex items

<br><br>

<img src="/media/css_26.svg" width="300" style="position:relative; top: 1rem;left: 5rem;">

<img src="/media/css_27.svg" width="300" style="position:relative; top: -6.5rem; left: 30rem;">


---

# Flexbox

Proprietà flex containers

- `display: flex`:  è il valore della proprietà display con cui si rende un contenitore flessibile
- `flex-direction:` **row | row-reverse | column | column-reverse**   - definisce il verso di disposizione dei flex items sul main axis
- `flex-wrap:` **nowrap | wrap | wrap-reverse**  - indica la possibilità di disporre i flex item su più righe o colonne se non c'è abbastanza spazio nel container
- `flex-flow`: shorthand per le proprietà *flex-direction* e *flex-wrap*
- `justify-content:` **flex-start | flex-end | center | space-between | space-around | space-evenly**  - stabilisce la modalità di allineamento dei flex items sull'asse principale del contenitore
-  `align-items:` **stretch | flex-start | flex-end | center** - gestisce l'allineamento dei flex items lungo l'asse perpendicolare cross axis
- `align-content:` **stretch | flex-start | flex-end | center | space-between | space-around** - gestisce l'allineamento di una riga di flex items lungo l'asse perpendicolare; ha effetto solo su contenitori multi-riga
- `row-gap - column-gap`: permette di specificare lo spazio tra le righe e le colonne 

---

# Flexbox

Proprietà flex containers

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  background-color: #881D8D;
  border: 1px solid green;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  width: 200px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

</div>

</div>

<style>
.container {
  background-color: #881D8D;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 200px;
  padding: 10px;
  text-align:center;
}
</style>

---

# Flexbox

Proprietà flex containers

`display: flex`:  è il valore della proprietà display con cui si rende un contenitore flessibile


<br>

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  background-color: #881D8D;
  border: 1px solid green;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  width: 200px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

</div>

</div>

<style>
.container {
  display: flex;
  background-color: #881D8D;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 200px;
  padding: 10px;
  text-align:center;
}
</style>

---

# Flexbox

Proprietà flex containers

`flex-direction:` **row | row-reverse | column | column-reverse**   - definisce il verso di disposizione dei flex items sul main axis

<br>

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  flex-direction: row;
  background-color: #881D8D;
  border: 1px solid green;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  width: 200px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
<img src="/media/css_28.png" width="200" style="position:relative; top: 5rem; left: 3rem;">
</div>

</div>

<style>
.container {
  display: flex;
  flex-direction: row;
  background-color: #881D8D;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 200px;
  padding: 10px;
  text-align:center;
}
</style>


---

# Flexbox

Proprietà flex containers

`flex-direction:` **row | row-reverse | column | column-reverse**   - definisce il verso di disposizione dei flex items sul main axis

<br>

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  flex-direction: row-reverse;
  background-color: #881D8D;
  border: 1px solid green;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  width: 200px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
</div>
<img src="/media/css_28.png" width="200" style="position:relative; top: 8rem; left: -15rem;">
</div>

<style>
.container {
  display: flex;
  flex-direction: row-reverse;
  background-color: #881D8D;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 200px;
  padding: 10px;
  text-align:center;
}
</style>

---

# Flexbox

Proprietà flex containers

`flex-direction:` **row | row-reverse | column | column-reverse**   - definisce il verso di disposizione dei flex items sul main axis

<br>

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  flex-direction: column;
  background-color: #881D8D;
  border: 1px solid green;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  width: 200px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
<img src="/media/css_29.png" width="150" style="position:relative; top: 2rem; left:  5rem;">
</div>

</div>

<style>
.container {
  display: flex;
  flex-direction: column;
  background-color: #881D8D;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 200px;
  padding: 10px;
  text-align:center;
}
</style>

---

# Flexbox

Proprietà flex containers

`flex-direction:` **row | row-reverse | column | column-reverse**   - definisce il verso di disposizione dei flex items sul main axis

<br>

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  flex-direction: column-reverse;
  background-color: #881D8D;
  border: 1px solid green;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  width: 200px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
<img src="/media/css_29.png" width="150" style="position:relative; top: 2rem; left:  5rem;">
</div>

</div>

<style>
.container {
  display: flex;
  flex-direction: column-reverse;
  background-color: #881D8D;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 200px;
  padding: 10px;
  text-align:center;
}
</style>

---

# Flexbox

Proprietà flex containers

`flex-wrap:` **nowrap | wrap | wrap-reverse**  - indica la possibilità di disporre i flex item su più righe o colonne se non c'è abbastanza spazio nel container

<br>

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #881D8D;
  border: 1px solid green;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  width: 80px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
<img src="/media/css_30.png" width="300" style="position:relative; top: 3rem; left:  0rem;">
</div>

</div>

<style>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #881D8D;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 80px;
  padding: 10px;
  text-align:center;
}
</style>

---

# Flexbox

Proprietà flex containers

`flex-wrap:` **nowrap | wrap | wrap-reverse**  - indica la possibilità di disporre i flex item su più righe o colonne se non c'è abbastanza spazio nel container

<br>

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  background-color: #881D8D;
  border: 1px solid green;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  width: 80px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
<img src="/media/css_31.png" width="300" style="position:relative; top: 3rem; left:  1rem;">
</div>

</div>

<style>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  background-color: #881D8D;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 80px;
  padding: 10px;
  text-align:center;
}
</style>

---

# Flexbox

Proprietà flex containers

`flex-wrap:` **nowrap | wrap | wrap-reverse**  - indica la possibilità di disporre i flex item su più righe o colonne se non c'è abbastanza spazio nel container

<br>

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #881D8D;
  width: 300px;
  height: 150px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 80px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
<img src="/media/css_32.png" width="100" style="position:relative; top: 1rem; left:  5em;">
</div>

</div>

<style>
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #881D8D;
  width: 300px;
  height: 150px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 80px;
  padding: 10px;
  text-align:center;
}
</style>


---

# Flexbox

Proprietà flex containers

`flex-wrap:` **nowrap | wrap | wrap-reverse**  - indica la possibilità di disporre i flex item su più righe o colonne se non c'è abbastanza spazio nel container

<br>

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap-reverse;
  background-color: #881D8D;
  width: 300px;
  height: 150px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 80px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
<img src="/media/css_33.png" width="100" style="position:relative; top: 1rem; left:  6rem;">
</div>

</div>

<style>
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap-reverse;
  background-color: #881D8D;
  width: 300px;
  height: 150px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 80px;
  padding: 10px;
  text-align:center;
}
</style>


---

# Flexbox

Proprietà flex containers

`justify-content:` **flex-start | flex-end | center | space-between | space-around | space-evenly**  - stabilisce la modalità di allineamento dei flex items sull'asse principale del contenitore

<br>

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: #881D8D;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 40px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
</div>

</div>

<style>
.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: #881D8D;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 40px;
  padding: 10px;
  text-align:center;
}
</style>

---

# Flexbox

Proprietà flex containers

`justify-content:` **flex-start | flex-end | center | space-between | space-around | space-evenly**  - stabilisce la modalità di allineamento dei flex items sull'asse principale del contenitore

<br>

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: #881D8D;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 40px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
</div>

</div>

<style>
.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: #881D8D;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 40px;
  padding: 10px;
  text-align:center;
}
</style>

---

# Flexbox

Proprietà flex containers

`justify-content:` **flex-start | flex-end | center | space-between | space-around | space-evenly**  - stabilisce la modalità di allineamento dei flex items sull'asse principale del contenitore

<br>

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #881D8D;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 40px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
</div>

</div>

<style>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #881D8D;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 40px;
  padding: 10px;
  text-align:center;
}
</style>

---

# Flexbox

Proprietà flex containers

`justify-content:` **flex-start | flex-end | center | space-between | space-around | space-evenly**  - stabilisce la modalità di allineamento dei flex items sull'asse principale del contenitore

<br>

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #881D8D;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 40px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
<p id="text">
I flex items sono distribuiti uniformemente lungo il main axis.

 Il primo elemento è sulla riga/colonna iniziale, l'ultimo elemento sulla riga/colonna finale e gli altri uniformemente distribuiti
</p>
</div>

</div>

<style>
#text {
    width: 300px;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #881D8D;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 40px;
  padding: 10px;
  text-align:center;
}
</style>

---

# Flexbox

Proprietà flex containers

`justify-content:` **flex-start | flex-end | center | space-between | space-around | space-evenly**  - stabilisce la modalità di allineamento dei flex items sull'asse principale del contenitore

<br>

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #881D8D;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 40px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
<p id="text">
Gli elementi sono distribuiti uniformemente lungo il main axis con uno spazio uguale intorno a loro. 

Nota che visivamente gli spazi non sono uguali, poiché tutti gli oggetti hanno lo stesso spazio su entrambi i lati. 
</p>
</div>

</div>

<style>
#text {
    width: 300px;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #881D8D;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 40px;
  padding: 10px;
  text-align:center;
}
</style>

---

# Flexbox

Proprietà flex containers

`justify-content:` **flex-start | flex-end | center | space-between | space-around | space-evenly**  - stabilisce la modalità di allineamento dei flex items sull'asse principale del contenitore

<br>

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #881D8D;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 40px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
<p id="text">
Gli elementi sono distribuiti in modo che la spaziatura tra due elementi qualsiasi (e lo spazio ai bordi) sia uguale.
</p>
</div>

</div>

<style>
#text {
    width: 300px;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #881D8D;
  width: 300px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 40px;
  padding: 10px;
  text-align:center;
}
</style>

---

# Flexbox

Proprietà flex containers

<img src="/media/css_34.png" width="250" style="margin: auto;">


---

# Flexbox

Proprietà flex containers

`align-items:` **stretch | flex-start | flex-end | center** 

<br>

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 40px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
<p id="text">
Gli elementi sono posizionati all'inizio del cross axis
</p>
</div>

</div>

<style>
#text {
    width: 300px;
}
.container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 40px;
  padding: 10px;
  text-align:center;
}
</style>


---

# Flexbox

Proprietà flex containers

`align-items:` **stretch | flex-start | flex-end | center** 

<br>

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 40px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
<p id="text">
Gli elementi sono posizionati alla fine del cross axis
</p>
</div>

</div>

<style>
#text {
    width: 300px;
}
.container {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 40px;
  padding: 10px;
  text-align:center;
}
</style>


---

# Flexbox

Proprietà flex containers

`align-items:` **stretch | flex-start | flex-end | center** 

<br>

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 40px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
<p id="text">
Gli elementi sono posizionati al centro del cross axis
</p>
</div>

</div>

<style>
#text {
    width: 300px;
}
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 40px;
  padding: 10px;
  text-align:center;
}
</style>


---

# Flexbox

Proprietà flex containers

`align-items:` **stretch | flex-start | flex-end | center** 

<br>

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 40px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
<p id="text">
Gli elementi sono espansi per occupare tutto lo spazio disponibile lungo il cross axis

Se height è specificato ha priorità rispetto a questa proprietà
</p>
</div>

</div>

<style>
#text {
    width: 300px;
}
.container {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 40px;
  padding: 10px;
  text-align:center;
}
</style>

---

# Flexbox

Proprietà flex containers

<img src="/media/css_35.png" width="400" style="margin: auto;">


---

# Flexbox

Proprietà flex containers

`align-content:` **stretch | flex-start | flex-end | center | space-between | space-around** - gestisce l'allineamento di una riga di flex items lungo l'asse perpendicolare; ha effetto solo su contenitori multi-riga

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}
.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 80px;
  height: 40px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
<p id="text">
Posiziona e distribuisce lo spazio attorno ai flex items lungo l'asse cross

flex-start posiziona all'inizio del cross axis
</p>
</div>

</div>

<style>
#text {
    width: 300px;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 80px;
  height: 40px;
  padding: 10px;
  text-align:center;
}
</style>


---

# Flexbox

Proprietà flex containers

`align-content:` **stretch | flex-start | flex-end | center | space-between | space-around** - gestisce l'allineamento di una riga di flex items lungo l'asse perpendicolare; ha effetto solo su contenitori multi-riga

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-end;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}
.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 80px;
  height: 40px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
<p id="text">
posiziona gli elementi alla fine del cross axis
</p>
</div>

</div>

<style>
#text {
    width: 300px;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-end;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 80px;
  height: 40px;
  padding: 10px;
  text-align:center;
}
</style>

---

# Flexbox

Proprietà flex containers

`align-content:` **stretch | flex-start | flex-end | center | space-between | space-around** - gestisce l'allineamento di una riga di flex items lungo l'asse perpendicolare; ha effetto solo su contenitori multi-riga

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}
.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 80px;
  height: 40px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
<p id="text">
posiziona gli elementi al centro del cross axis
</p>
</div>

</div>

<style>
#text {
    width: 300px;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 80px;
  height: 40px;
  padding: 10px;
  text-align:center;
}
</style>

---

# Flexbox

Proprietà flex containers

`align-content:` **stretch | flex-start | flex-end | center | space-between | space-around** - gestisce l'allineamento di una riga di flex items lungo l'asse perpendicolare; ha effetto solo su contenitori multi-riga

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}
.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 80px;
  height: 40px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
</div>
<p id="text">
distanzia gli elementi distribuendo lo spazio in modo omogeneo
</p>
</div>

</div>

<style>
#text {
    width: 300px;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 80px;
  height: 40px;
  padding: 10px;
  text-align:center;
}
</style>

---

# Flexbox

Proprietà flex containers

`align-content:` **stretch | flex-start | flex-end | center | space-between | space-around** - gestisce l'allineamento di una riga di flex items lungo l'asse perpendicolare; ha effetto solo su contenitori multi-riga

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}
.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 80px;
  height: 40px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
</div>
<p id="text">
gli elementi sono uniformemente distribuiti e lo spazio attorno ad ogni elemento è uguale
</p>
</div>

</div>

<style>
#text {
    width: 300px;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 80px;
  height: 40px;
  padding: 10px;
  text-align:center;
}
</style>


---

# Flexbox

Proprietà flex containers

`align-content:` **stretch | flex-start | flex-end | center | space-between | space-around** - gestisce l'allineamento di una riga di flex items lungo l'asse perpendicolare; ha effetto solo su contenitori multi-riga

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: stretch;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}
.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 80px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
<p id="text">
gli elementi sono ridimensionati per occupare tutto lo spazio possibile lungo il cross axis
</p>
</div>

</div>

<style>
#text {
    width: 300px;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: stretch;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 80px;
  padding: 10px;
  text-align:center;
}
</style>

---

# Flexbox

Proprietà flex containers

<img src="/media/css_36.png" width="300" style="margin: auto;">


---

# Flexbox

Proprietà flex containers

`row-gap - column-gap`: permette di specificare lo spazio tra le righe e le colonne 

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 40px;
  column-gap: 10px;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 80px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
<p id="text">
Imposta il gap tra le righe e tra le colonne
</p>
</div>

</div>

<style>
#text {
    width: 300px;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 40px;
  column-gap: 10px;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 80px;
  padding: 10px;
  text-align:center;
}
</style>


---

# Flexbox

Proprietà flex items

- `order <num>`: specifica l'ordine in cui viene mostrato un box rispetto agli altri definiti nel contenitore
- `align-self:` **auto | flex-start | flex-end | center | baseline | stretch** - consente di specificare per un item l'allineamento sull'asse cross, superando caso per caso le impostazioni definite con la proprietà align-items
- `flex-grow`: consente di impostare il fattore di ingrandimento di un item rispetto agli altri presenti nel contenitore quando si distribuisce lo spazio disponbile
- `flex-shrink`: è la proprietà opposta rispetto a flex-grow, dal momento che agisce sul fattore di restringimento relativo tra i box
- `flex-basis`: consente di specificare la dimensione principale (main size) iniziale (in valori assoluti o in percentuale) di un box
- `flex`: shorthand per le proprietà flex-grow, flex-shrink e flex-basis
  
---

# Flexbox

Proprietà flex items

`order <num>`: specifica l'ordine in cui viene mostrato un box rispetto agli altri definiti nel contenitore

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>

.container {
  display: flex;
  flex-direction: row;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}

```
</div>

<div> <!-- col2 -->

```css

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 80px;
  height: 40px;
  padding: 10px;
  text-align:center;
}

.item1 { order: 1;}
.item2 { order: 4;}
.item3 { order: 2;}
.item4 { order: 3;}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item itme1">1</div>
  <div class="item item2">2</div>
  <div class="item item3">3</div>
  <div class="item item4">4</div>
</div>
<p id="text">
permette di cambiare l'ordine di visualizzazione di un flex items rispetto a quello standard pari a 0
</p>
</div>

</div>

<style>
#text {
    width: 300px;
}
.container {
  display: flex;
  flex-direction: row;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 80px;
  height: 40px;
  padding: 10px;
  text-align:center;
}

.item1 { order: 1;}
.item2 { order: 4;}
.item3 { order: 2;}
.item4 { order: 3;}
</style>

---

# Flexbox

Proprietà flex items

`align-self:` **auto | flex-start | flex-end | center | baseline | stretch** - consente di specificare per un item l'allineamento sull'asse cross, superando caso per caso le impostazioni definite con la proprietà align-items

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}
.item3 { align-self: flex-start; }
.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 80px;
  height: 40px;
  padding: 10px;
  text-align:center;
}

```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item itme1">1</div>
  <div class="item item2">2</div>
  <div class="item item3 item3">3</div>
  <div class="item item4">4</div>
</div>
<p id="text">
permette di specificare l'allineamento rispetto al cross axis di un item specifico rispetto a quanto specificato da aling-items
</p>
</div>

</div>

<style>
#text {
    width: 300px;
}
.container {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}

.item {
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  width: 80px;
  height: 40px;
  padding: 10px;
  text-align:center;
}

.item3 {
    align-self: flex-start;
}
</style>


---

# Flexbox

Proprietà flex items

`flex-grow`: consente di impostare il fattore di ingrandimento di un item rispetto agli altri presenti nel contenitore quando si distribuisce lo spazio disponbile

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}
.item2 {flex-grow: 4;}
.item {
  flex-grow: 1;
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  height: 40px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item item2">2</div>
  <div class="item">3</div>
</div>
<p id="text">
Permette di definire il fattore di crescita di un items quando viene calcolata la dimensione dei vari flex items
</p>
</div>

</div>

<style>
#text {
    width: 300px;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}

.item {
  flex-grow: 1;
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  height: 40px;
  padding: 10px;
  text-align:center;
}

.item2 {
    flex-grow: 4;
}
</style>

---

# Flexbox

Proprietà flex items

`flex-grow`: consente di impostare il fattore di ingrandimento di un item rispetto agli altri presenti nel contenitore quando si distribuisce lo spazio disponbile

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container">
  <div class="item">1</div>
  <div class="item item2">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.container {
  display: flex;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}
.item2 {flex-shrink: 4;}
.item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 100px;
  border: 1px solid red;
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  height: 40px;
  padding: 10px;
  text-align:center;
}
```
</div>

<div> <!-- col3 -->

<div class="container">
  <div class="item">1</div>
  <div class="item item2">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
<p id="text">
Permette di definire il fattore di riduzione di un items quando viene calcolata la dimensione dei vari flex items
</p>
</div>

</div>

<style>
#text {
    width: 300px;
}
.container {
  display: flex;
  background-color: #881D8D;
  width: 300px;
  height: 200px;
  padding: 10px;
}

.item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 100px;
  border: 1px solid red;
  background-color: #FFAD49;
  border: 1px solid #FF920D;
  height: 40px;
  padding: 10px;
  text-align:center;
}

.item2 {
    flex-shrink: 4;
}
</style>

---

# Esercizio css_26

Flexbox

1. Creare un file e salvarlo come *|cognome|_esercizio_css_26.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_26.css*
3. Creare in HTML e CSS utilizzando il flexbox quanto raffigurato sotto 

<br>
<center>
<img src="/media/css_41.png" width="900">
</center>
<br>

4.  Fornire il link github al file con nome |cognome|_esercizio_css_26.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_26.css

---

# Esercizio css_27

Flexbox

1. Creare un file e salvarlo come *|cognome|_esercizio_css_27.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_27.css*
3. Creare in HTML e CSS utilizzando il flexbox quanto raffigurato sotto 

<br>
<center>
<img src="/media/css_42.png" width="500">
</center>
<br>

4.  Fornire il link github al file con nome |cognome|_esercizio_css_27.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_27.css

---

# Esercizio css_28

Flexbox

1. Creare un file e salvarlo come *|cognome|_esercizio_css_28.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_28.css*
3. Creare in HTML e CSS utilizzando il flexbox quanto raffigurato sotto 

<br>
<center>
<img src="/media/css_43.png" width="300">
</center>
<br>

4.  Fornire il link github al file con nome |cognome|_esercizio_css_28.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_28.css


---

# Esercizio css_29

Flexbox

1. Creare un file e salvarlo come *|cognome|_esercizio_css_29.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_29.css*
3. Creare in HTML e CSS utilizzando il flexbox quanto raffigurato sotto 

<br>
<center>
<img src="/media/css_44.png" width="450">
</center>
<br>

4.  Fornire il link github al file con nome |cognome|_esercizio_css_29.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_29.css


---

# Sfida

FlexboxFroggy

- In gruppi da 2 studenti, giocare a [FlexboxFroggy](https://flexboxfroggy.com/#it)
- Obiettivo è completare più livelli possibile e completare il gioco 

<br>
<img src="/media/css_68.png" width="900" style="margin:auto;">

---
layout: section
---
<h1 class="sezione">Grid Layout</h1>


---

# Grid

Intro

- CSS Grid Layout (aka “Grid” o “CSS Grid”), è un sistema di layout basato su griglia bidimensionale che, rispetto a qualsiasi sistema di layout web del passato, cambia completamente il modo in cui progettiamo le interfacce utente. 
- Il CSS ha portato moltissime migliorie, rispetto ad HTML, per il layout di una pagina, tuttavia ha presentato forti limitazioni
- Nel corso del tempo sono stati usati vari hack: le tabelle, quindi i float, il posizionamento e il blocco in linea 
- Tuttavia molte funzionalità importanti (centratura verticale, ad esempio) non sono mai state veramente risolte dal CSS. 
- Flexbox, che abbiamo studiato, è un ottimo strumento di layout, ma non copre tutti i casi per generare il layout che vogliamo
- `Grid è il primissimo modulo CSS creato appositamente per risolvere i problemi di layout che tutti abbiamo cercato di aggirare da quando creiamo siti web`
  

---

# Grid

Intro

- CSS Grid è un modulo di layout di CSS che consente di creare layout complessi e flessibili utilizzando una griglia di righe e colonne. 
- Con CSS Grid è possibile posizionare gli elementi HTML in qualsiasi posizione all'interno della griglia, consentendo di creare layout che sarebbero stati difficili da realizzare con i tradizionali metodi di posizionamento di CSS.

<img src="/media/css_46.png" width="300" style="margin:auto;">

---

# Grid

Basic

- Per iniziare devi definire un elemento contenitore come una griglia con `display: grid`
- Impostare le dimensioni di colonne e righe con `grid-template-columns` e `grid-template-rows`
- Posizionare i suoi elementi figli nella griglia con `grid-column` e `grid-row`
- Analogamente a flexbox, l'ordine di origine degli elementi della griglia non ha importanza. 
- Il tuo CSS può posizionarli in qualsiasi ordine, il che rende super facile riorganizzare la tua griglia con le media query. 
- Immagina di definire il layout dell'intera pagina e quindi di riorganizzarlo completamente per adattarlo a una larghezza dello schermo diversa, il tutto con solo un paio di righe di CSS. 
- `Grid è uno dei moduli CSS più potenti mai introdotti dallo standard`


---

# Grid

Basic

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.grid-container {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  border: 2px solid green;
  padding: 20px;
}

.grid-item {
    border: 1px solid red;
    width: 50px;
    padding: 10px;
    text-align: center;
}
```
</div>

<div> <!-- col3 -->

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>

</div>

</div>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  border: 2px solid green;
  padding: 20px;
}

.grid-item {
    border: 1px solid red;
    width: 50px;
    padding: 10px;
    text-align: center;
}
</style>


---

# Grid

Basic

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.grid-container {
  display: grid;
  grid-template-columns: 50% 50%;
  border: 2px solid green;
  padding: 20px;
}

.grid-item {
    border: 1px solid red;
    width: 50px;
    padding: 10px;
    text-align: center;
}
```
</div>

<div> <!-- col3 -->

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>

</div>

</div>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 50% 50%;
  border: 2px solid green;
  padding: 20px;
}

.grid-item {
    border: 1px solid red;
    width: 50px;
    padding: 10px;
    text-align: center;
}
</style>

---

# Grid

Basic

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.grid-container {
  display: grid;
  grid-template-columns: 100%;
  border: 2px solid green;
  padding: 20px;
}

.grid-item {
    border: 1px solid red;
    width: 50px;
    padding: 10px;
    text-align: center;
}
```
</div>

<div> <!-- col3 -->

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>

</div>

</div>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 100%;
  border: 2px solid green;
  padding: 20px;
}

.grid-item {
    border: 1px solid red;
    width: 50px;
    padding: 10px;
    text-align: center;
}
</style>

---

# Esercizio css_30

Grid

1. Creare un file e salvarlo come *|cognome|_esercizio_css_30.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_30.css*
3. Creare in HTML e CSS utilizzando Grid, la scacchiera del gioco del 15, raffigurata sotto 
4. Fornire il link github al file con nome |cognome|_esercizio_css_30.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_30.css

<img src="/media/css_47.png" width="250" style="margin:auto;">


---

# Grid

Terminologia

`fractional units`

- **Una frazione o 1fr è un'unità di lunghezza flessibile che rappresenta una frazione dello spazio disponibile nel contenitore.**
- Quindi, 1FR è 1/N dello spazio disponibile (dove N è il numero totale di farzioni). 
- Per esempio se ci sono 250 frazioni? Unafrazione (1FR) è 1/250 o 0,4%.

`Quindi, 1 frazione è 100 diviso per il numero totale di frazioni.`

<img src="/media/css_53.png" width="300" style="margin:auto;">

---

# Grid

Terminologia

`Sizing Keywords`

- `min-content`: la dimensione minima del contenuto. Immagina una riga di testo come "E pluribus unum", il contenuto minimo è probabilmente la larghezza della parola "pluribus".
- `max-content`: la dimensione massima del contenuto. Immagina la frase sopra, il contenuto massimo è la lunghezza dell'intera frase.
- `auto`: questa parola chiave è molto simile alle unità fr, tranne per il fatto che "perdono" il combattimento nel dimensionamento contro le unità fr quando allocano lo spazio rimanente.

---

# Grid

Terminologia

`Sizing Functions`

- `fit-content()`: usa lo spazio disponibile, ma mai meno di min-content e mai più di max-content.
- `minmax()`: fa esattamente quello che sembra: imposta un valore minimo e massimo per quello che può essere la lunghezza. Questo è utile in combinazione con unità relative. Ad esempio, potresti desiderare che una colonna sia in grado di ridursi solo finorax
- `repeat()`: può risparmiarci da scrivere lunghe sequenze di fractional units

<br>

```cs
 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

  repeat(8, 1fr);
```

---

# Grid

Terminologia

`Grid Container`

- L'elemento su cui viene applicato display:grid. 
- È il genitore diretto di tutti gli elementi della griglia. 

<br>

`Grid Item`

- Gli elementi figlio (ovvero i discendenti diretti) del contenitore della griglia. 
  
---

# Grid

Terminologia

`Grid Line`

- Le linee divisorie che compongono la struttura della griglia. 
- Possono essere verticali ("linee della griglia di colonna") o orizzontali ("linee della griglia di riga") e risiedono su entrambi i lati di una riga o di una colonna. 
- Qui la linea gialla è un esempio di una linea della griglia di colonne.

<br>
<img src="/media/css_48.png" width="300" style="margin:auto;">

---

# Grid

Terminologia

`Grid Track`

- Lo spazio tra due linee di griglia adiacenti. 
- Puoi pensarli come le colonne o le righe della griglia. 
- Ecco la traccia (track) della griglia tra la seconda e la terza riga della griglia.
  
<br>
<img src="/media/css_49.png" width="300" style="margin:auto;">


---

# Grid

Terminologia

`Grid Area`

- Lo spazio totale circondato da quattro linee della griglia. 
- Un'area della griglia può essere composta da un numero qualsiasi di celle della griglia. 
- Ecco l'area della griglia tra le linee della griglia di riga 1 e 3 e le linee della griglia di colonna 1 e 3.
  
<br>
<img src="/media/css_50.png" width="300" style="margin:auto;">



---

# Grid

Terminologia

`Grid Cell`

- Lo spazio tra due righe adiacenti e due linee della griglia di colonne adiacenti. 
- È una singola "unità" della griglia. 
- Ecco la cella della griglia tra le linee della griglia di riga 1 e 2 e le linee della griglia di colonna 2 e 3.
  
<br>
<img src="/media/css_51.png" width="300" style="margin:auto;">


---

# Grid

Proprietà 

- Come per il Flexbox ci sono proprietà specifiche per il Grid Container e proprietà per i Grid Item
- Vediamo le più importanti proprietà dei due gruppi sopra descritti

<br>
<img src="/media/css_52.png" width="600" style="margin:auto;">


---

# Grid

Proprietà grid containers

- `display`:  Definisce l'elemento come contenitore della griglia e stabilisce un nuovo contesto di formattazione della griglia per il suo contenuto.
- `grid-template-columns` - `grid-template-rows`:  Definisce le colonne e le righe della griglia con un elenco di valori separati da spazi. I valori rappresentano la dimensione della traccia e lo spazio tra di essi rappresenta la linea della griglia.
- `grid-template-areas`:  Definisce un modello di griglia facendo riferimento ai nomi delle aree della griglia specificate con la proprietà grid-area. La ripetizione del nome di un'area della griglia fa sì che il contenuto si estenda su quelle celle. Un punto indica una cella vuota. La sintassi stessa fornisce una visualizzazione della struttura della griglia.

---

# Grid

Proprietà grid containers

- `grid-column-gap` - `grid-row-gap`:  Specifica la dimensione delle linee della griglia. Puoi pensarlo come impostare la larghezza delle grondaie tra le colonne/righe.
- `justify-items`:  Allinea gli elementi della griglia lungo l'asse inline (riga) (al contrario di align-items che si allinea lungo l'asse blocco (colonna)). Questo valore si applica a tutti gli elementi della griglia all'interno del contenitore.
- `align-items`:  Allinea gli elementi della griglia lungo l'asse del blocco (colonna) (al contrario degli elementi giustificati che si allineano lungo l'asse in linea (riga). Questo valore si applica a tutti gli elementi della griglia all'interno del contenitore.
- `justify-content`:  A volte la dimensione totale della tua griglia potrebbe essere inferiore alla dimensione del suo contenitore di griglia. Ciò potrebbe accadere se tutti i tuoi elementi della griglia sono dimensionati con unità non flessibili come px. In questo caso è possibile impostare l'allineamento della griglia all'interno del contenitore della griglia. Questa proprietà allinea la griglia lungo l'asse in linea (riga) (al contrario di align-content che allinea la griglia lungo l'asse blocco (colonna).

---

# Grid

Proprietà grid containers

- `align-content`:  A volte la dimensione totale della tua griglia potrebbe essere inferiore alla dimensione del suo contenitore di griglia. Ciò potrebbe accadere se tutti i tuoi elementi della griglia sono dimensionati con unità non flessibili come px. In questo caso è possibile impostare l'allineamento della griglia all'interno del contenitore della griglia. Questa proprietà allinea la griglia lungo l'asse del blocco (colonna) (al contrario di justify-content che allinea la griglia lungo l'asse inline (riga)).

---

# Grid

Proprietà grid containers

- `display`:  **grid | inline-grid**: Definisce l'elemento come contenitore della griglia e stabilisce un nuovo contesto di formattazione della griglia per il suo contenuto.
    - **grid**: genera una griglia block level
    - **inline-grid**: genera una griglia inline

<br>
```css
.container {
  display: grid | inline-grid;
}
```

---

# Grid

Proprietà grid containers

- `grid-template-columns` - `grid-template-rows`:  Definisce le colonne e le righe della griglia con un elenco di valori separati da spazi. I valori rappresentano la dimensione della traccia e lo spazio tra di essi rappresenta la linea della griglia.
    - **track-size**: può essere una lunghezza, una percentuale o una frazione dello spazio libero nella griglia utilizzando l'unità fr
    - **line-name**: un nome arbitrario 

```css
.grid-container {
  grid-template-columns: 1fr 1fr;
  grid-template-columns: minmax(10px, 1fr) 3fr;
  grid-template-columns: repeat(5, 1fr);
  grid-template-columns: 50px auto 100px 1fr;
}
```

---

# Grid

Proprietà grid containers

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.grid-item {
    border: 1px solid red;
    padding: 10px;
    text-align: center;
}
```
</div>

<div> <!-- col3 -->

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>

</div>

</div>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.grid-item {
    border: 1px solid red;
    padding: 10px;
    text-align: center;
}
</style>

---

# Grid

Proprietà grid containers

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.grid-container {
  display: grid;
  grid-template-columns: minmax(10px, 1fr) 3fr;
}

.grid-item {
    border: 1px solid red;
    padding: 10px;
    text-align: center;
}
```
</div>

<div> <!-- col3 -->

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>

</div>

</div>

<style>
.grid-container {
  display: grid;
  grid-template-columns: minmax(10px, 1fr) 3fr;
}

.grid-item {
    border: 1px solid red;
    padding: 10px;
    text-align: center;
}
</style>

---

# Grid

Proprietà grid containers

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.grid-item {
    border: 1px solid red;
    padding: 10px;
    text-align: center;
}
```
</div>

<div> <!-- col3 -->

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>

</div>

</div>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.grid-item {
    border: 1px solid red;
    padding: 10px;
    text-align: center;
}
</style>

---

# Grid

Proprietà grid containers

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.grid-container {
  display: grid; 
  grid-template-columns: 50px auto 100px 1fr;
}

.grid-item {
    border: 1px solid red;
    padding: 10px;
    text-align: center;
}
```
</div>

<div> <!-- col3 -->

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>

</div>

</div>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 50px auto 100px 1fr;
}

.grid-item {
    border: 1px solid red;
    padding: 10px;
    text-align: center;
}
</style>


---

# Grid

Proprietà grid containers

- `grid-template-areas`:  Definisce un modello di griglia facendo riferimento ai nomi delle aree della griglia specificate con la proprietà grid-area. La ripetizione del nome di un'area della griglia fa sì che il contenuto si estenda su quelle celle. Un punto indica una cella vuota. La sintassi stessa fornisce una visualizzazione della struttura della griglia.
    - **grid-area-name**: il nome di un'area della griglia specificato con **grid-area**
    - **.**: un punto significa cella vuota
    - **none**: nessuna area della griglia definita

<br>
<img src="/media/css_54.png" width="250" style="margin:auto;">


---

# Grid

Proprietà grid containers

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="grid-container">
  <div class="item area-h">1</div>
  <div class="item area-m">2</div>
  <div class="item area-s">3</div>
  <div class="item area-f">4</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.grid-container {
  display: grid;
  grid-template-columns: 
  50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}
.area-h {
    grid-area: header;
}
.area-m {
    grid-area: main;
}
.area-s {
    grid-area: sidebar;
}
.area-f {
    grid-area: footer;
}
```
</div>

<div> <!-- col3 -->

<div class="grid-container">
  <div class="item area-h">1</div>
  <div class="item area-m">2</div>
  <div class="item area-s">3</div>
  <div class="item area-f">4</div>
</div>

</div>

</div>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}

.item {
    padding: 10px;
    text-align: center;
}
.area-h {
    grid-area: header;
    background-color: #FF8C27;
}
.area-m {
    grid-area: main;
    background-color: #27BCE7;
}
.area-s {
    grid-area: sidebar;
    background-color: #FF476D;
}
.area-f {
    grid-area: footer;
    background-color: #27D679;
}
</style>


---

# Grid

Proprietà grid containers

- `grid-column-gap` - `grid-row-gap`:  Specifica la dimensione delle linee della griglia. Puoi pensarlo come impostare la larghezza delle grondaie tra le colonne/righe.
    - **line-size**: un valore di lunghezza


<br>
<img src="/media/css_55.png" width="350" style="margin:auto;">

---

# Grid

Proprietà grid containers

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
  <div class="item">8</div>
  <div class="item">9</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.grid-container {
  display: grid;
  grid-template-columns: 50px 50px 50px;
  grid-template-rows: 50px 50px 50px;   
  grid-column-gap: 30px;
  grid-row-gap: 10px;
}

.item {
    background-color: #FF8A23;
    text-align: center; 
}
```
</div>

<div> <!-- col3 -->

<div class="grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
  <div class="item">8</div>
  <div class="item">9</div>
</div>

</div>

</div>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 50px 50px 50px;
  grid-template-rows: 50px 50px 50px;   
  grid-column-gap: 30px;
  grid-row-gap: 10px;
}

.item {
    background-color: #FF8A23;
    text-align: center; 
}

</style>

---

# Grid

Proprietà grid containers

- `justify-items`:  Allinea gli elementi della griglia lungo l'asse inline (riga) (al contrario di align-items che si allinea lungo l'asse blocco (colonna)). Questo valore si applica a tutti gli elementi della griglia all'interno del contenitore.
    - **start**: allinea l'item con il bordo sinistro della cella
    - **center**: allinea l'item al centro della cella
    - **end**:allinea l'item con il bordo destro della cella
    - **stretch**: riempie tutta lo spazio della cella

<img src="/media/css_56.png" width="450" style="margin:auto;">

---

# Grid

Proprietà grid containers

- `align-items`:  Allinea gli elementi della griglia lungo l'asse del blocco (colonna) (al contrario degli elementi giustificati che si allineano lungo l'asse in linea (riga). Questo valore si applica a tutti gli elementi della griglia all'interno del contenitore.
    - **start**: allinea l'item con il bordo superiore della cella
    - **center**: allinea l'item al centro della cella
    - **end**:allinea l'item con il bordo inferiore della cella
    - **stretch**: riempie tutta lo spazio della cella

<img src="/media/css_57.png" width="450" style="margin:auto;">

---

# Grid

Proprietà grid containers

- `justify-content`:  A volte la dimensione totale della tua griglia potrebbe essere inferiore alla dimensione del suo contenitore di griglia. Ciò potrebbe accadere se tutti i tuoi elementi della griglia sono dimensionati con unità non flessibili come px. In questo caso è possibile impostare l'allineamento della griglia all'interno del contenitore della griglia. Questa proprietà allinea la griglia lungo l'asse in linea (riga) (al contrario di align-content che allinea la griglia lungo l'asse blocco (colonna).
  - **start**: allinea la griglia con il bordo sinistro del container
  - **center**: allinea la griglia al centro del container
  - **end**: allinea la griglia con il bordo destro del container
  - **stretch**: occupa tutto lo spazio disponibile
  - **space-around**:  aggiunge la stessa quantità di spazio attorno agli elementi della griglia
  - **space-between**: aggiunge la stessa quantità di spazio tra gli elementi della griglia
  - **space-evenly**: aggiunge la stessa quantità di spazio attorno e tra gli elementi della griglia

---

# Grid

Proprietà grid containers

<br>
<img src="/media/css_58.png" width="1000" style="margin:auto;">



---

# Grid

Proprietà grid containers

- `align-content`:  A volte la dimensione totale della tua griglia potrebbe essere inferiore alla dimensione del suo contenitore di griglia. Ciò potrebbe accadere se tutti i tuoi elementi della griglia sono dimensionati con unità non flessibili come px. In questo caso è possibile impostare l'allineamento della griglia all'interno del contenitore della 
  - **start**: allinea la griglia con il bordo superio del container
  - **center**: allinea la griglia al centro del container
  - **end**: allinea la griglia con il bordo inferiore del container
  - **stretch**: occupa tutto lo spazio disponibile
  - **space-around**:  aggiunge la stessa quantità di spazio attorno agli elementi della griglia
  - **space-between**: aggiunge la stessa quantità di spazio tra gli elementi della griglia
  - **space-evenly**: aggiunge la stessa quantità di spazio attorno e tra gli elementi della griglia

---

# Grid

Proprietà grid containers

<img src="/media/css_59.png" width="700" style="margin:auto;">


---

# Grid

Proprietà grid items

- `grid-column-start` - `grid-column-end`- `grid-row-start` - `grid-row-end`: Determina la posizione di un elemento della griglia all'interno della griglia facendo riferimento a specifiche linee della griglia. griglia-colonna-inizio/griglia-riga-inizio è la riga dove inizia l'elemento e griglia-colonna-fine/griglia-riga-fine è la riga dove finisce l'elemento.
- `grid-area`: Assegna un nome a un elemento in modo che possa essere referenziato da un modello creato con la proprietà grid-template-areas.
- `justify-self`: Allinea un elemento della griglia all'interno di una cella lungo l'asse in linea (riga) (al contrario di align-self che si allinea lungo l'asse blocco (colonna). Questo valore si applica a un elemento della griglia all'interno di una singola cella.
- `align-self`: Allinea un elemento della griglia all'interno di una cella lungo l'asse del blocco (colonna) (al contrario di justify-self che si allinea lungo l'asse in linea (riga). Questo valore si applica al contenuto all'interno di un singolo elemento della griglia.

---

# Grid

Proprietà grid items

- `grid-column-start` - `grid-column-end`- `grid-row-start` - `grid-row-end`: Determina la posizione di un elemento della griglia all'interno della griglia facendo riferimento a specifiche linee della griglia. griglia-colonna-inizio/griglia-riga-inizio è la riga dove inizia l'elemento e griglia-colonna-fine/griglia-riga-fine è la riga dove finisce l'elemento.
    - **line**: numero di riga o colonna dove posizionare l'item
    - **span**: l'item occuperà il numero specificato di righe o colonne 
    - **auto**: indica il posizionamento automatico dell'item
 

<img src="/media/css_60.png" width="300" style="margin:auto;">


---

# Grid

Proprietà grid items

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="grid-container">
  <div class="grid-item a">XXX</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item b">YYY</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.grid-container {
  display: grid;
  grid-template-columns: 
  repeat(6, 1fr);
}

.grid-item {
    border: 1px solid red;
    padding: 10px;
    text-align: center;
}
.a {
    grid-column-start: 2;
    grid-column-end: 5;
}

.b {
    grid-row-start: 2;
    grid-row-end: 5;
}
```
</div>

<div> <!-- col3 -->

<div class="grid-container">
  <div class="grid-item a">XXX</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item b">YYY</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
</div>

</div>

</div>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}

.grid-item {
    border: 1px solid red;
    padding: 10px;
    text-align: center;
}
.a {
    grid-column-start: 2;
    grid-column-end: 5;
}

.b {
    grid-row-start: 2;
    grid-row-end: 5;
}

</style>

---

# Grid

Proprietà grid items

- Le proprietà **grid-column-start** e **grid-column-end** possono essere scritte in maniera più compatta usando lo shorthand `grid-column <col inizio> / <col fine>`
- In modo analogo le proprietà **grid-row-start** e **grid-row-end** possono essere scritte in maniera più compatta usando lo shorthand `grid-row <row inizio> / <row fine>`
- Quindi per esempio

```css
grid-column-start: 2;
grid-column-end: 5;

grid-row-start: 3;
grid-row-end: 7;
```

equivale a:

```css
grid-column: 2 / 5;

grid-row: 3 / 7;
```

---

# Grid

Proprietà grid items

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="grid-container">
  <div class="grid-item a">XXX</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item b">YYY</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
</div>
```
</div>

<div> <!-- col2 -->

```css
.grid-container {
  display: grid;
  grid-template-columns: 
  repeat(6, 1fr);
}

.grid-item {
    border: 1px solid red;
    padding: 10px;
    text-align: center;
}
.a {
    grid-column: 2 / 5;
}

.b {
    grid-row: 2 / 5;
}

```
</div>

<div> <!-- col3 -->

<div class="grid-container">
  <div class="grid-item a">XXX</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item b">YYY</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
  <div class="grid-item">1</div>
</div>

</div>

</div>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}

.grid-item {
    border: 1px solid red;
    padding: 10px;
    text-align: center;
}
.a {
    grid-column: 2 / 5;
}

.b {
    grid-row: 2 / 5;
}

</style>

---

# Grid

Proprietà grid items

- `justify-self`: Allinea un elemento della griglia all'interno di una cella lungo l'asse in linea (riga) (al contrario di align-self che si allinea lungo l'asse blocco (colonna). Questo valore si applica a un elemento della griglia all'interno di una singola cella.
  - **start**: allinea un item all'inizio della cella 
  - **end**: allinea un item alla fine della cella
  - **center**: allinea un item al centro della cella
  - **strecth**:  utilizza tutto lo spazio a disposizione

---

# Grid

Proprietà grid items


<img src="/media/css_61.png" width="800" style="margin:auto;">

---

# Grid

Proprietà grid items

- `align-self`: Allinea un elemento della griglia all'interno di una cella lungo l'asse del blocco (colonna) (al contrario di justify-self che si allinea lungo l'asse in linea (riga). Questo valore si applica al contenuto all'interno di un singolo elemento della griglia.
  - **start**: allinea un item all'inizio della cella 
  - **end**: allinea un item alla fine della cella
  - **center**: allinea un item al centro della cella
  - **strecth**:  utilizza tutto lo spazio a disposizione

---

# Grid

Proprietà grid items


<img src="/media/css_62.png" width="800" style="margin:auto;">


---

# Esercizio css_30a

Grid

1. Creare un file e salvarlo come *|cognome|_esercizio_css_30a.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_30a.css*
3. Creare in HTML e CSS utilizzando Grid, la griglia raffigurata sotto 
4. Fornire il link github al file con nome |cognome|_esercizio_css_30a.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_30a.css

<img src="/media/css_80.png" width="600" style="margin:auto;">


---

# Esercizio css_31

Grid

1. Creare un file e salvarlo come *|cognome|_esercizio_css_31.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_31.css*
3. Creare in HTML e CSS utilizzando Grid, la griglia raffigurata sotto 
4. Fornire il link github al file con nome |cognome|_esercizio_css_31.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_31.css

<img src="/media/css_63.png" width="400" style="margin:auto;">


---

# Esercizio css_32

Grid

1. Creare un file e salvarlo come *|cognome|_esercizio_css_32.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_32.css*
3. Creare in HTML e CSS utilizzando Grid, la griglia raffigurata sotto 
4. Fornire il link github al file con nome |cognome|_esercizio_css_32.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_32.css

<img src="/media/css_64.png" width="400" style="margin:auto;">

---

# Esercizio css_33

Grid

1. Creare un file e salvarlo come *|cognome|_esercizio_css_33.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_33.css*
3. Creare in HTML e CSS utilizzando Grid, la griglia raffigurata sotto 
4. Fornire il link github al file con nome |cognome|_esercizio_css_33.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_33.css

<img src="/media/css_65.png" width="400" style="margin:auto;">


---

# Esercizio css_34

Grid

1. Creare un file e salvarlo come *|cognome|_esercizio_css_34.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_34.css*
3. Creare in HTML e CSS utilizzando Grid, la griglia raffigurata sotto 
4. Fornire il link github al file con nome |cognome|_esercizio_css_34.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_34.css

<img src="/media/css_67.png" width="400" style="margin:auto;">


---

# Esercizio css_35

Grid

1. Creare un file e salvarlo come *|cognome|_esercizio_css_35.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_35.css*
3. Creare in HTML e CSS utilizzando Grid, la griglia raffigurata sotto 
4. Fornire il link github al file con nome |cognome|_esercizio_css_35.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_35.css

<img src="/media/css_66.png" width="400" style="margin:auto;">

---

# Sfida

CSSGridGarden

- In gruppi da 2 studenti, giocare a [CSSGridGarden](https://cssgridgarden.com/#it)
- Obiettivo è completare più livelli possibile e completare il gioco 

<br>
<img src="/media/css_69.png" width="900" style="margin:auto;">


---

# Divertiti

GridAttack

- Divertiti a giocare a [GridAttack](https://codingfantasy.com/games/css-grid-attack)
- Obiettivo è completare più livelli possibile e completare il gioco 

<br>
<img src="/media/css_70.png" width="900" style="margin:auto;">


---
layout: section
---
<h1 class="sezione">Responsive Web & Media Queries</h1>


---

# Responsive Web

Intro

- Il `responsive web design (RWD)`, indica una tecnica di web design per la realizzazione di siti in grado di adattarsi graficamente in modo automatico al dispositivo coi quali vengono visualizzati (computer con diverse risoluzioni, tablet, smartphone, cellulari, web tv), riducendo al minimo la necessità dell'utente di ridimensionare e scorrere i contenuti.
- Il design responsivo è un importante elemento dell'accessibilità, la quale tiene conto inoltre di numerosi altri fattori, incentrati non solo sui dispositivi ma anche sulle caratteristiche dell'utente (quali: capacità cognitive, vista, difficoltà fisiche, e così via).

<br>
<img src="/media/css_71.png" width="350" style="margin:auto;">

---

# Responsive Web

Intro

- Un sito responsivo fa uso di una impaginazione grafica con **griglie a proporzioni fluide** (no valori assoluti), struttura e immagini flessibili 
- Il concetto di griglia flessibile richiede che gli elementi siano dimensionati tramite unità relative come percentuali ed em, e non con unità assolute come pixel o punti
- In aggiunta usa una particolare estensione di CSS3 chiamata `media queries`

<br>
<img src="/media/css_72.png" width="500" style="margin:auto;">

---

# Responsive Web

media queries

- **Le media queries** consentono alla pagina di usare diversi fogli di stile in base alle caratteristiche del dispositivo utilizzato (risoluzione, orientamento)..
- Come risultato, gli utenti che utilizzano diverse periferiche e browser, hanno accesso a un singolo sorgente i cui contenuti vengono però disposti in modo differente tale da essere sempre facilmente consultabili, e senza dover compiere troppe operazioni di ridimensionamento, scorrimento e spostamento.

<br>
<img src="/media/css_73.png" width="700" style="margin:auto;">


---

# Responsive Web

media queries

- Una `media queries` si definisce specificando **media-type** (tipo di schermo) e **media-features** 

<br><br>
<img src="/media/css_74.png" width="700" style="margin:auto;">


---

# Responsive Web

media queries

- Il **media-type** indica la categoria di un dispositivo e se non viene espressamente indicata verrà usata la corrispondenza più generica possibile.
    - **all**: Identifica tutti i dispositivi.
    - **print**: È destinata alla modalità di stampa, quindi modificherà un documento o una pagina nella sua versione stampabile.
    - **screen**: Per gli schermi, i tablet o gli smartphone.
    - **speech**: Dedicata ai sintetizzatori vocali o per gli screen reader che leggono la pagina ad alta voce.


---

# Responsive Web

media queries

- Il **media-features** sono dichiarazioni utilizzate nelle Media Queries che consentono di intercettare particolari caratteristiche o “stati” del dispositivo utilizzato.
- Le più comuni media-features sono:
    - **width**:	La larghezza esatta dell’area di visualizzazione
    - **height**:	L’altezza esatta dell’area di visualizzazione
    - **min-width**:	La larghezza minima dell’area di visualizzazione
    - **min-height**:	L’altezza minima dell’area di visualizzazione
    - **max-width**:	La larghezza massima dell’area di visualizzazione
    - **max-height**:	L’altezza massima dell’area di visualizzazione
    - **orientation**:	L’orientamento del dispositivo (landscape o portrait per dispositivi mobili)


---

# Responsive Web

media queries

- Acluni esempi di media queries comunini

```css
/* Schermi grandi o ad alta risoluzione */
@media all and (max-width: 1690px) { ... }

/* Schermi Desktop o Portatili */
@media all and (min-width: 1280px) and (max-width: 1689px) { ... }

/* Tablet in modalità orizzontale */
@media all and (min-width: 737px) and (max-width: 1279px) { ... }

/* Tablet in modalità verticale */
@media all and (min-width: 481px) and (max-width: 736px) { ... }

/* Smartphone o piccoli Tablet */
@media all and (max-width: 480px) { ... } 
```

---

# Responsive Web

media queries

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="block container">
</div>
```
</div>

<div> <!-- col2 -->

```css
/* Schermi grandi o ad alta risoluzione */
@media all 
and (min-width: 1690px) {
    .container {background-color: red;}
}
/* Schermi Desktop o Portatili */
@media all 
and (min-width: 1280px) 
and (max-width: 1689px) {
    .container {background-color: blue;}
}
/* Tablet in modalità orizzontale */
@media all 
and (min-width: 737px) 
and (max-width: 1279px) { 
    .container {background-color: green;}
}
/* Smartphone o piccoli Tablet */
@media all 
and (max-width: 480px) { 
    .container {background-color: violet;}
} 
```
</div>

<div> <!-- col3 -->

<div class="block container"></div>

</div>

</div>

<style>

.block {
    width: 200px;
    height: 200px;
    border: 10px solid yellow;
}

/* Schermi grandi o ad alta risoluzione */
@media all and (min-width: 1690px) {
    .container {
        background-color: red;
    }
}

/* Schermi Desktop o Portatili */
@media all and (min-width: 1280px) and (max-width: 1689px) {
    .container {
        background-color: blue;
    }
}

/* Tablet in modalità orizzontale */
@media all and (min-width: 737px) and (max-width: 1279px) { 
    .container {
        background-color: green;
    }
}

/* Tablet in modalità verticale */
@media all and (min-width: 481px) and (max-width: 736px) {
    .container {
        background-color: grey;
    }
}

/* Smartphone o piccoli Tablet */
@media all and (max-width: 480px) { 
    .container {
        background-color: violet;
    }
} 

</style>


---

# Responsive Web

Esempio Responsive


<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container griglia">
    <div class="item1"/>
    <div class="item2"/>
    <div class="item3"/>
</div>

//CSS
.container {
    border: 1px solid grey;
    width: 400px;
    display: grid;
}

```
</div>

<div> <!-- col2 -->

```css
@media all 
and (min-width: 1024px){
    .griglia {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
/* Smartphone o piccoli Tablet */
@media all 
and (min-width: 481px) 
and (max-width: 1023px) {
    .griglia {
        grid-template-rows: 1fr 1fr 1fr;
    }
} 
.item1 {
    background-color: green;
    height: 100px;
}
.item2 {background-color: white;}
.item3 {background-color: red;}
```
</div>

<div> <!-- col3 -->

<div class="container griglia">
    <div class="item1"/>
    <div class="item2"/>
    <div class="item3"/>
</div>

</div>

</div>

<style>

.container {
    border: 1px solid grey;
    width: 200px;
    display: grid;
}

@media all and (min-width: 1024px){
    .griglia {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

/* Smartphone o piccoli Tablet */
@media all and (min-width: 481px) and (max-width: 1023px) {
    .griglia {
        grid-template-rows: 1fr 1fr 1fr;
    }
} 

.item1 {
    background-color: green;
    height: 100px;
}

.item2 {
    background-color: white;
}

.item3 {
    background-color: red;
}


</style>

---

# Image as a Service


- Spesso nella creazione di un layout abbiamo bisogno di inserire delle immagini
- Magari è anche necessario che queste immagini abbiamo una dimensione specifica
- Per velocizzare la ricerca delle immagini, possiamo usare un servizio che ci fornisce delle immagini placeholder

`http://via.placeholder.com/wxh` permette di creare un'immagine placeholder larga w pixel e alta h pixel

es:

- http://via.placeholder.com/100x100
- http://via.placeholder.com/200x100
- http://via.placeholder.com/100x200

<br>
<img src="http://via.placeholder.com/100x100">

<img src="http://via.placeholder.com/200x100" style="position:relative; top: -100px; right: -300px;">


<img src="http://via.placeholder.com/100x200" style="position:relative; top: -300px; right: -700px;">


---

# Image as a Service

- Un'altro servizio molto interessante è: `https://picsum.photos/w/h`
- Restituisce un'immagine casuale larga w pixel e alta h pixel

- https://picsum.photos/100/100
- https://picsum.photos/200/100
- https://picsum.photos/100/200

<br>
<img src="https://picsum.photos/100/100">

<img src="https://picsum.photos/200/100" style="position:relative; top: -100px; right: -300px;">


<img src="https://picsum.photos/100/200" style="position:relative; top: -300px; right: -700px;">


---

# Immagini Resposive

- Vediamo come creare un'immagine responsive, che si adatta alle dimensioni del suo contenitore

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

```html
<div class="container1">
    <img src="https://picsum.photos/500/500"  
    class="responsive">
</div>

<div class="container2">
    <img src="https://picsum.photos/500/500"  
    class="responsive">
</div>
```
</div>

<div> <!-- col2 -->

```css
.container1 {
    border: 10px solid green;
    width: 200px;
    height: 200px;
}

.container2 {
    border: 10px solid green;
    width: 300px;
    height: 300px;
    position: relative;
    left: 300px;
    top: -200px;
}

.responsive {
  width: 100%;
  height: auto;
}
```
</div>

<div> <!-- col3 -->

</div>

</div>


---

# Immagini Resposive

<div class="container1">
    <img src="https://picsum.photos/500/500"  
    class="responsive">
</div>

<div class="container2">
    <img src="https://picsum.photos/500/500"  
    class="responsive">
</div>

<div class="container3">
    <img src="https://picsum.photos/500/500"  
    class="responsive">
</div>

<style>

.container1 {
    border: 10px solid green;
    width: 100px;
    height: 100px;
}

.container2 {
    border: 10px solid green;
    width: 200px;
    height: 200px;
    position: relative;
    left: 150px;
    top: -100px;
}

.container3 {
    border: 10px solid green;
    width: 300px;
    height: 300px;
    position: relative;
    left: 400px;
    top: -300px;
}

.responsive {
  width: 100%;
  height: auto;
}

</style>

---

# Immagini Resposive

<div class="container1">
    <img src="https://picsum.photos/500/500"  
    class="responsive">
</div>


<style>

.container1 {
    border: 10px solid green;
    width: 50%;
    margin: auto;
}

.responsive {
  width: 100%;
  height: auto;
}

</style>

---

# Esercizio css_36

Grid

1. Creare un file e salvarlo come *|cognome|_esercizio_css_36.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_36.css*
3. Creare in HTML e CSS utilizzando Grid, la griglia raffigurata sotto sia per desktop che per mobile con media queries
4. Fornire il link github al file con nome |cognome|_esercizio_css_36.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_36.css

---

# Esercizio css_36

Desktop

<img src="/media/css_75.png" width="850" style="margin:auto;">


---

# Esercizio css_36

Mobile

<img src="/media/css_76.png" width="250" style="margin:auto;">

---

# Esercizio css_37

Grid

1. Creare un file e salvarlo come *|cognome|_esercizio_css_37.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_37.css*
3. Creare in HTML e CSS utilizzando Grid, la griglia raffigurata sotto sia per desktop che per mobile con media queries
4. Fornire il link github al file con nome |cognome|_esercizio_css_37.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_37.css

---

# Esercizio css_37

Desktop

<img src="/media/css_77.png" width="700" style="margin:auto;">


---

# Esercizio css_37

Mobile

<img src="/media/css_78.png" width="220" style="margin:auto;">


---

# Esercizio css_38

Grid

1. Creare un file e salvarlo come *|cognome|_esercizio_css_38.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_38.css*
3. Realizzare il proprio CV (vedi esempio) utilizzando il grid layout e grid of grid in modo che sia responsive
4. Fornire il link github al file con nome |cognome|_esercizio_css_38.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_38.css

---

# Esercizio css_38

CV

<img src="/media/css_79.png" width="630" style="margin:auto;">


---

&nbsp;
<center>
<img src="/media/css_21.jpg" width="800" />
</center>
