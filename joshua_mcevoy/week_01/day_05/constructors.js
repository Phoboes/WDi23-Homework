//how to create constructors

let Cat = function(n, a, fc){
  this.name = n;
  this.age = a;
  this.furColor = fc;
};

Cat.prototype.meow = function (){
  console.log("meow");
}

//must have 'new' before constructor name
let lizzie = new Cat( 'Lizzie', 25, 'white');

lizzie.meow();
