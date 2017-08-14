// Serge answers 'Sure.' if you ask him a question.////
//
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.
//
// Create a function that takes an input and returns Serge's response.

const serge = function (question){

  if (!question){
    console.log("Fine. Be that way!");
    return "Fine. Be that way!";
  }
  else if (question === question.toUpperCase()){
    console.log("Woah, chill out!");
    return "Woah, chill out!";
  }
  else if (question[question.length - 1] === "?"){
    console.log("Sure.");
    return "Sure.";
  }
  else {
    console.log("Whatever");
    return "Whatever";
  }


}

serge("Can you do this?");
serge("CAN YOU DO THIS?");
serge("");
serge("AhDoDifu ehisauf");
