import { only_upper } from './es_45.js';
import fs from 'fs';

describe('ESERCIZIO 45', () => {
    test('TEST 01', () => {
        expect(only_upper('ccHEewLtfL2Oq sWrdsOgtvfdcRwLffDff').toString()).toBe('H,E,L,L,O,W,O,R,L,D');
    });

    test('TEST 02', () => {
        expect(only_upper('c`era una volta tanto tempo fa in una galassia lontana lontana ...').toString()).toBe('');
    });

    test('TEST 03', () => {
        expect(only_upper(
            "nella quiete della notte, il vento Sussurra tra le foglie degli alberi, Creando un'aRmonIa soTTile che avvOlge ogni angolo Di questo luogo silenzioso. le stelle brillAno come picCole promesse cHe svaniscono nel cielo infinito, mentre lA luna osserva con il suo sguardo misTerioso. le ombre si allunGano lungo il terreno, danzando in un balletto silenzioso sotto il Pallido bagliore lunare. è un momento di pace e contemplazione, in cui il mondo sembra rallenTare il suo ritmo frenetico e lasciare spazio alla riflessione e alla serenità. in questo momento di quiete, ci si sente parte di qualcosa di più grande, immersi nella bellezza e nell'armonia della notte."
        ).toString()).toBe('S,C,R,I,T,T,O,D,A,C,H,A,T,G,P,T');
    });

    test('TEST 04', () => {
        expect(only_upper(
            fs.readFileSync('esercizio_js_17/input_test04.txt', 'utf-8')
        ).toString()).toBe(
            fs.readFileSync('esercizio_js_17/output_test04.txt', 'utf-8').split('\n').toString()
        );
    });

    test('TEST 05', () => {
        expect(only_upper(
            fs.readFileSync('esercizio_js_17/input_test05.txt', 'utf-8')
        ).toString()).toBe(
            fs.readFileSync('esercizio_js_17/output_test05.txt', 'utf-8').split('\n').toString()
        );
    });
});
