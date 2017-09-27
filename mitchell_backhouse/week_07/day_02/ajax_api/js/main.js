let x = {};

function queryString() {
  // clear any existing elements
  clearPage();

  // get query value
  let query = $('#question').val();

  // submit to wit
  $.ajax({
    url: 'https://api.wit.ai/message',
    data: {
      'q': query,
      'access_token' : 'OTBG3T37GG26KE4YUR4PFLMVELIQJ4Y5'
    },
    dataType: 'jsonp',
    method: 'GET',
  }).done(function(res) {
    // store response (test)
    x = res;

    // check for valid entries
    if (Object.keys(res.entities).length > 0) {
      let msg = $('#question').val();
      let confidence = res.entities.location[0].confidence;
      let val = res.entities.location[0].value;

      console.log('Success:', res);

      $('.confidence').append(`<p><span>Confidence: </span>${confidence}</p>`);
      $('.evalue').append(`<p><span>Value: </span>${val}</p>`);
      $('.stringReturn').append(`<p>${msg}</p>`)
      $('.stringSearched').append(`<p>${msg}</p>`)

      highlight(val, "stringReturn");
      highlight(val, "stringSearched");

    } else {
      console.log('nothing returned');
      $('.message').append($("<p>Unable to determine meaning</p>"));
    }
  });
};

// clear used elements
function clearPage() {
  $('.confidence').empty();
  $('.evalue').empty();
  $('.message').empty();
  $('.stringReturn').empty();
}

function highlight(text, hclass)
{
  // search in class passed into hclass
  inputText = document.getElementsByClassName(hclass)[0];

  var innerHTML = inputText.innerHTML;
  var index = innerHTML.indexOf(text);

  const colors = ['#FF4949',  '#FA00FF', '#0068FF', '#009E2B', ]
  
  let color = "yellow";

  console.log(hclass);

  if (hclass === "stringSearched") {
    console.log('trigger');
    color = _.sample(colors) 
    console.log(color);
  } 

  if ( index >= 0 ) { 
    innerHTML = innerHTML.substring(0,index) + `<span class="highlight" style="background-color:${color}">` + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);

    inputText.innerHTML = innerHTML; 
  }
}


$(document).ready( function() {
  $('#targetForm').submit( function() {
    queryString();
  });
});

