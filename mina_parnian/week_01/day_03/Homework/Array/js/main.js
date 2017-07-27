/*
Array and Functions Bonus Material

Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest 
of them. Use the if-then-else construct available in Javascript. You'll have to remember your 
pre-work, or do some googling to figure this out.

Define a function maxOfThree that takes three numbers as arguments and returns the largest of 
them.

Write a function that takes a character (i.e. a string of length 1) and returns true if it is 
a vowel, false otherwise.

Define a function sumArray and a function multiplyArray that sums and multiplies (respectively)
 all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and
  multiplyArray([1,2,3,4]) should return 24.

Bonus


Define a function reverseString that computes the reversal of a string. For example, 
reverseString("jag testar") should return the string "ratset gaj".

Write a function findLongestWord that takes an array of words and returns the length of the 
longest one.

Write a function filterLongWords that takes an array of words and an number i and returns 
the array of words that are longer than i.


*/


/*

Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest 
of them. Use the if-then-else construct available in Javascript. You'll have to remember your 
pre-work, or do some googling to figure this out.



let maxOfTwoNumbers = function (num1, num2) {
	if (num1 > num2) {
		console.log(num1 + " is largest");
		
	} else {
		console.log(num2 + " is the largest");
	}
};

 maxOfTwoNumbers(2, 10);  


 */



/////////////////////////////////////




/*Define a function maxOfThree that takes three numbers as arguments and returns the 
largest of them.



let maxOfTree = function (num1, num2, num3) {

	let largest = Math.max(num1, num2, num3);
	console.log(largest + " is the argest");
	
};

maxOfTree(3, 5, 15);
*/



/////////////////////////////////////


/*

3- Write a function that takes a character (i.e. a string of length 1) and returns 
true if it is a vowel, false otherwise.


let vowelCharacter = function (a) {
	if (a === "s" || a === "l" || a === "s" || a === "b") {
		console.log("This is vowel.");
		
	} else {
		console.log("This is not a vowel");
		
	}

	
};

vowelCharacter("s");
vowelCharacter("b");
vowelCharacter("c");
vowelCharacter("t");

*/

/////////////////////////////////////



/*

Define a function sumArray and a function multiplyArray that sums and multiplies 
(respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) 
should return 10, and multiplyArray([1,2,3,4]) should return 24.




	
	const numbers = [1, 2, 3, 4, 5, 6];
	let totalNumber = 0;

	for (let i = 0; i < numbers.length; i++) {
		totalNumber += numbers[i];
		
	};

    console.log(totalNumber);
    


const sumArray = function ( putaArray ) {
    
    let totalNumber = 1;

    for (i = 0; i < putaArray.length; i++) {

    	totalNumber *= putaArray[i];

    }
    console.log(totalNumber);
};

sumArray( [1, 2, 3, 4, 5, 6] )

*/

/////////////////////////////////////////////


/*
Bonus


Define a function reverseString that computes the reversal of a string. For example, 
reverseString("jag testar") should return the string "ratset gaj".
*/

const reverseString = function(name) {
   for (i = 0; i > re)

}

reverseString( ["mina"] );



 