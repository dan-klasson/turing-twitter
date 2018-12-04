import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import Linkify from 'react-linkify'
import { fetchTweets } from './actions/tweetActions'
import TweetLink from './TweetLink'


class TweetColumn extends Component {

  componentDidMount() {
    this.props.fetchTweets(this.props.column)
  }

  render() {
    console.log(this.state)
    const tweetItems = this.props.tweets.map(tweet => (
      <div key={ tweet.id }>
        <div className="box-text">
          <Linkify>{ tweet.text }</Linkify>
        </div>
        <TweetLink tweet={ tweet } />
        <div className="box-date">
          <Moment fromNow parse="ddd MMM DD HH:mm:ss ZZ YYYY">{ tweet.created_at }</Moment>
        </div>
      </div>
    ))
    return (
      <Col lg={4} sm={12}>
        <div className="box">
          <div className="box-header">
            @{ this.props.column }
          </div>
          <div className="box-content">
            { tweetItems }
          </div>
        </div>
      </Col>
    )
  }
}

TweetColumn.propTypes = {
  fetchTweets: PropTypes.func.isRequired,
  tweets: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  tweets: state.tweets.items
})

export default connect(mapStateToProps, { fetchTweets })( TweetColumn )