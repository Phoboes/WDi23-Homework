/*Geometry Function Lab

Part 1, Rectangle

Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle */



/*//have some infrmation about rectangle.
let rectangle = {
	width: 4,
	length: 4,
}


//get the information from the objects.
let isSquare = function (r) {

    if (r.length === r.width) {

    console.log("This is square");

   } else {

   	console.log("This is nit square");

   }

};

//run here
 isSquare(rectangle);
*/

///////////////////////////////////////////


/*let rectangle = {
	width: 4,
	length: 4,
}

let recArea = function (r) {

   let aria = r.length * r.width;

    console.log(`${aria} is the aria of the rectangle`);

  

};

//run here
 recArea(rectangle);*/

/////////////////////////////////////////


/*let rectangle = {
	width: 4,
	length: 4,
}

let recPerimeter = function (r) {

   let perimeter = (r.length + r.width) * 2;

    console.log(`${perimeter} is the perimeter of the rectangle`);

  

};

//run here
 recPerimeter(rectangle);*/


//////////////////////////////////////////////////////////////////////////////////////////////////////

 /*Part 2, Triangle

Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not*/




/*var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};


let isEquilateral = function(E) {

if (E.sideC === E.sideB && E.sideB >= E.sideA) {

	console.log("Triangle is not equilateral")
} else {

	console.log("Triangle is equilateral")
}
};

isEquilateral(triangle);*/

////////////////////////////////////////////////////


/*var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

let isIosceles = function (I) {

	if (I.sideC === I.sideB && I.sideB >= I.sideA) {

	console.log("Triangle is Isosceles");
} else {

	console.log("Triangle is not Isosceles");
}
};

isIosceles(triangle);*/

//////////////////////////////////////////////////////


/*var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
};

let triangleArea = function (A) {
	let perimeter = (A.sideA + A.sideB+ A.sideC)/2;
	let area = Math.sqrt(perimeter*((perimeter-A.sideA)*(perimeter-A.sideB)*(perimeter-A.sideC)));
	console.log(`${area.toFixed(2)} is the area of the triangle`);
}

triangleArea(triangle);*/

/////////////////////////////////////////////////////
/*
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
};

let isObtuse = function(O) {
	if (O.sideA + O.sideB < O.sideC) {
		console.log("Triangle is not obtuse");

	} else { 

		console.log("Triangle is obtuse");

}
};

isObtuse(triangle);*/


////////////////////////////////////////////////////////


/*
The Cash Register

Write a function called cashRegister that takes a shopping cart object. 
The object contains item names and prices (itemName: itemPrice). The function 
should return the total price of the shopping cart. Example*/




// Input



/*let cartForParty = {  
  banana: 1.25,
  handkerchief: .99,
  Tshirt: 25.01,
  apple: 0.60,
  nalgene: 10.34,
  proteinShake: 22.36
};


//Ask question about why is has string through the number before.


let cashRegister = function (x) {

   let itemPrice = (x.banana + x.handkerchief + x.Tshirt + x.apple + x.nalgene + x.proteinShake);
    console.log(`The total ptice of shopping is ${ itemPrice }`);
  

};

// Output
cashRegister(cartForParty); // 60.55*/


//////////////////////////////////////////////////

/*Credit Card Validation

You're starting your own credit card business. You've come up with a new way to validate credit 
cards with a simple function called validateCreditCard that returns true or false.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
The following credit card numbers are valid:

9999-9999-8888-0000
6666-6666-6666-1666
The following credit card numbers are invalid:

a923-3211-9c01-1112 invalid characters
4444-4444-4444-4444 only one type of number
1111-1111-1111-1110 sum less than 16
6666-6666-6666-6661 odd final number
Example

validateCreditCard('9999-9999-8888-0000'); // Returns: true
Hint: Remove the dashed from the input string before checking if the input credit card number 
is valid.

Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is

{ valid: true, number: 'a923-3211-9c01-1112' } 
{ valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what 
are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm 
for inspiration.
Raw
 js-homework-bank.md
JavaScript Bank

In this homework, you'll create a basic bank in Javascript. The bank has many accounts and 
the following capabilities that you need to write.

Bank

There is only one bank. This bank has an array of accounts. The bank needs a method that will 
return the total sum of money in the accounts. It also needs an addAccount method that will 
enroll a new account at the bank and add it to the array of accounts. There is no need to 
create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common 
functionality.

Accounts

Accounts have a current balance and owner's name. You should be able to deposit or 
withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values -- you may also 
have your functions console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the 
methods do indeed work as expected: add some accounts, show the total balance, make some 
deposits and withdrawals, show the new total balance.

Tips

Don't overthink this. Shorter code is probably the answer.*/

let validNumberRule = {
  length: 16,
  




}




let validateCreditCard = function () {

// true or false

if () {
  console.log(true)
} else {
  console.log(false)
}

}







validateCreditCard('9999-9999-8888-0000'); //return "true"
validateCreditCard('4444-4444-4444-4444'); //return "false"




















