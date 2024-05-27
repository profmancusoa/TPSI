import { rm_string } from "./es_10q";
import fs from 'fs';

describe("ESERCIZIO 10q", () => {
    test('TEST 01', () => {
        expect(rm_string("The quick brown fox jumps over the lazy dog", "the")).toBe("The quick brown fox jumps over lazy dog");
    });

    test('TEST 02', () => {
        expect(rm_string("The quick brown fox jumps over the lazy dog", "ciro")).toBe("The quick brown fox jumps over the lazy dog");
    });

    test('TEST 03', () => {
        expect(rm_string("ciro ciro ciro", "ciro")).toBe("ciro ciro");
    });

    test('TEST 04', () => {
        expect(rm_string(
            fs.readFileSync('esercizio_js_10q/input_test04.txt', 'utf-8'),
            'finibus'
        )).toBe(fs.readFileSync('esercizio_js_10q/output_test04.txt', 'utf-8'));
    });

    test('TEST 05', () => {
        expect(rm_string(
            fs.readFileSync('esercizio_js_10q/input_test05.txt', 'utf-8'),
            'Paper'
        )).toBe(fs.readFileSync('esercizio_js_10q/output_test05.txt', 'utf-8'));
    });
});