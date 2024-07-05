import { count_occurence } from "./es_61.js";
import fs from "fs";

const base_path = process.cwd().includes("esercizio_js_61")
  ? "./"
  : "esercizio_js_61/";

describe("ESERCIZIO 61", () => {
  test("TEST 01", () => {
    expect(
      count_occurence(
        "JavaScript è un linguaggio molto bello. JavaScript è un linguaggio di alto livello"
      )
    ).toStrictEqual(
      new Map([
        ["JavaScript", 2],
        ["è", 2],
        ["un", 2],
        ["linguaggio", 2],
        ["molto", 1],
        ["bello.", 1],
        ["di", 1],
        ["alto", 1],
        ["livello", 1],
      ])
    );
  });
  test("TEST 02", () => {
    // Oxford phrase list
    const wordlist1 = fs
      .readFileSync(base_path.concat("wordlist1.txt"), "utf8")
      .split("\n");
    const res = fs.readFileSync(
      base_path.concat("wordlist1_result.txt"),
      "utf8"
    );
    const solutions = [];
    wordlist1.forEach((a) => {
      solutions.push(count_occurence(a));
    });
    expect(solutions).toStrictEqual(
      JSON.parse(res).map((a) => new Map(JSON.parse(JSON.stringify(a))))
    );
  });
  test("TEST 03", () => {
    expect(count_occurence("C#")).toStrictEqual(new Map([["C#", 1]]));
  });
  test("TEST 04", () => {
    // 500k english phrases
    const wordlist2 = fs
      .readFileSync(base_path.concat("wordlist2.txt"), "utf8")
      .split("\n");
    const res = fs.readFileSync(
      base_path.concat("wordlist2_result.txt"),
      "utf8"
    );
    const solutions = [];
    wordlist2.forEach((a) => {
      solutions.push(count_occurence(a));
    });
    expect(solutions).toStrictEqual(
      JSON.parse(res).map((a) => new Map(JSON.parse(JSON.stringify(a))))
    );
  });
  test("TEST 05", () => {
    // ptb_text_only dataset
    const wordlist3 = fs
      .readFileSync(base_path.concat("wordlist3.txt"), "utf8")
      .split("\n");
    const res = fs.readFileSync(
      base_path.concat("wordlist3_result.txt"),
      "utf8"
    );
    const solutions = [];
    wordlist3.forEach((a) => {
      solutions.push(count_occurence(a));
    });
    expect(solutions).toStrictEqual(
      JSON.parse(res).map((a) => new Map(JSON.parse(JSON.stringify(a))))
    );
  });
});
