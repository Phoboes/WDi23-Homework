var img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '0px';
let movingLeft = true;
var catWalk = function() {
  var oldLeft = parseInt(img.style.left);
  var newLeft = oldLeft + 1;
  img.style.left = newLeft + 'px';


	if (img.style.left >= screen.width - img.width) {
		movingLeft = false;
		var maxLeft = parseInt(img.style.left);
		var shrinking = maxLeft - 2;
		img.style.left = shrinking + 'px';
	}
	console.log(img.style.left)
};
setInterval(catWalk, 6);


let colorChange = function () {
  document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
}

setInterval(colorChange, 10)

// const imgExpand = document.getElementsByTagName('img')[0];
//
// const makeImageBigger = function() {
//
//   imgExpand.setAttribute('width', imgExpand.width+1);
// };
//
//
// const makeImageSmaller = function() {
//   imgExpand.setAttribute('width', imgExpand.width-1);
// }
//
// setInterval(makeImageBigger, 50);
//
// if (imgExpand.width >= 100) {
//   clearInterval();
//   setInterval(makeImageSmaller, 50)
// }
