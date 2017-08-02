let cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function(cart) {
  var i;
  var sum = 0;
  //debugger;
  for (i in cartForParty) {
    var conversions = Number(cartForParty[i]);
    sum += conversions;
    }
    console.log(sum);
  }
