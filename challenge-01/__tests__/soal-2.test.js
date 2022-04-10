const checkTypeNumber = require("../soal-2");

describe("Test Bilangan Genap / Ganjil", () => {
  test("It Should Even", () => {
    expect(checkTypeNumber(6)).toBe("GENAP");
  });

  test("It Should Odds", () => {
    expect(checkTypeNumber(9)).toBe("Ganjil");
  });

  describe("Test Bilangan", () => {
    test("It Should Error", () => {
      expect(checkTypeNumber("6")).toBe("ERROR: Invalid Data Type");
    });

    test("It Should Error", () => {
      expect(checkTypeNumber()).toBe("ERROR: Bro where is the parameter?");
    });
  });
});
