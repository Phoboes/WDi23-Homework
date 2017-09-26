// Happy Numbers

// A happy number is defined by the following process:

// Starting with any positive integer,
// replace the number by the sum of the squares of its digits, and
// repeat the process until

// the number equals 1 (where it will stay),
// or it loops endlessly in a repeating cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy numbers, while those for which this process do not end in 1 are unhappy numbers.

// Task

// Your task is to write a program in Javascript which prints the first 10 happy numbers, starting from 1.

// Here are the first 10 happy numbers, for you to compare your output against:
// 1, 7, 10, 13, 19, 23, 28, 31, 32, 44

const happy = {

  steps: [],
  happyCollection: [],

  // Take a number - break it into its components
  // Square each of those components
  // sum the components of the number, eg:

    // 32 = 3, 2.  
    // 3 * 3 = 9
    // 2 * 2 = 4

    // Total = 9 + 4 = 13

  squareSum: function( num ){
    num = num.toString().split('');
    let sum = 0;

    num.forEach( function( digit ){
      sum += digit * digit;
    });
    return sum;
  },

  // Going to take a number - loop over that number passing to squareSum until:
    // The number becomes 1
    // Repeat a number

  happyCheck: function( num ){
    this.steps = [];

    // IndexOf returns -1 if the item isn't found in a collection. Anything else is a match, which is why we check for 0+
    while( num !== 1 && this.steps.indexOf( num ) < 0 ){
      this.steps.push( num );
      // It is critically important the value of num changes every time, as it is how we escape the while loop.
      num = this.squareSum( num );
    }

    // Once the loop is done, if the num reduces to 1, it's happy.
    if( num === 1 ){
      return true;
    } else {
      return false;
    }
  },

  // Given a number -- count up to that number of happyNums
  // Return an array of n happy numbers.

  happyRange: function( num ){
    this.happyCollection = [];

    // Rather than check that I've just counted to num, the for loop checks the length of the happyCollection array. I want n happyNums, not to run 10 times.

    for( let i = 1; this.happyCollection.length < num; i++ ){
      // Happycheck returns a boolean at the end of each statement -- so I can evaluate it directly
      if( this.happyCheck( i ) ){
        // if it returned true, I got a happy number with i and need to save it.
        this.happyCollection.push( i );
      }
    }

    return this.happyCollection;
  }
};