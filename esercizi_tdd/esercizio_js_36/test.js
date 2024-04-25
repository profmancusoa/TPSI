import { count_vocals } from "./es_36.js";
import fs, { read } from "fs";

const wordlist_path = process.cwd().includes("esercizio_js_36")
  ? "../esercizio_js_33/"
  : "./esercizio_js_33/";

const base_path = process.cwd().includes("esercizio_js_36")
  ? "./"
  : "esercizio_js_36/";

describe("ESERCIZIO 36", () => {
  test("TEST 01", () => {
    expect(count_vocals("supercalifragilistichespiralidoso")).toStrictEqual(
      new Map([
        ["a", 3],
        ["e", 2],
        ["i", 6],
        ["o", 2],
        ["u", 1],
      ])
    );
  });
  test("TEST 02", () => {
    const wordlist1 = fs.readFileSync(wordlist_path.concat("wordlist1.txt"), "utf-8").split("\n");
    const solutions = wordlist1.map(x => count_vocals(x));
    const real_solution = JSON.parse(fs.readFileSync(base_path.concat("wordlist1_result.txt"), "utf-8")).map((a) => new Map(JSON.parse(JSON.stringify(a))));
    expect(solutions).toStrictEqual(real_solution)
  });
  test("TEST 03", () => {
    const wordlist1 = fs.readFileSync(wordlist_path.concat("wordlist2.txt"), "utf-8").split("\n");
    const solutions = wordlist1.map(x => count_vocals(x));
    const real_solution = JSON.parse(fs.readFileSync(base_path.concat("wordlist2_result.txt"), "utf-8")).map((a) => new Map(JSON.parse(JSON.stringify(a))));
    expect(solutions).toStrictEqual(real_solution)
  });
  test("TEST 04", () => {
    const wordlist1 = fs.readFileSync(wordlist_path.concat("wordlist3.txt"), "utf-8").split("\n");
    const solutions = wordlist1.map(x => count_vocals(x));
    const real_solution = JSON.parse(fs.readFileSync(base_path.concat("wordlist3_result.txt"), "utf-8")).map((a) => new Map(JSON.parse(JSON.stringify(a))));
    expect(solutions).toStrictEqual(real_solution)
  });
  test("TEST 05", () => {
    expect(count_vocals("Richard Stallman")).toStrictEqual(new Map([['i', 1], ['a', 3]]));
  });
});
