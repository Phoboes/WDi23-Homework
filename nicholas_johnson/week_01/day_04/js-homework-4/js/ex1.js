//GEOMETRY FUNCTION LAB

//square

let rectangle = {
  length: 4,
  width: 5
}

const isSquare = function() {
  if (rectangle.length === rectangle.width) {
    console.log('Is square.');
    return "Is square.";
  } else {
    console.log('Is not square');
    return 'Is not square.';
  }
}

const area = function() {
  let calculateArea = rectangle.length * rectangle.width;
  console.log(calculateArea);
  return calculateArea;
}

const perimeter = function() {
  let calculatePerimeter = (rectangle.length * 2) + (rectangle.width * 2);
  console.log(calculatePerimeter);
  return calculatePerimeter;
}

//TRIANGLE

let triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
};

const isEquilateral = function() {
  if (triangle.sideA === triangle.sideB && triangle.sideC === triangle.sideB) {
    console.log('Is equilateral.');
    return 'Is equilateral.';
  } else {
    console.log('Is not equilateral.');
    return 'Is not equilateral.';
  }
}

const isIsocoles = function() {
  if (triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC || triangle.sideC === triangle.sideB) {
    console.log('Is isocoles.');
    return 'Is isocoles.';
  } else {
    console.log('Is not isocoles.');
    return 'Is not isocoles.';
  }
}

const areaTriangle = function() {
  let height = Math.sqrt((triangle.sideC*triangle.sideC) - ((triangle.sideA*triangle.sideA) / 4));
  let area = (triangle.sideA * height) / 2;
  console.log(area);
  return area;
}

const isObtuse = function() {
  if ((triangle.sideA * triangle.sideA) + (triangle.sideB * triangle.sideB) < (triangle.sideC * triangle.sideC)) {
    console.log('Is obtuse.');
    return 'Is obtuse.';
  } else {
    console.log('Is not obtuse.');
    return 'Is not obtuse.';
  }
}
