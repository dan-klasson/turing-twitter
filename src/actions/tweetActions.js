import { FETCH_TWEETS } from './types'

export const fetchTweets = () => dispatch => {
    fetch("http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=makeschool")
    .then(res => res.json())
    .then(tweets => dispatch({
        type: FETCH_TWEETS,
        data: tweets
    }))
}