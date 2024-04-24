import { unique_random_numbers } from "./es_34.js";

describe("ESERCIZIO 34", () => {
  test("TEST 01", () => {
    const res = unique_random_numbers(1, 10);
    expect(res.every((currentValue) => currentValue <= 10)).toBe(true);
    expect(res).toStrictEqual(Array.from(new Set(res)));
    expect(res).toStrictEqual(Array.from(new Set(res)).sort());
  });
  test("TEST 02", () => {
    const res = unique_random_numbers(10, 100);
    expect(res.every((currentValue) => currentValue <= 100)).toBe(true);
    expect(res).toStrictEqual(Array.from(new Set(res)));
    expect(res).toStrictEqual(Array.from(new Set(res)).sort());
  });
  test("TEST 03", () => {
    const res = unique_random_numbers(30, 100);
    expect(res.every((currentValue) => currentValue <= 100)).toBe(true);
    expect(res).toStrictEqual(Array.from(new Set(res)));
    expect(res).toStrictEqual(Array.from(new Set(res)).sort());
  });
  test("TEST 04", () => {
    const res = unique_random_numbers(100, 10000);
    expect(res.every((currentValue) => currentValue <= 10000)).toBe(true);
    expect(res).toStrictEqual(Array.from(new Set(res)));
    expect(res).toStrictEqual(Array.from(new Set(res)).sort());
  });
  test("TEST 05", () => {
    const res = unique_random_numbers(100000, Number.MAX_VALUE);
    expect(res.every((currentValue) => currentValue <= Number.MAX_VALUE)).toBe(true);
    expect(res).toStrictEqual(Array.from(new Set(res)));
    expect(res).toStrictEqual(Array.from(new Set(res)).sort());
  });
});
