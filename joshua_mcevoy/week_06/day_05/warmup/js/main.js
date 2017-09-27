console.log(`working`);
console.log(_); //check if underscore is connected


const grains = {
  range: _.range(1, 65),
  everySquare: [],
  // square: function(num){
  //   return Math.pow(2, num - 1)
  // },

  square: (num) => Math.pow(2, num - 1), //square function

  howMany: (num) => console.log(grains.everySquare[num - 1]), //howMany

  eachSquare: function(){
    results = [];
    _.each(this.range, function (i){
      let numberOfGrains = grains.square(i);
      results.push(`Square number ${i} has ${numberOfGrains} grains of rice.`);
    });//each
    this.everySquare = results;
  }, //eachSquare function

  total: function (){
    return _.reduce(this.range, function(sum, num){
      return sum + grains.square(num)
    })//reduce
  }, //total function
};//grains Class
