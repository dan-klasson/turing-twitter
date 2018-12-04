import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import Linkify from 'react-linkify'
import { fetchTweets } from './actions/tweetActions'
import TweetLink from './TweetLink'
import { loadState } from './localstorage';


class TweetColumn extends Component {

  componentDidMount() {
    const numberOfTweets = loadState('count', 30)
    console.log('numbers', numberOfTweets)
    this.props.fetchTweets(this.props.column, numberOfTweets)
  }

  render() {
    const css = loadState('theme', 'blue')
    const { tweets, column } = this.props
    if (this.props.tweets.items[column] === undefined) { return null }

    const tweetItems = tweets.items[column].map(tweet => (
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
        <div className={ `box border-${ css }` }>
          <div className={ `box-header background-${ css }` }>
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
  tweets: state.tweets
})

const mapDispatchToProps = dispatch => ({
  fetchTweets: (column, count) => dispatch(fetchTweets(column, count))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)( TweetColumn )
