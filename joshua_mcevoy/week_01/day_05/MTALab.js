
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


let subway = {
  N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

const planTrip = function (startLine, startStation, endLine, endStation){

//console.log(`You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square.`);

// log the key and indexOf for startLine, startStation, endLine, endStation
// console.log(startLine);//N
// console.log(startStation);//34th
// console.log(subway.N.indexOf('34th'));//1
//
// console.log(subway[startLine].indexOf(startStation));//1     //START STATION
//
// console.log(endLine);//N
// console.log(endStation);//8th
// console.log(subway.N.indexOf('8th'));//5
//
// console.log(subway[endLine].indexOf(endStation));//5     //END STATION
  let passStopsFirst = [];
  let passStopsSecond = [];


//   //returns stops if startStation index is smaller than endStation
//   const ascendingStops = function (){
//     for (let i = subway[startLine].indexOf(startStation); i < subway[endLine].indexOf(endStation); i++){
//       passStops.push(subway[endLine][i]);
//       //console.log(passStops);
//     }
//     console.log(`it's smaller`);
//     console.log(`You must travel through the following stops on the ${startLine}: ${passStops.join(', ')}`);
//   };
//
//   //returns stops if endStation index is smaller than startStation
//   const decendingStops = function () {
//     for (let i = subway[startLine].indexOf(startStation); i > subway[endLine].indexOf(endStation); i--){
//       passStops.push(subway[endLine][i]);
//     }
//     console.log(`it's larger`);
//     console.log(`You must travel through the following stops on the ${startLine}: ${passStops.join(', ')}`);
//   };
//
//   //check to see if station indexs are > or < and call function.
//   if (subway[startLine].indexOf(startStation) < subway[endLine].indexOf(endStation)){
//     ascendingStops();
//     //see if the startStation index is < or > than endStation
//   }
//
//   else {
//     decendingStops();
//
//   }
//
// ////////////////
// ////////////////
// ////////////////
//
//   //find start station & indexOf('Union Square')
//   console.log(`index of Union Square = ${subway[startLine].indexOf('Union Square')}`);

  let firstStationsAscending = function (){

    for (let i = subway[startLine].indexOf(startStation); i < subway[startLine].indexOf('Union Square'); i++){
      passStopsFirst.push(subway[startLine][i]);
    }
    console.log(`You must travel through the following stops on the ${startLine}: ${passStopsFirst.join(', ')}.`);
  };

  let firstStationsDecending = function (){
    for (let i = subway[startLine].indexOf(startStation); i > subway[startLine].indexOf('Union Square'); i--){
      passStopsFirst.push(subway[startLine][i]);
    }
    console.log(`You must travel through the following stops on the ${startLine}: ${passStopsFirst.join(', ')}.`);
  };

  //Trip after transfer
  let secondStationAscending = function (){
    for (let i = subway[endLine].indexOf(endStation); i < subway[endLine].indexOf('Union Square'); i++){
      passStopsSecond.push(subway[endLine][i]);
    }
    console.log(`Your journey continues through the following stops: ${passStopsSecond.reverse().join(', ')}`);
  };

  let secondStationDecending = function (){
    for (let i = subway[endLine].indexOf(endStation); i > subway[endLine].indexOf('Union Square'); i--){
      passStopsSecond.push(subway[endLine][i]);
    }
    console.log(`Your journey continues through the following stops: ${passStopsSecond.reverse().join(', ')}`);
  };

  if (startLine !== endLine){
    if (subway[startLine].indexOf(startStation) < subway[startLine].indexOf('Union Square')){
      //console.log(`ascend stations to Union Square`);
      firstStationsAscending();
      console.log(`Change to ${endLine} at Union Square.`);
    }
    else {
      //console.log(`decend stations to Union Square`);
      firstStationsDecending();
      console.log(`Change to ${endLine} at Union Square.`);
    }

    //Check second half of trip for indexs to see if ascedning or decending
    if (subway[endLine].indexOf(endStation) < subway[endLine].indexOf('Union Square')){
      //console.log(`ascend stations to Union Square`);
      secondStationAscending();
    }
    else {
      //console.log(`decend stations to Union Square`);
      secondStationDecending();
    }
  }
  else {
    //Check first half of trip for indexs to see if ascedning or decending
    if (subway[startLine].indexOf(startStation) < subway[startLine].indexOf('Union Square')){
      //console.log(`ascend stations to Union Square`);
      firstStationsAscending();
    }
    else {
      //console.log(`decend stations to Union Square`);
      firstStationsDecending();
    }

    //Check second half of trip for indexs to see if ascedning or decending
    if (subway[endLine].indexOf(endStation) < subway[endLine].indexOf('Union Square')){
      //console.log(`ascend second stations to Union Square`);
      secondStationAscending();
    }
    else {
      //console.log(`decend second stations to Union Square`);
      secondStationDecending();
    }
  }

  //calculate stop in first leg of trip
  let firstTripNum = Math.abs(subway[startLine].indexOf(startStation) - subway[startLine].indexOf('Union Square'));
  //console.log(`firstTripNum = ${firstTripNum}`);

  //calculate stop in second leg of trip
  let secondTripNum = Math.abs(subway[endLine].indexOf(endStation) - subway[endLine].indexOf('Union Square'));
  //console.log(`secondTripNum = ${secondTripNum}`);

  //add total trips together
  let totalStops = firstTripNum + secondTripNum ;
  console.log(`Total stops = ${totalStops}`);


  //iterate through startLine stations ascending


};




planTrip('L', '1st', 'L', '8th');



// planTrip('N', '34th', '6', 'Grand Central');
