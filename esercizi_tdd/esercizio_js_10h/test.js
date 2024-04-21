import { tronca } from "./es_10h.js";

describe("ESERCIZIO 10h", () => {
    test('TEST 01', () => {
        expect(tronca('Ciao Mondo la terra gira!!!', 10)).toBe('Ciao Mondo...');
    });

    test('TEST 02', () => {
        expect(tronca('So Nvidia FUCK YOU!!!', 12)).toBe('So Nvidia FU...');
    });

    test('TEST 03', () => {
        expect(tronca('Ciro Esposito', 15)).toBe('Ciro Esposito');
    });

    test('TEST 04', () => {
        expect(tronca('C`era una volta tanto tempo fa in una galassia', 27)).toBe('C`era una volta tanto tempo...');
    });

    test('TEST 05', () => {
        expect(tronca('gahboot1aezaeMai3xouP9AhR4EiToowai5eKofaesuere9boomoh0ahCho5Utid4za6ohyoo5paeterunietievei3fee7aekai', 69)).toBe('gahboot1aezaeMai3xouP9AhR4EiToowai5eKofaesuere9boomoh0ahCho5Utid4za6o...');
    });
});
