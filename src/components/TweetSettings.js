import React, { Component } from 'react'
import { Row, Col, Form } from "react-bootstrap"
import { Link } from "react-router-dom";
import { GoChevronLeft } from "react-icons/go"
import 'bootstrap/dist/css/bootstrap.min.css'
import TweetSettingsNumber from './TweetSettingsNumber'
import TweetSettingsTheme from './TweetSettingsTheme'
import TweetSettingsUsers from './TweetSettingsUsers'
import TweetSettingsDate from './TweetSettingsDate'
import { loadState } from '../localstorage';


export default class TweetSettings extends Component {

  render() {
    const css = loadState('theme', 'blue')
    return (
      <div>
        <Row>
          <Col lg={12} className="link">
            <GoChevronLeft className="link-icon" />
            <Link to="/">Back to tweets</Link>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className={ `box border-${ css }` }>
              <div className={ `box-header background-${ css }` }>
                Settings
              </div>
              <div className="box-content">
                <div className="settings-box">
                  <Form>
                    <TweetSettingsDate dateType="from" />
                    <TweetSettingsDate dateType="to" />
                    <TweetSettingsUsers />
                    <TweetSettingsNumber />
                    <TweetSettingsTheme />
                  </Form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
