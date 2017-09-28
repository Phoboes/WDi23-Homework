import React, {Component} from 'react';

class Clickr extends Component {
  constructor(){
    super();
    this.state = {clicks: 0};
    this._incrementClicks = this._incrementClicks.bind(this);
  } // constructor

  _incrementClicks(){
    this.setState({clicks: this.state.clicks + 1});
  }

  render(){
    return (<button onClick={this._incrementClicks}>{this.state.clicks} clicks so far</button>); //curlies are for interp
  } // render
}

export default Clickr;
