import tweetReducer from '../reducers/tweetReducer'
import { FETCH_TWEETS, FETCH_TWEETS_SUCCESS, FETCH_TWEETS_FAIL } from '../actions/types'

describe('Tweet Reducer', () => {

  it('should return the initial state', () => {
    expect(tweetReducer(undefined, {type: "unexpected"})).toEqual({
      items: {},
    })
  })

  it('should handle FETCH_TWEETS_SUCCESS', () => {
    expect(tweetReducer([], {
      type: FETCH_TWEETS_SUCCESS,
      data: [{
        id: 1,
        user: {screen_name: "Foo"},
        text: "Fetch data"
      }]
    })).toEqual({
      "items": {"Foo": [{"id": 1, "text": "Fetch data", "user": {"screen_name": "Foo"}}]}
    })
  })

  it('should handle FETCH_TWEETS_FAILURE', () => {
    expect(tweetReducer([], {
      type: FETCH_TWEETS_FAIL,
      data: "Fetch data"
    })).toEqual([])
  })

})