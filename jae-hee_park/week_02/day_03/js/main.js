console.log("hello world");
// Create a variable to store a reference to the img.
let screenSize = window.innerWidth;
let img = document.getElementsByTagName('img')[0];
//
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
img.style.top = '50px';
img.style.position = "absolute";
img.style.left = '0px';
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.

let catwalkright = function(){
  let oldRight = parseInt(img.style.left);
  let newRight = oldRight - 1;
  img.style.left = newRight + 'px';
  if (newRight < -296){
  clearInterval(catwalkerRight);
  img.style.transform = 'scaleX(1)';
  catWalker = window.setInterval(catWalk, 20);
}
};

let catwalkerRight

let catWalk = function(){
  let oldLeft = parseInt(img.style.left);
  let newLeft = oldLeft + 1;
  img.style.left = newLeft + 'px';
  if (newLeft > screenSize){
  clearInterval(catWalker);
  img.style.transform = 'scaleX(-1)'
  catwalkerRight = window.setInterval(catwalkright, 20);
}
};

let catWalker = window.setInterval(catWalk, 20);


// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.


// img.style.top = '0px';
// var catDown = function() {
//   var oldTop = parseInt(img.style.top);
//   var newTop = oldTop + 1;
//   img.style.top = newTop + 'px';
//   if (img.style.left > '100px'){
//   // window.clearInterval(catDownwards);
//   oldTop = 0;
//   newTop = oldTop + 1;
//   img.style.top = newTop + 'px';
//   }
// };



// document.onkeydown = ballKeyboard;

let ball = document.getElementsByClassName('ball')[0];
ball.style.right = '30px';
ball.style.top = '30px';

const ballMove = function(e){
  e = e || window.event;

  if (e.keyCode == '38') {
    let balloldtop = parseInt(ball.style.top);
    let ballnewtop = balloldtop - 10;
    ball.style.top = ballnewtop + 'px';
  }
  else if (e.keyCode == '40') {
    let balloldtop = parseInt(ball.style.top);
    let ballnewtop = balloldtop + 10;
    ball.style.top = ballnewtop + 'px';
  }
  else if (e.keyCode == '37') {
    let balloldright = parseInt(ball.style.right);
    let ballnewright = balloldright + 10;
    ball.style.right = ballnewright + 'px';
  }
  else if (e.keyCode == '39') {
    let balloldright = parseInt(ball.style.right);
    let ballnewright = balloldright - 10;
    ball.style.right = ballnewright + 'px';
    //right arrow
  }
}

// const ballMove = function(e) {
//     switch (e.keyCode) {
//         case 37:
//           // let balloldLeft = parseInt(ball.style.left);
//           // let ballnewLeft = balloldLeft +1;
//           // ball.style.left = newRight + 'px';
//             alert('left');
//             break;
//         case 38:
//             alert('up');
//             break;
//         case 39:
//             alert('right');
//             break;
//         case 40:
//             alert('down');
//             break;
//     }
// };

document.addEventListener('keydown', ballMove);

// domNode.addEventListener(eventType, eventListener);
// <button id="counter">0</button>
//
// <script>
// var counterButton = document.getElementById('counter');
// var onButtonClick = function() {
//     counterButton.innerHTML = parseInt(counterButton.innerHTML) + 1;
// };
// document.addEventListener('keydown', ballMove);
// </script>
