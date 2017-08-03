// Scrabble

// ---------------------------------------------

// Write a program that will replicate the scoring system in Scrabble. The function should take a single argument (the word, comprised of letters/tiles) and return a score.

// Letter Values

// You'll need these:

// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
// So now that you've got those letter values, consider what data structure is good for mapping keys to values?

// Examples

// "cabbage" should be scored as worth 14 points:

// Bonus:

// Have your program be able to proces a sentence. "Hello world!" is worth 17 points.

// ---------------------------------------------


const scrabble = {
  letterScore: {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10,
    // You *can* force object keys to be strings, though it is generally frowned upon. (see below)
    "double word": 2,
    "triple word": 3
  },

// ---------------------------------------------

  // Strings as keys are frowned upon because a key is typically used to address a piece of information, not to hold information itself.

  // Using a string as a key can muddy this line and make your code a little bit less reuseable. 

  // It also means you can only use square bracket notation:
  // letterScore.double word => invalid
  // letterScore["double word"] => 2

// ---------------------------------------------


  // For this solution, I'm going to store the score in the object itself. Because I am interacting with this variable directly, my functions aren't often returning values -- I don't need them to.
  score: 0,

  // modifier is an optional parameter, if it doesn't exist, the function will behave as normal.

  // You can have as many or as few parameters as you want, they won't throw errors unless you try to do something with them and they're undefined.

  setScore: function( word, modifier ){
    // The object keys are case sensitive, so I'm getting that out of the way immediately
    word = word.toUpperCase();

    // Reset the object's score to 0 for every new word (otherwise they accumulate)
    this.score = 0;

    for( let i = 0; i < word.length; i++ ){

      // This conditional is what lets the bonus work (scoring sentences)
      // If letterScore contains the value, change the score. If not, skip it.
      if( this.letterScore[ word[ i ] ] ){
        this.score += this.letterScore[ word[i] ];
      }
    }


    // Modifies the score *ONLY* is a modifier is provided.
    if( modifier ){
      this.score *= this.letterScore[ modifier ];
    }

  },

  sayScore: function( word, modifier ){
    let outputStr = `${ word } is worth ${ this.score } points`

    if( modifier ){
      outputStr += ` with a ${ modifier } modifier.`;
    }

    console.log( outputStr );
  },

  // This is my 'work horse' function. It ties everything together, the one I expect to call the most, so I'm returning a value just in case I ever want it.
  // Rather than having to call wordScore and then scrabble.score to get a numeric value, I can get it all in one.

  wordScore: function( word, modifier ){
    this.setScore( word, modifier );
    this.sayScore( word, modifier );

    return this.score;
  }

} 

scrabble.wordScore( "cabbage" );
scrabble.wordScore( "cabbage", "double word" );
