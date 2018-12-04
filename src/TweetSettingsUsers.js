import React, { Component } from 'react'
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc'
import { FormGroup, FormLabel, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { loadState, setState } from './localstorage'
import { TWITTER_USERS } from './constants'

const SortableItem = SortableElement(({value}) =>
  <ListGroupItem>{value}</ListGroupItem>
)

const SortableList = SortableContainer(({items}) => {
  return (
    <ListGroup>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ListGroup>
  )
})

export default class TweetSettingsUsers extends Component {
  state = {
    items: loadState('users', TWITTER_USERS),
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    })
    setState('users', this.state.items)
  }
  render() {
    return (
      <FormGroup>
        <Col>
          <FormLabel>Tweet user order:</FormLabel>
        </Col>
        <Col>
          <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
        </Col>
      </FormGroup>
    )
  }
}