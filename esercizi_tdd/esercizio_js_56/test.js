import { avg_age } from "./es_56.js";
import fs from 'fs';

describe("ESERCIZIO 56", () => {
    test('TEST 01', () => {
        expect(avg_age([
            { nome: "Marco", classe: 4, eta: 17 },
            { nome: "Alex", classe: 2, eta: 15 },
            { nome: "William", classe: 4, eta: 18 }
        ])).toBe(16.666666666666668);
    });

    test('TEST 02', () => {
        expect(avg_age([
            { nome: "Marco", classe: 4, eta: 17 },
            { nome: "Alex", classe: 2, eta: 15 },
            { nome: "William", classe: 4, eta: 18 },
            { nome: "Ciro", classe: 3, eta: 15 },
            { nome: "Gino", classe: 4, eta: 16 },
            { nome: "Pippo", classe: 5, eta: 19 },
            { nome: "Lino", classe: 1, eta: 13 },
            { nome: "Mario", classe: 1, eta: 14 },
            { nome: "Lillo", classe: 5, eta: 20 }
        ])).toBe(16.333333333333332);
    });

    test('TEST 03', () => {
        expect(avg_age(Array(123).fill().map((e, i) => e = {
            nome: 'p' + i.toString(),
            classe: Math.floor(Math.random() * 5) + 1,
            eta: i + 69
        }))).toBe(130);
    });

    test('TEST 04', () => {
        expect(avg_age(JSON.parse(fs.readFileSync('esercizio_js_28/input_test04.json', 'utf-8')))).toBe(49.6551);
    });

    test('TEST 05', () => {
        expect(avg_age(JSON.parse(fs.readFileSync('esercizio_js_28/input_test05.json', 'utf-8')))).toBe(49.528854);
    });
});
