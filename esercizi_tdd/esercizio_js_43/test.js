import { without } from "./es_43.js";
import fs from 'fs';

describe("ESERCIZIO 43", () => {
    test('TEST 01', () => {
        expect(without([1, 2, 3, 4], 3).toString()).toBe('1,2,4');
    });

    test('TEST 02', () => {
        expect(without([0, 1, 2, 3, 4], 5).toString()).toBe('0,1,2,3,4');
    });

    test('TEST 03', () => {
        expect(without(Array(104).fill(69), 69).toString()).toBe('');
    });

    test('TEST 04', () => {
        let l = Array.from(Array(690000).keys());
        expect(without(l, 0).toString()).toBe(l.slice(1,).toString());
    });

    test('TEST 05', () => {
        let input = fs.readFileSync('esercizio_js_15/input_test05.txt', 'utf-8').split('\n');
        expect(without(input, 4).toString().replaceAll(',', '\n')).toBe(
            fs.readFileSync('esercizio_js_15/output_test05.txt', 'utf-8')
        );
    });
});