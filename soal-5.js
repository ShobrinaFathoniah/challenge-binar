const name = /[A-Za-z]/

const getSplitName = (personName) => {
    if(name.test(personName)){
        personName = personName.split(" ")
        const nama1 = personName[0]
        const nama2 = personName[1]
        const nama3 = personName[2]
        
        if(personName.length === 3){
            const bagianNama = {
                firstName: nama1,
                middleName: nama2,
                lastName: nama3
            }
    
            return bagianNama
        } else if(personName.length === 2){
            const bagianNama = {
                firstName: nama1,
                middleName: null,
                lastName: nama2
            }
    
            return bagianNama
        } else if(personName.length === 1){
            const bagianNama = {
                firstName: nama1,
                middleName: null,
                lastName: null
            }
    
            return bagianNama
        } else {
            return "ERROR: This function is only for 3 characters name"
        }
    }else{
        return "ERROR: Invalid Data Type"
    }
}

console.log(getSplitName("Aldi Daniela Pranata")); //{ firstName: 'Aldi', middleName: 'Daniela', lastName: 'Pranata' }
console.log(getSplitName("Dwi Kuncoro")); //{ firstName: 'Dwi', middleName: null, lastName: 'Kuncoro' }
console.log(getSplitName("Aurora")); //{ firstName: 'Aurora', middleName: null, lastName: null }
console.log(getSplitName("Aurora Aureliya Sukma Darma")); //ERROR: This function just for 3 characters name
console.log(getSplitName(0));  //ERROR: Invalid Data Type