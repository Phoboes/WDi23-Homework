/*
Homework: The Word Guesser

You'll create a simple word guessing game where the user gets infinite tries to guess the word 
(like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one 
to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end 
with 'F', 'O', 'X').

Write a function called guessLetter that will:

Take one argument, the guessed letter.

Iterate through the word letters and see if the guessed letter is in there.

If the guessed letter matches a word letter, changed the guessed letters array to reflect that.

When it's done iterating, it should log the current guessed letters ('F__') and congratulate 
the user if they found a new letter.

It should also figure out if there are any more letters that need to be guessed, and if not, 
it should congratulate the user for winning the game.

Pretend you don't know the word, and call guessLetter multiple times with various letters to 
check that your program works.
*/

//--------------------------------------------------------------------


// Basic:

// Starting word:
// An array of letters

// Guesses:
// An array full of underscores that corresponds to the length of a word.


// Function that takes a letter
// => Checks starting word for the existence of a given letter
  // > if that exists, 
  // loop through starting word
    // substitute the underscores in matching indexes within the guess array

// Bonus:

// Score - track bad guesses
// be able to lose
//   If you lose, show a dead guy.

// ----------------------------------------------------------------

// Convert to uppercase and split from a string to prevent comparison issues between cases (a != A)

const startWord = "murray".toUpperCase().split('');

let guesses = [];

// I hate typing arrays, use the length of the starting word to make an array full of underscores that is the same length as my starting word. Make the computer do the work.

for( let i = 0; i < startWord.length; i++ ){
  guesses.push("_");
}

let badGuesses = 0;

// ----------------------------------------------------------------
// COMPONENTS

const checkState = function(){
  if( badGuesses >= 3 ){
    playDead();
    console.log( "You lose!" );
    // Return tells this function to stop *right now*, do not evaluate any further. Think of this like break.
    return;
  }

  // Rather than comparing arrays directly -- join them into string that can be more easily compared.
  if( startWord.join('') === guesses.join('') ){
    console.log( "You win!" );
    return;
  }
}

const letterValidate = function( letter ){
  letter = letter.toUpperCase();
  
  // Includes tells me if an item exists in an array or not.
  // Alternative: if indexOf( letter ) >= 0

  // Check for the letter existing in the start word.

  if( startWord.includes( letter ) ){
    // If it exists - iterate through the original word
    for( let i = 0; i < startWord.length; i++ ){
      if( startWord[ i ] === letter ){
        // Substitute underscores in the guesses array corresponding to matching indexes in startWord.
        guesses[ i ] = letter;
      }
    }
    console.log( guesses );
  } else {
    console.log( "That's a bad guess." );
    // Increments my bad guess variable by 1 (++). The same as +=, except only works for an increment of 1.
    badGuesses ++;
  }
};

// Dat dead guy
const playDead = function(){
  console.log("_____________");
  console.log("|       |_");
  console.log("|      (x_x)"); // X's indicate he real dead.
  console.log("|       /||\\");
  console.log("|       /  \\");
  console.log("|");
  console.log("|");
  console.log("|");
  console.log("________________");
};

// ----------------------------------------------------------------
// MAIN FUNCTION


// My main utility function -- ties all my smaller functions together into tiny components.

// Pros: 
// Easier to read
// Easier to debug

// Cons: Scattered code

const wordGuess = function( letter ){
  // Clears the console for me so I'm not looking at old results
  console.clear();
  letterValidate( letter );
  checkState();
};


// console.log( startWord );
console.log( guesses );


wordGuess("M");









	





