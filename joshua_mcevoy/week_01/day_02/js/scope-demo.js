/*
scope



*/

var message = "hello"; //Global Scope

const showMessage = function () {
  console.log( message );
};

showMessage();

/////////////////////////////////////////////

const showLocalMessage = function () {
  var otherMessage = "goodbye"; //Local Function Scope
  console.log( otherMessage );
};

showLocalMessage();
//console.log( otherMessage ); otherMessage is out os scope

/////////////////////////////////////////////

//let - local block scope

if ( 7 === 7 ){
  var food = "hotdogs"; //STILL A GLOBAL VARIABLE
  console.log("within block: ", food);
}
console.log("outside block: ", food);

if (12 === 12){
  let secretPassword = "swordfish"; //BLOCK SCOPE
  console.log("within block: ", secretPassword);
}
console.log("Outside block: ", secretPassword);
