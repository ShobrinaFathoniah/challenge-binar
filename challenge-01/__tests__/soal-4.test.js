const isValidPassword = require("../soal-4");

describe("Test Password Validation", () => {
  test("Password is Valid", () => {
    expect(isValidPassword("Ajaksd12")).toBe(true);
  });

  test("Password is Invalid, Length Not 8", () => {
    expect(isValidPassword("Ajaks12")).toBe(
      "false, karena jumlah password kurang, yaitu hanya 7"
    );
  });

  test("Password is Invalid, There isn't Kapital", () => {
    expect(isValidPassword("ajaksd12")).toBe(
      "false, karena tidak ada huruf besar"
    );
  });

  test("Password is Invalid, There isn't Minor", () => {
    expect(isValidPassword("AJAKSD12")).toBe(
      "false, karena tidak ada huruf kecil"
    );
  });

  test("Password is Invalid, There isn't Number", () => {
    expect(isValidPassword("AJAKSDrt")).toBe("false, karena tidak ada angka");
  });

  test("Password is Invalid, There is Invalid Type Data", () => {
    expect(isValidPassword(0)).toBe("ERROR: Invalid Type Data");
  });
});
