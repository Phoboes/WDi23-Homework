/*
Homework - 27/07/2017
Given the following a rectangle object like the one below, write the following functions:
  isSquare - Returns whether the rectangle is a square or not
  area - Returns the area of the rectangle
  perimeter - Returns the perimeter of the rectangle
*/

// isSquare
let rectangle = {
  length: 4,
  width: 4
};

let isSquare = function () {
  if ( rectangle.length == rectangle.width) {
    console.log( "It is a square." );
    return true;
  } else {
    console.log( "not a square!" );
    return false;
  }
};

isSquare();


// area
const areaTotal = function () {
      let area = rectangle.length * rectangle.width;
      console.log( "The area is " + area );
      return;
    }
areaTotal();


// perimeter - P=2(l+w)
const perimeterTotal = function () {
  let perimeter = 2 * ( rectangle.length + rectangle.width );
  console.log( "The perimeter is " + perimeter );
}
perimeterTotal();
