console.log( $.fn.jquery, _.VERSION);

const showImages = function (results) {
  const generateURL = function(photo) {
    return [
      'http://farm',
      photo.farm,
      '.static.flickr.com/',
      photo.server,
      '/',
      photo.id,
      '_',
      photo.secret,
      '_q.jpg'
    ].join('');
  };

  _.each(results.photos.photo, function(p) {
    const imageUrl = generateURL(p)
    const $img = $('<img>', {src: imageUrl});
    $img.appendTo('#images');

    if ( results.photos.photo.length < 50) {
      sendUpdate = false;
    };
  });
};

const searchFlickr = function(q, counter) {
  console.log('Searching Flickr for', q);

  let flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  // returns in JSON
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: q,
    format: 'json',
    safe_search: 1,
    per_page: 50,
    page: counter
  }).done(showImages);


}

let sendUpdate = true;

$(document).ready( function() {
  let counter = 1;

  $('#search').on('submit', function(e) {
    sendUpdate = true;
    e.preventDefault();

    $('#images').empty();

    const query = $('#query').val();
    searchFlickr(query, counter);

  });

  $(window).on('scroll', _.throttle(function() {
    const documentHeight = $(document).height();
    const windowHeight = $(window).height();
    const scrollTop = $(window).scrollTop();

    const scrollBottom = documentHeight - (scrollTop + windowHeight);

    if (scrollBottom < 500 && sendUpdate !== false) {
      counter += 1;
      const query = $('#query').val();
      searchFlickr(query, counter);

      //console.log('within 500px'); 
    };

  }, 2000))
})


// underscore debalance or throttle
