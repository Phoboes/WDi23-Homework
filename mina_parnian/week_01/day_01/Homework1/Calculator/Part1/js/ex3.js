/*
Write a function called percentOf that will take two numbers, 
figure out what percent the first number represents of the second number, 
and return the result. It should also log a string like "2 is 50% of 4."rks.

*/








const percentOf = function (a) {

    let number1 = parseInt( prompt("Give me a number1:") );
    let number2 = parseInt( prompt("Give me a number2:") );

     let getPercent = (number1 / number2) * 100

	
	console.log(`"${ number1 } is ${ getPercent } % of ${ number2 }. "`)


};
 
percentOf() 





/*const percentOf = function (a, b) {
	let firstNum = a;
	let secondNum = b;
	let percent = (a / b) * 100;
	let message = a  + " is " + percent + " % of " + b;
	console.log(message);
}


percentOf(2, 4);
percentOf(8, 4);
percentOf(10, 4);
*/
