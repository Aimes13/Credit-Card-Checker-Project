// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
const validateCard = array => {
    let newArray = [];
    
    // To add all the even numbers to a new array
    for (let i = array.length - 1; i >= 0; i -= 2) {
      newArray.push(array[i]);
    };
    /*console.log(newArray);*/ 
  
    // To double all the odd numbers and add them to the  new array
    for (let j = array.length - 2; j >= 0; j -= 2) {
        if(array[j]*2 > 9) {
            newArray.push(array[j]*2 - 9);
        }
        else {
        newArray.push(array[j]*2);
        };
    };
    /*console.log(newArray);*/
    
    // To sum all the numbers in the new array
    let sum = 0;
    for (let k = 0; k < newArray. length; k++) {
      sum += newArray[k]; 
    };
    /*console.log(sum);*/
    
    // To check if the card number is valid or invalid
    return sum % 10 === 0;
  };
  
  const validateCred = array => {
    // To check if each nested array is valid/invalid
    for (let x = 0; x < array.length; x++) {
    console.log(validateCard(array[x]));
    };
  };
  
  const findInvalidCards = nestArray => {
    let invalidArray = [];
    
    // To loop through each nested array
    for (let l = 0; l < nestArray.length; l++) {
      validateCard(nestArray[l]);
      
      // To check which cards are invalid and add them to a new array
      if(validateCard(nestArray[l]) === false) {
        invalidArray.push(nestArray[l]);
        //console.log(nestArray.indexOf(nestArray[l]));
      };
    };
    console.log(invalidArray);
  };
  
  
  const idInvalidCardCompanies = nestArray => {
    let companyArray = [];
    
    for (let m = 0; m < nestArray.length; m++) {
      if ((m >= 5 && m <=10) || (m >= 12 && m <= 13)) {
        switch (nestArray[m][0]) {
          case 3:
            if (companyArray.indexOf('Amex') === -1) {
              companyArray.push('Amex');
            }
            break
          case 4:
            if (companyArray.indexOf('Visa') === -1) {
              companyArray.push('Visa');
            }
            break
          case 5:
            if (companyArray.indexOf('Mastercard') === -1) {
              companyArray.push('Mastercard');
            }
            break
          case 6:
            if (companyArray.indexOf('Discover') === -1) {
              companyArray.push('Discover');
            }
            break
          default:
            console.log('Company not found');
        };
      }; 
    };
    console.log(companyArray);
  };
  
  console.log(validateCred(batch));
  console.log(findInvalidCards(batch));
  console.log(idInvalidCardCompanies(batch));







