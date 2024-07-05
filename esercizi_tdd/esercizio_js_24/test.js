import { protect_email } from './es_24.js';

describe("ESERCIZIO 24", () => {
    test('TEST 01', () => {
        expect(protect_email('antonio.mancuso@istitutoagnelli.it')).toBe('antonio...@istitutoagnelli.it');
    });

    test('TEST 02', () => {
        expect(protect_email('marco.pai@gmail.com')).toBe('marc...@gmail.com');
    });

    test('TEST 03', () => {
        expect(protect_email('massimoRossi@gmail.it')).toBe('massim...@gmail.it');
    });

    test('TEST 04', () => {
        expect(protect_email('a@email.it')).toBe('...@email.it');
    });

    test('TEST 05', () => {
        expect(protect_email('andre@email.com')).toBe('an...@email.com');
    });
});

