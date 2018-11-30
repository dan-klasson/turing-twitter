import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

const Index = () => <h2>Tweets</h2>;
const Settings = () => <h2>Settings</h2>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/settings/">Settings</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={Index} />
          <Route path="/settings/" component={Settings} />
        </div>
      </Router>     
    );
  }
}

export default App;
