import { Orario } from "./es_78.js";

describe("ESERCIZIO 78", () => {
    test('Ora 1', () => {
        const ora1 = new Orario(24, 10, 30);
        const ora2 = new Orario(23, 59, 59);
        const ora3 = new Orario(10, 20, 30);
        expect(ora1.diff(ora2, ora3)).toEqual({ _hour: 10, _minute: 20, _second: 30 });
    });
    test('Ora 2', () => {
        const ora1 = new Orario(23, 10, 30);
        const ora2 = new Orario(21, 59, 59);
        const ora3 = new Orario(13, 20, 30);
        expect(ora1.diff(ora2, ora3)).toEqual({ _hour: 13, _minute: 20, _second: 30 });
    });
    test('Ora 3', () => {
        const ora1 = new Orario(13, 10, 30);
        const ora2 = new Orario(13, 20, 59);
        const ora3 = new Orario(13, 20, 30);
        expect(ora1.diff(ora2, ora3)).toEqual({ _hour: 13, _minute: 10, _second: 30 });
    });
});