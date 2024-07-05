import { Automobile, Animale, Poligono } from "./es_75.js";

const car = new Automobile();
car.brand = "Honda";
car.model = "Civic Type R";
car.year = 2023;

const animale = new Animale();
animale.mammifero = true;
animale.peso = 100;
animale.specie = "Scimmia";

const poligono = new Poligono();
poligono.equiangolo = true;
poligono.add_lato(10);
poligono.triangolo = false;

describe("ESERCIZIO 75", () => {
    test('Test car enum', () => {
        expect(car.enumera()).toBe(JSON.stringify({
            _brand: "Honda",
            _model: "Civic Type R",
            _year: 2023
        }));
    });
    test('Test animal enum', () => {
        expect(animale.enumera()).toBe(JSON.stringify({
            _mammifero: true,
            _peso: 100,
            _specie: "Scimmia"
        }));
    });
    test('Test poligono enum', () => {
        expect(poligono.enumera()).toBe(JSON.stringify({
            _lati: [10],
            _equiangolo: true,
            _triangolo: false
        }));
    });
});