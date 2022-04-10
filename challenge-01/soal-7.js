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

const getTotalPenjualan = (dataPenjualan) => {
  if (typeof dataPenjualan === "object") {
    let result = 0;

    for (let i = 0; i < dataPenjualan.length; i++) {
      const terjual = dataPenjualan[i].totalTerjual;

      result = result + terjual;
    }

    return result;
  } else {
    return "ERROR: Invalid Data Type";
  }
};

// console.log(getTotalPenjualan(dataPenjualanPakAldi));

module.exports = getTotalPenjualan;
