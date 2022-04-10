const getTotalPenjualan = require("../soal-7");

describe("Test Get Total Penjualan", () => {
  test("Total Penjualan 1", () => {
    const dataPenjualanPakAldi = [
      {
        namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
        hargaSatuan: 760000,
        kategori: "Sepatu Sport",
        totalTerjual: 90,
      },
      {
        namaProduct: "Sepatu Warrior Tristan Black Brown High",
        hargaSatuan: 960000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 37,
      },
      {
        namaProduct: "Sepatu Warrior Tristan Maroon High",
        hargaSatuan: 360000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 90,
      },
      {
        namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
        hargaSatuan: 120000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 90,
      },
    ];

    expect(getTotalPenjualan(dataPenjualanPakAldi)).toBe(307);
  });

  test("Total Penjualan 2", () => {
    const dataPenjualanPakAldi = [
      {
        namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
        hargaSatuan: 760000,
        kategori: "Sepatu Sport",
        totalTerjual: 9102,
      },
      {
        namaProduct: "Sepatu Warrior Tristan Black Brown High",
        hargaSatuan: 960000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 33247987,
      },
      {
        namaProduct: "Sepatu Warrior Tristan Maroon High",
        hargaSatuan: 360000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 9021981,
      },
      {
        namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
        hargaSatuan: 120000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 90329,
      },
    ];

    expect(getTotalPenjualan(dataPenjualanPakAldi)).toBe(42369399);
  });

  test("Input is Invalid, There is Invalid Type Data", () => {
    expect(getTotalPenjualan("")).toBe("ERROR: Invalid Data Type");
  });
});
