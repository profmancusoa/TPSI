import { same } from "./es_12.js";

describe("ESERCIZIO 12", () => {
    test('TEST 01', () => {
        expect(same([1, 2, 3], [1, 2, 3])).toBe(true);
    });

    test('TEST 02', () => {
        expect(same([1, 2, 3, 4], [0, 1, 2, 3])).toBe(false);
    });

    test('TEST 03', () => {
        let l1 = Array.from(Array(69).keys());
        let l2 = Array.from(Array(104).keys());
        expect(same(l1, l2)).toBe(false);
    });

    test('TEST 04', () => {
        let l1 = Array.from(Array(10000).keys());
        let l2 = Array(10000).fill().map(e => Math.floor(Math.random() * 10))
        expect(same(l1, l2)).toBe(false);
    });

    test('TEST 05', () => {
        let l = Array.from(Array(69000000).keys());
        expect(same(l, l)).toBe(true);
    });
});
