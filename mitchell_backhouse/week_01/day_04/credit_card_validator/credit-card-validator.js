/*Here are the rules for a valid number:*/

//Number must be 16 digits, all of them must be numbers
//You must have at least two different digits represented (all of the digits cannot be the same)
//The final digit must be even
/*The sum of all the digits must be greater than 16*/

// assumptions
//
// all cards will be - delimeted
// 9999-9999-8888-0000


// check the size of the number is 16
const checkSize = function(val) {
  if (val.length === 16) {
    return true;
  } else {
    throw "Invalid card length";
  }
}

// check that all digits are not the same
const checkDigitSimilarity = function(card) {
  let first = card[0];
  let val = 0;

  for (let i = 1; i < card.length; i++) {
    if (card[i] === first) {
      val += 1
    }
  }
  
  if ((val + 1) === 16) {
    throw "Invalid card - similar digits";
  } else {
    return true;
  }
}

// check if final digit is even
const checkFinalDigit = function(card) {
  if (card[card.length - 1] % 2 === 0) {
    return true
  } else {
    throw "Invalid card - Final Digit";
  }
}

// check that the sum is greater than 16
const checkSumAll = function(card) {
  let sum = 0;

  for (let i = 0; i < card.length; i++) {

    // cast to int
    sum += parseInt(card[i]);
  }

  // card value need to be above 16
  if (sum > 16) {
    return true;
  } else {
    throw "Incalid card - not a valid length";
    // return false;
  }
}

const validateCreditCard = function(card) {
  const cc = card.split('-').join('');

  // build original object
  let obj = {
    valid: true,
    number: card
  }

  // try catch
  // on catch, add error details
  try {
    checkSize(cc);
    checkDigitSimilarity(cc);
    checkFinalDigit(cc);
    checkSumAll(cc);
  } catch (error) {
    obj.valid = false;
    obj.error = error;
  }

  // return obj
  return obj;
}


// test ------------------------
// val = 9999-9999-8888-0000
// even digit error
console.log(validateCreditCard("2222-2222-2222-2222"));

// invalid values
console.log(validateCreditCard("a923-3211-9c01-1112"));
console.log(validateCreditCard("a923-3211-9c01-1113"));

// valid card
console.log(validateCreditCard("9999-9999-8888-0000"));
console.log(validateCreditCard("6666-6666-6666-1666"));

// sum != 16
console.log(validateCreditCard("1111-1111-1111-1110"));

// odd final number
console.log(validateCreditCard("6666-6666-6666-6661"));
