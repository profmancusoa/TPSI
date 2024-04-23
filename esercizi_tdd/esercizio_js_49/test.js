import { Fibonacci } from './es_49.js';

const fib = new Fibonacci();

describe("ESERCIZIO 49", () => {
    test('Fibonacci 5', () => {
        expect(fib.calc(5)).toBe(5);
    });
    test('Fibonacci 10', () => {
        expect(fib.calc(10)).toBe(55);
    });
    test('Fibonacci 20', () => {
        expect(fib.calc(20)).toBe(6765);
    });
    test('Fibonacci 30', () => {
        expect(fib.calc(30)).toBe(832040);
    });
    test('Fibonacci 40', () => {
        expect(fib.calc(40)).toBe(102334155);
    });
});