import immutable from 'immutable';
import {
  HANDLE_RELOAD_PAGE, LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from './action';

export const initialState = {
  loggedInformation: {},
};

const init = () => {
  const initValue = immutable.fromJS({
    loggedInformation: undefined,
    isLoading: undefined,
    effect: 0,
  });

  return initValue
    .set('loggedInformation', {
      ...initialState,
    })
    .set('isLoading', false);
};

const loggedInformationReducer = (state = init(), action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return state.set('isLoading', true);
    }

    case HANDLE_RELOAD_PAGE: {
      return state
        .update('loggedInformation', loggedInfo => ({
          ...loggedInfo,
          isLogged: true,
        }));
    }

    case LOGIN_ERROR: {
      return state
        .set('isLoading', false)
        .update('loggedInformation', loggedInfo => ({
          ...loggedInfo,
          isFailLogged: true,
          isLogged: undefined,
          effect: loggedInfo.effect + 1,
        }));
    }

    case LOGIN_SUCCESS: {
      console.log('reducer LOGIN_SUCCESS');
      localStorage.setItem('isLoggedD2Tyres', true);
      return state
        .set('isLoading', false)
        .update('loggedInformation', loggedInfo => ({
          ...loggedInfo,
          isLogged: true,
          isFailLogged: undefined,
          effect: loggedInfo.effect + 1,
        }));
    }

    case LOG_OUT: {
      localStorage.removeItem('isLoggedD2Tyres');
      return state
        .set('isLoading', false)
        .set('loggedInformation', { ...initialState });
    }

    default:
      return state;
  }
};

export default loggedInformationReducer;
