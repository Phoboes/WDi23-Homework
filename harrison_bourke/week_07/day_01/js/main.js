const fetchBook = function() {

  const title = $('#field').val();

  $.ajax(`https://www.googleapis.com/books/v1/volumes?q=${title}`).done(function(info) {
    const cover = info.items[0].volumeInfo.imageLinks.thumbnail;
    console.log(cover);

    $('<img>').attr('src', cover).appendTo('#content');
  });
}

$(document).ready(function() {
  $('button').on('click', fetchBook);
});
