import React, { Component } from 'react';

class BookSearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {query: ''};
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);

  }

  _handleChange(e) {
    this.setState({query: e.target.value});
    console.log(this.state);
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  }


  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <input type="search" placeholder="The Illiad" onInput={this._handleChange} value={this.state.query}/>
        <input type="submit" value="Search" />
      </form>
    );
  }

}

export default BookSearchForm;
