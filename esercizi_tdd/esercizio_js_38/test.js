import { reverse } from "./es_38.js";

describe("ESERCIZIO 38", () => {
    test('TEST 01', () => {
        expect(reverse([1, 2, 3]).toString()).toBe([3, 2, 1].toString());
    });

    test('TEST 02', () => {
        expect(reverse('ITOPINONAVEVANONIPOTI'.split('')).toString()).toBe('I,T,O,P,I,N,O,N,A,V,E,V,A,N,O,N,I,P,O,T,I');
    });

    test('TEST 03', () => {
        expect(reverse(
            Array.from(Array(104).keys())
        ).toString()).toBe(
            Array.from(Array(104).keys()).reverse().toString()
        );
    });

    test('TEST 04', () => {
        let l = Array(69000).fill().map(_ => Math.floor(Math.random() * 100));
        expect(reverse(l).toString()).toBe(l.reverse().toString());
    });

    test('TEST 05', () => {
        let l = Array(200000).fill().map(_ => Math.floor(Math.random() * 100));
        expect(reverse(l).toString()).toBe(l.reverse().toString());
    });
});
