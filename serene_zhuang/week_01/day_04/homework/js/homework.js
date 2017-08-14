let rectangle = {
  length: 7,
  width: 4
};

const isSquare = function( obj ) {

  if (obj.length === obj.width) {
    console.log(`The rectangle is a square.`);
    return `The rectangle is a square.`;
  } else {
    console.log(`The rectangle is not a square`);
    return `The rectangle is not a square`;
  }
}

isSquare( rectangle );

const areaOfRectangle = function (obj) {

  let result = obj.length * obj.width
  console.log(result);
  return result;
}

areaOfRectangle(rectangle);

const perimeterOfRectangle = function ( obj ) {

  let result = 2 * (obj.length + obj.width);
  console.log(result);
  return result;
}

perimeterOfRectangle(rectangle);

let triangle = {
  sideA: 5,
  sideB: 3,
  sideC: 5
};

const isEquilateral = function (obj) {

  if (obj.sideA === obj.sideB === obj.sideC) {
    console.log("The triangle is equilateral.");
  } else {
    console.log('The triangle is not equilateral.');
  }
}

isEquilateral(triangle);

const isIsosceles = function (obj) {

  if (obj.sideA === obj.sideB && obj.sideA !== obj.sideC) {
    console.log("The triangle is isosceles.");
    return "The triangle is isosceles";
  } else if (obj.sideA === obj.sideC && obj.sideA !== obj.sideB) {
    console.log("The triangle is isosceles.");
    return "The triangle is isosceles";
  } else if (obj.sideB === obj.sideC && obj.sideB !== obj.sideA) {
    console.log("The triangle is isosceles.");
    return "The triangle is isosceles";
  } else {
    console.log("The triangle is not isosceles.");
    return "The triangle is not isosceles";
  }
}

isIsosceles(triangle);

const areaOfTriangle = function (obj) {

  let p = (obj.sideA + obj.sideB + obj.sideC) / 2;
  let area = Math.sqrt(p*((p-obj.sideA)*(p-obj.sideB)*(p-obj.sideC)));
  console.log(area);
  return area;
}

areaOfTriangle(triangle);

const isObtuse = function (obj) {

  if (obj !== isEquilateral && obj !== isIsosceles) {
    console.log("The triangle is obtuse");
    return "The triangle is not obtuse";
  }
}

isObtuse(triangle);
