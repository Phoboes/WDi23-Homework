const allergyCheck = function( score ){

  this.allergens = {
    1: "eggs",
    2: "peanuts",
    4: "shellfish",
    8: "strawberries",
    16: "tomatoes",
    32: "chocolate",
    64: "pollen",
    128: "cats"
  };


  this.allergies = [];

  const allergyList = Object.keys( this.allergens ).map( Number ).reverse();

  for (let i = 0; i < allergyList.length; i++) {
    if( score >= allergyList[ i ] ) {
      this.allergies.push( this.allergens[ allergyList [ i ] ] )
      score -= allergyList[ i ]
    }; //if
  }; //for

  this.allergicTo = function( input ){
    this.allergies.indexOf( input ) >= 0 ? console.log(`Allergic to ${ input }`) : console.log(`Not allergic to ${ input }`)
  }

}; //allergyCheck


let myAllergies = new allergyCheck( 129 );


console.log( myAllergies.allergies );
