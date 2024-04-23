import { gen_arr } from "./es_26.js";

let generated;

describe("ESERCIZIO 26", () => {
    test('TEST 01', () => {
        generated = gen_arr(5);
        expect(+(generated[0].toString() == generated[1].reverse().toString()) + generated.flat().length).toBe(11);
    });

    test('TEST 02', () => {
        generated = gen_arr(69);
        expect(+(generated[0].toString() == generated[1].reverse().toString()) + generated.flat().length).toBe(139);
    });

    test('TEST 03', () => {
        generated = gen_arr(104);
        expect(+(generated[0].toString() == generated[1].reverse().toString()) + generated.flat().length).toBe(209);
    });

    test('TEST 04', () => {
        generated = gen_arr(6969);
        expect(+(generated[0].toString() == generated[1].reverse().toString()) + generated.flat().length).toBe(13939);
    });

    test('TEST 05', () => {
        generated = gen_arr(1040000);
        expect(+(generated[0].toString() == generated[1].reverse().toString()) + generated.flat().length).toBe(2080001);
    });
});