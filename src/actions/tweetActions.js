import axios from 'axios';
import { TWITTER_API } from '../constants'
import { FETCH_TWEETS_START, FETCH_TWEETS_SUCCESS, FETCH_TWEETS_FAIL } from '../actions/types'


export const fetchTweets = (column, count) => dispatch => {
  dispatch({ type: FETCH_TWEETS_START })
  console.log('count', count)
  const url = `${ TWITTER_API }/statuses/user_timeline.json?count=${ count }&screen_name=${ column }`
  console.log(url)
  return axios.get(url)
    .then(response => dispatch({
      type: FETCH_TWEETS_SUCCESS,
      data: response.data
    }))
    .then(response => console.log(response.data))
    .catch(e => dispatch({type: FETCH_TWEETS_FAIL}))

}
