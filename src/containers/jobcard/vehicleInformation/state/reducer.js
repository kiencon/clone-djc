import immutable from 'immutable';
import { CREATE_STATUS, DELETE_STATUS, UPDATE_STATUS } from '../../../../config/const';

import {
  CREATE_VEHICLE_INFORMATION_ERROR,
  CREATE_VEHICLE_INFORMATION_SUCCESS,
} from './action';

export const initialState = {
  vehicleInformation: {},
  effect: 0,
};

const init = () => {
  const initValue = immutable.fromJS({
    vehicleInformation: undefined,
    isLoading: undefined,
    create: undefined,
    update: undefined,
  });

  return initValue
    .set('vehicleInformation', {
      ...initialState,
    })
    .set('isLoading', false)
    .set('create', {
      status: CREATE_STATUS.DEFAULT,
      isLoading: false,
    })
    .set('update', {
      status: UPDATE_STATUS.DEFAULT,
      isLoading: false,
    });
};

const vehicleInformationReducer = (state = init(), action) => {
  switch (action.type) {
    case CREATE_VEHICLE_INFORMATION_SUCCESS: {
      const payload = action.payload || {};

      return state
        .update('vehicleInformation', stateList => updateBaseTokenTableReducer(stateList, payload))
        .set('isLoading', false);
    }

    case CREATE_VEHICLE_INFORMATION_ERROR:
      return state.set('isLoading', false);

    default:
      return state;
  }
}

export default vehicleInformationReducer;
