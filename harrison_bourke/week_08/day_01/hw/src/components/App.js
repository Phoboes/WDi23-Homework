import React, { Component } from 'react';
import './App.css';
import BookSearch from './BookSearch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Book Search</h1>
        <BookSearch />
      </div>
    );
  }
}

export default App;
