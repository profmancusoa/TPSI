import { abbreviazione } from './es_23.js';

describe("ESERCIZIO 23", () => {
    test('TEST 01', () => {
        expect(abbreviazione('Antonio Mancuso')).toBe('Antonio M.');
    });

    test('TEST 02', () => {
        expect(abbreviazione('marco rossi')).toBe('Marco R.');
    });

    test('TEST 03', () => {
        expect(abbreviazione('giOVANNI vErDi')).toBe('GiOVANNI V.');
    });

    test('TEST 04', () => {
        expect(abbreviazione('MileNA m.')).toBe('MileNA M.');
    });

    test('TEST 05', () => {
        expect(abbreviazione('linux torvald')).not.toBe('Linux t.');
    });
});

