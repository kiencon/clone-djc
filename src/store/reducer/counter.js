import * as ACTIONS from '../action';

const initialState = {
  counter: 0,
};

const mapCounterReducer = {
  [ACTIONS.INCREMENT]: (state, action) => ({
    // we can't change directly results, because results from resultsReducer scope
    // we just passed and able to use value of results for computing
    // results: [...action.payload.results, state.counter + 1], counter: state.counter + 1
    ...state, counter: state.counter + 1
  }),
  [ACTIONS.DECREMENT]: (state, action) => ({
    results: [...action.payload.results, state.counter - 1], counter: state.counter - 1
  }),
  [ACTIONS.ADDITION]: (state, action) => ({
    results: [...action.payload.results, state.counter + action.payload.value], 
    counter: state.counter + action.payload.value
  }),
  [ACTIONS.SUBTRACTION]: (state, action) => ({
    results: [...action.payload.results, state.counter - action.payload.value],
    counter: state.counter - action.payload.value
  }),
};

const counterReducer = (state = initialState, action) => {
  if (mapCounterReducer[action.type]) {
    return mapCounterReducer[action.type](state, action);
  }
  return state;
};

export default counterReducer;
