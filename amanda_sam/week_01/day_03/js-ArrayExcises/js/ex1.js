/*
HOMEWORK - 26/07/2017
Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
*/

const maxOfTwoNum = function ( number1, number2 ) {
 if ( number1 > number2 ) {
   console.log( number1 );
 }
 else if ( number2 > number1 ) {
   console.log( number2 );
 }
};

 maxOfTwoNum(10, 12);
 maxOfTwoNum(89, 8);
