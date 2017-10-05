// const primesObject = {
//
//   primes: [],
//
//   sieve: [],
//
//   getPrimes: function(number){
//     for (let i = 0; i <= number; i++) {
//       if (!primesObject.sieve[i]) {
//         primesObject.primes.push(i);
//         for (let j = i << 1; j <= number; j += i) {
//             primesObject.sieve[j] = true;
//         }
//       }
//     }
//     return primesObject.primes
//   },
//
// };
//
// primesObject.getPrimes(4);


// const getPrimes = function(num){
//
//   for (let i = 2; i <= num; i++) {
//     if (i % 2 === 0){
//       return;
//     }
//     else {
//       console.log(`prime`);
//     }
//   }
//
// }
//
// getPrimes(60);
//

const primes = {
  numRange: [],
  primeRange: [],
  factorRange: [],

  setNums: function( num ) {
    this.numRange = [];
    for ( let i = 2; i < num; i++ ) {
      this.numRange.push( i );
    }
    return this.numRange;
  }, // setNums function

  setPrimes: function( num ) {
    this.primeRange = [];
    this.setNums( num );

    for ( let i = 0; i < this.numRange.length; i++ ) {
      const primeCandidate = this.numRange[ i ];
      let isPrime = true;

      for ( let j = 2; j < primeCandidate; j++ ) {
        if( primeCandidate % j === 0 ){
          isPrime = false;
        }//if
      }//j loop

      if(isPrime){
        this.primeRange.push( primeCandidate );
      }

    }// i loop
    return this.primeRange;
  },

  setFactors: function( num = 60 ){
    this.factorRange = [];
    this.setPrimes( num );

    for ( let i = 0; i < this.primeRange.length; i++ ) {
      const currentPrime = this.primeRange[ i ];
      console.log( currentPrime );

      while( num % currentPrime === 0 ){
        this.factorRange.push( currentPrime );
        num = num / currentPrime;
      } // while
    } // i loop
    return this.primeRange;
  }// setFactors function

};// primes object
