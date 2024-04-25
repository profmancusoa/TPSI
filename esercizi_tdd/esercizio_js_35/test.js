import { unique_characters } from "./es_35.js";
import fs from 'fs';

const wordlist_path = process.cwd().includes("esercizio_js_35")
  ? "../esercizio_js_33/"
  : "./esercizio_js_33/";

  const base_path = process.cwd().includes("esercizio_js_35")
  ? "./"
  : "esercizio_js_35/";


describe("ESERCIZIO 35", () => {
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
