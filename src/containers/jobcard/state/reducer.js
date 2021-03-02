import immutable from 'immutable';
import {
  FORM_TYPE,
} from '../../../config/const';
import {
  EDIT_JOB_REQUEST,
  RESET_JOBCARD_FORM,
  REVIEW_JOB_REQUEST,
} from './action';

const initialState = () => ({
  formType: FORM_TYPE.ADD,
});

const init = () => {
  const initValue = immutable.fromJS({
    jobCardInformation: undefined,
  });

  return initValue.set('jobCardInformation', {
    ...initialState,
  });
};

const jobCardFormInformationReducer = (state = init(), action) => {
  switch (action.type) {
    case EDIT_JOB_REQUEST: {
      console.log(action.payload);
      return state.set('jobCardInformation', {
        formType: FORM_TYPE.EDIT,
        identifiedJob: action.payload.values,
      });
    }

    case RESET_JOBCARD_FORM: {
      return state.set('jobCardInformation', {
        formType: FORM_TYPE.ADD,
      });
    }

    case REVIEW_JOB_REQUEST: {
      return state.set('jobCardInformation', {
        formType: FORM_TYPE.REVIEW,
      });
    }

    default:
      return state;
  }
};

export default jobCardFormInformationReducer;
