let cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function ( obj ) {

    let total = 0;
    let values = Object.values(cartForParty);

    for (let i in obj) {
      total += parseFloat(obj[i]);
    }

    console.log(total);
    return(total);

}

cashRegister(cartForParty);

// Credit Card

function isCreditCardValid(input) {
  if (hasNumbers(input) && hasSixteenDigits(input) && hasDifferentDigits(input) && finalEvenNumber(input) && sumOfDigits(input)) {
    console.log(input + "True");
  } else {
    console.log("False");
  }
}

const hasNumbers = function (input) {

  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (input[i] === numbers[i]) {
        return true;
      }
    }
  }
}

const hasSixteenDigits = function (input) {

  if (input.length === 16) {
    return true;
  }
}

const hasDifferentDigits = function (input) {

  let check = [];

  for (i = 0; i < input.length; i++) {

    if (check[0] !== input[i]) {
      check.push(input[i]);
    }

    if (check.length > 1) {
      return true;
    }
  }

}

const finalEvenNumber = function (input) {

  if (input[input.length-1] % 2 === 0 ) {
    return true;
  }
}

const sumOfDigits = function (input) {

  let sum = 0;

  for (i = 0; i < input.length; i++) {
    sum += input[i];
  }

  if (sum > 16) {
    return true;
  }
}

isCreditCardValid(1234567891234567);

// Javascript Bank

const bank = [
  {ownerName: "Tom", bankBalance: "156" },
  {ownerName: "Dick", bankBalance: "129" },
  {ownerName: "Harry", bankBalance: "134" },
  {ownerName: "Mary", bankBalance: "630" }
];

const totalBankBalance = function (obj) {

  let total = 0;
  let

  for (let [key, value] of obj) {
    total =
  }

  console.log(total);
  return total;

}

totalBankBalance(bank);
