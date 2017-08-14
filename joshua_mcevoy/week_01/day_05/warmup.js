// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:
//
// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400
// Test Data... Make sure it is working!
//
// 1997 is not a leap year, it should return false
// 1996 is a leap year, it should return true
// 1900 is not a leap year, it should return false
// 2000 is a leap year, it should return true
// How to structure it...
//
// We want a custom function called isLeapYear

// const isLeapYear = function (year){
//   if (year % 400 !== 0 ){
//     console.log(`${year} is a not leap year.`);
//   }
//   else if (year % 100 !== 0){
//     console.log(`${year} is not a leap year.`);
//   }
//   else if (year % 4 !== 0){
//     console.log(`${year} is not a leap year.`);
//   }
//
//   else {
//     console.log(`${year} is a leap year.`);
//   }
// };


// if (year % 400 == 0){
//
// }

// document.getElementsByClassName("checkButton").addEventListener("click", isLeapYear(year));

// document.getElementById("myBtn").addEventListener("click", function(){
//     console.log("Hello World");
// });

//////////////////////////////////////////

// const isLeapYear = function (year) {
//   if (!year){
//     year = parseInt(prompt("Give me a number:"));
//   }
//
//   if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
//     console.log(`${year} is a leap year.`);
//     return true;
//   }
//   else {
//     console.log(`${year} is not a leap year.`);
//     return false;
//   }
// }

//////////////////////////////////////////

const isLeapYear = function (year) {
  year = year || parseInt(prompt("Give me a number:"));


  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
    console.log(`${year} is a leap year.`);
    return true;
  }
  else {
    console.log(`${year} is not a leap year.`);
    return false;
  }
}



isLeapYear();
isLeapYear(1997);
isLeapYear(1900);
isLeapYear(2000);
