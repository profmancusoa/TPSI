import { sub_arr } from "./es_20.js";

describe("ESERCIZIO 20", () => {
    test('TEST 01', () => {
        expect(sub_arr([1, 2, 3, 4, 5], 3).toString()).toBe([3, 4, 5].toString());
    });

    test('TEST 02', () => {
        expect(sub_arr(Array.from(Array(10).keys()), 7).toString()).toBe([3, 4, 5, 6, 7, 8, 9].toString());
    });

    test('TEST 03', () => {
        expect(sub_arr(Array.from(Array(69).keys()), -1).toString()).toBe([].toString());
    });

    test('TEST 04', () => {
        expect(sub_arr(Array.from(Array(1000).keys()), 69).toString()).toBe([
            931, 932, 933, 934, 935, 936, 937, 938, 939,
            940, 941, 942, 943, 944, 945, 946, 947, 948,
            949, 950, 951, 952, 953, 954, 955, 956, 957,
            958, 959, 960, 961, 962, 963, 964, 965, 966,
            967, 968, 969, 970, 971, 972, 973, 974, 975,
            976, 977, 978, 979, 980, 981, 982, 983, 984,
            985, 986, 987, 988, 989, 990, 991, 992, 993,
            994, 995, 996, 997, 998, 999
          ].toString());
    });

    test('TEST 05', () => {
        expect(sub_arr(Array.from(Array(1000000).keys()), 123).toString()).toBe(Array.from({ length: 123 }, (v, i) => 999877 + i).toString());
    });
});