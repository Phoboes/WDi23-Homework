// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(`Maximum of two numbers is ${maxOfTwoNumbers(335, 10)}`);


// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function ( num1, num2, num3) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}
console.log(`Max of three numbers is ${maxOfThree(10, 22, 100)}`);

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.


const  vowelChecker = function(aVowel) {
  let vowelList = "AEIOU".split('');
  let newVowel = aVowel.toUpperCase();

  for (let i = 0; i < vowelList.length; i++) {
    if (vowelList[i] == newVowel) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(`Is it a vowel: ${vowelChecker("a")}`);


// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

const sumArray = function() {
  let sum = 0;
  let numbersArray = [1,2,3,4];
  for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }
  return sum;
}
console.log(`Sum of an Array ${sumArray()}`);

const multiplyArray = function() {
  let sum = 1;
  let numbersArray = [1,2,3,4];
  for (let i = 0; i < numbersArray.length; i++) {
    sum *= numbersArray[i];
  }
  return sum;
}
console.log(`Multiply an Array ${multiplyArray()}`);


// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
const reverseString = function(str) {
  return ((str.split('').reverse()).join(''));
}
console.log(`Reverse a string ${reverseString("Reeta")}`);


// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
const findLongestWord = function() {
  let longWord = 0;
  let wordArray = ["Rose", "Rhododendron", "Lilly", "Chameleon"];
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > wordArray[longWord].length) {
      longWord = i;
    }
  }
  return {
    index: longWord,
    word: wordArray[longWord],
    length: wordArray[longWord].length
  }
}
console.log(findLongestWord());
