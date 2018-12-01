import React, { Component } from 'react';
import TweetColumn from './TweetColumn'

class Tweets extends Component {
  render() {
    const column = "Foo"
    return (
      <div>
        <h2>Tweets Here</h2>
        <TweetColumn column={column} />
      </div>
    )
  }
}
export default Tweets