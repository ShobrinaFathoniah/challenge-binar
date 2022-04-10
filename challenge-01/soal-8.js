const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const getInfoPenjualan = (dataPenjualan) => {
  let data = {
    totalKeuntungan: "",
    totalModal: "",
    persentaseKeuntungan: "",
    produkBukuTerlaris: "",
    penulisTerlaris: "",
  };

  if (typeof dataPenjualan === "object") {
    let mapData = dataPenjualan.map((data) => {
      let namaPenulis = data.penulis;
      let namaBuku = data.namaProduk;
      let hargaJual = data.hargaJual;
      let hargaBeli = data.hargaBeli;
      let totalTerjual = data.totalTerjual;
      let sisaStok = data.sisaStok;

      let modal = hargaBeli * (totalTerjual + sisaStok);
      let keuntungan = hargaJual * totalTerjual - modal;

      return {
        namaPenulis,
        namaBuku,
        keuntungan,
        modal,
        totalTerjual,
      };
    });

    let totalKeuntungan = 0;
    let totalModal = 0;
    let terjual = [];

    mapData.forEach((value, index) => {
      totalKeuntungan += value["keuntungan"];
      totalModal += value["modal"];
      terjual[index] = value["totalTerjual"];
    });

    let terjualTertingi = terjual
      .sort((a, b) => {
        return a - b;
      })
      .reverse()[0];

    let bukuTerlaris = mapData.filter((obj) => {
      return obj.totalTerjual === terjualTertingi;
    });

    const totalPersentase = ((totalKeuntungan / totalModal) * 100).toFixed(2);
    const namaBuku = bukuTerlaris[0]["namaBuku"];
    const namaPenulis = bukuTerlaris[0]["namaPenulis"];
    const totKeuntungan = Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    })
      .format(totalKeuntungan)
      .split(",")[0];

    const totModal = Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    })
      .format(totalModal)
      .split(",")[0];

    data.persentaseKeuntungan = `${totalPersentase}%`;
    data.totalKeuntungan = totKeuntungan;
    data.totalModal = totModal;
    data.penulisTerlaris = namaPenulis;
    data.produkBukuTerlaris = namaBuku;

    return data;
  } else {
    return "ERROR: Invalid Data Type";
  }
};

console.log(getInfoPenjualan(dataPenjualanNovel));

module.exports = getInfoPenjualan;
