const fetchBook = function(keyword) {

  // grab keyword value
  let searchTerm = document.getElementById('search').value;

  // create xhr object
  const xhr = new XMLHttpRequest();
  // set up the xhr object with the url
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${searchTerm}`);
  // attach the readystatechange handler (callback)
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) {
      return;
    }
    // append the new book response to the page
    const info = JSON.parse(xhr.responseText);

    // clear the previous search result before populating another one
    let results = document.getElementsByClassName('results')[0];
    results.innerHTML = '';


    info['items'].forEach(function(item) {
      let title = item['volumeInfo']['title'];
      let image = item['volumeInfo']['imageLinks']['thumbnail'];
      let description = item['volumeInfo']['description'].substring(0, 150) + ' ...';

      const p = document.createElement('p');
      const h = document.createElement('H1');
      let thumb = document.createElement('img');
      thumb.src = image;
      h.innerText = title;
      p.innerHTML = description;


      let div = document.createElement('div');
      div.className = 'searchResult';
      div.appendChild(h);
      div.appendChild(thumb);
      div.appendChild(p);


      results.appendChild(div);
    })
  }
  // send the request
  xhr.send();

};

// add eventlistener
let searchField = document.getElementById('search');
searchField.addEventListener('keyup', (e) => {
  e.keyCode == 13 ? fetchBook() : false
});

let button = document.getElementsByTagName('button')[0];
button.addEventListener('click', fetchBook);
