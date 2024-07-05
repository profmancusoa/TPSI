import { special_concat } from "./es_32.js";

describe("ESERCIZIO 32", () => {
    test('TEST 01', () => {
        expect(special_concat('Ciro', 'Esposito')).toBe('EsroCiposito');
    });

    test('TEST 02', () => {
        expect(special_concat('Mario', 'Rossi Filippo')).toBe('parole non adatte');
    }); 

    test('TEST 03', () => {
        expect(special_concat('',  'verde')).toBe('parole non adatte');
    });

    test('TEST 04', () => {
        expect(special_concat('Mario', '')).toBe('parole non adatte');
    });

    test('TEST 05', () => {
        expect(special_concat('', '')).toBe('parole non adatte');
    });
});