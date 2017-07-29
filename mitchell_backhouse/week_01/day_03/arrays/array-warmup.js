// max of two numbers
const maxOfTwoNumbers = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// test
console.log(maxOfTwoNumbers(2, 3), 'maxtwo');
console.log(maxOfTwoNumbers(12, 1), 'maxtwo');
console.log(maxOfTwoNumbers(200, 123), 'maxtwo');

// max of three numbers
const maxOfThree = function (num1, num2, num3) {
    let arr = [num1, num2, num3];
    return arr.sort().reverse()[0];
}

// test
console.log(maxOfThree(1, 2, 3), 'maxthree');
console.log(maxOfThree(21, 232, 993), 'maxthree');

// check for vowel
const charCheck = function (chr) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  if (vowels.includes(chr)) {
    return true;
  } else {
    return false;
  }
}

//test
console.log(charCheck('a'));
console.log(charCheck('b'));

const sumArray = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];  
  }
  
  console.log(sum);
  return sum;

  // cheating way
  // console.log(arr.reduce(add, 0);

  // function add(a, b){
  //   return a + b;
  // }
}

const multiplyArray = function (arr) {
  let mul = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    mul = mul * arr[i];
  }  

  console.log(mul);
  return mul;
}


// test
sumArray([1, 2, 3]);

console.log('----------------');

multiplyArray([1,2,3,4]);


// reverse a string
const reverseString = function (str) {
  return str.split('').reverse().join('');
}

// test
console.log(reverseString('reverse'));
console.log(reverseString(reverseString('reverse')));

// find the longest word
const filterLongestWord = function (str) {
  word_list = str.split(' ');
  longest = word_list[0];

  for (word in word_list) {
    if (word_list[word].length > longest.length) {
      longest = word_list[word];
    } 
  }

  return longest;
}

// test
console.log(filterLongestWord("This is the longest word"));
console.log(filterLongestWord("Another super long list of words"));


// find all words that are longer than i
const filterLongWords = function (str, num) {
  word_list = str.split(' ');
  arr = [];

  for (word in word_list) {
    if (word_list[word].length > num) {
      arr.push(word_list[word]);
    } 
  }

  return arr;
}

// test
console.log(filterLongWords("This is the list", 3));
