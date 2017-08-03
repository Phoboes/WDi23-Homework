/*
Write a function that will take one argument (a number) 
and perform the following operations, using the functions you wrote earlier1:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).
*/



const x = function (a) {


	let number = parseInt (prompt("Please enter your number") );
    let x = number / 2;
	console.log(`"Half of number ${number} is ${ x }"`);


	let halfOfNumber = parseInt (prompt("Please enter your result") );
    let squareNumber = halfOfNumber * 2;
	console.log(`"Square number of ${ halfOfNumber } is ${squareNumber}"`);


	let Square = parseInt (prompt("Please enter your result") );
    let areaOfCircle =  Square * Square * Math.PI;
	console.log(`"area of circle  with radius ${squareNumber} is ${areaOfCircle.toFixed()}"`);


	let area = parseInt (prompt("Please just click Ok to have a percentage result") );
    let percentage = (areaOfCircle / squareNumber) * 100;
	console.log(`"${ areaOfCircle.toFixed() } is ${ percentage.toFixed()}" % of ${squareNumber}`);

};

x();
























/*const x = function (Num) {

const halfOfNumber = Num / 2;


const squareNumber = halfOfNumber * halfOfNumber;

const areaOfCircle = squareNumber * squareNumber * Math.PI;

const percent = (squareNumber / areaOfCircle) * 100;
let message = squareNumber + " is " + percent.toFixed(2) + "% of " + areaOfCircle.toFixed(2);

console.log(message);

};


x(5);*/



























