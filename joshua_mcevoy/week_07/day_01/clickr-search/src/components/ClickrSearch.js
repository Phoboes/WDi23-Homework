import React, {Component} from 'react';
// import jsonp from 'jsonp-es6';

class ClickrSearchForm extends Component {

  constructor(props){
    super(props);
    this.state = {query: ''};
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e){
    this.setState({query: e.target.value});
  }

  _handleSubmit(e){
    e.preventDefault();
    console.log(`submit`);
    console.log(this.state.query);
    this.props.onSubmit(this.state.query);


  }

  render () {
    return (
      <form onSubmit={this._handleSubmit}>
        <input type="search" placeholder="Search for images" onInput={this._handleChange} value={this.state.query}/>
        <input type="submit" value="Search"/>
      </form>
    )
  }
}


class ClickrSearch extends Component {

  constructor(props){
    super(props);
    this.fetchImages = this.fetchImages.bind(this);
  }

  fetchImages(q){
    if (!q){return};
    console.log('fetchImages was called with:', q);

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${q}&APPID=0a5990c668bec2e46a5952cbd13e692d`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    // const weatherParams = {
    //   method: 'flickr.photos.search',
    //   api_key: '2f5ac274ecfac5a455f38745704ad084',
    //   text: q,
    //   format: 'json',
    //   per_page: 500
    // };

  }

  render(){
    return(
      <div>
        <h2>Search stuff</h2>
        <ClickrSearchForm onSubmit={this.fetchImages} />
      </div>
    )
  }
}

export default ClickrSearch;
