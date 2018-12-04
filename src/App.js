import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'
import Tweets from './Tweets.js'
import './App.css';


const Settings = () => <h2>Settings</h2>;

class App extends Component {

  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div>
            <div className="header">
              Frontend Developer Challenge
            </div>
            <div>
            </div>
              <nav>
                <ul>
                  <li>
                    <div>
                    </div>
                    <div>
                    </div>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/settings/">Settings</Link>
                  </li>
                </ul>
              </nav>
            <Route path="/" exact component={Tweets} />
            <Route path="/settings/" component={Settings} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
