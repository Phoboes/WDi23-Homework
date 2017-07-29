/*
Write a function called squareNumber that will take one argument (a number), 
square that number, and return the result. It should also log a string 
like "The result of squaring the number 3 is 9."


*/







const squareNumber = function (a) {
	const number = a * a;
	const result = "The result of squaring the number " + a + " is " + number;
	console.log(result);
}

squareNumber(2);
squareNumber(6);
































