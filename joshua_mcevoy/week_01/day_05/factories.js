const catFactory = function (n, a, fc) {
  return {
    name: n,
    age: a,
    furColor: fc,
    meow: function(){
      console.log("Meow!!");
    },
    greeting: function (){
      console.log(`Hello my name is ${this.name}` );
    },
    showThis: function () {
      console.log(this);
    }
  }
}


let cuteCats = [

  catFactory('Josh', 12, 'brown'),
  catFactory('bob', 2, 'yellow'),
  catFactory('greg', 4, 'white'),
  catFactory('james', 12, 'red'),

];

cuteCats[0].meow();

cuteCats[0].greeting();
