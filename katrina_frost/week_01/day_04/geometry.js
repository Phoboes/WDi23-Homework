
// --------------------- RECTANGLE -------------------------------

// Part 1, Rectangle
// Given the following a rectangle object like the one below,
//write the following functions:
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// var rectangle = {
//   length: 4,
//   width: 4
// };

//Object Creation
  let rectangle = {
  	length: 4,
  	width: 4
};

  // checks the rectangle is a square and if its length and width match
let isSquare = function(rectangle){
  if (rectangle.length === rectangle.width){
  	return true;
  } else {
  	return false;
  }
}

// return rectangle area
let area = function(rectangle){
   return rectangle.length * rectangle.width;
  }

// returns the perimeter of the rectangle.
let perimeter = function(){
return 2*(rectangle.length + rectangle.width);
  }

  // function call and checks
console.log("Rectangle length is " +rectangle.length + " and width is also " + rectangle.width);
console.log("Is it a square? " + isSquare(rectangle));
console.log("The area is: " + area(rectangle));
console.log("The perimeter is: " + perimeter(rectangle));

//  ------------------ TRIANGLE ---------------------------

// Given the following a triangle object like the one below,
//write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// (Isosceles - having two sides of equal length.)
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// (obtuse - (of an angle) more than 90° and less than 180°)
// var triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

let triangle = {
	sideA: 3,
	sideB: 4,
	sideC: 4
};

// Equilateral triangle - if all its side are equal.
const isEquilateral = function(triangle) {

	if(triangle.sideA === triangle.sideB  &&  triangle.sideB === triangle.sideC) {
		return true;

  } else {
		return false;
	}
}

// Isosceles triangle - if any two of its side are equal.
const isIsosceles = function(triangle) {

  if(isEquilateral(triangle) !== true) { //checks if 2 sides are equal

		if(triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC || triangle.sideB === triangle.sideC) {
      // triangle.sideA (=== has equal value&type) to triangle.sideB (|| or)
      //triangle.sideA (=== has equal value and equal type) to triangle.sideC or
      //triangle.sideB as equal value and equal type triangle.sideC
      return true;

		} else {
			return false;
		}

	  } else {
			return false;
	}
}

// triangle.sideA (=== has equal value&type) to triangle.sideB (|| or)
//triangle.sideA (=== has equal value and equal type) to triangle.sideC or
//triangle.sideB as equal value and equal type triangle.sideC

const triangleArea = function(triangle){

	let triPerimeter = (triangle.sideA +  triangle.sideB +  triangle.sideC )/ 2;

	let triArea = Math.sqrt(triPerimeter * (triPerimeter - triangle.sideA) * (triPerimeter - triangle.sideB)* (triPerimeter - triangle.sideC));

	return triArea;
}

// A triangle is an Obtuse triangle if one of its angle is greater than 90
// the larger side is opposite to the angle > 90
// so we use the formula  c^2 > a^2 + b^2 to check for Obtuse angle (pytha theorem+ Cosine formulae)
// we can also check using c^2 - a^2 - b^2 > 0

const isObtuse = function(triangle){

	// using temporary array to sort the sides in ascending order by calliung the array.sort()
	let tempArray =[];
	tempArray.push(triangle.sideA,triangle.sideB,triangle.sideC);

	tempArray.sort(); // sorting the values in ascending order

	let side1 = parseInt(tempArray.shift());
	let side2 = parseInt(tempArray.shift());
	let side3 = parseInt(tempArray.shift());

//power of
	if(Math.pow(side3, 2) > ( Math.pow(side1, 2) + Math.pow(side2, 2) ) ){
		return true;

	} else {
		  return false;
	}
}


// calling the functions
console.log('Properties of the Triangle :' + " Side A = " + triangle.sideA +
																						 " Side B = " + triangle.sideB +
																						 " Side C = " + triangle.sideC);
console.log("Is the triangle Obtuse? " + isObtuse(triangle));
console.log("Is the triangle Equilateral? " + isEquilateral(triangle));
console.log("Is the triangle Isosceles? " + isIsosceles(triangle));
console.log("The area of the Isosceles triangle is " + triangleArea (triangle));
