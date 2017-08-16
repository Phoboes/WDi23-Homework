// Write a program that will replicate the scoring system in Scrabble. The function should take a single argument (the word, comprised of letters/tiles) and return a score.
//
// Letter Values
//
// You'll need these:
//
// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
// So now that you've got those letter values, consider what data structure is good for mapping keys to values?
//
// Examples
//
// "cabbage" should be scored as worth 14 points:
//
// 3 points for C
// 1 point for A, twice
// 3 points for B, twice
// 2 points for G
// 1 point for E
// And to total:
//
// 3 + 2 * 1 + 2 * 3 + 2 + 1
// = 3 + 2 + 6 + 3
// = 5 + 9
// = 14
// let score = 0;
// const scrabble = function (letters) {
//   for (let i = 0; i < letters.length; i++){
//     console.log(letters[i]);
//     let letter = letters[i];
//     if (letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U' || letter === 'L' || letter === 'N' || letter === 'R' || letter === 'S' || letter === 'T'){
//       score++;
//     }
//     if (letter === 'D' || letter === 'G'){
//       score += 2;
//     }
//     if (letter === 'B' || letter === 'C' || letter === 'M' || letter === 'P'){
//       score += 3;
//     }
//   }
// };
//
//
// scrabble('AEIOULNRST');
// scrabble('DG');
// console.log(score);

// let values = [
//   [''],
//   ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
//  ];
//
//
// const scrabble = function (letters) {
//
//   for (let i = 0; i < values.length; i++){
//     console.log(values[i]);
//
//     // for (let j = 0; j < values[i].length; i++){
//     //   console.log(values[i][j]);
//     // }
//   }
// };
//
//
// scrabble('AEIOULNRST');



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
    "double word": 2,
    "triple word": 3
  },

  score: 0,

  setScore: function (word, modifier){
    word = word.toUpperCase();
    score = 0;

    for (let i = 0; i < word.length; i++){
      if(this.letterScore[word[i]]){
        this.score += this.letterScore[word[i]];
      }
    }

    if (modifier){
      this.score *= this.letterScore[modifier];
    }
  },

  sayScore: function (word){
    console.log(`${word} is worth ${this.score} points.`);
  },

  wordScore: function (word, modifier){
    this.setScore(word, modifier);
    this.sayScore(word);

    return this.score;
  }
}
