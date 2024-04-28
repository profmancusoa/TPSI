import {sub_arr} from './es_19.js';
import fs from 'fs';

describe("ESERCIZIO 19", () => {
    test('TEST 01', () => {
        expect(sub_arr([0, 1, 2, 3, 4], 3).toString()).toBe('0,1,2');
    });

    test('TEST 02', () => {
        expect(sub_arr([
            0, 1, 2 ,3, 4,
            5, 6, 7, 8, 9,
        ], -1).toString()).toBe('');
    });

    test('TEST 03', () => {
        expect(sub_arr(
            Array.from(Array(1000).keys()), 69
        ).toString()).toBe(
            Array.from(Array(69).keys()).toString()
        );
    });

    test('TEST 04', () => {
        expect(sub_arr(
            fs.readFileSync('esercizio_js_19/input_test04.txt', 'utf-8').split('\n'), 1633
        ).toString().replaceAll(',', '\n')).toBe(
            fs.readFileSync('esercizio_js_19/output_test04.txt', 'utf-8')
        );
    });

    test('TEST 05', () => {
        expect(sub_arr(
            fs.readFileSync('esercizio_js_19/input_test05.txt', 'utf-8').split('\n'), 3177720
        ).toString().replaceAll(',', '\n')).toBe(
            fs.readFileSync('esercizio_js_19/output_test05.txt', 'utf-8')
        );
    });
});
