import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'
import Tweets from './components/Tweets.js'
import TweetSettings from './components/TweetSettings'
import './App.css';
import { loadState } from './localstorage';

class App extends Component {

  render() {
    const css = loadState('theme', 'blue')
    return (
      <Provider store={ store }>
        <Router>
          <div>
            <div className={ `header background-${ css }` }>
              Frontend Developer Challenge
            </div>
            <Route path="/" exact component={ Tweets } />
            <Route path="/settings/" component={ TweetSettings } />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
