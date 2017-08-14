// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:
//
// If the number contains 3 as a factor, output 'Pling'.
// If the number contains 5 as a factor, output 'Plang'.
// If the number contains 7 as a factor, output 'Plong'.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string.

const raindrop = function (num) {

  let output = '';

  if (num % 3 === 0){
    output += "Pling";
  }
  if (num % 5 === 0){
    output += "Plang";
  }
  if (num % 7 === 0){
    output += "Plong";
  }
  if (output === '') {
    output += num;
  }

  console.log(output);
  return output;

}
raindrop(1755);
raindrop(3);
raindrop(5);
raindrop(7);
raindrop(11);



// var someFunction = function (x){
//   if ( && x==0){
//     console.log("Pling");
//   }
//   else if (x>0 && 5%x==0){
//     console.log("Plang");
//   }
//   else if (x>0 && 7%x==0){
//     console.log("Plong");
//   }
//   else {
//     console.log(x.toString());
//   }
// }
//
// someFunction(1755);
// someFunction(28);
// someFunction(25);
// someFunction(34);
