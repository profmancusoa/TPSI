class Calcolatrice {
  constructor(n) {
    this.val = n;
  }

  add(n) { this.val += n; return this;}
  sub(n) { this.val -= n; return this;}
  mul(n) { this.val *= n; return this;}
  div(n) { this.val /= n; return this;}
  ris() { return this.val; }
}

let calc = new Calcolatrice(6);
calc.sub(2).mul(5).add(8).div(4)
console.log(`6 - 2 * 5 + 8 / 4 =  ${calc.ris()}`);

