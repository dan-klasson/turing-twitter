import React, { Component } from 'react';
import TweetColumn from './TweetColumn'
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoMdSettings } from "react-icons/io"
import { GoChevronLeft } from "react-icons/go"
//<GoChevronLeft />

class Tweets extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col lg={12} className="link">
            <IoMdSettings className="link-icon" />
            <Link to="/settings/">Settings</Link>
          </Col>
        </Row>
        <Row>
          <TweetColumn column="ycombinator" namespace="ycombinator" />
          <TweetColumn column="newsycombinator" namespace="newsycombinator" />
          <TweetColumn column="MakeSchool" namespace="MakeSchool" />
        </Row>
      </div>
    )
  }
}
export default Tweets