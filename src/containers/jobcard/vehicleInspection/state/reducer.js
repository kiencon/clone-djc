import immutable from 'immutable';
import {
  CLEAR_VEHICLE_INPSECTION_STATE,
  CREATE_VEHICLE_INSPECTION_REQUEST,
} from './action';

const initialState = {
  vehicleInspection: {},
};

const init = () => {
  const initValue = immutable.fromJS({
    vehicleInspection: undefined,
  });

  return initValue
    .set('vehicleInspection', {
      ...initialState,
    });
};

const vehicleInspectionReducer = (state = init(), action) => {
  switch (action.type) {
    case CREATE_VEHICLE_INSPECTION_REQUEST: {
      const { values } = action.payload;
      return state.set('vehicleInspection', {
        ...values,
      });
    }

    case CLEAR_VEHICLE_INPSECTION_STATE: {
      return state.set('vehicleInspection', { ...initialState });
    }

    default:
      return state;
  }
};

export default vehicleInspectionReducer;
