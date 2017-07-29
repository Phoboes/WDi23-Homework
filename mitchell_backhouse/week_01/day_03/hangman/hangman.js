// setup the word to be used and guessed letter array
const word = "development".split('');
let guessedLetter = [];


// guess a letter inside word
const guessLetter = function () {
  let letter = document.getElementById("guess").value.toLowerCase();

  for (chr in word ) {
    if (letter === word[chr]) {
      // add letter to the guessedLetter array if it doesn't exist (prevent duplicates)
      if (!guessedLetter.includes(letter)) {
        guessedLetter.push(letter);
        console.log('Congratulations: Your letter was found:', letter);
      }
    }
  }
  showGuess();

  // reset input field value and refocus
  document.getElementById("guess").value = "";
  document.getElementById("guess").focus();
}

// show letters guessed correctly (i.e. de_e____e__ ) and underscore all others
const showGuess = function (arg) {
  let arr = [];

  for (let i = 0; i < word.length; i++) {
    if (guessedLetter.includes(word[i])) {
      arr.push(word[i]);
    } else arr.push('_');
  }

  let inputArea = document.getElementById('word');
  let inputText = arr.join(' ');
  document.getElementById('word').innerHTML = inputText;

  // return only the array and don't log to console if argument is present
  if (arg) {
    return arr;
  } else {
    console.log(arr.join(' '));
  }
}

// check if the game has been won
const winGame = function() {

  if (showGuess(1).join('') === word.join('')) {
    console.log("You have won the game!");
    return true;
  }
  return false;
}

const buildSpaces = function() {
  // create node
  let node = document.createElement('p');
  // create text inside node
  let textNode = document.createTextNode(showGuess(1).join(' '));
  console.log(textNode);
  node.appendChild(textNode);
  document.getElementById("word").appendChild(node);

}

// this is the old init method. It needs to be replaces and refactored
// to account for the new interface

// run the game
while (winGame() === false) {

  // get input for letter. Does not sanitise input
  // let letter = prompt("Enter a letter to guess");

  // if (letter === null) {
  //   console.log("Refresh the page to play again");
  //   break;
  // } else {
  //   buildSpaces();
  //   guessLetter(letter);
  // }

  // guessLetter();
  document.getElementById('guess').focus();

  document.getElementById("guess")
    .addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode == 13) {
        document.getElementById("guessButton").click();
      }
    });
  break;
}
