import Multiselect from 'vue-multiselect'

Vue.component('multiselect', Multiselect)

  export default {
    // OR register locally
    components: { Multiselect },
    data () {
      return {
        value: null,
        options: ['-', 'N', 'L', '6']
      }
    }
  }




let subway = {
  N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

const planTrip = function (startLine, startStation, endLine, endStation){

  let passStopsFirst = [];
  let passStopsSecond = [];

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
