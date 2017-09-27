
const fetchBook = function () {
  const title = document.getElementById('title').value;

  //create our XHR object
  const xhr = new XMLHttpRequest();

  //set up the XHR object with the URL
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${title}`);

  //Attach the readyStatechange handler(callback)
  xhr.onreadystatechange = function(){
    if (xhr.readyState !== 4) { return; }


    const info = JSON.parse(xhr.responseText);
  //Find the cover
  const cover =  info.items[0].volumeInfo.imageLinks.thumbnail;

  //display the cover
    const img = document.createElement('img');
    img.src = cover;

    document.querySelector('main').appendChild(img);
  }

  xhr.send();

};



const button = document.getElementById('search');
button.addEventListener('click', fetchBook);
