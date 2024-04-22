import { TriangoloEquilatero, Quadrato, Pentagono, Esagono, Ettagono, Ottagono  } from "./es_43.js";

const triangolo = new TriangoloEquilatero();
const quadrato = new Quadrato();
const pentagono = new Pentagono();
const esagono = new Esagono();
const ettagono = new Ettagono();
const ottagono = new Ottagono();

describe("ESERCIZIO 43", () => {
    test('Triangolo area', () => {
        expect(Math.round(triangolo.fill_lati(15).area())).toBe(97);
    });

    test('Triangolo perimetro', () => {
        expect(triangolo.fill_lati(15).perimetro()).toBe(45);
    });

    test('Quadrato area', () => {
        expect(quadrato.fill_lati(10).area()).toBe(100);
    }); 

     test('Quadrato perimetro', () => {
        expect(quadrato.fill_lati(10).perimetro()).toBe(40);
    });    

    test('Pentagono area', () => {
        expect(Math.round(pentagono.fill_lati(21).area())).toBe(1517);
    });

    test('Pentagono perimetro', () => {
        expect(pentagono.fill_lati(21).perimetro()).toBe(105);
    });

    test('Esagono area', () => { 
        expect(Math.round(esagono.fill_lati(18).area())).toBe(842);
    });

    test('Esagono perimetro', () => { 
        expect(esagono.fill_lati(18).perimetro()).toBe(108);
    });

    test('Ettagono area', () => {
        expect(Math.round(ettagono.fill_lati(9).area())).toBe(589);
    });

    test('Ettagono perimetro', () => {
        expect(ettagono.fill_lati(9).perimetro()).toBe(63);
    });

    test('Ottagono area', () => {
        expect(Math.round(ottagono.fill_lati(12).area())).toBe(1390);
    });

    test('Ottagono perimetro', () => {
        expect(ottagono.fill_lati(12).perimetro()).toBe(96);
    });
});