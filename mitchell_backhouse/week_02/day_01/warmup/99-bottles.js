// "99 Bottles of Beer" is a traditional reverse counting song.
// 
// It is popular to sing on long trips, as it is repetitive and easy to memorize but -- it can take a long time to sing.
// 
// Lets try and make it run a little quicker using code:
// 
// The song's lyrics are as follows:
// 
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down, pass it around, 98 bottles of beer on the wall...
// The same verse is repeated, each time with one bottle fewer, until there are none left.
// 
// Bear in mind, not all verses are the same:
// 
// The verse for 1 bottle is as follows:
// 
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take it down and pass it around, no more bottles of beer on the wall.
// The verse for 0 bottles is as follows:
// 
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.

// Input
// bottles(40, 20);
const bottles = function(start, end) {
  if (end > start) {
    console.log('end should not be greater than start');
    return;
  } else {

    for (let i = start; i >= end; i--) {
      if ( i === 1) {
        console.log(`${i} bottle of beer on the wall, ${i} bottle of beer`);
        console.log(`Take it down and pass it around no more bottles of ber on the wall`);
      } else if ( i === 0) {
        console.log(`No more bottles of beer on the wall, no more bottles of beer.`);
        console.log(`Go to the store and buy some more, 99 bottles of beer on the wall.`);
      } else {
        console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
        console.log(`Take on down, pass it around, ${i - 1} bottles of beer on the wall...`);
      }
    }
  }
}

bottles(5, 0);


// KANE Variant - Object

const beer = {
  beerQuantity: function( num) {
    if ( num === 0 ) {
      return `no bottles of beer`;
    } else if ( num === 1) {
      return `1 bottle of beer`;
    } else {
      return `${ num } bottles of beer.`;
    }
  },
  action: function ( num ) {
    if ( num === 0 ){

    } else if ( num === 1){

    } else {

    }
  },
  verseOne: function( num ) {
    let verse = `${ this.beerQuantity( num ) } on the wall, ${ this.beerQuantity(num) }`;
    console.log(verse);
    return verse;
  }


}
