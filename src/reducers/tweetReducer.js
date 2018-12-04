import { FETCH_TWEETS_START, FETCH_TWEETS_SUCCESS, FETCH_TWEETS_FAIL } from '../actions/types'

const initialState = {
  items: [],
  item: {}
}

export default function tweetReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TWEETS_SUCCESS:
      return {
        ...state,
        items: action.data
      }
    default:
      return state;
  }
}