
// ------------------- MAX OF TWO -------------------------------- //

//Define a function maxOfTwoNumbers that
//takes two numbers as arguments and returns the largest of them.

const maxOfTwoNumbers = function (num1, num2) {
  if (num1 > num2 ) {
      return num1 + " this number is greater than " + num2;
  } else {
      return num1 + " this number is less than" + num2;
  }
};

maxOfTwoNumbers(2, 4);
maxOfTwoNumbers(4, 2);

// ------------------- MAX OF THREE -------------------------------- //

//Define a function maxOfThree
//that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function  (num1, num2, num3) {
  if ((num1 >= num2) && (num1 >= num3) ) {
    return num1;
  }
  else if ((num2 >= num1) && (num2 >= num3)) {
    return num2;
  }
  else {
    return num3;
  }
}

maxOfThree(2, 4, 9);

// ------------------- SUM ARRAY -------------------------------- //

//Define a function sumArray - done
//and a function multiplyArray - done
//that sums and multiplies (respectively)
//all the numbers in an array of numbers.
//For example, sumArray([1,2,3,4])
//should return 10, and multiplyArray([1,2,3,4]) should return 24.

// const myArray = [1,2,3,4];

const sumArray = function(numberArray) {
  let sumArrayTotal = 0;
  for (i = 0; i < numberArray.length; i++) {
    sumArrayTotal = sumArrayTotal + numberArray[i];
  }
  return sumArrayTotal;
}

// ----------------- MULTIPLY ARRAY ----------------------------------- //

//Define a function sumArray - done
//and a function multiplyArray - done
//that sums and multiplies (respectively)
//all the numbers in an array of numbers.
//For example, sumArray([1,2,3,4])
//should return 10, and multiplyArray([1,2,3,4]) should return 24.

// const myArray = [1,2,3,4];

const sumArray = function(numberArray) {
  let sumArrayTotal = 0;
  for (i = 0; i < numberArray.length; i++) {
    sumArrayTotal = sumArrayTotal + numberArray[i];
  }
  return sumArrayTotal;
}

const multiplyArray = function(numberArray) {
  let multiplyArrayTotal = numberArray[0];
  for (i = 1; i < numberArray.length; i++) {
    multiplyArrayTotal *= numberArray[i];
    // 1 * 2 = 2
    // 2 * 3 = 6
    // 6 * 4 = 24
  }
  return multiplyArrayTotal;
}

sumArray([1,2,3,4]);
multiplyArray([1,2,3,4]);

// ----------------- IS A VOWEL ----------------------------------- //

//Write a function that takes a character (i.e. a string of length 1) and
//returns true if it is a vowel, false otherwise.

// const isVowel = function(letter) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   return (vowels.indexOf(letter) > - 1)
// }

const isVowel = function(letter) {
  let isAVowel = false;
  const vowels = ["a", "e", "i", "o", "u"];
  for (i = 0; i < vowels.length; i++) {
    if (vowels[i] === letter ){
      isAVowel = true;
    }
  }
  return isAVowel;
}

// ----------------------- BONUS ----------------------------------- //

// -------------------- REVERSE STRING --------------------------- //

//Define a function reverseString that computes the reversal of a string.
//For example, reverseString("jag testar") should return the string "ratset gaj".

function reverseString(reversal){
  return reversal.split('').reverse().join('');
}

console.log(reverseString ("hello"));

// -------------------- FIND LONGEST WORD --------------------------- //

//Write a function findLongestWord that takes an array of words and
//returns the length of the longest one.

function findLongestWord(arrayOfWords){ // ['sam', 'bobby', 'claire', 'georgey', 'anna']

  let longestWord = undefined;
  let longestWordLength = 0;

  for (i = 0; i < arrayOfWords.length; i++) {

    if(arrayOfWords[i].length > longestWordLength){
        longestWord = arrayOfWords[i];
        longestWordLength = arrayOfWords[i].length;
    }
  }
  return longestWord;
}

//Write a function filterLongWords that takes an array of words and an number i
//and returns the array of words that are longer than i. -- NOT FININSHED

function filterLongWords(arrayFilter, number){
}

// -------------------- WORD GUESSER --------------------------- //



const letter = ["F", "O", "X"];
let guess = ["_","_","_"];

function guessLetter(guessedLetter) {
  for (i = 0; i < letter.length; i++) {
    if (guessedLetter === letter[i]) {
      alert("Yay congrats");
      guess[i]= guessedLetter; }

    if (guess.toString() == letter.toString()) {
      alert("You have won");
      }

    } else {
      console.log('Oh no, thats not right!');
    }
  }
  console.log(guess);
}
