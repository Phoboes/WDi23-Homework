/*
Create a program that models a simple subway system.

The program takes the line and stop that a user is getting on at and the line
and stop that user is getting off at and prints the journey and the total number
 of stops for the trip in the console:

planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function
name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd,
Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
There are 3 subway lines:
The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
All 3 subway lines intersect at Union Square, but there are no other intersection points.
(For example, this means the 28th stop on the N line is different than the 28th
street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
Hints:

Work out how you would do it on paper first!
Then start to explain that process in Javascript.
Get the program to work for a single line before trying to tackle multiple lines.
Don't worry about prompting the user for input. Hard code some values to get it working.
You can use prompt() later to make it more interactive.
Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
The key to the lab is finding the index positions of each stop. (hint: indexOf())
Make sure the stops that are the same for different lines have different names
(i.e. 23rd on the N and on the 6 need to be differentiated)
*/
let subwaySystem = {                                     //create an object to be able to call the lines
  nLine: ['n34th','n28th','n23rd','Union Square' ],
  sixLine: ['Grand Central','s33rd','s28rd', 's23rd','Union Square', 'Astor Place' ],
  lLine:['l8th','l6th','Union Square','l3rd','l1st' ]
}
  let myTrip = "";                                        // where my trip will be showed
  let totalStops = 0;
  let stops = [];                                         // stops counts


const singleTrip = function (line, stopIn, stopOut){
  let stopInPosition = subwaySystem[line].indexOf(stopIn);    // To know the position in the array
  let stopOutPosition = subwaySystem[line].indexOf(stopOut);
  let direction = stopOutPosition - stopInPosition;            // If it is negative, we should go left
  if (direction >0){
    for (var i = stopInPosition+1; i < stopOutPosition+1; i++) { //check all positions from in and out (+1 so it doesnt count the current one and stop out plus 1 as well so it counts the total correctly)
      myTrip = myTrip + " "+ (subwaySystem[line][i]) + ", ";                   //add each line to the trip
      stops.push (totalStops++);              //adds the total stops to our trip

    }
  }else {
    for (var i = stopInPosition-1; i > stopOutPosition-1; i--) { // this will do the reverse stops and decrement
    myTrip = myTrip + " "+ (subwaySystem[line][i]) + ", ";
    stops.push (totalStops++);
    }
  }
}; //singleTrip

const fullTrip = function (lineIn, stopIn, lineOut, stopOut) { //this will take the 2 lines
  if (lineIn === lineOut){
    myTrip = "You must travel through the following stops on the " + lineIn + ": ";                                  // check if travelling in one line only
    singleTrip (lineIn, stopIn, stopOut);
  }else {
    myTrip = "You must travel through the following stops on the " + lineIn + ": ";
    singleTrip (lineIn, stopIn, "Union Square");            //stop in union square to change to the next stop
    myTrip = myTrip + "Change at Union Square. Your journey continues through the following stops: ";
    singleTrip (lineOut, "Union Square", stopOut);          // starts at US and go to the destination
  }
  console.log(myTrip);
  console.log(totalStops + " stops in total.");
}; //fullTrip
