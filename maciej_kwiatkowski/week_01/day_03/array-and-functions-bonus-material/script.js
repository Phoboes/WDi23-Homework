let maxOfTwoNumbers = function(num1, num2) {
  let max = Math.max(num1, num2);
  console.log(max + " is the greater number");
  return max;
};
maxOfTwoNumbers(23, 72);

/////////////////////////////////////////////////

let maxOfThree = function(num1, num2, num3) {
  let max = Math.max(num1, num2, num3);
  console.log(max + " is the greater number");
  return max;
};
maxOfThree(23, 54, 67);

/////////////////////////////////////////////////

let vowelOrNot = function(x) {
    let result;

    result = x === "a" || x === "e" || x === "i" || x === "o" || x === "u" ||
             x === "A" || x === "E" || x === "I" || x === "O" || x === "U";
    console.log(result);
    return result;

};
vowelOrNot("a");

/////////////////////////////////////////////////

let sum = [1, 2, 3, 4].reduce(sumArray, 0);

function sumArray(a, b) {
    return a + b;
}
console.log(sum);

/////////////////////////////////////////////////

let sum2 = [1, 2, 3, 4].reduce(multiplyArray);

function multiplyArray(a, b) {
    return a * b;
}
console.log(sum2);

/////////////////////////////////////////////////
                // BONUS //

let reverseString = function(string) {
  return string.split("").reverse().join("");
}
console.log(reverseString("testing testing"));

/////////////////////////////////////////////////

let findLongestWord = function() {
  let arr = ["dog", "cat", "horse", "mouse"];
  let largest = 0;
  let longestWord = " ";

  for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > largest) {
      largest = arr[i].length;
      longestWord = arr[i];
      }
  }
  console.log("The longest word is "+ longestWord);
};
findLongestWord();

/////////////////////////////////////////////////

// let filterLongWords = function(string2) {
//   let arr2 = ["bike", "car"]
//   for (let i = 0; i < arr2.length; i++) {
//     if (string2.length > 1 )
//   }
// };
