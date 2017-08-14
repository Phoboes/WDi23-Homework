// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:

// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400
// Test Data... Make sure it is working!

// 1997 is not a leap year, it should return false
// 1996 is a leap year, it should return true
// 1900 is not a leap year, it should return false
// 2000 is a leap year, it should return true

// ---------------------------------------------
//                FIRST ITERATION
// ---------------------------------------------


// const isLeapYear = function( year ){

//   if( year % 4 === 0 ){

//     if( year % 100 === 0 && year % 400 !== 0 ){
//        console.log( "That's not a leap year!" );
//       return false; 
//     }

//     console.log( "That's a leap year!" );
//     return true;
//   } else {
//     console.log( "That's not a leap year." );
//     return false;
//   }
// }

// ---------------------------------------------
//                SECOND ITERATION
// ---------------------------------------------


// const isLeapYear = function( year ){

//   if( !year ){

//   // Prompts return string by default parseInt will get any *WHOLE* numbers from the prompt as numbers.
//     year = parseInt( prompt("Give me a number:") );
//   }

//   if( year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0 ) ){
//     console.log( "That's a leap year!" );
//     return true;
//   } else {
//     console.log( "That's not a leap year." );
//     return false;
//   }
// };

// ---------------------------------------------
//        THIRD FANCY TERNARY ITERATION
// ---------------------------------------------



// const isLeapYear = function( year ){

//   // This is a logical assignment, it is the same as the if statement above:

//   //   if( !year ){
//   //     year = parseInt( prompt("Give me a number:") );
//   //   }

//   // All it says, is, if there is a year parameter, keep that. If it's falsy, run the prompt and store that in the year variable, then carry on.

//   year = year || parseInt( prompt("Give me a number:") );

//   // Ternary operators act as very short if/else statements. The structure is as follows:
//   // condition ? true : false

//   return ( year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0 ) ) ? true : false

//   // Ternaries are useful for things like string interpolation and *very* short logic blocks.
//   // Ideally don't rely on these things, they make your code hard to read, especially when nested. Don't do that.

// };


// ---------------------------------------------
//        FOURTH ITERATION ES6 DEFAULTS
// ---------------------------------------------

// es6 gives us the option of a default parameters, which removes the need for the variable asignment above. If no param given, prompt the user.

// const isLeapYear = function( year = parseInt( prompt("Give me a number:") ) ){
//   return ( year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0 ) ) ? true : false
// };

// ---------------------------------------------
// NOTES:

// The above is a really confusing line, it's quite hard to read. I would almost consider it bad code. A slightly cleaner approach would look like this:

// ---------------------------------------------
//        FIFTH ITERATION -- READABILITY
// ---------------------------------------------

const isLeapYear = function( year = parseInt( prompt("Give me a number:")) ){

// a leap year is divisibly by 4, and not divisible by 100 ( unless it's divisible by 400 )
  const isLeap = ( year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0 ) );
  
  // Notice how much less confusing the ternary is with the logic delegated.
  return isLeap ? true : false;
};

console.log( "1996 should be true:" );
console.log( isLeapYear( 1996 ) );

console.log( "1997 should be false:" );
console.log( isLeapYear( 1997 ) );

console.log( "1900 should be false:" );
console.log( isLeapYear( 1900 ) );

console.log( "2000 should be true:" );
console.log( isLeapYear( 2000 ) );

// Because the ternary is only *returning*, a log is required, or the function is mute.

// To trigger the prompt, isLeapYear must be called with no argument or a falsy argument.

console.log( isLeapYear() );