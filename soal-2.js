const checkTypeNumber = givenNumber => {
    if(givenNumber){
        if(typeof(givenNumber) === "number"){
            if(givenNumber % 2 === 0){
                return "GENAP"
            }else{
                return "Ganjil"
            }
        }else{
            return "ERROR: Invalid Data Type"
        }
    }else{
        return "ERROR: Bro where is the parameter?"
    }
}

console.log(checkTypeNumber(10)) //GENAP
console.log(checkTypeNumber(3)) //GANJIL
console.log(checkTypeNumber("3")) // ERROR: Invalid Data Type
console.log(checkTypeNumber({})) // ERROR: Invalid Data Type
console.log(checkTypeNumber([])) // ERROR: Invalid Data Type
console.log(checkTypeNumber()) // ERROR: Bro where is the parameter?