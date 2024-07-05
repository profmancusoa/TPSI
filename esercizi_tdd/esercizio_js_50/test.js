import { order } from './es_50.js';
import { input } from './in.js';
import { output } from './out.js';

describe("ESERCIZIO 50", () => {
    test('TEST 01', () => {
        expect(order([1, 4, 7, 3, 11, 12, 20]).toString()).toBe([1, 7, 3, 11, 4, 12, 20].toString());
    });

    test('TEST 02', () => {
        expect(order([
            54, 96, 18, 91, 7, 28, 15, 82,
            81, 2, 20, 5, 42, 47, 36, 65,
            67, 11, 71, 66, 56, 99, 62, 11,
            64
        ]).toString()).toBe([
            7, 2, 5, 47, 67, 11, 71, 11,
            54, 96, 18, 91, 28, 15, 82, 81,
            20, 42, 36, 65, 66, 56, 99, 62,
            64
        ].toString());
    });

    test('TEST 03', () => {
        expect(order([
            23, 71, 49, 72, 11, 50, 50, 2, 15, 62, 42,
            9, 66, 44, 37, 75, 22, 55, 8, 32, 6, 75,
            62, 64, 20, 77, 37, 97, 67, 8, 63, 80, 30,
            30, 93, 91, 95, 52, 44, 8, 74, 98, 48, 87,
            81, 78, 45, 42, 51, 64
        ]).toString()).toBe([
            23, 71, 11, 2, 37, 37, 97, 67, 49, 72, 50,
            50, 15, 62, 42, 9, 66, 44, 75, 22, 55, 8,
            32, 6, 75, 62, 64, 20, 77, 8, 63, 80, 30,
            30, 93, 91, 95, 52, 44, 8, 74, 98, 48, 87,
            81, 78, 45, 42, 51, 64
        ].toString());
    });

    test('TEST 04', () => {
        expect(order(Array(10000).fill(69)).toString()).toBe(Array(10000).fill(69).toString());
    });

    test('TEST 05', () => {
        expect(order(input).toString()).toBe(output.toString());
    });
});
