'use strict';

var state = {
	currentPage: 1,
	fired: false,
	lastPage: false,
	today: "Thursday"
	// query:
};

var showImages = function showImages(results) {
	var generateURL = function generateURL(photo) {
		return ['http://farm', photo.farm, '.static.flickr.com/', photo.server, '/', photo.id, '_', photo.secret, '_q.jpg' // Change the q for different sizes
		].join('');
	};

	console.log(results);

	if (results.photos.page === results.photos.pages) {
		state.lastPage = true;
	}

	_(results.photos.photo).each(function (p) {
		var imageURL = generateURL(p);
		var $img = $('<img>', { src: imageURL });
		var $a = $('<a></a>', { href: imageURL, target: "_blank" });
		$a.html($img);
		$a.appendTo('#images');
	});
};

var searchFlickr = function searchFlickr(q) {
	if (state.lastPage) {
		return;
	}

	console.log('searching for', q, '...');

	var flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';

	$.getJSON(flickrURL, {
		method: 'flickr.photos.search',
		api_key: '2f5ac274ecfac5a455f38745704ad084',
		text: q,
		page: state.currentPage,
		format: 'json'
	}).done(showImages);
};

$(document).ready(function () {
	$('#search').on('submit', function (e) {
		$('#images').empty();
		state.currentPage = 1;
		state.lastPage = false;
		e.preventDefault();
		var query = $('#query').val();
		searchFlickr(query);
		state.currentPage++;
		console.log(state.currentPage);
	}); // event listener

	$(window).on('scroll', function () {
		var documentHeight = $(document).height();
		var windowHeight = $(window).height();
		var scrollTop = $(window).scrollTop();
		var scrollBottom = documentHeight - (scrollTop + windowHeight);
		console.log(scrollBottom);
		if (scrollBottom <= 100 && state.fired === false) {
			var query = $('#query').val();
			searchFlickr(query);
			state.currentPage++;
			console.log(state.currentPage);
			state.fired = true;
		} else if (scrollBottom > 100 && state.fired === true) {
			state.fired = false;
		}
	});
}); // doc.ready