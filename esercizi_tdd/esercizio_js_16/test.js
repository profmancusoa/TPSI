import { ordina } from './es_16.js';
import fs from 'fs';

describe('ESERCIZIO 16', () => {
    test('TEST 01', () => {
        expect(JSON.stringify(ordina([
            { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
            { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
            { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
        ]))).toBe(
            JSON.stringify([
                {
                    author: 'Steve Jobs',
                    title: 'Walter Isaacson',
                    libraryID: 4264
                },
                {
                    author: 'Bill Gates',
                    title: 'The Road Ahead',
                    libraryID: 1254
                },
                {
                    author: 'Suzanne Collins',
                    title: 'Mockingjay: The Final Book of The Hunger Games',
                    libraryID: 3245
                }
            ])
        );
    });

    test('TEST 02', () => {
        expect(JSON.stringify(ordina([
            { author: 'Gennaro', title: 'Napoli 1000 bellezze', libraryID: 3246 },
            { author: 'E. Bandolino', title: 'Sistemi e Reti (spiegato MALE)', libraryID: 3245 },
            { author: 'Ciro Esposito', title: 'L`arte dello scippo', libraryID: 3225 },
            { author: 'Bill Gates', title: 'WINZOZ', libraryID: 1554 },
            { author: 'B. W. Kernighan & D. M. Ritchie', title: 'The C programming language', libraryID: 1978 }
        ]))).toBe(JSON.stringify([
            { author: 'Bill Gates', title: 'WINZOZ', libraryID: 1554 },
            { author: 'B. W. Kernighan & D. M. Ritchie', title: 'The C programming language', libraryID: 1978 },
            { author: 'E. Bandolino', title: 'Sistemi e Reti (spiegato MALE)', libraryID: 3245 },
            { author: 'Gennaro', title: 'Napoli 1000 bellezze', libraryID: 3246 },
            { author: 'Ciro Esposito', title: 'L`arte dello scippo', libraryID: 3225 }
        ]));
    });

    test('TEST 03', () => {
        let l = [
            { author: 'john', title: 'XML', libraryID: 0 },
            { author: 'Kevin', title: 'XAAS', libraryID: 1 },
            { author: 'Dennis', title: 'ZTL', libraryID: 2 },
            { author: 'Paul', title: 'Zelda', libraryID: 3 }
        ];
        expect(JSON.stringify(ordina(l))).toBe(JSON.stringify([
            { author: 'Dennis', title: 'ZTL', libraryID: 2 },
            { author: 'Paul', title: 'Zelda', libraryID: 3 },
            { author: 'john', title: 'XML', libraryID: 0 },
            { author: 'Kevin', title: 'XAAS', libraryID: 1 },
        ]));
    });

    test('TEST 04', () => {
        expect(JSON.stringify(ordina(
            JSON.parse(fs.readFileSync('esercizio_js_16/input_test04.json', 'utf-8'))
        ))).toBe(
            fs.readFileSync('esercizio_js_16/output_test04-5.json', 'utf-8')
        );
    });

    test('TEST 05', () => {
        expect(JSON.stringify(ordina(
            JSON.parse(fs.readFileSync('esercizio_js_16/input_test05.json', 'utf-8'))
        ))).toBe(
            fs.readFileSync('esercizio_js_16/output_test04-5.json', 'utf-8')
        );
    });
});