/*
Bonus: Round the result so there are only two digits after the decimal.
*/







const areaOfCircle = function(radius) {
	const area = radius * radius * Math.PI ;
	const result = "The area for a circle with radius " + radius + " is " + area.toFixed(2);
	console.log(result);


};

areaOfCircle(2);
areaOfCircle(5);