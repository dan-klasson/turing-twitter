import React, { Component } from 'react'
import { FormGroup, FormLabel, Col } from 'react-bootstrap'
import { loadState, setState } from './localstorage'

class TweetSettingsNumber extends Component {

  setNumber = (e) => {
    setState('count', e.target.value)
    this.forceUpdate()
  }

  render() {
    const numbers = [30, 20, 10]
    const state = loadState('count')
    console.log(state, '->')
    const select = numbers.map(number => (
      <option key={ number } value={ number }>{ number }</option>
    ))
    return (
      <FormGroup>
        <Col>
          <FormLabel>Number of tweets:</FormLabel>
        </Col>
        <Col>
          <select onChange={ this.setNumber } value={ state } className="input-group custom-select">
            { select }
          </select>
        </Col>
      </FormGroup>
    )
  }
}
export default TweetSettingsNumber