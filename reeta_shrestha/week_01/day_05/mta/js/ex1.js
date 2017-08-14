// MTA Lab arrays inside object
var mta = {
  lineN: ["Times Square", "34th", "N 28th", "N 23rd", "Union Square", "N 8th"],
  lineL: ["L 8th", "6th", "Union Square", "3rd", "1st"],
  line6: ["Grand Central", "33rd", "6 28th", "6 23rd", "Union Square", "Astor Place"],
  transit: "Union Square"
};

const singleLineTrip = function(line, origin, destination) {
  let trip = []; // array of stations pushed based on user input and conditions
  let stations = mta[line]; // array of stations

  let originIndex = stations.indexOf(origin);
  let destinationIndex = stations.indexOf(destination);

  let numberOfStops = destinationIndex - originIndex; // total stops

  if (destinationIndex < originIndex) {
    stations = stations.reverse();
    numberOfStops = originIndex - destinationIndex;

    originIndex = stations.indexOf(origin); // reflect reversed index & stopping
    destinationIndex = stations.indexOf(destination); // reflect reversed index
  }

  for (let i = originIndex + 1; i < destinationIndex + 1; i++) {
    trip.push(stations[i]);
  }

  stations = trip.join(', '); // join trip array to display as strings

  return ({
    lineIs: line,
    stationsToTravel: stations,
    numberOfStations: numberOfStops
  });
}

const buildTrip = function(origin, destination) {
  let transit = mta.transit;
  let lineNames = Object.keys(mta);
  let originLine;
  let destinationLine;

  for (let i = 0; i < lineNames.length; i++) {
    let line = lineNames[i];
    let stations = mta[line]; // [.]]dot notation is for exact name of the key. if var is changing
    // then square brackets*** mta[line]**!

    if (stations.includes(origin)) { // set line name based on origin
      originLine = line;
    }
    if (stations.includes(destination)) { // set line name based on destination
      destinationLine = line;
    }
  }

  if (originLine === destinationLine) { // check if trip is on single line
    let single = singleLineTrip(originLine, origin, destination); // call singleLineTrip to bulild the trip

    // access the return value of numberOfStops from singleLineTrip using *** var.returnValue or (single.numberOfStops)
    return (`Travel on ${originLine}, from ${origin}: \n
      ${single.stationsToTravel} \n
      You'll arrive your destination - ${destination} after ${single.numberOfStations} stops. \n
      `);

  } else {
    let firstTrip = singleLineTrip(originLine, origin, transit);
    let secondTrip = singleLineTrip(destinationLine, transit, destination);
    return (
      `Travel on ${originLine} from ${origin}. \n
      Transfer after ${firstTrip.numberOfStations} stations at ${transit}, \n
      ${origin}, ${firstTrip.stationsToTravel}. \n
      Then change to: ${destinationLine}.\n
      Continue your journey for ${secondTrip.numberOfStations} more stops, ${secondTrip.stationsToTravel}.
      `);
  }
}
console.log(buildTrip("Times Square", "N 8th"));
console.log(buildTrip("N 8th", "34th"));
console.log(buildTrip("34th", "N 8th"));
console.log(buildTrip("N 28th", "33rd"));
