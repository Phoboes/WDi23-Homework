let totalImages = 0;
let countImages = 0;
let pageNumber = 1;

const showImages = function (results) {
  const generateURL = function(photo){
    return [
      'http://farm',
      photo.farm,
      '.static.flickr.com/',
      photo.server,
      '/',
      photo.id,
      '_',
      photo.secret,
      '_q.jpg'// change the q for different sizes
    ].join('');
  };
  console.log(results);
  countImages++;
  totalImages =results.photos.total;


  _(results.photos.photo).each(function(p){
    const imageURL = generateURL(p);
    const $img = $('<img>', {src: imageURL}); //equivalent .attr('src', imageURL)
    $img.html ="";
    $img.appendTo('#images')

  })
};



const searchFlickr = function (q) {
  console.log('Searching Flickr for', q);

  const flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: q,
    format: 'json',
    page: pageNumber++,
  }).done(showImages);



};

$(document).ready(function () {
  $('#search').on('submit', function (e) {
    totalImages = 0;
    countImages = 0;
    pageNumber = 1;


    e.preventDefault();

    const query = $('#query').val();

    searchFlickr( query );
    $('#images').empty();
  });

  $(window).on('scroll', _.throttle(function(){
    const documentHeight = $(document).height();
    const windowHeight = $(window).height();
    const scrollTop = $(window).scrollTop();

    const scrollBottom = documentHeight - (scrollTop + windowHeight);
    if(countImages <= totalImages){
      if (scrollBottom < 500){
        const query = $('#query').val();
        searchFlickr( query );
      }
    }

  }, 500));



});
