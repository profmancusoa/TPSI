import { prod_pow2 } from './es_46.js'
import fs from 'fs';

describe("ESERCIZIO 46", () => {
    test('TEST 01', () => {
        expect(prod_pow2([1, 2, 3, 4, 5])).toBe(14400);
    });

    test('TEST 02', () => {
        expect(prod_pow2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(13168189440000);
    });

    test('TEST 03', () => {
        expect(prod_pow2(Array.from(Array(69).keys()))).toBe(0);
    });

    test('TEST 04', () => {
        expect(prod_pow2(
            fs.readFileSync('esercizio_js_18/input_test04.txt', 'utf-8').split('\n')
        )).toBe(9.732575642175275e+291);
    });

    test('TEST 05', () => {
        expect(prod_pow2(
            fs.readFileSync('esercizio_js_18/input_test05.txt', 'utf-8').split('\n')
        )).toBe(Infinity);
    });
});