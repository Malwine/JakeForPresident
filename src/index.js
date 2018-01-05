import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import Results from './components/results'
import myReducer from './reducers';

// create the store
let store = createStore(myReducer);

function render() {
  ReactDOM.render(
    <div className="container">
      <App store={store}/>
      <hr/>
      <Results store={store}/>
    </div>
    ,
    document.getElementById('root')
  );
}

store.subscribe(render); //subscribe the render method to always fire when an action is dispatched

render();  //render the initial state
