import immutable from 'immutable';
import {
  REMOVE_JOB_REQUEST,
  REMOVE_JOB_SUCCESS,
  REMOVE_JOB_ERROR,
} from './action';

export const initialState = {
  putJobsheetInformation: {},
};

const init = () => {
  const initValue = immutable.fromJS({
    putJobsheetInformation: undefined,
    isLoading: undefined,
    effect: 0,
  });

  return initValue
    .set('putJobsheetInformation', {
      ...initialState,
    });
};

const putJobsheetInformationReducer = (state = init(), action) => {
  switch (action.type) {
    case REMOVE_JOB_REQUEST: {
      return state.set('isLoading', true);
    }

    case REMOVE_JOB_ERROR: {
      return state
        .set('isLoading', false)
        .update('putJobsheetInformation', putInfo => ({
          ...putInfo,
          isFailPut: true,
        }))
        .update('effect', effect => effect + 1);
    }

    case REMOVE_JOB_SUCCESS: {
      return state
        .set('isLoading', false)
        .update('putJobsheetInformation', putInfo => ({
          ...putInfo,
          isSuccessPut: true,
        }))
        .update('effect', effect => effect + 1);
    }

    default:
      return state;
  }
};

export default putJobsheetInformationReducer;
