import { is_anagram } from "./es_32.js";

describe("ESERCIZIO 32", () => {
  test("TEST 01", () => {
    expect(
      is_anagram([
        "omar",
        "sette",
        "roma",
        "teste",
        "mora",
        "colazione",
        "locazione",
      ])
    ).toStrictEqual(["mora", "teste", "locazione"]);
  });
  test("TEST 02", () => {
    expect(
      is_anagram([
        "ingolfare",
        "fragoline",
        "ciro",
        "pippo",
        "Linus Torvalds",
        "remo",
        "more",
        "pegni",
        "pigne",
        "Gennaro",
        "Nvidia",
      ])
    ).toStrictEqual([
      "fragoline",
      "ciro",
      "pippo",
      "Linus Torvalds",
      "more",
      "pigne",
      "Gennaro",
      "Nvidia",
    ]);
  });
  test("TEST 03", () => {
    expect(
      is_anagram([
        "valentino rossi",
        "il rosso inventa",
        "giacomo laino",
        "ciao mago lino",
        "dormitory",
        "dirty room",
        "the eyes",
        "they see",
      ])
    ).toStrictEqual([
      "valentino rossi",
      "il rosso inventa",
      "giacomo laino",
      "ciao mago lino",
      "dormitory",
      "dirty room",
      "the eyes",
      "they see",
    ]);
  });
});
