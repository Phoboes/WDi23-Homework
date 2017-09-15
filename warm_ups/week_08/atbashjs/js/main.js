

const atbash = {

  alphabet:  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],


  encode: function( input ){
    let output = ''
    let str = input.toLowerCase().split('')
    for (let i = 0; i < str.length; i++) {
      // figure out the index in the alpahbet array of said letter
      let index = this.alphabet.indexOf( str[i] );
      output += ( this.alphabet.reverse()[index] )
    } //for
    return output;
  } //encode

}// end of app


console.log( atbash.encode('test') );
console.log( atbash.encode('gvhg') );
console.log( atbash.encode('wizard') );
