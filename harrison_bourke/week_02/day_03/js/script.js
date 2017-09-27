const imgRef = document.getElementsByTagName('img')[0];

let pos = 0;
let goingRight = true;

imgRef.style.position = "absolute";
imgRef.style.left = pos;

const catWalk = function()
{
  if (goingRight)
  {
    pos += 10;
  }
  else
  {
    pos -= 10;
  }

  if (parseInt(imgRef.style.left) >= (screen.width - imgRef.width))
  {
    goingRight = false;
  }

  if (parseInt(imgRef.style.left) < 0)
  {
    goingRight = true;
  }


  imgRef.style.left = pos + "px";

}

setInterval(catWalk, 50);
