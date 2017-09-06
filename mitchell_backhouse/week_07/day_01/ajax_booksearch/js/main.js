// https://www.googleapis.com/books/v1/volumes?q=title:Ulysses

const bookSearch = function(search) {
  const xhr = new XMLHttpRequest();

  let val = document.getElementById('searchText').value;

  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${val}`);

  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) {
      return;
    }

    const book = JSON.parse( xhr.responseText );
    const title = $(`<li><strong>Title:</strong><p>${book.items[0].volumeInfo.title}</p></li>`);
    const author = $(`<li><strong>Author:</strong><p>${book.items[0].volumeInfo.authors[0]}</p></li>`);
    const subtitle = book.items[0].volumeInfo.subtitle;
    const description = book.items[0].volumeInfo.description;
    const bookThumb = book.items[0].volumeInfo.imageLinks.thumbnail;
    const image = $(`<img src=${bookThumb}>`);

    image.src = bookThumb;

    let displayArea = $('.displayBookDetails');
    displayArea.empty().append(image.clone());
    displayArea.append('<ul></ul>');
    $('.displayBookDetails ul').append(title);
    $('.displayBookDetails ul').append(author);
    //displayArea.append(title);
    //displayArea.append(author);

    displayArea.append("<br><strong>Description</strong><br>" + description.substring(0,300) + '...');

    $('.bookList').append(image);
    //document.body.appendChild(image);

    $('.bookList img').on('click', function() {
      $(this).fadeOut('slow', function() {
        $(this).remove(); 
      });
    });
  }


  xhr.send();
  
}

$(document).ready( function () {
  //$('#searchText').fadeToggle('slow', 'linear');

  const button = document.getElementById('booksearch');
  button.addEventListener('click', bookSearch);

});




