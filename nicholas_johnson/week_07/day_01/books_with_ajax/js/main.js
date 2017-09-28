const bookSearch = function() {
	let keyword = document.getElementById('keyword-cover').value
	let category = document.getElementById('selector').value
	const xhr = new XMLHttpRequest();

	xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${category}:${keyword}`)

	xhr.onreadystatechange = function() {
		if (xhr.readyState !== 4) {
			return;
		}
		const info = JSON.parse(xhr.responseText);
			console.log(info)
	}

}
