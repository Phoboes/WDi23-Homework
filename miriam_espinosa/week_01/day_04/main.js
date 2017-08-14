/*
Part 1, Rectangle

Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
var rectangle = {
  length: 4,
  width: 4
};

*/

let object = {
  length: 4,
  width: 4
}

//isSquare - Returns whether the rectangle is a square or not

let isSquare = function (s){
  if (s.length === s.width){
    console.log("It is a square");
  } else {
    console.log("It is not a square");
  }
};
isSquare (object);

//area - Returns the area of the rectangle

let isArea = function (s){
  let area = object.length * object.width;
    console.log(`The area of the object is  ${area} `);

};
isArea (object);

//perimeter - Returns the perimeter of the rectangle

let isPerimeter = function (p) {
  let perimeter = (object.length + object.width) * 2;
    console.log(`The perimeter of the object is ${perimeter} `);
}
isPerimeter (object);
