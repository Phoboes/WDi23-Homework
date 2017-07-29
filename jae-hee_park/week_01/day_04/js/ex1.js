// Geometry Function Lab
//
// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// var rectangle = {
//   length: 4,
//   width: 4
// };

const isSquare = function(rect){
  if (rect.length === rect.width){
    return true;
  } else {
    return false;
  }
}

const area = function(rect){
  return rect.length * rect.width;
}


const perimeter = function(rect){
  return 2 * rect.length + 2 * rect.width;
}

let rectangle = {
  length: 5,
  width: 10,
}

console.log(isSquare(rectangle));
console.log(area(rectangle));
console.log(perimeter(rectangle));


// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// var triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

const isEquilateral = function(triangle){
  if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC){
    return true;
  } else {
    return false;
  }
}

const isIsosceles = function(triangle){
  // debugger
  if ( isEquilateral(triangle) === false && ( triangle.sideA === triangle.sideB || triangle.sideB === triangle.sideC || triangle.sideC === triangle.sideA ) ){
    return true;
  }  else {
    return false;
  }
}

const triangleArea = function(triangle){
  let p = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
  let c = (p*(p-triangle.sideA)*(p-triangle.sideB)*(p-triangle.sideC));
  return Math.sqrt(c);
}

const isObtuse = function(triangle){
  if (isEquilateral(triangle) === false && isIsosceles(triangle) === false){
    return true;
  } else {
    return false;
  }
}

var triangle = {
  sideA: 3,
  sideB: 3,
  sideC: 3
};

console.log(isEquilateral(triangle));
console.log(isIsosceles(triangle));
// console.log(triangleArea(triangle));
// console.log(isObtuse(triangle));
