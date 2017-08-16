// Space Age Warmup

// Given an age in seconds, calculate how old someone would be on:

// Earth: orbital period 365.25 Earth days, or 31557600 seconds
// Mercury: orbital period 0.2408467 Earth years
// Venus: orbital period 0.61519726 Earth years
// Mars: orbital period 1.8808158 Earth years
// Jupiter: orbital period 11.862615 Earth years
// Saturn: orbital period 29.447498 Earth years
// Uranus: orbital period 84.016846 Earth years
// Neptune: orbital period 164.79132 Earth years
// So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31 Earth-years old.

// There are 31557600 seconds in an Earth year.

// Bonus:

// Have the option of either returning the ages on all planets, or any of the above planets individually.

// ----------------------------------------------------------
// Basic:
// ----------------------------------------------------------

// const orbits = {
//   Earth: 1,
//   Mercury: 0.2408467,
//   Venus: 0.61519726,
//   Mars: 1.8808158,
//   Jupiter: 11.862615,
//   Saturn: 29.447498,
//   Uranus: 84.016846,
//   Neptune: 164.79132
// };

// const singlePlanet = function( planet = "Earth" , seconds = 31557600 ){
//   const year = seconds / 31557600;
//   const spaceYear = year * orbits[ planet ]
//   console.log( `On ${ planet } you will be ${ spaceYear } years old.` );
//   return spaceYear;
// };

// const allPlanets = function( seconds ){
//   for( planet in orbits ){
//     debugger
//     singlePlanet( planet, seconds );
//   }
// }

// ----------------------------------------------------------
// Object & Object construction
// ----------------------------------------------------------

const spaceAge = {

  // Collection of modifiers to multiply against an earth year
  orbits: {
    Earth: 1,
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Mars: 1.8808158,
    Jupiter: 11.862615,
    Saturn: 29.447498,
    Uranus: 84.016846,
    Neptune: 164.79132
  },

  // Single planet handles a single instance of a planet:
  // Take a planet
  // Work out the value of a year in seconds;
  // Multiply that earth year by the orbit of a given planet;


  // planet = "Earth" says if no planet provided, default to earth
  singlePlanet: function( planet = "Earth", seconds = 31557600 ){
    // Convert given seconds to a year
    const year = seconds / 31557600;

    // The result is stored in a variable for readability
    const spaceYear = year * this.orbits[ planet ]

    console.log( `On ${ planet } you will be ${ spaceYear } years old.` );

    // Return because i care about this value
    return spaceYear;
  },

  allPlanets: function( seconds = 31557600 ){
    // This is going to be a returned object, it's going to store the result of single planet sums to all planet keys in the orbit object.
    let spaceObject = {};


    // For in loop iterates an object,
      // The first variable provided is a string interpretation of each key in that object.
      // => "Mars", "Earth" etc.

    for( planet in this.orbits ){
      // Assigning values to space object:
      // I'm using square notation because the keys are strings. Object."string" will fail, Object["string"] will not.
      spaceObject[ planet ] = this.singlePlanet( planet, seconds );
    }

    return spaceObject;
  }

};