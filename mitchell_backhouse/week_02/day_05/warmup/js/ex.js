//Anagram Detector

//Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word.

//In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".

//Suggestions

//Start out by getting this working with discrete functions.
//If you feel comfortable with that, try to put all your functions, collections, etc, into an object.


// this is the first mess I tried


//const anagramDetector = function(word, word_list) {
  //// split word_list and iterate
  //for (let w in word_list) {

    //// get single word into array
    //let wordSplit = word_list[w].split('');

    //// get word param into array
    //let o_word = word.split('');

    //// remove any words if they're not the right length
    //if (wordSplit.length === o_word.length) {
      //console.log( wordSplit );

      //// val for arr
      //let arr = [];

      //// iterate over letters
      //for (let c in wordSplit) {
        //if (o_word.includes(wordSplit[c])) {
          //arr = o_word.splice(wordSplit[c].indexOf(c), 1);
          //console.log('arr: ',arr);
        //} else {
          //break;
        //}
        ////console.log(o_word.includes(wordSplit[c]));
        //console.log(wordSplit[c]);
      //}
      //console.log(arr);
    //}
  //}
//} 

const anagramDetector = function( word, word_list ) {
  // build array of anagram words
  let anagramWords = [];

  for (let w in word_list) {
    if (word_list[w].split('').sort().join() === word.split('').sort().join() ) {
      anagramWords.push(word_list[w]);
      console.log(word, 'is an anagram of', word_list[w]);

    }
  }
  console.log(anagramWords);
  return anagramWords;

}

let wordArr = ["enlists", "google", "inlets", "banana", "netsil"];

anagramDetector('listen', wordArr);



//KANE VERSION

const anagramList = ["enlists", "google", "inlets", "banana"];

const wordCheck = function( word ) {
  let anagrams = [];

  for ( let i = 0; i < anagramList.length; i++ ) {
    const anagramCandidate = anagramList[i].toUpperCase().split('').sort().join('');
    const sortedWord = word.toUpperCase().split('').sort().join('');

    if (anagramCandidate === sortedWord) {
      anagrams.push( anagramList[i] );
    }
  } 

  return anagrams;
}
