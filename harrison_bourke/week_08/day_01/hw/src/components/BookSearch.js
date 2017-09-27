import React, { Component } from 'react';
import BookSearchForm from './BookSearchForm'
import jsonp from 'jsonp-es6';


class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { links: [] };
    this.fetchLinks = this.fetchLinks.bind(this);
  }

  fetchLinks(q) {
    console.log("Searching for books with the query", q);

    if (!q) { return; }

    const url = `https://www.googleapis.com/books/v1/volumes?q=${q}`

    jsonp(url, {callback: 'jsoncallback'}).then(function(results) {
      let images = [];
      let length = results.items.length  < 100 ? results.items.length : 100;
      console.log(length);
      for (let i = 0; i < length; i++) {
        images.push(results.items[i].volumeInfo.imageLinks.thumbnail);
      }
      console.log(images);
    })

  }

  render() {
    return (
      <BookSearchForm onSubmit={this.fetchLinks}/>
    );
  }
}

export default BookSearch;
