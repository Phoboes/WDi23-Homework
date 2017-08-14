/* Objectives:*/

// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity

// Create a program that models a simple subway system.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
/* Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.*/


// Array Structure
// [[stations^n],line_name]
let lineN = [['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'], 'lineN'];
let lineL = [['8th', '6th', 'Union Square', '3rd', '1st'], 'lineL'];
let line6 = [['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'], 'line6'];


// if trip in reverse (indexOf reverse) flip path
// either decrement or reverse (reverse worse runtime)

// same line = basic traverse
// different line = traverse across array

// if line is different, get start index and union square index.
// on second line, get union square index and index of station

const planTrip = function (line1, station1, line2, station2) {
  
  // if there are different lines being traversed
  if (line1[1] != line2[1]) {

    // get index for station and union square for line 1
    let pos1 = [line1[0].indexOf(station1), line1[0].indexOf("Union Square")]; 
    
    // get index for station and union square for line 2
    let pos2 = [line2[0].indexOf(station2), line2[0].indexOf("Union Square")];
    
    // variables for traversal to be joined - ret: 's1, s2, s3, UNION SQUARE'
    let t1 = [];
    let t2 = [];

    // these two can probably be consolidated into one function
    // reverse position of values if station index is after Union Square
    if (pos1[0] > pos1[1]) {
      pos1.reverse();
      t1 = line1[0].slice(pos1[0], (pos1[1] + 1)).reverse();
    } else {

      t1 = line1[0].slice(pos1[0], (pos1[1] + 1));
    }

    // second half of journey
    if (pos2[0] > pos2[1]) {
      pos2.reverse();
      t2 = line2[0].slice(pos2[0], (pos2[1] + 1));
    } else {

      t2 = line2[0].slice(pos2[0], (pos2[1] + 1)).reverse();
    }

    // get number of stops for first half and second half of journey
    let stops = 0;
    stops += pos1[1] - pos1[0];
    stops += pos2[1] - pos2[0];

    // journey details
    console.log('------------------------------');
    console.log(`%cYour journey will take ${stops} stops`, 'color: lightblue');
    
    // UNION SQUARE SHOULD ALWAYS BE THE LAST STOP AT IN T1 AND THE FIRST STOP IN T2
    console.log(`${t1.join(', ')}`);
    console.log(`%c:CHANGE TO ${line2[1].toUpperCase()}:`, 'color: red');
    console.log(`${t2.join(', ')}`);

  } else {

    // if using the same line for traversal
    let arr = [];
    
    // assign station index
    let pos = [line1[0].indexOf(station1), line1[0].indexOf(station2)];

    if (pos[0] > pos[1]) {
      pos.reverse();
      arr = line1[0].slice(pos[0], pos[1] + 1).reverse();
    } else {
      arr = line1[0].slice(pos[0], pos[1] + 1);
    }

    // get number of stops
    let stops = pos[1] - pos[0];

    console.log('------------------------------');
    console.log(`%cYour journey will take ${stops} stops`, 'color: lightblue');
    console.log(`${arr.join(', ')}`);
  }

}

// TESTS
// Multi Line both ways
planTrip(lineN, 'Times Square', lineL, '3rd');
planTrip(lineL, '3rd', lineN, 'Times Square');
// Random Sample
planTrip(lineN, '8th', line6, 'Astor Place');
planTrip(lineN, '34th', line6, '33rd');
planTrip(line6, 'Grand Central', lineN, '23rd');
planTrip(lineN, 'Times Square', lineN, 'Times Square');
// single trip reverse
planTrip(lineN, 'Times Square', lineN, '23rd');
planTrip(lineN, '23rd', lineN, 'Times Square');

// TODO allow object pass in
// allow any transition point which should enable this
// to be a utility app rather than fixed
