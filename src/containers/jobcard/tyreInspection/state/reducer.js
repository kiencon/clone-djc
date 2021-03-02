import immutable from 'immutable';
import {
  CLEAR_TYRE_INPSECTION_STATE,
  CREATE_TYRE_INSPECTION_REQUEST,
} from './action';

const initialState = {
  tyreInspection: {},
};

const init = () => {
  const initValue = immutable.fromJS({
    tyreInspection: undefined,
  });

  return initValue
    .set('tyreInspection', {
      ...initialState,
    });
};

const tyreInspectionReducer = (state = init(), action) => {
  switch (action.type) {
    case CREATE_TYRE_INSPECTION_REQUEST: {
      const { values } = action.payload;
      return state.set('tyreInspection', {
        ...values,
      });
    }

    case CLEAR_TYRE_INPSECTION_STATE: {
      return state.set('tyreInspection', { ...initialState });
    }

    default:
      return state;
  }
};

export default tyreInspectionReducer;
