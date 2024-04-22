import { Calcolatrice } from "./es_42.js";

const calc = new Calcolatrice();

describe("ESERCIZIO 42", () => {
    test('TEST 01', () => {
        expect(calc.set_result(6).sub(2).mul(5).sum(8).div(4).get_result()).toBe(7);
    });

    test('TEST 02', () => {
        expect(calc.set_result(11).mul(3).sum(5).sub(5).div(11).get_result()).toBe(3);
    }); 

    test('TEST 03', () => {
        expect(calc.set_result(29).sum(2).sub(7).div(3).div(2).sum(1).mul(2).get_result()).toBe(10);
    });

    // Floating point tests
    test('TEST 04', () => { 
        expect(Math.round(calc.set_result(100).sum(23).sub(70).div(300).div(210).sum(31).mul(20).get_result())).toBe(620);
    });

    test('TEST 05', () => {
        expect(calc.set_result(3).div(2).result).toBe(1.5);
    });
});