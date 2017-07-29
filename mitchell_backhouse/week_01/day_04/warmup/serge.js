const question = function() {
  debugger;

  const str = prompt("What is your question for Serge?");

  if (str === "") {
    console.log('Be that way');
    return 'Be that way';
  } else if (str[str.length - 1] === "?") {
    console.log('Sure!');
    return 'Sure!';
  } else if (str === str.toUpperCase()) {
    console.log('Woah, Chill out!');
    return 'Woah, Chill out!';
  } else {
    console.log('Whatever');
    return 'Whatever';
  }
}

question();
