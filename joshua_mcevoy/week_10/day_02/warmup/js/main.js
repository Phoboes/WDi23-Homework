// A happy number is defined by the following process:
//
// Starting with any positive integer,
// replace the number by the sum of the squares of its digits, and
// repeat the process until
// the number equals 1 (where it will stay),
// or it loops endlessly in a repeating cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy numbers, while those for which this process do not end in 1 are unhappy numbers.
//
// Task
//
// Your task is to write a program in Javascript which prints the first 10 happy numbers, starting from 1.
//
// Here are the first 10 happy numbers, for you to compare your output against:
//
// 1
// 7
// 10
// 13
// 19
// 23
// 28
// 31
// 32
// 44

// const happyNumbers = function(num){
//   if (num > 0){
//     let finishedNum = 0;
//     let newNum = num * num;
//     let splitNum = newNum.toString().split("");
//     for (let i = 0; i < splitNum.length; i++) {
//       console.log(splitNum[i]);
//       let backToNum = parseInt(splitNum[i])
//
//       backToNum * backToNum;
//
//
//     }
//     console.log(finishedNum);
//   }else {
//     console.log(`You've made this number sad.`);
//   }//if else
// };//happyNumbers function
//
// happyNumbers(44);

const happy = {

  steps: [],
  happyCollection: [],

  squareSum: function( num ){
    num = num.toString().split('');
    console.log(num);
    let sum = 0;

    num.forEach( function( digit ){
      sum += digit * digit;
    });//forEach
    return sum;
  },//squareSum function

  happyCheck: function( num ){
    this.steps = [];

    while( num !== 1 && this.steps.indexOf( num ) < 0 ){
      this.steps.push( num );
      num = this.squareSum( num );
    }; //while

    if( num === 1 ){
      return true;
    }else {
      return false;
    };
  }, //happyCheck function

  happyRange: function( num ){
    this.happyCollection = [];

    for ( let i = 1; this.happyCollection.length < num; i++ ) {
      if( this.happyCheck( i ) ){
        this.happyCollection.push( i );
      }//if
    }//i loop

    return this.happyCollection;
  }, //happyRange

};//happy object
