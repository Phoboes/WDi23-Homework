//Exercise 1

let maxOfTwoNumbers = function(a,b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
maxOfTwoNumbers(10,1);



//Exercise 2

let maxOfThree = function(a,b,c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
maxOfThree(10,4,7);



//Exercise 3

let vowelDetector = function(string) {
  var vowels = [
    "a",
    "e",
    "i",
    "o",
    "u",
    "y"
  ];
  for (var i = 0; i < string.length; i++) {
    if (string === vowels[i]) {
      return true;
    } else {
      return false;
    }
  }
}

//Exercise 4

let sumArray = function(array) {
  var addMe = 0;
  for (var i = 0; i < array.length; i++) {
    addMe += array[i];
  } return addMe;
}
sumArray([1,2,3,4]);

let multiplyArray = function(array) {
  var addMe = 0;
  for (var i = 0; i < array.length; i++) {
    addMe *= array[i];
  } return addMe;
}
sumArray([1,2,3,4]);


//HOMEWORK

//The word guesser


var word = ["P", "A", "N", "D", "A"];
var correctLetters = [];
var guessed = [];

const guessLetter = function (guess) {
  //debugger;
  let correct = false;
  correctLetters.length === word.length;
  if (guessed.length == 0) {
    guessed.concat(guess);
  } else {
    for (let i = 0; i < guessed.length; i++) {
      if (guess == guessed[i]) {
        return;
      }
    }
  }
  guessed.concat(guess);
  for (let i = 0; i < word.length; i++) {
    if (guess === word[i]) {
      correctLetters[i] = guess;
      guessed[i] = guess;
      correct = true;
    }

    if (correct === false) {
      guess.concat(guessed);
      console.log("Please try again!")
    }

  }

    if (correct === true) {
      console.log("Bingo!")
    }

    if (correctLetters === word) {
      console.log("You win!")
    }
}
