const isLeapYear = function ( year ) {
  const y = year || parseInt(year); 

  if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
    console.log(`${y} is a leap year`);
    return true;
  } else {
    console.log(`${y} is not a leap year`);
    return false;
  }
}

isLeapYear(prompt("Enter your year:"));
