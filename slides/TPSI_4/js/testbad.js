console.clear();

class Studente {
    constructor(nome, classe) {
        this.nome = nome;
        this.classe = classe;
    }
    get nome() {
        return this._nome.toUpperCase();
    }
    set nome(valore) {
        this._nome = "**".concat(valore).concat("**");
    }
    Saluta() {
        console.log(`Ciao sono lo studente ${this.nome} della classe ${this.classe}`);
    }
}

let mario = new Studente("Mario", 4);
console.log(mario.nome);

  