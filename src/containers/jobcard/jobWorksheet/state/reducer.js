import immutable from 'immutable';
import {
  CLEAR_JOB_WORKSHEET_STATE, CREATE_JOB_WORKSHEET_REQUEST,
} from './action';

const initialState = {
  jobWorksheet: {},
};

const init = () => {
  const initValue = immutable.fromJS({
    jobWorksheet: undefined,
  });

  return initValue
    .set('jobWorksheet', {
      ...initialState,
    });
};

const jobWorksheetReducer = (state = init(), action) => {
  switch (action.type) {
    case CREATE_JOB_WORKSHEET_REQUEST: {
      const { values } = action.payload;
      return state.set('jobWorksheet', {
        ...values,
      });
    }

    case CLEAR_JOB_WORKSHEET_STATE: {
      return state.set('jobWorksheet', { ...initialState });
    }

    default:
      return state;
  }
};

export default jobWorksheetReducer;
