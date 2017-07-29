const cashRegister = function(c)
{
  let prices = Object.values(c);
  let total = 0;

  for (let i = 0; i < prices.length; i++)
  {
    total += parseFloat(prices[i]);
  }

  return total;
}

let cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

console.log(cashRegister(cartForParty));
