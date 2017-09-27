// MEMORIZE THIS OK
const fetchArticle = function() {
	const keyword = document.getElementById('keyword').value
	$.ajax(`https://content.guardianapis.com/search?order-by=newest&show-fields=all&page-size=200&api-key=63855b70-ac15-40d1-a787-e481ad8c0843`).done(function(info) {
		const article = info.responseJSON.response.results[0].webUrl
		$("<a>").attr('href', article).appendTo('main');
	}).done(function(i) {
		console.log(i)
	}).fail(function() {
		alert('there was an error');
	});
};

$(document).ready(function() {
	$('#search').on('click', fetchArticle);
});
