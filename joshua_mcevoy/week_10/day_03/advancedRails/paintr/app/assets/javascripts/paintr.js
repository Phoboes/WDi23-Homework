$(document).ready(function(){
  $('#add-color').on('click', function(){
    var color = $('#color').val();
    var $swatch = $('<div/>').addClass('swatch').css('background-color', color);
    $swatch.appendTo('.palette');
  }); //onClick add-color

  $('.swatch').on('click', function (){
    console.log('you clicked a swatch');
  }); //onClick swatch
}); //document ready
