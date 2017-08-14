
// ---------------- THE CALCULATOR --------------- //

// ---------------- SQUARE NUMBER ----------------- //

// Write a function called squareNumber that will take one argument (a number),
// square that number, and return the result.
// It should also log a string like "The result of squaring the number 3 is 9."

console.log("Hello World");

function squareNumber(number) {
  const squaredNumber = number * number;
  console.log('The result of squaring the number ' + number + ' is ' + squaredNumber);

  return squaredNumber;
}

squareNumber(3);
squareNumber(230);

// ---------------- HALF NUMBER ------------------ //

//Write a function called halfNumber that will
//take one argument (a number), divide it by 2, and
//return the result. It should also log a string like "Half of 5 is 2.5.".

function halfNumber(number) {
  const half = number / 2;
  console.log("Half " + number + " is " + half);

  return half;
}

halfNumber(10);
halfNumber(99);
halfNumber(120);

// ---------------- PERCENT OF NUMBER ------------------ //

//Write a function called percentOf
//that will take two numbers,
//figure out what percent the first number represents of the second number,
//and return the result. It should also log a string like "2 is 50% of 4."

function percentOf(num1, num2) {
  const percent = (num1/num2) * 100;
  console.log(num1 + " is " + percent + "% of " + num2);

  return percent;
}

percentOf(50, 100);
percentOf(55, 80);
percentOf(23, 60);

// ---------------- AREA OF CIRCLE ------------------ //

//Write a function called areaOfCircle that will
//take one argument (the radius),
//calculate the area based on that,
//and return the result.
//It should also log a string like
//"The area for a circle with radius 2 is 12.566370614359172."
//Bonus: Round the result so there are only two digits after the decimal.

function areaOfCircle(radius) {
  const area = Math.ceil (Math.PI * squareNumber(radius));
  console.log('The area of circle with radius ' + radius + ' is ' + area);

  return area;
}

areaOfCircle(2);
