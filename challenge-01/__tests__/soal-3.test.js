const checkEmail = require("../soal-3");

describe("Test Check Email", () => {
  test("Email is Valid", () => {
    expect(checkEmail("lalala@mail.com")).toBe("VALID");
  });

  test("Email is Invalid", () => {
    expect(checkEmail("lalala@mail")).toBe("INVALID");
  });

  test("Email isn't Have @", () => {
    expect(checkEmail("lalala")).toBe(
      "ERROR: Alamat email Anda tidak terdapat @"
    );
  });

  test("There isn't Input", () => {
    expect(checkEmail()).toBe("ERROR: Tidak terdapat isian atau parameter");
  });
});
