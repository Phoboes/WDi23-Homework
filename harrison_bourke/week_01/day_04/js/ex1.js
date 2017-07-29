const isSquare = function(s)
{
  if (s.length === s.width)
  {
    return true;
  }

  return false;
}

const area = function(s)
{
  return s.length * s.width;
}

const perimeter = function(s)
{
  return (2 * s.length) + (2 * s.width);
}



let square =
{
  length: 4,
  width: 4
};

console.log(isSquare(square));
console.log(area(square));
console.log(perimeter(square));
