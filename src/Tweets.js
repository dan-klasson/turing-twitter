import React, { Component } from 'react';
import TweetColumn from './TweetColumn'
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoMdSettings } from "react-icons/io"
import { loadState } from './localstorage'
import { TWITTER_USERS } from './constants'

class Tweets extends Component {
  render() {
    const tweetUsers = loadState('users', TWITTER_USERS)
    const tweetColumns = tweetUsers.map(user => (
      <TweetColumn column={ user } />
    ))
    return (
      <div>
        <Row>
          <Col lg={12} className="link">
            <IoMdSettings className="link-icon" />
            <Link to="/settings/">Settings</Link>
          </Col>
        </Row>
        <Row>
          { tweetColumns }
        </Row>
      </div>
    )
  }
}
export default Tweets