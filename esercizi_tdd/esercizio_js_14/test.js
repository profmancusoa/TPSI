import { swap } from "./es_14.js";
import fs from 'fs';

describe("ESERCIZIO 14", () => {
    test('TEST 01', () => {
        expect(swap([10, 20, 30, 40, 50], 0, 2).toString()).toBe('20,30,10,40,50');
    });

    test('TEST 02', () => {
        expect(swap([0, 1, 2, 3], -1, 0).toString()).toBe('3,0,1,2');
    });

    test('TEST 03', () => {
        expect(swap([0, 1, 2, 3], -2, -3).toString()).toBe('0,2,1,3');
    });

    test('TEST 04', () => {
        expect(swap([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3, -3).toString()).toBe('0,1,2,4,5,6,7,3,8,9');
    });

    test('TEST 05', () => {
        expect(swap(
            fs.readFileSync('esercizio_js_14/input_test05.txt', 'utf-8').split('\n'),
            692937, 671305
        ).toString().replaceAll(',', '\n')).toBe(
            fs.readFileSync('esercizio_js_14/output_test05.txt', 'utf-8')
        );
    });
});