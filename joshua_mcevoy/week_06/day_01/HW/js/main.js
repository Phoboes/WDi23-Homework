const fetchBook = function () {

  val = document.getElementById('search').value;
  console.log(val);

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${val}`);
  xhr.onreadystatechange = function () {

    if (xhr.readyState !== 4){
      return;
    }
    console.log(xhr.readyState);


    const info = JSON.parse(xhr.responseText);
    console.log(info);

    const image = info.items[0].volumeInfo.imageLinks.thumbnail;
    console.log(`image = ${image}`);
    //link to thumbnail image
    // info.items[0].volumeInfo.imageLinks.thumbnail

    const img = document.getElementById('image');
    img.setAttribute("id", "image");
    document.getElementById("image").src = image;
    document.body.appendChild(img);



  };//onreadystatechange
  xhr.send();
};//fetchBook

fetchBook();

const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', fetchBook);
