import tweetReducer from '../reducers/tweetReducer'
import { FETCH_TWEETS, FETCH_TWEETS_SUCCESS, FETCH_TWEETS_FAIL } from '../actions/types'

describe('Tweet Reducer', () => {
  it('should return the initial state', () => {
    expect(tweetReducer(undefined, {type: "unexpected"})).toEqual({
      items: [],
      item: {}
    })
  })
  
  it('should handle FETCH_TWEETS_SUCCESS', () => {
    expect(tweetReducer([], {
      type: FETCH_TWEETS_SUCCESS,
      data: "Fetch data"
    })).toEqual({
      items: "Fetch data"
    })
  })

  it('should handle FETCH_TWEETS_FAILURE', () => {
    expect(tweetReducer([], {
      type: FETCH_TWEETS_FAIL,
      data: "Fetch data"
    })).toEqual([])
  })

})