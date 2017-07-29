/*
Create an array to hold your top choices (colors, presidents, whatever).
For each choice, log to the screen a string like: "My #1 choice is blue."
Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
*/


let presidents = [
  "Richard Nixon",
  "President Garfield",
  "President Cleveland",
  "President Obama"
];

for (var i = 0; i < presidents.length; i++) {
  console.log( `My #${ i+1 } choice is ${ presidents[i] }.` );
}


// let colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
// for (let i = 0; i < colors.length; i++) {
//   console.log(`my ${ i + 1 } color is ${colors[i]}`);
// }
//
//
// for (let i = 0; i <= 10; i++) {
//   console.log( `${ i } * 9 = ${ i * 9 }` );
// }
//
// for (let i = 0; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log( `${ i } * ${ j } = ${ i * j }` );
//   }
// }
//

//EXAMPLE
// let rainbowColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
// for (var i = 0; i < rainbowColors.length; i++) {
//   console.log(rainbowColors[i]);
// }
