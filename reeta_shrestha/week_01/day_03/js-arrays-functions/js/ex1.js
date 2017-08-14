// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.

// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.


let word = "RORO"
let remaining = []
let guessed = []

for (let i = 0; i < word.length; i++) {
  if (remaining.indexOf(word[i]) < 0) remaining.push(word[i])
}

function makeGuess(letter) {
  console.log(letter)

  if (guessed.indexOf(letter) >= 0) {
    console.log("You've already guessed that. Please guess another.");
    return
  }

  if (remaining.indexOf(letter) >= 0) {
    console.log("Good work, that's a correct letter.");
    guessed.push(letter);
    remaining.splice(remaining.indexOf(letter), 1);
  } else {
    console.log('Sorry, that letter is not in the word.');
  }

  if (remaining.length == 0) {
    console.log("The correct word is " + word + '. Congratuations, you won the game!');
    return
  }
}
makeGuess('X')
makeGuess('R')
makeGuess('O')
