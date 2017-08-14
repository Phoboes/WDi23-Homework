//1
const maxOfTwoNumbers = function (n1, n2) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
}

console.log(maxOfTwoNumbers(9, 99));

//2
const maxOfThree = function (n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    return n1;
  } else if (n2 > n1 && n2 > n3) {
    return n2;
  } else {
    return n3;
  }
}

console.log(maxOfThree(3, 8 ,12));

//3
const hasVowelChar = function (word) {
  const vowelChar= ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j <vowelChar.length; j++) {
      if (word[i] === vowelChar[j]) {
        return true;
      } else {
        return false;
      }
    }
  }
}

console.log(hasVowelChar("hello"));

//4
const sumArray = function (inputArray) {

  let sum = 0;

  for (let i = 0; i < inputArray.length; i++) {
    sum += inputArray[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 4]));

const multiplyArray = function (inputArray) {

   let total = 1;

   for (let i = 0; i < inputArray.length; i++) {
     total *= inputArray[i];
   }

   return total;
}

console.log(multiplyArray([1,4,5]));

//5
const reverseString = function (str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

console.log(reverseString("hello"));

//6
const findLongestWord = function (str) {

  let strSplit = str.split(' ');
  let longestWord = 0;

  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length;
    }
  }
  return longestWord;
}

console.log(findLongestWord("hello yolo purple"));

//7
const filterLongWords = function (str, num) {

  let strSplit = str.split(' ');
  let arr = [];

  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > num) {
      arr.push(strSplit[i]);
    }
  }

  return arr;
}

console.log(filterLongWords("hello mama goose", 4));
