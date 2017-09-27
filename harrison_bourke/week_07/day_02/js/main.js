let answer = "";
let lowAnswer = "";
let correctlyGuessed = 0;
let incorrectlyGuessed = 0;

const fetchQuestion = function() {

  $.ajax('http://jservice.io/api/random').done(function(data) {
    $('#question p').text(data[0].question);
    answer = data[0].answer;
    lowAnswer = answer.toLowerCase();
    console.log(answer);
   });
}

const checkAnswer = function() {
  input = $('#answerField').val().toLowerCase();

  if (input == lowAnswer) {
    $('#answer p').text(`Correct, the answer was ${answer}`);
    correctlyGuessed++;
    $('#correct').text(correctlyGuessed);
  } else {
    $('#answer p').text(`Incorrect, the answer was ${answer}`);
    incorrectlyGuessed++;
    $('#incorrect').text(incorrectlyGuessed);
  }

  const button = $('<button>').text('Next Question').appendTo('#answer');

  $('#answerButton').off();
  button.on('click', nextQuestion);

}

const nextQuestion = function() {
  $('#answer').html("");
  $('<p>').appendTo('#answer');

  $('#answerButton').on('click', checkAnswer);

  fetchQuestion();

}


$(document).ready(function() {
  fetchQuestion();
  $('#answerButton').on('click', checkAnswer);
});
