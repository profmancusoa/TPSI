import { tronca_parola } from "./es_36.js";
import fs from 'fs';

describe("ESERCIZIO 36", () => {
    test('TEST 01', () => {
        expect(tronca_parola("Facciamo tanti esercizi che ci fanno bene", 3)).toBe("Facciamo tanti esercizi");
    });

    test('TEST 02', () => {
        expect(tronca_parola("C'era una volta tanto tempo fa in una galassia...", -2)).toBe("C'era una volta tanto tempo fa in");
    });

    test('TEST 03', () => {
        expect(tronca_parola("Ciro Esposito", 0)).toBe("");
    });

    test('TEST 04', () => {
        expect(tronca_parola(
            fs.readFileSync("esercizio_js_10p/input_test04.txt", "utf-8"),
            104
        )).toBe(fs.readFileSync("esercizio_js_10p/output_test04.txt", "utf-8"));
    });

    test('TEST 05', () => {
        expect(tronca_parola(
            fs.readFileSync("esercizio_js_10p/input_test05.txt", "utf-8"),
            3774
        )).toBe(fs.readFileSync("esercizio_js_10p/input_test05.txt", "utf-8"));
    });
});