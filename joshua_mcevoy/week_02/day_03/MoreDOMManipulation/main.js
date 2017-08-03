// Create a new Javascript file and link to it with a script tag at the bottom.
// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

let pageNode = document.body;
pageNode.style.fontFamily = 'Arial, sans-serif';

let nicknameChange = document.getElementById('nickname').innerHTML = 'Josh';

let favchange = document.getElementById('favorites').innerHTML = 'Code';

document.getElementById('hometown').innerHTML = 'Coast';

const items = document.getElementsByTagName('li');
  for (let i = 0; i < items.length; i++){
    items[i].className = 'listitem'
  }

const bill = document.createElement('img'); //detached DOM node
bill.src = 'http://fillmurray/80/80/';
pageNode.appendChild(bill);
