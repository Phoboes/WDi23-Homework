// walk left to right and restart

// let img = document.getElementsByTagName("img")[0];
// img.style.left = "0px";
//
// let catWalk = function() {
//   let startLeft = parseInt(img.style.left);
//   img.style.left = (parseInt(img.style.left) + 3) + 'px';
//   if(startLeft > window.innerWidth) {
//     img.style.left = "0px";
//   }
// }
// setInterval(catWalk, 10);


//////////////////////////////////////////////////////


// walk backwards right to left and restart

let img2 = document.getElementsByTagName("img")[0];
img2.style.right = "0px";

let move = 3;

let catMoonwalk = function() {
  let startRight = parseInt(img2.style.right);
  img2.style.right = (parseInt(img2.style.right) + move) + 'px';
  if(startRight > window.innerWidth) {
    img2.style.right = "0px";
  }
}
setInterval(catMoonwalk, 10);
