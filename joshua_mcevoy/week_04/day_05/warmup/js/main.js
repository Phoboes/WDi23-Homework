

const nucleotideWarmup = {

  nucleotide: { A: 0, C: 0, G: 0, T: 0 },
  validNucleotides: false,

  nucleotideCount: function(str) {
    nucleotideWarmup.validNucleotides = false;
    let array = str.toUpperCase().split('');

    for (let i = 0; i < array.length; i++){
      let letter = array[i];
      for (let val in nucleotideWarmup.nucleotide){
        if (val === letter){
          nucleotideWarmup.nucleotide[val]++;
          nucleotideWarmup.validNucleotides = true;
        }//if
      }//for in
    }//for array
    if (nucleotideWarmup.validNucleotides){
      console.log(nucleotideWarmup.nucleotide);
      return nucleotideWarmup.nucleotide;
    }else{
      return `No valid nucleotides.`;
    }//if
  }//nucleotideCount
};

nucleotideWarmup.nucleotideCount("aisfjaaksejfkaj");
nucleotideWarmup.nucleotideCount("acgtacgtacgt");
nucleotideWarmup.nucleotideCount("inmmmm")


// const nucleotides = ['A', 'C', 'G', 'T', 'U'];
//
// let validNucleotides = false;
//
// const nucleotideCounter = function(string, letter) {
//   let counter = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === letter){
//       counter++;
//       validNucleotides = true;
//     }
//   }
//   return counter;
// };
//
// const getNucleotideCount = function(str) {
//   str = str.toUpperCase();
//
//   let result = '';
//
//   for (var i = 0; i < nucleotides.length; i++) {
//     let nucleotide = nucleotides[i];
//     let count = nucleotideCounter(str, nucleotide);
//     if (count > 0){
//       result += (`${nucleotide}: ${count} \n`)
//     }
//   }
//
//   if (validNucleotides){
//     return result;
//   }else {
//     return "No valid nucleotides.";
//   }
// };
