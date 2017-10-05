
// const atbash = {
//   normalStr: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
//   reversedStr: ['z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a'],
//
//
//   cipher: function (str) {
//     let newArray = [];
//     let splitStr = str.toLowerCase().split('');
//     // console.log(splitStr);
//     for (var i = 0; i < splitStr.length; i++) {
//       // console.log();
//       let normalIndex = atbash.normalStr.indexOf(splitStr[i]);
//       // console.log(normalIndex);
//       newArray.push(atbash.reversedStr[normalIndex]);
//       // console.log(atbash.reversedStr.indexOf(splitStr[i]));
//     }//for loop
//     console.log(newArray.join(''));
//   },//cipher function
// }//atbash object
//
//
//
// atbash.cipher('abcdefghijklmnopqrstuvwxyz');
// atbash.cipher('test');
// atbash.cipher('gvhg');
//


const atBash = {
  alphabet: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],

  encode: function (input){
    let output = '';
    let str = input.toLowerCase().split('');
    for (var i = 0; i < str.length; i++) {
      let index = this.alphbet.indexOf(str[i]);
      output += (this.alphabet.reverse()[index]);
    }//for loop
  }//encode function
}//atBash object

console.log(atBash.encode('abcdefghijklmnopqrstuvwxyz'));
console.log(atBash.encode('test'));
console.log(atBash.encode('gvhg'));
