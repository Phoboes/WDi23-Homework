$(document).ready(function(){
  $('#add-color').on('click', function(){
    var color = $('#color').val();
    var $swatch = $('<div/>').addClass('swatch').css('background-color', color);
    $swatch.appendTo('.palette');
  }); //onClick add-color

  $('.palette').on('click', '.swatch', function (){
    $('.swatch.active').removeClass('active');
    $(this).addClass('active');
  }); //onClick .swatch delegated from .palette

  $('.canvas').on('mouseover', '.pixel', function (e){
    if (e.shiftKey){ return; }
      var color = $('.swatch.active').css('background-color');
      $(this).css('background-color', color);

  });


}); //document ready
