const changeWord = require("../soal-1");

describe("Test Penggalan Kata", () => {
  const kalimat1 = "Andini sangat mencintai kamu selamanya";

  test("Perubahan Kata 1", () => {
    expect(changeWord("mencintai", "membenci", kalimat1)).toBe(
      "Andini sangat membenci kamu selamanya"
    );
  });

  test("Perubahan Kata 2", () => {
    expect(changeWord("Andini", "Anita", kalimat1)).toBe(
      "Anita sangat mencintai kamu selamanya"
    );
  });

  test("Perubahan Kata 3", () => {
    expect(changeWord("kamu", "dia", kalimat1)).toBe(
      "Andini sangat mencintai dia selamanya"
    );
  });
});
