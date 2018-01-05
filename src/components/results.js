import React, { Component } from 'react';

class Results extends Component {

    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    voteCharacterInPercent(character) {
      let stateLemongrab = this.store.getState().lemongrab;
      let stateFinn = this.store.getState().finn;
      let stateJake = this.store.getState().jake;
      let characterState = 0;

      for(var key in this.store.getState()) {
        if (key === character) {
          characterState = (this.store.getState())[key];
        }
      }

      if (characterState){
          return (characterState / (stateLemongrab + stateFinn + stateJake)  * 100)
      }
      else {
          return 0;
      }
    }

    votesCharacterInPercentStyle(character) {
      return {
          width: this.voteCharacterInPercent(character) + '%'
      }
    }

    render() {
        return (
            <div>
                <div>
                    <span className="label label-danger">Lemongrab: {this.voteCharacterInPercent('lemongrab').toFixed(2) + '%'}</span>
                    <div className="progress progress-striped active">
                        <div className="progress-bar progress-bar-danger" style={ this.votesCharacterInPercentStyle('lemongrab')}>
                        </div>
                    </div>
                </div>

                <div>
                    <span className="label label-danger">Finn: {this.voteCharacterInPercent('finn').toFixed(2) + '%'}</span>
                    <div className="progress progress-striped active">
                        <div className="progress-bar progress-bar-danger" style={ this.votesCharacterInPercentStyle('finn')}>
                        </div>
                    </div>
                </div>

                <div>
                    <span className="label label-danger">Jake: {this.voteCharacterInPercent('jake').toFixed(2) + '%'}</span>
                    <div className="progress progress-striped active">
                        <div className="progress-bar progress-bar-danger" style={ this.votesCharacterInPercentStyle('jake')}>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}

export default Results;
