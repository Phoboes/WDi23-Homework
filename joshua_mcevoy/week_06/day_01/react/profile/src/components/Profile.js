import React, {Component} from 'react';

class Profile extends Component{

  constructor(props) {
    super(props);
    this.state = {height: 100};
    this._zoomIn = this._zoomIn.bind(this);
    this._zoomOut = this._zoomOut.bind(this);
  }

  _zoomIn(){
    this.setState({height: this.state.height + 10});
  }
  _zoomOut(){
    this.setState({height: this.state.height - 10});
  }

  render(){
    const {name, age, bio, pic} = this.props;
    return (
      <div className="profile">
        <h1>{name}</h1>
        <h2>{age}</h2>
        <p>{bio}</p>
        <img src={pic} alt={name} height={this.state.height} />
        <button onClick={this._zoomIn}>+</button>
        <button onClick={this._zoomOut}>-</button>
        <hr />
      </div>
    );
  }
}

export default Profile;
