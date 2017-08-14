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

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 5
};

const isObtuse = function (shape) {
let array = [triangle.sideA, triangle.sideB, triangle.sideC];
let num1 = 0;
let num2 = 100000;
let largestNumber = "";
let smallestNumber = "";
let middleNumber = "";

for (let i = 0; i < array.length; i++){
  if (array[i] > num1){
    largestNumber = array[i];
    console.log( `largestNumber = ${largestNumber}`);
  }
  if (array[i] < num2){
    smallestNumber = array[i];
    console.log( `smallestNumber = ${smallestNumber}`);
  }
  if ()

}
//////////// have to order sides in size then allocate to correct area

  // if (smallestNumber * smallestNumber)+(triangle.sideB * triangle.sideB) > (largestNumber * largestNumber){
  //   console.log("This is acute triangle");
  // }
  // else {
  //   console.log("This triangle is being obtuse");
  // }
};

isObtuse(triangle);
