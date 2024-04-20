import { capitalize_all } from './es_10e.js';

describe("ESERCIZIO 10e", () => {
    test('TEST 01', () => {
        expect(capitalize_all('ciao mondo la terra gira!!!')).toBe('Ciao Mondo La Terra Gira!!!');
    });

    test('TEST 02', () => {
        expect(capitalize_all('ciao Mondo la terra Gira!!!')).toBe('Ciao Mondo La Terra Gira!!!');
    });

    test('TEST 03', () => {
        expect(capitalize_all('')).toBe('');
    });

    test('TEST 04', () => {
        expect(capitalize_all('cIAO mONDO lA tERRA GIRA!!!')).toBe('CIAO MONDO LA TERRA GIRA!!!');
    });

    test('TEST 05', () => {
        expect(capitalize_all('cIao mOndo La Terra gira!!!')).toBe('CIao MOndo La Terra Gira!!!');
    });
});

