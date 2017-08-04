// Anagram Detector

// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word.

// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".

// Suggestions

// Start out by getting this working with discrete functions.
// If you feel comfortable with that, try to put all your functions, collections, etc, into an object.

// -------------------------------------------------------------------
// Basic:
// -------------------------------------------------------------------

// Approach:
// Rather than generating every combination of letters for each word and trying to find a match, we can use methods to sort words into something more manageable. For instance:
// "listen".toUpperCase()
// => "LISTEN"

// "listen".toUpperCase().split('')
// => ["L", "I", "S", "T", "E", "N"]

// Now that it's an array, it can be sorted:
// "listen".toUpperCase().split('').sort()
// => ["E", "I", "L", "N", "S", "T"]

// "listen".toUpperCase().split('').sort().join('')
// => "EILNST"

// Any word with the same letters will be sorted into the same basic block. Much simpler.

const anagramList = ["enlists", "google", "inlets", "banana"];

const wordCheck = function( word ){
  // Storage of successful anagrams
  let anagrams = [];

  for( let i = 0; i < anagramList.length; i++ ){
    // These method chains are huge, and I don't want a giant if statement, so I'm storing them in variables for portability.
    const anagramCandidate = anagramList[i].toUpperCase().split('').sort().join('');
    const sortedWord = word.toUpperCase().split('').sort().join('');

    if( anagramCandidate === sortedWord ){
      anagrams.push( anagramList[i] );
    }
  }

  return anagrams;
};

// -------------------------------------------------------------------
// Object:
// -------------------------------------------------------------------

const anagram = {
  anagramList: ["enlists", "google", "inlets", "banana"],
  anagrams: [],

// No returns in this function, as I have storage available through the object ^
  setWords: function( word ){
    for( let i = 0; i < this.anagramList.length; i++ ){
      const anagramCandidate = this.anagramList[i].toUpperCase().split('').sort().join('');
      const sortedWord = word.toUpperCase().split('').sort().join('');

      if( anagramCandidate === sortedWord ){
        this.anagrams.push( this.anagramList[i] );
      }
    }
  },

  check: function( word ){
    this.setWords( word );
    // A string to modify with conditions.
    let answer = '';

    // Checks if there are successful anagrams and answers accordingly.
    if( this.anagrams.length === 0){
      answer = "no anagrams in the list.";
    } else {
      answer = `${ this.anagrams.join(", ") }.`
    }

    console.log( `${ word } has ${ answer }` );
    return this.anagrams;
  }
};

