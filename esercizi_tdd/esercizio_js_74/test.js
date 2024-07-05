import { Automobile } from "./es_74.js";

const car = new Automobile();
car.brand = "Honda";
car.model = "Civic Type R";
car.year = 2023;
car.color = "Red";
car.cc = 3000;

describe("ESERCIZIO 74", () => {
    test('Get brand', () => {
        expect(car.brand).toBe("Honda");
    });
    test('Get model', () => {
        expect(car.model).toBe("Civic Type R");
    });
    test('Get year', () => {
        expect(car.year).toBe(2023);
    });
    test('Get color', () => {
        expect(car.color).toBe("Red");
    });
    test('Get cc', () => {
        expect(car.cc).toBe(3000);
    });
});