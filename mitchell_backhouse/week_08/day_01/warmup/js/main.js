//Atbash Cipher

//The Atbash cipher is a simple substitution cipher that relies on transposing all the letters in the alphabet such that the resulting alphabet is backwards. The first letter is replaced with the last letter, the second with the second-last, and so on.

//An Atbash cipher for the Latin alphabet would be as follows:

//Plain:  abcdefghijklmnopqrstuvwxyz
//Cipher: zyxwvutsrqponmlkjihgfedcba

//It is a very weak cipher because it only has one possible key, and it is a simple monoalphabetic substitution cipher. However, this may not have been an issue in the cipher's time.
//Examples

  //Encoding "test" gives "gvhg"
  //Decoding "gvhg" gives "test"

AtBash = {

};

const buildReverseHash = (str) => {
  h = {};
  _.map(str, function(val, key) { h[val] = str[str.length - key - 1]} );

  return h;
}

const hash = buildReverseHash('abcdefghijklmnopqrstuvwxyz');


const buildCiper = (word) => {
  s = word.toLowerCase().split('')
  w = []
  _.map(s, function(val) { w.push(hash[val]) });
  return w.join('');
}


//const Atbash = {
  //hash: {};
  //hash = buildReverseHash('abcdefghijklmnopqrstuvwxyz');
  //console.log(hash);
//}
