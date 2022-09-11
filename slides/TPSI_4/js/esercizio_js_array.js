// es 11
function inverti(arr) {
    let r= [];
    arr.forEach(item => r.unshift(item));
    return r;
}

// es 12 
firstArray.map((el, id) => secondArray[id] === el).every(item => item == true);

// es 27
function removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b)
};

//es 28
function getAverageAge(studenti) {
    return users.reduce((acc, studente) => acc + studente.eta, 0) / studenti.length;
  }
  
  //es 29
  function obj2names(studenti) {
    retrun studenti.map(item => item.nome);
  }

  //es 30

  function filterRange(arr, a, b) {
    // added brackets around the expression for better readability
    return arr.filter(item => (a <= item && item <= b));
  }

  // es 31
  function unique(arr) {
    return Array.from(new Set(arr));
  }

  // es 32 
  function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
      let sorted = word.toLowerCase().split('').sort().join(''); // (*)
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
  }
  
  let arr = ['omar', 'sette', 'roma', 'teste', 'mora', 'colazione', 'locazione']
;
  console.log(aclean(arr));

// es 33

let text = "JavaScript è un linguaggio molto bello. JavaScript è un linguaggio di alto livello";

let atext = text.split(' ')

let occorrenze = new Map();

atext.forEach(parola => {
    if (occorrenze.has(parola))
        occorrenze.set(parola, occorrenze.get(parola)  + 1);
    else
        occorrenze.set(parola, 1)
});

for(let [parola, freq] of occorrenze)
    console.log(`La parola "${parola}" ha frequenza: ${freq}`)

// es 34

function randOrdinati(N, M) {
    let numeri = new Set();
    
    while(numeri.size < N)
        numeri.add(Math.ceil(Math.random() * M));

    return Array(...numeri).sort((a,b) => b - a);
}

console.log(randOrdinati(3, 100));

//es 35


function dedup(stringa) {
    return [...new Set(stringa)].join("");
}

console.log(dedup("supercalifragilistichespiralidoso"))

//es 36
function isVocale(carattere) {
    return new Map([['a',0],['e',0],['i',0],['o',0],['u',0]]).has(carattere);
}

function occorrenzeVocali(stringa) {
    let occorrenze = new Map([['a',0],['e',0],['i',0],['o',0],['u',0]]);

    stringa.split('').forEach(carattere => {
        if(isVocale(carattere))
            occorrenze.set(carattere, occorrenze.get(carattere) + 1);
    });

    return occorrenze;
}

console.log(occorrenzeVocali("supercalifragilistichespiralidoso"))


// es 37


let { nome, role, isAdmin: is_admin = false} = utente;


// es 38

let [name, price, quantity] = item;

//es 39

let [three, five, four, two, six, one] = numbers;

//es 40

const [,, lastName] = students;