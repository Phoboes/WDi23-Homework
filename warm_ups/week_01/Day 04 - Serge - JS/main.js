// Serge Says

// Serge answers 'Sure.' if you ask him a question.

// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).

// He says 'Fine. Be that way!' if you address him without actually saying anything.

// He answers 'Whatever.' to anything else.

// Create a function that takes an input and returns Serge's response.

const serge = function( input ){

  // !input converts input to a boolean that is *opposite* to the current state.
  // !true === false.

  // typeof gives you feedback on the data type it is looking at.
  
  // In this case, I care that I have a string, otherwise I always want to stop my program here, before things like .toUpperCase() and .length can throw errors.

  if ( !input || typeof( input ) !== "string"){
    console.log( "Fine, be that way!" );
    return "Fine, be that way!";

  // The reason we remove 1 from input.length is because we are treatiung it like an array. The length by default will be 1 longer (because the array starts at 0, length starts at 1)

  } else if( input[ input.length - 1 ] === "?" ){
    console.log("Sure.");
    return "Sure.";

  // if the input is equal to itself uppercased, we can say that it is safely all caps. Unless it's a character like !, which will always be equal to itself uppercased or downcased.

  } else if ( input === input.toUpperCase() && input ){
    console.log( "Whoa chill." );
    return "Whoa, chill out."
  } else {
    console.log( "Whatever" );
    return "Whatever";
  }
};

serge( "Hey?" );
serge( "HEY" );
serge(  );
serge( 3 );
serge( "" );
serge( "Columbia" );