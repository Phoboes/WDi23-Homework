let wordLetters = ["F", "O", "X"];
let guessedLetters = ["_", "_", "_"];

let guessLetter = function(x) {
  for (let i = 0; i < wordLetters.length; i++) {
    if (wordLetters[i] === x) {
        guessedLetters[i] = x;
    }
  }
};
