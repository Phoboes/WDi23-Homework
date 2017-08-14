// objects


const Line = function (name, stations, lineChange) {
  this.name = name;
  // stations should be []
  this.stations = stations; 
  this.lineChange = lineChange;
  this.lineChangeNumber = stations.indexOf(this.lineChange) || "Not Found";
};

// basic
const traverseLine = function (startLine, sNumber, endLine, eNumber) {
  // sNumber == start station position
  // eNumber == end station position

  // check if the trip is on the same line
  if (startLine.name === endLine.name) {
    stations = startLine.stations;

    let stops = returnTripText(stations, sNumber, eNumber);
    let stopCount = countStops(stops);

    let trip = {lineName: startLine.name, stations: stops, stopCount: stopCount};

    // output trip to console
    formattedTrip(trip); 
    
  } else {
    sStations = startLine.stations;
    eStations = endLine.stations;

    let sStops = returnTripText(sStations, sNumber, startLine.lineChangeNumber);
    let eStops = returnTripText(eStations, eNumber, endLine.lineChangeNumber).reverse();
    let stopCount = countStops(sStops, eStops);

    let sTrip = {lineName: startLine.name, stations: sStops, changeStation: startLine.lineChange, stopCount: stopCount};
    let eTrip = {lineName: endLine.name, stations: eStops};

    // output trip to console
    formattedTrip(sTrip, eTrip);
  }

};

// recursive traversal
const traverseLineRecursive = function () {

}

// return an arr with all stations from start to end point inside list
const returnTripText = function(list, start, end) {
  let arr = [];

  if ( start > end ) {
    arr = list.slice( end, start + 1).reverse();
  } else {
    arr = list.slice( start, end + 1);
  }

  return arr;
}

const countStops = function() {
  let count = 0;
  for (let i in arguments) {
    count += arguments[i].length - 1
  }

  return count;
}

const formattedTrip = function() {
// usage: function( obj.lineName, obj.stations, obj.changeStation, obj.stopCount, * )

  if (arguments.length === 2) {
    // sTrip = start trip object, eTrip = end trip object
    sTrip = arguments[0];
    eTrip = arguments[1];
    console.log('sTrip: ', sTrip, 'eTrip: ', eTrip);

    console.log(`You must travel through the following stops on the ${sTrip.lineName}: ${sTrip.stations.join(', ')}`);
    console.log(`Change at ${sTrip.changeStation}`);
    console.log(`Your journey continues through the following stops: ${eTrip.stations.join(', ')}.`);
    console.log(`${sTrip.stopCount} in total.`);
  } else {
    trip = arguments[0];

    console.log(`You must travel through the following stops on the ${trip.lineName}: ${trip.stations.join(', ')}`);
    console.log(`${trip.stopCount} in total.`);

  }
}

let line1 = new Line('lineN', ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'], 'Union Square');
let line2 = new Line('lineL', ['8th', '6th', 'Union Square', '3rd', '1st'], 'Union Square');
let line3 = new Line('line6', ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'], 'Union Square');

// console.log(line1);
// console.log(line2);
// console.log(line3);

// same line traversal
traverseLine(line1, 0, line1, 3);
traverseLine(line1, 3, line1, 0);
console.log('%c-----------------', 'color: red');

// multi line traversal
traverseLine(line1, 0, line2, 1);
traverseLine(line1, 0, line2, 4);
console.log('%c-----------------', 'color: red');

// reverse line (just in case)
traverseLine(line3, 2, line1, 0);
traverseLine(line2, 0, line1, 0);
console.log('%c-----------------', 'color: red');
