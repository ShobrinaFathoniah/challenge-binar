const emailValidate = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const huruf = /[a-zA-Z]/;
const angka = /[0-9]/;
const at = /[a-zA-Z]+@/;

const checkEmail = (email) => {
  if (email) {
    if (emailValidate.test(email)) {
      return "VALID";
    } else {
      if (at.test(email)) {
        return "INVALID";
      } else if (huruf.test(email)) {
        return "ERROR: Alamat email Anda tidak terdapat @";
      } else if (angka.test(email)) {
        return "ERROR: Alamat email Anda Salah Karena hanya berupa angka";
      }
    }
  } else {
    return "ERROR: Tidak terdapat isian atau parameter";
  }
};

// console.log(checkEmail("apranata@binar.co.id"));
// console.log(checkEmail("apranata@binar.com"));
// console.log(checkEmail("apranata@binar"));
// console.log(checkEmail("apranata"));
// //console.log(checkTypeNumber(checkEmail(124353))) (beneran ada check tipe nomor?)
// console.log(checkEmail());

module.exports = checkEmail;
