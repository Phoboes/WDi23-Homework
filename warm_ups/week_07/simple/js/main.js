console.log("linked bruh");


// # s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc

// # s2 = 1 + 2 + 3 + 4 + 5 + 6 + //etc


// const s1 = function( num ){
//   let output = 1;
//   if( num % 2 === 0){
//     output = 0
//   } else {
//     output = 1;
//   }
//   return output
// };


const s1 = function( num ){
  return num % 2 === 0 ? 0 : 1;
}

console.log(  s1(4) )



var s2 = function( num ){
  let total = 0;
  for ( let i = 0; i <= num; i++ ){
    total += i;

  } // loop
  return total;
} //funct

var s2 = function( num ){
  return ( num * ( num + 1) ) / 2
}

console.log( s2( 4 ) )
