import * as ACTIONS from '../action/action';

const initialState = {
  counter: 0,
};

const mapCounterReducer = {
  [ACTIONS.INCREMENT]: (state, action) => ({
    // we can't change directly results, because results from resultsReducer scope
    // we just passed and able to use value of results for computing
    // results: [...action.payload.results, state.counter + 1], counter: state.counter + 1
    // => it will changed counter store => add results array
    ...state, counter: state.counter + 1
  }),
  [ACTIONS.DECREMENT]: (state, action) => ({
    ...state, counter: state.counter - 1
  }),
  [ACTIONS.ADDITION]: (state, action) => ({
    ...state, counter: state.counter + action.payload.value
  }),
  [ACTIONS.SUBTRACTION]: (state, action) => ({
    ...state, counter: state.counter - action.payload.value
  }),
};

const counterReducer = (state = initialState, action) => {
  if (mapCounterReducer[action.type]) {
    return mapCounterReducer[action.type](state, action);
  }
  return state;
};

export default counterReducer;
