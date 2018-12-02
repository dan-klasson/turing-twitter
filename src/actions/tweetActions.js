import axios from 'axios';
import { TWITTER_API } from '../constants'
import { FETCH_TWEETS_START, FETCH_TWEETS_SUCCESS, FETCH_TWEETS_FAIL } from '../actions/types'


export const fetchTweets = () => dispatch => {
  dispatch({ type: FETCH_TWEETS_START })
  return axios.get(`${ TWITTER_API }/statuses/user_timeline.json?count=30&screen_name=makeschool`)
    .then(response => dispatch({
      type: FETCH_TWEETS_SUCCESS,
      payload: response.data
    }))
    .catch(e => dispatch({type: FETCH_TWEETS_FAIL}))

}