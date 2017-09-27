
const fetchCharacter = function () {
  const name = document.getElementById('name').value;

//   $.ajax(`https://swapi.co/api/people?search=${name}`).done(function(info){
//     const birth =  info.results[0].birth_year;
//     $('<p>').text(`Birth Year: ${birth}`).appendTo('main');
//     const eye =  info.results[0].eye_color;
//     $('<p>').text(`Eye color: ${eye}`).appendTo('main');
//   })
//   .done(function(i){
//   console.log(i);
//   }).fail(function(){
//    alert('There was an error');
//    });
// };
  $.ajax(`https://swapi.co/api/people?search=${name}`).done(function(info){
    const {birth_year, eye_color, height, hair_color, gender} =  info.results[0];
    $('<p>').text(`Birth Year: ${birth_year}`).appendTo('main');
    $('<p>').text(`Eye color: ${eye_color}`).appendTo('main');
    $('<p>').text(`Height: ${height}cm`).appendTo('main');
    $('<p>').text(`Hair color: ${hair_color}`).appendTo('main');
    $('<p>').text(`Gender: ${gender}`).appendTo('main');
  }).done(function(i){
  console.log(i);
  }).fail(function(){
   alert('There was an error');
   });
};


$(document).ready(function(){
  $('#search').on('click', fetchCharacter)
});
