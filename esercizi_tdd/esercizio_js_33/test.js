import { concatenateN } from "./es_33.js";
import fs from 'fs';

describe("ESERCIZIO 33", () => {
    test('TEST 01', () => {
        expect(concatenateN("ciao!", 4)).toBe("ciao!ciao!ciao!ciao!");
    });

    test('TEST 02', () => {
        expect(concatenateN("ciro", 0)).toBe("");
    }); 

    test('TEST 03', () => {
        expect(concatenateN("echo...", 10)).toBe("echo...echo...echo...echo...echo...echo...echo...echo...echo...echo...");
    });

    test('TEST 04', () => {
        expect(concatenateN("PHP me**a!!!\n", 104000)).toBe(
            fs.readFileSync("esercizio_js_10m/input_test04.txt", "utf-8")
        );
    });

    test('TEST 05', () => {
        expect(concatenateN("cane\n", 1069000)).toBe(
            fs.readFileSync("esercizio_js_10m/input_test05.txt", "utf-8")
        );
    });
});