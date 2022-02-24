const hurufBesar = /[A-Z]/
const hurufKecil = /[a-z]/
const angka = /[0-9]/
//?=.*

const isValidPassword = (givenPassword) => {
    if (typeof(givenPassword) === "string") {
        if (givenPassword.length < 8) {
            return false //+ " jumlah password kurang, yaitu hanya " + givenPassword.length
        } 
        if(hurufBesar.test(givenPassword) === false){
            return false //+ " ga ada huruf besar " + hurufBesar.test(givenPassword)
        } 
        if(hurufKecil.test(givenPassword) === false){
            return false //+ " gada huruf kecil " + hurufKecil.test(givenPassword)
        } 
        if(angka.test(givenPassword) === false){
            return false //+ " ga ada angka " + angka.test(givenPassword)
        } else{
            return true
        }
    } else {
        return "ERROR: Password yang Anda buat Tidak Sah karena " 
    }
}

console.log(isValidPassword('Meong2021'));
console.log(isValidPassword('meong2021'));
console.log(isValidPassword('@eong2021'));
console.log(isValidPassword('Meong2'));
console.log(isValidPassword(0));
console.log(isValidPassword());