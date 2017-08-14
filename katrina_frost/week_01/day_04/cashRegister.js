
//------------------- CASH REGISTER ----------------------- //

// object pro tip for cash register
// Write a function called cashRegister that takes a shopping cart object.
//The object contains item names and prices (itemName: itemPrice).
//The function should return the total price of the shopping cart. Example
//
// // Input
// let cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55

let cartForApplePie = {
  apple: "1.00",
  cinnamon: "2.00",
  custard: "4.50",
  oats: "3.00",
  brownSugar: "5.50",
  spoon: "10.50"
};

function cashRegister(cart){
  let items = Object.keys(cart); // array of items by key
  let sum = 0;

  for (let i = 0; i < items.length; i++) {
    let itemName = items[i]; // get the name of the key for the item
    let itemPrice = cart[itemName]; // get the price for the item
    sum += Number.parseFloat(itemPrice); // convert the price to a float and add it to the sum
  }

  return sum;
}
cashRegister(cartForApplePie);
