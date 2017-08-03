// Add an event listener to the button so that it calls a makeMadLib function when clicked.

// In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

const libButton = document.getElementById('lib-button');
// console.log(libButton);

const makeMadLib = function (){
  let noun = document.getElementById('noun').value;
  let adjective = document.getElementById('adjective').value;
  let person = document.getElementById('person').value;
  // console.log(`${person} likes ${adjective} ${noun}`);
  const story = `${person} really likes ${adjective} ${noun}`
  document.getElementById('story').innerHTML = story;
};

libButton.addEventListener('click', makeMadLib);
