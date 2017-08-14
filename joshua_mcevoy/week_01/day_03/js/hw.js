// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns
//the largest of them. Use the if-then-else construct available in Javascript.
//You'll have to remember your pre-work, or do some googling to figure this out.
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and returns
//true if it is a vowel, false otherwise.

// const maxOfTwoNumbers = function (num1, num2) {
//   if (num1 > num2){
//     console.log(num1);
//   }
//   else {
//     console.log(num2);
//   }
// }
//
// maxOfTwoNumbers(1, 2);
// maxOfTwoNumbers(41, 12);

// const maxOfTwoNumbers = function (num1, num2) {
//   var bar = Math.max(num1, num2);
//   console.log("bar = " + bar);
// }
//
// maxOfTwoNumbers(1, 2);
// maxOfTwoNumbers(41, 12);
//
// /////////////////////////////////////////////////////////
//
// const maxOfThree = function (num1, num2, num3) {
//   var bar = Math.max(num1, num2, num3);
//   console.log("bar = " + bar);
// }
//
// maxOfThree(5, 7, 100);
// maxOfThree(5000, 7, 100);
// maxOfThree(5, 7, 1);

/////////////////////////////////////////////////////////

// const vowelSort = function (str){
//   if (str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u'){
//     console.log("This is a vowel.");
//     return true;
//   }
//   else {
//     console.log("This is not a vowel.");
//     return false;
//   }
// }
//
// vowelSort('a');
// vowelSort('e');
// vowelSort('i');
// vowelSort('o');
// vowelSort('u');
// vowelSort('v');

/////////////////////////////////////////////////////////

// Define a function sumArray and a function multiplyArray that sums and multiplies
//(respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4])
//should return 10, and multiplyArray([1,2,3,4]) should return 24.


// const sumArray = function (array){
//   var j = 0;
//   for (let i = 0; i < array.length; i++){
//     j = j + array[i];
//     console.log("j = " + j);
//   }
// }
//
// const multiplyArray = function (array){
//   var k = 1;
//   for (let i = 0; i < array.length; i++){
//     //console.log("i = " + array[i]);
//     k = k * array[i];
//     console.log("k = " + k);
//   }
// }
//
// sumArray([1, 2, 3, 4]);
// multiplyArray([1, 2, 3, 4]);

/////////////////////////////////////////////////////////

// Define a function reverseString that computes the reversal of a string. For example,
//reverseString("jag testar") should return the string "ratset gaj".

// const reverseString = function (str){
//     console.log(str.split("").reverse().join(""));
//   }
// reverseString('blah blah blah');

/////////////////////////////////////////////////////////

// Write a function findLongestWord that takes an array of words and
//returns the length of the longest one.

const findLongestWord = function (array){
  let flag = 0;
  let result = 0;
  let longestWord = '';
  for (let i = 0; i < array.length; i++){
    if (array[i].length > result){
      result = array[i].length;
      longestWord = array[i]
      flag += 1;
    }
  }
  if (flag === array.length){
    console.log("longestWord = " + longestWord);
  }
}

findLongestWord(['apple', 'orange', 'strawberry']);

/////////////////////////////////////////////////////////

// Write a function filterLongWords that takes an array of words and an number
//i and returns the array of words that are longer than i.

// const filterLongWords = function (array, num){
//   for (let i = 0; i < array.length; i++){
//     if (array[i].length > num){
//       console.log(array[i]);
//     }
//   }
// }
//
// filterLongWords(['bubble', 'goose', 'China', 'devil'], 4);
