const getAngkaTerbesarKedua = require("../soal-6");

describe("Test Get The Second Greater Number", () => {
  test("With No Same Number", () => {
    const dataAngka = [9, 4, 7, 4, 3, 2, 8];

    expect(getAngkaTerbesarKedua(dataAngka)).toBe(8);
  });

  test("With Same Number", () => {
    const dataAngka = [9, 4, 4, 9, 7, 3, 7, 4, 3, 2, 8];

    expect(getAngkaTerbesarKedua(dataAngka)).toBe(8);
  });

  test("Number is Invalid, There is Invalid Type Data", () => {
    expect(getAngkaTerbesarKedua("")).toBe("ERROR: Invalid Data Type");
  });
});
