let squareNumber = function (num){
  let squared = num * num;
  console.log("The result of squaring the number " + num + " is " + squared + ".");
  return squared;
}
squareNumber(4);

let halfNumber = function (num){
  let divide = num / 2;
  console.log("Half of " + num + " is " + divide + ".");
  return divide;
}
halfNumber(4);

let percentOf = function (num1, num2){
  let percentage = (num1 / num2) * 100;
  console.log(num1 + " is " + percentage + "% of " + num2 + ".");
  return percentage;
}
percentOf(4, 12);

let areaOfCircle = function (radius){
  let area = (radius * radius * Math.PI).toFixed(2);
  console.log("The area for a circle with radius " + radius + " is " + area + ".");
  return area;
}
areaOfCircle(13);



// // Write a function that will take one argument (a number) and perform the
// //following operations, using the functions you wrote earlier1:
// //
// // Take half of the number and store the result.
// // Square the result of #1 and store that result.
// // Calculate the area of a circle with the result of #2 as the radius.
// // Calculate what percentage that area is of the squared result (#3).
//
//
let something = function (num){
  console.log("in function");
  console.log("num = " + num);
  let rest1 = halfNumber(num);
  console.log("num = " + num);
  //console.log("rest1");
  let rest2 = squareNumber(rest1);
  // console.log("rest2");
  let rest3 = areaOfCircle(rest2);
  // console.log("rest3");
  let rest4 = percentOf(rest2, rest3);
  console.log(rest4);
}
something(13);
