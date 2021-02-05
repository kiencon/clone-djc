import immutable from 'immutable';
import {
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

    default:
      return state;
  }
};

export default vehicleInspectionReducer;
