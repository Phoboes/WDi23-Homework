/*
- Define a function sumArray and a function multiplyArray that sums and multiplies 
(respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) 
should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/



	/*
	const numbers = [1, 2, 3, 4, 5, 6];
	let totalNumber = 0;

	for (let i = 0; i < numbers.length; i++) {
		totalNumber += numbers[i];
		
	};

    console.log(totalNumber);
    */


const sumArray = function ( putaArray ) {
    
    let totalNumber = 1;

    for (i = 0; i < putaArray.length; i++) {

    	totalNumber *= putaArray[i];

    }
    console.log(totalNumber);
};

sumArray( [1, 2, 3, 4, 5, 6] )