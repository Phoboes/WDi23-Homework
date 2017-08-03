// The song's lyrics are as follows:
//
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down, pass it around, 98 bottles of beer on the wall...
// The same verse is repeated, each time with one bottle fewer, until there are none left.
//
// Bear in mind, not all verses are the same:
//
// The verse for 1 bottle is as follows:
//
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take it down and pass it around, no more bottles of beer on the wall.
// The verse for 0 bottles is as follows:
//
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
// Bonus:
//
// Count through any number of bottles.
// Be able to count between a range of numbers (ie, 20 to 10).

// const bottlesSong = function (bottleNumber) {
//   bottleNumber = bottleNumber || 99;
//   let bottlesOfBeer = bottleNumber;
//
//   //as long as bottlesOfBeer is more than 1 minus one from bottles of beer
//   while (bottlesOfBeer > 1){
//     console.log(`${bottlesOfBeer} bottles of beer on the wall, ${bottlesOfBeer} bottles of beer.`);
//     bottlesOfBeer--;
//     console.log(`Take one down, pass it around, ${bottlesOfBeer} bottles of beer on the wall...`);
//   }
//   if (bottlesOfBeer === 0){
//     console.log(`No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.`);
//   }
//   else if (bottlesOfBeer === 1){
//     console.log(`1 bottle of beer on the wall, 1 bottle of beer. Take it down and pass it around, no more bottles of beer on the wall.`);
//   }
// };
//
// bottlesSong('10');
//
//
// const bottlesBetween = function (bottleNumberStart, bottleNumberFinish) {
//   bottleNumberStart = bottleNumberStart || 99;
//   bottleNumberFinish = bottleNumberFinish || 0;
//
//   let bottlesOfBeer = bottleNumberStart;
//   while (bottlesOfBeer > bottleNumberFinish && bottlesOfBeer <= bottleNumberStart){
//     console.log(`${bottlesOfBeer} bottles of beer on the wall, ${bottlesOfBeer} bottles of beer.`);
//     bottlesOfBeer--;
//     console.log(`Take one down, pass it around, ${bottlesOfBeer} bottles of beer on the wall...`);
//   }
//   if (bottlesOfBeer == bottleNumberFinish){
//     console.log(`You're drunk, Go home!.`);
//   }
//
// };
//
// bottlesBetween('30', '20');


// const beer = {
//
//   beerQuantity: function (num){
//     if (num === 0){
//       return `No bottles of beer`;
//     }
//     else if (num === 1){
//       return `1 bottle of beer`;
//     }
//     else {
//       return `${num} bottles of beer`;
//     }
//   },
//
//   action: function (num){
//     if (num === 0){
//       return `Go to the store, buy some more`;
//     }
//     else if (num === 1){
//       return `Take is down, pass it around`;
//     }
//     else {
//       return `Take 1 down, pass it around`;
//     }
//   },
//
//   decrement: function (){
//     if (num === 0){
//       return 99;
//     }
//     else {
//       return num - 1;
//     }
//   },
//
//   verseOne: function (num){
//     let verse = `${this.beerQuantity(num)} on the wall, ${this.beerQuantity(num)} bottle of beer.`;
//     console.log(`${this.beerQuantity(num)} on the wall, ${this.beerQuantity(num)} bottle of beer.`);
//     return verse;
//   },
//
//   verseTwo: function (num){
//     let verse = `${this.action(num)}, ${this.beerQuantity(num -1)} on the wall.`;
//     console.log(`${this.beerQuantity(num)} on the wall, ${this.beerQuantity(num)} bottle of beer.`);
//     return verse;
//   },
//
//   song: function (start = 99, end = 0){
//     for (let i = start; i >= end; i--){
//       this.verseOne(i);
//       this.verseTwo(i);
//     }
//   }
//
// };

// var arr = [
//
//   {name: 'Edgy', eyes: 'mustard', heigth: false},
//   {title: 'JS Love', andthat: 5.00, inStock: false},
//   {first: 12, second: 'cavoodle', third: [1, 12, 15]},
//
// ];
//
// for (let i = 0; i < arr.length; i++){
// console.log(arr[i].keys, arr[i].values);
// };



let result = [];
const something = function (max, factor){

  for (let i = 0; i <= max; i++){
    
    if (max % factor === 0){
      result.push(test);
    }
    else {
      console.log(`is not divisible`);
    }
    return result;
  }

};

something(5, 100);
