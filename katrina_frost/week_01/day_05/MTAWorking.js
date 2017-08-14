ar arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias","Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);     // Concatenates arr1 with arr2 and arr3

// --------------------- MTA --------------------

// You have ... stops and the stops are ... you will need to change at ...
// and you will arrive ... after these stops...

// Customer starts at Times Square lines (four stops 34th, 28th, 23rd)
// Customer changes at union Square
// Customer arrives at 8th (1 stop)

//lines One
// The N lines has the following stops:
//Times Square, 34th, 28th, 23rd, Union Square, and 8th

ar arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias","Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);     // Concatenates arr1 with arr2 and arr3



let lines =
["Times Square" , //get on at times square
  "34th",
  "28th",
  "23rd",
  "Union Square", // customer needs to change here
  "8th"
];

//create a function that starts the journey from Times Square and ends at 8th

function startTrip(journeyStarts) {
  console.log ("Your journey will start at " + journeyStarts + ".");
}

function changeTrain(journeyChanges) {
  console.log ( "Please change at " + journeyChanges+ ".");
}

function getOffTrain (endOfJourney) {
  console.log ("You have arrived at " + endOfJourney + " hope you enjoyed your trip!");
}

function stopsOnlines (journeyStarts, lines) {
  let stops = [];

  // work out how many stops from the start to union square
  // work out which number stop is the first
  // work out which number stop is union square
  // union square stop - start stop will give length

  const startIndex = lines.indexOf(journeyStarts);
  const changeIndex = lines.indexOf("Union Square");

  for (let i = startIndex; i < changeIndex; i++) {
    stops.push( " " + lines [i]);
// need to push in station names here
  }

  console.log ("You will go past " + stops.length + " stops, these will be " + stops + ".");
}

stopsOnlines (lines [0], lines);

startTrip (lines [0]);
changeTrain (lines [4]);
getOffTrain (lines [5]);

// function start(journey){
//   let start = Object.keys(lines); // array of items by key
//   console.log(Object.keys(lines)); //Shows how many stops are on the lines
// }

//create a for loop to console log start point and end point
//listing the other stops along the way

for (let i = 0; i < lines.length; i++) {
  let startJourney = lines[i]; // get the name of the key for the item
  let endJourney = lines; // get the price for the item

  if (start === lines[1]);
    return lines + "Start on Journey" ;


}

















// --------------------- SECOND lines --------------------

// --------------------- THIRD lines --------------------

// --------------------- CONSOLE LOG / PRINT --------------------

// There are 3 subway liness:
// The L lines has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 lines has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway liness intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N lines is different than the 28th street stop on the 6 lines, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
