/*
Given the following a triangle object like the one below, write the following functions:
    isEquilateral - Returns whether the triangle is equilateral or not
    isIsosceles - Returns whether the triangle is isosceles or not
    area - Returns the area of the Triangle
*/

////// isEquilateral
let triangle = {
	sideA: 3,
	sideB: 5,
	sideC: 5,
  height: 4
};

const isEquilateral = function () {
  if ( triangle.sideB === triangle.sideC ) {
    console.log( "It is a triangle." );
    return true;
  } else {
    console.log( "It is not a triangle." );
    return false;
  }
};

isEquilateral();


////// area
const area = function () {
  let area = triangle.sideA * triangle.height / 2;
  console.log( "The area is " + area );
  return;
}

area();


////// isIsosceles

const isIsosceles = function () {
  if( triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC || triangle.sideB === triangle.sideC ) {
    console.log( "It is an isosceles triangle." );
    return true;
  } else {
    console.log( "It is not an isosceles triangle." );
    return false;
  }
};

isIsosceles();
