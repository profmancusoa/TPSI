import { deduplicate } from "./es_59.js";

const array = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 100000)
);
const array2 = Array.from({ length: 1000000 }, () =>
  Math.floor(Math.random() * 1000000)
);
const array3 = Array.from({ length: 150000 }, () =>
  Math.floor(Math.random() * 150000)
);

describe("ESERCIZIO 59", () => {
  test("TEST 01", () => {
    expect(deduplicate([1, 3, 2, 1, 4, 3, 1])).toStrictEqual(
      new Set([1, 3, 2, 4])
    );
  });
  test("TEST 02", () => {
    expect(
      deduplicate([1, 3, 2, 1, 4, 3, 1, 5, 6, 10, 1010, 50, 50, 1, 32])
    ).toStrictEqual(new Set([1, 3, 2, 4, 5, 6, 10, 1010, 50, 32]));
  });
  test("TEST 03", () => {
    expect(deduplicate(array)).toStrictEqual(new Set(array));
  });
  test("TEST 04", () => {
    expect(deduplicate(array2)).toStrictEqual(new Set(array2));
  });
  test("TEST 05", () => {
    expect(deduplicate(array3)).toStrictEqual(new Set(array3));
  });
});
