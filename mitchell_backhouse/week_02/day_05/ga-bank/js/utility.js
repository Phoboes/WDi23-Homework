$(document).ready( function() {
  $('#reset').on('click', function() {
    $('.transactions .item').remove();
  });
  $('#toggleHidden').on('click', function() {
    $('.transactions').toggleClass('hidden');
  })
});
