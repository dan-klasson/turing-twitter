
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { FETCH_TWEETS_START, FETCH_TWEETS_SUCCESS, FETCH_TWEETS_FAIL } from '../actions/types'
import { fetchTweets } from '../actions/tweetActions'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Tweet Action', () => {

  const store = mockStore()

  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  it('should fetch tweets on success', () => {
    const tweets = [
      {id: 1, text: "Foo tweet"},
      {id: 2, text: "Baz tweet"}
    ]
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: tweets,
      })
    })

    const expectedActions = [
      { type: FETCH_TWEETS_START },
      { type: FETCH_TWEETS_SUCCESS, payload: tweets},
    ]

    return store.dispatch(fetchTweets()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should return error on fail', () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
      })
    })

    const expectedActions = [
      { type: FETCH_TWEETS_START },
      { type: FETCH_TWEETS_FAIL },
    ]

    const store = mockStore({ posts: {} })

    return store.dispatch(fetchTweets()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})