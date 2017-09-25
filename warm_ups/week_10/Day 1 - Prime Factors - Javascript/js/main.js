// PRIME FACTORS:
// -----------------------
// https://gist.github.com/Phoboes/b9c8402fdd563a4ec8d055027b19b0c6
// -----------------------

// My approach has three steps:

// Numbers phase: Generate a range from 2 to a given number
// Prime phase: Pluck all primes from that range of numbers
// Factor phase: Going through primes and dividing my given number by each of those primes

const primes = {

  // My three storage arrays for each stage of the program: Numbers, primes & factors
  numRange: [],
  primeRange: [],
  factorRange: [],

  // STEP ONE: Number range:
  // -----------------------

  // All this function does is generate a range from 2 (my first prime) to a given number
  setNums: function( num ){
    // I always want a blank array to push to in case this function gets called repeatedly.
    // I will continue this for each function for consistency's sake.
    this.numRange = [];

    for( let i = 2; i <= num; i++ ){
      this.numRange.push( i );
    }

    // I prefer to return values from functions, but it isn't necessary. They are stored in the numRange key in the object.
    return this.numRange;
  },


  // STEP TWO: Prime range:
  // -----------------------

  // This function uses the range of number to begin plucking out prime numbers.
  setPrimes: function( num ){
    this.primeRange = [];
    // Because this function depends on having a number range to iterate, I will invoke setNums before doing any logic.
    this.setNums( num );


    // Iterate all of the numbers in my range -- literally just stepping through numRange
    for( let i = 0; i < this.numRange.length; i++ ){

      // primeCandidate is a snapshot of the current item in the numRange array -- exclusively for readability
      const primeCandidate = this.numRange[i];

      // The logic loop:
        // A prime number is a number that is only evenly divisible by 1 and itself. 
          // The first 5 primes are: 2, 3, 5, 7, 11
            // 4 is disqualified because between 1 and 4 there is the number 2 -- which is an equal division. 

        // Using the number we have "snapshotted" (this.numRange[i]), count from 2 (the first prime) to that snapshotted value. For instance, if we are evaluating the number 4, we don't care about any number above it.

        // Assume any number is prime *until* we find an even division.

      let isPrime = true;
      for( let j = 2; j < primeCandidate; j++ ){
        if( primeCandidate % j === 0 ){
          // As per Harry's input: We can escape this loop as soon as a match is found if we so choose. Continue escapes this loop.
          continue;
          isPrime = false;
        }
      }

      // Once the "j" loop has finished, we have either disqualified the number, or isPrime is still true.
      // If it is still true -- we have a prime number and want to store it.
      if( isPrime ){
        this.primeRange.push( primeCandidate );
      }

    }
    // Again, I prefer my functions return a value.
    return this.primeRange;
  },

  // STEP THREE: Factor range:
  // -----------------------

  // This is our final function. Using the prime range set by setPrime, take a number and evaluate prime factors.

  // The basic logic:
    // Grab a prime from my list
      // Is the number given to my function divisible by that prime? If so, save it. If not, next prime.
    // For each match, divide my original number down by the factor and repeat the test.

    // Looking at the example of 60:
      // 60 / 2 (the first prime)? Yes. Save the factor, divide the number.
        // Current number: 30, current prime: 2, Saved factors: [2]
      // 30 / 2? Yes.
        // Current number: 15, current prime: 2, Saved factors: [2, 2]
      // 15 / 2 ? No. Go up a prime.
      // 15 / 3 ? Yes.
        // Current number: 5, current prime: 3, Saved factors: [2, 2, 3]
      // 5 / 3 ? No. Up a prime.
      // 5 / 5 ? Yup.

      // Done:
      // Current number: 0, Saved factors: [2, 2, 3, 5]


  setFactors( num = 60 ){

    // I've given the function a default value of 60, which it immediately passes to setPrimes (which calls numRange) to ensure I have primes to iterate.
    this.factorRange = [];
    this.setPrimes( num );

    // First loop steps through all the primes that I've generated
    for( let i = 0; i < this.primeRange.length; i++ ){

      // Again, this is just for readability. For a function this small, I usually wouldn't bother, but I want this code consistent.
      const currentPrime = this.primeRange[i];

      // While whatever number I've snapshotted can be used to reduce the given number, divide the number by that prime (and save the prime, it's a factor).

      // I am using a while loop so I can freeze on a given prime, 60 for instance has 2 as a prime factor twice. If I just used a for loop, I'd end up with either:
      // A lot more logic
      // A single match for each index ([2,3,5] instead of [2,2,3,5]).

      while( num % currentPrime === 0 ){
        this.factorRange.push( currentPrime );
        // You could also use num /= currentPrime -- but I find that harder to read.
        num = num / currentPrime;
      }
    }
    return this.factorRange;
  }
};

console.log( `The prime factors of 60 are: ${ primes.setFactors(60).join(', ') }.` );