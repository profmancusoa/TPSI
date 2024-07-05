import { search_words } from "./es_31.js";

describe("ESERCIZIO 31", () => {
    test('TEST 01', () => {
        expect(search_words('C`era una volta coding che lavorava nel settore creativo')).toBe('C`era una volta coding che lavorava nel settore creativo');
    });

    test('TEST 02', () => {
        expect(search_words('marco rossi')).toBe('parole non trovate');
    });

    test('TEST 03', () => {
        expect(search_words('Picasso era creativo')).toBe('Picasso era creativo');
    });

    test('TEST 04', () => {
        expect(search_words('La creatività è bella')).toBe('parole non trovate');
    });

    test('TEST 05', () => {
        expect(search_words('Il coding conquisterà il mondo')).toBe('Il coding conquisterà il mondo');
    });
});
