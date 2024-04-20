import { untokenize } from './es_10c.js';

describe("ESERCIZIO 10c", () => {
    test('TEST 01', () => {
        expect(untokenize('Nel mezzo del cammin di nostra vita')).toBe('Nel-mezzo-del-cammin-di-nostra-vita');
    });

    test('TEST 02', () => {
        expect(untokenize('supercalifragilistiche')).toBe('supercalifragilistiche');
    });

    test('TEST 03', () => {
        expect(untokenize('Nel mezzo   del cammin       di')).toBe('Nel-mezzo---del-cammin-------di');
    });

    test('TEST 04', () => {
        expect(untokenize('')).toBe('');
    });

    test('TEST 05', () => {
        expect(untokenize('Nel mezzo-del-cammin  di')).toBe('Nel-mezzo-del-cammin--di');
    });
});

