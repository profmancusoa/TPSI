import { upper_case } from './es_10f.js';

describe("ESERCIZIO 10f", () => {
    test('TEST 01', () => {
        expect(upper_case('ciao mondo!!!')).not.toBe('ciao mondo');
    });

    test('TEST 02', () => {
        expect(upper_case('ciao mondo!!!')).toBe('CIAO MONDO!!!');
    });

    test('TEST 03', () => {
        expect(upper_case('ciaO Mondo!!!')).toBe('CIAO MONDO!!!');
    });

    test('TEST 04', () => {
        expect(upper_case('')).toBe('');
    });

    test('TEST 05', () => {
        expect(upper_case('CIAO mondo!!!')).toBe('CIAO MONDO!!!');
    });
});

