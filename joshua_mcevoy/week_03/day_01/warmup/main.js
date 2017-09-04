// The Sieve of Eratosthenes is a simple, ancient algorithm for finding all prime numbers up to any given limit.
//
// Create your range, starting at two and ending at the given limit.
//
// The algorithm consists of repeating the following over and over:
//
// take the next available unmarked number in your list (it is prime)
// remove all the multiples of that number (they are not prime)
// Repeat until you don't have any possible primes left in your range.
//
// When the algorithm terminates, all the numbers in the list that have not been removed are prime.
//
// Do this in Javascript!

const sieve = function(num) {
    let array = [];
    let primes = [];
    for (let i = 2; i <= num; ++i) {
        if (!array[i]) {
            primes.push(i);
            for (j = i * 2; j <= num; j += i) {
                array[j] = true;
            }
        }
    }
    return primes;
}
//
// const primeNums = function (num) {
//   let prime = [];
//   for (let i = 2; i <= num; i++){
//     // a number that has exactly two factors.
//     // a number that can only be divided evenly by itself and one.
//     if (){
//       prime.push(i);
//     }
//   }
//   return prime;
// };

// const sieve = {
//
//   numbers: [],
//   counter: 0,
//
//   calculatePrimes: function (max) {
//     this.counter = 0;
//     for ( let i = 0; i < max; i++){
//       this.numbers[i] = true;
//     }
//     for (let i = 2; i < this.numbers.length; i++){
//       let currentNumber = i; //quality of life
//       for (let j = currentNumber + 1; j < this.numbers.length; j++){
//         if ((this.number[j] === true) && (j % currentNumber === 0)){
//           this.numbers[j] = false;
//         }//if
//         this.counter++
//       }// j loop
//     }// i loop
//     console.log(this.numbers);
//     this.printPrimes(this.numbers);
//   }, //calculatePrimes
//
//   printPrimes: function (primes) {
//     let primesList = [];
//     for (let i = 0; i < primes.length; i++){
//       if (primes[i] === true){
//         primesList.push(i);
//       }//if
//     }//for
//     console.log(`primes found: ${primes.length}`);
//     console.log(`Primes: ${primesList.join(', ')}`);
//   }
//
// }; // obj
