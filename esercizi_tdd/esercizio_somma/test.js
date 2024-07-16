import { somma } from './es_somma.js';

describe("ESERCIZIO SOMMA", () => {
    test('TEST 01', () => {
        expect(somma(2, 2)).toBe(4);
    });

    test('TEST 02', () => {
        expect(somma(3, 6)).toBe(9);
    });

    test('TEST 03', () => {
        expect(somma(5, -5)).toBe(0);
    });

    test('TEST 04', () => {
        expect(somma(-4, 4)).toBe(0);
    });

    test('TEST 05', () => {
        expect(somma(1, 1)).not.toBe(4);
    });
});

