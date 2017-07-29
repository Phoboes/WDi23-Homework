// Warmup - Raindrops

// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:

// If the number contains 3 as a factor, output 'Pling'.
// If the number contains 5 as a factor, output 'Plang'.
// If the number contains 7 as a factor, output 'Plong'.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string.

// ------------------------------------------------------------

// Notes:

// The reason for having all these split if statements is because if/if else & else have dependencies on eachother. Should one of the conditions be met by any of the if/else statements, the program stops on that.

// Instead, we need to check for multiple conditions. As a result, there are several disconnected if statements, rather than a big if/else block.


// This variable will *always* be this function -- it never changes, so we use the const assignment.
const raindrop = function( num ){

  // This empty string is where we build up our string, it needs to be changeable, so we use let.
  let output = '';

  // The modulus operator '%' checks for the remaining numbers from a division.
  // If there is no remainder, we can say it has an equally divisible sum.
  if( num % 3 === 0 ){
    output += "Pling";
  }

  if ( num % 5 === 0 ){
    // += is a shorthand operator. Expanded it looks like this:
    // output = output + "Plang";

    // Read more about shorthand operations here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators
    output += "Plang";
  }

  if ( num % 7 === 0 ){
    output += "Plong";
  } 

  // If the output didn't meet any of the above if statements, it is going to still be an empty string, so we want tou output the original number as a string.'' + 8 = "8".
  if( output === '' ) {
    output += num;
  }

  console.log( output );
  return output;
};

raindrop( 3 );
raindrop( 5 );
raindrop( 7 );
raindrop( 11 );
raindrop( 1755 );
