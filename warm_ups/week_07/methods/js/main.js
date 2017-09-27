//
//
// const arrayToReverse =  [ 1, 2, 3, 4, 5, 6, 7 ]
//
//
//
// const reverse = function( a ){
//   // console.log(`A = ${a}`);
//   let output = []
//   console.log(`Orginal: ${a}`);
//
//   for (let i = a.length-1; i >= 0 ; i--) {
//     output.push(a[i])
//     // debugger
//     }
//   return output;
// }; //reverse
//
// console.log(reverse( [1, 2, 3, 4] ));
// console.log(reverse( arrayToReverse ));
// // // => [ 4, 3, 2, 1 ]



const arrayToFlatten = ["Hello", ["World",42], 2, 3, [1,2,3] ]



const flatten = function( a ){
  let output = [];

  for (let i = 0; i < a.length; i++) {
    // console.log(a[i]);
    //checks if what we have is an array
    if (Array.isArray(a[i])){
      // console.log(`Index ${i} is an Array`);
      for (let j = 0; j < a[i].length; j++) {
        output.push( a[i][j])
      }//j loop
    }else {
      output.push( a[i] )
    }//ifelse
  }// ifor
  return output
}//flatten

const flatten2 =  function( a ){
  return [].concat.apply( [], a )
}

// console.log(flatten(arrayToFlatten))
console.log(flatten2(arrayToFlatten));

// flatten( ["Hello", ["World", 42] ] );
// // => [ "Hello", "World", 42 ]
