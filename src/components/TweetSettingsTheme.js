
import React, { Component } from 'react'
import { FormGroup, FormLabel, Col } from 'react-bootstrap'
import { loadState, setState } from '../localstorage'

export default class TweetSettingsTheme extends Component {

  setTheme = (e) => {
    setState('theme', e.target.value)
    window.location.reload()
  }

  render() {
    const themes = ["Blue", "Green", "Gray"]
    const state = loadState('theme')
    const select = themes.map(theme => (
      <option
        key={ theme }
        value={ theme.toLocaleLowerCase() }
      >{ theme }</option>
    ))
    return (
      <FormGroup>
        <Col>
          <FormLabel>Skin color:</FormLabel>
        </Col>
        <Col>
          <select value={ state } onChange={ this.setTheme } className="input-group custom-select">
            { select }
          </select>
        </Col>
      </FormGroup>
    )
  }
}