/*
Write a function called areaOfCircle that will take one argument (the radius), 
calculate the area based on that, and return the result. It should also log a string 
like "The area for a circle with radius 2 is 12.566370614359172."
*/





const areaOfCircle = function(r) {

	let radius =parseInt( prompt("Please enter the radius number") );

let area = ( radius * radius ) * Math.PI;

console.log(`"The area of a circle with radius ${ radius } is ${ area.toFixed(2) }."`);

};

areaOfCircle()






/*const areaOfCircle = function(radius) {
	const area = radius * radius * Math.PI;
	const result = "The area for a circle with radius " + radius + " is " + area;
	console.log(result);


};

areaOfCircle(2);
areaOfCircle(5);*/
