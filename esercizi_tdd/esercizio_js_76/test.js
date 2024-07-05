import { Orario } from "./es_76.js";

const ora1 = new Orario(24, 10, 30);
const ora2 = new Orario(23, 59, 59);
const ora3 = new Orario(10, 20, 30);
const ora4 = new Orario(11, 20, 30);

describe("ESERCIZIO 76", () => {
  test("Test ora1-ora2", () => {
    expect(ora1.diff(ora2)).toStrictEqual({
      milliseconds: 29000,
      seconds: 29,
      minutes: 49,
      hours: 1,
    });
  });
  test("Test ora2-ora1", () => {
    expect(ora2.diff(ora1)).toStrictEqual({
      milliseconds: 29000,
      seconds: 29,
      minutes: 49,
      hours: 1,
    });
  });
  test("Test ora3-ora1", () => {
    expect(ora3.diff(ora1)).toStrictEqual({
      milliseconds: 0,
      seconds: 0,
      minutes: 10,
      hours: 14,
    });
  });
  test("Test ora4-ora1", () => {
    expect(ora4.diff(ora1)).toStrictEqual({
      milliseconds: 0,
      seconds: 0,
      minutes: 10,
      hours: 13,
    });
  });
  test("Test ora4-ora1", () => {
    expect(ora2.diff(ora4)).toStrictEqual({
      milliseconds: 29000,
      seconds: 29,
      minutes: 39,
      hours: 12,
    });
  });
});
