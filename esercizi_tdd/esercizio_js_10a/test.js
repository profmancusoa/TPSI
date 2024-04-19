import { abbr } from './es_10a.js';

describe("ESERCIZIO 10a", () => {
    test('TEST 01', () => {
        expect(abbr('Antonio Mancuso')).toBe('Antonio M.');
    });

    test('TEST 02', () => {
        expect(abbr('marco rossi')).toBe('Marco R.');
    });

    test('TEST 03', () => {
        expect(abbr('giOVANNI vErDi')).toBe('GiOVANNI V.');
    });

    test('TEST 04', () => {
        expect(abbr('MileNA m.')).toBe('MileNA M.');
    });

    test('TEST 05', () => {
        expect(abbr('linux torvald')).not.toBe('Linux t.');
    });
});

