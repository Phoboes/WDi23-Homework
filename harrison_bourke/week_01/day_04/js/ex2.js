const isEquilateral = function(t)
{
  if (t.sideA === t.sideB && t.sideB === t.sideC)
  {
    return true;
  }

  return false;
}

const isIsosceles = function(t)
{
  if (!isEquilateral(t) && (t.sideA === t.sideB || t.sideA === t.sideC || t.sideB === t.sideC))
  {
    return true;
  }

  return false;
}

const area = function(t)
{
  let halfPer = (t.sideA + t.sideB + t.sideC) / 2;

  let area = Math.sqrt(halfPer * (halfPer - t.sideA) * (halfPer - t.sideB) * (halfPer - t.sideC));
  return area;
}

const isObtuse = function(t)
{
  let hypotenuse;
  let s1;
  let s2;

  if (t.sideA > t.sideB)
  {
    if (t.sideA > t.sideC)
    {
      hypotenuse = t.sideA;
      s1 = t.sideB;
      s2 = t.sideC;
    }
    else
    {
      hypotenuse = t.sideC;
      s1 = t.sideA;
      s2 = t.sideB;
    }
  }
  else
  {
    if (t.sideB > t.sideC)
    {
      hypotenuse = t.sideB;
      s1 = t.sideA;
      s2 = t.sideC;
    }
    else
    {
      hypotenuse = t.sideC;
      s1 = t.sideA;
      s2 = t.sideB;
    }
  }

  // Square all the numbers so using Pythag we can check to see
  // if obtuse.
  s1 = Math.pow(s1, 2);
  s2 = Math.pow(s2, 2);
  hypotenuse = Math.pow(hypotenuse, 2);


  if (s1 + s2  < hypotenuse)
  {
    return true;
  }

  return false;
}

let triangle =
{
  sideA: 4,
  sideB: 4,
  sideC: 4
};

console.log(isObtuse(triangle));
