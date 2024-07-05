import { dec_to_bin } from "./es_51.js";

describe("ESERCIZIO 51", () => {
    test('TEST 01', () => {
        expect(dec_to_bin('101')).toBe(5);
    });

    test('TEST 02', () => {
        expect(dec_to_bin('00001000010010010')).toBe(4242);
    });

    test('TEST 03', () => {
        expect(dec_to_bin('10101010101010101010101010101010101010')).toBe(183251937962);
    });

    test('TEST 04', () => {
        expect(dec_to_bin(Array(69).fill(1).join(''))).toBe(590295810358705700000);
    });

    test('TEST 05', () => {
        expect(dec_to_bin(Array(1000).fill(1).join(''))).toBe(1.0715086071862673e+301);
    });
});
