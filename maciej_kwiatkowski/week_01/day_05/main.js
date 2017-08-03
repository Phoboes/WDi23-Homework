let subwaySystem = {
  lineN: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  lineL: ["8th", "6th", "Union Square", "3rd", "1st"],
  line6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

let interchange = "Union Square";

let planTrip = function(startingLine, startingStation, endLine, endStation) {
  for(let i = 0; i < subwaySystem.lineN.length; i++) {
    console.log(subwaySystem["lineN"][i]);
  }
  return;
};
planTrip();
