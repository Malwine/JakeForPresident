import React, { Component } from 'react';

class Results extends Component {

    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    votesLemongrabInPercent(){
        let stateLemongrab = this.store.getState().lemongrab;
        let stateFinn = this.store.getState().finn;
        let stateJake = this.store.getState().jake;

        if (stateLemongrab){
            return (stateLemongrab / (stateLemongrab + stateFinn + stateJake)  * 100)
        }
        else {
            return 0;
        }
    }

    votesFinnInPercent(){
        let stateLemongrab = this.store.getState().lemongrab;
        let stateFinn = this.store.getState().finn;
        let stateJake = this.store.getState().jake;

        if (stateFinn){
            return (stateFinn / (stateLemongrab + stateFinn + stateJake) * 100)
        }
        else {
            return 0;
        }
    }

    votesJakeInPercent(){
        let stateLemongrab = this.store.getState().lemongrab;
        let stateFinn = this.store.getState().finn;
        let stateJake = this.store.getState().jake;

        if (stateJake){
            return (stateJake / (stateLemongrab + stateFinn + stateJake) * 100)
        }
        else {
            return 0;
        }
    }

    votesLemongrabInPercentStyle() {
        return {
            width: this.votesLemongrabInPercent() + '%'
        }
    }

    votesFinnInPercentStyle() {
        return {
            width: this.votesFinnInPercent() + '%'
        }
    }

    votesJakeInPercentStyle() {
        return {
            width: this.votesJakeInPercent() + '%'
        }
    }

    render() {
        return (
            <div>
                <div>
                    <span className="label label-danger">Lemongrab: {this.votesLemongrabInPercent().toFixed(2) + '%'}</span>
                    <div className="progress progress-striped active">
                        <div className="progress-bar progress-bar-danger" style={ this.votesLemongrabInPercentStyle()}>
                        </div>        
                    </div>    
                </div>

                <div>
                    <span className="label label-danger">Finn: {this.votesFinnInPercent().toFixed(2) + '%'}</span>
                    <div className="progress progress-striped active">
                        <div className="progress-bar progress-bar-danger" style={ this.votesFinnInPercentStyle()}>
                        </div>        
                    </div>
                </div>

                <div> 
                    <span className="label label-danger">Jake: {this.votesJakeInPercent().toFixed(2) + '%'}</span>
                    <div className="progress progress-striped active">
                        <div className="progress-bar progress-bar-danger" style={ this.votesJakeInPercentStyle()}>
                        </div>        
                    </div>
                </div>

                

                <hr/>
            </div>
        )
    }
}

export default Results;