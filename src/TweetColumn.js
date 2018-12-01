import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchTweets } from './actions/tweetActions'

class TweetColumn extends Component {

    componentWillMount() {
        this.props.fetchTweets()
    }

    render() {
        const tweetItems = this.props.tweets.map(tweet => (
            <div key={ tweet.id }>
                <p>{ tweet.text }</p>
            </div>
        ))
        return (
            <div>
                <h3>Column { this.props.column }</h3>
                { tweetItems }
            </div>
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

export default connect(mapStateToProps, { fetchTweets })(TweetColumn )