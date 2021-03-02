import immutable from 'immutable';
import {
  DELETE_STATUS,
} from '../../../config/const';
import {
  CLEAR_JOB_STATE, REMOVE_JOB_ERROR,
  REMOVE_JOB_REQUEST,
  REMOVE_JOB_SUCCESS,
} from './action';

export const initialState = {
  removeJobsheetInformation: {},
};

const init = () => {
  const initValue = immutable.fromJS({
    removeJobsheetInformation: undefined,
    isLoading: undefined,
    effect: 0,
  });

  return initValue
    .set('removeJobsheetInformation', {
      ...initialState,
    });
};

const removeJobsheetInformationReducer = (state = init(), action) => {
  switch (action.type) {
    case REMOVE_JOB_REQUEST: {
      return state.set('isLoading', true);
    }

    case REMOVE_JOB_ERROR: {
      return state
        .set('isLoading', false)
        .update('removeJobsheetInformation', putInfo => ({
          ...putInfo,
          status: DELETE_STATUS.FAIL,
        }))
        .update('effect', effect => effect + 1);
    }

    case REMOVE_JOB_SUCCESS: {
      return state
        .set('isLoading', false)
        .update('removeJobsheetInformation', putInfo => ({
          ...putInfo,
          status: DELETE_STATUS.SUCCESS,
        }))
        .update('effect', effect => effect + 1);
    }

    case CLEAR_JOB_STATE: {
      return state.set('removeJobsheetInformation', { ...initialState }).set('isLoading', false).set('effect', 0);
    }

    default:
      return state;
  }
};

export default removeJobsheetInformationReducer;
