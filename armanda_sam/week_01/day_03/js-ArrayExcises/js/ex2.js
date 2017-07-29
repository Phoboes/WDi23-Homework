/*
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/

 const maxOfThreeNum = function ( number1, number2, number3 ) {
  if ( number1 > number2 ) {
    console.log( number1 );
  }
  else if ( number2 > number3 ) {
    console.log( number2 );
  }
  else {console.log( number3 )}
 };

  maxOfThreeNum(1, 2, 3);
  maxOfThreeNum(3, 2, 1);
