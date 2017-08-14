// --------------------- MTA --------------------

// You have ... stops and the stops are ... you will need to change at ...
// and you will arrive ... after these stops...

// Customer starts at Times Square lineOne (four stops 34th, 28th, 23rd)
// Customer changes at union Square
// Customer arrives at 8th (1 stop)

//Line One
// The N line has the following stops:
//Times Square, 34th, 28th, 23rd, Union Square, and 8th

let lineOne = [
  "Times Square", //get on at times square
  "34th",
  "28th sq",
  "23rd sq",
  "Union Square", // customer needs to change here
  "8th"
];

let lineTwo = [
  "8th",
  "6th",
  "Union Square",
  "3rd",
  "1st"
];

let lineThree = [
  "Grand Central",
  "33rd",
  "28th st",
  "23rd st",
  "Union Square",
  "Astor Place"
]

//create a function that starts the journey from Times Square and ends at 8th

// maybe we could change the names of the message style functions to include 'Notification' in the name.
// e.g. startTripNotifiation, changeTrainNotification etc.

function startTrip(journeyStarts) {
  console.log ("Your journey will start at " + journeyStarts + ".");
}

function changeTrain(journeyChanges) {
  console.log ( "Please change at " + journeyChanges+ ".");
}

function getOffTrain(endOfJourney) {
  console.log ("You have arrived at " + endOfJourney + " hope you enjoyed your trip!");
}

// this function takes two arguments - where the journeyStarts and which line we are on.
// it should have another - where we want to get off the train.
// e.g. journeyStarts, journeyEnds (or changes), line.
// this function does not want to know anything more than this - the line, where to start, where to end.
function stopsOnLine(journeyStarts, line) {

  let stops = [];

  // work out how many stops from the start to union square
  // work out which number stop is the first
  // work out which number stop is union square
  // union square stop - start stop will give length

  const startIndex = line.indexOf(journeyStarts); // this should be a variale fromStop so we can use this function again (even if its a changings stop - naming convention only)
  const changeIndex = line.indexOf("Union Square"); // this should be a variable toStop so we can use this function again

  for (let i = startIndex; i < changeIndex; i++) {
    stops.push( " " + lines [i]);
  }

  console.log ("You will go past " + stops.length + " stops, these will be " + stops + ".");

}

// ******** Function ********* //
// trainLineChangeNeeded() ?
// write a function that finds out if there are any changes in the journey.
// this should return true or false - use indexOf to help you work out if the name of the destination stop is on
// the same train line.
// this function will inform our application - that a change is needed only by returning true, or false.
// you can then use a variable and condition - e.g. var isThereALineChange = trainLineChangeNeeded();

// ******** Function ********* //
// getLineChange() ?
// write a function that locates the change stop - as we talked about before this is when
// there is a match e.g. union square is in both lines that are needed.
// Using the stops from the current line, and the stops of all other lines, and the destination you can search for the match.
// this function should take all the lines in as an arg, the destination, then work out which line is needed to complete
// the journey.
// this function should return the stop to change at, and the line to change to.
// e.g. return { changeStop: 'Union Square', line: lineSix }; // This is an object - i'll show you how to use this.

// ******** Function ********* //
// Write a function that co-ordinates all the functions.
// This function should take - arguments for where the customer is, and where they want to go.

stopsOnLine (lineOne [0], lineOne);
startTrip (lineOne [0]);
changeTrain (lineOne [4]);
getOffTrain (lineOne [5]);

// function start(journey){
//   let start = Object.keys(lineOne); // array of items by key
//   console.log(Object.keys(lineOne)); //Shows how many stops are on the line
// }

//create a for loop to console log start point and end point
//listing the other stops along the way

for (let i = 0; i < lineOne.length; i++) {
  let startJourney = lineOne[i]; // get the name of the key for the item
  let endJourney = lineOne; // get the price for the item

  if (start === lineOne[1]);
    return lineOne + "Start on Journey" ;


}

















// --------------------- SECOND LINE --------------------

// --------------------- THIRD LINE --------------------

// --------------------- CONSOLE LOG / PRINT --------------------








// There are 3 subway lines:
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
