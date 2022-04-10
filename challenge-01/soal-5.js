const nameValidated = /[a-zA-Z]+/;

const getSplitName = (personName) => {
  if (nameValidated.test(personName) && personName) {
    const splitName = personName.split(" ");

    const nama1 = splitName[0];
    const nama2 = splitName[1];
    const nama3 = splitName[2];

    if (splitName.length === 3) {
      const bagianNama = {
        firstName: nama1,
        middleName: nama2,
        lastName: nama3,
      };

      return bagianNama;
    } else if (splitName.length === 2) {
      const bagianNama = {
        firstName: nama1,
        middleName: null,
        lastName: nama2,
      };

      return bagianNama;
    } else if (splitName.length === 1) {
      const bagianNama = {
        firstName: nama1,
        middleName: null,
        lastName: null,
      };

      return bagianNama;
    } else {
      return "ERROR: This function is only for 3 characters name";
    }
  } else {
    return "ERROR: Invalid Data Type";
  }
};

// console.log(getSplitName("Aldi Daniela Pranata")); //{ firstName: 'Aldi', middleName: 'Daniela', lastName: 'Pranata' }
// console.log(getSplitName("Dwi Kuncoro")); //{ firstName: 'Dwi', middleName: null, lastName: 'Kuncoro' }
// console.log(getSplitName("Aurora")); //{ firstName: 'Aurora', middleName: null, lastName: null }
// console.log(getSplitName("Aurora Aureliya Sukma Darma")); //ERROR: This function just for 3 characters name
// console.log(getSplitName(0)); //ERROR: Invalid Data Type

module.exports = getSplitName;
