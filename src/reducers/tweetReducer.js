import { FETCH_TWEETS } from '../actions/types'

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_TWEETS:
            return {
                ...state,
                items: action.data
            }
        default:
            return state
    }
}