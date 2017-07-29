/*
Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:
If the number contains 3 as a factor, output 'Pling'.
If the number contains 5 as a factor, output 'Plang'.
If the number contains 7 as a factor, output 'Plong'.
If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
*/

const assignNum = function ( number ) {
 if ( number % 3 === 0) {
   console.log("Pling");
 } else if ( number % 5 === 0) {
   console.log("Plang");
 }
 else if ( number % 7 ===0) {
   console.log("Plong");
 }
 else {
   return number;
 }
};

// const raindrop = function ( num ){
// let output = "";
//
// if ( num % 3 === 0){
//   output += "Pling";
// }
// if ( num % 5 === 0){
//   output += "Plang";
// }
// if (num % 7 ===0){
//   output += "Plong";
// }
//
// console.log( output );
// return output;
// }
//
// raindrop(3);
// raindrop(15);
// raindrop(21);


// const raindrop = function( num ){
//
//   let output = '';
//
//   if( num % 3 === 0 ){
//     output += "Pling";
//   }
//
//   if ( num % 5 === 0 ){
//     output += "Plang";
//   }
//
//   if ( num % 7 === 0 ){
//     output += "Plong";
//   }
//
//   if( output === '' ) {
//     output += num;
//   }
//
//   console.log( output );
//   return output;
// };
//
// raindrop( 3 );
// raindrop( 5 );
// raindrop( 7 );
// raindrop( 11 );
// raindrop( 1755 );
