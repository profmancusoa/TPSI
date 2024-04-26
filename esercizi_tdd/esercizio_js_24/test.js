import { psw_gen } from "./es_24.js";

const regex = /^[a-zA-Z0-9]+$/;
let generated;

describe("ESERCIZIO 24", () => {
    test('TEST 01', () => {
        generated = psw_gen(5).join('');
        expect(generated.length + +regex.test(generated)).toBe(6);
    });

    test('TEST 02', () => {
        generated = psw_gen(69).join('');
        expect(generated.length + +regex.test(generated)).toBe(70);
    });

    test('TEST 03', () => {
        generated = psw_gen(123).join('');
        expect(generated.length + +regex.test(generated)).toBe(124);
    });

    test('TEST 04', () => {
        generated = psw_gen(102349).join('');
        expect(generated.length + +regex.test(generated)).toBe(102350);
    });

    test('TEST 05', () => {
        generated = psw_gen(1900069).join('');
        expect(generated.length + +regex.test(generated)).toBe(1900070);
    });
});
