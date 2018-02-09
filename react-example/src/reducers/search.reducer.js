import { JOKE_ACTIONS } from '../actions/joke.action'


function search(state = { query: '', }, action) {
  switch (action.type) {
    case JOKE_ACTIONS.SEARCH_SUCCEEDED: {
      return { jokes: action.jokes, query: state.query };
    }
    case JOKE_ACTIONS.SEARCH_FAILED: {
      return action.message;
    }
    default: {
      return state;
    }
  }
}

export default search;
