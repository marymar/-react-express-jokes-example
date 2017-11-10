const INITIAL_STATE = [];

function foos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FOO_FETCH_SUCCEEDED': {
      return action.foos.map(foo => {
        return { id: foo._id, ...foo }
      });
    }
    case 'FOO_FAILED': {
      return action.message;
    }
    default: {
      return state;
    }
  }
}

export default foos;
