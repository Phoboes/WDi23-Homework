// 99 bottles of beer

// "99 Bottles of Beer" is a traditional reverse counting song.

// It is popular to sing on long trips, as it is repetitive and easy to memorize but -- it can take a long time to sing.

// Lets try and make it run a little quicker using code:

// The song's lyrics are as follows:

// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down, pass it around, 98 bottles of beer on the wall...
// The same verse is repeated, each time with one bottle fewer, until there are none left.

// Bear in mind, not all verses are the same:

// The verse for 1 bottle is as follows:

// 1 bottle of beer on the wall, 1 bottle of beer.
// Take it down and pass it around, no more bottles of beer on the wall.
// The verse for 0 bottles is as follows:

// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
// Bonus:

// Count through any number of bottles.
// Be able to count between a range of numbers (ie, 20 to 10).

// -------------------------------------------------------------------------
// BASIC:
// -------------------------------------------------------------------------

// Have a single function to handle the verse
// Have a single function to handle the looping.


// A single function to handle a verse:

const verse = function( num ){
  if( num === 0 ){
    console.log( "no bottles of beer on the wall, no bottles of beer." );
    console.log( "Go to the store, buy some more, 99 bottles of beer on the wall." );
  } else if ( num === 1 ){
    console.log( "1 bottle of beer on the wall, 1 bottle of beer." );
    console.log( "Take it down, pass it around, no more bottles of beer on the wall." );
  } else {
    console.log( `${ num } bottles of beer on the wall, ${ num } bottles of beer.` );

    // This handles my case of '1 bottles of beer' I get if I call (num - 1) on 2.

    if( num === 2 ){
      console.log( `Take one down, pass it around, ${ num - 1 } bottle of beer on the wall.`  );
    } else {
      console.log( `Take one down, pass it around, ${ num - 1 } bottles of beer on the wall.`  );
    }
  }
};

// My range function.

// const beerSong = function( start, end ){

  // Providing default parameters, so the loop will still run if the user gives no input

//   start = start || 99;
//   end = end || 0;

//   for( let i = start; i >= end; i-- ){
//     verse( i );
//   }
// };


// Es6 will let me get away with setting default parameters when I declare the function.
const beerSong = function( start = 99, end = 0 ){
  for( let i = start; i >= end; i-- ){
    verse( i );
  }
};

beerSong();


// -------------------------------------------------------------------------
// Object approach
// -------------------------------------------------------------------------

// Tiny components that do 1 thing, and do it well
// Gradually compile the individual components together to get our final results

// Pros:
// - Easier to debug.
// - Much easier to scale.
// - When used well, results in code that is almost self documenting: beer.verseOne( 1 ) and beer.song() tell you exactly what they do before you even look at the code.

// Cons:
// More code.
// On the surface, can seem much more complicated.
// Scoping -- you need to be aware that all items are within an object. Must be called with this.thing(); etc.

// Approach:

// The verses have a few repeating patterns, a number of bottles (repeated 3 times):

// (X bottles of beer) on the wall (X bottles of beer)
// Do a thing, (X bottles of beer on the wall)

// This is the first candidate for giving to a function:

const beer = {

  beerQuantity: function( num ){
    if( num === 0 ){
      return "no bottles of beer";
    } else if ( num === 1 ){
      return '1 bottle of beer';
    } else {
      return `${ num } bottles of beer`;
    }
  },

  // Each verse also contains an action, depending on how many bottles are left.
  // That is our next candidate:

  action: function( num ){
     if( num === 0 ){
      return "Go to the store, buy some more";
    } else if ( num === 1 ){
      return 'Take it down, pass it around';
    } else {
      return 'Take it down, pass it around';
    } 
  },

  // This handles all the remaining bottles on the wall. The reason I want this, is because when I reach 0, I want to reset to 99 bottles, not go to -1 bottles.

  decrement: function( num ){
    if( num <= 0 ){
      return 99;
    } else {
      return num - 1;
    }
  },

  // Building our verses with our previous modules:

  verseOne: function( num ){
    // I'm saving the verse in a variable for portability. For readability, I like just returning a variable, not blocks of code.

    // This is es6's string concatenation. 

    // Important notes: 
    // These functions only work within this stringn because they *return* a value to it. Console.logs from those functions would result in "undefined bottles of beer" etc.

    // Because I am within the object, functions and values must be acessed with this.functionName or beer.functionName.

    let verse = `${ this.beerQuantity( num ) } on the wall, ${ this.beerQuantity( num ) }.`;
    console.log( verse );
    return verse;
  },

  verseTwo: function( num ){
    let verse = `${ this.action( num ) }, ${ this.beerQuantity( this.decrement( num ) ) } on the wall.`;
    console.log( verse );
    return verse;
  },

  // My final function is the one that ties everything together.
  // This is where the object approach pays off. Look how neat the final function is.
  // Rather than a giant block of code that handles a million things, I can just call concise functions that handle all the logic for me.

  song: function( start = 99, end = 0 ){
    for( let i = start; i >= end; i-- ){
      this.verseOne( i );
      this.verseTwo( i );
    }
  }

};

