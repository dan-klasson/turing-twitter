import { FETCH_TWEETS_START, FETCH_TWEETS_SUCCESS, FETCH_TWEETS_FAIL } from '../actions/types'

const initialState = { items: {} }

export default function tweetReducer(state = initialState, action) {
  console.log('action', action)
  switch (action.type) {
    case FETCH_TWEETS_SUCCESS:
      console.log('MATCH', action.data[0].user.screen_name)
      return {
        ...state,
        //items: action.data
        //[action.data[0].user.screen_name]: action.data
        items: {
          ...state.items,
          [action.data[0].user.screen_name]: action.data
        }
      }
    default:
      return state;
  }
}