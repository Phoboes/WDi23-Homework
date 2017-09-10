'use strict';

var state = {
  currentPage: 1,
  lastPage: false
};

var showImages = function showImages(results) {
  var generateURL = function generateURL(photo) {
    return ['http://farm', photo.farm, '.static.flickr.com/', photo.server, '/', photo.id, '_', photo.secret, '_q.jpg' // change the q for different sizes
    ].join('');
  };
  console.log(results);

  if (results.photos.page === results.photos.pages) {
    state.lastPage = true;
  }

  _(results.photos.photo).each(function (p) {
    var imageURL = generateURL(p);
    var $img = $('<img>', { src: imageURL }); //equivalent .attr('src', imageURL)
    var $a = $('<a></a>', { href: 'http://flickr.com/', target: '_blank' });
    $a.html($img);
    $a.appendTo('#images');
  });
};

var searchFlickr = function searchFlickr(q) {

  if (state.lastPage) {
    return;
  }

  console.log('Searching Flickr for', q);

  var flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: q,
    format: 'json',
    page: state.currentPage++
  }).done(showImages);
};

$(document).ready(function () {
  $('#search').on('submit', function (e) {

    e.preventDefault();
    $('#images').empty();
    state.currentPage = 1;
    state.lastPage = false;

    var query = $('#query').val();

    searchFlickr(query);
  });

  $(window).on('scroll', _.throttle(function () {
    var documentHeight = $(document).height();
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();

    var scrollBottom = documentHeight - (scrollTop + windowHeight);
    if (countImages <= totalImages) {
      if (scrollBottom < 500) {
        var query = $('#query').val();
        searchFlickr(query);
      }
    }
  }, 500, { trailing: false }));
});