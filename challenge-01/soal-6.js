const getAngkaTerbesarKedua = (dataNumber) => {
  if (typeof dataNumber === "object") {
    dataNumber = dataNumber.sort((a, b) => {
      return b - a;
    });

    dataNumber = [...new Set(dataNumber)];

    return dataNumber[1];
  } else {
    return "ERROR: Invalid Data Type";
  }
};

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
// console.log(getAngkaTerbesarKedua(dataAngka));
// console.log(getAngkaTerbesarKedua(0));
// console.log(getAngkaTerbesarKedua());

module.exports = getAngkaTerbesarKedua;
