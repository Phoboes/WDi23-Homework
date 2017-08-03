  // PART ONE - Rectangle

let isSquare = function(length, width) {
  let rect = "rectangle";
  if (length === width) {
    console.log("this " + rect + " is square");
  } else {
    console.log("this " + rect + " is not square");
  }
  return rect;
};
isSquare(4, 4);

///////////////////////////////////////////////////////

let rectangleArea = function(length, width) {
  let result = length * width;
  console.log("area of this rectangle is " + result);
  return result;
};
rectangleArea(2, 3);

///////////////////////////////////////////////////////

let rectanglePerimeter = function(length, width) {
  let result = (length + width) * 2;
  console.log("the perimeter of the rectangle is " + result);
  return result;
};
rectanglePerimeter(45, 35);

///////////////////////////////////////////////////////

// PART TWO - Triangle

let isEquilateral = function(side1, side2, side3) {
  if (side1 === side2 && side1 === side3) {
    console.log("the triangle is equilateral");
  } else {
    console.log("the triangle is not equilateral");
  }
};
isEquilateral(3, 3, 3);

///////////////////////////////////////////////////////

let isIsosceles = function(side1, side2, side3) {
  if (side1 === side2 || side1 === side3 || side2 === side3) {
    console.log("the triangle is isosceles");
  } else {
    console.log("the triangle is not isosceles");
  }
};
isIsosceles(3, 2, 4);

///////////////////////////////////////////////////////

let triangleArea = function(base, height) {
  let result = (base * height) / 2;
  console.log("area of the triangle is " + result);
  return result;
};
triangleArea(4, 7);

///////////////////////////////////////////////////////

// The Cash Register

let shoppingCart = {
  bread: "5.40",
  water: "0.90",
  cheese: "3.50",
  banana: "2.90",
  steak: "59.85",
  eggs: "6.50"
};
let sum = 0;

let cashRegister = function(sum) {
  for (var key in shoppingCart) {
      sum += Number(shoppingCart[key]);
  }
  console.log(sum);
};
cashRegister(sum);

///////////////////////////////////////////////////////

// Credit Card Validator

// let validateCreditCard = function(m) {
//   if  {
//     console.log("valid number");
//   } else {
//     console.log("invalid number");
//   }
// };
// validateCreditCard();
