import * as ACTIONS from '../action/action';

const initialState = {
  results: [0],
};

const mapResultsReducer = {
  [ACTIONS.RESTORED_RESULT]: (state, action) => ({
    ...state, results: state.results.concat(action.payload.counter)
  }),
};

const resultsReducer = (state = initialState, action) => {
  if (mapResultsReducer[action.type]) {
    return mapResultsReducer[action.type](state, action);
  }
  return state;
};

export default resultsReducer;
