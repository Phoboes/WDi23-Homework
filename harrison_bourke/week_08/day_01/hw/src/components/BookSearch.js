import React, { Component } from 'react';

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {query: ''};
    this._handleChange = this._handleChange.bind(this);

  }

  _handleChange(e) {

    this.setState({query: e.target.value});
    console.log(this.state);

  }


  render() {
    return (
      <form>
        <input type="search" placeholder="The Illiad" onInput={this._handleChange} value={this.state.query}/>
        <input type="submit" value="Search"/>
      </form>
    );
  }
}

export default BookSearch;
