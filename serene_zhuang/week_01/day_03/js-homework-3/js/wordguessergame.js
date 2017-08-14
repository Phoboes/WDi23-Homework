

// let wordLetters = "FOX";
// let correctlyGuessed = [];
//
// let guessedLetters = [];
// let hangman = 0
//
//
// let guessLetter = function(letter)
// {
//   let letterIsCorrect = false;
//
//   // First set the correctly guessed array to the length
//   // of the word so we get a bunch of undefineds and can
//   // read those.
//   correctlyGuessed.length = wordLetters.length;
//
//
//   // First things first check to see if we've already
//   // guessed this letter so we can back out if we have
//   // if not add it to the guessed letters array.
//   // When our guessed letters array has not had anything
//   // added to it, i.e. we have not yet made a guess
//   // We must do this or otherwise the for loop will not start.
//   if (guessedLetters.length == 0)
//   {
//     guessedLetters.push(letter);
//   }
//   else
//   {
//     for (i = 0; i < guessedLetters.length; i++)
//     {
//       if (letter == guessedLetters[i])
//       {
//         // Do nothing and back out of the function.
//         return;
//       }
//     }
//   }
//
//   // If we make it this far we have not already
//   // guessed this letter and can hence push it to
//   // the guessed letters array.
//   guessedLetters.push(letter);
//
//
//   // Now check the guessed letter to see if it
//   // is in the array.
//   for (i = 0; i < wordLetters.length; i ++)
//   {
//     if (letter == wordLetters[i])
//     {
//       correctlyGuessed[i] = letter;
//       console.log(`Congratulations. ${letter} is in the word.`);
//       letterIsCorrect = true;
//     }
//   }
//
//   // If the letter was not correct, our boolean will still
//   // be false. And hence we should lose a life
//   if (!letterIsCorrect)
//   {
//     hangman++;
//
//     console.log(`${letter} is not in the word. You have ${6 - hangman} lives remaining.`);
//     // Now check to see if due to this increase
//     // we have lost the game.
//     if (hangman > 5)
//     {
//       console.log(`Sorry, you lose. The correct word was ${wordLetters}`);
//       // Now because we have lost we must reset all the variables.
//       correctlyGuessed = [];
//       hangman = 0;
//       guessedLetters = [];
//
//       // Now draw out a hangman (????)
//       console.log("Insert picture of hangman here");
//     }
//   }
//
//
//   // Create an actual string of the correctly guessed,
//   // replacing all "undefineds" with an underscore.
//   let stringToLog = "";
//   for (i = 0; i < correctlyGuessed.length; i++)
//   {
//     if (correctlyGuessed[i] == undefined)
//     {
//       stringToLog += "_";
//     }
//     else
//     {
//       stringToLog += correctlyGuessed[i];
//     }
//   }
//
//   // Now check to see if we have won by comparing this
//   // correctly guessed letters with the original word.
//   if (stringToLog == wordLetters)
//   {
//     console.log(`Congratulations. You correctly guessed the word. The word was ${wordLetters}`);
//   }
//   else
//   {
//     console.log(stringToLog);
//   }
// }
