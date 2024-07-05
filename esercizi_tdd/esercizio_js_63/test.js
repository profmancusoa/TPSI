import { unique_characters } from "./es_63.js";
import fs from 'fs';

const wordlist_path = process.cwd().includes("esercizio_js_63")
  ? "../esercizio_js_61/"
  : "./esercizio_js_61/";

  const base_path = process.cwd().includes("esercizio_js_63")
  ? "./"
  : "esercizio_js_63/";


describe("ESERCIZIO 63", () => {
  test("TEST 01", () => {
    expect(unique_characters("supercalifragilistichespiralidoso")).toBe("supercalifgthdo");
  });
  test("TEST 02", () => {
    const wordlist1 = fs.readFileSync(wordlist_path.concat("wordlist1.txt"), "utf-8").split("\n");
    const result = JSON.parse(fs.readFileSync(base_path.concat("wordlist1_result.txt"), "utf-8"));
    expect(wordlist1.map(x => unique_characters(x))).toStrictEqual(result)
  });
  test("TEST 03", () => {
    const wordlist2 = fs.readFileSync(wordlist_path.concat("wordlist2.txt"), "utf-8").split("\n");
    const result = JSON.parse(fs.readFileSync(base_path.concat("wordlist2_result.txt"), "utf-8"));
    expect(wordlist2.map(x => unique_characters(x))).toStrictEqual(result)
  });
  test("TEST 04", () => {
    const wordlist3 = fs.readFileSync(wordlist_path.concat("wordlist3.txt"), "utf-8").split("\n");
    const result = JSON.parse(fs.readFileSync(base_path.concat("wordlist3_result.txt"), "utf-8"));
    expect(wordlist3.map(x => unique_characters(x))).toStrictEqual(result)
  });
  test("TEST 05", () => {
    expect(unique_characters("Linus Benedict Torvalds")).toBe("Linus BedctTorval");
  });
});
