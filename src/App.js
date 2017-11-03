import React, { Component } from 'react';
import { voteLemongrab, voteFinn, voteJake } from './actions';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  handleVoteLemongrab = () => {
    this.store.dispatch(voteLemongrab())
  }

  handleVoteFinn = () => {
    this.store.dispatch(voteFinn())
  }

  handleVoteJake = () => {
    this.store.dispatch(voteJake())
  }

  render() {
    return (
      <div>
        <div className="jumbotron" style={{'textAlign': 'center'}}>
          <h1>Click on the images to vote your fav character!</h1>

          <div className="row">
            <div className="col-4">
              <img src="1.png" height="200" alt="Angular" onClick={this.handleVoteLemongrab}></img>
            </div>
            
            <div className="col-4">
              <img src="2.png" height="200" alt="React" onClick={this.handleVoteFinn}></img>
            </div>

            <div className="col-4">
              <img src="3.png" height="200" alt="Vue" onClick={this.handleVoteJake}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
