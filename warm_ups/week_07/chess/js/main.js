console.log("linked");
console.log(_);


const grains = {

  //generate a 64 long array
  range: _.range(1,65),

  everySquare: [1,2,3,4,5,6,7,8,9],

  // square: function( num ){
  //   return Math.pow(2, num-1)
  // }
  square: ( num ) => Math.pow(2, num-1),

  howMany: (num) => console.log(grains.everySquare[num-1]),

  eachSquare: function() {

    results = [];

    // iterate over my range array do something for each of them , (probs call the square method)

    _.each( this.range, function(i){
      let numberOfGrains = grains.square(i);
      results.push(`Square number ${ i } has  ${numberOfGrains} grains of rice` );
    });
    this.everySquare = results
  },// eachSquare function

  total: function(){
    return _.reduce(this.range, function(sum, num){
      return sum + grains.square(num)
    })
  },
}
