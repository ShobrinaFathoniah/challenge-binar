const getSplitName = require("../soal-5");

describe("Test Split Name", () => {
  test("Split Three Name", () => {
    expect(getSplitName("Mia Naura Nadia")).toStrictEqual({
      firstName: "Mia",
      middleName: "Naura",
      lastName: "Nadia",
    });
  });

  test("Split Two Name", () => {
    expect(getSplitName("Mia Naura")).toStrictEqual({
      //obj != obj
      firstName: "Mia",
      middleName: null,
      lastName: "Naura",
    });
  });

  test("Split One Name", () => {
    expect(getSplitName("Mia")).toStrictEqual({
      firstName: "Mia",
      middleName: null,
      lastName: null,
    });
  });

  test("Split Four Name", () => {
    expect(getSplitName("Mia Nadia Naura Popiana")).toBe(
      "ERROR: This function is only for 3 characters name"
    );
  });

  test("Name is Invalid, There is Invalid Type Data", () => {
    expect(getSplitName(0)).toBe("ERROR: Invalid Data Type");
  });
});
