// ---------------- RECAP ------------------ //

// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations,
//using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).

function recap(num) {
  const half = halfNumber(num);
  const squared = squareNumber(half);
  const area = areaOfCircle(squared);
  const perc = percentOf (area, squared);

  console.log (perc);
}

recap(5);

// --------------- DR EVIL ------------------- //

// Create a function called DrEvil. It should take a single argument,
//an amount, and return ' dollars', except it will add '(pinky)'
//at the end if the amount is 1 million.

function drEvil(amount) {

  if (amount == 1000000) {
    return amount + " dollars pinky";

  } else {
    return amount + " dollars";
  }
}

drEvil(1000000);
drEvil(1);

// --------------- MIX UP ------------------- //

//Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings
//(separated by a space)
//slicing out and swapping the first 2 characters of each.
//You can assume that the strings are at least 2 characters long.

const mixUp = function (a, b) {

    let sliceA = a.slice(0, 2);
    let sliceAa = a.slice(2);
    let sliceB = b.slice(0, 2);
    let sliceBb = b.slice(2);
    let string = sliceA + sliceBb + " " + sliceB + sliceAa;

    console.log(string);
};

mixUp('orange', 'bread');

// ------------ VERBING ----------------- //

//Create a function called verbing.
//It should take a single argument, a string.
//If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
//in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.

function verbing(word) {

  if (word.length < 3) return word;
  if (word.slice(-3) == 'ing') {

    return word + 'ly';

  } else {

    return word + 'ing';
 }
}

verbing('swim')
verbing('swimming')
verbing('go')

// ---------- NOT BAD -------------------- //

//Create a function called notBad that takes a single argument, a string.
//It should find the first appearance of the substring 'not' and 'bad'.
//If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
//If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

function notBad(sentence) {

  let notIndex = sentence.indexOf('not');
  let badIndex = sentence.indexOf('bad');

  if (notIndex == -1 || badIndex == -1 || badIndex < notIndex) return sentence;

  return sentence.slice(0, notIndex) + 'good' + sentence.slice(badIndex + 3);
}
