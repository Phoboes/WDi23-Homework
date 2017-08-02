/*
Write a function called cashRegister that takes a shopping cart object.
The object contains item names and prices (itemName: itemPrice).
The function should return the total price of the shopping cart. Example
- Input
var cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};
- Output
cashRegister(cartForParty)); // 60.55
*/


let cartForParty = {
  banana: 1.25,
  handkerchief: 0.99,
  Tshirt: 25.01,
  apple: 0.60,
  nalgene: 10.34,
  proteinShake: 22.36
};

let total = 0;

for( item in cartForParty ) {
  total += cartForParty[ item ];
}

console.log( total );


// -- EXAMPLE 2
// let cartForParty = [
//   {item: 'banana', price: 1.25},
//   {item: 'handkerchief', price: 0.99},
//   {item: 'Tshirt', price: 25.01},
//   {item: 'apple', price: 0.60},
//   {item: 'nalgene', price: 10.34},
//   {item: 'protein shake', price: 22.36},
// ];
//
// const cashRegister = function ( cartForParty ) {
//   console.log(cartForParty[0].price + cartForParty[1].price + cartForParty[2].price + cartForParty[3].price + cartForParty[4].price + cartForParty[5].price)
// };
//
// to check
// cashRegister( cartForParty );
