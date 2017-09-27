let joel = document.getElementById("joel");

let imgSwitch = function()
{
  if (joel.style.opacity == 1)
  {
    joel.style.opacity = 0;
  }
  else
  {
    joel.style.opacity = 1;
  }
}

setInterval(imgSwitch, 500);
