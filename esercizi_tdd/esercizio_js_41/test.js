import { new_arr } from "./es_41.js";

describe("ESERCIZIO 41", () => {
    test('TEST 01', () => {
        expect(new_arr(3, 'a').toString()).toBe('a,a,a');
    });

    test('TEST 02', () => {
        expect(new_arr(10, 69).toString()).toBe('69,69,69,69,69,69,69,69,69,69');
    });

    test('TEST 03', () => {
        expect(new_arr('100', 3).toString()).toBe(Array(100).fill(3).toString());
    });

    test('TEST 04', () => {
        expect(new_arr(10000, 'ciro').toString()).toBe(Array(10000).fill('ciro').toString());
    });

    test('TEST 05', () => {
        expect(new_arr(10000000).toString()).toBe(Array(10000000).fill().toString());
    });
});