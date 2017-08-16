// Given an age in seconds, calculate how old someone would be on:
//
// Earth: orbital period 365.25 Earth days, or 31557600 seconds
// Mercury: orbital period 0.2408467 Earth years
// Venus: orbital period 0.61519726 Earth years
// Mars: orbital period 1.8808158 Earth years
// Jupiter: orbital period 11.862615 Earth years
// Saturn: orbital period 29.447498 Earth years
// Uranus: orbital period 84.016846 Earth years
// Neptune: orbital period 164.79132 Earth years
// So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31 Earth-years old.
//
// There are 31557600 seconds in an Earth year.
//
// Bonus:
//
// Have the option of either returning the ages on all planets, or any of the above planets individually.


const planetYears = {

  array: [0.2408467, 0.61519726, 1.8808158, 11.862615, 29.447498, 84.016846, 164.79132],
  earth: 31557600,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,

  earthYears: function (seconds) {
    console.log(seconds / planetYears.earth);
  },

  anyPlanetYears: function (seconds, planet) {
    //console.log(`planetYears.array = ${planetYears.array}`);
    if (planet === 'all'){
      // debugger
      console.log(seconds / planetYears.earth);
      //loop through planets in object  *******
      for (let i = 0; i < planetYears.array.length; i++){
        console.log((seconds / planetYears.earth) / planetYears.array[i])
      }
      //calculate years
    }
    else if (planet === "earth"){
      console.log(seconds / planetYears.earth);
    }
    else {
      console.log((seconds / planetYears.earth) / planetYears[planet]);
    }
  }
};

planetYears.earthYears(1000000000);
planetYears.anyPlanetYears(1000000000, 'mercury');
planetYears.anyPlanetYears(1000000000, 'neptune');
planetYears.anyPlanetYears(1000000000, 'all');

// const orbits = {
//   earth: 1,
//   mercury: 0.2408467,
//   venus: 0.61519726,
//   mars: 1.8808158,
//   jupiter: 11.862615,
//   saturn: 29.447498,
//   uranus: 84.016846,
//   neptune: 164.79132
// }
//
//
//
// const singlePlanet = function (planet = "Earth", seconds = 31557600){
//   const year = seconds / 31557600;
//   const spaceYear = year * orbits[planet];
//   console.log(`On ${planet} you will be ${ spaceYear} years old.`);
//   return spaceYear;
// }
//
// const allPlanets = function(seconds){
//   for (planet in orbits){
//     singlePlanet(planet, seconds);
//   }
// }
