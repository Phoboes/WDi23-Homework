//Calculate properties of a circle, using the definitions here.
//Store a radius into a variable.
//Calculate the circumference based on the radius, and output "The circumference is NN".
//Calculate the area based on the radius, and output "The area is NN".

console.log("Hi");

const currentAge = 28;
const maxAge = 99;
const amountPerDay = 23; //chocolate
const amountPerYear = amountPerDay * 365.25; //days per year including leaps
const yearsRemaining = maxAge - currentAge;
const totalRequired = amountPerYear * yearsRemaining;

const message = "You will need " + totalRequired + " to last you to the ripe old age of " + maxAge;

console.log(message);
