

// Every time a letter is guessed, generate a random amount and reward the user
//if they found a letter (multiplying the reward if multiple letters found),
//otherwise subtract from their reward.
// When they guess the word, log their final reward amount.

let reward = 0;
let arrayHold = ['F', 'O', 'X', 'Y'];
let arrayGuess = [];
let lettersLeft = 4;

const guessLetter = function (guess){
  let wrongAnswer = 0;
  for (let i = 0; i < arrayHold.length; i++){
    let correctAnswer = 0;
    if ( guess === arrayHold[i] ){
      correctAnswer += 1;
    }else {
      wrongAnswer += 1;
    }
    if (correctAnswer > 0) {
      reward += 1;
      lettersLeft -= 1;
      console.log("reward = " + reward);
    }
    if (wrongAnswer === 4) {
      reward -= 1;
      console.log("reward = " + reward);
    }
    if (lettersLeft === 0){
      console.log("You win! Your reward is: " + reward)
    }
  }
}

guessLetter('N');
guessLetter('J');
guessLetter('X');
guessLetter('F');
guessLetter('O');
guessLetter('Y');
