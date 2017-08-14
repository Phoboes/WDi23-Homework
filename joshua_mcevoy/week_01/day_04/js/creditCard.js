// You're starting your own credit card business. You've come up with a new way
//to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers///////
// You must have at least two different digits represented (all of the digits cannot be the same)/////
// The final digit must be even////////////
// The sum of all the digits must be greater than 16
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


const validateCreditCard = function (cardNumber){
  let noDashesNumber = "";
  //This removes the -'s and assigns the numbers to a variable
  for (let i = 0; i < cardNumber.length; i++){

    if ( cardNumber[i] !== '-' ){
      noDashesNumber += cardNumber[i];
    }
  }

  //This check if the number are all the same
  let doubleNumber = 0;
  for (let i = 0; i < noDashesNumber.length; i++){

    if (noDashesNumber[i] === noDashesNumber[0]){
      doubleNumber += 1;
    }
  }
  let n = 0;
  for (let i = 0; i < noDashesNumber.length; i++){

    let num1 = Number.parseInt(noDashesNumber[i]);

    n += num1;


  }

  if (n < 16){
    console.log(false);
  }
  else {
    //This checks to see if the last digit is even
    if (noDashesNumber[noDashesNumber.length - 1] % 2 !== 0){
      //console.log("The last digit is not even");
      console.log(false);
    }
    //This uses the doubleNumber loop to check if the number are all the same
    else if (doubleNumber === 16){
      console.log(false);
    }
    //This checks if are all numbers
    else if (noDashesNumber != Number.parseInt(noDashesNumber)){
      console.log(false);
    }
    //This checks if there are 16 digits
    else if (noDashesNumber.length !== 16){
      console.log(false);
    }
    else {
      console.log(true);
    }
  }

};

validateCreditCard('7890-7890-7890-7890'); //true
validateCreditCard('4444-4444-4444-4444'); //false
validateCreditCard('1111-1111-1111-1110'); //false
validateCreditCard('a923-3211-9c01-1112'); //false
validateCreditCard('6666-6666-6666-6661'); //false
validateCreditCard('6666-6666-6666-666'); //false
