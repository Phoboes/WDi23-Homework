const groucho = {
  name: 'Groucho Julius Marx',
  greeting: function(){
    return 'Good evening, my name is ' + this.name;
  }
};

const harpo = {
  name: 'Harpo Marx',
  greeting: function(){
    return 'Good evening, my name is ' + this.name;
  }
};


/////////////           .bind          ///////////////////////
// this lets you permanantly associate a particular object as the 'this' within the function, REGARDLESS of where/how you call the function.

const grouchoGreeter = groucho.greeting.bind(groucho);
grouchoGreeter(); //'this' in the fn will refer to 'groucho'
////////////           .apply           //////////////////////
// this let s us pass an array argument into a function which expects multiple separate params
const numbers = [134, 34, 3, 4, -1001, 0, 12, 100000];
//Math.max(numbers); // Doesn't work becuase .max expects seperate params
//ES5:
Math.max.apply(null, numbers); //Flattening out the numbers array into seperate params
//ES6
Math.max( ...numbers); //Destructuring or splatting
