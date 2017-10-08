$(document).ready(function(){
  const $body = $('body');
  const $bill = $('.bill');

  $(window).on('scroll', function (){
    const scrollTop = $(window).scrollTop();
    $body.css('background-position-y', -scrollTop / 3);
    $bill.css('background-position-y', -scrollTop * 0.75);
  }); //on scroll function

  //bubbles

  $(window).on('mousemove', function (e){
    const x = e.pageX;
    const y = e.pageY;

    const size = (Math.random()* 10) + 'em';

    const $bubble = $('<div class="bubble"></div>').css({
      left: x,
      top: y,
      width: size,
      height: size
    }); //const $bubble

    $bubble.appendTo($body);

    $bubble.animate({top: -200}, 2000, function(){
      $bubble.remove();
    });//animate bubble

    console.log(x, y);
  });//on moovemouse function
}); //doc ready function
