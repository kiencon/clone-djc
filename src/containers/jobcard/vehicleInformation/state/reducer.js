import immutable from 'immutable';
import {
  CLEAR_VEHICLE_INFORMATION_STATE, CREATE_VEHICLE_INFORMATION_ERROR,
  CREATE_VEHICLE_INFORMATION_REQUEST,
  CREATE_VEHICLE_INFORMATION_SUCCESS,
} from './action';

export const initialState = {
  vehicleInformation: {},
};

const init = () => {
  const initValue = immutable.fromJS({
    vehicleInformation: undefined,
  });

  return initValue
    .set('vehicleInformation', {
      ...initialState,
    });
};

const vehicleInformationReducer = (state = init(), action) => {
  switch (action.type) {
    case CREATE_VEHICLE_INFORMATION_REQUEST: {
      const { values } = action.payload;
      return state.set('vehicleInformation', {
        ...values,
      });
    }

    case CREATE_VEHICLE_INFORMATION_ERROR:
      return state;

    case CREATE_VEHICLE_INFORMATION_SUCCESS: {
      return state;
    }

    case CLEAR_VEHICLE_INFORMATION_STATE: {
      return state.set('vehicleInformation', { ...initialState });
    }

    default:
      return state;
  }
};

export default vehicleInformationReducer;
