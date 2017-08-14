/*
Part 2, Triangle

Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
*/

let triangle = {
  sideA: 4,
  sideB: 4,
  sideC: 4,
}

//isEquilateral - Returns whether the triangle is equilateral or not

let isEquilateral = function (e){
  if (e.sideA === e.sideB && e.sideB === e.sideC){
    console.log("It is equilateral");
  } else {
    console.log("It is not equilateral");
  }
};
isEquilateral (triangle);

//isIsosceles - Returns whether the triangle is isosceles or not

let isIsosceles = function (is){
  if (is.sideA === is.sideB && is.sideB != is.sideC){
    console.log("It is isosceles");
  } else if (is.sideA !== is.sideB && is.sideB === is.sideC){
    console.log("It is isosceles");
  }else {
    console.log("It is not isosceles");
  }
};
isIsosceles (triangle);

//area - Returns the area of the Triangle

let isArea = function (a){
  let perimeter = (a.sideA + a.sideB + a.sideC)/2;
  let area =  Math.sqrt(perimeter*((perimeter-a.sideA)*(perimeter-a.sideB)*(perimeter-a.sideC)));
    console.log(`The triangle are is ${area.toFixed(2)}`);
};
isArea (triangle);

debugger;
//isObtuse - Returns whether the triangle is obtuse or not      a2+b2<c2

let isObtuse = function (o){
  if ( ((o.sideA  * o.sideA ) + (o.sideB  * o.sideB ) < (o.sideC  * o.sideC )) ||
         ((o.sideA  * o.sideA ) + (o.sideC  * o.sideC ) < (o.sideB  * o.sideB )) ||
         ((o.sideC  * o.sideC ) + (o.sideB  * o.sideB ) < (o.sideA  * o.sideA )) ) {
    console.log("It is obtuse");
  }else {
    console.log("It is not obtuse");
  }
};
isObtuse (triangle);
