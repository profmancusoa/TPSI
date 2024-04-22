/*
  {
    persone: number,
    velocity: number,
    ratio: number,
    status: boolean,
    add_ratio(): () => Automobile,
    dim_ratio(): () => Automobile,
  }
*/
export class Automobile {
  constructor() {}
  add_ratio() { // Aumenta la marcia di 1
    return this;
  }
  dim_ratio() { // Diminuisce la marcia di 1
    return this;
  }
}
