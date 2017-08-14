// Given the following a rectangle object like the one below, write the following functions:

let rectangle = {
  length: 4,
  width: 4
};


// isSquare - Returns whether the rectangle is a square or not

const isSquare = function() {
  if (rectangle.width == rectangle.length) {
    console.log(`It is a square.`);
  } else {
    console.log(`It is not a square.`);
  }
}
// isSquare();


// area - Returns the area of the rectangle

const calculateArea = function() {
  let area = rectangle.width * rectangle.length;
  console.log(`Area of ${rectangle.width} and ${rectangle.length} is ${area}.`);
  return area;
}
// calculateArea();


// perimeter - Returns the perimeter of the rectangle

const perimeter = function() {
  let result = (2 * (rectangle.length + rectangle.width));
  console.log(`Perimeter of the rectangle is ${result}.`);
  return result;
}
// perimeter();


// Given the following a triangle object like the one below, write the following functions:

let triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};


// isEquilateral - Returns whether the triangle is equilateral or not

const isEquilateral = function() {
  if (triangle.sideA === triangle.sideB && triangle.sideC === triangle.sideC) {
    console.log(`It is an equilateral triangle.`);
  } else {
    console.log(`It is not an equilateral as all sides are not the same.`);
  }
}
// isEquilateral();


// isIsosceles - Returns whether the triangle is isosceles or not

const isIsosceles = function() {
  if (triangle.sideA === triangle.sideB || triangle.sideB === triangle.sideC) {
    console.log("It is an isosceles.");
  } else {
    console.log("No, this triangle doesn't have two sides same.");
  }
}
// isIsosceles();


// area - Returns the area of the Triangle
// Not sure about the maths

const areaOfTriangle = function() {
  let area = ((triangle.sideC / 2) * (triangle.sideB));
  console.log("Area of the triangle is " + area);
}
// areaOfTriangle();


// isObtuse - Returns whether the triangle is obtuse or not

const isObtuse = function() {

  if (((triangle.sideA) + (triangle.sideB)) < (triangle.sideC)) {
    console.log(`It is an obtuse triangle.`);
  } else {
    console.log(`It is not an obtuse triangle.`);
  }
}
// isObtuse();


// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

let cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function(cart) {
  total = 0;

  for (key in cart) {

    priceIntegers = parseFloat(cart[key]);

    total += priceIntegers;
  }
  console.log(total);
  return total;
}

// cashRegister(cartForParty); // 60.55


// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
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


const validateCreditCard = function(creditCardNumber) {

  // Strip out any "-" if they have put in the number

  let stripDash = creditCardNumber.replace(/-/g, '');

  // check length of creditCardNumber (it is a string at this point)

  if (stripDash.length != 16) {
    return {
      value: false,
      cardNumber: creditCardNumber,
      error: "invalid length"
    };
  }

  // Check that this is now sixteen numbers in a row

  var isSixteenNumbersOnly = /^[0-9]{16}$/;

  if (isSixteenNumbersOnly.test(stripDash) != true) {
    return {
      value: false,
      cardNumber: creditCardNumber,
      error: "invalid characters"
    };
  }

  let total = 0;
  let numbersSeen = [];

  // check if sum is less than 16 by adding in var total

  for (let key in stripDash) {
    let number = stripDash[key];
    total += parseInt(number);

    // check if it is only one type of number by pushing only unique number to numbersSeen

    if (numbersSeen.indexOf(number) < 0) {
      numbersSeen.push(number);
    }
  }

  // check if sum is less than 16

  if (total < 16) {
    return {
      value: false,
      cardNumber: creditCardNumber,
      error: "sum less than 16"
    };
  }

  // check if it is only one type of number

  if (numbersSeen.length === 1) {
    return {
      value: false,
      cardNumber: creditCardNumber,
      error: "only one type of number"
    };
  }

  // odd final number. with last card number '&' ing with 1, all the odd number will turn true.

  if (parseInt(stripDash[15]) & 1) {
    return {
      value: false,
      cardNumber: creditCardNumber,
      error: "odd final number"
    };

  }

  // with all the previous conditions not matched, we get a valid card.

  return {
    value: true,
    cardNumber: creditCardNumber
  };
}

console.log(validateCreditCard("a923-3211-9c01-1112"));
console.log(validateCreditCard("4444-4444-4444-4444"));
console.log(validateCreditCard("1111-1111-1111-1110"));
console.log(validateCreditCard("6666-6666-6666-6661"));
console.log(validateCreditCard("9999-9999-8888-0000"));
console.log(validateCreditCard("6666-6666-6666-1666"));
