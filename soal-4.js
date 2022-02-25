const hurufBesar = /[A-Z]/
const hurufKecil = /[a-z]/
const angka = /[0-9]/

const isValidPassword = (givenPassword) => {
    if (typeof(givenPassword) === "string") {
        if (givenPassword.length < 8) {
            return false //+ ", karena jumlah password kurang, yaitu hanya " + givenPassword.length
        } else if(hurufBesar.test(givenPassword) === false){
            return false //+ ", karena tidak ada huruf besar"
        } else if(hurufKecil.test(givenPassword) === false){
            return false //+ ", karena tidak ada huruf kecil"
        } else if(angka.test(givenPassword) === false){
            return false //+ ", karena tidak ada angka"
        } else{
            return true
        }
    } else {
        return "ERROR: Invalid Type Data" 
    }
}

console.log(isValidPassword('Meong2021'));
console.log(isValidPassword('meong2021'));
console.log(isValidPassword('@eong'));
console.log(isValidPassword('Meong2'));
console.log(isValidPassword(0));
console.log(isValidPassword());