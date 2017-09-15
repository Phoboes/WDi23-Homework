// Using HTML, CSS and JS + jQuery, create a web page which prints a random word from a large sample of text, in a random position on the page, every 100 milliseconds.
//
// Hints:
//
// Grab some plain text (20-50 paragraphs should do) from one the top 100 novels in the public domain at Project Gutenberg; paste the text into a hidden <div> element in your HTML file, and use jQuery to get the contents of the div.
// Bonus:
//
// Fade the text in to make it appear, and then fade it out to disappear, to stop the page getting too dense with texty text.
// Try random colours, random font sizes, rotation, whatever floats your boat.


// const randomWords = {
//
//   getRandomInt: function (min, max) {
//   // min = Math.ceil(min);
//   // max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
//   },
//
//
//   showText: function () {
//   // console.log(`working`);
//   // console.log();
//   let text = $('#hiddenText p')[randomWords.getRandomInt(0, 3)].innerHTML;
//   positionX = randomWords.getRandomInt(0, 100);
//   positionY = randomWords.getRandomInt(0, 100);
//   $('<div></div>').append('body').fadeIn(1000).attr('class', 'fade');
//   $(text).append('.fade');
//   console.log(text);
//   },
// }
//
//
// $(document).ready(function() {
//
//   // setInterval(randomWords.showText, 1000);
//
// });





// $(document).ready(function() {
//   let words = $('#words').text().split(/[ ;\-,.\n]+/);
//   console.log(words);
//   const $body = $('body');
//   const randy = function (max) {
//     return Math.floor(Math.random() * max);
//   }
//   const putWord = function() {
//     let randomWord = words[randy(words.lenght)];
//     console.log(randomWord);
//     let $div = $('<div class="word">').html(randomWord);
//     $div.css({
//       top: randy(window.innerHeight) + 'px',
//       left: randy(window.innerWidth) + 'px',
//       fontSize: (40 + randy(80)) + 'px',
//       color: 'rgb(${randy(255)}, ${randy(255)}, ${randy(255)})'
//
//
//     })
//     $div.appendTo($body);
//
//   }
//
// setInterval(putWord, 100);
//
// });


// let images = $('img');
// $('img').attr('src', 'http://bit.ly/2qibWz2');
// console.log(images);



wdi = {
       class: 22,
       startDate: "15/05/2017",
       instructors: ["Luke Hammer", "Matty Edge"],
       students: {
            enrolled: ["Max", "Quinn", "Reeta", "Malcolm in the Middle", "Anusha"],
            notEnrolled: ["Rick and Morty", "Bill Gates"]
      },
      enjoymentLevel: ">9000",

      nameMove: function (name) {
        let cut = wdi.students.enrolled;
        let index = cut.indexOf(name);

          if (index === -1){
            console.log(`not enrolled`);
          }
          else {
            wdi.students.enrolled.splice(index, 1);
            wdi.instructors.push(name);
          }
      }
}



// let cut = wdi.students.enrolled;
// console.log(cut);
// let index = cut.indexOf("Max");
// console.log(index);

// Add a method to the object which takes a student name as an argument, and moves the student from the enrolled students (if they are in that list) and into the instructors list.
