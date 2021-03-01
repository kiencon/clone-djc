import immutable from 'immutable';
import {
  DELETE_STATUS,
} from '../../../config/const';
import {
  REMOVE_JOB_ERROR,
  REMOVE_JOB_REQUEST,
  REMOVE_JOB_SUCCESS,
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
          status: DELETE_STATUS.FAIL,
        }))
        .update('effect', effect => effect + 1);
    }

    case REMOVE_JOB_SUCCESS: {
      return state
        .set('isLoading', false)
        .update('putJobsheetInformation', putInfo => ({
          ...putInfo,
          status: DELETE_STATUS.SUCCESS,
        }))
        .update('effect', effect => effect + 1);
    }

    default:
      return state;
  }
};

export default putJobsheetInformationReducer;
