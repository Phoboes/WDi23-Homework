const fetchBook = function() {
  const xhr = new XMLHttpRequest();

  const input = document.getElementById('field').value;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${input}`;

  xhr.open('GET', url);

  xhr.onreadystatechange = function() {

    if (xhr.readyState !== 4) {
      return;
    }

    const info = JSON.parse(xhr.responseText);
    const imageLink = info.items[0].volumeInfo.imageLinks.thumbnail;
    console.log(info);

    const img = document.createElement('img');
    img.src = imageLink;

    document.getElementById('content').appendChild(img);
  }

  xhr.send();

}


const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', fetchBook);
