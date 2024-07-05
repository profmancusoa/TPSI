import { no_copies } from "./es_55.js";
import fs from 'fs';

describe("ESERCIZIO 55", () => {
    test('TEST 01', () => {
        expect(no_copies([1, 2, 3, 1, 2, 4]).toString()).toBe([1, 2, 3, 4].toString());
    });

    test('TEST 02', () => {
        expect(no_copies([
            5, 95,  1,  8, 48, 76, 99, 61,
           34, 34, 45, 24, 18, 59, 30, 77,
           19, 71, 44, 97, 50, 40, 25,  3,
           76
         ]).toString()).toBe([
            5, 95,  1,  8, 48, 76, 99, 61,
           34, 45, 24, 18, 59, 30, 77, 19,
           71, 44, 97, 50, 40, 25,  3
         ].toString());
    });

    test('TEST 03', () => {
        expect(no_copies([
            57,  4, 92, 56, 55, 62, 10, 37, 93, 22, 48, 40,
            45, 48, 50, 60, 78,  1, 68, 48, 11, 34, 92,  4,
            59, 69, 30, 92, 19, 68, 69, 55, 26, 26, 49, 30,
            72, 28, 91,  8, 78,  2, 39, 14, 95, 98, 85, 94,
             9, 32,  7,  4, 24, 54, 22, 62,  0,  1, 72, 74,
            56, 67, 93,  9, 67, 72, 95, 22, 75
          ]).toString()).toBe([
            57,  4, 92, 56, 55, 62, 10, 37, 93, 22, 48,
            40, 45, 50, 60, 78,  1, 68, 11, 34, 59, 69,
            30, 19, 26, 49, 72, 28, 91,  8,  2, 39, 14,
            95, 98, 85, 94,  9, 32,  7, 24, 54,  0, 74,
            67, 75
          ].toString());
    });
 
    test('TEST 04', () => {
        let input = fs.readFileSync('esercizio_js_27/input_test04.txt', "utf-8").split('\n');
        let output = fs.readFileSync('esercizio_js_27/output_test04.txt', "utf-8").split('\n');
        expect(no_copies(input).toString()).toBe(output.toString());
    });

    test('TEST 05', () => {
        expect(no_copies(Array.from(Array(69000).keys())).toString()).toBe(Array.from(Array(69000).keys()).toString());
    });
});
