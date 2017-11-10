import { JOKE_ACTIONS } from '../actions/joke.action'


function joke(state = {joke: 'loading...'}, action) {
  switch (action.type) {
    case JOKE_ACTIONS.FETCH_SUCCEEDED: {
      return action.jokes
    }
    case JOKE_ACTIONS.JOKE_FETCH_RANDOM_SUCCEEDED: {
      return {joke : action.joke};
    }
    case JOKE_ACTIONS.FETCH_FAILED: {
      return action.message;
    }
    default: {
      return state;
    }
  }
}

export default joke;
