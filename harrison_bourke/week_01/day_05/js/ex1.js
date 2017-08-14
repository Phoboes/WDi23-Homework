const nLine = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
const lLine = ["8th, 6th", "Union Square", "3rd", "1st"];
const sixLine = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];

const planTrip = function(startingLine, startingStop, endingLine, endingStop)
{
  startingLineArr = findLine(startingLine);
  startingIteration = findIteration(startingLineArr, startingStop);

  endingLineArr = findLine(endingLine);
  endingIteration = findIteration(endingLineArr, endingStop);

  let trip = [];

  if (startingLineArr === endingLineArr)
  {
    while (true)
    {
      trip.push(startingLineArr[startingIteration]);

      startingIteration++;

      if (startingIteration === startingLineArr.length)
      {
        startingIteration = 0;
      }

      if (startingIteration === endingIteration)
      {
        trip.push(startingLineArr[startingIteration]);
        break;
      }
    }

    for (let i = 1; i < trip.length; i++)
    {
      if (i === trip.length - 1)
      {
        console.log("Get off at " + trip[i]);
      }
      else
      {
        console.log("Travel through " + trip[i]);
      }
    }


    console.log(trip.length - 1 + " stops in total");
  }
  else
  {
    let firstLine = true;
    let unionStartIteration = findIteration(startingLineArr, "Union Square");

    // First let's do as we did with one line, but do it to Union Square.
    while (true)
    {
      trip.push(startingLineArr[startingIteration]);

      startingIteration++;

      if (startingIteration === startingLineArr.length)
      {
        startingIteration = 0;
      }

      if (startingIteration === unionStartIteration)
      {
        trip.push(startingLineArr[startingIteration]);
        break;
      }
    }

    // Now we have gotten to Union Square, we must change to the other line.
    let unionEndIteration = findIteration(endingLineArr, "Union Square");
    while (true)
    {
      if (endingLineArr[unionEndIteration] != "Union Square")
      {
        trip.push(endingLineArr[unionEndIteration]);
      }

      unionEndIteration++;

      if (unionEndIteration === endingLineArr.length)
      {
        unionEndIteration = 0;
      }

      if (unionEndIteration === endingIteration)
      {
        trip.push(endingLineArr[unionEndIteration]);
        break;
      }
    }

    for (let i = 1; i < trip.length; i++)
    {
      if (trip[i] === "Union Square")
      {
        console.log("Change at Union Square");
      } else
      {
        if (i === trip.length - 1)
        {
          console.log("Get off at " + trip[i]);
        }
        else
        {
          console.log("Travel through " + trip[i]);
        }
      }
    }
    console.log(trip.length - 1 + " stops in total");
  }
}

const findLine = function(line)
{
  switch (line)
  {
    case "N":
      return nLine;
      break;

    case "L":
      return lLine;
      break;

    case "6":
      return sixLine;
      break;
  }
}

const findIteration = function(line, stop)
{
  for (let i = 0; i < line.length; i++)
  {
    if (line[i] === stop)
    {
      return i;
    }
  }
}
