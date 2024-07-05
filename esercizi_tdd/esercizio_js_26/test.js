import { capitalize } from './es_26.js';

describe("ESERCIZIO 26", () => {
    test('TEST 01', () => {
        expect(capitalize('ciamo mondo!!!')).toBe('Ciamo mondo!!!');
    });

    test('TEST 02', () => {
        expect(capitalize('o0ciao-mondo!')).toBe('O0ciao-mondo!');
    });

    test('TEST 03', () => {
        expect(capitalize('questo mondo in JS')).not.toBe('questo mondo in JS');
    });

    test('TEST 04', () => {
        expect(capitalize('ciao Mondo')).toBe('Ciao Mondo');
    });

    test('TEST 05', () => {
        expect(capitalize('')).toBe('');
    });
});

