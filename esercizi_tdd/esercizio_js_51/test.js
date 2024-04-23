import { Automobile } from "./es_51.js";

const car = new Automobile();

car.persone = 5;
car.status = true;
car.velocity = 40;
car.add_ratio();

describe("ESERCIZIO 51", () => {
    test('Auto persone', () => {
        expect(car.persone).toBe(5);
    });
    test('Auto status', () => {
        expect(car.status).toBe(true);
    });
    test('Auto velocity', () => {
        expect(car.velocity).toBe(40);
    });
    test('Auto more ratio', () => {
        expect(car.ratio).toBe(2);
    });
    test('Auto ratio min 1', () => {
        car.dim_ratio();
        expect(car.ratio).toBe(1);
    });
    test('Auto ratio max 6', () => {
        for (let index = 0; index < 10; index++) {
            car.add_ratio();
        }
        expect(car.ratio).toBe(6);
    });
    test('Auto off', () => {
        car.status = false;
        expect(car.velocity).toBe(0);
        expect(car.status).toBe(false);
        expect(car.persone).toBe(5);
    });
});