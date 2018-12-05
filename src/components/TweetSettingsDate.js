import React, { Component } from 'react'
import { FormGroup, FormLabel, Col } from 'react-bootstrap'
import DateTimePicker from 'react-datetime-picker'
import { loadState, setState } from '../localstorage'

export default class TweetSettingsDate extends Component {
  constructor(props) {
    super(props)
    let date
    const state = loadState(`date_${ props.dateType }`)
    if(!state) {
      date = null
    } else {
      date = new Date(Number(state))
    }
    this.state = { date }
  }
  setDate = date => {
    if(date) {
      this.setState({ date })
      setState(`date_${ this.props.dateType }`, date.getTime())
    } else {
      setState(`date_${ this.props.dateType }`, null)
      this.setState({ date: null })
    }
  }

  render() {
    return (
      <FormGroup>
        <Col>
          <FormLabel>Date { this.props.dateType }:</FormLabel>
        </Col>
        <Col>
          <DateTimePicker
            id={ `date_${ this.props.dateType }` }
            onChange={this.setDate}
            value={this.state.date}
          />
        </Col>
      </FormGroup>
    )
  }
}
