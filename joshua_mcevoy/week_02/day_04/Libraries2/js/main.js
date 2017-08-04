// Create an array of every link on the page using document.querySelectorAll(cssSelector)
//
// Iterate through the array. In each iteration of the loop:
//
// Find the current href using element.getAttribute(name), and store into a variable
// Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
// Create an IMG element using document.createElement(tagName)
// Set the "src" of the IMG element using element.setAttribute(name, value)
// Append the IMG to the link using element.appendChild(element)


const thumbnailify = function (index, element){
  const href = $(element).attr('href');
  const thumbnailURL = youtube.generateThumbnailUrl(href);
  let $img = $('<img>').attr('src', thumbnailURL);
  $(element).append($img);

  $(element).on('click', function(event){
    event.preventDefault(); //Disabled link

    const embedURL = youtube.generateEmbedUrl(href);
    console.log(embedURL);
    const embedHTML = `<iframe width="560" height="315" src="${embedURL}" frameborder="0" allowfullscreen></iframe>`;

    const $player = $('#player');

    $player.hide().html(embedHTML).fadeIn(300);
  });
}



$('a').each(thumbnailify);
