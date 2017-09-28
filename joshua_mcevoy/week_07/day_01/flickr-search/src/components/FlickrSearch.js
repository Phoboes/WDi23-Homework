import React, {Component} from 'react';
import jsonp from 'jsonp-es6';

class FlickrSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {query: ''};
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e){
    this.setState({query: e.target.value});
  }

  _handleSubmit(e){
    e.preventDefault(); //disabling the default of the form. Doesn't go to the server
    this.props.onSubmit(this.state.query);
  }

  render () {
    return (
      <form onSubmit={this._handleSubmit}>
        <input type="search" placeholder="Butterflies" onInput={ this._handleChange } value={ this.state.query }/>
        <input type="submit" value="Search"/>
      </form>
    );
  };
}

// class FlickrSearchImage extends Component {
//   render(){
//     return (<img src={this.props.url} width="150" height="150" alt={this.props.url}/>);
//
//   }
// }

//functional component (if you don't need state or callbacks)
function FlickrSearchImage(props){
  return (
    <img src={props.url} width="150" height="150" alt={props.url}/>
  );
}

class FlickrSearchGallery extends Component {
  render () {
    console.log(this.props.images);
    return (
      <div>
        {this.props.images.map((imageURL) => <FlickrSearchImage url={imageURL} key={imageURL}/>)}
      </div>
    );
  }
}

class FlickrSearch extends Component {
  constructor(props){
    super(props);
    this.state = {images: []};
    this.fetchImages = this.fetchImages.bind(this);
  }

  fetchImages(q){
    console.log('fetchImages was called with:', q);

    if (!q){return}; //won't search is no query

    const flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';
    const flickrParams = {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      text: q,
      format: 'json',
      per_page: 500
    };

    const generateURL = function (photo) {
      return [
        'http://farm',
        photo.farm,
        '.static.flickr.com/',
        photo.server,
        '/',
        photo.id,
        '_',
        photo.secret,
        '_q.jpg' // Change the q for different sizes
      ].join('');
    };


    //if you weren't using JSONP, use Axios for you AJAX request.
    jsonp(flickrURL, flickrParams, {callback: 'jsoncallback'}).then(function (results){
      const images = results.photos.photo.map(generateURL);
      this.setState({images: images}); //store the images in the components state.
    }.bind(this));
  }

  render () {
    return (
      <div>
        <h2>Image Search</h2>
        <FlickrSearchForm onSubmit={this.fetchImages} />
        <FlickrSearchGallery images={this.state.images} />
      </div>
    );
  };
}

export default FlickrSearch;
