import React, { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component {

    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    voteCharacterInPercent(character) {
      const { lemongrab, finn, jake, votes } = this.props
      let characterState = 0;

      for(var key in votes) {

        if (key === character) {
          characterState = votes[key];
        }
      }

      if (characterState){
          return (characterState / (lemongrab + finn + jake)  * 100)
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

const mapStateToProps = state => {
  return {
    lemongrab: state.voteReducer.lemongrab,
    finn: state.voteReducer.finn,
    jake: state.voteReducer.jake,
    votes: state.voteReducer
  }
}

const ConnectedResults = connect( mapStateToProps )(Results)

export default ConnectedResults;
