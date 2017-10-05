console.log(`working`);

const object = {

  s1: function (n){

    return n % 2 === 0 ? 0 : 1;

  }, //something function

  s2: function (n) {

    return n * (n + 1) / 2;

  },

};//object


console.log(object.s1(4));
console.log(object.s1(5));
console.log(object.s2(5));
console.log(object.s2(4));
