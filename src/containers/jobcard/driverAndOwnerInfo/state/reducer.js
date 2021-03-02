import immutable from 'immutable';
import {
  CLEAR_DRIVER_OWNER_INFORMATION, CREATE_DRIVER_OWNER_INFORMATION_REQUEST,
} from './action';

const initialState = {
  driverAndOwnerInfo: {},
};

const init = () => {
  const initValue = immutable.fromJS({
    driverAndOwnerInfo: undefined,
  });

  return initValue
    .set('driverAndOwnerInfo', {
      ...initialState,
    });
};

const driverAndOwnerInfoReducer = (state = init(), action) => {
  switch (action.type) {
    case CREATE_DRIVER_OWNER_INFORMATION_REQUEST: {
      const { values } = action.payload;
      const id = `${values.companyName}-${new Date().getTime()}`;
      return state.set('driverAndOwnerInfo', {
        ...values,
        id,
      });
    }

    case CLEAR_DRIVER_OWNER_INFORMATION: {
      return state.set('driverAndOwnerInfo', { ...initialState });
    }

    default:
      return state;
  }
};

export default driverAndOwnerInfoReducer;
