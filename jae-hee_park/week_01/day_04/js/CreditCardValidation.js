// Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a
//simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers


const input = "9999-9999-8888-0000";
const checkChars = [1,2,3,4,5,6,7,8,9,0];

const numCheck = function( input ){
  let outputArr = [];

  for( let i = 0; i < input.length; i++ ){
    if( checkChars.indexOf( parseInt( input[i] ) ) >= 0 ){
      // parseInt converts the string number to an integer
      outputArr.push( parseInt( input[i] ) );
    }
  }
  return outputArr;
};


const check16 = function(input){
  if (input.length === 16) {
    return true;
  } else {
    return false;
  }
}


const allNumbers = function(input){
  for (let i = 0; i < input.length; i++){
    if (isNaN(input[i])) {
      return false;
    } else {
      return true;
    }
  }
}


// You must have at least two different digits represented (all of the digits cannot be the same)
const twoDifferent = function(input){
  let check = [];
  for (let j = 0; j < input.length; j++) {
    if (check[0] !== input[j]){
      check.push(input[j]);
    }
  }
    if (check.length > 1){
      return true;
    } else {
      return false;
    }
  }

// The final digit must be even

const isEven = function(input){
  if (input[input.length-1] % 2 === 0){
    return true;
  } else {
    return false;
  }
}

// The sum of all the digits must be greater than 16

const sumIsGreater = function(input){
  let sum = 0;
  for (let m = 0; m < input.length; m++){
    sum += input[m];
  } if (sum > 16){
    return true;
  } else {
    return false;
  }
}

const isValid = function(input){
  let validObject = {};
  let inputChange = numCheck(input);
  let check16Result = check16(inputChange);
  let checkAllNumber = allNumbers(inputChange);
  let checkTwoDifferent = twoDifferent(inputChange);
  let checkIsEven =  isEven(inputChange);
  let checkSumIsGreat = sumIsGreater(inputChange);
  if (check16Result && checkAllNumber && checkTwoDifferent && checkIsEven && checkSumIsGreat){
    validObject.valid = "true";
    validObject.number = input;
    return validObject;
  } else {
    validObject.valid = "false";
    validObject.number = input;
    if (!check16Result){
      validObject.error = 'wrong_number of digits';
    } else if (!checkAllNumber){
      validObject.error = 'wrong_input does contains illegal characters';
    } else if (!checkTwoDifferent){
      validObject.error = 'wrong_all numbers are the same';
    } else if (!checkIsEven){
      validObject.error = 'wrong_last number is not even';
    } else if (!checkSumIsGreat){
      validObject.error = 'wrong_sum of digits is not greater than 16';
    }
    return validObject;
  }
}

console.log(isValid("9999-9999-8888-0000"));
console.log(isValid("6666-6666-6666-1666"));
console.log(isValid("a923-3211-9c01-1112"));
console.log(isValid("4444-4444-4444-4444"));
console.log(isValid("1111-1111-1111-1110"));
console.log(isValid("6666-6666-6666-6661"));

// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
// Example
//
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.
//
// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some
//numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

// parseInt
