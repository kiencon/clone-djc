import immutable from 'immutable';
import {
  CREATE_VEHICLE_INFORMATION_ERROR,
  CREATE_VEHICLE_INFORMATION_REQUEST,
  CREATE_VEHICLE_INFORMATION_SUCCESS,
} from './action';

export const initialState = {
  vehicleInformation: {},
  effect: 0,
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
      return state.set('isLoading', false);

    case CREATE_VEHICLE_INFORMATION_SUCCESS: {
      console.log('reducer CREATE_VEHICLE_INFORMATION_SUCCESS');
      console.log('action', action);
      return state;
    }

    default:
      return state;
  }
};

export default vehicleInformationReducer;
