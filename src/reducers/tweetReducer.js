import { FETCH_TWEETS_SUCCESS } from '../actions/types'

const initialState = { items: {} }

export default function tweetReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TWEETS_SUCCESS:
      return {
        ...state,
        items: {
          ...state.items,
          [action.data[0].user.screen_name]: action.data
        }
      }
    default:
      return state;
  }
}