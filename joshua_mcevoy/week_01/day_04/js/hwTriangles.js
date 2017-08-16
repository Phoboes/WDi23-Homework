// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle


// var rectangle = {
//   length: 4,
//   width: 3
// };
//
// const isSquare = function (shape) {
//   if (shape.length === shape.width){
//     console.log("This is a rectangle");
//     return "This is a rectangle";
//   }
//   else {
//     console.log("This is not a rectangle");
//     return "This is not a rectangle";
//   }
// };
//
// isSquare(rectangle);

////////////////////////////////////////////////////


// const area = function (shape) {
//   console.log(`The area is: ${shape.length * shape.width}`);
//   return `The area is: ${shape.length * shape.width}`;
// };
//
// area(rectangle);

////////////////////////////////////////////////////

// const perimeter = function (shape) {
//   console.log(`The perimeter is: ${(shape.length * 2) + (shape.width * 2)}`);
//   return `The perimeter is: ${(shape.length * 2) + (shape.width * 2)}`;
// }
//
// perimeter(rectangle);

////////////////////////////////////////////////////


// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
//




// const isEquilateral = function (shape) {
//   if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC && triangle.sideA === triangle.sideC){
//     console.log("This is an equilateral triangle");
//   }
//   else {
//     console.log("This is NOT an equilateral triangle");
//   }
// };
//
// isEquilateral(triangle);

////////////////////////////////////////////////////

// const isIsosceles = function (shape) {
//
//   if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC && triangle.sideA === triangle.sideC){
//       console.log("This is NOT an isosceles triangle");
//     }
//   else if (triangle.sideA === triangle.sideB || triangle.sideB === triangle.sideC || triangle.sideA === triangle.sideC){
//     console.log("This is an isosceles triangle");
//   }
//   else {
//     console.log("This is NOT an isosceles triangle");
//   }
// };
//
// isIsosceles(triangle);

////////////////////////////////////////////////////

// area - Returns the area of the Triangle

// const area = function (shape) {
//   let perimeter = (triangle.sideA + triangle.sideB + triangle.sideC)/2;
//   console.log(Math.sqrt(perimeter*((perimeter-triangle.sideA)*(perimeter-triangle.sideB)*(perimeter-triangle.sideC))));
// };
//
// area(triangle);

////////////////////////////////////////////////////


// isObtuse - Returns whether the triangle is obtuse or not



const isObtuse = function (sideA, sideB , sideC) {
  //change arguments to int and order ascending
  let array = [sideA, sideB, sideC];
  let sortedArray = array.sort();

  if ( (parseInt(sortedArray[0]) + parseInt(sortedArray[1])) > parseInt(sortedArray[2])){
    console.log(`This is an obtuse triangle.`);
    return true;
  }
  else {
    console.log(`This is not a triangle.`);
    return false;
  }
  };


isObtuse('5', '4', '3');
