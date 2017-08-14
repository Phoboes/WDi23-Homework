console.log("test");

// Input
var cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function(cart) {
  // get all values
  let val = Object.values(cart);
  let total = 0.0;
 
  for (let i in val) {
    total += parseFloat(val[i]);
  } 
  
  console.log(total);
  return total;
  
}

// Output
cashRegister(cartForParty); // 60.55
